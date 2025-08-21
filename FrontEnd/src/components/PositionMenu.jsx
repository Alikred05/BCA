import React from 'react'
import { positionData } from '../assets/assets'
import {Link} from 'react-router-dom'

const PositionMenu = () => {
  return (
    <div id='position' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
        <h1 className='text-3xl font-medium'>Find by Position</h1>
        <p className='sm:w-1/2 text-center text-sm'>Simply browse through our profiles and give us the feedback you want.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {positionData.map((item,index)=>(
                <Link className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/members/${item.position}`}>
                    <img src={item.image} alt=''/>
                    <p>{item.position}</p>

                </Link>
            ))}
        </div>
    </div>
  )
}

export default PositionMenu
