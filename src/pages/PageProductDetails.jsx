import { useQuery } from "@tanstack/react-query";
//import { useRoute,Link, useLocation } from "wouter";
import { useParams,Link } from "react-router-dom";
import BookingForm from "../components/BookingForm";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//start aerolab
import { useEffect, useState } from "react";
import getData from "../utils/getData";
//end aerolab

/*
const fetchHotel = async (id) => {
		console.log('obteniendo data del product ',id)
		const response = await fetch(`http://localhost:3001/hotels/${id}`);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	};
*/

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
	//start aerolab
	/*
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	useEffect(() => {
		getData().then((data) => {
			console.log('useEffect getData 1');
		  const found = data.find(item => item._id == id);
		  setProduct(found)
		  console.log('useEffect getData 2');
		  console.log('product: ', found);
		});
	
	}, [id]);
	
	  if (!product) {
		return <div></div>;
	  }
	*/
	
	//end aerolab

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
								category: {product.category}
							</Typography>
							<Typography variant="body2" color="text.secondary" sx={{ maxWidth: "400px" }}>
								cost: {product.cost}
							</Typography>

						</CardContent>
				</Box>


				
				<CardActions>
				{/*<BookingForm /> */}
				</CardActions>
			</Card>
		</div>
		/*
		<div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", height: "100vh", margin: "20px" }}>
			<Card sx={{ backgroundColor: "#e8e8e8" }}>


				<Box sx={{display: "flex", flexDirection: "column" }}>
						<CardMedia
							sx={{ height: "auto" }}
							component="img"
							image={product.image}
							title={product.name}
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{product.name}
							</Typography>
							<Typography variant="body2" color="text.secondary" sx={{ maxWidth: "400px" }}>
								{product.description}
							</Typography>

						</CardContent>
				</Box>


				
				<CardActions>
				<BookingForm />
				</CardActions>
			</Card>
		</div>
		*/
	);
};

export default PageHotelDetails;
