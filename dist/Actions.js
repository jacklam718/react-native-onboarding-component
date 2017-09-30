Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Actions.js';exports.default=
























Actions;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var styles=_reactNative.StyleSheet.create({container:{justifyContent:'flex-end'},inlineRow:{flexDirection:'row',justifyContent:'center'},action:{paddingTop:20,paddingBottom:20}});function Actions(_ref){var children=_ref.children,style=_ref.style,actions=_ref.actions;
var content=children||actions.map(function(action,index){return(
_react2.default.createElement(_reactNative.TouchableOpacity,{
key:'action-'+index,
onPress:action.onPress,
style:styles.action,__source:{fileName:_jsxFileName,lineNumber:28}},

_react2.default.createElement(_reactNative.Text,{style:[action.style],__source:{fileName:_jsxFileName,lineNumber:33}},
action.title)));});




return(
_react2.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:40}},
_react2.default.createElement(_reactNative.View,{style:[styles.inlineRow,style],__source:{fileName:_jsxFileName,lineNumber:41}},
content)));



}Actions.propTypes={style:require('prop-types').any,children:require('prop-types').any,actions:require('prop-types').arrayOf(require('prop-types').object)};

Actions.defaultProps={
style:null,
children:null,
actions:null};