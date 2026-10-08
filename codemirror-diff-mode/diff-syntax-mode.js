// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57946.2c225adf.js
         * chunkId: 57946
         * moduleId: 331127
         */
module.exports = function (module, exports, require) {
  var t = {
    "+": "inserted",
    "-": "deleted",
    "@": "meta"
  };
  let s = {
    name: "diff",
    token: function (e) {
      var r = e.string.search(/[\t ]+?$/);
      if (!e.sol() || r === 0) {
        e.skipToEnd();
        return ("error " + (t[e.string.charAt(0)] || "")).replace(/ $/, "");
      }
      var n = t[e.peek()] || e.skipToEnd();
      if (r === -1) {
        e.skipToEnd();
      } else {
        e.pos = r;
      }
      return n;
    }
  };
  require.r(exports);
  require.d(exports, {
    diff: function () {
      return s;
    }
  });
}