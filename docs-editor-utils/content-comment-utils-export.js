// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MB' to 'extractPlainText'
// - Renamed export 'TX' to 'transformComment'
// - Renamed export 'b7' to 'getUnixTimestamp'
// - Renamed export 'g$' to 'transformComments'
// - Renamed export 'gM' to 'serializeTextDelta'
// - Renamed export 'sp' to 'compareItems'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 284561
         */
module.exports = function (module, exports, require) {
  var contentDeltaUtils_1 = require("content-delta-utils_1") /*id: 192362*/;
  var commentDataTransformUtils = require("comment-data-transform-utils") /*id: 567918*/;
  require.d(exports, {
    extractPlainText: function () {
      return contentDeltaUtils_1.extractPlainText;
    },
    transformComment: function () {
      return commentDataTransformUtils.transformComment;
    },
    getUnixTimestamp: function () {
      return contentDeltaUtils_1.getUnixTimestamp;
    },
    transformComments: function () {
      return commentDataTransformUtils.transformComments;
    },
    serializeTextDelta: function () {
      return contentDeltaUtils_1.serializeTextDelta;
    },
    compareItems: function () {
      return contentDeltaUtils_1.compareItems;
    }
  });
}