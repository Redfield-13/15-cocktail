import {useState,useEffect,useCallback} from 'react'

export const useFetch =(url) =>{
    const [loading,setLoading] = useState(true)
    const [drinks,setDrinks] = useState([])
    const getDrinks = useCallback(async ()=>{
        const res = await fetch(url)
        const drinks = await res.json()
        setDrinks(drinks)
        setLoading(false)
    },[]) 

    useEffect(()=>{
        getDrinks()
    },[])

    return {loading,drinks}
}

