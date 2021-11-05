import React, { useState } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions";
import { v4 as uuid } from 'uuid';

const AddForm = props => {
    const [state, setState] = useState({ name:"", position:"", nickname:"", description:"" });
    const { name, position, nickname, description } = state;
    const { dispatch, errors } = props;

    const handleChange = e => {
        setState({ ...state, [e.target.name]:e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (name === "" || position === "" || nickname === "") {
            dispatch(actions.setError("Invalid entry"));
        }
        dispatch(
            actions.addSmurf(
                {  
                    id: uuid(), 
                    name, 
                    position, 
                    nickname, 
                    description 
                })
            );
    };
    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input onChange={handleChange} value={position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input onChange={handleChange} value={nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea onChange={handleChange} value={description} name="description" id="description" />
            </div>
            {
                errors && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {errors}</div>
            }
            <button>Submit Smurf</button>
        </form>
    </section>);
}

export default connect(state => state.errors)(AddForm);