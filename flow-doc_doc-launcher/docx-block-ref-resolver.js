// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getBlockRefElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 511852
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxEditorBlockRenderer = require("docx-editor-block-renderer") /*id: 211843*/;
  var diProviderViewSignalAdapter = require("di-provider-view-signal-adapter") /*id: 309523*/;
  var aiBlockTypeUtils = require("ai-block-type-utils") /*id: 173943*/;
  require("runtime-env-flags") /*id: 573139*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var fileUtilsAndViewHelpers = require("file-utils-and-view-helpers") /*id: 192103*/;
  var docxSyncedBlockUtils = require("docx-synced-block-utils") /*id: 791402*/;
  function d(e, n = null) {
    let r = function (e) {
      let {
        rectForFixed: n,
        block: r
      } = e;
      let [a, c] = reactCoreLibraryReexport.useState(null);
      let u = docxEditorBlockRenderer.useInjector(diProviderViewSignalAdapter.viewSignalAdapter);
      let s = reactCoreLibraryReexport.useCallback((e, n) => {
        let r = e && n && n.getCollisionDetectionBlockContent(e.id);
        if (r) {
          c([r, r.firstElementChild].reduce((e, n) => e && n ? e.getBoundingClientRect().left - n.getBoundingClientRect().left > 0 ? e : n : r || null));
        } else {
          c(null);
        }
      }, []);
      reactCoreLibraryReexport.useEffect(() => {
        if (n) {
          s(r, n);
        }
      }, [r, n]);
      reactCoreLibraryReexport.useEffect(() => {
        if (!n) {
          return;
        }
        let e = u.subUpdateMenu(e => {
          if (e === (r == null ? undefined : r.id)) {
            s(r, n);
          }
        });
        return () => {
          e.unsubscribe();
        };
      }, [r, n]);
      return a;
    }({
      rectForFixed: n,
      block: e
    });
    return reactCoreLibraryReexport.useMemo(() => {
      var n;
      let o = null;
      if (fileUtilsAndViewHelpers.isPreviewableFileBlock(e) || aiBlockTypeUtils.isAiBlock(e) || (e == null ? undefined : e.type) === docBlockTypeConstants.blockTypeConstants.CALENDAR_EVENT || docxSyncedBlockUtils.isSyncedBlockType(e)) {
        o = ((n = e.getContainer) === null || n === undefined ? undefined : n.call(e)) || o;
      }
      if (r) {
        let n = r.getBoundingClientRect();
        if (n.width === 0 && n.height === 0) {
          return o || (e == null ? undefined : e.hostElement) || null;
        }
      }
      return r || o || (e == null ? undefined : e.hostElement) || null;
    }, [e, r]);
  }
  require.d(exports, {
    getBlockRefElement: function () {
      return d;
    }
  });
}