import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import useStore from "../store";
import { Typography } from "@mui/material";

const BookingFormAddProductToCart = ({ product }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const addProduct = useStore((state) => state.addProduct);

  const onSubmit = (data) => {
    const currentDate = new Date().toISOString(); // Obtiene la fecha actual como una cadena ISO
    const dataWithDate = {
      ...data,
      addedToCartDate: currentDate,
    };

    addProduct(product, dataWithDate);
    console.log("product buy: ", dataWithDate);
    toast.success("Product added to cart successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Quantity:</label>
        {/* Quantity of the product to purchase */}
        <Input
          type="number"
          {...register("quantity", { required: true, min: 1 })}
          placeholder="Quantity"
        />
        {errors.quantity && (
          <Typography style={{ color: "red" }}>Quantity is required (minimum 1)</Typography>
        )}
      </div>
      <br />

      {/* Button to submit the order */}
      <Button variant="contained" type="submit">
        Add to cart
      </Button>
    </form>
  );
};

export default BookingFormAddProductToCart;
