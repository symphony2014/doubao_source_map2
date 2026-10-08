// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'initCommentModule'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_comment_module.03c94317.js
         * chunkId: 58738
         * moduleId: 760917
         */
module.exports = function (module, exports, require) {
  var docxSignalSubjectRegistry = require("docx-signal-subject-registry") /*id: 272418*/;
  var compatibleEditorContext_1 = require("compatible-editor-context_1") /*id: 2711*/;
  var docLauncherConstants = require("doc-launcher-constants") /*id: 808730*/;
  let a = "global_comment";
  async function l(e) {
    let o = await e.editorAPI.getService(docxSignalSubjectRegistry.docxSignalService, {
      dynamic: true
    });
    let l = () => {
      if (o != null) {
        o.globalComponentSignal.next({
          action: docLauncherConstants.lifecycleActions.forceRender,
          componentName: a,
          forAllGlobalComponents: true
        });
      }
    };
    l();
    let s = o == null ? undefined : o.globalComponentSignal.subscribe(e => {
      let {
        action: t,
        componentName: o
      } = e;
      if (t === docLauncherConstants.lifecycleActions.init && o === a) {
        l();
        if (s != null) {
          s.unsubscribe();
        }
      }
    });
    let m = e.editorAPI.getService(compatibleEditorContext_1.compatibleContext).commentModule?.module;
    if (m != null) {
      m.globalCommentLoadedPromise.then(() => s == null ? undefined : s.unsubscribe());
    }
  }
  require.d(exports, {
    initCommentModule: function () {
      return l;
    }
  });
}