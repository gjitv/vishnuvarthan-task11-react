import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../../redux/productAction';
import { postItem } from '../../redux/addProductAction';


const Admin = () => {
    const dispatch = useDispatch();
    let data = useSelector((state) => state.productData);
    console.warn("data in main is", data);

    useEffect(() => {
        dispatch(productList());
    }, [])

  return (
    <div style={{margin:"30px"}}>
        <h1 >ADMIN DASHBOARD</h1>
        <h3>ProductList</h3>
        {data.map((item)=>{
            return  <p>
           {item.name}</p>
        })}
        <h2>ADD PRODUCTS</h2>
        <div>
            <form onSubmit={()=>dispatch(postItem(data))}>
                <input type='text' placeholder='ProductName'/>
                <input type='text' placeholder='brand' />
                <input type='text' placeholder='color' />
                <input type='text' placeholder='category'/>
                <input type='text' placeholder='Price'/>
                <button>submit</button>
            </form>
        </div>
    </div>
  )
}

export default Admin