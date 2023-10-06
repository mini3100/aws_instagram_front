import instance from "../utils/Instance"

export const uploadFeed = async (feedFormData) => {
    const option = {    // http 요청 옵션 설정
        headers: {
            "Content-Type": "multipart/form-data"   // 요청 헤더에서 Content-Type을 form-data로 바꿔줌.
        }
    }
    return await instance.post(`/api/v1/feed`, feedFormData, option);
}