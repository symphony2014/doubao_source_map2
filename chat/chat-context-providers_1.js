// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'ChatContextProvider'
// - Renamed export 'j' to 'ChatRefsProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 884122
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var chatContextUtil = require("chat-context-util") /*id: 491849*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      children: t,
      ...n
    } = e;
    let o = reactUseChangedRef.useChangedRef(n, deepEqualUtil_1.deepEqual);
    return reactJsxRuntimeCoreReexport.jsx(chatContextUtil.ChatContext.Provider, {
      value: o,
      children: t
    });
  };
  let u = e => {
    let {
      children: t,
      ...n
    } = e;
    let r = reactUseChangedRef.useChangedRef(n, deepEqualUtil_1.deepEqual);
    return reactJsxRuntimeCoreReexport.jsx(chatRefsContext.ChatRefsContext.Provider, {
      value: r,
      children: t
    });
  };
  require.d(exports, {
    ChatContextProvider: function () {
      return s;
    },
    ChatRefsProvider: function () {
      return u;
    }
  });
}