"use client";

import Link from "next/link";
import { useForm } from "@tanstack/react-form";
import { Lock } from "lucide-react";

export function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      // Handle form submission
      console.log("Submitted credentials:", value);
    },
  });

  return (
    <div className="w-full max-w-[380px]">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Sign in
        </h1>
        <p className="mt-1.5 text-sm text-slate-500">
          Access the platform admin console.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-5"
      >
        {/* Email Field */}
        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) => {
              if (!value) return "Email is required";
              if (!/\S+@\S+\.\S+/.test(value)) return "Enter a valid email address";
              return undefined;
            },
          }}
        >
          {(field) => (
            <div>
              <label
                htmlFor={field.name}
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Work email
              </label>
              <input
                id={field.name}
                name={field.name}
                type="email"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="you@platform.com"
                className="w-full rounded-sm border border-[#cfe5d6] bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-[#10543A] focus:ring-2 focus:ring-[#10543A]/15"
              />
              {field.state.meta.errors.length > 0 && field.state.meta.isTouched && (
                <p className="mt-1 text-xs text-red-500">
                  {field.state.meta.errors.join(", ")}
                </p>
              )}
            </div>
          )}
        </form.Field>

        {/* Password Field */}
        <form.Field
          name="password"
          validators={{
            onChange: ({ value }) => {
              if (!value) return "Password is required";
              if (value.length < 6) return "Password must be at least 6 characters";
              return undefined;
            },
          }}
        >
          {(field) => (
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor={field.name}
                  className="block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-[#156e42] hover:text-[#0e4429] transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id={field.name}
                name={field.name}
                type="password"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-sm  border border-[#cfe5d6] bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-[#10543A] focus:ring-2 focus:ring-[#10543A]/15"
              />
              {field.state.meta.errors.length > 0 && field.state.meta.isTouched && (
                <p className="mt-1 text-xs text-red-500">
                  {field.state.meta.errors.join(", ")}
                </p>
              )}
            </div>
          )}
        </form.Field>

        {/* Submit Button */}
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className="w-full rounded-sm bg-[#156e42] hover:bg-[#10543A] text-white py-3 text-sm font-semibold transition-all duration-200 shadow-sm active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          )}
        </form.Subscribe>

        {/* Security badge / Footer note */}
        <div className="pt-2 flex items-center justify-center gap-1.5 text-xs text-slate-500">
          <Lock className="size-3.5 text-slate-400 stroke-[2.2]" />
          <span>Protected by SSO and 2-factor verification</span>
        </div>
      </form>
    </div>
  );
}
