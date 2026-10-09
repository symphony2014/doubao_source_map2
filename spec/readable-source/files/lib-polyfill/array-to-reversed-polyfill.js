// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'reverseArrayUtil'
// - Resolved require(336328) to 'reverse-array-util'
// - Renamed variable 'i' to 'stringToArrayPolyfillWrapper'
// - Resolved require(902400) to 'string-to-array-polyfill-wrapper'
// - Renamed variable 'a' to 'arrayUnscopablesDefine'
// - Resolved require(557126) to 'array-unscopables-define'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 769863
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var reverseArrayUtil = require("reverse-array-util") /*id: 336328*/;
  var stringToArrayPolyfillWrapper = require("string-to-array-polyfill-wrapper") /*id: 902400*/;
  var arrayUnscopablesDefine = require("array-unscopables-define") /*id: 557126*/;
  var u = Array;
  polyfillPropertyDefiner({
    target: "Array",
    proto: true
  }, {
    toReversed: function () {
      return reverseArrayUtil(stringToArrayPolyfillWrapper(this), u);
    }
  });
  arrayUnscopablesDefine("toReversed");
}