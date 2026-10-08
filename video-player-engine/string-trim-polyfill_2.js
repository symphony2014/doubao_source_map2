// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(700296) to 'string-trim-utils'
// - Resolved require(253083) to 'string-whitespace-bug-detector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 229627
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var l = require("string-trim-utils") /*id: 700296*/.trim;
  polyfillPropertyDefiner({
    target: "String",
    proto: true,
    forced: require("string-whitespace-bug-detector") /*id: 253083*/("trim")
  }, {
    trim: function () {
      return l(this);
    }
  });
}