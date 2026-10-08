// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'detectBindSupport'
// - Resolved require(412787) to 'detect-bind-support'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 676373
         */
module.exports = function (module, exports, require) {
  var detectBindSupport = require("detect-bind-support") /*id: 412787*/;
  var o = Function.prototype;
  var i = o.apply;
  var a = o.call;
  module.exports = typeof Reflect == "object" && Reflect.apply || (detectBindSupport ? a.bind(i) : function () {
    return a.apply(i, arguments);
  });
}