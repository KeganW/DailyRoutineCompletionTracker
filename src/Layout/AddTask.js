import React from 'react';

const MIN_TASK_LENGTH = 1;
const ERROR = "Please enter an entry with a length that is at least one.";

const styleTextBox = {
    boxSizing: 'border-box',
    width: '100%',
    border: '2px solid black',
    backgroundColor: '#eeeeee',
    padding: '15px',
    fontSize: '18px',
    fontFamily: 'cursive'
}

const styleButton = {
    display: 'block',
    border: 'solid 1px grey',
    color: '#000000',
    background: '#dddddd',
    width: '100%',
    padding: '15px',
    fontSize: '18px',
    fontFamily: 'cursive'

}

export class AddTask extends React.Component{

    constructor(props){
        super(props);
        this.state = {task: ''};
        this.setTask = this.setTask.bind(this);
        this.submitTask = this.submitTask.bind(this);
    }


    setTask(e){
        this.setState({task: e.target.value});
    }

    submitTask(e){
        e.preventDefault();
        if (this.state.task.length < MIN_TASK_LENGTH){
            alert(ERROR);
            return;
        }
        this.props.addTask(this.state.task);

    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submitTask} >
                    <input type="text" style={styleTextBox}
                           placeholder="Enter a task that needs to be completed..."
                           onChange = {this.setTask}
                    />
                    <button style={styleButton}>Confirm Task</button>
                </form>
            </React.Fragment>
        );
    }
}