import React, { useState } from "react";
import s from "./style.module.css";

const PokemonItem = (props) => {
  const [isHovered, setIsHover] = useState(false);

  const onPokemonItemClick = () => {
    props.onClick(props.pokemon);
  };
  const activate = () => {
    setIsHover(true);
  };

  const deactivate = () => {
    setIsHover(false);
  };
  const getBackgroundColor = () => {
    if (isHovered) {
      return "#a5e96f";
    } else {
      if (props.isSelected) {
        return "#25e16f";
      } else {
        return "#eff5ef";
      }
    }
  };
  return (
    <div
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onClick={onPokemonItemClick}
      style={{ backgroundColor: getBackgroundColor() }}
    className={s.container} >
      <div >
        <p>{props.pokemon.national_number} {props.pokemon.name}</p> 
         <div>
                  <img width='100' height='auto' src={props.pokemon.sprites.animated}></img>

          </div>
      </div>
    
      <div>
        <p> {props.pokemon.evolution?.name} </p>
        <p>
          [{" "}
          {props.pokemon.type.map((type) => (
            <span> {type} </span>
          ))}{" "}
          ]
        </p>
        <p> Attack: {props.pokemon.attack} </p>
        <p> Defense: {props.pokemon.defense} </p>
      </div>
        
    </div>
  );
};

export default PokemonItem;
