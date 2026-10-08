// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'checkNestedContentType'
// - Resolved require(316567) to 'check-nested-content-type'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'isEducationSkillChecker'
// - Resolved require(965929) to 'is-education-skill-checker'
// - Resolved require(845036) to 'send-nested-content-symbol'
// - Updated imported property 'c' to 'sendNestedContent' (module 845036)
// - Updated imported property 'm' to 'isNestedContentType' (module 316567)
// - Updated imported property 't' to 'isEducationSkill' (module 965929)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 828356
         */
module.exports = function (module, exports, require) {
  var checkNestedContentType = require("check-nested-content-type") /*id: 316567*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var isEducationSkillChecker = require("is-education-skill-checker") /*id: 965929*/;
  let l = {
    pluginIdentifier: require("send-nested-content-symbol") /*id: 845036*/.sendNestedContent,
    matchPlugin: e => (checkNestedContentType.isNestedContentType(e) || messageContentTypeAndStatusChecker.Sqr(e) && !messageContentTypeAndStatusChecker.s9j(e) || messageContentTypeAndStatusChecker.k56(e)) && !messageContentTypeAndStatusChecker.EkH(e) && !messageContentTypeAndStatusChecker.kwD(e) && !isEducationSkillChecker.isEducationSkill(e) && !messageContentTypeAndStatusChecker.Q_x(e)
  };
  require.r(exports);
  require.d(exports, {
    sendNestedContentMatcher: function () {
      return l;
    }
  });
}