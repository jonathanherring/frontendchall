import React, { Component } from 'react';

class Form extends Component {
  submitForm(e, data) {
    e.preventDefault();
    this.props.saveLocation(data);
  }

  render() {
    return (
      <form className="form">
        <label>
          Name
          <input
            ref={(input) => { this.name = input }}
            type="text"
          />
        </label>
        <label>
          Lat
          <input
            ref={(input) => { this.lat = input }}
            type="text"
          />
        </label>
        <label>
          Lon
          <input
            ref={(input) => { this.lng = input }}
            type="text"/>
        </label>
        <button
          type="submit"
          onClick={(e) => {
            //Can this logic be moved to the container?
            const isValidLat = isFinite(this.lat.value) && Math.abs(this.lat.value) <= 90;
            const isValidLon = isFinite(this.lng.value) && Math.abs(this.lng.value) <= 180;
            const isValidName = this.name.value !== "";

            if (isValidLat && isValidLon && isValidName){
            this.submitForm(e, {
            name: this.name.value,
            lat: this.lat.value,
            lng: this.lng.value
          })}}}
        >
            Save
        </button>
      </form>
    );
  }
}


export default Form;
