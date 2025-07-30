
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const navigate = useNavigate();
  const password = watch("password"); // subscribe to password field :contentReference[oaicite:0]{index=0}
  const confirmPassword = watch("confirmPassword");

  const onSubmit = async (data) => {
    console.log("Signup data:", data);
    // TODO: API call to register user
    await new Promise((r) => setTimeout(r, 800));
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg p-8 space-y-6 w-full max-w-md"
      >
        
        <h2 className="text-3xl font-bold text-center text-green-600">
          Sign Up
        </h2>
        

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            {...register("name", { required: "Full name is required" })}
            className="mt-1 w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-green-400"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            className="mt-1 w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-green-400"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "At least 6 characters" },
            })}
            type="password"
            className="mt-1 w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-green-400"
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", {
              required: "Please confirm password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            type="password"
            className="mt-1 w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-green-400"
            placeholder="••••••••"
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Password Match Indicator */}
        {password && confirmPassword && (
          <p
            className={`text-sm ${
              password === confirmPassword ? "text-green-600" : "text-red-600"
            }`}
          >
            {password === confirmPassword
              ? "✔️ Passwords match"
              : "⚠️ Passwords do not match"}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold"
        >
          {isSubmitting ? "Creating account..." : "Sign Up"}
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
