// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(343120) to 'array-iteration-polyfill'
// - Renamed variable 'i' to 'arrayUnscopablesDefine'
// - Resolved require(557126) to 'array-unscopables-define'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 168220
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var l = require("array-iteration-polyfill") /*id: 343120*/.find;
  var arrayUnscopablesDefine = require("array-unscopables-define") /*id: 557126*/;
  var a = "find";
  var d = true;
  if (a in []) {
    [,][a](function () {
      d = false;
    });
  }
  polyfillPropertyDefiner({
    target: "Array",
    proto: true,
    forced: d
  }, {
    find: function (U) {
      return l(this, U, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  arrayUnscopablesDefine(a);
}