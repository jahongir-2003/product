import React from "react";
import { GlobalContext } from "context";
import { useUpdateCart } from "hooks";
import Minus from "assets/images/Minus.png";
import Plus from "assets/images/Plus.png";
import RemoveBasket from "assets/images/RemoveBasket.png";
import { toast } from "react-toastify";
import { CART_ACTIONS_STATUS } from "constants/common";

const CartTableBody = () => {
  const [updateCart] = useUpdateCart();

  const {
    states: { carts },
    actions: {},
  } = React.useContext(GlobalContext);

  const findIndex = React.useCallback(
    (productId) => {
      return carts.findIndex((cart) => cart.id === productId);
    },
    [carts]
  );

  const incrementAmount = (productId) => {
    carts[findIndex(productId)].amount++;
    updateCart(carts);
  };
  const decrementAmount = (productId) => {
    if (carts[findIndex(productId)].amount > 1) {
      carts[findIndex(productId)].amount--;
      updateCart(carts);
    }
  };

  const removeProduct = (productId) => {
    const title = carts[findIndex(productId)]?.title;
    carts.splice(findIndex(productId), 1);
    updateCart(carts, { status: CART_ACTIONS_STATUS.remove, title });
  };

  return (
    <tbody className="cart-table-body">
      {carts.map((product, index) => (
        <tr key={product.id}>
          <td>{index + 1}</td>
          <td className="bg-white">
            <img
              width="50px"
              src={product.image}
              className="img-fluid"
              alt={product.title}
            />
          </td>
          <td colSpan="1">{product.title}</td>
          <td className="text-uppercase">{product.category}</td>
          <td>{product.price} &#36;</td>
          <td>
            <div className="ms-3 count-box d-flex align-items-center justify-content-center">
              <button
                className="btn btn-warning"
                disabled={product.amount < 2}
                onClick={() => decrementAmount(product.id)}
              >
                <img width="20px" height="20px" src={Minus} alt="minus btn" />
              </button>
              <div className="count mx-3 text-dark fw-bold">
                {product.amount}
              </div>
              <button
                className="btn btn-success"
                onClick={() => incrementAmount(product.id)}
              >
                <img width="20px" height="20px" src={Plus} alt="plus btn" />
              </button>
            </div>
          </td>
          <td>{product.price} &#36;</td>
          <td>
            <img
              onClick={() => removeProduct(product.id)}
              width="40px"
              height="40px"
              src={RemoveBasket}
              alt="Remove product"
              style={{ cursor: "pointer" }}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default CartTableBody;
