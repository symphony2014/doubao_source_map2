// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'formatChatInputPayload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 485882
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var messageBoxTypeCheckers = require("message-box-type-checkers") /*id: 117360*/;
  let o = e => {
    let {
      payload: t,
      skillId: n,
      skillType: o,
      reportParams: r,
      refContents: l
    } = e;
    let s = l ? messageBoxTypeCheckers.filterEnabledRefs(l) : l;
    return [{
      ...t,
      extraExt: {
        ...t.extraExt,
        input_skill: JSON.stringify({
          skill_id: n,
          skill_type: o
        }),
        useSamanthaChat: "true",
        ...(isEmptyUtil.isEmpty(s) ? {} : {
          reference_content: JSON.stringify(s)
        })
      },
      reportParams: r
    }];
  };
  require.d(exports, {
    formatChatInputPayload: function () {
      return o;
    }
  });
}