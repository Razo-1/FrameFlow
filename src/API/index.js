import { create } from "axios"

let base = create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0'
})

const API = {
    async getData(page){
        const response = await base.get(`/users?count=10&page=${page}`)
        return response.data
    }
}

export { API }