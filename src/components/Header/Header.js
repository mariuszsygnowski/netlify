import React from "react";
import phoneSolid from "../../styles/images/phone-solid.svg";
import logoSeniorCare from "../../styles/images/LogoSeniorCare.svg";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div class="header_telephone_bar">
          <div class="wrapper">
            <div class="header_contact_data">
              <div class="header_telephone_icon">
                <img src={phoneSolid} alt="phoneSolid" />
              </div>
              <p>
                <a href="tel:+48725658420"> +48 725 658 420</a>
              </p>
            </div>
          </div>
        </div>
        <div class="main_bar">
          <div class="wrapper">
            <div class="logo">
              <img src={logoSeniorCare} alt="logoSeniorCare" />
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Kontakt</Link>
                </li>
                {/* <li>
                    <a href="onas.html">O NAS</a>
                  </li>
                  <li>
                    <a href="praca.html">PRACA</a>
                  </li>
                  <li>
                    <a href="uslugi.html">KONTAKT</a>
                  </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
