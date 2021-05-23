import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/layout/Layout'
import InputForm from './components/InputForm'
// import GetSessionData from './components/SessionList'
import './styles/index.css';
import Hero from './assets/hero'


export default function IndexPage() {
    // const state = "Madhya Pradesh";
    // const district = "Indore";
    // const date = "23-05-2021";
    const [state, setState] = useState(undefined)
    const [district, setDistrict] = useState(undefined)
    const [date, setDate] = useState(undefined)

    console.log(state, district, date)

    return (
        <div className='bg-violet-50 min-h-screen'>
            <div className='pt-8 md:pt-12 lg:pt-16 lg:pb-5 px-6 md:px-8 lg:px-12 xl:px-36 2xl:px-56 max-w-screen-2xl w-full mx-auto'>
                <div className='font-head flex flex-row items-center'>
                    <div className='text-4xl w-1/2'>
                        <span className='font-bold'>COWIN</span> <span className='italic'>Updates</span>
                    </div>
                    <div className='flex flex-row justify-end w-full'>
                        <div className='font-head opacity-80 text-lg'>About</div>
                    </div>
                </div>
            </div>
            <div className='md:pt-12 lg:pt-5 xl:pt-7 2xl:pt-28 lg:pb-15 px-6 md:px-8 lg:px-12 xl:px-36 2xl:px-56 max-w-screen-2xl w-full mx-auto'>
                <div className='flex flex-col items-center justify-center max-w-full h-2/3'>
                    <div className='mt-10 flex flex-row items-center'>
                        <div className='w-full'>
                            <InputForm onChange={(state, district, date) => {
                                setState(state)
                                setDistrict(district)
                                setDate(date)
                            }}/>
                        </div>
                        <Hero />
                    </div>
                </div>
                {/* <GetSessionData state={"Madhya Pradesh"} district={"Indore"} date={"23-05-2021"}/> */}
            </div>
        </div>
    )
}

ReactDOM.render(<IndexPage />, document.getElementById('root'));

