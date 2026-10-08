// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Resolved require.e(26176) to 'api-client-services'
// - Resolved require.e(79175) to 'samantha-message-utils'
// - Resolved require.e(99709) to 'ai-space-doccanvasopenurl-url-parse-plugin'
// - Resolved require.bind(286111) to 'open-doc-canvas-url-plugin'
// - Renamed variable 'i' to 'chatUrlActionPlugin'
// - Resolved require(742349) to 'chat-url-action-plugin'
// - Renamed variable 'o' to 'minuteMeetingPlugin'
// - Resolved require(901750) to 'minute-meeting-plugin'
// - Resolved require.e(63210) to 'read-pdf-latest-reading-url-parse-plugin'
// - Resolved require.bind(728790) to 'read-pdf-latest-reading-url-plugin'
// - Resolved require.e(86189) to 'ui-animation-components'
// - Resolved require.e(34965) to 'react-ui-components-modals'
// - Resolved require.e(26176) to 'api-client-services'
// - Resolved require.e(58943) to 'ai-ppt-slide-editor'
// - Resolved require.e(79068) to 'ppt-url-action-plugin'
// - Resolved require.bind(710338) to 'ppt-url-action-handler'
// - Resolved require.e(11775) to 'zod-validation-library'
// - Resolved require.e(26176) to 'api-client-services'
// - Resolved require.e(70942) to 'ai-space-excelairead-url-parse-plugin'
// - Resolved require.bind(844684) to 'ai-space-excelairead-url-code-artifacts-share-handler'
// - Resolved require.e(11775) to 'zod-validation-library'
// - Resolved require.e(26176) to 'api-client-services'
// - Resolved require.e(11567) to 'ai-space-excelairead-url-parse-pre-plugin'
// - Resolved require.bind(88418) to 'validate-conversation-existence'
// - Resolved require.e(11775) to 'zod-validation-library'
// - Resolved require.e(30489) to 'code-artifacts-url-action-plugin'
// - Resolved require.bind(762830) to 'code-artifacts-url-action-plugin'
// - Renamed variable 'u' to 'pptAutoCanvasViewActionHandler'
// - Resolved require(836436) to 'ppt-auto-canvas-view-action-handler'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'C' to 'ChatUrlActionPlugin' (module 742349)
// - Updated imported property 'i' to 'minuteMeetingPlugin' (module 901750)
// - Updated imported property 'd' to 'pptAutoCanvasViewAction' (module 836436)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 748251
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  let a = {
    matcher: e => aiActionConstants.aiActionConstants.AISpace_DocCanvasOpen === e,
    handler: e => Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("ai-space-doccanvasopenurl-url-parse-plugin") /*id: 99709*/]).then(require.bind(require, "open-doc-canvas-url-plugin") /*id: 286111*/).then(t => {
      t.default(e);
    })
  };
  var chatUrlActionPlugin = require("chat-url-action-plugin") /*id: 742349*/;
  var minuteMeetingPlugin = require("minute-meeting-plugin") /*id: 901750*/;
  let s = {
    matcher: e => aiActionConstants.aiActionConstants.ReadPDF_LatestReading === e,
    handler: e => require.e("read-pdf-latest-reading-url-parse-plugin") /*id: 63210*/.then(require.bind(require, "read-pdf-latest-reading-url-plugin") /*id: 728790*/).then(t => {
      t.default(e);
    })
  };
  let l = {
    matcher: e => e === aiActionConstants.aiActionConstants.PptCanvasOpen,
    handler: e => Promise.all([require.e("ui-animation-components") /*id: 86189*/, require.e("react-ui-components-modals") /*id: 34965*/, require.e("api-client-services") /*id: 26176*/, require.e("ai-ppt-slide-editor") /*id: 58943*/, require.e("ppt-url-action-plugin") /*id: 79068*/]).then(require.bind(require, "ppt-url-action-handler") /*id: 710338*/).then(t => {
      t.default(e);
    })
  };
  let c = {
    matcher: e => e === aiActionConstants.aiActionConstants.Code_Artifacts_Share,
    handler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("api-client-services") /*id: 26176*/, require.e("ai-space-excelairead-url-parse-plugin") /*id: 70942*/]).then(require.bind(require, "ai-space-excelairead-url-code-artifacts-share-handler") /*id: 844684*/).then(t => {
      t.default(e);
    }),
    prehandler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("api-client-services") /*id: 26176*/, require.e("ai-space-excelairead-url-parse-pre-plugin") /*id: 11567*/]).then(require.bind(require, "validate-conversation-existence") /*id: 88418*/).then(t => t.default(e))
  };
  let d = {
    matcher: e => e === aiActionConstants.aiActionConstants.Code_Artifacts,
    handler: e => Promise.all([require.e("zod-validation-library") /*id: 11775*/, require.e("code-artifacts-url-action-plugin") /*id: 30489*/]).then(require.bind(require, "code-artifacts-url-action-plugin") /*id: 762830*/).then(t => {
      t.default(e);
    })
  };
  var pptAutoCanvasViewActionHandler = require("ppt-auto-canvas-view-action-handler") /*id: 836436*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = () => {
    chatUrlActionPlugin.ChatUrlActionPlugin({
      plugins: [a, minuteMeetingPlugin.minuteMeetingPlugin, c, s, d, l, pptAutoCanvasViewActionHandler.pptAutoCanvasViewAction]
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {});
  };
  require.r(exports);
  require.d(exports, {
    URLActionConditionComponent: function () {
      return m;
    }
  });
}