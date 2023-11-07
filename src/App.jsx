//import './App.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import { Route, Switch,useLocation } from "wouter";

//react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
//react-router-dom

import { Toaster } from "react-hot-toast";
import PageHotelList from "./pages/PageHotelList";
import PageHotelDetails from "./pages/PageHotelDetails";
import PageUser from "./pages/PageUser";
import PageContact from "./pages/PageContact";

import Header from "./components/Header";

function App() {
	//const [location] = useLocation(); // Obtiene la ubicación actual
	//console.log('App()');
	//console.log('Location:',location);
	return (
		//wouter
		/*
		<div>
			<h1>Ruta actual: {location}</h1>
			<Toaster position="top-left" reverseOrder={false} />
			<QueryClientProvider client={new QueryClient()}>
				<Header />
				<Switch>
					<Route path="/" component={PageHotelList} />
					<Route path="/hotel/:id" component={HotelDetails} />
					<Route path="/about" component={PageAbout} />
					<Route path="/contact" component={PageContact} />
					<Route>
						<h2>Página no disponible</h2>
					</Route>
				</Switch>
			</QueryClientProvider>
		</div>
		*/
		/*
		hola */
		//wouter
		//wouter
		<div>
			<BrowserRouter>
				<Toaster position="top-left" reverseOrder={false} />
				<QueryClientProvider client={new QueryClient()}>
					<Header />
					<Routes>
						<Route path="/" element={<PageHotelList />} />
						<Route path="/product/:id" element={<PageHotelDetails />} />
						<Route path="/user" element={<PageUser />} />
						<Route path="/contact" element={<PageContact />} />
						
					</Routes>
				</QueryClientProvider>
			</BrowserRouter>
		</div>
		//wouter
	);
}

export default App;
