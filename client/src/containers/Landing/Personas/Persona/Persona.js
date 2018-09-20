import React from "react";

const Persona = props => {
  return (
    <div className="Persona">
      <img className="Persona__image" src={props.image} alt="" />
      <h3 className="Persona__title">{props.targeted}</h3>
      <p className="Persona__description">{props.description}</p>
      <p className="Persona__name">
        <strong>{props.name}</strong>-{props.job}
      </p>
      <a className="Persona__button">{props.buttonText}</a>
    </div>
  );
};

export default Persona;
