import React from 'react'

export default function Footer() {
    return (
        <div className='w-full'>
            <div className='flex flex-col w-full'>
                <div className='flex flex-row w-full'>
                    <div className='flex flex-row w-1/2 justify-start'>
                        <div className='text-black text-base font-heads'>
                            Created and designed with 💜 by <a href="https://github.com/KartavyaSharma" className='hover:text-violet-500 hover:underline'>Kartavya Sharma</a>
                        </div>
                    </div>
                    <div className='flex flex-row w-1/2 justify-end'>
                        <div className='text-gray-400 font-heads text-base'>
                            <a href="https://github.com/KartavyaSharma/cowin-check/blob/master/LICENSE" target='_blank'>MIT License</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}