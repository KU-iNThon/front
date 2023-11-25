import React from "react";

let heading = "Your Current Group";

const NewTasks = [
  {
    id: 1,
    title: "New Task1",
    description: "Admin Created a new Task",
    startdate: "2023 Nov 25 06:00pm",
    enddate: "2023 Nov 26 23:59pm",
  },
  {
    id: 2,
    title: "New Task2",
    description: "Admin Created a new Task Twice!",
    startdate: "2023 Nov 24 07:16pm",
    enddate: "2023 Nov 25 11:00pm",
  },
];

const Announcements = [
  {
    id: 1,
    title: "New Announcement1",
    description: "Lost item, find it",
    posted: "2023 Nov 25 06:00pm",
    link: "Go to leave a comment",
  },
];
import { MouseEvent } from "react";

function Notification() {
  let selectedIndex = -1;

  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      {NewTasks.length === 0 && <p> No items found</p>}
      <h2>New Tasks</h2>
      <ul className="list-group">
        {NewTasks.map((NewTasks, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={NewTasks.id}
            onClick={handleClick}
          >
            <div>
              <h3>{NewTasks.title}</h3>
              <p>{NewTasks.description}</p>
              <p>Start Date {NewTasks.startdate}</p>
              <p>End Date {NewTasks.enddate}</p>
            </div>
          </li>
        ))}
      </ul>

      {Announcements.length === 0 && <p> No items found</p>}
      <h2>Announcements</h2>
      <ul className="list-group">
        {Announcements.map((Announcements, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={Announcements.id}
            onClick={handleClick}
          >
            <div>
              <h3>{Announcements.title}</h3>
              <p>{Announcements.description}</p>
              <p>Start Date {Announcements.posted}</p>
              <p>End Date {Announcements.link}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Notification;
