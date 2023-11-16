import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Box} from "@mui/material";

/* <AppBar position="static" sx={{ backgroundColor: "#ffffff" }}> */
const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff" }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "616161" }}>
               <img src="/vite_aero.svg" alt="" />
            </Link>
          </Typography>
          <Link to="/user" style={{
              fontFamily: "SourceSansPro-Regular",
              fontSize: "24px",
              color: "#616161",
              letterSpacing: "-0.15px",
              lineHeight: "48px",
              textAlign: "left",
              marginRight: "17px", // Espacio entre "John Kite" y el elemento Box
            }}>
              Angel Palacios
          </Link>
          <Box
            display="inline-flex"
            alignItems="center"
            bgcolor="#ededed"
            borderRadius="100px"
            width="103px"
            height="48px"
            sx={{
              fontFamily: "SourceSansPro-Regular",
              fontSize: "24px",
              color: "#616161",
              letterSpacing: "-0.15px",
              lineHeight: "48px",
              textAlign: "left",
            }}
          >
            <span style={{marginLeft: "13px", marginRight: "6px" }}>6000</span>
            <img src="/coin.svg" alt="" style={{ width: "24px", height: "24px", marginLeft: "0px", marginRight: "11px" }} />
          </Box>
          {/* Icono del carrito con enlace a la página del carrito */}
          <Link to="/cart" style={{ textDecoration: "none", color: "#616161" }}>
            <Box
              display="inline-flex"
              alignItems="center"
              bgcolor="#ededed"
              borderRadius="100px"
              width="48px"
              height="48px"
              justifyContent="center"
              sx={{
                fontFamily: "SourceSansPro-Regular",
                fontSize: "24px",
                color: "#616161",
                letterSpacing: "-0.15px",
                lineHeight: "48px",
                textAlign: "center",
                marginLeft: "17px",
              }}
            >
              🛒
            </Box>
          </Link>
          {/* Agrega otros elementos de la barra de navegación aquí */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
