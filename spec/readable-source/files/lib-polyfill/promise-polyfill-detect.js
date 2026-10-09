// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'promisePolyfill'
// - Resolved require(733703) to 'promise-polyfill'
// - Renamed variable 'o' to 'iteratorCloseCheck'
// - Resolved require(675728) to 'iterator-close-check'
// - Resolved require(91037) to 'promise-polyfill-detection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 324392
         */
module.exports = function (module, exports, require) {
  var promisePolyfill = require("promise-polyfill") /*id: 733703*/;
  var iteratorCloseCheck = require("iterator-close-check") /*id: 675728*/;
  var i = require("promise-polyfill-detection") /*id: 91037*/.CONSTRUCTOR;
  module.exports = i || !iteratorCloseCheck(function (t) {
    promisePolyfill.all(t).then(undefined, function () {});
  });
}