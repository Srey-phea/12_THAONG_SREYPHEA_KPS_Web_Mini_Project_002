'use client'
import { updateFavByWorkspaceId } from '@/app/action/userAction'
import { updateFavById } from '@/app/service/workspace.service'
import React from 'react'

const DetailCardComponent =  ({workspaceId}) => {
  
  const handleFav = () => {
    updateFavByWorkspaceId(workspaceId, true);

  }
  return (
    <div className='flex pl-20 justify-between mt-5'>
        <h3 className='font-bold text-3xl'>HRD Design</h3>
        <button onClick={handleFav} className=' w-[35px] h-[34px] rounded-xl'>
          <img src="/star.svg" alt="more" className="w-[33px] h-[33px]" />
        </button>
        
    </div>
  )
}

export default DetailCardComponent