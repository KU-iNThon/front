<<<<<<< HEAD
//그룹 검색 창 있는 부분
//검색은 구현 안됐다.

function SearchGroup(){
  return(
	<div>
    <input type = "text" placeholder="Groupname" style = {{width: '400px'}}/>
		<button onClick={() => alert('Submitted!')} style = {{marginLeft : '10px'}}>Submit</button>
  </div>
	);
=======
function SearchGroup() {
  return (
    <div>
      <input type="text" placeholder="Groupname" style={{ width: "200px" }} />
      <button
        onClick={() => alert("Submitted!")}
        style={{ marginLeft: "10px" }}
      >
        Submit
      </button>
    </div>
  );
>>>>>>> 0394c9c9c7a616c36623d6077ead3e1f94e287f5
}

export default SearchGroup;
