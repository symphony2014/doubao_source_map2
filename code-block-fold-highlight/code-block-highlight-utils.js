// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'IQ' to 'getCodeBlockLang'
// - Renamed export 'Pf' to 'parseBooleanValue'
// - Renamed export 'VJ' to 'getHighlightLanguage'
// - Renamed export 'g2' to 'shouldUpdateHighlight'
// - Renamed export 'mX' to 'isCodeBlockType'
// - Renamed export 'p7' to 'getCodeBlockZoneIds'
// - Renamed export 'qT' to 'compareRanges'
// - Renamed export 'ru' to 'isCodeBlockFolded'
// - Renamed export 'zm' to 'isCodeBlockEntity'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 22007.b9e6c706.js
         * chunkId: 22007
         * moduleId: 873866
         */
module.exports = function (module, exports, require) {
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var codeBlockHighlightjsConstants = require("code-block-highlightjs-constants") /*id: 433332*/;
  var highlightjsLanguageResolver = require("highlightjs-language-resolver") /*id: 553850*/;
  var a = ["author", "lmkr", "lineguid", "insertorder"];
  function l(e, t) {
    return e.length === t.length && e.every(function (e, n) {
      return t[n] && e.index === t[n].index;
    });
  }
  function s(e) {
    var t;
    var r = e.getZoneId();
    return ((t = e.parent) === null || t === undefined ? undefined : t.getEntities([["zoneId", r]])[0])?.attributes?.type === codeBlockHighlightjsConstants.codeBlockComponentName;
  }
  function d(e) {
    var t = e.getAttributes().toMap();
    return t && t.type === codeBlockHighlightjsConstants.codeBlockComponentName;
  }
  function c(e) {
    return e.parent.getAttributes().toMap().language;
  }
  function u(e) {
    return p(e.parent.getAttributes().toMap().folded);
  }
  function h(e) {
    return e.getEntities([["type", codeBlockHighlightjsConstants.codeBlockComponentName]]).map(function (e) {
      return e.attributes;
    }).reduce(function (e, t) {
      var n = t.zoneId;
      e.push(n);
      return e;
    }, []);
  }
  function f() {
    var e = localStorage.getItem(codeBlockHighlightjsConstants.lastLanguageStorageKey);
    return highlightjsLanguageResolver.resolveLanguage(e || codeBlockHighlightjsConstants.plainTextLabel);
  }
  function g(e, t, n) {
    if (t.line === 0) {
      return true;
    }
    if (t.offset === 0) {
      return false;
    }
    if (!e.version.includes(editorConstantsKeycodes.editorKit)) {
      return true;
    }
    var i;
    var r = (i = e.getContentState().getZoneState(n)) === null || i === undefined ? undefined : i.getLine(t.line);
    var l = +(r != null && !!r.hasLineMarker);
    return t[1] !== l || !(r == null ? undefined : r.getLineAttributes().every(function (e) {
      return a.includes(e[0]);
    }));
  }
  function p(e) {
    return e !== "false" && !!e;
  }
  require.d(exports, {
    getCodeBlockLang: function () {
      return c;
    },
    parseBooleanValue: function () {
      return p;
    },
    getHighlightLanguage: function () {
      return f;
    },
    shouldUpdateHighlight: function () {
      return g;
    },
    isCodeBlockType: function () {
      return d;
    },
    getCodeBlockZoneIds: function () {
      return h;
    },
    compareRanges: function () {
      return l;
    },
    isCodeBlockFolded: function () {
      return u;
    },
    isCodeBlockEntity: function () {
      return s;
    }
  });
}