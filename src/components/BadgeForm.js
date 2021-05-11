import React, { Component } from "react";

//Tenemos 3 metodos que estan manejando los eventos del formulario (cambios input, click boton y el submit del form)
//React.Component
export default class BadgeForm extends Component {
  // state = {}; //Senalar estado inicial antes de declarar en los inputs

  // handleChange = (e) => {
  //   // console.log({ value: e.target.value, name: e.target.name }); //Ver el valor de lo que se escribe value: e.target.value | name: e.target.name

  //   this.setState({
  //     [e.target.name]: e.target.value, //Asigna el campo correspondiente al input
  //   });
  // };

  handleClick = (e) => {
    console.log("Button was clicked");
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form was submitted");
  //   console.log(this.state);
  // };

  //Ajustar nuestros inputs y convertirlos de no controlados a controlados con this.state. (para no tener doble almacenamiento de datos, el del componente y el del setState)
  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button
            // type="button" alternativa usar en form onSubmit con handle
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Save
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}
// Si el evento es onChange el metodo se va a llamar handleChange
