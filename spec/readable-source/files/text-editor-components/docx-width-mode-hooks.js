// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'useDocxLayoutConfig'
// - Renamed export 'p' to 'useDocxWidthMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 978094
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var reactReduxExports = require("react-redux-exports") /*id: 426907*/;
  var docxWidthModeConstants = require("docx-width-mode-constants") /*id: 194078*/;
  var docxWidthModeUtils = require("docx-width-mode-utils") /*id: 337143*/;
  var docxCommentUiSelectors = require("docx-comment-ui-selectors") /*id: 133504*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docxPanelUtils = require("docx-panel-utils") /*id: 678171*/;
  function p(e) {
    let [n, o] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (!e.current) {
        return;
      }
      let n = e.current;
      let i = new ResizeObserver(e => {
        let [n] = e;
        o(n.contentRect.width);
      });
      i.observe(n);
      o(n.getBoundingClientRect().width);
      return () => i.disconnect();
    }, [e]);
    return n;
  }
  function _(e, n) {
    return Math.max(e ? docxEditorConstantsConfig.maxTooltipWidth : 0, n ? docxEditorConstantsConfig.minPanelWidth : 0);
  }
  function h(e) {
    let n = p(e);
    let o = reactReduxExports.useSelector(docxWidthModeUtils.createDocxGetter(docxWidthModeConstants.attrNames.CATALOGUE_STATUS));
    let i = _(reactReduxExports.useSelector(docxCommentUiSelectors.isCommentPanelShown), reactReduxExports.useSelector(docxCommentUiSelectors.isHelpPanelShown));
    let r = o === docxWidthModeConstants.statusModes.OPEN;
    let u = functionInvoker.invoke(() => i + !!r * 236);
    return functionInvoker.invoke(() => ({
      disableWidthMode: n < 952 + u,
      disableFullWidth: n < 1152 + u
    }));
  }
  function v(e, n, o) {
    let l = p(e);
    let [s, c] = reactCoreLibraryReexport.useState({
      commentPanelShown: false,
      helpSiderbarShown: false,
      catalogueOpen: false
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = [];
      if (!n || !o) {
        return emptyExportFunction.emptyFunction;
      }
      let i = () => {
        let o = docxPanelUtils.docPanelUtils.subscribePanelExpandStateChanged(n, e => {
          c(e);
        });
        e.push(o);
      };
      o.eventEmitter.on("init", i);
      e.push(() => {
        o.eventEmitter.off("init", i);
      });
      return () => {
        e.forEach(e => {
          try {
            e();
          } catch (e) {}
        });
      };
    }, [n, o]);
    let d = _(s.commentPanelShown, s.helpSiderbarShown);
    let u = s.catalogueOpen;
    let h = reactCoreLibraryReexport.useMemo(() => d + !!u * 236, [d, u]);
    return functionInvoker.invoke(() => ({
      disableWidthMode: l < 952 + h,
      disableFullWidth: l < 1152 + h
    }));
  }
  require.d(exports, {
    useDocxLayoutConfig: function () {
      return v;
    },
    useDocxWidthMode: function () {
      return h;
    }
  });
}