// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AG' to 'htmlToDom'
// - Renamed export 'du' to 'domToReact'
// - Renamed export 'e_' to 'attributesToProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 544589
         */
module.exports = function (module, exports, require) {
  var htmlToReactConverter_1 = require("html-to-react-converter_1") /*id: 795475*/;
  var i = htmlToReactConverter_1.domToReact;
  var o = htmlToReactConverter_1.htmlToDOM;
  var a = htmlToReactConverter_1.attributesToProps;
  htmlToReactConverter_1.Comment;
  htmlToReactConverter_1.Element;
  htmlToReactConverter_1.ProcessingInstruction;
  htmlToReactConverter_1.Text;
  require.d(exports, {
    htmlToDom: function () {
      return o;
    },
    domToReact: function () {
      return i;
    },
    attributesToProps: function () {
      return a;
    }
  });
}