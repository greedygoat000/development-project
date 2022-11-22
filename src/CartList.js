import React from 'react';


export default function CartList(props) {
  const createEntry = (m) => {
    return (
      <div className='cart-item'>
        <h3>{m.name}</h3>
        <p>${m.price.toFixed(2)}</p>
        <button onClick={() => props.removeM(m.key, m.price)}>
          Remove
        </button>
      </div>
    );
  };
  const mData = props.m;
  const listM = mData.map(createEntry);
  return <list>{listM}</list>;
}
