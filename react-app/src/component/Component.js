import "../App.css";
const Component = ({ name, university, rollNo, batchSize, login }) => {
  let loginStatus = login;
  return (
    <div className="Component">
      {loginStatus == true ? (
        <div>
          <h1>Name: {name}</h1>
          <h1>University: {university}</h1>
          <h1>Roll No: {rollNo}</h1>
          <h1>batchSize: {batchSize}</h1>
          <button>Sign-Out</button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              loginStatus = true;
              console.log(loginStatus);
            }}
          >
            Sign-In
          </button>
        </div>
      )}
      {10 > 5 && alert("10 is greater than 5")}
    </div>
  );
};

export default Component;
