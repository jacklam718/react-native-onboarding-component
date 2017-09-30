Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/ContentContainer.js';exports.default=





















ContentContainer;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var styles=_reactNative.StyleSheet.create({container:{paddingLeft:40,paddingRight:40,backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center'}});function ContentContainer(_ref){var children=_ref.children,style=_ref.style;
return(
_react2.default.createElement(_reactNative.View,{style:[styles.container,style],__source:{fileName:_jsxFileName,lineNumber:25}},
children));


}ContentContainer.propTypes={children:require('prop-types').any.isRequired,style:require('prop-types').any};

ContentContainer.defaultProps={
style:null};