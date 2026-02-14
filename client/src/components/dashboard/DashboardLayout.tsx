"use client";

import { Sidebar } from "./Sidebar";
import { Navbar } from "@/components/landing-page/Navbar"; // Reusing the styled Navbar
import { Role } from "@/lib/dummy-data";

interface DashboardLayoutProps {
    children: React.ReactNode;
    role: Role;
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar role={role} />
            <div className="flex-1 flex flex-col">
                {/* We pass a prop to Navbar to indicate it's in dashboard mode with a logged-in user */}
                {/* Since I can't easily modify Navbar props without breaking landing page, I'll likely rely on client-side state or a context in a real app. 
            For this demo, I'll modify Navbar to inspect a 'user' prop or similar, OR I'll handle the logic inside Navbar to check for 'dashboard' context.
            However, the prompt asked to use the Navbar. 
            I will modify Navbar.tsx next to accept an optional 'user' prop or similar.
        */}
                <Navbar userRole={role} />
                <main className="flex-1 p-6 md:p-8 pt-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
