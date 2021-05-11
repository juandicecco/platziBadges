import React from "react";
//los componentes son clases
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css"; //Traer el css
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  //todos los componentes requieren por lo menos 1 metodo que es obligatorio, Render
  render() {
    //define cual sera el resultado que vamos a ver en pantalla

    //Con destructuracion
    // const { firstName, lastName, avatarUrl, jobTitle, twitter } = this.props; (nada mas se pone el nombre sin el this.props)

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
