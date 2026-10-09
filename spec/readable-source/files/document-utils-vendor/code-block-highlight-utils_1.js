// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EN' to 'getLanguageInfo'
// - Renamed export 'IQ' to 'getParentLanguage'
// - Renamed export 'Pf' to 'parseBoolValue'
// - Renamed export 'VJ' to 'getDefaultLanguage'
// - Renamed export 'g2' to 'checkLineMarker'
// - Renamed export 'mX' to 'isCodeBlockEntity'
// - Renamed export 'p7' to 'getCodeBlockZoneIds'
// - Renamed export 'qT' to 'compareEntityIndices'
// - Renamed export 'ru' to 'isCodeBlockFolded'
// - Renamed export 'wW' to 'isCodeBlockInsert'
// - Renamed export 'zm' to 'isParentCodeBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 463090
         */
module.exports = function (module, exports, require) {
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var codeBlockConstants_1 = require("code-block-constants_1") /*id: 881225*/;
  var normalizeCodeLanguageName = require("normalize-code-language-name") /*id: 74381*/;
  var a = ["author", "lmkr", "lineguid", "insertorder"];
  function s(e, t) {
    return e.length === t.length && e.every(function (e, r) {
      return t[r] && e.index === t[r].index;
    });
  }
  function l(e) {
    var t;
    var o = e.getZoneId();
    return ((t = e.parent) === null || t === undefined ? undefined : t.getEntities([["zoneId", o]])[0])?.attributes?.type === codeBlockConstants_1.componentName;
  }
  function u(e) {
    var t = e.getAttributes().toMap();
    return t && t.type === codeBlockConstants_1.componentName;
  }
  function c(e) {
    return e.parent.getAttributes().toMap().language;
  }
  function h(e) {
    return m(e.parent.getAttributes().toMap().folded);
  }
  function d(e) {
    return e.getEntities([["type", codeBlockConstants_1.componentName]]).map(function (e) {
      return e.attributes;
    }).reduce(function (e, t) {
      var r = t.zoneId;
      e.push(r);
      return e;
    }, []);
  }
  function f(e) {
    return !!e.insert && !!e.attributes && e.attributes.type === codeBlockConstants_1.componentName;
  }
  function A() {
    var e = localStorage.getItem(codeBlockConstants_1.lastLangStorageKey);
    return normalizeCodeLanguageName.normalizeLanguageName(e || codeBlockConstants_1.defaultLanguageName);
  }
  function g(e) {
    if (!e) {
      return {
        specified: false,
        lang: A()
      };
    }
    var t = (e.querySelector("[class*=\"language-\"]") || e.querySelector("[class*=\"lang-\"]") || e).className.split(" ").find(function (e) {
      return e.startsWith("lang");
    });
    var r = t == null ? undefined : t.match(/lang(uage)?-(.+)/);
    var n = r ? r[2] : "";
    var i = normalizeCodeLanguageName.normalizeLanguageName(n);
    return {
      specified: !!n,
      lang: i
    };
  }
  function p(e, t, r) {
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
    var o = (i = e.getContentState().getZoneState(r)) === null || i === undefined ? undefined : i.getLine(t.line);
    var s = +(o != null && !!o.hasLineMarker);
    return t[1] !== s || !(o == null ? undefined : o.getLineAttributes().every(function (e) {
      return a.includes(e[0]);
    }));
  }
  function m(e) {
    return e !== "false" && !!e;
  }
  require.d(exports, {
    getLanguageInfo: function () {
      return g;
    },
    getParentLanguage: function () {
      return c;
    },
    parseBoolValue: function () {
      return m;
    },
    getDefaultLanguage: function () {
      return A;
    },
    checkLineMarker: function () {
      return p;
    },
    isCodeBlockEntity: function () {
      return u;
    },
    getCodeBlockZoneIds: function () {
      return d;
    },
    compareEntityIndices: function () {
      return s;
    },
    isCodeBlockFolded: function () {
      return h;
    },
    isCodeBlockInsert: function () {
      return f;
    },
    isParentCodeBlock: function () {
      return l;
    }
  });
}