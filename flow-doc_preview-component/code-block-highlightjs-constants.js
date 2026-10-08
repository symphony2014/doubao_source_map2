// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$W' to 'codeHighlightPrefix'
// - Renamed export 'F3' to 'isAutoHighlightEnabled'
// - Renamed export 'Hj' to 'plainTextLabel'
// - Renamed export 'Jq' to 'maxUndoStackSize'
// - Renamed export 'L2' to 'cssClassNames'
// - Renamed export 'S2' to 'codeBlockComponentName'
// - Renamed export 'TU' to 'lastLanguageStorageKey'
// - Renamed export 'Tk' to 'defaultTabSize'
// - Renamed export 'Tv' to 'minLinesForCollapse'
// - Renamed export 'Uj' to 'codeBlockMaxHeight'
// - Renamed export 'Uq' to 'highlightActionName'
// - Renamed export 'VV' to 'highlightOptions'
// - Renamed export 'XS' to 'codeBlockType'
// - Renamed export 'Yx' to 'headerButtonHeight'
// - Renamed export 'aY' to 'collapsedLinesCount'
// - Renamed export 'cL' to 'clientSideHighlightFlag'
// - Renamed export 'hM' to 'debounceDelay'
// - Renamed export 'hq' to 'lineNumberDigits'
// - Renamed export 'j0' to 'fontSize'
// - Renamed export 'lp' to 'debounceThreshold'
// - Renamed export 'rW' to 'keyCodeEnum'
// - Renamed export 'xf' to 'maxCodeLength'
// - Renamed export 'xt' to 'highlightDelay'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: highlightjs.855d37dd.js
         * chunkId: 23471
         * moduleId: 433332
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
    codeHighlightPrefix: function () {
      return c;
    },
    isAutoHighlightEnabled: function () {
      return O;
    },
    plainTextLabel: function () {
      return d;
    },
    maxUndoStackSize: function () {
      return g;
    },
    cssClassNames: function () {
      return w;
    },
    codeBlockComponentName: function () {
      return s;
    },
    lastLanguageStorageKey: function () {
      return o;
    },
    defaultTabSize: function () {
      return m;
    },
    minLinesForCollapse: function () {
      return E;
    },
    codeBlockMaxHeight: function () {
      return h;
    },
    highlightActionName: function () {
      return A;
    },
    highlightOptions: function () {
      return p;
    },
    codeBlockType: function () {
      return i;
    },
    headerButtonHeight: function () {
      return y;
    },
    collapsedLinesCount: function () {
      return v;
    },
    clientSideHighlightFlag: function () {
      return l;
    },
    debounceDelay: function () {
      return x;
    },
    lineNumberDigits: function () {
      return N;
    },
    fontSize: function () {
      return f;
    },
    debounceThreshold: function () {
      return u;
    },
    keyCodeEnum: function () {
      return a;
    },
    maxCodeLength: function () {
      return b;
    },
    highlightDelay: function () {
      return _;
    }
  });
}