// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'streamCallBotInterceptor'
// - Resolved require(256917) to 'stream-call-bot-interceptor'
// - Renamed variable 'r' to 'samanthaChatProtocol'
// - Resolved require(573966) to 'samantha-chat-protocol'
// - Renamed variable 'o' to 'apiAuthInterceptors'
// - Resolved require(813411) to 'api-auth-interceptors'
// - Updated imported property 'c' to 'checkLogoutResponse' (module 813411)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 605365
         */
module.exports = function (module, exports, require) {
  var streamCallBotInterceptor = require("stream-call-bot-interceptor") /*id: 256917*/;
  var samanthaChatProtocol = require("samantha-chat-protocol") /*id: 573966*/;
  var apiAuthInterceptors = require("api-auth-interceptors") /*id: 813411*/;
  function s() {
    samanthaChatProtocol.setFetchStreamInterceptorForPlugin(apiAuthInterceptors.checkLogoutResponse);
    streamCallBotInterceptor.setFetchStreamInterceptorForStreamCallBot(apiAuthInterceptors.checkLogoutResponse);
  }
  require.r(exports);
  require.d(exports, {
    useLogoutRespInterceptor: function () {
      return s;
    }
  });
}