// import { } from './../../Contexts'
import { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'
export const Button = ()=>{
    const { itemCountHandler} = useContext(CartContext)
    return  <button onClick={()=> itemCountHandler(1)}>
        Add to cart
    </button>
}