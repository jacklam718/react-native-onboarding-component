Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Card.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_reactNative.StyleSheet.create({
container:{
borderRadius:5,
width:'75%',
backgroundColor:'white',
height:'45%',
justifyContent:'center',
alignItems:'center'}});var _Dimensions$get=



_reactNative.Dimensions.get('window'),deviceWidth=_Dimensions$get.width;
var isAndroid=_reactNative.Platform.OS==='android';var








Card=function(_PureComponent){_inherits(Card,_PureComponent);




function Card(props){_classCallCheck(this,Card);var _this=_possibleConstructorReturn(this,(Card.__proto__||Object.getPrototypeOf(Card)).call(this,
props));

_this.state={
scrollX:props.scrollX};return _this;

}_createClass(Card,[{key:'render',value:function render()



{var _props=
this.props,children=_props.children,style=_props.style,index=_props.index;

return(
_react2.default.createElement(_reactNative.Animated.View,{
style:[
styles.container,
style,
{
transform:[{
translateX:this.state.scrollX.interpolate({
inputRange:[
deviceWidth*index,
deviceWidth*(index+1)],

outputRange:[0,isAndroid?-deviceWidth*1:-deviceWidth*2]})}]}],__source:{fileName:_jsxFileName,lineNumber:46}},





children));


}}]);return Card;}(_react.PureComponent);Card.defaultProps={style:null};Card.propTypes={scrollX:require('prop-types').object.isRequired,index:require('prop-types').number.isRequired,style:require('prop-types').any,children:require('prop-types').any.isRequired};exports.default=Card;