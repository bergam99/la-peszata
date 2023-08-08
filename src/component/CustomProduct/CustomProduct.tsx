import { useState } from "react";
import { useCartContext } from "../../context/ShoppingCartContext";
import QuantityPicker from "../QuantityPicker/QuantityPicker";
const { addOne } = useCartContext();
const [quantity, setQuantity] = useState(1);
const add = () => setQuantity(quantity + 1);
const remove = () => (quantity > 1 ? setQuantity(quantity - 1) : null);

const CustomProduct = () => {
    <QuantityPicker quantity={quantity} add={add} remove={remove} />

}
export default CustomProduct;
