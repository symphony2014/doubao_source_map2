// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactReduxCore'
// - Resolved require(509563) to 'react-redux-core'
// - Renamed variable 't' to 'flowPermissionSettingSelectors'
// - Resolved require(631126) to 'flow-permission-setting-selectors'
// - Renamed variable 'n' to 'platformDocUtils'
// - Resolved require(726907) to 'platform-doc-utils'
// - Renamed variable 'o' to 'suiteErrorHandlerComponent'
// - Resolved require(380284) to 'suite-error-handler-component'
// - Renamed variable 'u' to 'copilotShareModes'
// - Resolved require(493662) to 'copilot-share-modes'
// - Updated imported property 'o' to 'CopilotShareModes' (module 493662)
// - Updated imported property 'w' to 'flowSelectorsHub' (module 631126)
// - Updated imported property 'Z' to 'SuiteErrorHandler' (module 380284)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-suite.16d17e39.js
         * chunkId: 68280
         * moduleId: 306572
         */
module.exports = function (module, exports, require) {
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var flowPermissionSettingSelectors = require("flow-permission-setting-selectors") /*id: 631126*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var suiteErrorHandlerComponent = require("suite-error-handler-component") /*id: 380284*/;
  var l = reactReduxCore.connect(e => ({
    isPermissionForbidden: flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectHasInitPermission(e) && !flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectIsViewable(e),
    isPermissionInit: flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectHasInitPermission(e)
  }), e => ({
    setSuiteCilentVarsError: (i, s) => {
      e(platformDocUtils.Nwg.suite.setSuiteCilentVarsError({
        token: i,
        error: s
      }));
    },
    deleteSuiteCilentVarsError: i => {
      e(platformDocUtils.Nwg.suite.deleteSuiteCilentVarsError({
        token: i
      }));
    }
  }))(suiteErrorHandlerComponent.SuiteErrorHandler);
  var copilotShareModes = require("copilot-share-modes") /*id: 493662*/;
  var _ = l;
  require.r(exports);
  require.d(exports, {
    FlowSuiteType: function () {
      return copilotShareModes.CopilotShareModes;
    },
    default: function () {
      return _;
    }
  });
}