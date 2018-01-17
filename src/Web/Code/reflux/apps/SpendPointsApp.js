'use strict'
var React = require('react');
var ReactDOM = require('react-dom');
var Reflux = require('reflux');
var createReactClass = require('create-react-class');
var PointsSpentTable = require('../Components/PointEarnerComponents/PointsSpentTable');

var SpendPointsApp = createReactClass({
    mixins: [
    ],

    getInitialState: function() {
        return { 
        };
    },

    componentDidMount: function () {
    },
    
    handleGetChart: function (updateMessage) {
    },

    render: function(){
        return ( 
            <div>
                <div>
                    <PointsSpentTable pointEarnerId={this.props.pointEarnerId}/>
                </div>
            </div>
        );
    }
});

module.exports = SpendPointsApp;
ReactDOM.render(<SpendPointsApp pointEarnerId={pointEarnerId}/>, document.getElementById("spendPointsReactContent"));

