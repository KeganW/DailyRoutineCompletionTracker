import React from 'react';
import {Header} from './Layout/Header';
import {AddTask} from './Layout/AddTask';
import {CheckList} from './Checklist/CheckList';
import {Information} from './Layout/Information';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

let uniqueId = 3;

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checklist: [
                {
                    task: 'Get food.',
                    completed: false,
                    id: 0
                },

                {
                    task: 'Get water.',
                    completed: false,
                    id: 1

                },

                {
                    task: 'Get sleep.',
                    completed: false,
                    id: 2
                }
            ]
        }
        this.toggleCompletion = this.toggleCompletion.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    toggleCompletion(id) {
        this.setState({
            checklist: this.state.checklist.map(obj => {
                if (obj.id === id) {
                    obj.completed = !obj.completed;
                }

                return obj;
            })
        });
    }

    deleteTask(id) {
        this.setState({checklist:[...this.state.checklist.filter(obj =>
            obj.id !== id)]});

    }

    addTask(task){
        this.setState({checklist:[...this.state.checklist,
                {task: task, completed: false, id: uniqueId}]});
        uniqueId = uniqueId + 1;
    }

    render() {
        return (
            <Router>
                <Route exact path="/" render={props => (
                    <React.Fragment>
                        <Header/>
                        <AddTask addTask={this.addTask}/>
                        <CheckList checklist={this.state.checklist}
                        toggleCompletion={this.toggleCompletion}
                        deleteTask={this.deleteTask} />
                    </React.Fragment>
                )} />

                <Route path="/information" component={Information}/>
            </Router>
        );
    }
}


