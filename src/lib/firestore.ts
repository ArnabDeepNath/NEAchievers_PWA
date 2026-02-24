import {
    collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc,
    query, where, orderBy, limit, startAfter,
    DocumentData, QueryConstraint, setDoc, increment
} from 'firebase/firestore';
import { db } from './firebase';
import type { Course, UserProfile, Enrollment, BlogPost, Category, MockTest, ContactMessage } from '@/types';

// ============================================================
// Generic CRUD helpers
// ============================================================

async function getDocument<T>(collectionName: string, docId: string): Promise<T | null> {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as T;
    }
    return null;
}

async function getDocuments<T>(
    collectionName: string,
    constraints: QueryConstraint[] = []
): Promise<T[]> {
    const q = query(collection(db, collectionName), ...constraints);
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() } as T));
}

async function createDocument(collectionName: string, data: DocumentData, customId?: string) {
    if (customId) {
        await setDoc(doc(db, collectionName, customId), data);
        return customId;
    }
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
}

async function updateDocument(collectionName: string, docId: string, data: Partial<DocumentData>) {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, data);
}

async function deleteDocument(collectionName: string, docId: string) {
    await deleteDoc(doc(db, collectionName, docId));
}

// ============================================================
// User operations
// ============================================================

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
    return getDocument<UserProfile>('users', uid);
}

export async function createUserProfile(uid: string, data: Omit<UserProfile, 'uid'>) {
    return createDocument('users', { ...data, uid }, uid);
}

export async function updateUserProfile(uid: string, data: Partial<UserProfile>) {
    return updateDocument('users', uid, data);
}

// ============================================================
// Course operations
// ============================================================

export async function getCourses(constraints: QueryConstraint[] = []): Promise<Course[]> {
    return getDocuments<Course>('courses', constraints);
}

export async function getPublishedCourses(): Promise<Course[]> {
    return getCourses([where('isPublished', '==', true), orderBy('createdAt', 'desc')]);
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
    const courses = await getCourses([where('slug', '==', slug), limit(1)]);
    return courses[0] || null;
}

export async function getCourseById(id: string): Promise<Course | null> {
    return getDocument<Course>('courses', id);
}

export async function createCourse(data: Omit<Course, 'id'>) {
    return createDocument('courses', data);
}

export async function updateCourse(id: string, data: Partial<Course>) {
    return updateDocument('courses', id, data);
}

export async function deleteCourse(id: string) {
    return deleteDocument('courses', id);
}

// ============================================================
// Enrollment operations
// ============================================================

export async function getStudentEnrollments(studentId: string): Promise<Enrollment[]> {
    return getDocuments<Enrollment>('enrollments', [
        where('studentId', '==', studentId),
        orderBy('enrolledAt', 'desc'),
    ]);
}

export async function enrollStudent(data: Omit<Enrollment, 'id'>) {
    return createDocument('enrollments', data);
}

export async function updateEnrollmentProgress(enrollmentId: string, data: Partial<Enrollment>) {
    return updateDocument('enrollments', enrollmentId, data);
}

// ============================================================
// Category operations
// ============================================================

export async function getCategories(): Promise<Category[]> {
    return getDocuments<Category>('categories', [orderBy('name', 'asc')]);
}

export async function createCategory(data: Omit<Category, 'id'>) {
    return createDocument('categories', data);
}

// ============================================================
// Blog operations
// ============================================================

export async function getBlogPosts(onlyPublished = true): Promise<BlogPost[]> {
    const constraints: QueryConstraint[] = [orderBy('createdAt', 'desc')];
    if (onlyPublished) constraints.unshift(where('isPublished', '==', true));
    return getDocuments<BlogPost>('blogs', constraints);
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
    const posts = await getDocuments<BlogPost>('blogs', [where('slug', '==', slug), limit(1)]);
    return posts[0] || null;
}

export async function createBlogPost(data: Omit<BlogPost, 'id'>) {
    return createDocument('blogs', data);
}

export async function updateBlogPost(id: string, data: Partial<BlogPost>) {
    return updateDocument('blogs', id, data);
}

export async function deleteBlogPost(id: string) {
    return deleteDocument('blogs', id);
}

// ============================================================
// Mock Test operations
// ============================================================

export async function getMockTests(onlyPublished = true): Promise<MockTest[]> {
    const constraints: QueryConstraint[] = [orderBy('createdAt', 'desc')];
    if (onlyPublished) constraints.unshift(where('isPublished', '==', true));
    return getDocuments<MockTest>('mockTests', constraints);
}

// ============================================================
// Contact operations
// ============================================================

export async function submitContactMessage(data: Omit<ContactMessage, 'id' | 'isRead'>) {
    return createDocument('contactMessages', { ...data, isRead: false });
}

export async function getContactMessages(): Promise<ContactMessage[]> {
    return getDocuments<ContactMessage>('contactMessages', [orderBy('createdAt', 'desc')]);
}
