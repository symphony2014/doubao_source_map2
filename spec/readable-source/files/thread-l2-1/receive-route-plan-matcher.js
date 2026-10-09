// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Resolved require(459291) to 'receive-route-plan-block-symbol'
// - Updated imported property 'v' to 'receiveRouteBlock' (module 459291)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 822384
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = {
    pluginIdentifier: require("receive-route-plan-block-symbol") /*id: 459291*/.receiveRouteBlock,
    matchContentBlock: e => e === chatConstantsEnum.messageContentType.BLOCK_ROUTE_PLAN
  };
  require.r(exports);
  require.d(exports, {
    ReceiveRoutePlanningBlockMatcher: function () {
      return l;
    }
  });
}