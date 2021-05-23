import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async'

const axios = require('axios').default

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

    const [stateCallbackData, setStateCallbackData] = useState([])
    const [stateInputValue, setStateInputValue] = useState("")

    const [distCallbackData, setDistCallbackData] = useState([])
    const [distInputValue, setDistInputValue] = useState("")

    async function loadStateCallback(inputValue, callback) {
        setStateInputValue(inputValue);
        loadState();
        const callbackData = stateCallbackData;
        callback(callbackData);
    }

    async function loadDistrictCallback(inputValue, callback) {
        setDistInputValue(inputValue);
        loadDistrict();
        const callbackData = distCallbackData;
        callback(callbackData);
    }

    async function loadState() {
        try {
            getStateData().then((res) => {
                const filterResults = res.filter(i => {
                    return i.label.toLowerCase().includes(stateInputValue.toLowerCase())
                })
                setStateCallbackData(filterResults);
            });
        } catch (error) {
            setStateCallbackData([error.response])
        }
    }
    
    async function loadDistrict() {
        try {
            getDistrictData(selectedState.value).then((res) => {
                const filterResults = res.filter(i => {
                    return i.label.toLowerCase().includes(distInputValue.toLowerCase())
                })
                setDistCallbackData(filterResults);
            });
        } catch (error) {
            setDistCallbackData(error.response)
        }
    }

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

    return (
        <div className='w-full'>
            <div>{selectedState.label}</div>
            <AsyncSelect
                placeholder="Select a state"
                defaultOptions={defaultStateData}
                isSearchable={false}
                // loadOptions={loadStateCallback}
                isLoading={isLoadingState}
                className='w-1/2'
                onChange={(value) => {setSelectedState(value)}}
            />
            <div>{selectedDistrict.label}</div>
            <AsyncSelect 
                placeholder="Select a district"
                defaultOptions={defaultDistrictData}
                isSearchable={false}
                // loadOptions={loadDistrictCallback}
                isLoading={isLoadingDist}
                className='w-1/2'
                isDisabled={!selectedState}
                onChange={(value) => {setSelectedDistrict(value)}}
            />
        </div>
    )
}