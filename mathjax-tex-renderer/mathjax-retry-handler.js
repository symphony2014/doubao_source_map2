// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 425825
         */
module.exports = function (module, exports, require) {
  exports.retryAfter = exports.handleRetriesFor = undefined;
  exports.handleRetriesFor = function (t) {
    return new Promise(function e(Q, r) {
      try {
        Q(t());
      } catch (t) {
        if (t.retry && t.retry instanceof Promise) {
          t.retry.then(function () {
            return e(Q, r);
          }).catch(function (t) {
            return r(t);
          });
        } else if (t.restart && t.restart.isCallback) {
          MathJax.Callback.After(function () {
            return e(Q, r);
          }, t.restart);
        } else {
          r(t);
        }
      }
    });
  };
  exports.retryAfter = function (t) {
    var e = Error("MathJax retry");
    e.retry = t;
    throw e;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}