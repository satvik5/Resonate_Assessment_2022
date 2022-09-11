import React from "react";
import Classes from "./Contact.module.css";
import Company from "./Company";
import Address from "./Address";
import MapEmbedded from "./MapEmbedded";

const Contact = (props) => {
  const { contact } = props;
  //const splitter = contact.bs.split(" ");

  return (
    <div className={Classes.contact}>
      <h2> {contact.name}</h2>

      <div className={Classes.contact_grid}>
        <div>
          <div>
            <span>Phone: </span> {`${contact.phone} `}
            <a
              href="https://globfone.com/call-phone-online"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/20/ffffff/phone.png"
                alt="phone_logo"
              />{" "}
            </a>
          </div>
          <div>
            <span>Username: </span> {contact.username}
          </div>
          <div>
            <span>Website: </span> {contact.website + " "}
            <a
              href={`https://${contact.website}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/20/ffffff/link--v1.png"
                alt="website_logo"
              />{" "}
            </a>{" "}
          </div>
          <div>
            <span>Email: </span>
            {contact.email + " "}
            <a href={`mailto:${contact.email}`}>
              <img
                src="https://img.icons8.com/ios/20/ffffff/send-mass-email.png"
                alt="email_logo"
              />{" "}
            </a>{" "}
          </div>
        </div>
        <Company company={contact.company}></Company>
        <Address address={contact.address}></Address>
      </div>
      <MapEmbedded latlon={contact.address.geo} />
    </div>
  );
};
export default Contact;
