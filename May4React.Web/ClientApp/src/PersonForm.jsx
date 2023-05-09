import React from 'react';

class PersonForm extends React.Component {

    render() {
        return (
            <div className='row'>
                <div className='col-md-6'>
                    <input value={this.props.firstName} onChange={this.props.onFirstNameTextboxChange} type='text' placeholder='First name' className='form-control' />
                </div>
                <div className='col-md-6'>
                    <input value={this.props.lastName} onChange={this.props.onLastNameTextboxChange} type='text' placeholder='Last name' className='form-control' />
                </div>
                <div className='col-md-6'>
                    <input value={this.props.age} onChange={this.props.onAgeTextboxChange} type='text' placeholder='Age' className='form-control' />
                </div>
                <div className='col-md-1'>
                    <button onClick={this.props.onAddClick} className='btn btn-dark w-100'>Add</button>
                </div>
                <div className='col-md-1'>
                    <button onClick={this.props.onClearClick} className='btn btn-warning w-100'>Clear</button>
                </div>
            </div>
        );
    }
};

export default PersonForm;