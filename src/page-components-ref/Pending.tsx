//Your Current Group -> Pending

let heading = "Your Current Group";

const Pendings = [
  { id: 1, name: "group-name1", description: "hello", user: "Park" },
  { id: 2, name: "group-name2", description: "hi", user: "Son" },
];

import React from "react";
import { MouseEvent } from "react";

function Pending() {
  let selectedIndex = -1;
  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      {Pendings.length === 0 && <p> No items found</p>}
      <ul className="list-group">
        {Pendings.map((Pendings, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={Pendings.id}
            onClick={handleClick}
          >
            <h3>Pending Request : {Pendings.name}</h3>
            <div>
              <p>description : {Pendings.description}</p>
              <p>User : {Pendings.user}</p>
              <button>Approve</button>
              <button>Deny</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Pending;
