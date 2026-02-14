"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Loader2 } from "lucide-react";

interface LoginFormProps {
  onSwitch?: () => void;
}

export function LoginForm({ onSwitch }: LoginFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      if (email === 'admin@test.com') {
        router.push('/admin');
      } else if (email === 'teacher@test.com') {
        router.push('/teacher');
      } else if (email === 'student@test.com') {
        router.push('/student');
      } else {
        // For demo, just alert or maybe default to student if unsure, but better to be explicit
        alert("Demo Login: Try admin@test.com, teacher@test.com, or student@test.com (Password: any)");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="w-full max-w-md space-y-8 px-4 sm:px-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Welcome Back</h2>
        <p className="text-muted-foreground">Enter your details to sign in to your account</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="mail@example.com"
            type="email"
            required
            className="bg-background/50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="#" className="text-sm text-primary hover:text-primary/80 font-medium">Forgot Password?</Link>
          </div>
          <Input
            id="password"
            type="password"
            required
            className="bg-background/50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 shadow-md">
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Sign In"}
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <Button variant="outline" type="button" className="w-full border-border h-11 hover:bg-secondary/10 flex items-center gap-2">
          <FcGoogle className="h-5 w-5" />
          Sign in with Google
        </Button>

        <div className="text-center mt-4 md:hidden">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <button type="button" onClick={onSwitch} className="text-primary font-bold hover:underline">
              Sign Up
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
