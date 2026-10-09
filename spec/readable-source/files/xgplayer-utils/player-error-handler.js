// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'errorTypeMap'
// - Renamed export 'Z' to 'MediaErrorClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: super-task-audio-play-card.63d4cbf3.js
         * chunkId: 17108
         * moduleId: 608826
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var appVersionConstant = require("app-version-constant") /*id: 244951*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var a = {
    1: "media",
    2: "media",
    3: "media",
    4: "media",
    5: "media",
    6: "media"
  };
  var u = {
    1: 5101,
    2: 5102,
    3: 5103,
    4: 5104,
    5: 5105,
    6: 5106
  };
  var c = babelRuntimeHelpers_1.createClass(function e(t, n = {
    errorType: "",
    errorCode: 0,
    errorMessage: "",
    originError: "",
    ext: {},
    mediaError: null
  }) {
    babelRuntimeHelpers_1.classCallCheck(this, e);
    var a = t && t.i18n ? t.i18n.ERROR_TYPES : null;
    if (t.media) {
      var c = n.mediaError ? n.mediaError : t.media.error || {};
      var l = t.duration;
      var s = t.currentTime;
      var d = t.ended;
      var f = t.src;
      var p = t.currentSrc;
      var h = t.media;
      var v = h.readyState;
      var m = h.networkState;
      var g = n.errorCode || c.code;
      if (u[g]) {
        g = u[g];
      }
      var y = {
        playerVersion: appVersionConstant.appVersion,
        currentTime: s,
        duration: l,
        ended: d,
        readyState: v,
        networkState: m,
        src: f || p,
        errorType: n.errorType,
        errorCode: g,
        message: n.errorMessage || c.message,
        mediaError: c,
        originError: n.originError ? n.originError.stack : "",
        host: playerUtilityHelpers.domUtils.getHostFromUrl(f || p)
      };
      if (n.ext) {
        Object.keys(n.ext).map(function (e) {
          y[e] = n.ext[e];
        });
      }
      return y;
    }
    if (arguments.length > 1) {
      var x = {
        playerVersion: appVersionConstant.appVersion,
        domain: document.domain
      };
      var b = ["errorType", "currentTime", "duration", "networkState", "readyState", "src", "currentSrc", "ended", "errd", "errorCode", "mediaError"];
      var w = 0;
      for (; w < arguments.length; w++) {
        x[b[w]] = arguments[w];
      }
      x.ex = a ? (a[arguments[0]] || {}).msg : "";
      return x;
    }
  });
  require.d(exports, {
    errorTypeMap: function () {
      return a;
    },
    MediaErrorClass: function () {
      return c;
    }
  });
}