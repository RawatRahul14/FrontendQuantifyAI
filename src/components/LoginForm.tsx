import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add authentication logic here
    navigate('/home')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 via-30% animate-gradient-flow">
      <div className="relative mt-12 max-w-md mx-auto isolate rounded-xl md:mt-16 w-full">
        <motion.figure 
          className="bg-gray-800/90 backdrop-blur-3xl border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
          initial={{ y: 120, opacity: 0, filter: "blur(5px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0)" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "backInOut" }}
        >
          <Card className="max-w-md w-full space-y-8 p-8 bg-transparent border-none">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Welcome Back
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Sign in to your QuantityAI account
              </p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email address
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-100 placeholder-gray-400 transition-all"
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-100 placeholder-gray-400 transition-all pr-10"
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-400 transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full bg-blue-600 hover:bg-blue-500 text-white transition-colors duration-300"
                type="submit"
              >
                Sign in
              </Button>

              <div className="text-center text-sm">
                <Link
                  to="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Forgot your password?
                </Link>
              </div>
            </form>
          </Card>
        </motion.figure>

        {/* Background effects */}
        <motion.div 
          className="absolute bg-blue-900/20 inset-5 blur-[50px] -z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "backInOut" }}
        />
        <motion.div 
          className="absolute inset-0 bg-indigo-900/20 blur-[200px] scale-y-75 scale-x-125 rounded-full -z-10"
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.5, ease: "backOut" }}
        />
      </div>
    </div>
  )
}