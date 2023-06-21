
import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { Header } from './Header';
import { emptyCart, removeToCart } from '../redux/action';

const Cart = () => {
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cartData);
    // let amount = cartData.length && cartData.map(item => item.price).reduce((prev, next) => prev + next)
    return (
        <div>
            <Header />
            <div style={{ textAlign: 'center' }}>
                <h1>CART PAGE</h1>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <Button onClick={() => dispatch(emptyCart())} sx={{ alignItems: "center" }} variant="outlined" color="secondary">
                    Empty Cart
                </Button>
            </div>
            {cartData.map((item) => <div key={item.id} className='Cart' >
                <Box
                    component="img"
                    sx={{
                        height: 233,
                        width: 350,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                />
                <Box sx={{ display: "flex", flexDirection: "column", margin: "10px 20px" }}>
                    <Typography variant="button" display="block" gutterBottom>
                        Name: {item.name}
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        Color :{item.color}
                    </Typography>
                    <Button onClick={() => dispatch(removeToCart(item))} sx={{ margin: "15px 0px" }} variant="contained" color="secondary">
                        Remove from Cart
                    </Button>
                </Box>
            </div>
            )}
        </div>
    )
}

export default Cart