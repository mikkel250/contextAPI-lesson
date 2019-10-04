import { createContext } from "react";

const CartContex = createContext({
  hidden: true,
  toggleHidden: () => {} // this is an anonymous function that does nothing so that if there is no new function written for when toggleHidden is called, it will return null and not throw an error if it returns something unexpected
});

export default CartContex;
