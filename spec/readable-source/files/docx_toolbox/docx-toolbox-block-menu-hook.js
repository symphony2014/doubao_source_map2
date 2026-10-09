// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useBlockMenu'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 485220
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docBlockMenuLayoutConstants = require("doc-block-menu-layout-constants") /*id: 166815*/;
  var docxToolboxBlockHelpers = require("docx-toolbox-block-helpers") /*id: 675608*/;
  let s = debugLoggerFactory.createLogger("toolbox:block-menu");
  function d(e, n) {
    let {
      blockManager: r,
      isDelayEnter: l,
      delayTime: d = 500,
      selectionAPI: h,
      eventEmitter: f,
      hoverBlockManager: p
    } = n;
    let [g, m] = reactCoreLibraryReexport.useState(false);
    let [v, b] = reactCoreLibraryReexport.useState(true);
    let y = reactCoreLibraryReexport.useRef(new DOMRect(0, 0, 0, 0));
    let _ = reactCoreLibraryReexport.useRef(null);
    let E = reactCoreLibraryReexport.useRef({
      x: -1,
      y: -1
    });
    let C = reactCoreLibraryReexport.useCallback(n => {
      s("updateVisible: %s", n);
      if (n) {
        f.emit(docxEditorConstantsConfig.openBlockMenu);
      } else if (_.current) {
        window.clearTimeout(_.current);
        _.current = null;
      }
      if (e) {
        e.setHovered(n);
      }
      m(e => {
        if (e !== n && !n) {
          docxEditorEventConstantsAndManager.globalEditorState.hasEnteredPanel = false;
          f.emit(docxEditorConstantsConfig.hideBlockMenu);
          E.current = {
            x: -1,
            y: -1
          };
        }
        return n;
      });
    }, [e, f]);
    reactCoreLibraryReexport.useEffect(() => () => {
      docxEditorEventConstantsAndManager.globalEditorState.hasEnteredPanel = false;
      f.emit(docxEditorConstantsConfig.hideBlockMenu);
      if (r.editorAPI.isDestroyed()) {
        docxEditorEventConstantsAndManager.globalEditorState.active = true;
      }
    }, [f, r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (p != null) {
        p.update(e);
      }
      C(false);
    }, [C, e, p]);
    let k = reactCoreLibraryReexport.useCallback(() => {
      s("handleMouseEnter, isDelayEnter=%s", l);
      r.dispatch("MENU_TRIGGER_ENTER", e);
      let n = () => {
        if (!h.isFocus()) {
          h.restoreFocus();
        }
        b(false);
        f.emit(docxEditorConstantsConfig.hideBlockPanel, {
          blockId: e == null ? undefined : e.id
        });
        C(true);
        docxEditorEventConstantsAndManager.globalEditorState.hasEnteredPanel = true;
      };
      if (l) {
        if (_.current) {
          clearTimeout(_.current);
          _.current = null;
        }
        let e = setTimeout(n, d);
        _.current = e;
        return;
      }
      n();
    }, [r, e, l, h, C, d, f]);
    let w = reactCoreLibraryReexport.useCallback(() => {
      if (l) {
        clearTimeout(_.current);
        _.current = null;
      }
      r.dispatch("MENU_TRIGGER_LEAVE");
      b(true);
      let e = document.querySelector(docBlockMenuLayoutConstants.overlayContainerSelector);
      if (e) {
        y.current = e.getBoundingClientRect();
      } else {
        y.current = new DOMRect(0, 0, 0, 0);
      }
      docxEditorEventConstantsAndManager.globalEditorState.hasEnteredPanel = false;
    }, [r, l]);
    let I = reactCoreLibraryReexport.useCallback(e => {
      var n;
      if (!g || !v || docxEditorEventConstantsAndManager.globalEditorState.hasEnteredPanel || ((n = e.target) === null || n === undefined ? undefined : n.closest(".overlay-wrapper"))) {
        return;
      }
      let r = y.current;
      if (e.x <= r.right && e.x >= r.left && e.y <= r.bottom && e.y >= r.top) {
        return;
      }
      let o = E.current;
      E.current = {
        x: e.x,
        y: e.y
      };
      if (o.x === -1 && o.y === -1) {
        return;
      }
      let i = e.x - o.x;
      let l = e.y - o.y;
      if (!docxToolboxBlockHelpers.isWithinBounds({
        orgX: o.x,
        orgY: o.y,
        dirX: i,
        dirY: l
      }, {
        minX: r.left,
        minY: r.top,
        maxX: r.right,
        maxY: r.bottom
      })) {
        C(false);
      }
    }, [v, C, g]);
    reactCoreLibraryReexport.useEffect(() => {
      docxEditorEventConstantsAndManager.nativeEventDispatcher.on("mousemove", document.documentElement, I, {
        onlyHandleSelfContainer: false
      });
      return () => {
        docxEditorEventConstantsAndManager.nativeEventDispatcher.off("mousemove", document.documentElement, I);
      };
    }, [I]);
    return [g, C, k, w];
  }
  require.d(exports, {
    useBlockMenu: function () {
      return d;
    }
  });
}