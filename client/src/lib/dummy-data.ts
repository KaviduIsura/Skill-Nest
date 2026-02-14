
export type Role = 'admin' | 'teacher' | 'student';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  joinedDate: string;
}

export interface Course {
  id: string;
  title: string;
  instructorId: string;
  instructorName: string;
  category: string;
  enrolledCount: number;
  rating: number;
  image: string;
  price: number;
  progress?: number; // 0-100 for students
  status: 'Active' | 'Draft' | 'Archived';
}

export interface Assignment {
  id: string;
  courseId: string;
  courseTitle: string;
  title: string;
  dueDate: string;
  status: 'Pending' | 'submitted' | 'Graded';
  grade?: string;
}

export interface Stat {
  label: string;
  value: string | number;
  change?: string; // e.g. "+12%"
  icon?: any;
}

// --- DUMMY USERS ---
export const users: User[] = [
  { id: 'u1', name: 'Admin User', email: 'admin@test.com', role: 'admin', joinedDate: '2023-01-01' },
  { id: 'u2', name: 'Sarah Teacher', email: 'teacher@test.com', role: 'teacher', joinedDate: '2023-03-15', avatar: '/avatars/teacher1.png' },
  { id: 'u3', name: 'John Student', email: 'student@test.com', role: 'student', joinedDate: '2023-06-10', avatar: '/avatars/student1.png' },
  { id: 'u4', name: 'Emily Davis', email: 'emily@school.com', role: 'student', joinedDate: '2023-07-20' },
  { id: 'u5', name: 'Michael Brown', email: 'michael@tech.com', role: 'teacher', joinedDate: '2023-02-28' },
];

// --- DUMMY COURSES ---
export const courses: Course[] = [
  { 
    id: 'c1', 
    title: 'Complete Web Development Bootcamp', 
    instructorId: 'u2', 
    instructorName: 'Sarah Teacher', 
    category: 'Development', 
    enrolledCount: 1250, 
    rating: 4.8, 
    price: 89.99,
    image: '/course-1.jpg',
    status: 'Active'
  },
  { 
    id: 'c2', 
    title: 'Advanced React Patterns', 
    instructorId: 'u2', 
    instructorName: 'Sarah Teacher', 
    category: 'Development', 
    enrolledCount: 850, 
    rating: 4.9, 
    price: 120.00,
    image: '/course-2.jpg',
    status: 'Active'
  },
  { 
    id: 'c3', 
    title: 'UI/UX Design Masterclass', 
    instructorId: 'u5', 
    instructorName: 'Michael Brown', 
    category: 'Design', 
    enrolledCount: 2100, 
    rating: 4.7, 
    price: 95.00,
    image: '/course-3.jpg',
    status: 'Active'
  },
  { 
    id: 'c4', 
    title: 'Data Science Fundamentals', 
    instructorId: 'u5', 
    instructorName: 'Michael Brown', 
    category: 'Data Science', 
    enrolledCount: 500, 
    rating: 4.5, 
    price: 150.00,
    image: '/course-1.jpg', // Reusing placeholder
    status: 'Draft' 
  },
  { 
    id: 'c5', 
    title: 'Digital Marketing 101', 
    instructorId: 'u2', 
    instructorName: 'Sarah Teacher', 
    category: 'Marketing', 
    enrolledCount: 3200, 
    rating: 4.6, 
    price: 49.99,
    image: '/course-2.jpg',
    status: 'Archived'
  },
];

// --- STUDENT ENROLLMENTS (simulated by adding progress to courses for specific user) ---
// In a real app, this would be a separate relation table. 
// For UI demo, we'll return a modified list of courses for the student.

export const getStudentCourses = (studentId: string): Course[] => {
  // Simulating that 'student@test.com' is enrolled in c1, c3
  if (studentId === 'u3') {
    return [
      { ...courses[0], progress: 75 },
      { ...courses[2], progress: 30 },
    ];
  }
  return [];
};

export const getTeacherCourses = (teacherId: string): Course[] => {
  return courses.filter(c => c.instructorId === teacherId);
};


// --- ASSIGNMENTS ---
export const assignments: Assignment[] = [
  { id: 'a1', courseId: 'c1', courseTitle: 'Web Dev Bootcamp', title: 'Build a Portfolio Website', dueDate: '2023-10-15', status: 'Pending' },
  { id: 'a2', courseId: 'c1', courseTitle: 'Web Dev Bootcamp', title: 'JavaScript Quiz', dueDate: '2023-10-10', status: 'submitted', grade: '90/100' },
  { id: 'a3', courseId: 'c3', courseTitle: 'UI/UX Design', title: 'Wireframe Prototype', dueDate: '2023-11-01', status: 'Pending' },
];

export const getStudentAssignments = (studentId: string): Assignment[] => {
  if (studentId === 'u3') return assignments;
  return [];
};


// --- ANALYTICS ---
export const adminStats: Stat[] = [
  { label: 'Total Users', value: 1250, change: '+12%' },
  { label: 'Total Courses', value: 45, change: '+5%' },
  { label: 'Total Revenue', value: '$124,500', change: '+8%' },
];

export const teacherStats: Stat[] = [
  { label: 'Total Students', value: 450, change: '+24 this month' },
  { label: 'Average Rating', value: 4.8, change: 'Top 5%' },
  { label: 'Course Sales', value: '$12,400', change: '+15%' },
];

export const studentStats: Stat[] = [
  { label: 'Courses in Progress', value: 2 },
  { label: 'Assignments Pending', value: 2 },
  { label: 'Certificates Earned', value: 1 },
];
