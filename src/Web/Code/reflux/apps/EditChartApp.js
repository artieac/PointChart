'use strict'
var React = require('react');
var Reflux = require('reflux');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var chartStore = require('../stores/chartStore');
var chartActions = require('../actions/chartActions');
var taskStore = require('../stores/taskStore');
var taskActions = require('../actions/taskActions');
var pointEarnerStore = require('../stores/pointEarnerStore');
var pointEarnerActions = require('../actions/pointEarnerActions');
var TaskSelectionTable = require('../Components/ChartComponents/TaskSelectionTable');

var EditChartApp = createReactClass({
    mixins: [
        Reflux.connect(chartStore, "currentChart"),
        Reflux.connect(taskStore, "allTasks"),
        Reflux.connect(pointEarnerStore, "allPointEarners")
    ],

    getInitialState: function() {
        console.log('get initial state');
        return { 
            currentChart: {},
            allTasks: [],
            allPointEarners: []
        };
    },

    componentDidMount: function () {
        // Add event listeners in componentDidMount
        this.listenTo(taskStore, this.handleGetAllTasks);
        taskActions.getAllTasks();

        this.listenTo(chartStore, this.handleGetChart);
        chartActions.getChart(this.props.chartId);
        
        this.listenTo(pointEarnerStore, this.handleGetAllPointEarners);
        pointEarnerActions.getAll();
    },
    
    handleGetChart: function (updateMessage) {
        this.setState({currentChart: updateMessage});
    },

    handleGetAllTasks: function(updateMessage){        
        this.setState({allTasks: updateMessage});
    },

    handleGetAllPointEarners: function(updateMessage){
        this.setState({allPointEarners: updateMessage.allPointEarners});
    },

    render: function(){
        return ( 
            <div>
                <div>
                    <TaskSelectionTable chartData={this.state.currentChart} tableData={this.state.allTasks} pointEarners={this.state.allPointEarners}/>
                </div>
            </div>
        );
    }
});

module.exports = EditChartApp;
ReactDOM.render(<EditChartApp chartId={chartIdentifer}/>, document.getElementById("editChartPageReactContent"));

