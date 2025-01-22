import React, {useContext} from 'react'
import {DataContext} from './Context'
import { Link } from 'react-router-dom';
import formatCurrency from '../util'

function Products() {
    const value = useContext(DataContext);
    const [products , setProducts] = value.products
    const addCart = value.addCart
  return (
    <div className='products'>
        {
            products.map(product => (
                <div className='card' key={product._id}>
                    <Link to={`products/${product._id}`}>
                        <img className='' src={product.images[0]} />
                    </Link>
                    <div className='box'>
                        <h3>
                            <Link to={`products/${product._id}`}>{product.title}</Link>
                        </h3>
                        <p>{product.description}</p>
                        <h4>{formatCurrency(product.price)}</h4>
                        <button onClick={()=> addCart(product._id)}>افزودن به سبد خرید</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Products
