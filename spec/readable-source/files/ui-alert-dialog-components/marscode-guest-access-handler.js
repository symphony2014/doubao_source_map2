// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'useMarsCodeGuestAccess'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12358.f77a465e.js
         * chunkId: 12358
         * moduleId: 870433
         */
module.exports = function (module, exports, require) {
  var chatGuestAccessControlHooks = require("chat-guest-access-control-hooks") /*id: 874237*/;
  function l() {
    let {
      onClickGuestDisabled: e
    } = chatGuestAccessControlHooks.createGuestDisabledHandler({
      source: "marscode",
      checkNewGuidanceAb: true
    });
    return {
      onClickGuestDisabled: e
    };
  }
  require.d(exports, {
    useMarsCodeGuestAccess: function () {
      return l;
    }
  });
}