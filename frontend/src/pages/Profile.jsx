import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'
import { toast } from 'react-toastify'

const Profile = () => {
  const { backendUrl, token } = useContext(ShopContext)
  const [userData, setUserData] = useState(null)

  const fetchProfile = async () => {
    try {
      if (!token) return
      const response = await axios.get(backendUrl + '/api/user/profile', {
        headers: { token }
      })
      if (response.data.success) {
        setUserData(response.data.user)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [token])

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'PROFILE'} />
      </div>
      <div className='max-w-lg mx-auto mt-10'>
        {userData ? (
          <div className='flex flex-col items-center gap-6 border border-gray-200 shadow-lg p-8 rounded-xl bg-white'>
            {/* Avatar */}
            <div className='w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-3xl font-bold uppercase'>
              {userData.name ? userData.name.charAt(0) : 'U'}
            </div>

            {/* Info */}
            <div className='w-full flex flex-col gap-5'>
              <div className='border-b pb-4'>
                <p className='text-xs text-gray-400 uppercase tracking-wider mb-1'>Full Name</p>
                <p className='text-xl font-semibold text-gray-800'>{userData.name}</p>
              </div>
              <div className='border-b pb-4'>
                <p className='text-xs text-gray-400 uppercase tracking-wider mb-1'>Email Address</p>
                <p className='text-xl font-semibold text-gray-800'>{userData.email}</p>
              </div>
              <div className='border-b pb-4'>
                <p className='text-xs text-gray-400 uppercase tracking-wider mb-1'>Member Since</p>
                <p className='text-xl font-semibold text-gray-800'>
                  {new Date().toDateString()}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex justify-center items-center h-48'>
            <p className='text-gray-500 text-lg animate-pulse'>Loading profile...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile

