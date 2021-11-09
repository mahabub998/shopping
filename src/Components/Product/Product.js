import React,{useState,useEffect} from 'react';
import FakeData from '../FakeData/FakeData.json';
import ProductDetails from './ProductDetails';

const Product = () => {
  const [products,setProducts] = useState([])

  useEffect( () => {
    setProducts(FakeData)

  },[])
  console.log(products)
 

    return (
        <div className="row">
            {
                products.map( (product) => <ProductDetails product={product}></ProductDetails>)   
            }
        </div>
    );
};

export default Product;