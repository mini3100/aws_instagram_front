import instance from "../utils/Instance"

export const getUser = async (userId) => {
    return await instance.get(`/api/v1/user/${userId}`);
}