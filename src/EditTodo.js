import React, { Component } from "react";

class EditTodo extends Component {
    state = {
        TodoForEdit: this.props.getTodo,
        PreviousVal: this.props.getTodo
    }
    savefunc = () => {
        this.props.getSave(this.state.TodoForEdit)

    }
    getInputTodo = (e) => {
        this.setState({ TodoForEdit: e.target.value })
    }
    cancelFunc = () => {
        this.props.getCan(this.state.PreviousVal)

    }
    render() {

        return (
            <div className="listdiv">
                <span className="span">{this.props.getIndex + 1}-</span>
                <input value={this.state.TodoForEdit} onChange={this.getInputTodo} ></input>
                <button className="Savebutton" onClick={this.savefunc}>Save</button>
                <button className="Cancelbutton" onClick={this.cancelFunc}>Cancel</button>

            </div>
        )
    }
}
export default EditTodo