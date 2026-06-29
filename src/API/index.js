import { create } from "axios"

let base = create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0'
})

const API = {
    async getData(count,page){
        const response = await base.get(`/users?count=${count}&page=${page}`)
        return response.data
    },
    async postAuth(email,password){
        const response = await base.post('/auth/login',{email,password})
        return response.data.data
    }
}

export { API }