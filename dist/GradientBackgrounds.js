Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/GradientBackgrounds.js';exports.default=



























GradientBackgrounds;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _Dimensions$get=_reactNative.Dimensions.get('window'),deviceHeight=_Dimensions$get.height,deviceWidth=_Dimensions$get.width;var isAdroid=_reactNative.Platform.OS==='android';var styles=_reactNative.StyleSheet.create({container:{position:'absolute',width:deviceWidth,height:deviceHeight}});function GradientBackgrounds(_ref){var scrollX=_ref.scrollX,style=_ref.style,colors=_ref.colors;
return(
_react2.default.createElement(_reactNative.View,{style:[styles.container,style],__source:{fileName:_jsxFileName,lineNumber:31}},
colors.map(function(color,index){return(
_react2.default.createElement(_reactNative.Animated.View,{
key:'gb-'+index,
style:_extends({},
_reactNative.StyleSheet.absoluteFillObject,{
backgroundColor:color,
zIndex:-index,
opacity:scrollX.interpolate({
inputRange:[deviceWidth*index,deviceWidth*(index+1)],
outputRange:isAdroid?[1,2]:[1,0]})}),__source:{fileName:_jsxFileName,lineNumber:33}}));})));






}GradientBackgrounds.propTypes={scrollX:_propTypes2.default.object.isRequired,colors:_propTypes2.default.arrayOf(_propTypes2.default.string.isRequired).isRequired,style:_propTypes2.default.any};

GradientBackgrounds.defaultProps={
style:null};