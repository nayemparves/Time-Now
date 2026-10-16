'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { useCart } from "@/lib/cart-store"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import { User, Mail, Lock } from "lucide-react"

export function LoginModal() {
  const { isLoginOpen, closeLogin } = useCart()
  const { toast } = useToast()
  const [mode, setMode] = useState<"login" | "signup">("login")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: mode === "login" ? "Login successful" : "Account created",
      description:
        mode === "login"
          ? "Welcome back to Time Now!"
          : "Your account has been created. Welcome to Time Now!",
    })
    closeLogin()
  }

  return (
    <Dialog open={isLoginOpen} onOpenChange={(o) => !o && closeLogin()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-black text-center">
            {mode === "login" ? "Login to Your Account" : "Create New Account"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {mode === "login"
              ? "Access your orders, wishlist and faster checkout"
              : "Join Time Now for exclusive offers and faster checkout"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === "signup" && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                required
                placeholder="Full Name"
                className="w-full h-11 pl-10 pr-3 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:border-black"
              />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              required
              type="email"
              placeholder="Email Address"
              className="w-full h-11 pl-10 pr-3 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:border-black"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              required
              type="password"
              placeholder="Password"
              className="w-full h-11 pl-10 pr-3 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:border-black"
            />
          </div>

          {mode === "login" && (
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-neutral-600">
                <input type="checkbox" className="accent-red-600" />
                Remember me
              </label>
              <button
                type="button"
                onClick={() =>
                  toast({
                    title: "Password reset",
                    description: "Reset link sent to your email (demo).",
                  })
                }
                className="text-red-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full h-11 bg-black hover:bg-red-600 text-white rounded-full text-sm font-bold transition-colors"
          >
            {mode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-neutral-600">
          {mode === "login" ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="text-red-600 font-semibold hover:underline"
          >
            {mode === "login" ? "Sign Up" : "Login"}
          </button>
        </p>
      </DialogContent>
    </Dialog>
  )
}
