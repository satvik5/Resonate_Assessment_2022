import React, { useState } from "react";
import Contact from "./Contact";
import Classes from "./ContactList.module.css";
import { Form, FormControl } from "react-bootstrap";
function ContactList(props) {
  const [filter_text, setFilter_text] = useState("");
  const updateFilterText = (event) => {
    const new_ft = event.target.value;
    setFilter_text(new_ft);
  };
  const searchFilterText = (event) => {
    event.preventDefault();
    // const new_ft = event.target.value;
    //setFilter_text(new_ft);
  };
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)",
      }}
    >
      <Form className="form-inline" onSubmit={searchFilterText}>
        <FormControl
          id={Classes.query_str}
          //style={Classes.query_str}
          className="seach-box"
          placeholder="Search by Name,Email, Username, Business Area or City🔎"
          value={filter_text}
          onChange={updateFilterText}
        />
      </Form>

      <div className={Classes.contact_list}>
        {props.contacts.map((k) => {
          if (
            k.name.toLowerCase().includes(filter_text.toLowerCase()) ||
            k.email.toLowerCase().includes(filter_text.toLowerCase()) ||
            k.username.toLowerCase().includes(filter_text.toLowerCase()) ||
            k.phone.toLowerCase().includes(filter_text.toLowerCase()) ||
            k.company.name.toLowerCase().includes(filter_text.toLowerCase()) ||
            k.company.bs.toLowerCase().includes(filter_text.toLowerCase()) ||
            k.address.city.toLowerCase().includes(filter_text.toLowerCase())
          ) {
            return <Contact key={k.id} contact={k} />;
          }
          return <></>;
        })}
      </div>
    </div>
  );
}

export default ContactList;
