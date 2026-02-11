"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";

interface RegisterFormProps {
  onSwitch?: () => void;
}

export function RegisterForm({ onSwitch }: RegisterFormProps) {
  return (
    <div className="w-full max-w-md space-y-6 px-4 sm:px-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Create Account</h2>
        <p className="text-muted-foreground">Join us to start your learning journey</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" required className="bg-background/50" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" required className="bg-background/50" />
            </div>
        </div>
        
        <div className="space-y-2">
            <Label htmlFor="reg-email">Email</Label>
            <Input id="reg-email" placeholder="mail@example.com" type="email" required className="bg-background/50" />
        </div>
        
        <div className="space-y-2">
            <Label htmlFor="reg-password">Password</Label>
            <Input id="reg-password" type="password" required className="bg-background/50" />
        </div>

        <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" required className="bg-background/50" />
        </div>
        
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 shadow-md">
            Sign Up
        </Button>
        
        <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
        </div>

        <Button variant="outline" className="w-full border-border h-11 hover:bg-secondary/10 flex items-center gap-2">
            <FcGoogle className="h-5 w-5" />
            Sign up with Google
        </Button>

        <div className="text-center mt-4 md:hidden">
            <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <button onClick={onSwitch} className="text-primary font-bold hover:underline">
                    Sign In
                </button>
            </p>
        </div>
      </div>
    </div>
  );
}
