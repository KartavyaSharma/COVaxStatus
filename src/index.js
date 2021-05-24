import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/layout/Layout'
import InputForm from './components/InputForm'
import GetSessionData from './components/SessionList'
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
            <Layout>
                <div className='font-head flex flex-row items-center'>
                    <div className='text-4xl w-1/2'>
                        <span className='font-bold' >COWIN</span><span className='italic'>Updates</span>
                    </div>
                    <div className='flex flex-row justify-end w-full'>
                        <div className='font-head opacity-80 text-lg'>About</div>
                    </div>
                </div>
                <div className='mt-10 lg:mt-15 2xl:mt-20 font-heads text-black text-4xl font-bold w-2/3'>
                    Get the latest <span className='text-green-400'>appointment</span> data for <span className='text-violet-400'>vaccination</span> centers near you.
                </div>
                <div className='flex flex-col items-center justify-center max-w-full h-2/3'>
                    <div className='mt-10 flex flex-col md:flex-row items-start justify-start w-full lg:mb-36 2xl:mb-0'>
                        <div className='w-2/3'>
                            <InputForm getFormState = {(state, district, date) => {
                                setState(state)
                                setDistrict(district)
                                setDate(date)
                            }}/>
                        </div>
                        <Hero />
                    </div>
                </div>
                {/* <GetSessionData state={"Maharashtra"} district={"Wardha"} date={"24-05-2021"}/> */}
            </Layout>
        </div>
    )
}

ReactDOM.render(<IndexPage />, document.getElementById('root'));

