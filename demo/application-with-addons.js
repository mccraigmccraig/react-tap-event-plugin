React = require("react");
var ReactDOM = require("react-dom");

injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

React.addons={}
React.addons.CSSTransitionGroup = require('react-addons-css-transition-group');

