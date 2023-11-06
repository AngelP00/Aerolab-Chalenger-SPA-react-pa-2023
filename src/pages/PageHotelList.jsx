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

//start aerolab
import { useEffect, useState } from "react";
import getData from "../utils/getData";
//end aerolab

const fetchHotels = async () => {
	const response = await fetch("http://localhost:3001/hotels");
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json();
};

const PageHotelList = () => {
	//start aerolab
	const [data, setData] = useState([]);
	useEffect(() => {
		getData().then((data) => {
		  setData(data);
		});
	}, []);
	console.log('data: ', data);
	//end aerolab

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
			<div
			style={{
				display: "flex",
				alignItems: "flex-end",
				width: "100%",
				position: "relative",
				justifyContent: "center",
				backgroundColor: "#15dbff",
			}}
			>
			<img
				src="/header-x1.png"
				alt=""
				style={{ maxWidth: "100%", height: "auto" }}
			/>
			<Typography
				variant="h4"
				component="h2"
				style={{
				position: "absolute",
				bottom: "5%",
				left: "10%",
				fontFamily: "SourceSansPro-Bold",
				fontSize: "64px",
				color: "#ffffff",
				textAlign: "left",
				}}
			>
				Electronics
			</Typography>
			</div>
			
			<Grid container spacing={2} textAlign="-webkit-center" sx={{ marginTop: "20px" }}>
				{data.map((hotel) => (
					<Grid item key={hotel._id} xs={12} sm={6} md={4} lg={3}>
					<Link to={`/hotel/${hotel.id}`} style={{ textDecoration: "none" }}>
						<Card sx={{
							maxWidth: 345, // Ancho máximo fijo para todas las tarjetas
							//backgroundColor: "#e8e8e8",
							//display: "flex",
							
							height: "100%", // Altura fija para el contenedor de la tarjeta
							//width: "100%", // Ancho fijo del 100%
							//justifyContent: "space-between", // Alinea los elementos en el eje principal
							//flexDirection: "column",
							
							}}>
						
						<Box sx={{ height: 285, display: "flex", flexDirection: "column" }}>
						<Box sx={{ position: "relative" }}>
							<Link to="/" style={{ textDecoration: "none", color: "616161", position: "absolute", top: 0, right: 0 }}>
								<img src="/buy-blue.svg" alt="" />
							</Link>
							<CardMedia sx={{ height: 200, backgroundSize: "auto" }} image={hotel.img.url} title={hotel.name} />
						</Box>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{hotel.name}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								description
							</Typography>
						</CardContent>
						</Box>
						</Card>
					</Link>
					</Grid>
				))}
			</Grid>

			<Grid container spacing={2} textAlign="-webkit-center" sx={{ marginTop: "20px" }}>
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
