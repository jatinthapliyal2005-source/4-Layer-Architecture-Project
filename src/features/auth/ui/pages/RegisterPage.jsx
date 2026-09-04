import React from "react";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { UseAuth } from "../../hooks/UseAuth";



const RegisterPage = () => {

   let { navigate,
        register,
        handleSubmit,
        errors,
        reset,
        
        handleRegister} = UseAuth()
    
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      {/* Background effects */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />

      {/* Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
        {/* Icon */}
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/30">
          <User size={25} className="text-white" />
        </div>

        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Create an account to get started
          </p>
        </div>

        <form onSubmit={handleSubmit(handleRegister)}  className="space-y-4">
          {/* Name */}
          <div>
            <label className="mb-1.5 block text-sm text-slate-300">
              Full Name
            </label>

            <div className="relative">
              <User
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                {...register("name",{
                    required:"Name is required",
                })}
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 py-3 pl-11 pr-4 text-white outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-1.5 block text-sm text-slate-300">
              Email
            </label>

            <div className="relative">
              <Mail
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
              {...register("email",{
                    required:"Email is required",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address"
                    }
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 py-3 pl-11 pr-4 text-white outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-1.5 block text-sm text-slate-300">
              Password
            </label>

            <div className="relative">
              <Lock
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
              {...register("password",{
                    required:"Password is required",
                    minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
                    }
                })}
                type="password"
                placeholder="Create a password"
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 py-3 pl-11 pr-4 text-white outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-500 active:scale-[0.98]"
          >
            Create Account
            <ArrowRight
              size={19}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </form>

        {/* Login */}
        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <button className="font-semibold text-blue-400 hover:underline"
          onClick={()=>navigate("/")}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;