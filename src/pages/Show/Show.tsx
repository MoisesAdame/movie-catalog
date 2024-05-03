import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const Show = () => {

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <h1>ID: {id}</h1>
      <div>Tíyulo del state: <span>{location.pathname}</span></div>
      <button onClick={goBack}> Ir atrás</button>
    </div>
  )
}

export default Show;
