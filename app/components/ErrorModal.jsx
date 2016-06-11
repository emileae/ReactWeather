var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return {
      title: "Error"
    }
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    var {title, message} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    )

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));// converts jsx to string
    $(ReactDOM.findDOMNode(this)).html($modal);// now Foundation can render the modal and manipulate html within the already renderd and tracked React DOM node

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    return (
      <div>

      </div>
    )
  }
});

module.exports = ErrorModal;
