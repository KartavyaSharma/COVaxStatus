import React, { useState, useEffect } from 'react'

const axios = require('axios').default;
const optionsData = require('../data/data.js')

const LocationSvg = () => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width="24" height="24" class='ionicon' viewBox='0 0 512 512'>
            <title>Location</title>
            <path d='M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
            <circle cx='256' cy='192' r='48' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
        </svg>
    )
}

const CashSvg = () => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width="24" height="24" class='ionicon' viewBox='0 0 512 512'>
            <title>Cash</title><rect x='32' y='80' width='448' height='256' rx='16' ry='16' transform='rotate(180 256 208)' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/>
            <path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M64 384h384M96 432h320'/><circle cx='256' cy='208' r='80' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
            <path d='M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80M480 256a80 80 0 00-80 80M32 256a80 80 0 0180 80' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
        </svg>
    )
}

const VacSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" class="bi bi-droplet" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
            <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
        </svg>
    )
}

const AgeSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        </svg>
    )
}

const EyeSvg = () => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width="18" height="18" class='ionicon' viewBox='0 0 512 512'>
            <title>Eye</title>
            <path d='M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/>
            <circle cx='256' cy='256' r='80' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/>
        </svg>
    )
}

const LocateSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-geo" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
        </svg>
    )
}

const RedirectSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
        </svg>
    )
}

async function getSessionDataByDistrict(districtId, date) {
    try {
        const response = await axios.get(
            `${optionsData.defaultParams.baseUrl}${optionsData.defaultParams.appointmentBase}`, {
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

export default function GetSessionData({ state, district, date }) {

    console.log(district)

    const queryParams = {
        param_district: district.value,
    }

    const [district_data, set_district_data] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(undefined);

    useEffect(() => {

        setIsMobile(window.innerWidth <= 768);
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        getSessionDataByDistrict(district.value, date).then((res) => {
            set_district_data(res);
            setIsLoading(false);
        })

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
        
    }, [queryParams.param_district, date])

    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
    }

    if(isLoading) {
        return <div className='font-heads text-2xl lg:text-4xl font-semibold'>Loading Data...</div>
    }

    function renderCenterCardList() {
        return (
            <div className='w-full lg:w-3/5'>
                {
                    'status' in district_data ? (
                        <div>{`Error: ${district_data.status}`}</div>
                    ) : (
                        <div>
                            <div className='font-heads text-2xl lg:text-4xl font-semibold'>{`Centers in ${district.label}, ${state.label}`}</div>
                            <div className={`grid grid-cols-1 grid-rows-${Math.floor(district_data.length / 5)} gap-5 mt-7`}>
                            {
                                district_data.map(obj => {
                                    return (
                                        <div className='w-full border bg-white shadow-xl rounded-lg h-full flex flex-col p-4'>
                                            <div className='grid grid-cols-5'>
                                                <div className='col-span-full lg:col-span-3 flex flex-col h-full lg:border-r lg:border-gray-300 pr-3'>
                                                    <div className='flex flex-row items-center h-full'>
                                                        <div className='ml-2 font-heads text-xl font-semibold opacity-80'>{titleCase(obj.name)}</div>
                                                    </div>
                                                    <div className='flex flex-row items-center h-full mt-3'>
                                                        <div className='flex flex-col items-center h-full' style={{ minWidth: "10%" }}>
                                                            <LocationSvg/>
                                                        </div>
                                                        <div className='ml-2 font-heads text-sm opacity-80'>{obj.address}</div>
                                                    </div>
                                                    <div className='flex flex-row items-center h-full mt-3'>
                                                        <div className='flex flex-col items-center h-full' style={{ minWidth: "10%" }}>
                                                            <VacSvg/>
                                                        </div>
                                                        <div className='ml-2 text-green-500 font-semibold font-heads text-sm opacity-80'>{obj.vaccine}</div>
                                                    </div>
                                                    <div className='flex flex-row items-center h-full mt-3'>
                                                        <div className='flex flex-col items-center h-full' style={{ minWidth: "10%" }}>
                                                            <CashSvg/>
                                                        </div>
                                                        <div className='ml-2 font-heads text-sm opacity-80'>{`${obj.fee === '0' ? 'Free' : `Rs. ${obj.fee}`}`}</div>
                                                    </div>
                                                    <div className='flex flex-row items-center h-full mt-3'>
                                                        <div className='flex flex-col items-center h-full' style={{ minWidth: "10%" }}>
                                                            <AgeSvg/>
                                                        </div>
                                                        <div className='ml-2 font-heads text-red-600 font-semibold text-sm opacity-80'>{`${obj.min_age_limit}+`}</div>
                                                    </div>
                                                </div>
                                                { obj.slots.length !== 0 ? (
                                                    <div className='hidden lg:flex lg:flex-col lg:col-span-2 max-h-full'>
                                                        <div>
                                                            <div className='flex flex-row items-center h-max'>
                                                                <div className='ml-2 font-heads font-semibold text-lg opacity-80 w-full text-center'>Time Slots</div>
                                                            </div>
                                                            <div className='grid grid-cols-2 w-full mt-4'>
                                                                <div className='text-base font-heads opacity-80 font-semibold w-full text-center'>From</div>
                                                                <div className='text-base font-heads opacity-80 font-semibold w-full text-center'>To</div>
                                                                {
                                                                    obj.slots.map(slot => {
                                                                        const splitSlot = slot.split('-');
                                                                        return (
                                                                            <div>
                                                                                <div className='w-full text-center'>{splitSlot[0]}</div>
                                                                                <div className='w-full text-center'>{splitSlot[1]}</div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    ) : (
                                                        <div className='hidden lg:col-span-2 lg:flex lg:flex-col max-h-full items-center justify-center'>
                                                            <div className={`px-2 py-1 text-lg rounded-md ${obj.available_capacity !== 0 ? 'bg-green-300' : 'bg-red-300'}`}>
                                                                {obj.available_capacity !== 0 ? <span className='text-back opacity-80'>Available</span> : <span className='text-back opacity-80'>Booked</span>}
                                                            </div>
                                                            <a href="#" className={`px-2 py-1 rounded-md bg-gray-200 flex flex-row items-center mt-6 ${obj.available_capacity === 0 ? 'opacity-60 pointer-events-none' : ''}`}>
                                                                <div className='ml-1 font-heads text-black font-semibold text-lg'>Register</div>
                                                            </a>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            <div className='grid grid-cols-5 mt-6 w-full'>
                                                <div className='col-span-3 lg:border-r lg:border-gray-300'>
                                                    <div className='flex flex-row w-full items-center pr-3'>
                                                        <div className='flex flex-row w-full'>
                                                            <button className='px-2 py-1 rounded-md bg-gray-200 flex flex-row items-center'>
                                                                { !isMobile ? <EyeSvg /> : null}
                                                                <div className='ml-1 font-heads text-black font-semibold text-sm'>Watch</div>
                                                            </button>
                                                            <button className='px-2 py-1 rounded-md bg-gray-200 flex flex-row items-center ml-3'>
                                                            { !isMobile ? <LocateSvg /> : null}
                                                                <div className='ml-1 font-heads text-black font-semibold text-sm'>Locate</div>
                                                            </button>
                                                            {
                                                                isMobile ? (
                                                                    <div className='flex flex-row items-center'>
                                                                        <div className={`px-2 py-1 ml-3 text-sm rounded-md ${obj.available_capacity !== 0 ? 'bg-green-300' : 'bg-red-300'}`}>
                                                                            {obj.available_capacity !== 0 ? <span className='text-back opacity-80'>Available</span> : <span className='text-back opacity-80'>Booked</span>}
                                                                        </div>
                                                                        {
                                                                            obj.available_capacity !== 0 ? (
                                                                                <div className='ml-5 -mt-1'>
                                                                                    <RedirectSvg/>
                                                                                </div>
                                                                            ) : (
                                                                                null
                                                                            )
                                                                        }
                                                                    </div>
                                                                ) : (
                                                                    null
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                { obj.slots.length !== 0 ? (
                                                        <div className='hidden lg:block lg:col-span-2'>
                                                            <div className='flex flex-row w-full items-center'>
                                                                <div className='flex flex-row w-full items-center justify-start ml-3'>
                                                                    <a href="#" className={`px-2 py-1 rounded-md bg-gray-200 flex flex-row items-center ml-1 mr-3 ${obj.available_capacity === 0 ? 'opacity-60 pointer-events-none' : ''}`}>
                                                                        <div className='ml-1 font-heads text-black font-semibold text-sm'>Register</div>
                                                                    </a>
                                                                    <div className={`px-2 py-1 text-sm rounded-md ${obj.available_capacity !== 0 ? 'bg-green-300' : 'bg-red-300'}`}>
                                                                        {obj.available_capacity !== 0 ? <span className='text-back opacity-80'>Available</span> : <span className='text-back opacity-80'>Booked</span>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (null)
                                                }
                                            </div>
                                        </div>      
                                    )
                                })
                            }
                            </div>
                        </div>
                    )
                }    
            </div>
        )
    }

    return (
        <div classNam='w-full mb-20'>
            {renderCenterCardList()}
        </div>
    )
}