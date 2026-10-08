// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'tZ' to 'ChatInputActions'
// - Renamed export 'yG' to 'getChatInputAction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 678030
         */
module.exports = function (module, exports, require) {
  var i;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatInputAiFeatureUtils = require("chat-input-ai-feature-utils") /*id: 458924*/;
  (i = {})[i.Command = 1] = "Command";
  i[i.Explain = 2] = "Explain";
  i[i.QueryWithReference = 3] = "QueryWithReference";
  let l = i;
  let o = {
    explain: l.Explain,
    query_with_reference: l.QueryWithReference
  };
  let s = e => {
    let {
      presetPrompt: t,
      immersiveFiles: n,
      templateKey: i
    } = e;
    let s = {};
    let u = chatInputAiFeatureUtils.getFeatureCommand(t);
    if (u) {
      s.action = l.Command;
      s.command = u.command;
    }
    if (n == null ? undefined : n.length) {
      s.immersive_files = JSON.stringify(n);
    }
    if (i) {
      s.action = o[i];
    }
    if (!isEmptyUtil.isEmpty(s)) {
      return s;
    }
  };
  require.d(exports, {
    ChatInputActions: function () {
      return l;
    },
    getChatInputAction: function () {
      return s;
    }
  });
}