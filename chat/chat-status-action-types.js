// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'chatStatusTypes'
// - Renamed export 'u' to 'chatActionTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 757046
         */
module.exports = function (module, exports, require) {
  var i = {
    Default: "Default",
    Sending: "Sending",
    Receiving: "Receiving"
  };
  var r = {
    ClickSkill: "click_skill",
    AfterSkill: "after_skill",
    AfterIntention: "after_intention",
    KeyboardAt: "keyboard_at",
    KeyboardSlash: "keyboard_slash",
    FileUpload: "file_upload",
    Quote: "quote",
    Unknown: "unknown",
    UseURL: "use_url",
    AISpace: "aispace"
  };
  require.d(exports, {
    chatStatusTypes: function () {
      return i;
    },
    chatActionTypes: function () {
      return r;
    }
  });
}