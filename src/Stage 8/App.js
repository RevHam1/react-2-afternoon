import React, { Component } from 'react';

import Employee from './models/Employee';

// components
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import EmployeeEditor from './components/EmployeeEditor';


class App extends Component {
// constructor
constructor() {
  super();
  this.state = {
    employees: [ new Employee(0, 'Bernice Ortiz', 4824931093, 'CEO'), new Employee(1, 'Marnie Barnett', 3094812387, 'CTO'), new Employee(2, 'Phillip Weaver', 7459831843, 'Manager'), new Employee(3, 'Teresa Osborne', 3841238745, 'Director of Engineering'), new Employee(4, 'Dollie Berry', 4873459812, 'Front-End Developer'), new Employee(5, 'Harriett Williamson', 6571249801, 'Front-End Developer'), new Employee(6, 'Ruby Estrada', 5740923478, 'Back-End Developer'), new Employee(7, 'Lou White', 8727813498, 'Full-Stack Developer'), new Employee(8, 'Eve Sparks', 8734567810, 'Product Manager'), new Employee(9, 'Lois Brewer', 8749823456, 'Sales Manager') ],
    selectedEmployee: null
  };
this.selectEmployee = this.selectEmployee.bind( this );

  this.componentWillReceiveProps = this.componentWillReceiveProps.bind( this );
  this.handleChange = this.handleChange.bind( this );
  this.save = this.save.bind( this );
  this.cancel = this.cancel.bind( this );

}

// componentWillReceiveProps
componentWillReceiveProps(props) {
  this.setState({ employee: Object.assign({}, props.selected), originalEmployee: props.selected, notModified: true });
} 

// handleChange
handleChange(prop, val) {
  if ( this.state.notModified ) {
    this.setState({ notModified: false });
  }

  var employeeCopy = Object.assign({}, this.state.employee);
  employeeCopy[prop] = val;
  this.setState({ employee: employeeCopy });
}

// save
save() {
  this.state.originalEmployee.updateName(this.state.employee.name);
  this.state.originalEmployee.updatePhone(this.state.employee.phone);
  this.state.originalEmployee.updateTitle(this.state.employee.title);
  this.setState({ notModified: true });
  this.props.refreshList();
}

// cancel
cancel() {
  var employeeCopy = Object.assign({}, this.state.originalEmployee);
  this.setState({ employee: employeeCopy, notModified: true });
}

 // selectEmployee
 selectEmployee(employee) {
  this.setState({ selectedEmployee: employee });
}

// refresh
refresh() {
  this.setState(this.state);
}

  render() {
    return (
      <div id="app">
     <Header />
        <div className="main-container">
          <EmployeeList employees={this.state.employees} selectEmployee={ this.selectEmployee.bind(this) } />
          <EmployeeEditor selected={this.state.selectedEmployee} refreshList={ this.refresh.bind(this) } />
        </div>
      </div>
    )
  }
}

export default App;
