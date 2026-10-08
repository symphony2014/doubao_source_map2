// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'DocArtifactCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 95317.6173849c.js
         * chunkId: 95317
         * moduleId: 478679
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatArtifactUtils = require("chat-artifact-utils") /*id: 83242*/;
  var artifactResourceLayout = require("artifact-resource-layout") /*id: 774071*/;
  var referenceQuoteManagerHook = require("reference-quote-manager-hook") /*id: 335918*/;
  var writeDocExporterComponent = require("write-doc-exporter-component") /*id: 110398*/;
  var samanthaPagesApiService = require("samantha-pages-api-service") /*id: 122025*/;
  var emptyObjectExport = require("empty-object-export") /*id: 475971*/;
  var base64PngImage = require("base64-png-image") /*id: 173215*/;
  var pngImageBase64 = require("png-image-base64") /*id: 961275*/;
  var docCanvasCardFallbackLight = require("doc-canvas-card-fallback-light") /*id: 470756*/;
  var docCanvasFallbackDarkImg = require("doc-canvas-fallback-dark-img") /*id: 661114*/;
  var threadFileCard = require("thread-file-card") /*id: 94978*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var storageFeatureGateParser = require("storage-feature-gate-parser") /*id: 696334*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var rtlIconComponent_1_2 = require("rtl-icon-component_1_2") /*id: 734871*/;
  var I = {
    card: "card-QqKfCx"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let E = reactCoreLibraryReexport.forwardRef((e, t) => {
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let E = reactCoreLibraryReexport.useRef(null);
    let {
      width: D
    } = resizeObserverHooks.useResizeObserverEx({
      ref: E
    });
    let F = !isUndefinedCheck.isUndefined(D) && D < 400;
    let {
      classname: $,
      artifactItem: P,
      cardTitle: U,
      isError: W,
      conversationId: N,
      overrideResourceType: Z,
      overrideResourceId: T,
      isFinished: Q,
      shareMode: j,
      showCardImage: O = false,
      message: B,
      ...H
    } = e;
    let {
      status: V,
      disabled: z
    } = H;
    let J = async e => {
      let {
        docId: t
      } = e;
      if (j || Z === artifactResourceLayout.layoutConstants.MobileDoc) {
        return await samanthaPagesApiService.fetchMobileDocument({
          resourceId: t
        });
      } else {
        return await chatArtifactUtils.handleDocReference({
          pageId: P == null ? undefined : P.resource_id,
          pageVersion: P == null ? undefined : P.resource_version,
          conversationId: N,
          artifact: P
        }).then(() => samanthaPagesApiService.fetchDocumentWithStatus({
          docId: t
        }));
      }
    };
    let G = chatFgStoreHooks.getSourceKeySync(storageFeatureGateParser.featureGateKeys.forceDarkMode, {
      source: chatStorageKeys.chatStorageKeys.debugStorage
    }) ? "dark" : "light";
    let X = functionInvoker.invoke(() => G === "light" ? Q ? docCanvasCardFallbackLight : base64PngImage : Q ? docCanvasFallbackDarkImg : pngImageBase64);
    let {
      referenceQuoteManage: K
    } = referenceQuoteManagerHook.useReferenceQuoteManage({
      resourceId: P == null ? undefined : P.resource_id,
      resourceVersion: P == null ? undefined : P.resource_version
    });
    let q = j || Z === artifactResourceLayout.layoutConstants.MobileDoc ? T : (P == null ? undefined : P.resource_id) || (P == null ? undefined : P.artifact_key);
    let [Y, ee] = reactCoreLibraryReexport.useState(false);
    let et = skillPinModalCallback.useSkillPinCallback(e => {
      if (isFunctionUtil_1.isFunction(t)) {
        t(e);
      } else if (t) {
        t.current = e;
      }
      E.current = e;
    });
    let er = functionInvoker.invoke(() => {
      let e = [];
      if (!j && !W) {
        e.push({
          type: "custom",
          element: reactJsxRuntimeCoreReexport.jsx(writeDocExporterComponent.WriteDocExporter, {
            docId: q ?? "",
            visible: Y,
            onVisibleChange: ee,
            fileName: U,
            onFetchDoc: J,
            referenceQuoteManager: K,
            message: B,
            children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
              className: a(I["download-button"], !Q && "cursor-not-allowed"),
              "data-testid": "contented_doc_card_download_button",
              size: "small",
              color: "deep-grey",
              tooltip: l("doc_editor_toolbar_download"),
              disabled: !Q,
              newIcon: true,
              onClick: e => {
                e.stopPropagation();
                ee(true);
              },
              children: reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {})
            })
          })
        });
      }
      return e;
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: et,
      className: a(I.card, $, "flow-product-card"),
      children: reactJsxRuntimeCoreReexport.jsx(threadFileCard.ThreadFileCard, {
        ...H,
        onClick: emptyObjectExport.emptyObject.onClickCard ?? H.onClick,
        "data-testid": "doc_card",
        "data-status": V,
        "data-disabled": z,
        cardTitle: U,
        showCardImage: O && !F,
        fallBackCardImage: X,
        cardIcon: reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_1_2.RtlIcon, {
          className: "text-s-color-brand-primary-default"
        }),
        controlBarActions: er,
        onHoverDisactive: () => ee(false)
      })
    });
  });
  require.d(exports, {
    DocArtifactCard: function () {
      return E;
    }
  });
}