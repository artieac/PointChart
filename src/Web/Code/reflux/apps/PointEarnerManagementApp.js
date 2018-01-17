'use strict'
var React = require('react');
var ReactDOM = require('react-dom');
var Reflux = require('reflux');
var Route = require('react-router');
var createReactClass = require('create-react-class');
var pointEarnerStore = require('../stores/pointEarnerStore');
var pointEarnerActions = require('../actions/pointEarnerActions');
var PointEarnerTable = require('../Components/PointEarnerComponents/PointEarnerTable.js');
var PointEarnerSearch = require('../Components/PointEarnerComponents/PointEarnerSearch.js');

var PointEarnerManagementApp = createReactClass({
    selectedPointEarners: [],

    mixins: [
        Reflux.connect(pointEarnerStore, "allPointEarners")
    ],

    getInitialState: function() {
        return { 
            allPointEarners: []
        };
    },

    componentDidMount: function () {
        // Add event listeners in componentDidMount
        this.listenTo(pointEarnerStore, this.updatePointEarners);
        pointEarnerActions.getAll();
    },

    updatePointEarners: function (updateMessage) {
        this.setState({allPointEarners: updateMessage.allPointEarners});
    },

    onHandlePointEarnerSelection: function(pointEarner, isAdding){
        pointEarnerActions.addPointEarner(pointEarner);
        this.forceUpdate();
    },

    onHandleRemovePointEarner: function(pointEarner){
        pointEarnerActions.removePointEarner(pointEarner);
    },

    render: function(){
        return ( 
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <PointEarnerSearch handlePointEarnerSelection={this.onHandlePointEarnerSelection}/>
                    </div>
                    <div className="col-md-8">
                        <PointEarnerTable tableData={this.state.allPointEarners} handleRemovePointEarner={this.onHandleRemovePointEarner}/> 
                    </div>
                </div>
            </div>
        );
}
});

module.exports = PointEarnerManagementApp;
ReactDOM.render(<PointEarnerManagementApp />, document.getElementById("pointEarnerManagerReactContent"));