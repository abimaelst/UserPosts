import axios, {Axios, AxiosInstance} from "axios";

interface Company {
    bs: string
    catchPhrase: string
    name:string
}

interface Address {
    city: string
    geo: { lat: number, lng: number }
    street: string
    suite: string
    zipcode: string
}

interface User {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": Address,
    "phone": string,
    "website": string,
    "company": Company,
}

interface Post {
    userId: number
    "id": number
    "title": string
    "body": string
}

type newUser = Omit<User, 'company' | 'address'>

export interface UserData extends newUser{
    "company": string,
    "address": string
    "posts": Post[]
}

export class Letter {
    clientHTTP: AxiosInstance
    baseURL: string
    UsersData: UserData[]
    constructor(baseURL) {
        this.clientHTTP = axios.create({
            baseURL,
        })
    }


    async get() {
        const {data: UsersData} : {data: User[]} = await this.clientHTTP.get('users')
        const {data: PostsData} : {data: Post[]} = await this.clientHTTP.get('posts')

        const addPostsInUsers = UsersData.map((user):UserData => {
            return {
                ...user,
                company: user.company.name,
                address: `${user.address.street}, ${user.address.suite}, ${user.address.zipcode}, ${user.address.city}`,
                posts: PostsData.filter((post) => post.userId === user.id)
            }
        })

        return {
            data: addPostsInUsers
        }
    }

}