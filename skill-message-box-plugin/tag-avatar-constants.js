// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'tagConfig'
// - Renamed export 'j' to 'tagAvatarOptions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 580307
         */
module.exports = function (module, exports, require) {
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let r = {
    PREFIX: `${semiIdentifier.semiIdentifier}-tag`
  };
  let o = {
    TAG_SIZE: ["default", "small", "large"],
    TAG_COLOR: ["grey", "red", "pink", "purple", "violet", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "white"],
    TAG_TYPE: ["light", "solid", "ghost"],
    AVATAR_SHAPE: ["square", "circle"]
  };
  require.d(exports, {
    tagConfig: function () {
      return r;
    },
    tagAvatarOptions: function () {
      return o;
    }
  });
}