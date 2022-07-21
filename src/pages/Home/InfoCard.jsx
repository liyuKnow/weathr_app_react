import React from 'react'

const InfoCard = ({icon, title, info}) => {
  return (
    <div className='bg-gray-600 px-3 py-2 rounded-[10px]'>
        <div className="grid grid-cols-3 gap-4">
            <div className="">
                <div className="w-full h-full flex justify-center align-middle items-center font-bold">
                    {icon}
                </div>
            </div>
            <div className="col-span-2">
            <h2 className='text-1xl flex-wrap font-medium'>{title}</h2>
            <h1 className='text-2xl font-bold'>{info}</h1>
            </div>
        </div>
    </div>
  )
}

export default InfoCard