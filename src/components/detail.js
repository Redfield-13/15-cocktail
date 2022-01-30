import React from 'react'
import Navbar from './navbar'
import { useLocation } from 'react-router-dom'
import {useFetch} from './useFetch'
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='



function Detail() {
    const {loading,drinks} = useFetch(url)
  const location = useLocation()
  const { id } = location.state
let found = {}
    return (
        
        <div>
            <Navbar></Navbar>
            {loading?<h2>Loading...</h2>:
                <div className="drink-detail">
                <Link exact to="/">
                <button className='detailss'>Back Home</button>
                </Link>
                
                {
                    drinks.drinks.map((drink)=>{
                        drink.idDrink===id?found=drink:console.log('no')
                    })
                }
                {
                    console.log(found)
                }
                <h2 className="detail-title">{found.strDrink}</h2>
                <div className="info">
                    <img src={found.strDrinkThumb} alt=""/>
                    <div className="tell">
                        <div className="first">
                            <span className='green'>Name : </span>
                            <span>{found.strDrink}</span>
                        </div>
                        <div className="first">
                            <span className='green'>Category : </span>
                            <span>{found.strCategory}</span>
                        </div>
                        <div className="first">
                            <span className='green'>Info : </span>
                            <span>{found.strAlcoholic}</span>
                           
                        </div>
                        <div className="first">
                            <span className='green'>Glass : </span>
                            <span>{found.strGlass}</span>
                        </div>
                        <div className="first">
                            <span className='green'>Instructions : </span>
                            <span>{found.strInstructions}</span>
                        </div>
                        <div className="first">
                            <span className='green'>Ingredient : </span>
                            <span>{found.strIngredient1},{found.strIngredient2},{found.strIngredient3}</span>
                        </div>
                    </div>
                    
                </div>
                
            </div>
                
            }
            
        </div>
    )
}

export default Detail
