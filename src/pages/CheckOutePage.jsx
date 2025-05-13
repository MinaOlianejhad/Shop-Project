import BasketCart from "../components/BasketCart";
import BasketSidebar from "../components/BasketSidebar";
import { useCart } from "../context/CartContext";

import styles from './CheckOutePage.module.css'

function CheckOutePage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  if(!state.itemsCounter) {
    return (
      <div className={styles.empty}>
        <p>Empty!</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler}/>
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCart
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckOutePage;
