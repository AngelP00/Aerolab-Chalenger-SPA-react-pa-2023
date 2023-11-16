import { useQuery } from "@tanstack/react-query";
//import { useRoute,Link, useLocation } from "wouter";
import { useParams,Link } from "react-router-dom";
import BookingFormAddProductToCart from "../components/BookingFormAddProductToCart";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { useEffect, useState } from "react";
import getData from "../utils/getData";

const fetchProduct = async (id) => {
	console.log('Obteniendo datos del product', id);
	
	// Llama a una función 'getData' que debe devolver la lista de productos
	return getData().then((data) => {
		console.log('Datos obtenidos:', data);
		const found = data.find(item => item._id === id);
	
		if (found) {
		console.log('Producto encontrado:', found);
		return found; // Devuelve el producto encontrado
		} else {
		console.log(`Producto con ID ${id} no encontrado.`);
		return null; // Devuelve null si no se encuentra el producto
		}
	});
};
	  

const PageHotelDetails = () => {
	console.log('HotelDetails');
	
	//const [match, params] = useRoute("/product/:id");
	const { id } = useParams(); // Obtén el parámetro 'id' de la URL
	console.log('id: ',id);
	//params.id = 4;
	
	const {
		data: product,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["product", id],
		queryFn: () => fetchProduct(id),
	});

	if (isLoading) {
		//return <div>Loading...</div>;
		return <Typography variant="body2" color="text.secondary">
				Loading...
			</Typography>;
	}

	if (error) {
		//return <div>Error fetching Product! {error.message}</div>;
		return <Typography variant="body2" color="text.secondary">
				Error fetching Product! {error.message}
			</Typography>;
	}

	if (product == null) {
		//return <div>Error fetching Product! {error.message}</div>;
		return <Typography variant="body2" color="text.secondary">
				Product not found
			</Typography>;
	}
	
	console.log('details');
	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", height: "100vh", margin: "20px" }}>
			<Card sx={{ backgroundColor: "#e8e8e8" }}>
				<Box sx={{display: "flex", flexDirection: "column" }}>
					<CardMedia
						sx={{ height: "auto" }}
						component="img"
						image={product.img?.hdUrl}
						title={product.name}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{product.name}
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{ maxWidth: "400px" }}>
							Category: {product.category}
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{ maxWidth: "400px" }}>
							Cost: ${product.cost} USD
						</Typography>
					</CardContent>
				</Box>

				<CardActions>
				{/*<BookingFormAddProductToCart /> */}
				<BookingFormAddProductToCart product={product} />;
				</CardActions>
			</Card>
		</div>
	);
};

export default PageHotelDetails;
