"use client";

import { adminStats } from "@/lib/dummy-data";
import { StatCard } from "@/components/dashboard/StatCard";
import { Users, BookOpen, DollarSign } from "lucide-react";

export default function AdminOverviewPage() {
    const icons = [Users, BookOpen, DollarSign];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
                <p className="text-muted-foreground">Overview of your platform's performance.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {adminStats.map((stat, index) => (
                    <StatCard
                        key={stat.label}
                        label={stat.label}
                        value={stat.value}
                        change={stat.change}
                        icon={icons[index]}
                    />
                ))}
            </div>

            {/* Recent Activity Placeholder */}
            <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="font-semibold leading-none tracking-tight">Recent Activity</h3>
                    <p className="text-sm text-muted-foreground">Latest actions across the platform.</p>
                </div>
                <div className="p-6 pt-0">
                    <div className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                                <div className="h-2 w-2 rounded-full bg-primary" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">New user registration</p>
                                    <p className="text-xs text-muted-foreground">Just now</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
