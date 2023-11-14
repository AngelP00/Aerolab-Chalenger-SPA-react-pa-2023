import Typography from "@mui/material/Typography";
import ProductList from "../components/ProductList";


const PageHotelList = () => {

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

			<ProductList />
		</>
		
	  );
};

export default PageHotelList;
