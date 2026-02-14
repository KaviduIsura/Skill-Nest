"use client";

import { studentStats, getStudentCourses, getStudentAssignments } from "@/lib/dummy-data";
import { StatCard } from "@/components/dashboard/StatCard";
import { CourseCard } from "@/components/dashboard/CourseCard";
import { BookOpen, Clock, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StudentOverviewPage() {
    const icons = [BookOpen, Clock, Award];
    const myCourses = getStudentCourses('u3'); // John Student
    const assignment = getStudentAssignments('u3');

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">My Learning</h1>
                <p className="text-muted-foreground">Welcome back, John! You have 2 assignments pending.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {studentStats.map((stat, index) => (
                    <StatCard
                        key={stat.label}
                        label={stat.label}
                        value={stat.value}
                        icon={icons[index]}
                    />
                ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Enrolled Courses - Takes up 2/3 */}
                <div className="lg:col-span-2 space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Courses in Progress</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {myCourses.map(course => (
                            <CourseCard
                                key={course.id}
                                title={course.title}
                                category={course.category}
                                image={course.image}
                                progress={course.progress}
                                instructor={course.instructorName}
                                role="student"
                            />
                        ))}
                    </div>
                </div>

                {/* Upcoming Assignments - Takes up 1/3 */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold tracking-tight">Upcoming Assignments</h2>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">This Week</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {assignment.filter(a => a.status === 'Pending').map(a => (
                                <div key={a.id} className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0">
                                    <div className="space-y-1">
                                        <p className="font-medium text-sm line-clamp-1">{a.title}</p>
                                        <p className="text-xs text-muted-foreground">{a.courseTitle}</p>
                                        <div className="flex items-center gap-1 text-xs text-orange-600">
                                            <Calendar className="h-3 w-3" />
                                            <span>Due {a.dueDate}</span>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="text-[10px] bg-orange-50 text-orange-600 border-orange-200">Pending</Badge>
                                </div>
                            ))}
                            {assignment.length === 0 && <p className="text-sm text-muted-foreground">No pending assignments.</p>}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
