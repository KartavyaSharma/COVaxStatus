import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import AsyncSelect from 'react-select/async'

const axios = require('axios').default

const defaultParams = {
    baseUrl: "https://cdn-api.co-vin.in/api/v2/",
    metadataBase: "admin/location/",
    metaDistrictBase: "districts/",
}

async function loadState(inputValue, callback) {
    try {
        const response = await axios.get(
            `${defaultParams.baseUrl}${defaultParams.metadataBase}states`
        );
        const stateData = response.data.states;
        const responseArray = stateData.map(obj => ({ label: obj.state_name, value: obj.state_name }))
        const filterResults = responseArray.filter(i => {
            return i.label.toLowerCase().includes(inputValue.toLowerCase())
        })
        callback(filterResults)
    } catch (error) {
        callback([error.response])
    }
}

async function defaultStates() {
    try {
        const response = await axios.get(
            `${defaultParams.baseUrl}${defaultParams.metadataBase}states`
        );
        const stateData = response.data.states;
        const responseArray = stateData.map(obj => ({ label: obj.state_name, value: obj.state_name }))
        return responseArray
    } catch (error) {
        return error.response
    }
}

export default function InputForm() {

    const [isLoading, setIsLoading] = useState(true)
    const [defaultStateData, setDefaultStates] = useState([])

    useEffect(() => {
        defaultStates().then((res) => {
            setDefaultStates(res);
            setIsLoading(false);
        })
    }, [])

    return (
        <AsyncSelect
            defaultOptions={defaultStateData}
            loadOptions={loadState}
            isLoading={isLoading}
            className='w-full'
        />
    )
}