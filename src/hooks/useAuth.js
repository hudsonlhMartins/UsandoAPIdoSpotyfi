import { useEffect, useState } from "react"
import axios from 'axios'

export default function useAuth(code){

    const [accessToken, setAccessToken] =useState()
    const [refreshToken, setRefreshToken] =useState()
    const [expiresIn, setExpiresIn] =useState()



    useEffect(()=>{
        axios.post('http://localhost:3001/login', { 
            code,
        }).then((res)=>{
            console.log(res.data)
            window.history.pushState({}, null, '/')
            // isso aqui e para limbar a url nao vir o code

            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)

        }).catch(()=>{
            window.location = '/'
        })
    }, [code])

    useEffect(()=>{

        if(!refreshToken || !expiresIn) return

        const interval = setInterval(()=>{
                axios.post('http://localhost:3001/refresh', { 
                refreshToken,
            }).then((res)=>{

                setAccessToken(res.data.accessToken)
                setExpiresIn(res.data.expiresIn)

            }).catch(()=>{
                window.location = '/'
            })
        }, (expiresIn - 60) *1000)

        return () => clearTimeout(interval)

        


    }, [refreshToken, expiresIn])

    return accessToken
}