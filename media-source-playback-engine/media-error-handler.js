// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fc' to 'MediaError'
// - Renamed export 'WE' to 'errorCodes'
// - Renamed export 'wb' to 'ErrorTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 706617
         */
module.exports = function (module, exports, require) {
  var r;
  var babelRuntimeHelpers = require("babel-runtime-helpers") /*id: 339562*/;
  var o = {
    MANIFEST: "manifest",
    NETWORK: "network",
    NETWORK_TIMEOUT: "network_timeout",
    NETWORK_FORBIDDEN: "network_forbidden",
    NETWORK_NOTFOUND: "network_notfound",
    NETWROK_RANGE_NOT_SATISFIABLE: "network_range_not_satisfiable",
    DEMUX: "demux",
    REMUX: "remux",
    MEDIA: "media",
    DRM: "drm",
    OTHER: "other",
    RUNTIME: "runtime",
    SUB_TYPES: {
      FLV: "FLV",
      HLS: "HLS",
      MP4: "MP4",
      FMP4: "FMP4",
      MSE_ADD_SB: "MSE_ADD_SB",
      MSE_APPEND_BUFFER: "MSE_APPEND_BUFFER",
      MSE_OTHER: "MSE_OTHER",
      MSE_FULL: "MSE_FULL",
      OPTION: "OPTION",
      DASH: "DASH",
      LICENSE: "LICENSE",
      CUSTOM_LICENSE: "CUSTOM_LICENSE",
      MSE_HIJACK: "MSE_HIJACK",
      EME_HIJACK: "EME_HIJACK",
      SIDX: "SIDX",
      NO_CANPLAY_ERROR: "NO_CANPLAY_ERROR",
      BUFFERBREAK_ERROR: "BUFFERBREAK_ERROR",
      WAITING_TIMEOUT_ERROR: "WAITING_TIMEOUT_ERROR",
      MEDIA_ERR_ABORTED: "MEDIA_ERR_ABORTED",
      MEDIA_ERR_NETWORK: "MEDIA_ERR_NETWORK",
      MEDIA_ERR_DECODE: "MEDIA_ERR_DECODE",
      MEDIA_ERR_SRC_NOT_SUPPORTED: "MEDIA_ERR_SRC_NOT_SUPPORTED",
      MEDIA_ERR_CODEC_NOT_SUPPORTED: "MEDIA_ERR_CODEC_NOT_SUPPORTED",
      MEDIA_ERR_URL_EMPTY: "MEDIA_ERR_URL_EMPTY"
    }
  };
  r = {};
  babelRuntimeHelpers.defineProperty(r, o.MANIFEST, {
    HLS: 1100,
    DASH: 1200
  });
  babelRuntimeHelpers.defineProperty(r, o.NETWORK, 2100);
  babelRuntimeHelpers.defineProperty(r, o.NETWORK_TIMEOUT, 2101);
  babelRuntimeHelpers.defineProperty(r, o.NETWORK_FORBIDDEN, 2103);
  babelRuntimeHelpers.defineProperty(r, o.NETWORK_NOTFOUND, 2104);
  babelRuntimeHelpers.defineProperty(r, o.NETWROK_RANGE_NOT_SATISFIABLE, 2116);
  babelRuntimeHelpers.defineProperty(r, o.DEMUX, {
    FLV: 3100,
    HLS: 3200,
    MP4: 3300,
    FMP4: 3400,
    SIDX: 3410
  });
  babelRuntimeHelpers.defineProperty(r, o.REMUX, {
    FMP4: 4100,
    MP4: 4200
  });
  babelRuntimeHelpers.defineProperty(r, o.MEDIA, {
    MEDIA_ERR_ABORTED: 5101,
    MEDIA_ERR_NETWORK: 5102,
    MEDIA_ERR_DECODE: 5103,
    MEDIA_ERR_SRC_NOT_SUPPORTED: 5104,
    MEDIA_ERR_CODEC_NOT_SUPPORTED: 5105,
    MEDIA_ERR_URL_EMPTY: 5106,
    MSE_ADD_SB: 5200,
    MSE_APPEND_BUFFER: 5201,
    MSE_OTHER: 5202,
    MSE_FULL: 5203,
    MSE_HIJACK: 5204,
    EME_HIJACK: 5301
  });
  babelRuntimeHelpers.defineProperty(r, o.DRM, {
    LICENSE: 7100,
    CUSTOM_LICENSE: 7200
  });
  babelRuntimeHelpers.defineProperty(r, o.OTHER, 8000);
  babelRuntimeHelpers.defineProperty(r, o.RUNTIME, {
    NO_CANPLAY_ERROR: 9001,
    BUFFERBREAK_ERROR: 9002,
    WAITING_TIMEOUT_ERROR: 9003
  });
  var a = r;
  var s = function (e) {
    babelRuntimeHelpers.inherits(n, e);
    var t = babelRuntimeHelpers.possibleConstructorReturn(n);
    function n(e, r, s, u, c) {
      var l;
      babelRuntimeHelpers.classCallCheck(this, n);
      (l = t.call(this, c || (s == null ? undefined : s.message))).errorType = e === o.NETWORK_TIMEOUT ? o.NETWORK : e;
      l.originError = s;
      l.ext = u;
      l.errorCode = a[e][r] || a[e];
      l.errorMessage = l.message;
      if (!l.errorCode) {
        l.errorType = o.OTHER;
        l.errorCode = a[l.errorType];
      }
      return l;
    }
    babelRuntimeHelpers.classProps(n, null, [{
      key: "create",
      value: function (e, t, r, i, a) {
        if (e instanceof n) {
          return e;
        } else {
          if (e instanceof Error) {
            r = e;
            e = "";
          }
          e ||= o.OTHER;
          return new n(e, t, r, i, a);
        }
      }
    }, {
      key: "network",
      value: function (e) {
        return new n(e != null && e.isTimeout ? o.NETWORK_TIMEOUT : o.NETWORK, null, e instanceof Error ? e : null, {
          url: e == null ? undefined : e.url,
          response: e == null ? undefined : e.response,
          httpCode: e == null ? undefined : e.response?.status
        });
      }
    }]);
    return n;
  }(babelRuntimeHelpers.wrapNative(Error));
  require.d(exports, {
    MediaError: function () {
      return s;
    },
    errorCodes: function () {
      return a;
    },
    ErrorTypes: function () {
      return o;
    }
  });
}