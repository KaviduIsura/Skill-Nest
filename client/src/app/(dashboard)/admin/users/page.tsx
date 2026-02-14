"use client";

import { UserTable } from "@/components/dashboard/UserTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function UsersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
                    <p className="text-muted-foreground">Manage students, teachers, and admins.</p>
                </div>
                <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add User
                </Button>
            </div>

            <UserTable />
        </div>
    );
}
