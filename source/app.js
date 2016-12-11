var React = require('react');
var ReactDOM = require('react-dom');


var h1 = React.createElement('h1', {className: 'header', key: 'header'}, 'This is React');
var p = React.createElement('p', {className: 'content', key: 'content'}, 'And that how it works');
var listOfItems = <ul><li>Item 1</li><li>Item 2</li></ul>;
var reactFragment = [h1, p, listOfItems];
var section = React.createElement('section', {className: 'container'}, reactFragment);
ReactDOM.render(section, document.getElementById('react-application'));

