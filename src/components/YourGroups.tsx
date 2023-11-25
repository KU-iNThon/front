import SearchGroup from "./SearchGroup";
import { MouseEvent } from "react";
import React, { useState } from "react"; // PureComponent를 사용하지 않으므로 수정
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function YourGroups() {
  const YourGroupsData = [
    {
      id: 1,
      name: "group-name",
      total_task: 10,
      completed_task: 2,
      role: "admin|user",
      closed: false,
    },
    {
      id: 2,
      name: "group-name",
      total_task: 20,
      completed_task: 5,
      role: "admin|user",
      closed: true,
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const YourGroups_completed_task = YourGroupsData.map(
    (group) => group.completed_task
  );

  const handleClick = (index: number) => {
    console.log(`Item clicked: ${index}`);
    setSelectedIndex(index);
  };

  return (
    <>
      <div>
        <SearchGroup />
      </div>

      {YourGroupsData.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {YourGroupsData.map((group, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={group.id}
            
          >
            <h3>{group.name}</h3>
            <div>
              <p>completed task {group.completed_task}</p>
              <p>total task {group.total_task} Active Users</p>
              <p>admin : {group.role}</p>
              <p>closed : {group.closed.toString()}</p>
              <p>참석률</p>
              <ResponsiveContainer width="10%" height={200}>
                <BarChart data={[{ value: group.completed_task }]}>
                  <Bar dataKey="value" fill="#DC143C" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, group.total_task]} />{" "}
                  {/* Y축의 최소값은 0, 최대값은 group.total_task */}
                  <Tooltip />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default YourGroups;
