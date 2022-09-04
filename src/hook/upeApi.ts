import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

export const useApi=()=>({
    validadeToken: async (token: string)=>{
        const response = await api.post('/validate', {token})
    },
    signin: async (email: string, password: string)=>{
        return{
            user: {id: 3, name: 'Kelvin', email: 'kelvin@email.com'},
            token:'123456789'
        }
        const response = await api.post('/signin',{email, password})
        return response.data
    },
    logout:async () => {
        const response = await api.post('/logout')
        return response.data
        
    }
})