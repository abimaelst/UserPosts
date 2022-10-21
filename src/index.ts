import {Api} from "./Api";

const api = new Api('https://jsonplaceholder.typicode.com/')

// @ts-ignore
async function data(): Promise<void> {
    const show = await api.get('posts')
    console.log(show)
}

data()

window.onload = () => {


}