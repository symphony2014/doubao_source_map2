// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'ThreadMessageFileCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 284713
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var errorOutlineComponent = require("error-outline-component") /*id: 345768*/;
  var messageContentExtractors = require("message-content-extractors") /*id: 356469*/;
  var canvasDocModalWrapper = require("canvas-doc-modal-wrapper") /*id: 867596*/;
  var threadFileStatusEnum = require("thread-file-status-enum") /*id: 669935*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useBooleanHook = require("use-boolean-hook") /*id: 240989*/;
  var flowDocArtifactCard = require("flow-doc-artifact-card") /*id: 478679*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = reactCoreLibraryReexport.memo(function (e) {
    let {
      message: f
    } = e;
    let h = i18nTranslationUtils.useTranslationWithFallback();
    let [g, {
      setFalse: _,
      setTrue: b
    }] = useBooleanHook.useBoolean(false);
    let {
      docId: k,
      title: y,
      text: x
    } = messageContentExtractors.extractMessageSearchResults(f);
    let w = !!(f == null ? undefined : f.ext?.samantha_code);
    if (f == null ? undefined : f.ext?.samantha_code) {
      return reactJsxRuntimeCoreReexport.jsx(errorOutlineComponent.ErrorOutline, {
        tip: f.ext.brief,
        actionBarConfigStr: f == null ? undefined : f.ext?.action_bar_config,
        i18nConfig: {
          skill_writing_outline_failure_retry_button_titile: h("skill_writing_outline_failure_retry_button_titile")
        }
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(flowDocArtifactCard.DocArtifactCard, {
          shareMode: true,
          showCardImage: true,
          cardTitle: w ? (f == null ? undefined : f.ext?.brief) ?? "" : y,
          checked: false,
          disabled: false,
          status: threadFileStatusEnum.ThreadFileStatus.Finished,
          latestCardVersion: false,
          onClick: b,
          conversationId: (f == null ? undefined : f.conversation_id) ?? "",
          artifactItem: {},
          isFinished: true
        }), k && reactJsxRuntimeCoreReexport.jsx(canvasDocModalWrapper.CanvasDocModalWrapper, {
          visible: g,
          docId: k,
          title: y,
          showTitle: true,
          onClose: _,
          onFetchDoc: () => ({
            title: y,
            value: x,
            version: undefined,
            updateTime: undefined
          })
        })]
      });
    }
  });
  require.d(exports, {
    ThreadMessageFileCard: function () {
      return p;
    }
  });
}