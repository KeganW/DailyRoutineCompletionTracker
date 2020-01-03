import React from 'react';
import {PropTypes} from "prop-types";

const styleButton = {
    display: 'block',
    border: 'solid 1px grey',
    color: '#ffffff',
    background: '#000000',
    width: '15px',
    height: '15px'
}

export class CheckListItems extends React.Component {

    constructor(props) {
        super(props);
        this.determineStyle = this.determineStyle.bind(this);
    }

    determineStyle() {
        return {
            textDecoration: this.props.tasks.completed ? 'line-through' : 'none',
            color: this.props.tasks.completed ? '#ff0000' : '#000000',
            backgroundColor: this.props.tasks.completed ? 'green' : 'red',
            textAlign: 'center',
            fontSize: 25,
            fontFamily: 'cursive',
            padding: '10px',
            margin: '15px 0px 5px 0px',
            border: 'solid #000000',
        }
    }


    render() {

        return (
            <div style={this.determineStyle()}>
                <input type="checkbox" style={{float: 'left'}}
                       onChange={this.props.toggleCompletion.bind(this, this.props.tasks.id)}/>

                <p> {this.props.tasks.task} </p>

                <button style={styleButton}
                        onClick={this.props.deleteTask.bind(this, this.props.tasks.id)}>X
                </button>

            </div>
        );
    }
}

CheckListItems.propTypes = {
    tasks: PropTypes.object.isRequired,
    toggleCompletion: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired

};