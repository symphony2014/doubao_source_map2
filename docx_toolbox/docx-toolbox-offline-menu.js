// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'offlineStatusSelectorsUtils'
// - Resolved require(564613) to 'offline-status-selectors-utils'
// - Renamed variable 'a' to 'userEnvironmentUtils'
// - Resolved require(107339) to 'user-environment-utils'
// - Renamed variable 'c' to 'debugLoggerFactory'
// - Resolved require(102743) to 'debug-logger-factory'
// - Renamed variable 'u' to 'docxOfflineFeatureCheck'
// - Resolved require(821237) to 'docx-offline-feature-check'
// - Renamed variable 's' to 'opendocImageViewerUtils'
// - Resolved require(356868) to 'opendoc-image-viewer-utils'
// - Renamed variable 'd' to 'docxToolboxMenuComponent'
// - Resolved require(399229) to 'docx-toolbox-menu-component'
// - Renamed variable 'h' to 'docxOfflineMenuHandler'
// - Resolved require(22232) to 'docx-offline-menu-handler'
// - Renamed variable 'f' to 'docxToolboxMenuItemsOrganizer'
// - Resolved require(114844) to 'docx-toolbox-menu-items-organizer'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'jl' to 'createLogger' (module 102743)
// - Updated imported property 'r' to 'organizeToolboxMenuItems' (module 114844)
// - Updated imported property 'ZP' to 'OpendocImageViewerUtils' (module 356868)
// - Updated imported property '_c' to 'isAnonymousAccess' (module 107339)
// - Updated imported property 's9' to 'isDocxOfflineDisabled' (module 564613)
// - Updated imported property 't' to 'isDocxOfflineFlag' (module 821237)
// - Updated imported property 'Fp' to 'processOfflineMenus' (module 22232)
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// - Updated imported property 'Z' to 'DocxToolboxMenu' (module 399229)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 657270
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var docxOfflineFeatureCheck = require("docx-offline-feature-check") /*id: 821237*/;
  var opendocImageViewerUtils = require("opendoc-image-viewer-utils") /*id: 356868*/;
  var docxToolboxMenuComponent = require("docx-toolbox-menu-component") /*id: 399229*/;
  var docxOfflineMenuHandler = require("docx-offline-menu-handler") /*id: 22232*/;
  var docxToolboxMenuItemsOrganizer = require("docx-toolbox-menu-items-organizer") /*id: 114844*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = debugLoggerFactory.createLogger("toolbox:wrapped");
  let m = {};
  function v(e) {
    let {
      panelType: n,
      blockManager: r,
      selectionAPI: c,
      fold: v,
      comment: b,
      contextBlocks: y,
      selectedBlocks: _,
      contextExtraProps: E = m,
      options: C,
      forceUpdateRef: k,
      firstLevelblockList: w,
      onRefresh: I
    } = e;
    let {
      editable: S,
      revising: T,
      commentable: B,
      copyable: M,
      savePartialTemplateAble: R,
      exportable: O,
      data: A,
      blockType: Z,
      isPageTitle: L,
      isTableBlockMenu: x,
      isInlineInput: N,
      isEquation: P,
      useModelSelection: D
    } = C;
    let H = reactCoreLibraryReexport.useCallback(() => docxToolboxMenuItemsOrganizer.organizeToolboxMenuItems(n, {
      blockManager: r,
      selectionAPI: c,
      fold: v,
      comment: b,
      blocks: y,
      firstLevelblockList: w,
      extraProps: E,
      onRefresh: I
    }, {
      editable: S,
      revising: T,
      commentable: B && opendocImageViewerUtils.OpendocImageViewerUtils.checkShouldRegisComment(),
      copyable: M,
      savePartialTemplateAble: R,
      exportable: O,
      isAnonymous: userEnvironmentUtils.isAnonymousAccess(),
      data: A,
      blockType: Z,
      isPageTitle: L,
      isTableBlockMenu: x,
      isInlineInput: N,
      isEquation: P,
      useModelSelection: D,
      editPermission: r.config.get("editPermission")
    }), [n, r, c, v, b, w, y, _, E, S, T, B && opendocImageViewerUtils.OpendocImageViewerUtils.checkShouldRegisComment(), M, O, R, A, Z, L, x, N, P, D]);
    let [K, U] = reactCoreLibraryReexport.useState([]);
    let [j, F] = reactCoreLibraryReexport.useState({});
    let z = reactCoreLibraryReexport.useCallback(async () => {
      let [e, n] = H();
      if (offlineStatusSelectorsUtils.isDocxOfflineDisabled() && docxOfflineFeatureCheck.isDocxOfflineFlag) {
        await docxOfflineMenuHandler.processOfflineMenus(e, y);
      }
      U(e);
      F(n);
    }, [H]);
    reactCoreLibraryReexport.useEffect(() => {
      z();
    }, [z]);
    reactCoreLibraryReexport.useEffect(() => {
      if (k) {
        k.current = z;
      }
    }, [k, z]);
    reactCoreLibraryReexport.useEffect(() => () => {
      if (k) {
        k.current = emptyExportFunction.emptyFunction;
      }
    }, []);
    g("render, %s menu items", K.length);
    return reactJsxRuntimeCoreReexport.jsx(docxToolboxMenuComponent.DocxToolboxMenu, {
      ...e,
      items: K,
      menuProps: {
        ...j,
        ...e.menuProps
      }
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return v;
    }
  });
}