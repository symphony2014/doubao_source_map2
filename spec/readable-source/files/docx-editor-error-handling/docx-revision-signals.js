// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BU' to 'deactivateRevSignal'
// - Renamed export 'Gm' to 'revisionStatusSig'
// - Renamed export 'Ir' to 'getRevisionEdit'
// - Renamed export 'K9' to 'setRevisionExt'
// - Renamed export 'KC' to 'revisionEditSig'
// - Renamed export 'W6' to 'setRevisionData'
// - Renamed export 'Z1' to 'setRevisionEdit'
// - Renamed export '_p' to 'setDeactivateRev'
// - Renamed export 'eJ' to 'getRevisionStatus'
// - Renamed export 'eV' to 'setActivateRev'
// - Renamed export 'eY' to 'revisionExtSig'
// - Renamed export 'fl' to 'activateRevSig'
// - Renamed export 'hk' to 'getRevisionExt'
// - Renamed export 'mI' to 'setRevisionStatus'
// - Renamed export 'nm' to 'getRevisionData'
// - Renamed export 'oe' to 'setRevisionStatus2'
// - Renamed export 'px' to 'getActivateRev'
// - Renamed export 'qD' to 'revisionStatusSig2'
// - Renamed export 'r6' to 'getDeactivateRev'
// - Renamed export 'uW' to 'revisionDataSig'
// - Renamed export 'zW' to 'getRevisionStatus2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 196153
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  let [o, l, s] = docxEditorCore.createSignal("revision-status-change-signal");
  let [a, c, d] = docxEditorCore.createSignal("revision-status-change-signal");
  let [u, h, f] = docxEditorCore.createSignal("revision-extension-signal");
  let [g, p, m] = docxEditorCore.createSignal("activate-revision-signal");
  let [v, b, y] = docxEditorCore.createSignal("deactivate-revision-signal");
  let [S, k, E] = docxEditorCore.createSignal("revision-data-change-signal");
  let [C, _, R] = docxEditorCore.createSignal("revision-edit-signal");
  require.d(exports, {
    deactivateRevSignal: function () {
      return y;
    },
    revisionStatusSig: function () {
      return s;
    },
    getRevisionEdit: function () {
      return C;
    },
    setRevisionExt: function () {
      return h;
    },
    revisionEditSig: function () {
      return R;
    },
    setRevisionData: function () {
      return k;
    },
    setRevisionEdit: function () {
      return _;
    },
    setDeactivateRev: function () {
      return b;
    },
    getRevisionStatus: function () {
      return o;
    },
    setActivateRev: function () {
      return p;
    },
    revisionExtSig: function () {
      return f;
    },
    activateRevSig: function () {
      return m;
    },
    getRevisionExt: function () {
      return u;
    },
    setRevisionStatus: function () {
      return l;
    },
    getRevisionData: function () {
      return S;
    },
    setRevisionStatus2: function () {
      return c;
    },
    getActivateRev: function () {
      return g;
    },
    revisionStatusSig2: function () {
      return d;
    },
    getDeactivateRev: function () {
      return v;
    },
    revisionDataSig: function () {
      return E;
    },
    getRevisionStatus2: function () {
      return a;
    }
  });
}