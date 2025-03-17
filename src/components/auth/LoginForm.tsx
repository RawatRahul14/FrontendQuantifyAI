import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Eye, EyeOff } from 'lucide-react'
import { auth } from './firebaseConfig'
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showResetDialog, setShowResetDialog] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  const [resetStatus, setResetStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/home')
    } catch (error: any) {
      handleLoginError(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleLoginError = (error: any) => {
    let errorMessage = 'Login failed. Please try again.'
    switch (error.code) {
      case 'auth/invalid-credential':
        errorMessage = 'Invalid email or password'
        break
      case 'auth/user-not-found':
        errorMessage = 'No account found with this email'
        break
      case 'auth/wrong-password':
        errorMessage = 'Incorrect password'
        break
      case 'auth/too-many-requests':
        errorMessage = 'Too many attempts. Try again later'
        break
      default:
        errorMessage = error.message
    }
    setError(errorMessage)
  }

  const handlePasswordReset = async () => {
    setResetStatus(null)
    if (!resetEmail) {
      setResetStatus({ message: 'Please enter your email address', type: 'error' })
      return
    }

    try {
      await sendPasswordResetEmail(auth, resetEmail)
      setResetStatus({
        message: 'Password reset email sent! Check your inbox.',
        type: 'success'
      })
      setTimeout(() => setShowResetDialog(false), 2000)
    } catch (error: any) {
      setResetStatus({
        message: getResetErrorMessage(error),
        type: 'error'
      })
    }
  }

  const getResetErrorMessage = (error: any) => {
    switch (error.code) {
      case 'auth/user-not-found':
        return 'No account found with this email'
      case 'auth/invalid-email':
        return 'Invalid email address'
      default:
        return 'Failed to send reset email. Please try again.'
    }
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
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setError('')
                    }}
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
                      onChange={(e) => {
                        setPassword(e.target.value)
                        setError('')
                      }}
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

              {error && (
                <div className="text-red-400 text-sm text-center">
                  {error}
                </div>
              )}

              <Button 
                className="w-full bg-blue-600 hover:bg-blue-500 text-white transition-colors duration-300 disabled:opacity-50"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing In...' : 'Sign in'}
              </Button>

              <div className="text-center text-sm space-y-2">
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setResetEmail(email)
                      setShowResetDialog(true)
                    }}
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    Forgot your password?
                  </button>
                </div>
                <div>
                  <span className="text-gray-400">Don't have an account? </span>
                  <Link
                    to="/signup"
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </form>
          </Card>
        </motion.figure>

        {/* Password Reset Dialog */}
        <Dialog open={showResetDialog} onOpenChange={setShowResetDialog}>
          <DialogContent className="bg-gray-800/90 backdrop-blur-3xl border border-gray-700 rounded-xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Reset Password
              </DialogTitle>
              <DialogDescription className="text-gray-400 mt-2">
                Enter your email to receive a password reset link
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <input
                className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-100 placeholder-gray-400 transition-all"
                type="email"
                placeholder="email@example.com"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
              
              {resetStatus && (
                <div className={`text-sm text-center ${
                  resetStatus.type === 'success' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {resetStatus.message}
                </div>
              )}

              <Button
                className="w-full bg-blue-600 hover:bg-blue-500 text-white transition-colors duration-300"
                onClick={handlePasswordReset}
              >
                Send Reset Link
              </Button>
            </div>
          </DialogContent>
        </Dialog>

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