// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'FlowDocPreview'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 144992
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var flowSettingSyncHooks = require("flow-setting-sync-hooks") /*id: 421458*/;
  var docPreviewContainerIds = require("doc-preview-container-ids") /*id: 449485*/;
  var docPreviewComponent = require("doc-preview-component") /*id: 669147*/;
  var docxViewModeDetector = require("docx-view-mode-detector") /*id: 44270*/;
  var syncedBlockReferenceUtils = require("synced-block-reference-utils") /*id: 279191*/;
  var useAgwRoleHandler = require("use-agw-role-handler") /*id: 400367*/;
  require("empty-module-wrapper_1") /*id: 660033*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function p(e) {
    var p;
    var m;
    let v = e.objToken;
    let g = e.scroller ?? docPreviewContainerIds.flowDocSelector;
    let b = e.onFetchError ?? emptyExportFunction.emptyFunction;
    let y = e.onError ?? emptyExportFunction.emptyFunction;
    let k = (p = e.enableDocInline) !== null && p !== undefined && p;
    useAgwRoleHandler.useAgwRoleHandler({
      token: v
    });
    flowSettingSyncHooks.useEnableDocInline(k);
    let _ = a(docPreviewContainerIds.docxWrapperClass, syncedBlockReferenceUtils.getSyncedBorderUi(), syncedBlockReferenceUtils.getSyncingPageUi(), syncedBlockReferenceUtils.getSyncedOverflowUi(), e.className);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: _,
      style: {
        width: "80%",
        margin: "0 auto"
      },
      children: reactJsxRuntimeCoreReexport.jsx(docPreviewComponent.DocPreviewComponent, {
        store: e.store,
        token: v,
        scroller: g,
        recursionProps: {
          editable: false,
          isPreview: true,
          isReview: e.isReview,
          appMode: docxViewModeDetector.viewModeConstants.UNKNOWN
        },
        onMount: e.onEditorMounted,
        onUnmount: e.onEditorUnmounted,
        docVersion: e.docVersion,
        onFetchDoc: e.onFetchDoc,
        onFetchError: b,
        onError: y,
        enableVirtualRender: (m = e.enableVirtualRender) === null || m === undefined || m,
        getAuthToken: e.getAuthToken,
        docxSignal: e.docxSignal,
        getEditorModules: e.getEditorModules,
        children: e.children,
        events: e.events
      }, v)
    });
  }
  require.d(exports, {
    FlowDocPreview: function () {
      return p;
    }
  });
}