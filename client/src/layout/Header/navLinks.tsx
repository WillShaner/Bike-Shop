import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const navLinks = [
  {
    link: 'shop',
    url: '/shop',
    icon: <ShoppingBagIcon />,
  },
  {
    link: 'about',
    url: '/about',
  },
  {
    link: "favorite",
    url: "/favorite",
    icon: <FavoriteBorderIcon />,
  },
  {
    link: "cart",
    url: "/cart",
    icon: <ShoppingCartIcon />,
  },
  
];
