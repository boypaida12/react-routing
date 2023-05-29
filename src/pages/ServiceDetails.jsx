/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom';

function ServiceDetails({serviceTypes}) {
    const { id } = useParams();
    const serviceType = serviceTypes.find((serviceType) => serviceType.id === parseInt(id));
    return (
    <>
    <h1>Service Details -{serviceType.name}</h1>
    <p>{serviceType.description}</p>
    </>
  )
}

export default ServiceDetails