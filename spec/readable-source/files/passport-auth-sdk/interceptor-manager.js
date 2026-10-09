// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'utilsTypeCheckHelpers'
// - Resolved require(998785) to 'utils-type-check-helpers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 245306
         */
module.exports = function (module, exports, require) {
  var utilsTypeCheckHelpers = require("utils-type-check-helpers") /*id: 998785*/;
  function o() {
    this.handlers = [];
  }
  o.prototype.use = function (e, t, r) {
    this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: !!r && r.synchronous,
      runWhen: r ? r.runWhen : null
    });
    return this.handlers.length - 1;
  };
  o.prototype.eject = function (e) {
    this.handlers[e] &&= null;
  };
  o.prototype.clear = function () {
    this.handlers &&= [];
  };
  o.prototype.forEach = function (e) {
    utilsTypeCheckHelpers.forEach(this.handlers, function (t) {
      if (t !== null) {
        e(t);
      }
    });
  };
  module.exports = o;
}