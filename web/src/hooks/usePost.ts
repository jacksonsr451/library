import { AxiosRequestConfig } from 'axios'
import api from "../services/api"

const usePost = (url: string, options?: AxiosRequestConfig) => async (data: unknown) => {
    const { data: response } = await api.post(url, data, options);
    console.log("Aqui")
    return response.data;
}

export default usePost
