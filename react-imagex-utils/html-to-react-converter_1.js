// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'domHandler'
// - Resolved require(219329) to 'dom-handler'
// - Renamed variable 'i' to 'htmlStringParserUtil'
// - Resolved require(725210) to 'html-string-parser-util'
// - Renamed variable 'o' to 'reactDomAttributeProps'
// - Resolved require(695247) to 'react-dom-attribute-props'
// - Renamed variable 'a' to 'htmlToReactConverter'
// - Resolved require(287828) to 'html-to-react-converter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 795475
         */
module.exports = function (module, exports, require) {
  var domHandler = require("dom-handler") /*id: 219329*/;
  var htmlStringParserUtil = require("html-string-parser-util") /*id: 725210*/;
  var reactDomAttributeProps = require("react-dom-attribute-props") /*id: 695247*/;
  var htmlToReactConverter = require("html-to-react-converter") /*id: 287828*/;
  htmlStringParserUtil = typeof htmlStringParserUtil.default == "function" ? htmlStringParserUtil.default : htmlStringParserUtil;
  var l = {
    lowerCaseAttributeNames: false
  };
  function s(e, t) {
    if (typeof e != "string") {
      throw TypeError("First argument must be a string");
    }
    if (e === "") {
      return [];
    } else {
      return htmlToReactConverter(htmlStringParserUtil(e, (t = t || {}).htmlparser2 || l), t);
    }
  }
  s.domToReact = htmlToReactConverter;
  s.htmlToDOM = htmlStringParserUtil;
  s.attributesToProps = reactDomAttributeProps;
  s.Comment = domHandler.Comment;
  s.Element = domHandler.Element;
  s.ProcessingInstruction = domHandler.ProcessingInstruction;
  s.Text = domHandler.Text;
  module.exports = s;
  s.default = s;
}