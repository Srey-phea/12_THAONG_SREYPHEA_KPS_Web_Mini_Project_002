'use client'
import { useEffect, useState } from 'react';

const UserProfileComponent = ({userInfo}) => {
  const [userData, setUserData] = useState({
    username: 'Monster',
    email: 'dghdj@gmail.com',
    profile: 'https://i.pinimg.com/236x/2e/25/c9/2e25c981428a73a41e82d68a3f6d591a.jpg',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // console.log('first', userData)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        // const data = await userInformationService();
        // console.log("Fetched User Data:", data);
  
        const payload = userInfo.payload || userInfo || {}; // Ensure the payload is correctly extracted
  
        console.log('first', payload)
        setUserData({
          username: payload.username || 'Monster',
          email: payload.email || 'dghdj@gmail.com',
          profile: payload.profile || 'https://i.pinimg.com/236x/2e/25/c9/2e25c981428a73a41e82d68a3f6d591a.jpg',
        });
      } catch (err) {
        setError('Failed to fetch user data');
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='flex gap-5 px-10'>
      <img src="notification-bing.svg" alt="notification" />
      <img 
        src={userData.profile}
        alt="profile" 
        width={50} 
        height={13} 
        className='rounded-4xl'
      />
      <div className="flex flex-col">
        <h3 className='text-lg text-[#1E293B]'>{userData.username}</h3>
        <p className='text-[#009990] text-ms'>{userData.email}</p>
      </div>
    </div>
  );
};

export default UserProfileComponent;