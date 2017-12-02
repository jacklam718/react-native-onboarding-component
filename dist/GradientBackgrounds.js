Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/GradientBackgrounds.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _Dimensions$get=

_reactNative.Dimensions.get('window'),deviceHeight=_Dimensions$get.height,deviceWidth=_Dimensions$get.width;
var isAdroid=_reactNative.Platform.OS==='android';

var styles=_reactNative.StyleSheet.create({
container:{
position:'absolute',
width:deviceWidth,
height:deviceHeight}});var









GradientBackgrounds=function(_PureComponent){_inherits(GradientBackgrounds,_PureComponent);




function GradientBackgrounds(props){_classCallCheck(this,GradientBackgrounds);var _this=_possibleConstructorReturn(this,(GradientBackgrounds.__proto__||Object.getPrototypeOf(GradientBackgrounds)).call(this,
props));

_this.state={
scrollX:props.scrollX};return _this;

}_createClass(GradientBackgrounds,[{key:'render',value:function render()



{var _this2=this;var _props=
this.props,style=_props.style,colors=_props.colors;
return(
_react2.default.createElement(_reactNative.View,{style:[styles.container,style],__source:{fileName:_jsxFileName,lineNumber:41}},
colors.map(function(color,index){return(
_react2.default.createElement(_reactNative.Animated.View,{
key:'gb-'+index,
style:_extends({},
_reactNative.StyleSheet.absoluteFillObject,{
backgroundColor:color,
zIndex:-index,
opacity:_this2.state.scrollX.interpolate({
inputRange:[deviceWidth*index,deviceWidth*(index+1)],
outputRange:isAdroid?[1,2]:[1,0]})}),__source:{fileName:_jsxFileName,lineNumber:43}}));})));






}}]);return GradientBackgrounds;}(_react.PureComponent);GradientBackgrounds.defaultProps={style:null};GradientBackgrounds.propTypes={style:require('prop-types').any,scrollX:require('prop-types').object.isRequired,colors:require('prop-types').arrayOf(require('prop-types').string).isRequired};exports.default=GradientBackgrounds;