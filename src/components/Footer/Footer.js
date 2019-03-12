import React from "react";
import { FooterData } from "./Footer-main/FooterData";
import { FooterSecondMenu } from "./Footer-main/FooterSecondMenu";
import { FotterBottom } from "./Footer-main/FotterBottom";
export class Footer extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <FooterData />
        <FooterSecondMenu />
        <FotterBottom />
      </div>
    );
  }
}
