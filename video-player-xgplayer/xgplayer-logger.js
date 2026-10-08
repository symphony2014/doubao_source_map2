// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'logger'
// - Renamed export 'w' to 'installLogger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: super-task-audio-play-card.63d4cbf3.js
         * chunkId: 17108
         * moduleId: 587555
         */
module.exports = function (module, exports, require) {
  var r = typeof window != "undefined" && window.location && window.location.href.indexOf("xgplayerdebugger=1") > -1;
  var o = {
    info: "color: #525252; background-color: #90ee90;",
    error: "color: #525252; background-color: red;",
    warn: "color: #525252; background-color: yellow; "
  };
  var i = "%c[xgplayer]";
  var a = {
    config: {
      debug: !!r * 3
    },
    logInfo: function (e) {
      var t;
      var n = arguments.length;
      var r = Array(n > 1 ? n - 1 : 0);
      var a = 1;
      for (; a < n; a++) {
        r[a - 1] = arguments[a];
      }
      if (this.config.debug >= 3) {
        (t = console).log.apply(t, [i, o.info, e].concat(r));
      }
    },
    logWarn: function (e) {
      var t;
      var n = arguments.length;
      var r = Array(n > 1 ? n - 1 : 0);
      var a = 1;
      for (; a < n; a++) {
        r[a - 1] = arguments[a];
      }
      if (this.config.debug >= 1) {
        (t = console).warn.apply(t, [i, o.warn, e].concat(r));
      }
    },
    logError: function (e) {
      if (!(this.config.debug < 1)) {
        var t;
        var n = this.config.debug >= 2 ? "trace" : "error";
        var r = arguments.length;
        var a = Array(r > 1 ? r - 1 : 0);
        var u = 1;
        for (; u < r; u++) {
          a[u - 1] = arguments[u];
        }
        (t = console)[n].apply(t, [i, o.error, e].concat(a));
      }
    }
  };
  function u(e) {
    e.logInfo = a.logInfo.bind(e);
    e.logWarn = a.logWarn.bind(e);
    e.logError = a.logError.bind(e);
  }
  require.d(exports, {
    logger: function () {
      return a;
    },
    installLogger: function () {
      return u;
    }
  });
}