import React, { useState, useEffect } from 'react'

const axios = require('axios').default;

const defaultParams = {
    baseUrl: "https://cdn-api.co-vin.in/api/v2/",
    metadataBase: "admin/location/",
    metaDistrictBase: "districts/",
    appointmentBase: "appointment/sessions/public/findByDistrict"
}

export default function GetSessionData({ state, district, date }) {

    const queryParams = {
        param_state: state,
        param_district: district,
    }

    const [district_data, set_district_data] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        async function getStateId(stateName) {
            try {
                const response = await axios.get(
                    `${defaultParams.baseUrl}${defaultParams.metadataBase}states`
                )
                const stateData = response.data.states;
                let matchedId = "";
                for (var i = 0; i < stateData.length; i++) {
                    const { state_id, state_name } = stateData[i];
                    if (state_name === stateName) matchedId = state_id;
                }
                return matchedId;
            } catch (error) {
                return await error;
            }
        }
        
        async function getDistrictId(stateId, districtName) {
            try {
                const response = await axios.get(
                    `${defaultParams.baseUrl}${defaultParams.metadataBase}${defaultParams.metaDistrictBase}${stateId}`
                )
                const districtData = response.data.districts;
                let matchedId = "";
                for (var i = 0; i < districtData.length; i++) {
                    const { district_id, district_name } = districtData[i];
                    if (district_name === districtName) matchedId = district_id;
                }
                return matchedId;
            } catch (error) {
                return error;
            }
        }
        
        async function getSessionDataByDistrict(districtId, date) {
            try {
                const response = await axios.get(
                    `${defaultParams.baseUrl}${defaultParams.appointmentBase}`, {
                        params: {
                            district_id: districtId,
                            date: date,
                        }
                    }
                )
                const districtSessionData = response.data.sessions;
                return districtSessionData;
            } catch (error) {
                return error.response;
            }
        }

        getStateId(queryParams.param_state).then((stateRes) => {
            getDistrictId(stateRes, queryParams.param_district).then((distRes) => {
                getSessionDataByDistrict(distRes, date).then((res) => {
                    set_district_data(res);
                    setIsLoading(false);
                })
            })
        })
        
    }, [queryParams.param_state, queryParams.param_district, date])

    if(isLoading) {
        return <div>Data Loading...</div>
    }

    return (
        <div>
            {
                'status' in district_data ? (
                    <div>{`Error: ${district_data.status}`}</div>
                ) : (
                    district_data.map(obj => {
                        return(
                            <li>{obj.name}</li>
                        )
                    })
                )
            }    
        </div>
    )
}