import React,{useContext,useState,useCallback,useEffect} from 'react'
import Drink from './drink'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='




function Cocktails() {
    let first = true
    const [loading,setLoading] = useState(true)
    const [drinks,setDrinks] = useState([])
    const [data,setData] = useState([])
    const getDrinks = useCallback(async ()=>{
        const res = await fetch(url)
        const drinks = await res.json()       
        setDrinks(drinks.drinks)
        setLoading(false)
    },[]) 

    useEffect(()=>{
        getDrinks()
    },[])

    return (
        
            <div className='cocktails'>
            <div className='search'>
                <form action="">
                    <label htmlFor="">Search Your Favourite Cocktail</label>
                    <input type="text" onChange={(e)=>{
                        loading?console.log('nooo'):drinks.map((drink)=>{    
                            let newDrinks =  drinks.filter((obj)=>{
                                return obj.strDrink.toUpperCase().includes(e.target.value.toUpperCase())
                            })  
                            console.log(newDrinks)  
                            setData(newDrinks) 
                            document.getElementById('will').remove()       
                        })
                        
                    }}/>
                </form>
            </div>
            <h2 className='title'>{loading ?<div className="loader">
                    <div className="circle one"></div>
                    <div className="circle two"></div>
                    <div className="circle three"></div>
            </div>:"Cocktails"}</h2>
            <div className="wrapper">
            
                {
                   
                     loading?console.log('wait'): data.map((drink)=>{
                        return <Drink id={drink.idDrink} key={drink.idDrink} img={drink.strDrinkThumb} name={drink.strDrink} glass={drink.strGlass} alco={drink.strAlcoholic}></Drink>
                    }) 
                    
                    
                    
                }
                
            </div>
            <div className="wrapper" id='will'>
            
                {
                   
                     loading?console.log('wait'): drinks.map((drink)=>{
                        return <Drink id={drink.idDrink} key={drink.idDrink} img={drink.strDrinkThumb} name={drink.strDrink} glass={drink.strGlass} alco={drink.strAlcoholic}></Drink>
                    }) 
                    
                    
                    
                }
                
            </div>
            
        </div>
        
    )
}

export default Cocktails



