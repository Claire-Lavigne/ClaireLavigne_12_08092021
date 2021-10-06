import React from "react";
import PropTypes from "prop-types";
import "./card.css";

/**
 *
 * This composent displays the user keydatas within cards
 *
 */
const Card = (props) => {
  let KeyData = [
    {
      icon: "/assets/calories-icon.png",
      iconDesc: "icone calories",
      title: `${props.title.calorieCount}kCal`,
      subtitle: "Calories",
    },
    {
      icon: "/assets/protein-icon.png",
      iconDesc: "icone proteines",
      title: `${props.title.proteinCount}g`,
      subtitle: "Protéines",
    },
    {
      icon: "/assets/carbs-icon.png",
      iconDesc: "icone glucides",
      title: `${props.title.carbohydrateCount}g`,
      subtitle: "Glucides",
    },
    {
      icon: "/assets/fat-icon.png",
      iconDesc: "icone lipides",
      title: `${props.title.lipidCount}g`,
      subtitle: "Lipides",
    },
  ];

  return (
    <div className="Cards">
      {KeyData.map((item, index) => (
        <div className="card" key={`card-${index}`}>
          <img className="card-img" src={item.icon} alt={item.iconDesc} />
          <div className="card-content">
            <p className="card-title">{item.title}</p>
            <p className="card-subtitle">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.shape({
    calorieCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
    proteinCount: PropTypes.number,
  }),
};
export default Card;
