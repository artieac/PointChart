'use strict'
var jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Reflux = require('reflux');
var Route = require('react-router');
var createReactClass = require('create-react-class');
var taskStore = require('../stores/taskStore');
var taskActions = require('../actions/taskActions');
var TaskTable = require('../Components/TaskComponents/TaskTable.js');

var TaskPageApp = createReactClass({
    mixins: [
        Reflux.connect(taskStore, "allTasks"),
    ],

    getInitialState: function() {
        return { 
            allTasks: []
        };
    },

    componentDidMount: function () {
        // Add event listeners in componentDidMount
        this.listenTo(taskStore, this.updateAllTasks);
        taskActions.getAllTasks();
    },

    updateAllTasks: function (updateMessage) {
        this.setState({allTasks: updateMessage.allTasks});
    },

    render: function(){
        return ( 
            <div>
                <div>
                    <TaskTable tableData={this.state.allTasks} /> 
                </div>
            </div>
        );
    }
});

module.exports = TaskPageApp;

ReactDOM.render(<TaskPageApp />, document.getElementById("taskPageReactContent"));

