import axios, {Axios, AxiosInstance} from "axios";


export class Api {
    clientHTTP: AxiosInstance
    baseURL: string
    constructor(baseURL) {
        this.clientHTTP = axios.create({
            baseURL,
        })
    }


       async get(endPoint: string) {
         const res = await this.clientHTTP.get(endPoint)

         return {
             status: res.status,
             data: res.data
             }
        }

}