/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function Services({serviceTypes}) {
  return (
    <>
    {serviceTypes.map((serviceType, id)=> (
      <div key={id}>
        <h2>{serviceType.name}</h2>
        <p>{serviceType.description}</p>
        <Link to={`/services/${serviceType.id}`}>See More</Link>
      </div>
    ))}
    </>
  )
}

export default Services