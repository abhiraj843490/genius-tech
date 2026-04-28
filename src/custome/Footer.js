import React, { useState } from "react";
import "./footer.css";
import FacebookIcon from "./theames/fb.svg";
import InstagramIcon from "./theames/ig.svg";
import WhatsappIcon from "./theames/wp.svg";
import YoutubeIcon from"./theames/youtube.svg";
import location from "./theames/loc.svg";
import foot from "./theames/foot.png";
import ChatBox from './ChatBox';

const Footer = () => {

  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChatBox = () => {
    setIsChatOpen((prev) => !prev);
  };

  const year = new Date().getFullYear();
  const loc =
    "https://www.google.com/maps/place/GENIUS+TECH+A+COMPUTER+INSTITUTE/@25.2760801,85.4556702,17z/data=!4m6!3m5!1s0x39f28d4112e682b9:0xc1b90798034a61f0!8m2!3d25.2760801!4d85.4556702!16s%2Fg%2F11kqhms876?authuser=0&entry=ttu";
  const instagram =
    "https://instagram.com/genius_tech_a_computer_ins?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D";
  const facebook =
    "https://www.facebook.com/groups/2286023931549549/?mibextid=NSMWBT";
  const Whatsapp = "https://chat.whatsapp.com/HXy6yAckeNe6dwoy5n0oCO";
  const Youtube = "https://www.youtube.com/@DsaByAbhi";

  const socialMediaLinks = [
    { href: facebook, src: FacebookIcon, alt: "Facebook", title: "Facebook" },
    { href: instagram, src: InstagramIcon, alt: "Instagram", title: "Instagram" },
    { href: Whatsapp, src: WhatsappIcon, alt: "Whatsapp", title: "Whatsapp" },
    { href: Youtube, src: YoutubeIcon, alt: "Youtube", title: "Youtube" },
  ];

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
              <b>Connect & follow us for more information and queries</b>
            </i>
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: "10px" }}>
          {socialMediaLinks.map((link, index) => (
            <a href={link.href} key={index}>
              <img
                src={link.src}
                alt={link.alt}
                title={link.title}
                style={{ width: "30px", marginRight: index < socialMediaLinks.length - 1 ? "10px" : "0" }}
              />
            </a>
          ))}
        </div>

        {`Copyright @ Update code ${year}`}
        
        <div className="chat-logo" onClick={toggleChatBox} style={{ cursor: "pointer" }}>
          <i className="fas fa-comments" style={{ fontSize: '40px', color: 'white' }}></i>
        </div>

        {isChatOpen && <ChatBox onClose={toggleChatBox} />}
      </footer>
    </div>
  );
};

export default Footer;
