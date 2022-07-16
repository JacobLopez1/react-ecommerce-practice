import React from "react";

const Cart = ({ cart, changeQuantity, removeItem }) => {
  const subtotal = () => {
    let price = 0;
    cart.forEach((item) => {
      price += +(item.quantity * (item.salePrice || item.originalPrice));
    });
    return price.toFixed(2);
  };

  const getTax = () => {
    return (subtotal() * 0.06).toFixed(2)
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__price">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((book, index) => {
                  return (
                    <div className="cart__item" key={index}>
                      <div className="cart__book">
                        <img
                          src={book.url}
                          alt=""
                          className="cart__book--img"
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {book.title}
                          </span>
                          <span className="cart__book--price">
                            ${(+book.salePrice || +book.originalPrice).toFixed(2)}
                          </span>
                          <button className="cart__book--remove" onClick={() => removeItem(book)}>Remove</button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          value={book.quantity}
                          className="cart__input"
                          onChange={(event) =>
                            changeQuantity(book, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">
                        $
                        {(
                          book.quantity * (book.salePrice || book.originalPrice)
                        ).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>${subtotal()}</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>${getTax()}</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>${(+subtotal() + +getTax()).toFixed(2)}</span>
              </div>
              <button
                className="btn btn__checkout no-cursor"
                onClick={() => alert("Checkout not implemented")}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
