// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A1' to 'hasPaddingDiff'
// - Renamed export 'Bl' to 'getPaddingValue'
// - Renamed export 'bk' to 'isPaddingPartial'
// - Renamed export 'lU' to 'clampPadding'
// - Renamed export 'o2' to 'isValidPadding'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 656664
         */
module.exports = function (module, exports, require) {
  var docxEditorConstants = require("docx-editor-constants") /*id: 708986*/;
  function i(e) {
    if (!e) {
      return false;
    }
    let [n, r, o, i] = e;
    return !c(e) && !l(e) && (o - n != 1 || i - r != 1);
  }
  function l(e) {
    return e.some(e => e < 0 || e > 1);
  }
  function c(e) {
    let [n, r, o, i] = e;
    return n >= o || r >= i;
  }
  function u(e) {
    if (e == null) {
      return undefined;
    } else {
      return e.map(e => e > 1 ? 1 : e < 0 ? 0 : e);
    }
  }
  function a(e) {
    return e && e.length === 4 && !c(e) && !l(e);
  }
  function s(e) {
    return !!e && e.every(e => e === 0);
  }
  function d(e) {
    if (!e || s(e)) {
      return docxEditorConstants.editorPadding;
    } else {
      return e;
    }
  }
  function f(e, n) {
    return e === n || !!e && !!n && e.length === 4 && e.length === n.length && e[0] === n[0] && e[1] === n[1] && e[2] === n[2] && e[3] === n[3];
  }
  function h(e, n) {
    return (!!e || !!n) && (!e && !!n || !!e && !n || !f(e, n) && (!s(e) || !f(n, docxEditorConstants.editorPadding)));
  }
  require.d(exports, {
    hasPaddingDiff: function () {
      return h;
    },
    getPaddingValue: function () {
      return d;
    },
    isPaddingPartial: function () {
      return i;
    },
    clampPadding: function () {
      return u;
    },
    isValidPadding: function () {
      return a;
    }
  });
}