//Find Groups

import SearchGroup from "./SearchGroup";

let heading = "groups you may enjoy"

//그룹의 이름과 설명
const Groups = [
  {"id": 1, "title": "title1", "description": "description1", "room_name": "room_name1", people:10, location:"Anam"},
	{"id": 2, "title": "title2", "description": "description2", "room_name": "room_name2", people:20, location:"Sinchon"}
]

import { MouseEvent } from "react";

function ListGroup() {
  <div>
    <SearchGroup/>
  </div>
  
  let selectedIndex = -1;
  
  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <div><SearchGroup/></div>
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
            <h3>{Groups.room_name}</h3>
            <div>
              <p>{Groups.description}</p>
              <p>{Groups.people} Actie Users</p>
              <p>location : {Groups.location}</p>
              <button >Join here!</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
