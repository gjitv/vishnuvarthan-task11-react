import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';
import { addToCart} from '../redux/action';
import Card from "@mui/material/Card";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Header } from './Header';
import { Link } from 'react-router-dom';

const Main = () => {
    const dispatch = useDispatch();
    let data = useSelector((state) => state.productData);
    console.warn("data in main is", data);

    useEffect(() => {
        dispatch(productList());
    }, [])
    return (
        <div style={{backgroundColor:"aliceblue"}}>
            <Header />
            <div className='GotoCart' style={{display:"flex", justifyContent:"center"}}>
                <Link to="/cart">
                    <Button sx={{ alignItems: "center", marginTop:"30px" }} variant="outlined" color="secondary">
                        GO TO CART
                    </Button>
                </Link>
            </div>
            <div style={{textAlign:'center'}}>
                <h1>PRODUCTS</h1>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center" }}>
                {data.map((item) => {
                    return (
                        <Card key={item.id} sx={{ maxWidth: 345, margin:"25px" }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={item.photo}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography gutterBottom variant="p" component="div">
                                    Rs.{item.price}
                                </Typography>
                                <Typography gutterBottom variant="p" component="div">
                                    Color: {item.color}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over
                                    6,000 species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => dispatch(addToCart(item))} size="small">add to cart</Button>
                                <Button size="small">More Info</Button>
                            </CardActions>
                        </Card>
                    );
                })}
            </div>
        </div>
    )
}

export default Main