// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'NU' to 'configLimitMax'
// - Renamed export 'Ne' to 'fsBodyClass'
// - Renamed export 'R4' to 'fsDomClass'
// - Renamed export 'Wu' to 'configSplitNum'
// - Renamed export 'Yf' to 'configFontSize'
// - Renamed export 'Zk' to 'configMarginMin'
// - Renamed export 'aK' to 'mutationActions'
// - Renamed export 'h5' to 'configUnitFrac'
// - Renamed export 'kt' to 'hsDomClass'
// - Renamed export 'mb' to 'hsBodyClass'
// - Renamed export 'nm' to 'configSpacing'
// - Renamed export 'oE' to 'configLimitMid'
// - Renamed export 'xM' to 'hsBlockClass'
// - Renamed export 'zo' to 'fsBlockClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 700786
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  let i = 382;
  let l = 200;
  let c = 10;
  let u = 1 / 24;
  let a = 2;
  let s = 16;
  let d = 20;
  let f = [docxEditorCore.MutationAction.ADD, docxEditorCore.MutationAction.REMOVE];
  let h = "block-with-cssfullscreen-childnode";
  let _ = "dom-with-cssfullscreen-childnode";
  let p = "body-with-cssfullscreen-childnode";
  let g = "block-with-half-screen-childnode";
  let E = "dom-with-half-screen-childnode";
  let m = "body-with-half-screen-childnode";
  require.d(exports, {
    configLimitMax: function () {
      return i;
    },
    fsBodyClass: function () {
      return p;
    },
    fsDomClass: function () {
      return _;
    },
    configSplitNum: function () {
      return a;
    },
    configFontSize: function () {
      return s;
    },
    configMarginMin: function () {
      return c;
    },
    mutationActions: function () {
      return f;
    },
    configUnitFrac: function () {
      return u;
    },
    hsDomClass: function () {
      return E;
    },
    hsBodyClass: function () {
      return m;
    },
    configSpacing: function () {
      return d;
    },
    configLimitMid: function () {
      return l;
    },
    hsBlockClass: function () {
      return g;
    },
    fsBlockClass: function () {
      return h;
    }
  });
}