import { useState } from "react";
export default function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [query, setQuery] = useState("");
  const [btnclicked, setbtnclicked] = useState(false);
  return (
    <div className="row  text-black ">
      <div className="col-md-6" id="form">
        <div className="form-group">
          <label for="name">Enter Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="name"
          />
        </div>
        <div className="form-group" id="form">
          <label for="email">Enter Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="email"
          />
        </div>
        <div className="form-group" id="form">
          <label for="name">Enter Address</label>
          <input
            type="address"
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
            id="address"
          />
        </div>
        <div className="form-group" id="form">
          <label for="name">Enter Query</label>
          <textarea
            onChange={(e) => setQuery(e.target.value)}
            className="form-control"
            id="query"
          ></textarea>
        </div>
        <div className="form-group" id="form">
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => setbtnclicked(!btnclicked)}
          >
            Click to see changes
          </button>
        </div>
      </div>
      <div className="col-md-6">
        here you all textbox data when clicked on the button
        {btnclicked && (
          <div>
            <h3>Name:- {name}</h3>
            <h3>Email:- {email}</h3>
            <h3>Address:- {address}</h3>
            <h3>Query:- {query}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
