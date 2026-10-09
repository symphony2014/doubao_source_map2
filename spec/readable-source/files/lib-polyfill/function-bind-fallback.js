// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'detectBindSupport'
// - Resolved require(412787) to 'detect-bind-support'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 263497
         */
module.exports = function (module, exports, require) {
  var detectBindSupport = require("detect-bind-support") /*id: 412787*/;
  var o = Function.prototype;
  var i = o.call;
  var a = detectBindSupport && o.bind.bind(i, i);
  module.exports = detectBindSupport ? a : function (t) {
    return function () {
      return i.apply(t, arguments);
    };
  };
}