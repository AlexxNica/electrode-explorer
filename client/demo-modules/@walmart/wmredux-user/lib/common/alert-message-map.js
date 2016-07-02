"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  /*eslint-disable camelcase*/
  user_auth_fail: {
    alertType: "error",
    message: _react2.default.createElement(
      "span",
      null,
      "Your password and email do not match. Please try again or ",
      _react2.default.createElement(
        "button",
        { className: "js-reset-password-link btn-fake-link" },
        " reset your password"
      ),
      "."
    )
  },

  user_locked: {
    alertType: "error",
    message: _react2.default.createElement(
      "span",
      null,
      "Your account has been temporarily locked due to\n    too many failed sign-in attempts. Please try again shortly or ",
      _react2.default.createElement(
        "button",
        { className: "js-reset-password-link btn-fake-link" },
        " reset your password"
      ),
      "."
    )
  },

  ca_user_deleted: {
    alertType: "error",
    message: "Your password and email address do not match. Please try again."
  },

  ca_user_not_found: {
    alertType: "error",
    message: "Your password and email address do not match. Please try again."
  },

  account_already_exist: {
    alertType: "warning",
    message: _react2.default.createElement(
      "span",
      null,
      "The email address you entered\n      is associated with another Walmart.com account.\n      Please ",
      _react2.default.createElement(
        "button",
        { className: "js-sign-in-link btn-fake-link" },
        " sign in"
      ),
      " or use another email address."
    ),
    fields: {
      email: "An account with this email already exists."
    }
  },

  validation_fail: {
    alertType: "error",
    message: _react2.default.createElement(
      "span",
      null,
      "Please correct the errors below. Didn't receive your code? ",
      _react2.default.createElement(
        "button",
        { className: "js-request-code-link btn-fake-link" },
        " Request a new one"
      ),
      "."
    )
  },

  unregistered_email: {
    alertType: "error",
    message: "This email isn't associated with an account.\n      Please try a different email."
  },

  invalid_passcode: {
    alertType: "error",
    message: _react2.default.createElement(
      "span",
      null,
      "Your verification code is invalid. Please try again or ",
      _react2.default.createElement(
        "button",
        { className: "js-request-code-link btn-fake-link" },
        " request a new one"
      ),
      "."
    ),
    fields: {
      passcode: "Your verification code is invalid."
    }
  },

  expired_passcode: {
    alertType: "error",
    message: _react2.default.createElement(
      "span",
      null,
      "Your verification code has expired. ",
      _react2.default.createElement(
        "button",
        { className: "js-request-code-link btn-fake-link" },
        " Please request a new one"
      ),
      "."
    )
  },

  invalid_email: {
    alertType: "error",
    message: "Please enter the email where we sent the verification code."
  },

  Unauthorized: {
    alertType: "warning",
    message: "Bot detected"
  },

  /*
   * Reset password alert states.
   * We try to use these smartly for header/success states as well
   */
  request_new_code_success: {
    alertType: "success",
    message: "A new verification code has been sent to:",
    altMessageText: _react2.default.createElement(
      "span",
      null,
      "Didn't receive your code? ",
      _react2.default.createElement(
        "button",
        {
          className: "js-request-code-link btn-fake-link font-semibold" },
        " Request a new one"
      )
    )
  },

  /*
   * Forgot password account compromised message
   */
  compromised_message_alert: {
    code: "user_compromised",
    alertType: "warning",
    message: _react2.default.createElement(
      "span",
      null,
      "Due to unusual attempts to sign in to your account,\n      we have reset your password as a security measure. ",
      _react2.default.createElement(
        "p",
        null,
        " To access your account follow the instructions below."
      )
    )
  },

  generic: {
    alertType: "error",
    message: "We're having trouble with your request.\n      Please wait a moment and then try again."
  },
  /*eslint-enable camelcase*/

  getAlert: function getAlert(key) {
    var knownError = this[key];

    return _extends({}, knownError || this.generic, {
      isKnownError: knownError
    });
  },
  getFieldAlerts: function getFieldAlerts(key) {
    return this[key] && this[key].fields;
  },
  getReduxFormError: function getReduxFormError() {
    var rawError = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return _extends({
      _error: _extends({}, rawError, this.getAlert(rawError.code))
    }, this.getFieldAlerts(rawError.code));
  }
};