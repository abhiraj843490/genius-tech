import React from "react";
import "./footer.css";
import FacebookIcon from "./theames/fb.svg";
import InstagramIcon from "./theames/ig.svg";
import WhatsappIcon from "./theames/wp.svg";
import location from "./theames/loc.svg";
import foot from "./theames/foot.png";

const Footer = () => {
  const year = new Date().getFullYear();
  const loc =
    "https://www.google.com/maps/place/GENIUS+TECH+A+COMPUTER+INSTITUTE/@25.2760801,85.4556702,17z/data=!4m6!3m5!1s0x39f28d4112e682b9:0xc1b90798034a61f0!8m2!3d25.2760801!4d85.4556702!16s%2Fg%2F11kqhms876?authuser=0&entry=ttu";
  const instagram =
    "https://instagram.com/genius_tech_a_computer_ins?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D";
  const facebook =
    "https://www.facebook.com/groups/2286023931549549/?mibextid=NSMWBT";
  const Whatsapp = "https://chat.whatsapp.com/HXy6yAckeNe6dwoy5n0oCO";
  return (
    <div className="footer">
      <footer>
        <div className="tag">
          <div className="foot">
            <h2 className="cursive-text">Genius Tech A Computer Institute</h2>

            <img
              src={foot}
              alt="foot"
              style={{ width: "100px", marginRight: "10px" }}
            />
            <p>Believe in yourself and success will follow.</p>
          </div>
          <p>
            <i>
              <b>Our Office location</b>
            </i>
            <a href={loc}>
              <img
                src={location}
                alt="location"
                style={{ width: "30px", marginRight: "10px" }}
                title="please click me to know our Location"
              />
            </a>
          </p>
          <p>
            <i>
              <b>Connect with us</b>
            </i>
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <a href={facebook}>
            <img
              src={FacebookIcon}
              alt="Facebook"
              title="Facebook"
              style={{ width: "30px", marginRight: "10px" }}
            />
          </a>
          <a href={instagram}>
            <img
              src={InstagramIcon}
              alt="Instagram"
              title="Instagram"
              style={{ width: "30px", marginRight: "10px" }}
            />
          </a>
          <a href={Whatsapp}>
            <img
              src={WhatsappIcon}
              title="Whatsapp"
              alt="Whatsapp"
              style={{ width: "30px" }}
            />
          </a>
        </div>
        {`Copyright @ Update code ${year}`}
      </footer>
    </div>
  );
};

export default Footer;
