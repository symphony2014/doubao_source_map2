// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 802089
         */
module.exports = function (module, exports, require) {
  var e = {};
  var t = [];
  function n(e, t) {}
  function i(e, t) {}
  function r(t, n, i) {
    if (!n && !e[i]) {
      t(false, i);
      e[i] = true;
    }
  }
  function o(e, t) {
    r(n, e, t);
  }
  o.preMessage = function (e) {
    t.push(e);
  };
  o.resetWarned = function () {
    e = {};
  };
  o.noteOnce = function (e, t) {
    r(i, e, t);
  };
}