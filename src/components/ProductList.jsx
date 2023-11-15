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
import { useEffect, useState } from "react";
import getData from "../utils/getData";
import {Paper, IconButton} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useLocation } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PageHotelList = () => {
	const navigate = useNavigate();

	console.log('Inicio HotelList a');
	const location = useLocation();

  	const queryParams = new URLSearchParams(location.search);
  	const filtro = queryParams.get('productsorder');
	console.log('filtro: ',filtro);

	const [sortType, setSortType] = useState(filtro != null ? filtro: "mostRecent");
	
	//filter mostRecent, lowToHigh, highToLow
	const {
		data: products,
		isLoading,
		error,
	  } = useQuery(["allProducts", sortType], () => getData(sortType));
	  
	console.log('Inicio HotelList b');
	if (isLoading) {
		//return <div>Loading...</div>;
		return <Typography variant="body2" color="text.secondary">
				Loading...
			</Typography>;
	}
	console.log('Inicio HotelList c');

	if (error) {
		//return <div>Error fetching Hotels! {error.message}</div>;
		return <Typography variant="body2" color="text.secondary">
				Error fetching Hotels! {error.message}
			</Typography>;
	}

	const handleButtonClick = (productsorder) => {
		// Aquí puedes realizar cualquier lógica adicional antes de cambiar la URL
		// Redirige a la misma página con el filtro de orden en la URL
    	navigate(`?productsorder=${productsorder}`);
		//hay que agregarle esto ya que con la linea de arriba se cambia la url del navegador pero la que usa react no se cambia, para que funcione tiene que haber un refresco de pagina (dando refrsh a la pagina o pasar a otra pagina y volver)
		setSortType(productsorder);
	};

	const buttonStyleDeselected = {
		background: '#ededed',
		borderRadius: '100px',
		width: '100%',
		height: '48px',
		padding: '5px',
		marginBottom: '10px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'&:focus': {
		  outline: 'none',
		},
		'&:active': {
		  boxShadow: 'none',
		},
	};
	const buttonStyleSelected = {
		background: '#0ad4fa',
		borderRadius: '100px',
		width: '100%',
		height: '48px',
		padding: '5px',
		marginBottom: '10px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'&:focus': {
		  outline: 'none',
		},
		'&:active': {
		  boxShadow: 'none',
		},
	  };
	
	const buttonTextStyleDeselected = {
		fontFamily: 'SourceSansPro-Regular',
		fontSize: '20px',
		color: '#a3a3a3',
		letterSpacing: '-0.15px',
		lineHeight: '48px',
		textAlign: 'center',
	};
	const buttonTextStyleSelected = {
		fontFamily: 'SourceSansPro-Regular',
		fontSize: '20px',
		color: '#ffffff',
		letterSpacing: '-0.15px',
		lineHeight: '48px',
		textAlign: 'center',
	};

	console.log('Final HotelList');
	return (
		<>
			<Box
			display="flex"
			flexDirection={{ xs: 'column', sm: 'row' }}
			justifyContent="space-between"
			alignItems={{ xs: 'flex-start', sm: 'center' }}
			paddingInline={{ xs: '15px', sm: '60px' }}
			paddingTop="15px"
			paddingBottom="15px"
			>
				
				<Box
				display="flex"
				flexDirection={{ xs: 'column', sm: 'row' }}
				alignItems="center"
				marginBottom={{ xs: '15px', sm: '0' }}
				>
					<Box
					display="flex"
					alignItems="center"
					marginBottom={{ xs: '15px', sm: '0' }}
					>
					<Typography
						variant="body2"
						style={{
						fontFamily: 'SourceSansPro-Regular',
						fontSize: '24px',
						color: '#616161',
						letterSpacing: '-0.15px',
						lineHeight: '48px',
						textAlign: 'left',
						whiteSpace: 'nowrap', // Añadida para mantener el texto en una línea
						}}
					>
						{products.length} de {products.length} productos
					</Typography>
					<div
						style={{
						background: '#d9d9d9',
						width: '1px',
						height: '30px',
						marginInline: '24px',
						}}
					></div>
					<Typography
						variant="body2"
						style={{
						fontFamily: 'SourceSansPro-Regular',
						fontSize: '24px',
						color: '#a3a3a3',
						letterSpacing: '-0.15px',
						lineHeight: '48px',
						textAlign: 'left',
						whiteSpace: 'nowrap', // Añadida para mantener el texto en una línea
						}}
					>
						Ordenar por:
					</Typography>
					</Box>


					<Button
					variant="contained"
					disableFocusRipple
					onClick={() => handleButtonClick('mostRecent')}
					sx={sortType === "mostRecent" ? buttonStyleSelected : buttonStyleDeselected}
					>
					<Typography
						variant="body2"
						sx={{
						whiteSpace: 'nowrap', // Añadida para mantener el texto en una línea
						...((sortType === "mostRecent") ? buttonTextStyleSelected : buttonTextStyleDeselected),
						}}
					>
						Most recent
					</Typography>
					</Button>

					<Button
					variant="contained"
					disableFocusRipple
					onClick={() => handleButtonClick('lowToHigh')}
					sx={sortType === "lowToHigh" ? buttonStyleSelected : buttonStyleDeselected}
					>
					<Typography
						variant="body2"
						sx={{
						whiteSpace: 'nowrap', // Añadida para mantener el texto en una línea
						...((sortType === "lowToHigh") ? buttonTextStyleSelected : buttonTextStyleDeselected),
						}}
					>
						Lowest price
					</Typography>
					</Button>

					<Button
					variant="contained"
					disableFocusRipple
					onClick={() => handleButtonClick('highToLow')}
					sx={sortType === "highToLow" ? buttonStyleSelected : buttonStyleDeselected}
					>
					<Typography
						variant="body2"
						sx={{
						whiteSpace: 'nowrap', // Añadida para mantener el texto en una línea
						...((sortType === "highToLow") ? buttonTextStyleSelected : buttonTextStyleDeselected),
						}}
					>
						Highest price
					</Typography>
					</Button>

					
					</Box>
					<Box>
					<IconButton
					sx={{
						borderRadius: '50%',
						backgroundColor: '#fff',
						border: '1px solid #ccc',
						marginLeft: { xs: '0', sm: '10px' },
					}}
					>
						<ArrowForwardIcon />
					</IconButton>
				</Box>
			</Box>;

			<Grid container spacing={2} textAlign="-webkit-center" sx={{ marginTop: "0px", backgroundColor: "#f9f9f9" }}>{/* backgroundColor: "#f9f9f9"*/}
				{products.map((product) => (
					<Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
					<Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
						<Card sx={{
							//maxWidth: 345, // Ancho máximo fijo para todas las tarjetas
							backgroundColor: "#ffffff",//backgroundColor: "#ffffff",
							//display: "flex",
							
							height: "276px", // Altura fija para el contenedor de la tarjeta
							width: "276px", // Ancho fijo del 100%
							//justifyContent: "space-between", // Alinea los elementos en el eje principal
							//flexDirection: "column",
							
							}}>
						
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Box sx={{ position: "relative" }}>
								<Link to="/" style={{ textDecoration: "none", color: "616161", position: "absolute", top: 10, right: 10 }}>
									<img src="/buy-blue.svg" alt="" />
								</Link>
								<CardMedia sx={{ height: 200, backgroundSize: "auto" }} image={product.img.url} title={product.name} />
							</Box>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									{product.category}
								</Typography>
								<Typography gutterBottom variant="h5" component="div">
									{product.name} {/*key {product._id}*/}
								</Typography>
							</CardContent>
						</Box>
						</Card>
					</Link>
					</Grid>
				))}
			</Grid>
		</>
		
	  );
};

export default PageHotelList;
