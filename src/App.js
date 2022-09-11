import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ContactList from "./components/ContactList";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  const [contacts, setContacts] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    const res = await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
    });
    console.log(res.data);
    setContacts(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // Key is added to only render
  return (
    <div>
      {/* <h1>RESONATE CONTACT LISTS</h1> */}
      <ContactList contacts={contacts}></ContactList>
    </div>
  );
}

export default App;
