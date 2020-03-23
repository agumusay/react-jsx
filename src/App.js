import React from "react";
import "./styles/App.scss";
import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      <h1>People List</h1>
      <ul>
        {data.map(person => {
          return (
            <li key={person.id}>
              <div className="head">
                <img src={person.avatar} alt="" />
                <div className="name-container">
                  <div className="name">
                    {person.firstName} {person.lastName}{" "}
                    {person.isAdmin ? <span>Admin</span> : null}
                  </div>
                  <p className="title">{person.title}</p>
                </div>
              </div>
              <div className="foot">
                <div className="phone">
                  <img src="" alt="" />
                  <p className="phone">{person.contact.phone}</p>
                </div>
                <div className="e-mail">
                  <img src="" alt="" />
                  <p className="email">{person.contact.email}</p>
                </div>
                <div className="website">
                  <img src="" alt="" />
                  <p className="website">{person.contact.url}</p>
                </div>
              </div>
              <div className="date">
                member since {new Date(person.memberSince).toLocaleDateString("de")}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
