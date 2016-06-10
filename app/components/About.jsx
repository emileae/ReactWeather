var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>A weather app built using Andrew Mead's react cours, here's my <a href="https://github.com/emileae/ReactWeather">github repo</a></p>
    </div>
  )
}

module.exports = About;
