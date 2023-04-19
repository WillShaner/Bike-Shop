import React, { useContext, useState } from 'react';
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   CardActions,
//   Button,
//   Typography,
// } from '@mui/material';
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
// import { CartContext } from '../context/CartContext';

// interface IBike {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   price: number;
//   favorite: boolean;
// }

// interface IBikeCardProps {
//   bike: IBike;
//   task?: () => void;
//   buttonText?: string;
//   openModal?: (id: number) => void;
//   width?: number;
//   height?: number;
// }

// const BikeCard: React.FC<IBikeCardProps> = ({
//   bike,
//   task,
//   buttonText = 'Add to cart',
//   openModal,
//   width,
//   height,
// }) => {
//   const {
//     addToFavorites,
//     removeFromFavorites,
//     setFavoritesCount,
//     favoritesCount,
//   } = useContext(CartContext);
//   const { image, price, title, description, id, favorite } = bike;
//   const [favorited, setFavorited] = useState<boolean>(favorite);

//   return (
//     <Card
//       sx={{
//         maxWidth: '350px',
//         margin: '1rem',
//         padding: '0.25rem 1rem',
//         width: { width },
//         height: { height },
//       }}
//       variant="outlined"
//       className="bike-card"
//       id={`#${id}`}
//     >
//       <CardMedia
//         component="img"
//         className="bike-card-image"
//         image={image}
//         alt="bike"
//       />
//       <Typography
//         gutterBottom
//         variant="h5"
//         component="div"
//         className="bike-card-text bike-card-title text-uppercase"
//       >
//         {title}
//       </Typography>
//       <CardContent className="bike-card-text bike-card-desc">
//         <Typography paragraph>{description}</Typography>
//       </CardContent>
//       <p className="bike-card-text bike-card-price">${price}</p>
//       <CardActions className="d-flex justify-content-between align-items-center">
//         {favorited ? (
//           <AiFillHeart
//             className="bike-card-favorite-button bike-card-favorite-button-active"
//             onClick={() => {
//               setFavorited(false);
//               removeFromFavorites(bike);
//               setFavoritesCount(favoritesCount - 1);
//             }}
//           />
//         ) : (
//           <AiOutlineHeart
//             className="bike-card-favorite-button"
//             onClick={() => {
//               setFavorited(true);
//               addToFavorites(bike);
//               setFavoritesCount(favoritesCount + 1);
//             }}
//           />
//         )}

//         {task && (
//           <Button
//             variant="outlined"
//             color="success"
//             value={bike}
//             type="button"
//             className="px-5 add mb-2"
//             onClick={task}
//           >
//             {buttonText}
//           </Button>
//         )}
//       </CardActions>
//       {openModal && (
//         <Typography
//           paragraph
//           className=" text-center  px-3 rounded mt-3 read-more-btn"
//           onClick={() => openModal(id)}
//           aria-hidden="true"
//         >
//           Read more
//         </Typography>
//       )}
//     </Card>
//   );
// };

// export default BikeCard;
