'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatActionData;

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLastElem(arr) {
  return arr[arr.length - 1];
}

function formatActionData(actions) {
  var formatted = [];
  actions.forEach(function (action, i) {
    if (i === 0 || !(0, _isEqual2.default)(action.data, getLastElem(formatted).data) || !action.data) {
      formatted.push({
        data: action.data,
        count: action.count || 1,
        id: formatted.length + 1
      });
    } else {
      var lastElem = getLastElem(formatted);
      lastElem.count += action.count || 1;
    }
  });
  return formatted;
}