import React, { useState, useEffect } from 'react'

const axios = require('axios').default;

const defaultParams = {
    baseUrl: "https://cdn-api.co-vin.in/api/v2/",
    metadataBase: "admin/location/",
    metaDistrictBase: "districts/",
    appointmentBase: "appointment/sessions/public/findByDistrict"
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

export default function GetSessionData({ district, date }) {

    const queryParams = {
        param_district: district,
    }

    const [district_data, set_district_data] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        getSessionDataByDistrict(queryParams.param_district, date).then((res) => {
            set_district_data(res);
            setIsLoading(false);
        })
        
    }, [queryParams.param_district, date])

    if(isLoading) {
        return <div>Loading Data...</div>
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