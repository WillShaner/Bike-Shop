import React, { useContext, useState } from 'react';
import '../style/Bikes.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CartContext } from '../context/CartContext';

function BikeCard(props) {
  const {
    bike, task, buttonText, openModal, width, height,
  } = props;
  const {
    addToFavorites,
    removeFromFavorites,
    setFavoritesCount,
    favoritesCount,
  } = useContext(CartContext);
  const {
    image,
    price,
    title,
    description,
    id,
    favorite,
  } = bike;
  const [favorited, setFavorited] = useState(favorite);

  return (
    <Card
      sx={{
        maxWidth: '350px', margin: '1rem', padding: '0.25rem 1rem', width: { width }, height: { height },
      }}
      variant="outlined"
      className="bike-card"
      id={`#${id}`}
    >
      <CardMedia component="img" className="bike-card-image" image={image} alt="bike" />
      <Typography gutterBottom variant="h5" component="div" className="bike-card-text bike-card-title text-uppercase">{title}</Typography>
      <CardContent className="bike-card-text bike-card-desc"><Typography paragraph>{description}</Typography></CardContent>
      <p className="bike-card-text bike-card-price">
        $
        {price}
      </p>
      <CardActions className="d-flex justify-content-between align-items-center">

        {favorited ? (
          <AiFillHeart
            className="bike-card-favorite-button bike-card-favorite-button-active"
            onClick={() => {
              setFavorited(false);
              removeFromFavorites(bike);
              setFavoritesCount(favoritesCount - 1);
            }}
          />
        )
          : <AiOutlineHeart className="bike-card-favorite-button" onClick={() => { setFavorited(true); addToFavorites(bike); setFavoritesCount(favoritesCount + 1); }} />}

        {task && (
        <Button variant="outlined" color="success" value={bike} type="button" className="px-5 add mb-2" onClick={task}>
          {buttonText}
        </Button>
        )}
      </CardActions>
      {openModal && <Typography paragraph className=" text-center  px-3 rounded mt-3 read-more-btn" onClick={() => openModal(id)} aria-hidden="true">Read more</Typography>}
    </Card>
  );
}
BikeCard.defaultProps = {
  buttonText: 'Add to cart',
};
export default BikeCard;
