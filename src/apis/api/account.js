import instance from "../utils/Instance"

export const signup = async (account) => {
    const response = await instance.post("/api/v1/auth/user", account);
    console.log(response);
}