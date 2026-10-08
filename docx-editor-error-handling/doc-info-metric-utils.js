// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Gv' to 'shouldHideDocInfo'
// - Renamed export 'KE' to 'getMetricVisibility'
// - Renamed export 'gq' to 'checkEditorState'
// - Renamed export 'rN' to 'getDocInfoId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 890839
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  require("moment-js-core-lib") /*id: 132840*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var docEditorMetricKeys = require("doc-editor-metric-keys") /*id: 959101*/;
  var docxUpdateTimeSettings = require("docx-update-time-settings") /*id: 340835*/;
  var docEditorConstants = require("doc-editor-constants") /*id: 260128*/;
  var docInfoMetricMapping = require("doc-info-metric-mapping") /*id: 227478*/;
  let d = e => `doc-info-${e}`;
  let u = function (e = []) {
    let i = [docEditorMetricKeys.editorMetricKeys.editors, docEditorMetricKeys.editorMetricKeys.createTime, docEditorMetricKeys.editorMetricKeys.editTime, docEditorMetricKeys.editorMetricKeys.viewPersonNumbers, docEditorMetricKeys.editorMetricKeys.viewTimes, docEditorMetricKeys.editorMetricKeys.commentTimes, docEditorMetricKeys.editorMetricKeys.likeTimes];
    let r = (e ?? []).reduce((e, i) => {
      e[i] = true;
      return e;
    }, {});
    return i.reduce((e, i) => {
      e[docInfoMetricMapping.metricKeyMapping[i]] = !!r[i];
      return e;
    }, {});
  };
  let h = e => !!userEnvironmentUtils.isAnonymousAccess() && e.length === 1 && e[0] === docEditorMetricKeys.editorMetricKeys.editors;
  let f = e => docxUpdateTimeSettings.isUpdateTimeTitle() ? undefined : userEnvironmentUtils.isAnonymousAccess() ? e.length === 2 && e[0] === docEditorMetricKeys.editorMetricKeys.editors && e[1] === docEditorMetricKeys.editorMetricKeys.editTime : e.length === 1 && e[0] === docEditorMetricKeys.editorMetricKeys.editTime;
  let g = e => {
    return !e || !e[docEditorConstants.docFieldKeys.options]?.length || f(e[docEditorConstants.docFieldKeys.options]) || h(e[docEditorConstants.docFieldKeys.options]);
  };
  function p(e) {
    let {
      editorAPI: i
    } = e;
    i.config.get("isSSR");
    i.config.get("isShortcut");
    i.config.get("isHistory");
    i.config.get("isPresentationMode");
    i.config.get("translated");
    platformDocUtils.KNd();
    i.config.get("isSyncedReferenceBlock");
    return false;
  }
  require.d(exports, {
    shouldHideDocInfo: function () {
      return g;
    },
    getMetricVisibility: function () {
      return u;
    },
    checkEditorState: function () {
      return p;
    },
    getDocInfoId: function () {
      return d;
    }
  });
}