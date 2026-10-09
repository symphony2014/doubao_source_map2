// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 979750
         */
module.exports = function (module, exports, require) {
  var r = Object.prototype.hasOwnProperty;
  function o(e, r) {
    if (e === r) {
      return e !== 0 || r !== 0 || 1 / e == 1 / r;
    } else {
      return e != e && r != r;
    }
  }
  function l(e, l) {
    if (o(e, l)) {
      return true;
    }
    if (typeof e != "object" || e === null || typeof l != "object" || l === null) {
      return false;
    }
    var n = Object.keys(e);
    var a = Object.keys(l);
    if (n.length !== a.length) {
      return false;
    }
    for (var i = 0; i < n.length; i++) {
      if (!r.call(l, n[i]) || !o(e[n[i]], l[n[i]])) {
        return false;
      }
    }
    return true;
  }
  module.exports = function (e, r, o) {
    return !l(e.props, r) || !l(e.state, o);
  };
}