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
    <h3 className="text-center">Its {temp} in {location}.</h3>
  )
}

module.exports = WeatherMessage;
