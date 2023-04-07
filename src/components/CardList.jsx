import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardList = ({ forecast, units }) => {
  const [tomorrow, setTomorrow] = useState(null);
  const [day1, setday1] = useState(null);
  const [day2, setday2] = useState(null);
  const [day3, setday3] = useState(null);
  const [day4, setday4] = useState(null);

  useEffect(() => {
    if (forecast) {
      // console.log(">>> : ", forecast);

      // Array.from(forecast.entries()).forEach(([key, value]) => {
      //   console.log("key: ", key + "#value:", value);
      // });

      const iterator1 = forecast.entries();
      iterator1.next().value;

      setTomorrow(iterator1.next().value);
      setday1(iterator1.next().value);
      setday2(iterator1.next().value);
      setday3(iterator1.next().value);
      setday4(iterator1.next().value);
    }
  }, [forecast]);

  if (!forecast) return null;

  return (
    <ul className=" grid-adaptive mb-10">
      {tomorrow ? (
        <Card dayInfo={tomorrow} isItTomorrow={true} units={units} />
      ) : (
        ""
      )}
      {day1 ? <Card dayInfo={day1} isItTomorrow={false} units={units} /> : ""}
      {day2 ? <Card dayInfo={day2} isItTomorrow={false} units={units} /> : ""}
      {day3 ? <Card dayInfo={day3} isItTomorrow={false} units={units} /> : ""}
      {day4 ? <Card dayInfo={day4} isItTomorrow={false} units={units} /> : ""}
    </ul>
  );
};

export default CardList;
