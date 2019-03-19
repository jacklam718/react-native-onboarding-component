Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/ContentContainer.js';exports.default=





















ContentContainer;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var styles=_reactNative.StyleSheet.create({container:{paddingLeft:40,paddingRight:40,backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center'}});function ContentContainer(_ref){var children=_ref.children,style=_ref.style;
return(
_react2.default.createElement(_reactNative.View,{style:[styles.container,style],__source:{fileName:_jsxFileName,lineNumber:25}},
children));


}ContentContainer.propTypes={children:function children(props,propName,componentName){if(!Object.prototype.hasOwnProperty.call(props,propName)){throw new Error('Prop `'+propName+'` has type \'any\' or \'mixed\', but was not provided to `'+componentName+'`. Pass undefined or any other value.');}},style:_propTypes2.default.any};

ContentContainer.defaultProps={
style:null};