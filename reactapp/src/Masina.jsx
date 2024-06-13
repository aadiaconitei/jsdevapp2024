import React from "react";
import Car from "./Car";


export default function Masina(props) {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];

  return (
    <>
      <h1>Masinile mele</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} index={car.id} brand={car.brand} />
        ))}
      </ul>
      <div>
        Masina primita este {props.car.name} modelul {props.car.model}
      </div>
      
    </>
  );
}
