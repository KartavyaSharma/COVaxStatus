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
            <Layout>
                <div className='font-head flex flex-row items-center'>
                    <div className='text-4xl w-1/2'>
                        <span className='font-bold'>COWIN</span> <span className='italic'>Updates</span>
                    </div>
                    <div className='flex flex-row justify-end w-full'>
                        <div className='font-head opacity-80 text-lg'>About</div>
                    </div>
                </div>
            </Layout>
            <Layout>
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
                {/* <GetSessionData state={"Madhya Pradesh"} district={"Indore"} date={"23-05-2021"}/> */}
            </Layout>
        </div>
    )
}

ReactDOM.render(<IndexPage />, document.getElementById('root'));

