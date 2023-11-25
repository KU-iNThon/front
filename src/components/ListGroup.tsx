interface Props {
  publicGroups: string[];
  heading: string;
}

import { MouseEvent } from "react";

function ListGroup({ publicGroups, heading }: Props) {
  let selectedIndex = -1;

  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1> {heading}</h1>
      {publicGroups.length === 0 && <p> No items found</p>}
      <ul className="list-group">
        {publicGroups.map((publicGroups, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={publicGroups}
            onClick={handleClick}
          >
            {publicGroups}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
