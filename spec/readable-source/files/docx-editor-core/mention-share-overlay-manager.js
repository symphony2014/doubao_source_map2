// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'MentionShareManager'
// - Renamed export 'js' to 'OPEN_MENTION_SHARE'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 249196
         */
module.exports = function (module, exports, require) {
  var domClassLayoutUtils = require("dom-class-layout-utils") /*id: 418505*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  require("doc-token-helper-utils") /*id: 740758*/;
  require("file-type-sync-util") /*id: 725466*/;
  require("synced-block-feature-flags") /*id: 711756*/;
  require("sync-url-block-utils") /*id: 299195*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var uiLayoutPositionEnums = require("ui-layout-position-enums") /*id: 463752*/;
  var docxOverlayPositionWrapper = require("docx-overlay-position-wrapper") /*id: 901027*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = "OPEN_MENTION_SHARE";
  let h = e => {
    let {
      isBlock: n,
      target: i,
      boxContext: r
    } = e;
    if (!n || !i || !r) {
      return null;
    }
    let {
      blockManager: o,
      boundary: l,
      selectionAPI: a,
      closePopover: d
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(docxOverlayPositionWrapper.DocxOverlayWrapper, {
      visible: true,
      blockManager: o,
      reverse: true,
      boundary: l,
      selectionAPI: a,
      target: i,
      direction: uiLayoutPositionEnums.positionAlignTypes.TopCenter,
      onClose: d,
      sticky: [true, false],
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mention-share-container",
        onMouseEnter: e.onMouseEnter,
        onMouseLeave: e.onMouseLeave
      })
    });
  };
  class f extends editorContextFacade.EditorContextFacade {
    getWrapper(e) {
      return n => {
        let [i, l] = reactCoreLibraryReexport.useState();
        let [s, c] = reactCoreLibraryReexport.useState();
        let [f, g] = reactCoreLibraryReexport.useState();
        let p = reactCoreLibraryReexport.useRef(null);
        let m = reactCoreLibraryReexport.useCallback(() => {
          l(null);
          c(null);
          g(null);
        }, []);
        let v = reactCoreLibraryReexport.useCallback(() => {
          if (p.current) {
            window.clearTimeout(p.current);
          }
        }, []);
        let b = reactCoreLibraryReexport.useCallback(() => {
          v();
          m();
        }, [v, m]);
        let _ = reactCoreLibraryReexport.useCallback((e, n) => {
          if (!n || !n.token || !e || !n.componentId || !n.title) {
            return;
          }
          let i = e.hostElement.querySelector(`[data-component-id="${n.componentId}"]`);
          if (i) {
            v();
            p.current = window.setTimeout(m, 4000);
            l(i);
            c(n);
            g(e);
          }
        }, [m]);
        reactCoreLibraryReexport.useEffect(() => {
          let {
            blockManager: e
          } = this;
          e.addListener(d, _);
          return () => {
            e.removeListener(d, _);
          };
        }, []);
        reactCoreLibraryReexport.useEffect(() => {
          docxEditorEventConstantsAndManager.globalEventBus.on(docxEditorEventConstantsAndManager.eventConstants.COMMON.CLOSE_MENTION_SHARE_PANEL, m);
          return () => {
            docxEditorEventConstantsAndManager.globalEventBus.off(docxEditorEventConstantsAndManager.eventConstants.COMMON.CLOSE_MENTION_SHARE_PANEL, m);
          };
        }, [m]);
        let y = reactCoreLibraryReexport.useCallback(e => {
          if (!e.target || !domClassLayoutUtils.domClassLayout.parents(e.target, "mention-share-container")) {
            m();
          }
        }, [m]);
        reactCoreLibraryReexport.useEffect(() => {
          document.addEventListener("mousedown", y);
          return () => {
            document.removeEventListener("mousedown", y);
          };
        }, [y]);
        let {
          blockManager: E,
          boundary: S,
          selectionAPI: I
        } = this;
        return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(e, {
            ...n
          }), reactJsxRuntimeCoreReexport.jsx(h, {
            isBlock: !!f,
            boxContext: s,
            blockManager: E,
            selectionAPI: I,
            target: i,
            boundary: S,
            closePopover: m,
            onMouseEnter: () => v(),
            onMouseLeave: () => {
              v();
              p.current = window.setTimeout(m, 2000);
            },
            handleClickShare: b
          })]
        });
      };
    }
  }
  require.d(exports, {
    MentionShareManager: function () {
      return f;
    },
    OPEN_MENTION_SHARE: function () {
      return d;
    }
  });
}