"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MoreVertical, PlayCircle } from "lucide-react";

interface CourseCardProps {
    title: string;
    category: string;
    image: string;
    progress?: number; // 0-100
    instructor?: string;
    enrolledCount?: number;
    rating?: number;
    role: 'student' | 'teacher' | 'admin';
}

export function CourseCard({ title, category, image, progress, instructor, enrolledCount, rating, role }: CourseCardProps) {
    return (
        <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50">
            <div className="relative h-40 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white text-muted-foreground">
                        <MoreVertical className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {category}
                    </span>
                    {role === 'teacher' && enrolledCount && (
                        <span className="text-xs text-muted-foreground">{enrolledCount} Students</span>
                    )}
                    {role === 'student' && instructor && (
                        <span className="text-xs text-muted-foreground">by {instructor}</span>
                    )}
                </div>

                <h3 className="font-bold text-base line-clamp-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                {role === 'student' && progress !== undefined && (
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                            <span>Progress</span>
                            <span className="font-medium">{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                    </div>
                )}

                {role === 'teacher' && rating && (
                    <div className="text-sm text-muted-foreground">
                        Rating: <span className="text-foreground font-medium">{rating}</span> ⭐
                    </div>
                )}
            </CardContent>

            <CardFooter className="p-4 pt-0">
                {role === 'student' ? (
                    <Button className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground">
                        <PlayCircle className="h-4 w-4" />
                        Continue Learning
                    </Button>
                ) : (
                    <Button variant="outline" className="w-full">
                        Manage Course
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
