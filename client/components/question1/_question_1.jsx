import { Counter } from "./Counter";

export const Question1 = () => {
  
  const bounds1 = { min: -5, max: 5 };
  const bounds2 = { min: -15, max: -5 };
  const bounds3 = { min: 5, max: 15 };

  return (
    <div>
      <Counter bounds={bounds1} />
      <Counter bounds={bounds2} />
      <Counter bounds={bounds3} />
    </div>
  );

};