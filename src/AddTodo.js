import React, { Component } from "react";

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.content);
    }
    render() {

        return (
            <div>
                <h1 className="Main-heading" > MyTodo's</h1>
                <form id="inputForm" onSubmit={this.handleSubmit}>
                    <input id="inputField" value={this.state.content} onChange={this.handleChange} type='text'
                        placeholder="Write  Todo's here.....!" ></input>
                    <button className="SubmitButton">Submit</button>
                </form>
            </div>
        )
    }
}
export default AddTodo