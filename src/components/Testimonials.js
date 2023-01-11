import React from "react";
import '../styles/Testimonials.css'

export default function Testimonial(props) {
  return ( 
    <div className="testimonial-container">
      <img className="testimonial-img"
        src={require(`../img/${props.imagen}.png`)}
        alt="Emma's Pic" />
      <div className="testimonial-text-container">
        <p className="testimonial-name">{props.nombre} de {props.pais}</p>
        <p className="testimonial-cargo">{props.cargo} en {props.empresa}</p>
        <p className="testimonial-text">{props.testimonio}</p>
      </div>
    </div>
  );
}