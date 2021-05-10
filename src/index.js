// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";
// import Badge from "./components/Badge";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
// import BadgeNew from "./pages/BadgeNew";
// import Badges from "./pages/Badges";
import App from "./components/App";

//const element = <h1>Hello, Platzi Badges from React!</h1>; //JSX
// const element = React.createElement('h1', {}, 'Hola! Soy los children.') Similar a JSX, primero etiqueta, atributos (props) y children
// const element = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a Platzi')
//const name = "Juan DC";
// const element = React.createElement("h1", {}, `Hola, soy ${name}`);

//const jsx = <h1>Hola, soy {name}</h1>; //Las llaves nos permiten introducir expresiones de JS

// const element = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, "Hola Soy Juan"),
//   React.createElement("p", {}, "Soy ingeniero de Sistemas")
// );

// const jsx = ( //JSX es mejor
//   <div>
//     <h1>Hola, Soy Juan</h1>
//     <p>Soy Ingeniero de Sistemas.</p>
//   </div>
// );

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(
//   <Badge
//     firstName="Lilly"
//     lastName="Kaufman"
//     jobTitle="Frontend Engineer"
//     avatarUrl="https://www.gravatar.com/avatar?d=identicon"
//     twitter="sparragus"
//   />,
//   container
// );

ReactDOM.render(<App />, container);
