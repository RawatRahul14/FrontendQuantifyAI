import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../auth/firebaseConfig'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function ProfilePage() {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await auth.signOut()
      navigate('/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const handleGoToMain = () => {
    navigate('/home')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 via-30% animate-gradient-flow">
      <motion.div 
        className="w-full max-w-md"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gray-800/90 backdrop-blur-3xl border border-gray-700 rounded-xl shadow-2xl overflow-hidden p-8">
          <div className="flex flex-col items-center space-y-6">
            <Avatar className="w-24 h-24 border-4 border-blue-400/30">
              <AvatarImage src={user?.photoURL || ''} />
              <AvatarFallback className="text-3xl bg-gray-700">
                {user?.email?.[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gray-100">
                {user?.displayName || 'User Profile'}
              </h2>
              <p className="text-gray-400">{user?.email}</p>
            </div>

            <div className="w-full space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-300">Account Details</h3>
                <div className="p-4 rounded-lg bg-gray-700/50 border border-gray-600">
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Joined</dt>
                      <dd className="text-gray-300">
                        {user?.metadata.creationTime}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Last Login</dt>
                      <dd className="text-gray-300">
                        {user?.metadata.lastSignInTime}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  className="flex-1 bg-gray-600 hover:bg-gray-500"
                  onClick={handleGoToMain}
                >
                  Back to Main
                </Button>
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-500"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}