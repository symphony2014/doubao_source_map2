// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Zl' to 'isValidChatIdPage'
// - Renamed export 'kK' to 'isChatLayoutOnly'
// - Renamed export 'tv' to 'isChatIdPage'
// - Renamed export 'yQ' to 'isChatMainPage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 391713
         */
module.exports = function (module, exports, require) {
  var validateNumericString = require("validate-numeric-string") /*id: 93601*/;
  let r = e => {
    return (e == null ? undefined : e[0]?.id) === "chat_layout" && !(e == null ? undefined : e[1]);
  };
  let o = e => {
    return (e == null ? undefined : e[0]?.id) === "chat_layout" && (e == null ? undefined : e[1]?.id) === "chat_(id)/page";
  };
  let a = e => {
    return (e == null ? undefined : e[0]?.id) === "chat_layout" && (e == null ? undefined : e[1]?.id) === "chat_main/page";
  };
  let l = e => {
    var n;
    return o(e) && validateNumericString.isValidNumber((e == null ? undefined : (n = e[1]) === null || n === undefined ? undefined : n.params?.id) || "");
  };
  require.d(exports, {
    isValidChatIdPage: function () {
      return l;
    },
    isChatLayoutOnly: function () {
      return r;
    },
    isChatIdPage: function () {
      return o;
    },
    isChatMainPage: function () {
      return a;
    }
  });
}