import { useState } from "react";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Demo credentials
  const DEMO_EMAIL = "admin@projectsync.ai";
  const DEMO_PASSWORD = "Admin@123";

  function submit(e) {
    e.preventDefault();

    setError("");

    // Check credentials
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      // Save login status
      localStorage.setItem("projectsync_logged_in", "true");
      localStorage.setItem("projectsync_user", email);

      // Go to dashboard/home page
      navigate("/");
    } else {
      setError("Invalid email/username or password.");
    }
  }

  return (
    <div className="flex min-h-screen bg-white">

      {/* LEFT SIDE */}
      <div className="hidden w-1/2 bg-gradient-to-br from-[#092442] via-[#0c3b65] to-[#0a6a9a] p-12 text-white lg:flex lg:flex-col lg:justify-end">
        <div className="max-w-lg">

          <div className="mb-5 flex items-center gap-2 text-sm font-semibold">
            <ShieldCheck />
            ProjectSync AI
          </div>

          <h1 className="text-4xl font-bold">
            Smarter Progress.
            <br />
            Better Decisions.
          </h1>

          <p className="mt-4 text-slate-200">
            AI-powered activity capture and schedule linking for
            infrastructure projects.
          </p>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full items-center justify-center p-6 lg:w-1/2">

        <form onSubmit={submit} className="w-full max-w-md">

          <div className="mb-8">
            <div className="text-2xl font-bold text-slate-800">
              Welcome Back!
            </div>

            <div className="mt-1 text-sm text-slate-500">
              Sign in to continue to your project
            </div>
          </div>

          {/* EMAIL */}
          <label className="mb-2 block text-sm font-semibold">
            Email / Username
          </label>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="text"
            className="mb-5 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Enter your email or username"
          />

          {/* PASSWORD */}
          <label className="mb-2 block text-sm font-semibold">
            Password
          </label>

          <div className="relative mb-4">

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type={show ? "text" : "password"}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 pr-12 outline-none focus:border-blue-500"
              placeholder="Enter password"
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-3 text-slate-400"
            >
              {show ? (
                <EyeOff size={19} />
              ) : (
                <Eye size={19} />
              )}
            </button>

          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* REMEMBER / FORGOT */}
          <div className="mb-6 flex justify-between text-xs">

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </button>

          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Sign In
          </button>

          {/* DEMO CREDENTIALS */}
          <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4">

            <p className="mb-2 text-sm font-semibold text-blue-800">
              Demo Credentials
            </p>

            <p className="text-xs text-blue-700">
              Email: <strong>admin@projectsync.ai</strong>
            </p>

            <p className="mt-1 text-xs text-blue-700">
              Password: <strong>Admin@123</strong>
            </p>

          </div>

        </form>

      </div>
    </div>
  );
}
