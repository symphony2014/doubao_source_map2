// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'WY' to 'makeChatRequest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 464659
         */
module.exports = function (module, exports, require) {
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var commonParamsBuilder = require("common-params-builder") /*id: 665781*/;
  var chatJsConvConfig = require("chat-js-conv-config") /*id: 146880*/;
  var configuredAxiosClientWrapper = require("configured-axios-client-wrapper") /*id: 881790*/;
  let l = {};
  let s = function (e) {
    let {
      params: t,
      headers: n,
      ...s
    } = e;
    let {
      ...u
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let c = throttledDeepCloneUtil.throttledDeepClone(u, {
      overrideConfig: l
    });
    let {
      ignoreCommonParams: d
    } = c;
    return configuredAxiosClientWrapper.makeRequest({
      params: {
        ...(d ? {} : commonParamsBuilder.getCommonParams === null || commonParamsBuilder.getCommonParams === undefined ? undefined : commonParamsBuilder.getCommonParams()),
        ...u.overrideParams,
        ...t
      },
      headers: {
        ...(chatJsConvConfig.getJsConvConfig === null || chatJsConvConfig.getJsConvConfig === undefined ? undefined : chatJsConvConfig.getJsConvConfig()),
        ...n,
        ...(c == null ? undefined : c.overrideHeaders)
      },
      ...s
    }, c);
  };
  require.d(exports, {
    makeChatRequest: function () {
      return s;
    }
  });
}