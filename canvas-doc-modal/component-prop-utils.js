// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 457587
         */
module.exports = function (module, exports, require) {
  exports.dontSetMe = function (e, t, n) {
    if (e[t]) {
      return Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`);
    }
  };
  exports.findInArray = function (e, t) {
    for (let n = 0, r = e.length; n < r; n++) {
      if (t.apply(t, [e[n], n, e])) {
        return e[n];
      }
    }
  };
  exports.int = function (e) {
    return parseInt(e, 10);
  };
  exports.isFunction = function (e) {
    return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
  };
  exports.isNum = function (e) {
    return typeof e == "number" && !isNaN(e);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}