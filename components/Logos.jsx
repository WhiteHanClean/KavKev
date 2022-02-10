import React from 'react';

const Logos = ({ image }) => {
  return (
    <div
      style={{
        width: '150px',
        margin: '0 auto',
        marginTop: '50px',
      }}
    >
      <img
        src={image}
        alt='asd'
        style={{
          width: '150px',
          height: '150px',
        }}
      />
    </div>
  );
};

export default Logos;

// aiba lox 24
