
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

}

export default SearchGroup;
