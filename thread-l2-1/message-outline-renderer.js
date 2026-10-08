// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'MessageOutlineRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 95837
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var errorOutlineComponent = require("error-outline-component") /*id: 345768*/;
  var writingOutlineComponent = require("writing-outline-component") /*id: 948439*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var asyncMessageThinkingNode = require("async-message-thinking-node") /*id: 889095*/;
  var asyncMessageNodeUtils = require("async-message-node-utils") /*id: 189511*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = reactCoreLibraryReexport.memo(function (e) {
    let {
      message: f
    } = e;
    let h = i18nTranslationUtils.useTranslationWithFallback();
    let {
      text: g = "",
      outline_id: _
    } = asyncMessageNodeUtils.getOutlineBlock(f);
    let b = chatMessageStatusCheck.isMessageFinished(f);
    let k = messageContentTypeAndStatusChecker.vlk(f);
    let y = !!(f == null ? undefined : f.content_obj?.outline);
    if ((f == null ? undefined : f.ext?.samantha_code) || b && !_ && !y && !k) {
      return reactJsxRuntimeCoreReexport.jsx(errorOutlineComponent.ErrorOutline, {
        tip: (f == null ? undefined : f.brief) ?? (f == null ? undefined : f.ext?.brief),
        actionBarConfigStr: f == null ? undefined : f.ext?.action_bar_config,
        i18nConfig: {
          skill_writing_outline_failure_retry_button_titile: h("skill_writing_outline_failure_retry_button_titile")
        }
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(asyncMessageThinkingNode.ThinkingMessageNode, {
          isShare: true,
          message: f
        }), reactJsxRuntimeCoreReexport.jsx(writingOutlineComponent.WritingOutlineComponent, {
          onUpdate: emptyExportFunction.emptyFunction,
          markdown: g,
          editable: false,
          simplify: true
        })]
      });
    }
  });
  require.d(exports, {
    MessageOutlineRenderer: function () {
      return m;
    }
  });
}