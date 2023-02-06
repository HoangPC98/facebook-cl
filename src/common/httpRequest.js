// import { serverUrl } from '../configs/common.config'
const serverUrl = 'http://localhost:5000'
    

const accessToken = window.localStorage.getItem('access_token') || null;
const bearerToken = accessToken ? 'Bearer ' + accessToken : null;

const convertParams = (params, type) => {
    const keyParams = Object.keys(params)
    const valueParams = Object.values(params)
    console.log(keyParams, valueParams)
    let stringParams = type === 'q' ? '?' : '/'
    for (let i = 0; i < keyParams.length; ++i) {
        if(type === 'q'){
            stringParams += `${keyParams[i]}=${valueParams[i]}` + (i < keyParams.length-1 ? '&' : '')
        }
        else if(type === 'p') {
            stringParams +=  valueParams[i] + '/'
        }
    }   
    console.log('paramsss', stringParams)
        return stringParams
}

const http = {
    get: async (endpoint, params) =>{
        let q = params ? convertParams(params, 'q') : '/'
        let url = serverUrl + endpoint + q
        let opt = {
            method: 'GET',
            headers: {
                Authorization: bearerToken,
                "Content-Type": "application/json",
            },
        }
        const response =  await fetch(url, opt).then(response => response.json()).then(data => { return data }).catch(err => { alert(err) });

        console.log('response', response)
        return response;
    },

    post: async(endpoint, payload, isIncludeFile) => {
        const uri = serverUrl + endpoint
        const options = {
            method: "POST",
        }
        
        if (isIncludeFile) {
            options.body = payload
        } else {
            options.headers = {
                Authorization: bearerToken,
                "Content-Type": "application/json",
            }
            options.body = JSON.stringify(payload)
        }
    
        const response =  await fetch(uri, options).then(response => response.json()).then(data => { return data }).catch(err => { alert(err) });
        console.log('POST resss',response);
        return response;
    },

    update: async(endpoint, params) => {
        const stringParams = convertParams(params, 'p')
        const url = serverUrl + endpoint + stringParams
        console.log('>>>URI', url)
    
        const options = {
            method: 'PUT',
            headers: {
                Authorization: bearerToken,
                "Content-Type": "application/json",
            },
        }
        return await fetch(url, options).then(res => res.json()).then(data => { return data }).catch(err => { alert(err) });
    }
}

const apiEndpoint = {
    addFriendReq:  {
        method: 'post',
        path: '/friendship/request/new',
        params: []
    }

} 

export { http, apiEndpoint }