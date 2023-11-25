interface Props {
  publicGroups: string[];
  heading: string;
}


let heading = "groups you may enjoy"

//그룹의 이름과 설명
const Groups = [
  {id:1, name:'study Group 1', discription:'we are '},
  {id:2, name:'study Group 2', discription:'KU '},
  {id:3, name:'study Group 3', discription:'Students '}
]

import { MouseEvent } from "react";

function ListGroup() {
  let selectedIndex = -1;
  
  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      <div style = {{display: 'flex'}}>
        <p style = {{marginLeft: '10px', fontSize : '20px'}}>Best Match</p>
        <p style = {{marginLeft: '30px', fontSize : '20px'}}>popular</p>
      </div>

      {Groups.length === 0 && <p> No items found</p>}
      <ul className="list-group">
        {Groups.map((Groups, index) => (
          <li
            className={
              selectedIndex === index ? "list-group-item active" : "list-group-item"
            }
            key={Groups.id}
            onClick={handleClick}
          >
            <h3>{Groups.name}</h3>
            <div>
              <p>{Groups.discription}</p> 
              <button >Join here!</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
