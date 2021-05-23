import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async'
import Select from 'react-select'

const axios = require('axios').default
const optionsData = require('../data/data.js')

const defaultParams = {
    baseUrl: "https://cdn-api.co-vin.in/api/v2/",
    metadataBase: "admin/location/",
    metaDistrictBase: "districts/",
}

async function getStateData() {
    try {
        const response = await axios.get(
            `${defaultParams.baseUrl}${defaultParams.metadataBase}states`
        );
        const stateData = response.data.states;
        const responseArray = stateData.map(obj => ({ label: obj.state_name, value: obj.state_id }))
        return responseArray;
    } catch (error) {
        return error.response;
    }
}

async function getDistrictData(stateSelection) {
    try {
        const response = await axios.get(
            `${defaultParams.baseUrl}${defaultParams.metadataBase}${defaultParams.metaDistrictBase}${stateSelection}`
        )
        const districtData = response.data.districts;
        const responseArray = districtData.map(obj => ({ label: obj.district_name, value: obj.district_id }))
        return responseArray
    } catch (error) {
        return error.response
    }
}

export default function InputForm() {


    const [isLoadingState, setIsLoadingState] = useState(true)
    const [isLoadingDist, setIsLoadingDist] = useState(true)

    const [defaultStateData, setDefaultStates] = useState([]);
    const [selectedState, setSelectedState] = useState(false);

    const [defaultDistrictData, setDefaultDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState(false);

    // const [stateCallbackData, setStateCallbackData] = useState([])
    // const [stateInputValue, setStateInputValue] = useState("")

    // const [distCallbackData, setDistCallbackData] = useState([])
    // const [distInputValue, setDistInputValue] = useState("")

    // async function loadStateCallback(inputValue, callback) {
    //     setStateInputValue(inputValue);
    //     loadState();
    //     const callbackData = stateCallbackData;
    //     callback(callbackData);
    // }

    // async function loadDistrictCallback(inputValue, callback) {
    //     setDistInputValue(inputValue);
    //     loadDistrict();
    //     const callbackData = distCallbackData;
    //     callback(callbackData);
    // }

    // async function loadState() {
    //     try {
    //         getStateData().then((res) => {
    //             const filterResults = res.filter(i => {
    //                 return i.label.toLowerCase().includes(stateInputValue.toLowerCase())
    //             })
    //             setStateCallbackData(filterResults);
    //         });
    //     } catch (error) {
    //         setStateCallbackData([error.response])
    //     }
    // }
    
    // async function loadDistrict() {
    //     try {
    //         getDistrictData(selectedState.value).then((res) => {
    //             const filterResults = res.filter(i => {
    //                 return i.label.toLowerCase().includes(distInputValue.toLowerCase())
    //             })
    //             setDistCallbackData(filterResults);
    //         });
    //     } catch (error) {
    //         setDistCallbackData(error.response)
    //     }
    // }

    useEffect(() => {
        getStateData().then((res) => {
            setDefaultStates(res);
            setIsLoadingState(false);
        })

        getDistrictData(selectedState.value).then((res) => {
            setDefaultDistricts(res);
            setIsLoadingDist(false);
        })

    }, [selectedState])

    const [day, setDay] = useState(null);
    const [month, setMonth] = useState(null);
    const [year, setYear] = useState(null);

    console.log(day, month, year)
    console.log(selectedDistrict)

    return (
        <div className='w-full'>
            <div className='bg-white shadow-xl rounded-lg w-4/5 p-5'>
                <div className='font-head text-2xl text-black font-semibold mb-5'>
                    Enter your details
                </div>
                <div className='z-50'>
                    <AsyncSelect
                        placeholder="Select a state"
                        defaultOptions={defaultStateData}
                        isSearchable={false}
                        // loadOptions={loadStateCallback}
                        isLoading={isLoadingState}
                        className='w-full'
                        onChange={(value) => {setSelectedState(value)}}
                    />
                    <AsyncSelect 
                        placeholder="Select a district"
                        defaultOptions={defaultDistrictData}
                        isSearchable={false}
                        // loadOptions={loadDistrictCallback}
                        isLoading={isLoadingDist}
                        className='w-full mt-5'
                        isDisabled={!selectedState}
                        onChange={(value) => {setSelectedDistrict(value)}}
                    />
                </div>
                <div className='font-head text-lg text-black font-semibold mt-5'>
                    Enter a date
                </div>
                <div className='mt-2 outlinew-none flex flex-row items-center w-full'>
                    <Select
                        placeholder="Day"
                        options={optionsData.dayOptions}
                        className='w-1/3 mr-2'
                        onChange={(value) => {setDay(value)}}
                    />
                    <Select
                        placeholder="Month"
                        options={optionsData.monthOptions}
                        className='w-1/3 mx-2'
                        onChange={(value) => {setMonth(value)}}
                    />
                    <Select
                        placeholder="Year"
                        options={optionsData.yearOptions}
                        className='w-1/3 ml-2'
                        onChange={(value) => {setYear(value)}}
                    />
                </div>
                <div className='mt-8 flex flex-row w-full'>
                    <button className='px-3 py-2 border border-gray-300 hover:bg-violet-200 group rounded-md shadow-md font-heads font-semibold w-2/3'>
                        <span className='text-opacity-70 group-hover:text-violet-500 text-black'>Get session data</span>
                    </button>
                    <div className='w-full flex flex-row justify-end items-center'>
                        <span class="flex h-3 w-3">
                            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-purple-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                        </span>
                        <div className='font-head text-base opacity-80 ml-2 font-semibold'>Live</div>
                    </div>
                </div>
            </div>
        </div>
    )
}