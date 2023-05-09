import React from 'react';
import PersonRow from './PersonRow';
import PersonForm from './PersonForm';

class PeopleTable extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        age: '',
        people: []
    }

    onFirstNameTextboxChange = (e) => {
        this.setState({ firstName: e.target.value } );

    }
    onLastNameTextboxChange = (e) => {
        this.setState({ lastName: e.target.value } );
    }
    onAgeTextboxChange = (e) => {
        this.setState( { age: e.target.value });
    }

   
    onAddClick = () => {
        const copy = [...this.state.people];
        copy.push({ firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age });
        this.setState({ people: copy, firstName: '', lastName: '', age: ''});
    }
    onClearClick = () => {
        this.setState({people: []})
    }
   


    render() {
        return (
            <>
                <PersonForm firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={this.state.age }
                    onFirstNameTextboxChange={this.onFirstNameTextboxChange}
                    onLastNameTextboxChange={this.onLastNameTextboxChange}
                    onAgeTextboxChange={this.onAgeTextboxChange}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}
                />         
                <div className="container mt-5">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                <PersonRow people={this.state.people} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
};

export default PeopleTable;




