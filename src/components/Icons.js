import React from "react";
import "./Icons.css";

import { Icon } from "./subcomponents/Icon";
import Mail_logo from "../assets/icons/mail.svg";
import Twitter_logo from "../assets/icons/twitter.svg";
import Instagram_logo from "../assets/icons/instagram.svg";
import Linkedin_logo from "../assets/icons/linkedin.svg";
import Github_logo from "../assets/icons/github.svg";

export function Icons() {
  return (
    <div className="icons">
      <ul>
        <Icon
          image={Mail_logo}
          alt="Ícone do email"
          href="mailto:pbg.neto.dev@gmail.com"
        />
        <Icon
          image={Twitter_logo}
          alt="Ícone do Twitter"
          href="https://twitter.com/Pbg_Neto"
        />
        <Icon
          image={Instagram_logo}
          alt="Ícone do Instagram"
          href="https://www.instagram.com/pbg.neto/"
        />
        <Icon
          image={Linkedin_logo}
          alt="Ícone do LinkedIn"
          href="https://www.linkedin.com/in/pedroneto-zagrebd/"
        />
        <Icon
          image={Github_logo}
          alt="Ícone do Github"
          href="https://github.com/ZaGreBd"
        />
      </ul>
    </div>
  );
}
