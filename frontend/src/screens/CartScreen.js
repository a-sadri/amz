import React from 'react';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  return (
    <div>
      <h2>Cart</h2>
      <p>
        Add To Cart: ProductID:{productId} Qty: {qty}
      </p>
    </div>
  );
}
