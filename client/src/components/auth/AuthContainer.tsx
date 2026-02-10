"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Layout, Facebook, Mail, Chrome } from "lucide-react"; // Replaced Twitter/Instagram with more generic auth icons
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthContainerProps {
  defaultIsLogin?: boolean;
}

export function AuthContainer({ defaultIsLogin = true }: AuthContainerProps) {
  const [isLogin, setIsLogin] = useState(defaultIsLogin);

  const toggleAuth = () => setIsLogin(!isLogin);

  const variants = {
    login: { x: 0 },
    register: { x: "100%" },
  };

  const overlayVariants = {
    login: { x: 0 }, // Starts on the right side logic is tricky with CSS layout, let's use absolute positioning
    register: { x: "-100%" },
  };

  // We'll use a container with relative positioning
  // Animation Logic:
  // We have a container.
  // Left Side: Login Form (Visible when isLogin)
  // Right Side: Register Form (Visible when !isLogin)
  // Overlay: Slides over the one NOT active. 
  // Wait, standard sliding auth:
  // | Login Form | Register Form |
  // Overlay is 50% width.
  // State 1 (Login): Overlay covers Register Form (Right). Login Form (Left) is seen.
  // State 2 (Register): Overlay slides to Left. Register Form (Right) is seen.
  
  // Actually, usually it's:
  // | Login Form | Register Form |  <-- This layout implies both are "underneath"
  // Overlay slides on top.
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFF9F5] p-4">
      <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden relative w-full max-w-[1000px] min-h-[600px] flex">
        
        {/* Forms Container */}
        {/* We place Layout absolute or grid? */}
        {/* Let's try 2 columns, but we need them to be full width in mobile maybe? The request emphasized sliding panel, implying desktop primarily */}
        
        {/* Login Form Container - Left Side */}
        <div className="absolute top-0 left-0 h-full w-1/2 flex flex-col items-center justify-center p-12 transition-all duration-500 z-10">
             <form className={`flex flex-col items-center w-full max-w-sm space-y-4 transition-opacity duration-500 ${isLogin ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <h1 className="text-3xl font-bold text-foreground mb-4">Sign In to Skill Nest</h1>
                <div className="flex gap-4 mb-4">
                     <Button variant="outline" size="icon" className="rounded-full border-border"><Chrome className="w-4 h-4" /></Button>
                     <Button variant="outline" size="icon" className="rounded-full border-border"><Facebook className="w-4 h-4" /></Button>
                     <Button variant="outline" size="icon" className="rounded-full border-border"><Mail className="w-4 h-4" /></Button>
                </div>
                <span className="text-muted-foreground text-sm">or use your email account</span>
                
                <div className="w-full space-y-2 text-left">
                     <Label htmlFor="login-email">Email</Label>
                     <Input id="login-email" type="email" placeholder="Email" className="bg-gray-50" />
                </div>
                <div className="w-full space-y-2 text-left">
                     <Label htmlFor="login-password">Password</Label>
                     <Input id="login-password" type="password" placeholder="Password" className="bg-gray-50" />
                </div>
                
                <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors py-2">Forgot your password?</Link>
                
                <Button className="rounded-full px-12 py-6 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">Sign In</Button>
             </form>
        </div>

        {/* Register Form Container - Right Side */}
        {/* We position it absolute right, or just left 50%? */}
        {/* If we put it on the right side (left: 50%), then overlay needs to start on right and move left. */}
        <div className="absolute top-0 left-1/2 h-full w-1/2 flex flex-col items-center justify-center p-12 transition-all duration-500 z-10">
             <form className={`flex flex-col items-center w-full max-w-sm space-y-4 transition-opacity duration-500 ${!isLogin ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <h1 className="text-3xl font-bold text-foreground mb-4">Create Account</h1>
                <div className="flex gap-4 mb-4">
                     <Button variant="outline" size="icon" className="rounded-full border-border"><Chrome className="w-4 h-4" /></Button>
                     <Button variant="outline" size="icon" className="rounded-full border-border"><Facebook className="w-4 h-4" /></Button>
                     <Button variant="outline" size="icon" className="rounded-full border-border"><Mail className="w-4 h-4" /></Button>
                </div>
                <span className="text-muted-foreground text-sm">or use your email for registration</span>
                
                 <div className="w-full space-y-2 text-left">
                     <Label htmlFor="register-name">Name</Label>
                     <Input id="register-name" type="text" placeholder="Name" className="bg-gray-50" />
                </div>
                <div className="w-full space-y-2 text-left">
                     <Label htmlFor="register-email">Email</Label>
                     <Input id="register-email" type="email" placeholder="Email" className="bg-gray-50" />
                </div>
                <div className="w-full space-y-2 text-left">
                     <Label htmlFor="register-password">Password</Label>
                     <Input id="register-password" type="password" placeholder="Password" className="bg-gray-50" />
                </div>
                
                <Button className="rounded-full px-12 py-6 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 mt-4">Sign Up</Button>
             </form>
        </div>

        {/* Overlay Container */}
        {/* 
            State isLogin = true (default):
            - Overlay should be on the RIGHT (covering Register form).
            - CSS: content should be on right. translateX(0) if base is right?
            
            State isLogin = false:
            - Overlay slides to LEFT (covering Login form).
            - CSS: translateX(-100%)
         */}
        <motion.div 
            className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-20"
            initial={false}
            animate={{ x: isLogin ? 0 : "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <div className="relative -left-[100%] h-full w-[200%] bg-gradient-to-r from-primary to-secondary text-white transform translate-x-0 transition-transform duration-500 ease-in-out">
                {/* Because the parent container moves, we need the background to move in reverse or be static relative to screen? 
                    Actually, the standard sliding panel implementation:
                    The "Overlay" div moves. Inside it, we have the two "Panel" contents side-by-side but we shift them so the correct one is visible?
                    
                    Approach:
                    Overlay Container is 50% width.
                    Inside, we have a Double-Width (200%) div that slides inside the moving container to keep background consistent or change it.
                */}
                
                <motion.div 
                    className="absolute top-0 flex h-full w-full justify-center items-center"
                    animate={{ x: isLogin ? 0 : "50%" }} // This moves the inner content relative to the sliding window
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    {/* Left Panel Content (Visible when Overlay is on Left => !isLogin => Register Mode?? No wait)
                        If Overlay is on Left, it covers Login Form. We want to show "Welcome Back" to prompt user to Login.
                        So Left Panel = "Welcome Back" -> Click to Sign In.
                    */}
                    <div className="w-1/2 h-full flex flex-col items-center justify-center px-12 text-center space-y-6">
                         <h1 className="text-4xl font-bold">Welcome Back!</h1>
                         <p className="text-lg text-white/90">To keep connected with us please login with your personal info</p>
                         <Button 
                            variant="outline" 
                            className="rounded-full px-12 py-6 text-lg border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary transition-colors"
                            onClick={() => setIsLogin(true)}
                        >
                            Sign In
                         </Button>
                    </div>

                    {/* Right Panel Content (Visible when Overlay is on Right => isLogin => Login Mode)
                        If Overlay is on Right, it covers Register Form. We want to show "Hello, Friend" to prompt user to Sign Up.
                    */}
                    <div className="w-1/2 h-full flex flex-col items-center justify-center px-12 text-center space-y-6">
                         <h1 className="text-4xl font-bold">Hello, Friend!</h1>
                         <p className="text-lg text-white/90">Enter your personal details and start journey with us</p>
                         <Button 
                            variant="outline" 
                            className="rounded-full px-12 py-6 text-lg border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary transition-colors"
                            onClick={() => setIsLogin(false)}
                        >
                            Sign Up
                         </Button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
      </div>

       {/* Mobile Fallback (Hidden on Desktop, Visible on Mobile) */}
       {/* Implementing purely via CSS media queries might be tough with this structure. 
           For this specific task of "Sliding Auth", it's usually a desktop-first UI pattern. 
           I will add a simple mobile view override logic or just rely on responsive utilities?
           The absolute positioning might break on mobile. 
           Let's add a "md:hidden" normal flow layout.
       */}
    </div>
  );
}
