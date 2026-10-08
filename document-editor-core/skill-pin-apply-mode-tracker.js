// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'ApplyModeEnum'
// - Renamed export 's' to 'useApplyModeTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 38746.3a784493.js
         * chunkId: 38746
         * moduleId: 789345
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var docEditorStrings = require("doc-editor-strings") /*id: 359052*/;
  var editorZoneDeltaOps = require("editor-zone-delta-ops") /*id: 824737*/;
  var rewriteApplyConstant = require("rewrite-apply-constant") /*id: 160238*/;
  (r = {})[r.AutoGenerate = 0] = "AutoGenerate";
  r[r.Maunal = 1] = "Maunal";
  r[r.Hybrid = 2] = "Hybrid";
  r[r.Empty = 3] = "Empty";
  let d = r;
  let _ = () => {
    let e = reactCoreLibraryReexport.useRef(d.Empty);
    let t = reactCoreLibraryReexport.useRef(true);
    return {
      update: skillPinModalCallback.useSkillPinCallback(o => {
        let {
          eventType: r,
          autoApply: i
        } = o;
        if (collectionIncludesUtil.includes([editorZoneDeltaOps.modeSkipRestore, docEditorStrings.restoredApplyAction], r)) {
          return;
        }
        if (t.current) {
          t.current = false;
          return;
        }
        let a = i || collectionIncludesUtil.includes([editorZoneDeltaOps.modeAutoApply, rewriteApplyConstant.rewriteApply], r) ? d.AutoGenerate : d.Maunal;
        if (e.current === d.Empty) {
          e.current = a;
        } else if (e.current !== a) {
          e.current = d.Hybrid;
        }
      }),
      pop: skillPinModalCallback.useSkillPinCallback(() => {
        let t = e.current;
        e.current = d.Empty;
        return t;
      })
    };
  };
  require.d(exports, {
    ApplyModeEnum: function () {
      return d;
    },
    useApplyModeTracker: function () {
      return _;
    }
  });
}