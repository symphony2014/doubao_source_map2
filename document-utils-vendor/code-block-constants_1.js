// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$W' to 'codeHljsPrefix'
// - Renamed export 'F3' to 'highlightEnabled'
// - Renamed export 'Hj' to 'defaultLanguageName'
// - Renamed export 'Jq' to 'maxLangSuggestions'
// - Renamed export 'L2' to 'codeBlockClassNames'
// - Renamed export 'S2' to 'componentName'
// - Renamed export 'TU' to 'lastLangStorageKey'
// - Renamed export 'Tk' to 'debounceDelay'
// - Renamed export 'Tv' to 'versionCode'
// - Renamed export 'Uj' to 'maxHeight'
// - Renamed export 'Uq' to 'highlightClassName'
// - Renamed export 'VV' to 'featureFlags'
// - Renamed export 'XS' to 'componentClassName'
// - Renamed export 'Yx' to 'lineHeight'
// - Renamed export 'aY' to 'indentSize'
// - Renamed export 'cL' to 'clientHighlightId'
// - Renamed export 'hM' to 'timeoutDuration'
// - Renamed export 'hq' to 'minLines'
// - Renamed export 'j0' to 'fontSize'
// - Renamed export 'lp' to 'scrollDelay'
// - Renamed export 'rW' to 'keyCodeEnum'
// - Renamed export 'xf' to 'maxCharacters'
// - Renamed export 'xt' to 'animationDuration'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: highlightjs.855d37dd.js
         * chunkId: 23471
         * moduleId: 881225
         */
module.exports = function (module, exports, require) {
  var a;
  var r;
  var i = "CodeBlock";
  var s = "codeblock";
  var o = "codeBlock:lastLang";
  var l = "clientside-highlight";
  var c = "code-hljs-";
  var d = "Plain Text";
  var u = 200;
  var g = 5;
  var m = 10;
  var b = 20000;
  var p = {
    HIGHLIGHT: "highlight",
    AUTO_IDENTIFY_LANGUAGE: "autoIdentifyLanguage"
  };
  var _ = 200;
  var f = 12;
  var E = 4;
  var h = 280;
  var y = 36;
  var N = 2;
  var v = 4;
  var w = {
    CODE_BLOCK: "code-block",
    ACE_LINE: "code-block-ace-line",
    LINE: "code-block-line",
    CONTAINER: "code-block-container",
    HEADER: "code-block-header",
    HEADER_BTN: "code-block-header-btn",
    HEADER_BTN_CON: "code-block-header-btn-con",
    LANG_PICKER: "code-block__lang-picker",
    LANG_PICKER_HEADER_CON: "code-block__lang-picker-header-con",
    SPAN: "zoneType-codeBlock",
    COPY_CODE: "copy-code",
    CODE_LINE_NUM: "code-block-line-num",
    CODE_BLOCK_UPGRADE: "code-block-upgrade",
    WORD_WRAP_PREFIX: "word-wrap",
    ZONE_CONTAINER: "code-block-zone-container"
  };
  (r = a ||= {})[r.TAB = 9] = "TAB";
  r[r.ENTER = 13] = "ENTER";
  r[r.DELETE = 8] = "DELETE";
  r[r.ARROW_LEFT = 37] = "ARROW_LEFT";
  r[r.ARROW_UP = 38] = "ARROW_UP";
  r[r.ARROW_RIGHT = 39] = "ARROW_RIGHT";
  r[r.ARROW_DOWN = 40] = "ARROW_DOWN";
  var O = true;
  var x = 500;
  var A = "highlight-code";
  require.d(exports, {
    codeHljsPrefix: function () {
      return c;
    },
    highlightEnabled: function () {
      return O;
    },
    defaultLanguageName: function () {
      return d;
    },
    maxLangSuggestions: function () {
      return g;
    },
    codeBlockClassNames: function () {
      return w;
    },
    componentName: function () {
      return s;
    },
    lastLangStorageKey: function () {
      return o;
    },
    debounceDelay: function () {
      return m;
    },
    versionCode: function () {
      return E;
    },
    maxHeight: function () {
      return h;
    },
    highlightClassName: function () {
      return A;
    },
    featureFlags: function () {
      return p;
    },
    componentClassName: function () {
      return i;
    },
    lineHeight: function () {
      return y;
    },
    indentSize: function () {
      return v;
    },
    clientHighlightId: function () {
      return l;
    },
    timeoutDuration: function () {
      return x;
    },
    minLines: function () {
      return N;
    },
    fontSize: function () {
      return f;
    },
    scrollDelay: function () {
      return u;
    },
    keyCodeEnum: function () {
      return a;
    },
    maxCharacters: function () {
      return b;
    },
    animationDuration: function () {
      return _;
    }
  });
}