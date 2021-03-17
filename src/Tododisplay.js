import React, { Component } from "react";
import AddTodo from './AddTodo'
import EditTodo from "./EditTodo";

class Tododisplay extends Component {
    state = {
        content: '',
        edidInputTodo: false
    }
    DeleteTodo = () => {
        this.props.DeleteTodo(this.props.getIndex)
    }
    EditTodo = () => {
        this.setState({ edidInputTodo: true })
    }
    SaveFunc = (e) => {
        this.props.getSave(e, this.props.getIndex)
        this.setState({ edidInputTodo: false })
    }
    cancelFunc = (e) => {
        this.props.getSave(e, this.props.getIndex)
        this.setState({ edidInputTodo: false })
    }

    render() {
        if (this.state.edidInputTodo) {

            return <EditTodo getIndex={this.props.getIndex}
                getTodo={this.props.getTodo} getSave={this.SaveFunc} getCan={this.cancelFunc}>  </EditTodo>
        }

        return (
            <div className="listdiv">
                <span className="span">{this.props.getIndex + 1}-    </span>
                <div className="ld">{this.props.getTodo}</div>
                <button className="editbutton" onClick={this.EditTodo}>Edit</button>
                <button className="Deletebutton" onClick={this.DeleteTodo}>Delete</button>

            </div>
        )
    }
}
export default Tododisplay