// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'getEmojiChar'
// - Renamed export 'V' to 'getMapValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 626164
         */
module.exports = function (module, exports, require) {
  var emojiSupportDetector = require("emoji-support-detector") /*id: 116857*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  function l(e) {
    if (docxFeatureFlags.isGiEnabled()) {
      return emojiSupportDetector.hexToEmoji(e);
    } else {
      return String.fromCodePoint(Number(e.split("-").map(function (e) {
        return `0x${e}`;
      })[0])) || emojiSupportDetector.hexToEmoji(e);
    }
  }
  let c = function (e, n = {}) {
    try {
      return n[e];
    } catch (e) {
      return "";
    }
  };
  require.d(exports, {
    getEmojiChar: function () {
      return l;
    },
    getMapValue: function () {
      return c;
    }
  });
}