import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  CardActionArea
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  const {name, cost, rating, image, _id} = product;
  return (
    <Card className="card" sx={{maxWidth:385}}>
      <CardActionArea>
        <CardMedia component="img" height="240" image ={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ${cost}
          </Typography>
          <Typography>
            <Rating name="read-only" value={rating} readOnly />
          </Typography>                    
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button value={_id} size="" fullWidth color="primary" variant="contained" onClick={handleAddToCart}>
          <AddShoppingCartOutlined /> ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
