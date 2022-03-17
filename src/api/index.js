import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
function fetchUserInfo(userName) {
    return axios.get(`${config.baseUrl}user/${userName}.json`)
}

async function fetchAskInfo(id) {
    try {
        // 코딩컨벤션에 따르면 밑에와 같이
        // const response = await axios.get(`${config.baseUrl}item/${id}.json`);

        // 일반 타입스크립트나 간략히 한다면 아래와 같이
        return await axios.get(`${config.baseUrl}item/${id}.json`)
    } catch (error) {
        console.log(error);
    }
    
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

export { fetchUserInfo, fetchAskInfo, fetchList }