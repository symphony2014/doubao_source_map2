// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 424847
         */
module.exports = function (module, exports, require) {
  exports.__esModule = true;
  exports.camelCase = undefined;
  var n = /^--[a-zA-Z0-9-]+$/;
  var r = /-([a-z])/g;
  var i = /^[^-]+$/;
  var o = /^-(webkit|moz|ms|o|khtml)-/;
  var a = /^-(ms)-/;
  function l(e, t) {
    return t.toUpperCase();
  }
  function s(e, t) {
    return `${t}-`;
  }
  exports.camelCase = function (e, t) {
    var c;
    if (t === undefined) {
      t = {};
    }
    if (!(c = e) || i.test(c) || n.test(c)) {
      return e;
    } else {
      e = e.toLowerCase();
      return (e = t.reactCompat ? e.replace(a, s) : e.replace(o, s)).replace(r, l);
    }
  };
}