import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import useStore from "../store";
import { Typography } from "@mui/material";

const BookingForm = ({ hotel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const addReservation = useStore((state) => state.addReservation);

  const onSubmit = (data) => {
    addReservation(hotel, data);
    toast.success("Purchase successful!");
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

      <div>
        <label>Address:</label>
        {/* Shipping address */}
        <Input
          {...register("address", { required: true })}
          placeholder="Address"
        />
        {errors.address && (
          <Typography style={{ color: "red" }}>Address is required</Typography>
        )}
      </div>
      <br />

      <div>
        <label>Postal Code:</label>
        {/* Postal code for the shipping address */}
        <Input
          {...register("postalCode", { required: true })}
          placeholder="Postal Code"
        />
        {errors.postalCode && (
          <Typography style={{ color: "red" }}>Postal Code is required</Typography>
        )}
      </div>
      <br />

      <div>
        <label>Email:</label>
        {/* Email address for order confirmation */}
        <Input
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
        />
        {errors.email && (
          <Typography style={{ color: "red" }}>Valid email is required</Typography>
        )}
      </div>
      <br />

      <div>
        <label>Phone Number:</label>
        {/* Phone number for order communication */}
        <Input
          type="tel"
          {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}
          placeholder="Phone Number"
        />
        {errors.phone && (
          <Typography style={{ color: "red" }}>Valid phone number is required</Typography>
        )}
      </div>
      <br />

      <div>
        <label>Credit Card Number:</label>
        {/* Credit card number for payment */}
        <Input
          type="text"
          {...register("creditCard", { required: true, pattern: /^[0-9]{16}$/ })}
          placeholder="Credit Card Number"
        />
        {errors.creditCard && (
          <Typography style={{ color: "red" }}>Valid credit card number is required</Typography>
        )}
      </div>
      <br />

      {/* Button to submit the order */}
      <Button variant="contained" type="submit">
        Buy Product
      </Button>
    </form>
  );
};

export default BookingForm;
