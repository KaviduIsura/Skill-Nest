"use client";

import { teacherStats, getTeacherCourses } from "@/lib/dummy-data";
import { StatCard } from "@/components/dashboard/StatCard";
import { CourseCard } from "@/components/dashboard/CourseCard";
import { Users, Star, DollarSign, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TeacherOverviewPage() {
    const icons = [Users, Star, DollarSign];
    const myCourses = getTeacherCourses('u2'); // Sarah Teacher

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h1>
                    <p className="text-muted-foreground">Manage your courses and track student progress.</p>
                </div>
                <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    New Course
                </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {teacherStats.map((stat, index) => (
                    <StatCard
                        key={stat.label}
                        label={stat.label}
                        value={stat.value}
                        change={stat.change}
                        icon={icons[index]}
                    />
                ))}
            </div>

            {/* My Courses */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold tracking-tight">My Courses</h2>
                    <Button variant="link">View All</Button>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {myCourses.map(course => (
                        <CourseCard
                            key={course.id}
                            title={course.title}
                            category={course.category}
                            image={course.image}
                            enrolledCount={course.enrolledCount}
                            rating={course.rating}
                            role="teacher"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
