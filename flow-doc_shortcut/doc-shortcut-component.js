// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocShortcutComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 1988
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var resourceBlockProviderName = require("resource-block-provider-name") /*id: 242875*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var themeAwareLogoComponent = require("theme-aware-logo-component") /*id: 384167*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var reactThemeProviderWrapper = require("react-theme-provider-wrapper") /*id: 805172*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockFlashEnhancementManager = require("block-flash-enhancement-manager") /*id: 710621*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = reactThemeProviderWrapper.withThemeProvider(themeAwareLogoComponent.ThemeAwareLogo);
  function g(e) {
    let {
      blockType: i,
      maxWidth: r,
      isSelected: n = false,
      ErrorIcon: o,
      ErrorText: l
    } = e;
    let s = docxBlockUtils_1.getBlockTypeDisplayName(i);
    let a = {};
    if (r) {
      a.maxWidth = r;
    }
    let h = l;
    if (!h && platformDocUtils.KNd()) {
      h = i === docBlockTypeConstants.blockTypeConstants.CHAT_CARD ? t("LarkCCM_Docx_VersMgmt_GroupCard_Empty") : t("LarkCCM_Docx_VersionMgmt_BlockNotFailed", {}, "", s);
    }
    h = h || t("CreationDoc_DocX_duplicate_block_failed_content", {}, "", s);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      contentEditable: false,
      suppressContentEditableWarning: true,
      className: c("block-error-view", blockFlashEnhancementManager.flashBlockClassName, {
        active: n
      }),
      style: a,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "block-error-view-img",
        children: o ? reactJsxRuntimeCoreReexport.jsx(o, {}) : reactJsxRuntimeCoreReexport.jsx(p, {})
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "block-error-view-text",
        children: h
      })]
    });
  }
  var editorContainerUtils = require("editor-container-utils") /*id: 874690*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var editorUiConstants = require("editor-ui-constants") /*id: 455663*/;
  class k extends editorContextFacade.EditorContextFacade {
    getWrapper(e) {
      return i => {
        let [r, n] = reactCoreLibraryReexport.useState(0);
        let {
          blockManager: o
        } = this;
        let s = i.record.snapshot;
        let {
          isSelected: a
        } = i;
        let c = docBlockTypeConstants.isEmbeddedBlock(s.type);
        reactCoreLibraryReexport.useEffect(() => {
          if (!c) {
            return;
          }
          let e = () => {
            n(editorContainerUtils.getEditorWidth());
          };
          e();
          o.addListener(editorUiConstants.editorResizeClass, e);
          return () => o.removeListener(editorUiConstants.editorResizeClass, e);
        }, [i.blockId, o, c]);
        if (!docxBlockUtils_1.isCloneFailed(s) || i.displaymode === viewTypeConstants.viewTypes.Inline) {
          return reactJsxRuntimeCoreReexport.jsx(e, {
            ...i
          });
        }
        if (i.onBlockReady) {
          i.onBlockReady();
        }
        let d = {};
        if (c) {
          if (r) {
            d.maxWidth = r;
          }
          d.position = "relative";
        }
        return reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "docx-resource-block-container",
          style: d,
          children: [reactJsxRuntimeCoreReexport.jsx(g, {
            isSelected: a,
            blockType: s.type
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            style: {
              display: "none"
            },
            children: reactJsxRuntimeCoreReexport.jsx(e, {
              ...i
            })
          })]
        });
      };
    }
  }
  function y() {
    docxEditorCore.registerViewExt(resourceBlockProviderName.resourceBlockName, k);
  }
  require.d(exports, {
    DocShortcutComponent: function () {
      return y;
    }
  });
}