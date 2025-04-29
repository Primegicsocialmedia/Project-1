import React from "react";

const SignInSignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-135 from-blue-950 via-blue-900   to-blue-800 p-8">
      <div className="@container max-w-md w-full p-8 bg-blue-950/30 rounded-2xl shadow-[0_20px_50px_rgba(0,_29,_61,_0.7)] backdrop-blur-xl border border-blue-800/50">
        <div className="absolute inset-0  rounded-2xl bg-gradient-to-br from-blue-800/20 to-transparent  "></div>
        <div className="relative">
          <h2 className="text-3xl text-extrabold text-center text-yellow-300 mb-2 tracking-tight">
            Create an Account
          </h2>
          <p className="text-blue-200 text-center mb-8">
            Join our community today
          </p>
          <form className="mt-8 space-y-5">
            <div className="group">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 bg-blue-900/30 rounded-xl border border-blue-700/50 text-white placeholder-blue-300/50 outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all"
              />
            </div>
            <div className="group">
              <input
                type="Email"
                placeholder="Email Address"
                className="w-full p-4 bg-blue-900/30 rounded-xl border border-blue-700/50 text-white placeholder-blue-300/50 outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all"
              />
            </div>
            <div className="group">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 bg-blue-900/30 rounded-xl border border-blue-700/50 text-white placeholder-blue-300/50 outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all"
              />
            </div>
            <button className="group w-full p-4 mt-6 bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-950 rounded-xl font-bold shadow-lg hover:shadow-yellow-400/40 overflow-hidden transform transform-style-3d hover:-translate-y-.5 hover:scale-105 hover:translate-z-20 transition-all duration-300 relative">
              <span className="relative z-10 pointer-events-none">
                Create Account
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
