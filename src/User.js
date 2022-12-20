import React from 'react';

export default function User(props) {
  const { data } = props;
  return (
    <>
      <p>{data.name}</p>
      <p>{data.age}</p>
    </>
  );
}
