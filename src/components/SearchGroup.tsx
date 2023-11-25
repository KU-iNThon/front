//그룹 검색 창 있는 부분
//검색은 구현 안됐다.

function SearchGroup(){
  return(
	<div>
    <input type = "text" placeholder="Groupname" style = {{width: '400px'}}/>
		<button onClick={() => alert('Submitted!')} style = {{marginLeft : '10px'}}>Submit</button>
  </div>
	);
}


export default SearchGroup;