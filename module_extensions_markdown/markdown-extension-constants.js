// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ej' to 'BlockTypeMap'
// - Renamed export 'GR' to 'markdownConfig4'
// - Renamed export 'Qk' to 'formatInlineCode'
// - Renamed export 'RQ' to 'formatBold'
// - Renamed export 'S2' to 'markdownConfig4_1'
// - Renamed export '_D' to 'markdownConfig2'
// - Renamed export 'dS' to 'formatStrike'
// - Renamed export 'fG' to 'markdownConfig2_1'
// - Renamed export 'l8' to 'formatEquation'
// - Renamed export 'mt' to 'markdownConfig2_2'
// - Renamed export 'nE' to 'formatItalic'
// - Renamed export 'qm' to 'formatUnderline'
// - Renamed export 'sw' to 'markdownConfig4_2'
// - Renamed export 'wE' to 'inlineFormatList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_extensions_markdown.82d25520.js
         * chunkId: 39939
         * moduleId: 546936
         */
module.exports = function (module, exports, require) {
  var r;
  let o = 4;
  let i = 2;
  let l = 4;
  let a = 2;
  let c = 2;
  let u = 4;
  let d = "bold";
  let s = "italic";
  let f = "strikethrough";
  let g = "underline";
  let p = "inlineCode";
  let I = "equation";
  let E = [d, s, f, g, p, I];
  (r = {})[r.HEADING = 10] = "HEADING";
  r[r.QUOTE_CONTAINER = 20] = "QUOTE_CONTAINER";
  r[r.BOLD = 30] = "BOLD";
  r[r.ITALIC = 40] = "ITALIC";
  r[r.STRIKETHROUGH = 50] = "STRIKETHROUGH";
  r[r.UNDERLINE = 60] = "UNDERLINE";
  r[r.INLINE_CODE = 70] = "INLINE_CODE";
  r[r.DIVIDER = 80] = "DIVIDER";
  r[r.DIVIDER_ASTERISK = 90] = "DIVIDER_ASTERISK";
  r[r.BULLET = 100] = "BULLET";
  r[r.ORDERED = 110] = "ORDERED";
  r[r.TODO = 120] = "TODO";
  r[r.TASK = 130] = "TASK";
  r[r.CODE = 140] = "CODE";
  r[r.CODE_ENTER = 150] = "CODE_ENTER";
  r[r.EQUATION = 160] = "EQUATION";
  let T = r;
  require.d(exports, {
    BlockTypeMap: function () {
      return T;
    },
    markdownConfig4: function () {
      return u;
    },
    formatInlineCode: function () {
      return p;
    },
    formatBold: function () {
      return d;
    },
    markdownConfig4_1: function () {
      return o;
    },
    markdownConfig2: function () {
      return c;
    },
    formatStrike: function () {
      return f;
    },
    markdownConfig2_1: function () {
      return a;
    },
    formatEquation: function () {
      return I;
    },
    markdownConfig2_2: function () {
      return i;
    },
    formatItalic: function () {
      return s;
    },
    formatUnderline: function () {
      return g;
    },
    markdownConfig4_2: function () {
      return l;
    },
    inlineFormatList: function () {
      return E;
    }
  });
}