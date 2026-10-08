// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'playerLangManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12575.ecc95d9e.js
         * chunkId: 12575
         * moduleId: 834464
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var s = {
    lang: {},
    langKeys: [],
    textKeys: []
  };
  function o(e, t) {
    Object.keys(t).forEach(function (i) {
      var s;
      var a = playerUtilityHelpers.domUtils.typeOf(t[i]);
      var l = playerUtilityHelpers.domUtils.typeOf(e[i]);
      if (a === "Array") {
        if (l !== "Array") {
          e[i] = [];
        }
        (s = e[i]).push.apply(s, babelRuntimeHelpers_1.toArray(t[i]));
      } else if (a === "Object") {
        if (l !== "Object") {
          e[i] = {};
        }
        o(e[i], t[i]);
      } else {
        e[i] = t[i];
      }
    });
    return e;
  }
  function a() {
    Object.keys(s.lang.en).map(function (e) {
      s.textKeys[e] = e;
    });
  }
  function l(e, t) {
    var i = e.LANG;
    t ||= s;
    if (t.lang) {
      var n = e.TEXT || {};
      if (i === "zh") {
        i = "zh-cn";
      }
      if (t.lang[i]) {
        o(t.lang[i], n);
      } else {
        t.langKeys.push(i);
        t.lang[i] = n;
      }
      a();
    }
  }
  l({
    LANG: "en",
    TEXT: {
      ERROR_TYPES: {
        network: {
          code: 1,
          msg: "video download error"
        },
        mse: {
          code: 2,
          msg: "stream append error"
        },
        parse: {
          code: 3,
          msg: "parsing error"
        },
        format: {
          code: 4,
          msg: "wrong format"
        },
        decoder: {
          code: 5,
          msg: "decoding error"
        },
        runtime: {
          code: 6,
          msg: "grammatical errors"
        },
        timeout: {
          code: 7,
          msg: "play timeout"
        },
        other: {
          code: 8,
          msg: "other errors"
        }
      },
      HAVE_NOTHING: "There is no information on whether audio/video is ready",
      HAVE_METADATA: "Audio/video metadata is ready ",
      HAVE_CURRENT_DATA: "Data about the current play location is available, but there is not enough data to play the next frame/millisecond",
      HAVE_FUTURE_DATA: "Current and at least one frame of data is available",
      HAVE_ENOUGH_DATA: "The available data is sufficient to start playing",
      NETWORK_EMPTY: "Audio/video has not been initialized",
      NETWORK_IDLE: "Audio/video is active and has been selected for resources, but no network is used",
      NETWORK_LOADING: "The browser is downloading the data",
      NETWORK_NO_SOURCE: "No audio/video source was found",
      MEDIA_ERR_ABORTED: "The fetch process is aborted by the user",
      MEDIA_ERR_NETWORK: "An error occurred while downloading",
      MEDIA_ERR_DECODE: "An error occurred while decoding",
      MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/video is not supported",
      REPLAY: "Replay",
      ERROR: "Network is offline",
      PLAY_TIPS: "Play",
      PAUSE_TIPS: "Pause",
      PLAYNEXT_TIPS: "Play next",
      DOWNLOAD_TIPS: "Download",
      ROTATE_TIPS: "Rotate",
      RELOAD_TIPS: "Reload",
      FULLSCREEN_TIPS: "Fullscreen",
      EXITFULLSCREEN_TIPS: "Exit fullscreen",
      CSSFULLSCREEN_TIPS: "Cssfullscreen",
      EXITCSSFULLSCREEN_TIPS: "Exit cssfullscreen",
      TEXTTRACK: "Caption",
      PIP: "PIP",
      SCREENSHOT: "Screenshot",
      LIVE: "LIVE",
      OFF: "Off",
      OPEN: "Open",
      MINI_DRAG: "Click and hold to drag",
      MINISCREEN: "Miniscreen",
      REFRESH_TIPS: "Please Try",
      REFRESH: "Refresh",
      FORWARD: "forward",
      LIVE_TIP: "Live"
    }
  });
  var u = {
    get textKeys() {
      return s.textKeys;
    },
    get langKeys() {
      return s.langKeys;
    },
    get lang() {
      var c = {};
      s.langKeys.map(function (e) {
        c[e] = s.lang[e];
      });
      if (s.lang["zh-cn"]) {
        c.zh = s.lang["zh-cn"] || {};
      }
      return c;
    },
    extend: function (e, t) {
      var i = [];
      t ||= s;
      if (t.lang) {
        i = playerUtilityHelpers.domUtils.typeOf(e) !== "Array" ? Object.keys(e).map(function (t) {
          return {
            LANG: t === "zh" ? "zh-cn" : t,
            TEXT: e[t]
          };
        }) : e;
        var n = t.lang;
        i.map(function (e) {
          if (e.LANG === "zh") {
            e.LANG = "zh-cn";
          }
          if (n[e.LANG]) {
            o(n[e.LANG] || {}, e.TEXT || {});
          } else {
            l(e, t);
          }
        });
        a();
      }
    },
    use: l,
    init: function (e) {
      var t;
      var i = {
        lang: {},
        langKeys: [],
        textKeys: {},
        pId: e
      };
      o(i.lang, s.lang);
      (t = i.langKeys).push.apply(t, babelRuntimeHelpers_1.toArray(s.langKeys));
      o(i.textKeys, s.textKeys);
      return i;
    }
  };
  require.d(exports, {
    playerLangManager: function () {
      return u;
    }
  });
}