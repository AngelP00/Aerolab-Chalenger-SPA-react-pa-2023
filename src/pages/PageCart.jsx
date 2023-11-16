/*
import { Typography } from "@mui/material";
import useStore from "../store";

const PageCart = () => {
  return (
    <>
      <Typography
        variant="h4"
        color="textPrimary"
        style={{
          fontFamily: "SourceSansPro-Regular",
          fontSize: "24px",
          color: "#616161",
          letterSpacing: "-0.15px",
          lineHeight: "48px",
          textAlign: "left",
        }}
      >
        Cart
      </Typography>
    </>
  );
};

export default PageCart;
*/
// PageCart.js
import {Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import useStore from "../store";
import BookingFormCart from "../components/BookingFormCart";

const PageCart = () => {
  const productsInCart = useStore((state) => state.products);
  console.log(productsInCart);

  return (
    <div>
      <Typography
        variant="h4"
        color="textPrimary"
        style={{
          fontFamily: "SourceSansPro-Regular",
          fontSize: "24px",
          color: "#616161",
          letterSpacing: "-0.15px",
          lineHeight: "48px",
          textAlign: "left",
        }}
      >
        Shopping Cart
      </Typography>
      <Typography
        variant="h4"
        color="textPrimary"
        style={{
          fontFamily: "SourceSansPro-Regular",
          fontSize: "24px",
          color: "#616161",
          letterSpacing: "-0.15px",
          lineHeight: "48px",
          textAlign: "left",
        }}
      >
        {productsInCart.length} producto/s en el carrito
      </Typography>
      <Grid container spacing={2} textAlign="-webkit-center" sx={{ marginTop: "0px", backgroundColor: "#f9f9f9" }}>{/* backgroundColor: "#f9f9f9"*/}
        {productsInCart.map((product, index) => (
					<Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
					<Link to={`/product/${product.product._id}`} style={{ textDecoration: "none" }}>
          <Card sx={{
							//maxWidth: 345, // Ancho máximo fijo para todas las tarjetas
							backgroundColor: "#ffffff",//backgroundColor: "#ffffff",
							//display: "flex",
							
							//height: "310px", // Altura fija para el contenedor de la tarjeta
							width: "276px", // Ancho fijo del 100%
							//justifyContent: "space-between", // Alinea los elementos en el eje principal
							//flexDirection: "column",
							
							}}>
						
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Box sx={{ position: "relative" }}>
								<Link to="/" style={{ textDecoration: "none", color: "616161", position: "absolute", top: 10, right: 10 }}>
									<img src="/buy-blue.svg" alt="" />
								</Link>
								<CardMedia sx={{ height: 200, backgroundSize: "auto" }} image={product.product.img.url} title={product.product.name} />
							</Box>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									{product.product.category}
								</Typography>
								<Typography gutterBottom variant="h5" component="div">
									{product.product.name} {/*key {product.product._id}*/}
								</Typography>
                <Typography gutterBottom variant="body2" component="div">
                  Added To Cart Date: {product.dates.addedToCartDate} {/*key {product.product._id}*/}
								</Typography>
                <Typography gutterBottom variant="body2" component="div">
									Quantity: {product.dates.quantity} {/*key {product.product._id}*/}
								</Typography>
                
							</CardContent>
						</Box>
						</Card>
					</Link>
					</Grid>
				))}
			</Grid>
      
      {productsInCart.length > 0 && (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", height: "100vh", margin: "20px" }}>
          <Card sx={{ backgroundColor: "#e8e8e8" }}>
            <CardActions>
              {/*<BookingFormAddProductToCart /> */}
              <BookingFormCart productsInCart={productsInCart} />
            </CardActions>
          </Card>
        </div>
      )}

    </div>
  );
};

export default PageCart;

