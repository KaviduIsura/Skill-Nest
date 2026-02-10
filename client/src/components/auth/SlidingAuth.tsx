"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "lucide-react";

interface SlidingAuthProps {
  initialMode?: "login" | "register";
}

export function SlidingAuth({ initialMode = "login" }: SlidingAuthProps) {
  const [isSignUp, setIsSignUp] = useState(initialMode === "register");

  // Sync state if initialMode changes
  useEffect(() => {
    setIsSignUp(initialMode === "register");
  }, [initialMode]);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl h-[700px] bg-card rounded-[30px] shadow-2xl overflow-hidden border border-border/50 flex">
        
        {/* Forms Container */}
        <div className="absolute inset-0 flex w-full h-full">
            {/* Login Form Side (Left) */}
            <div className={`w-full md:w-1/2 h-full flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isSignUp ? 'translate-x-full opacity-0 pointer-events-none' : 'translate-x-0 opacity-100'} bg-white z-10 md:z-auto`}>
                <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 group">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                         <Layout className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xl font-bold text-foreground">Skill Nest</span>
                </Link>
                <LoginForm onSwitch={toggleMode} />
            </div>

            {/* Register Form Side (Right) */}
            <div className={`w-full md:w-1/2 h-full flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isSignUp ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'} absolute right-0 bg-white z-10 md:z-auto`}>
                 <Link href="/" className="absolute top-8 right-8 flex items-center gap-2 group">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                         <Layout className="h-6 w-6 text-primary" />
                    </div>
                </Link>
                <RegisterForm onSwitch={toggleMode} />
            </div>
        </div>

        {/* Overlay Container (Hidden on Mobile) */}
        <div 
            className={`hidden md:block absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-50 ${isSignUp ? '-translate-x-full rounded-r-[30px] rounded-l-[30px]' : 'translate-x-0 rounded-l-[30px] rounded-r-[30px]'}`}
        >
            <div className={`relative w-[200%] h-full text-white bg-gradient-to-r from-primary to-secondary transition-transform duration-700 ease-in-out ${isSignUp ? 'translate-x-0' : '-translate-x-1/2'}`}>
                
                {/* Background Image / Pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="w-full h-full bg-[url('/hero-student.png')] bg-cover bg-center blur-sm"></div>
                </div>
                
                {/* Left Panel Content (Visible when Sign Up active -> shows "Welcome Back") */}
                <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-1/2 h-full px-12 text-center space-y-6">
                    <h1 className="text-4xl font-bold">Welcome Back!</h1>
                    <p className="text-lg text-white/90">
                        To keep connected with us please login with your personal info
                    </p>
                    <button 
                        onClick={toggleMode}
                        className="px-10 py-3 border-2 border-white rounded-full font-semibold uppercase tracking-wide hover:bg-white hover:text-primary transition-all shadow-lg backdrop-blur-sm"
                    >
                        Sign In
                    </button>
                    <Image src="/hero-student.png" alt="Student" width={200} height={200} className="absolute bottom-0 left-10 opacity-50 pointer-events-none drop-shadow-2xl" />
                </div>

                {/* Right Panel Content (Visible when Login active -> shows "Hello, Friend") */}
                <div className="absolute top-0 right-0 flex flex-col items-center justify-center w-1/2 h-full px-12 text-center space-y-6">
                    <h1 className="text-4xl font-bold">Hello, Friend!</h1>
                    <p className="text-lg text-white/90">
                        Enter your personal details and start journey with us
                    </p>
                    <button 
                         onClick={toggleMode}
                         className="px-10 py-3 border-2 border-white rounded-full font-semibold uppercase tracking-wide hover:bg-white hover:text-secondary transition-all shadow-lg backdrop-blur-sm"
                    >
                        Sign Up
                    </button>
                    <Image src="/hero-student.png" alt="Student" width={200} height={200} className="absolute bottom-0 right-10 opacity-50 pointer-events-none drop-shadow-2xl scale-x-[-1]" />
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
