Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Header.js';exports.default=

















Header;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var styles=_reactNative.StyleSheet.create({header:{height:'56%',justifyContent:'center',alignItems:'center'}});function Header(_ref){var children=_ref.children,style=_ref.style;
return(
_react2.default.createElement(_reactNative.View,{style:[styles.header,style],__source:{fileName:_jsxFileName,lineNumber:21}},
children));


}Header.propTypes={children:require('prop-types').any.isRequired,style:require('prop-types').any};

Header.defaultProps={
style:null};