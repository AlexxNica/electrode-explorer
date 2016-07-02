"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _reduxForm = require("redux-form");

var _actionsSignUp = require("../actions/sign-up");

var signUpActions = _interopRequireWildcard(_actionsSignUp);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var _signUpForm = require("./sign-up-form");

var _signUpForm2 = _interopRequireDefault(_signUpForm);

var _commonValidate = require("../common/validate");

var _commonValidate2 = _interopRequireDefault(_commonValidate);

var ReduxSignUpForm = (0, _reduxForm.reduxForm)({
  form: "signUp",
  fields: ["firstName", "lastName", "email", "password", "passwordConfirmation", "newsletter"],
  validate: _commonValidate2["default"]
})(_signUpForm2["default"]);

var mapState = function mapState(state, ownProps) {
  return Object.assign({}, state.signUp || state.signUpReducer || state, ownProps);
};

var mapActions = function mapActions(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(signUpActions, dispatch)
  };
};

var ConnectedComponent = (0, _reactRedux.connect)(mapState, mapActions)(function (props) {
  var actions = props.actions;

  return _react2["default"].createElement(ReduxSignUpForm, _extends({}, props, {
    loading: props.loading,
    alert: props.alert,
    //redux-form validations hook
    onSubmit: function (data) {
      return actions.signUp(data, props.onSubmit, props.onSuccess, props.onError);
    } }));
});

var ConnectedSignUp = _react2["default"].createClass({
  displayName: "Connected-SignUp",

  propTypes: {
    store: _react.PropTypes.object.isRequired,
    signUpApiUrl: _react.PropTypes.string,
    //WARNING: these callbacks are expexted to be pure javascript functions,
    //and this widget makes no assumptions about the implementing app
    //TODO: Re-consider this implementation after all consumers are fully reduxified
    onSubmit: _react.PropTypes.func,
    onSuccess: _react.PropTypes.func.isRequired,
    onError: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onSubmit: function onSubmit() {},
      onError: function onError() {}
    };
  },

  componentWillMount: function componentWillMount() {
    var url = this.props.signUpApiUrl;

    if (url) {
      _config2["default"].init({ signUpApiUrl: url });
    }
  },

  render: function render() {
    return _react2["default"].createElement(ConnectedComponent, this.props);
  }
});

exports["default"] = ConnectedSignUp;
module.exports = exports["default"];