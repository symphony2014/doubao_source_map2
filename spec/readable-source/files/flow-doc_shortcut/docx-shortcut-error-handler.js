// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'ERROR_EVENT_TYPE'
// - Renamed export 'a' to 'ErrorContextWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 396634
         */
module.exports = function (module, exports, require) {
  var themeAwareLogoComponent = require("theme-aware-logo-component") /*id: 384167*/;
  var themeSwitchDocIcon = require("theme-switch-doc-icon") /*id: 240268*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxAnchorImageLoaderLogger = require("docx-anchor-image-loader-logger") /*id: 48587*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var reactThemeProviderWrapper = require("react-theme-provider-wrapper") /*id: 805172*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  require("flow-doc-shortcut-stub") /*id: 108425*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = reactThemeProviderWrapper.withThemeProvider(themeAwareLogoComponent.ThemeAwareLogo);
  let g = reactThemeProviderWrapper.withThemeProvider(themeSwitchDocIcon.DocumentThemeIcon, {
    size: 80
  });
  function m(e) {
    let i = t("CreationDoc_export_placeholder_FailedToLoad", {}, "", docxBlockUtils_1.getBlockTypeDisplayName(e.blockType));
    if (docBlockTypeConstants.blockTypeConstants.IMAGE === e.blockType) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "shortcut-docx-block-err_image",
        children: [reactJsxRuntimeCoreReexport.jsx(g, {
          style: {
            maxHeight: "80px",
            maxWidth: "80px"
          }
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "shortcut-docx-block-err_image_text",
          children: i
        })]
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "shortcut-block-error-container",
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "shortcut-docx-block-err",
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "shortcut-err-icon-wrap",
            children: [reactJsxRuntimeCoreReexport.jsx(f, {
              style: {
                maxHeight: "100%",
                maxWidth: "125px"
              }
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: "break-line"
            })]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "retry-tips",
            children: reactJsxRuntimeCoreReexport.jsx("span", {
              children: i
            })
          })]
        })
      });
    }
  }
  let v = "SHORTCUT_BLOCK_ERROR";
  class b extends editorContextFacade.EditorContextFacade {
    getWrapper(e) {
      return i => {
        let [r, n] = reactCoreLibraryReexport.useState(false);
        let {
          struct: o
        } = i;
        let a = e => {
          if (e === o.recordId) {
            docxAnchorImageLoaderLogger.logBlockRenderTimeout(e, o.type);
            n(true);
          }
        };
        reactCoreLibraryReexport.useEffect(() => {
          docxEditorEventConstantsAndManager.globalEventEmitter.on(v, a);
          return () => {
            docxEditorEventConstantsAndManager.globalEventEmitter.off(v, a);
          };
        });
        if (r) {
          return reactJsxRuntimeCoreReexport.jsx(m, {
            blockType: i.record.snapshot.type
          });
        } else {
          return reactJsxRuntimeCoreReexport.jsx(e, {
            ...i
          });
        }
      };
    }
  }
  require.d(exports, {
    ERROR_EVENT_TYPE: function () {
      return v;
    },
    ErrorContextWrapper: function () {
      return b;
    }
  });
}