import React from 'react';
import ReactDOM from 'react-dom';

import GetSessionData from './components/SessionList'
import './styles/index.css';

export default function IndexPage() {
    const state = "Madhya Pradesh";
    const district = "Indore";
    const date = "23-05-2021";
    return (
        <div className='bg-violet-50 min-h-screen'>
            <div className='pt-8 md:pt-12 lg:pt-16 lg:pb-24 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-36 max-w-screen-2xl w-full mx-auto font-head flex flex-row items-center'>
            	<div className='text-4xl w-1/2'>
            		<span className='font-bold'>COWIN</span> <span className='italic'>Updates</span>
            	</div>
            	<div className='flex flex-row justify-end w-full'>
	            	<div className='font-head opacity-80 text-lg'>About</div>
	            </div>
            </div>
        </div>
    )
}

ReactDOM.render(<IndexPage />, document.getElementById('root'));

