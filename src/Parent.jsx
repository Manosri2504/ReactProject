
import React from "react";
import Child from "./Child";

function Parent() {
  const user1 = {
    name: "Kamal",
    age: 25,
    city: "Salem",
  };

  const user2 = {
    name: "Arun",
    age: 24,
    city: "Chennai",
  };

  const user3 = {
    name: "Hari",
    age: 23,
    city: "Coimbatore",
  };

  const user4 = {
    name: "Meena",
    age: 22,
    city: "Madurai",
  };

  const user5 = {
    name: "Ravi",
    age: 21,
    city: "Trichy",
  };

  return (
    <div>
      <h1>User Details</h1>

      <Child user="User 1" name={user1.name} age={user1.age} city={user1.city} />

      <Child user="User 2" name={user2.name} age={user2.age} city={user2.city} />

      <Child user="User 3" name={user3.name} age={user3.age} city={user3.city} />

      <Child user="User 4" name={user4.name} age={user4.age} city={user4.city} />

      <Child user="User 5" name={user5.name} age={user5.age} city={user5.city} />
    </div>
  );
}

export default Parent;