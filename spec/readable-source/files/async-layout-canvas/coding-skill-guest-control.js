// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'useMarsCodeGuestHook'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 276684
         */
module.exports = function (module, exports, require) {
  var trackingEventConstants = require("tracking-event-constants") /*id: 402894*/;
  var chatGuestAccessControlHooks = require("chat-guest-access-control-hooks") /*id: 874237*/;
  function o() {
    let {
      onClickGuestDisabled: e
    } = chatGuestAccessControlHooks.createGuestDisabledHandler({
      source: trackingEventConstants.trackingEvents.MARSCODE,
      checkNewGuidanceAb: true
    });
    return {
      onClickGuestDisabled: e
    };
  }
  require.d(exports, {
    useMarsCodeGuestHook: function () {
      return o;
    }
  });
}