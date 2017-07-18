import React, { Component } from 'react'

export default class FilterObject extends Component {
     constructor() {
         super();
         this.state = {
             employees: [
                 {
                     name: 'Jimmy Joe',
                     title: 'Hack0r',
                     age: 12,
                 },
                 {
                     name: 'Jeremy Schrader',
                     age: 24,
                     hairColor: 'brown'
                 },
                 {
                     name: 'Carly Armstrong',
                     title: 'CEO',
                 },

             ],
             userInput: '',
             filteredEmployees: []
         }
     }
     handleChange(val) {
         this.setState(
             {
                 userInput: val
             }
         )
     }

     filterEmployees(prop) {
         var employee = this.state.employees;
         var filteredEmployees = [];

         for (var i in employee) {
             if (employee[i].hasOwnProperty(prop)) {
                 filteredEmployees.push(employee[i]);
             }
         }

     }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"></span>
                <input type="text" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={() => this.filterEmployees(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10)}</span>
            </div>
        )
    }
}
