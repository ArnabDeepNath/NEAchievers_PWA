'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    User,
    updateProfile,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { getUserProfile, createUserProfile } from '@/lib/firestore';
import type { UserRole, UserProfile } from '@/types';

interface AuthContextType {
    user: User | null;
    userProfile: UserProfile | null;
    role: UserRole | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, name: string, role: UserRole) => Promise<void>;
    loginWithGoogle: (role?: UserRole) => Promise<void>;
    logout: () => Promise<void>;
    refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [role, setRole] = useState<UserRole | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchProfile = useCallback(async (firebaseUser: User) => {
        try {
            const profile = await getUserProfile(firebaseUser.uid);
            if (profile) {
                setUserProfile(profile);
                setRole(profile.role);
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            setUser(firebaseUser);
            if (firebaseUser) {
                await fetchProfile(firebaseUser);
            } else {
                setUserProfile(null);
                setRole(null);
            }
            setLoading(false);
        });

        // Safety timeout: if onAuthStateChanged never fires (Firebase not configured),
        // still show the Log In / Sign Up buttons after 3 seconds
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => {
            unsubscribe();
            clearTimeout(timeout);
        };
    }, [fetchProfile]);

    const login = async (email: string, password: string) => {
        const cred = await signInWithEmailAndPassword(auth, email, password);
        await fetchProfile(cred.user);
    };

    const register = async (email: string, password: string, name: string, role: UserRole) => {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(cred.user, { displayName: name });
        await createUserProfile(cred.user.uid, {
            email,
            displayName: name,
            role,
            createdAt: new Date().toISOString(),
        });
        await fetchProfile(cred.user);
    };

    const loginWithGoogle = async (defaultRole: UserRole = 'student') => {
        const provider = new GoogleAuthProvider();
        const cred = await signInWithPopup(auth, provider);
        const existingProfile = await getUserProfile(cred.user.uid);
        if (!existingProfile) {
            await createUserProfile(cred.user.uid, {
                email: cred.user.email || '',
                displayName: cred.user.displayName || '',
                photoURL: cred.user.photoURL || undefined,
                role: defaultRole,
                createdAt: new Date().toISOString(),
            });
        }
        await fetchProfile(cred.user);
    };

    const logout = async () => {
        await signOut(auth);
        setUser(null);
        setUserProfile(null);
        setRole(null);
    };

    const refreshProfile = async () => {
        if (user) await fetchProfile(user);
    };

    return (
        <AuthContext.Provider
            value={{ user, userProfile, role, loading, login, register, loginWithGoogle, logout, refreshProfile }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
