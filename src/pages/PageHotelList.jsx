import { useQuery } from "@tanstack/react-query";
//import { Link } from "wouter";
import {Link } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const fetchHotels = async () => {
	const response = await fetch("http://localhost:3001/hotels");
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json();
};

const PageHotelList = () => {
	console.log('Inicio HotelList a');
	const {
		data: hotels,
		isLoading,
		error,
	} = useQuery({ queryKey: ["hotels"], queryFn: fetchHotels });
	console.log('Inicio HotelList b');
	if (isLoading) {
		return <div>Loading...</div>;
	}
	console.log('Inicio HotelList c');

	if (error) {
		return <div>Error fetching Hotels! {error.message}</div>;
	}
	console.log('Final HotelList');
	return (
		<>
			<img src="/header-x1.png" alt="" style={{ width: "1440px", height: "412px"}} />
			<Typography variant="h4" component="h2">
				Booking App
			</Typography>
			;
			<Grid container spacing={2} textAlign="-webkit-center">
				{hotels.map((hotel) => (
					<Grid item key={hotel.id} xs={12} sm={6} md={4} lg={3}>
					<Link to={`/hotel/${hotel.id}`} style={{ textDecoration: "none" }}>
						<Card sx={{
							maxWidth: 345, // Ancho máximo fijo para todas las tarjetas
							backgroundColor: "#e8e8e8",
							//display: "flex",
							
							height: "100%", // Altura fija para el contenedor de la tarjeta
							//width: "100%", // Ancho fijo del 100%
							//justifyContent: "space-between", // Alinea los elementos en el eje principal
							//flexDirection: "column",
							}}>
						<Box sx={{ height: 285, display: "flex", flexDirection: "column" }}>
						<CardMedia sx={{ height: 140 }} image={hotel.image} title={hotel.name} />
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{hotel.name}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{hotel.description.length > 130
								? `${hotel.description.slice(0, 130)}...`
								: hotel.description}
							</Typography>
						</CardContent>
						</Box>
						<CardActions sx={{ display: "flex", flexDirection: "column", alignItems: "stretch" }}>
							<Button size="small">See Details</Button>
						</CardActions>
						</Card>
					</Link>
					</Grid>
				))}
			</Grid>
		</>
		
	  );
};

export default PageHotelList;