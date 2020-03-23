import React from "react";
import "./styles/App.scss";
import data from "./data/data.json";

//Logos
import phoneLogo from "./assets/phone.svg";
import mailLogo from "./assets/mail.svg";
import webLogo from "./assets/xing-website-logo.svg";
function App() {
  return (
    <div className="App">
      <h1>People List</h1>
      <ul>
        {data.map(person => {
          return (
            <li key={person.id}>
              <div className="head">
                <img src={person.avatar} alt={person.firstName + " " + person.lastName} />
                <div className="name-container">
                  <div className="name">
                    {person.firstName} {person.lastName}
                    {person.isAdmin ? <span>Admin</span> : null}
                  </div>
                  <p className="title">{person.title}</p>
                </div>
              </div>
              <div className="foot">
                <a className="phone" href={"tel:" + person.contact.phone}>
                  <img src={phoneLogo} alt="" />
                  <p className="phone">{person.contact.phone}</p>
                </a>
                <a className="e-mail" href={"mailto:" + person.contact.email}>
                  <img src={mailLogo} alt="" />
                  <p className="email">{person.contact.email}</p>
                </a>
                <a className="website" href={person.contact.url}>
                  <img src={webLogo} alt="" />
                  <p className="website">{person.contact.url}</p>
                </a>
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
