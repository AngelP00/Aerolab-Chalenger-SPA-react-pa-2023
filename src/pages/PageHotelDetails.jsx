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

const fetchHotel = async (id) => {
		console.log('obteniendo data del hotel ',id)
		const response = await fetch(`http://localhost:3001/hotels/${id}`);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	};

const PageHotelDetails = () => {
	console.log('HotelDetails');
	
	//const [match, params] = useRoute("/hotel/:id");
	const { id } = useParams(); // Obtén el parámetro 'id' de la URL
	console.log('id: ',id);
	//params.id = 4;
	const {
		data: hotel,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["hotel", id],
		queryFn: () => fetchHotel(id),
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error fetching Hotel! {error.message}</div>;
	}
	console.log('details');
	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", height: "100vh", margin: "20px" }}>
			<Card sx={{ width: "40%", backgroundColor: "#e8e8e8" }}>
				<CardMedia sx={{ height: 200 }} image={hotel.image} title={hotel.name} />
				<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{hotel.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{hotel.description}
				</Typography>
				</CardContent>
				<CardActions>
				<BookingForm />
				</CardActions>
			</Card>
		</div>
	);
};

export default PageHotelDetails;
