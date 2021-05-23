import React from 'react'

export default function Layout({ children }) {
    return (
        <div className='pt-8 md:pt-12 lg:pt-5 xl:pt-15 lg:pb-15 px-6 md:px-8 lg:px-12 xl:px-36 2xl:px-56 max-w-screen-2xl w-full mx-auto'>
            {children}
        </div>
    )
}