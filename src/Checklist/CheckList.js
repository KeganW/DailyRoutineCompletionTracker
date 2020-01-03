import React from 'react';
import {PropTypes} from "prop-types";
import {CheckListItems} from './CheckListItems';


export class CheckList extends React.Component {

    render() {
        return (
            this.props.checklist.map((tasks) =>
                <CheckListItems key={tasks.id}
                                tasks={tasks}
                                toggleCompletion={this.props.toggleCompletion}
                                deleteTask={this.props.deleteTask}/>)
        );
    }
}

CheckList.propTypes = {
    key: PropTypes.number.isRequired,
    tasks: PropTypes.array.isRequired,
    toggleCompletion: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired

};