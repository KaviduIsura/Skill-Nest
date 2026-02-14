"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    LayoutDashboard,
    Users,
    BookOpen,
    Settings,
    BarChart,
    FileText,
    GraduationCap,
    LogOut,
    PlusCircle,
    ClipboardList
} from "lucide-react";
import Image from "next/image";

interface SidebarProps {
    role: 'admin' | 'teacher' | 'student';
}

export function Sidebar({ role }: SidebarProps) {
    const pathname = usePathname();

    const commonLinks = [
        { href: `/${role}`, label: 'Dashboard', icon: LayoutDashboard },
    ];

    const roleLinks = {
        admin: [
            { href: '/admin/users', label: 'Users', icon: Users },
            { href: '/admin/courses', label: 'All Courses', icon: BookOpen },
            { href: '/admin/analytics', label: 'Analytics', icon: BarChart },
            { href: '/admin/settings', label: 'Settings', icon: Settings },
        ],
        teacher: [
            { href: '/teacher/courses', label: 'My Courses', icon: BookOpen },
            { href: '/teacher/create-course', label: 'Add New Course', icon: PlusCircle },
            { href: '/teacher/assignments', label: 'Assignments', icon: FileText },
            { href: '/teacher/students', label: 'My Students', icon: Users },
        ],
        student: [
            { href: '/student/courses', label: 'My Courses', icon: BookOpen },
            { href: '/student/assignments', label: 'Assignments', icon: ClipboardList },
            { href: '/student/progress', label: 'My Progress', icon: BarChart },
        ]
    };

    const links = [...commonLinks, ...roleLinks[role]];

    return (
        <div className="hidden border-r bg-card/60 md:block w-64 h-screen sticky top-0 overflow-y-auto">
            <div className="flex h-20 items-center justify-center border-b px-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                        <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">Skill<span className="text-primary">Nest</span></span>
                </Link>
            </div>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <div className="space-y-1">
                        {links.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                >
                                    <Button
                                        variant={pathname === link.href ? "secondary" : "ghost"}
                                        className={cn(
                                            "w-full justify-start gap-2",
                                            pathname === link.href && "bg-secondary/10 text-secondary hover:bg-secondary/20"
                                        )}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {link.label}
                                    </Button>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 left-0 w-full px-6">
                <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10">
                    <LogOut className="h-4 w-4" />
                    Sign Out
                </Button>
            </div>
        </div>
    );
}
