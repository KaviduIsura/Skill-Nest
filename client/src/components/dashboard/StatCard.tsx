"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
    label: string;
    value: string | number;
    change?: string;
    icon?: LucideIcon;
    className?: string;
}

export function StatCard({ label, value, change, icon: Icon, className }: StatCardProps) {
    return (
        <Card className={cn("overflow-hidden", className)}>
            <CardContent className="p-6 flex items-center justify-between">
                <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{label}</p>
                    <div className="flex items-baseline gap-2">
                        <h2 className="text-3xl font-bold">{value}</h2>
                        {change && (
                            <span className={cn(
                                "text-xs font-medium px-2 py-0.5 rounded-full",
                                change.startsWith('+') ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                            )}>
                                {change}
                            </span>
                        )}
                    </div>
                </div>
                {Icon && (
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
