Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/NextButton.js';exports.default=


































NextButton;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _Dimensions$get=_reactNative.Dimensions.get('window'),WINDOW_WIDTH=_Dimensions$get.width,WINDOW_HEIGHT=_Dimensions$get.height;var isIphoneX=_reactNative.Platform.OS==='ios'&&(WINDOW_HEIGHT===812||WINDOW_WIDTH===812);var styles=_reactNative.StyleSheet.create({container:{justifyContent:'flex-end'},inlineRow:{flexDirection:'row',justifyContent:'center'},action:{paddingTop:20,paddingBottom:isIphoneX?30:20}});function NextButton(_ref){var title=_ref.title,style=_ref.style,onPress=_ref.onPress;
return(
_react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:38}},
_react2.default.createElement(_reactNative.View,{style:[styles.inlineRow],__source:{fileName:_jsxFileName,lineNumber:39}},
_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:onPress,style:styles.action,__source:{fileName:_jsxFileName,lineNumber:40}},
_react2.default.createElement(_reactNative.Text,{style:style,__source:{fileName:_jsxFileName,lineNumber:41}},
title)))));





}NextButton.propTypes={style:require('prop-types').any,onPress:require('prop-types').func.isRequired,title:require('prop-types').string.isRequired};

NextButton.defaultProps={
style:null};