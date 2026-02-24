// ============================================================
// NEAchievers PWA — TypeScript Types
// ============================================================

export type UserRole = 'admin' | 'student' | 'parent';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  phone?: string;
  role: UserRole;
  createdAt: string;
  linkedStudentIds?: string[]; // For parents
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  thumbnailURL: string;
  price: number;
  originalPrice?: number;
  category: string;
  tags: string[];
  level: 'Beginner' | 'Intermediate' | 'Expert' | 'All Levels';
  instructorName: string;
  instructorId: string;
  isLive: boolean;
  isPublished: boolean;
  totalLessons: number;
  totalDuration: string;
  enrolledCount: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

export interface CourseContent {
  id: string;
  courseId: string;
  title: string;
  type: 'video' | 'pdf' | 'note' | 'quiz';
  url: string;
  duration?: string;
  order: number;
  sectionTitle: string;
}

export interface Enrollment {
  id: string;
  studentId: string;
  courseId: string;
  enrolledAt: string;
  progress: number; // 0-100
  completedLessons: string[];
  lastAccessedAt: string;
}

export interface MockTest {
  id: string;
  title: string;
  description: string;
  courseId?: string;
  category: string;
  totalQuestions: number;
  duration: number; // minutes
  isPublished: boolean;
  createdAt: string;
}

export interface MockTestQuestion {
  id: string;
  testId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  order: number;
}

export interface MockTestAttempt {
  id: string;
  testId: string;
  studentId: string;
  answers: Record<string, number>;
  score: number;
  totalQuestions: number;
  startedAt: string;
  completedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  thumbnailURL?: string;
  authorName: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  courseCount: number;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
  isRead: boolean;
}
