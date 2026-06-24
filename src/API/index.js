import { create } from "axios"

let base = create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0'
})

const API = {
    async getData(){
        const response = await base.get(`/users?count=10&page=10`)
        return response.data.items
    }
}

export { API }