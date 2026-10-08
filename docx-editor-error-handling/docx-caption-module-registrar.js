// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerCaptionModule'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 141732
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var editorModuleConstants = require("editor-module-constants") /*id: 21060*/;
  var contentStateManager = require("content-state-manager") /*id: 519638*/;
  var activeEditorRange = require("active-editor-range") /*id: 466344*/;
  var editorZoneState = require("editor-zone-state") /*id: 962363*/;
  var docxEditorDependenciesFactory = require("docx-editor-dependencies-factory") /*id: 534133*/;
  var docxEditorKitProviders = require("docx-editor-kit-providers") /*id: 519830*/;
  var autoCapitalizationPlugin = require("auto-capitalization-plugin") /*id: 782204*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var mediaEnvironmentStubs = require("media-environment-stubs") /*id: 862836*/;
  var retryableModuleLoaderFactory = require("retryable-module-loader-factory") /*id: 99395*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var docxEditorBlockRenderer = require("docx-editor-block-renderer") /*id: 211843*/;
  var editorRootComponent = require("editor-root-component") /*id: 614300*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var S = classnamesUtils;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var captionEditorConstants = require("caption-editor-constants") /*id: 287236*/;
  var defaultTextDocumentTemplate = require("default-text-document-template") /*id: 53079*/;
  var attributedTextToDeltaConverter = require("attributed-text-to-delta-converter") /*id: 917517*/;
  var docxCaptionTextCheck_1 = require("docx-caption-text-check_1") /*id: 289941*/;
  require("empty-module-wrapper") /*id: 381686*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var M = e => {
    let {
      caption: i,
      align: r = docBlockTypeConstants.alignmentConstants.CENTER,
      isSSR: n = false,
      block: o,
      editorClass: l,
      defaultVisible: s = false
    } = e;
    let a = docxEditorBlockRenderer.useInjector(docxEditorKitProviders.textualDepProvider);
    let c = a.getPlugins(`${docxEditorKitProviders.textualDepTypes.CAPTION}:${o.type}`);
    let d = a.getModules(docxEditorKitProviders.textualDepTypes.CAPTION);
    let [h, g] = reactCoreLibraryReexport.useState(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (i && !(h == null ? undefined : h.isFocus())) {
        let e = attributedTextToDeltaConverter.convertAttributedTextToDelta(docxCaptionTextCheck_1.isCaptionTextEmpty(i) ? defaultTextDocumentTemplate.createDefaultTextDoc() : i);
        if (h != null) {
          h.setContent(e);
        }
      }
    }, [i]);
    if (docxCaptionTextCheck_1.isCaptionTextEmpty(i) && !s) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: S(captionEditorConstants.captionEditorArea, {
          "caption-ssr": n
        }),
        onClick: e => {
          e.stopPropagation();
        },
        children: reactJsxRuntimeCoreReexport.jsx(editorRootComponent.EditorComponent, {
          editable: false,
          className: S(l, captionEditorConstants.captionEditorClass),
          copyable: true,
          initData: attributedTextToDeltaConverter.convertAttributedTextToDelta(i),
          businessKey: "caption",
          debounceFlush: 0,
          modules: d,
          style: {
            textAlign: r
          },
          plugins: c,
          isSSR: n,
          onInit: g
        })
      });
    }
  };
  let T = retryableModuleLoaderFactory.getRetryableModuleLoader({
    loader: () => require.e("docx_caption_component") /*id: 39088*/.then(require.bind(require, "docx-caption-editor") /*id: 381481*/),
    loading: () => null,
    render(e, i) {
      let r = e.default;
      return reactJsxRuntimeCoreReexport.jsx(r, {
        ...i,
        ref: i.refCallback
      });
    }
  }, {
    moduleName: "docx_caption_component",
    hasOfflineRetry: true
  });
  class w extends editorContextFacade.EditorContextFacade {
    getNamedSlot() {
      return e => {
        let {
          ...i
        } = e;
        i.editable = i.editable && !mediaEnvironmentStubs.alwaysFalse();
        let [r, n] = reactCoreLibraryReexport.useState(false);
        let o = reactCoreLibraryReexport.useCallback(() => {
          n(true);
        }, []);
        let {
          caption: l,
          align: s,
          block: a
        } = i;
        let c = T.getModuleInstance();
        return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [!r && reactJsxRuntimeCoreReexport.jsx(M, {
            caption: l,
            align: s,
            block: a
          }), reactJsxRuntimeCoreReexport.jsx(c, {
            ...i,
            onComponentMount: o,
            visible: r
          })]
        });
      };
    }
  }
  var docxCaptionSlotDefinition = require("docx-caption-slot-definition") /*id: 591389*/;
  function P(e, i) {
    docxEditorCore.registerViewExt(docxCaptionSlotDefinition.getCaptionProvider, w);
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.get(docxEditorKitProviders.textualDepProvider);
      e.setModules(docxEditorKitProviders.textualDepTypes.CAPTION, {
        [editorModuleConstants.editorModuleConsts.ContentState]: contentStateManager.ContentStateManager,
        [editorModuleConstants.editorModuleConsts.Range]: activeEditorRange.ActiveEditorRange,
        [editorModuleConstants.editorModuleConsts.ZoneState]: editorZoneState.EditorZoneState
      });
      let r = autoCapitalizationPlugin.getTranslateStatus(i.config);
      let n = docxEditorDependenciesFactory.createDocxEditorDependencies();
      r = r.map(e => {
        let [i, r] = e;
        return [i, {
          ...(r || {}),
          ...n
        }];
      });
      e.setPlugins(docxEditorKitProviders.textualDepTypes.CAPTION, r);
    });
  }
  require.d(exports, {
    registerCaptionModule: function () {
      return P;
    }
  });
}