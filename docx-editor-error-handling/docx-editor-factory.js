// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'createDocxEditor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 450236
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var businessStageConstants = require("business-stage-constants") /*id: 187074*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var idleCallbackPolyfill_1 = require("idle-callback-polyfill_1") /*id: 55404*/;
  function c(e) {
    let {
      name: i,
      dataProvider: r,
      config: c,
      modules: d,
      hooks: u,
      onEditorCreate: h,
      onEditorError: f,
      onEditorDestroy: g,
      moduleOptions: p,
      features: m,
      featureService: v,
      preprocessedInitialModules: b
    } = e;
    let y = new docxEditorCore.Editor({
      name: i,
      dataProvider: r,
      config: c,
      modules: d,
      moduleOptions: p,
      features: m,
      featureService: v,
      preprocessedInitialModules: b,
      hooks: u,
      requestIdleCallback: idleCallbackPolyfill_1.requestIdleCallback,
      scheduleTask: (e, r) => {
        if (r.immediately) {
          e(e => {});
          return;
        }
        return docxTaskSchedulerUtilities.scheduleTaskWithConfig({
          name: (r == null ? undefined : r.name) || i,
          action: () => new Promise((i, r) => {
            e(e => {
              if (e) {
                r(e);
              } else {
                i(e);
              }
            });
          }),
          config: docxFeatureFlags.isCnEnabled() ? r : {
            stage: businessStageConstants.businessConstants.DocxStage.idle,
            priority: 0,
            ...r
          }
        }).taskToken;
      },
      cancelTask: docxTaskSchedulerUtilities.cancelScheduledTask,
      getTaskPriority: e => {
        if (e.immediately) {
          return -Infinity;
        }
        let {
          stage: i = 15,
          priority: r = 134217727
        } = e;
        return (i << 27) + r;
      }
    });
    y.api.lifecycle.editorReady$.subscribe({
      error: e => {
        if (f != null) {
          f(e);
        }
      }
    });
    if (g) {
      y.api.lifecycle.editorDidDestroy$.subscribe(g);
    }
    if (h != null) {
      h(y);
    }
    return y;
  }
  require.d(exports, {
    createDocxEditor: function () {
      return c;
    }
  });
}