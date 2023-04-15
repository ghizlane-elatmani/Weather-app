import React from "react";
import Card from "./Card";

const CardList = ({ forecast, units }) => {
  if (!forecast) {
    return <></>;
  }

  return (
    <ul className=" grid-adaptive mb-10">
      {Array.from(forecast.entries()).map(([key, value], index) => {
        if (index !== 0)
          return (
            <Card
              key={key}
              dayName={key}
              day={value}
              units={units}
              index={index}
            />
          );
      })}
    </ul>
  );
};

export default CardList;
