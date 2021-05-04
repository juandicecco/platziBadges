import React from "react";
//los componentes son clases

class Badge extends React.Component {
  //todos los componentes requieren por lo menos 1 metodo que es obligatorio, Render
  render() {
    //define cual sera el resultado que vamos a ver en pantalla
    return (
      <div>
        <div>
          <img src="" alt="Logo de la conferencia" />
        </div>
        <div>
          <img src="" alt="Avatar" />
          <h1>
            Richard <br /> Kaufman
          </h1>
          <div>
            <p>Frontend Engineer</p>
            <p>@sparragus</p>
            <div>#platziconf</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Badge;
