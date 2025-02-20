/* eslint-disable react/prop-types */

import { Card, CardContent, CardMedia, Typography, Box, Chip, IconButton } from "@mui/material";
import { Star, StarBorder  } from "@mui/icons-material";
import ModalUpdate from "../ModalUpdate/ModalUpdate";
import ModalDelete from "../ModalDelete/ModalDelete";


const FoodCard = ({ name, description, price, imagen, availability, rating }) => {

        return (
        <Card sx={{ display: "flex", alignItems: "center", p: 2, borderRadius: 2, boxShadow: 3, width: "60%", margin:"auto"}}>


            {/* Imagen de la Card*/}
            <CardMedia component="img" sx={{ width: 200, height: 150, borderRadius: 2 }} image={imagen} alt={name} />
    

            {/* Contenido de la Card*/}
            <CardContent sx={{ flex: 1, ml: 2 }}>


                {/* Título e Iconos */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" fontWeight="bold">{name}</Typography>

                    <Box>
                        {/* Llamamos al Modal de UPDATE */}
                        <IconButton size="small">
                            <ModalUpdate />
                        </IconButton> 

                        {/* Llamamos al Modal de DELETE */}
                        <IconButton size="small">
                            <ModalDelete />        
                        </IconButton>
                    </Box>
                </Box>
        

                {/* Descripción */}
                <Typography variant="body2" color="textSecondary">{description}</Typography>
        

                {/* Sección de Precio, Stock y Rating */}
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={5}>


                    {/* Precio */}
                    <Typography variant="subtitle1" fontWeight="bold">Price: ${price}</Typography>
        

                    {/* Stock */}
                    <Typography variant="subtitle1" fontWeight="bold">
                    Avaliability: <Chip 
                    label={availability ? "In Stock" : "Out of Stock"} 
                    color={availability ? "success" : "error"} 
                    sx={{ fontWeight: "bold" }} />
                    </Typography>
                    
        
                    {/* Rating */}
                    <Box display="flex">
                    {[...Array(5)].map((_, index) => (
                        index < rating ? <Star key={index} color="warning" /> : <StarBorder key={index} color="disabled" />
                    ))}
                    </Box>

                </Box>
            </CardContent>
        </Card>
        );
};
  
export default FoodCard;
