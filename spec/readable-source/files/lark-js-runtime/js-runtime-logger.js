// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'logger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-js-runtime.7be57fd6.js
         * chunkId: 1795
         * moduleId: 86486
         */
module.exports = function (module, exports, require) {
  let i = e => e.map(JSON.stringify).join(" ");
  let n = (e, t) => {
    ShellAPI.internal.app.logNoReturn({
      message: e,
      logModule: "JSRuntime",
      level: t
    });
  };
  let s = {
    debug: function () {
      var e = arguments.length;
      var t = Array(e);
      var r = 0;
      for (; r < e; r++) {
        t[r] = arguments[r];
      }
      return n(i(t), 2);
    },
    info: function () {
      var e = arguments.length;
      var t = Array(e);
      var r = 0;
      for (; r < e; r++) {
        t[r] = arguments[r];
      }
      return n(i(t), 3);
    },
    warn: function () {
      var e = arguments.length;
      var t = Array(e);
      var r = 0;
      for (; r < e; r++) {
        t[r] = arguments[r];
      }
      return n(i(t), 4);
    },
    error: function () {
      var e = arguments.length;
      var t = Array(e);
      var r = 0;
      for (; r < e; r++) {
        t[r] = arguments[r];
      }
      return n(i(t), 5);
    }
  };
  require.d(exports, {
    logger: function () {
      return s;
    }
  });
}