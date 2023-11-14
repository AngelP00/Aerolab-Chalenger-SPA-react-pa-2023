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

import {Paper, IconButton} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useLocation } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//end aerolab

const fetchHotels = async () => {
	const response = await fetch("http://localhost:3001/hotels");
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json();
};

const PageHotelList = () => {
	const navigate = useNavigate();
	//start aerolab
	/*
	const [data, setData] = useState([]);
	useEffect(() => {
		getData().then((data) => {
		  setData(data);
		});
	}, []);
	console.log('data: ', data);
	*/
	//end aerolab

	console.log('Inicio HotelList a');
	const location = useLocation();

  	const queryParams = new URLSearchParams(location.search);
  	const filtro = queryParams.get('productsorder');
	console.log('filtro: ',filtro);

	const [sortType, setSortType] = useState(filtro != null ? filtro: "mostRecent");
	/*
	const {
		data: products,
		isLoading,
		error,
	//} = useQuery({ queryKey: ["allProducts"], queryFn: fetchHotels });
	} = useQuery({ queryKey: ["allProducts"], queryFn: getData(sortType) });
	*/
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
	console.log('products:',products);

	if (error) {
		//return <div>Error fetching Hotels! {error.message}</div>;
		return <Typography variant="body2" color="text.secondary">
				Error fetching Hotels! {error.message}
			</Typography>;
	}


	//inicio filtrar
	//const handleSort = (type) => {
		//console.log("handleSort");
		// Actualiza el tipo de orden y vuelve a renderizar la lista de productos
		//setSortType(type);
	
		// Aquí deberías ordenar la lista de productos según el tipo seleccionado (type)
		// y luego actualizar el estado de los productos (setProducts) con la nueva lista ordenada.
		// Ejemplo (puedes utilizar tu propia lógica de ordenación):
		/*
		let sortedProducts = [...products];
		if (type === 'lowToHigh') {
		  sortedProducts.sort((a, b) => a.cost - b.cost);
		} else if (type === 'highToLow') {
		  sortedProducts.sort((a, b) => b.cost - a.cost);
		} else if (type === 'latest') {
		  sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
		}
		console.log("sortedProducts:",sortedProducts);
		 */
		//setProducts(sortedProducts);
		//products = sortedProducts;
	  //};
	//fin filtrar

	//const history = useHistory();

	const handleButtonClick = (productsorder) => {
		// Aquí puedes realizar cualquier lógica adicional antes de cambiar la URL
		//setSortType(productsorder);

		// Modificar la URL con el nuevo parámetro
		/*
		history.push({
		pathname: window.location.pathname, // Mantener la ruta actual
		search: `?productsorder=${productsorder}`, // Agregar o modificar el parámetro de consulta
		});
		*/
		// Redirige a la misma página con el filtro de orden en la URL
    	navigate(`?productsorder=${productsorder}`);
		console.log("hola23");
		//hay que agregarle esto ya que con la linea de arriba se cambia la url del navegador pero la que usa react np se cambia, para que funcione tiene que haber un refresco de pagina (dando refrsh a la pagina o pasar a otra pagina y volver)
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
				}}
				>
				Ordenar por:
				</Typography>
		</Box>
      <Button
        variant="contained"
        disableFocusRipple
		onClick={() => handleButtonClick('mostRecent')}
		sx={sortType == "mostRecent" ? buttonStyleSelected : buttonStyleDeselected}
      >
        <Typography
          variant="body2"
		  sx={sortType == "mostRecent" ? buttonTextStyleSelected : buttonTextStyleDeselected}
        >
			Most recent
        </Typography>
      </Button>

      <Button
        variant="contained"
        disableFocusRipple
		onClick={() => handleButtonClick('lowToHigh')}
		sx={sortType == "lowToHigh" ? buttonStyleSelected : buttonStyleDeselected}
      >
        <Typography
          variant="body2"
		  sx={sortType == "lowToHigh" ? buttonTextStyleSelected : buttonTextStyleDeselected}
        >
			Lowest price
        </Typography>
      </Button>

      <Button
        variant="contained"
        disableFocusRipple
		onClick={() => handleButtonClick('highToLow')}
		sx={sortType == "highToLow" ? buttonStyleSelected : buttonStyleDeselected}
      >
        <Typography
          variant="body2"
		  sx={sortType == "highToLow" ? buttonTextStyleSelected : buttonTextStyleDeselected}
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
			{/*
			<Grid container spacing={2} textAlign="-webkit-center" sx={{ marginTop: "20px" }}>
				{hotels.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
					<Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
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
						<CardMedia sx={{ height: 140 }} image={product.image} title={product.name} />
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{product.name}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{product.description.length > 130
								? `${product.description.slice(0, 130)}...`
								: product.description}
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
			*/}
		</>
		
	  );
};

export default PageHotelList;
