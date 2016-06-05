var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var {temp, location} = this.props;
//     console.log("this.props: ", this.props);
//     return (
//       <h5>Its {temp} in {location}.</h5>
//     )
//   }
// });

var WeatherMessage = ({temp, location}) => {
  //var {temp, location} = props;
  //console.log("this.props: ", props);
  return (
    <h5>Its {temp} in {location}.</h5>
  )
}

module.exports = WeatherMessage;
