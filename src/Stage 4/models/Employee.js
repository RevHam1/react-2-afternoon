  // constructor
  import React, { Component } from 'react';

  class Employee extends Component {
    constructor(id, name, phone, title) {
      super()
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.title = title;
  }

  // updateName
  updateName(name) {
    this.name = name;
  }

  // updatePhone
  updatePhone(phone) {
    this.phone = phone;
  }

   // updateTitle
   updateTitle(title) {
    this.title = title;
  }
  }
  export default Employee 