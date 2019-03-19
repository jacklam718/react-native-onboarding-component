Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Card.js';exports.default=






























Card;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var styles=_reactNative.StyleSheet.create({container:{borderRadius:5,width:'75%',backgroundColor:'white',height:'45%',justifyContent:'center',alignItems:'center'}});var _Dimensions$get=_reactNative.Dimensions.get('window'),deviceWidth=_Dimensions$get.width;var isAndroid=_reactNative.Platform.OS==='android';function Card(_ref)




{var scrollX=_ref.scrollX,children=_ref.children,style=_ref.style,index=_ref.index;
return(
_react2.default.createElement(_reactNative.Animated.View,{
style:[
styles.container,
style,
{
transform:[{
translateX:scrollX.interpolate({
inputRange:[
deviceWidth*index,
deviceWidth*(index+1)],

outputRange:[0,isAndroid?-deviceWidth*1:-deviceWidth*2]})}]}],__source:{fileName:_jsxFileName,lineNumber:39}},





children));


}Card.propTypes={scrollX:_propTypes2.default.object.isRequired,index:_propTypes2.default.number.isRequired,children:function children(props,propName,componentName){if(!Object.prototype.hasOwnProperty.call(props,propName)){throw new Error('Prop `'+propName+'` has type \'any\' or \'mixed\', but was not provided to `'+componentName+'`. Pass undefined or any other value.');}},style:_propTypes2.default.any};

Card.defaultProps={
style:null};