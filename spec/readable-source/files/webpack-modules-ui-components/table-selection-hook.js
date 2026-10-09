// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'useTableSelection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 293973
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var useDebounceCallbackHook_1 = require("use-debounce-callback-hook_1") /*id: 682959*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var tableHeaderSignalHandler = require("table-header-signal-handler") /*id: 372752*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var useLatestRefHook = require("use-latest-ref-hook") /*id: 129756*/;
  function g(e) {
    let {
      selectionAPI: r,
      blockManager: n
    } = e;
    let [g, m] = reactCoreLibraryReexport.useState([]);
    let [k, T] = reactCoreLibraryReexport.useState([]);
    let [v, y] = reactCoreLibraryReexport.useState(false);
    let b = useLatestRefHook.useLatestRef(g);
    let _ = useLatestRefHook.useLatestRef(k);
    let I = reactCoreLibraryReexport.useCallback(() => {
      let e = r.getContext();
      let i = (e == null ? undefined : e.source) === docxBlockSelectionHandler_1.commandTypes.TableHeader;
      if (i !== v) {
        y(i);
      }
      let l = r.getSelection().filter(e => n.hasBlockViewByBlockId(e.id) && n.getBlockViewByBlockId(e.id).type === docBlockTypeConstants.blockTypeConstants.CELL).map(e => n.getBlockViewByBlockId(e.id));
      if (!deepEqualUtil_1.deepEqual(l, g)) {
        m(l);
      }
      let a = docxTableLayoutUtils.findAgendaCodeTypes(l, n);
      if (!deepEqualUtil_1.deepEqual(a, k)) {
        T(a);
      }
    }, [r, n, v, g, k]);
    let E = reactCoreLibraryReexport.useMemo(() => debounceUtil_1_1.debounce(() => {
      let e = docxTableLayoutUtils.findAgendaCodeTypes(b.current, n);
      if (!deepEqualUtil_1.deepEqual(e, _.current)) {
        T(e);
      }
    }), []);
    reactCoreLibraryReexport.useEffect(() => () => E.cancel(), [E]);
    reactCoreLibraryReexport.useEffect(() => {
      g.forEach(e => {
        e.struct.addChildrenListener(E);
      });
      return () => {
        g.forEach(e => {
          e.struct.removeChildrenListener(E);
        });
      };
    }, [g, E]);
    let S = () => {
      T([]);
    };
    let R = useDebounceCallbackHook_1.useDebounceCallback(() => {
      I();
    }, 0);
    let B = () => {
      let e = r.getSelection().filter(e => n.hasBlockViewByBlockId(e.id) && n.getBlockViewByBlockId(e.id).type === docBlockTypeConstants.blockTypeConstants.CELL).map(e => n.getBlockViewByBlockId(e.id));
      y(true);
      m(e);
    };
    reactCoreLibraryReexport.useEffect(() => {
      let e = new Set(g.map(e => e.id));
      let r = n.viewService.blockViewUpdate$.subscribe(r => {
        if (e.has(r.props.blockId)) {
          R();
        }
      });
      return () => {
        r.unsubscribe();
      };
    }, [n, g, R]);
    reactCoreLibraryReexport.useEffect(() => {
      r.onSelectionChange(I);
      docxEditorEventConstantsAndManager.globalEventEmitter.on(docxEditorConstantsConfig.updateClearStatus, S);
      let e = n.editorAPI.getService(tableHeaderSignalHandler.headerClickSignal);
      let o = [];
      o = [e.subscribe(B)];
      return () => {
        r.offSelectionChange(I);
        docxEditorEventConstantsAndManager.globalEventEmitter.off(docxEditorConstantsConfig.updateClearStatus, S);
        o.forEach(e => e.unsubscribe());
      };
    }, [r, I]);
    return {
      cellBlocks: g,
      textualBlocks: k,
      isFromHeader: v
    };
  }
  require.d(exports, {
    useTableSelection: function () {
      return g;
    }
  });
}