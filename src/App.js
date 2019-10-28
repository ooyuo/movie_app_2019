import React from 'react';

function Food({ name, emogi }) {
  return (
    <div>
      <h1>i like {name}</h1>
      <div>{emogi}</div>
    </div>
  )
}

const foodILike = [
  {
    name: "pizza",
    emogi: "🍕🍕🍕"
  },
  {
    name: "burger",
    emogi: "🍔🍔🍔"
  },
  {
    name: "cheese",
    emogi: "🧀🧀🧀"
  }
];
function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} emogi={dish.emogi} />
      )}
    </div>
  );
}

export default App;
