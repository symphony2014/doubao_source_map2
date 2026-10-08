// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R3' to 'ChatFeatureFlags'
// - Renamed export '_m' to 'ChatRuntimeStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 121421
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  (i = {})[i.AnswerWithSuggest = 1] = "AnswerWithSuggest";
  i[i.AnswerWithVideo = 2] = "AnswerWithVideo";
  i[i.HighlightKeyword = 3] = "HighlightKeyword";
  i[i.OptOutVoice = 4] = "OptOutVoice";
  i[i.PersonalizedRecommend = 5] = "PersonalizedRecommend";
  i[i.SaveChatHistory = 6] = "SaveChatHistory";
  i[i.InputSuggest = 10] = "InputSuggest";
  i[i.UserAuth = 30] = "UserAuth";
  i[i.UseOgfSwitch = 50] = "UseOgfSwitch";
  i[i.CopilotSwitch = 60] = "CopilotSwitch";
  i[i.AllowTraining = 70] = "AllowTraining";
  i[i.AllowTrainingText = 71] = "AllowTrainingText";
  i[i.AllowTrainingVideo = 73] = "AllowTrainingVideo";
  i[i.AllowTrainingFile = 74] = "AllowTrainingFile";
  i[i.RelatedVideo = 80] = "RelatedVideo";
  i[i.FaceMemorySwitch = 90] = "FaceMemorySwitch";
  i[i.DenoiseAuth = 120] = "DenoiseAuth";
  i[i.ActionBarSwitch = 200] = "ActionBarSwitch";
  i[i.ActionBarSwitch_DoubaoSpeak = 201] = "ActionBarSwitch_DoubaoSpeak";
  let o = i;
  (r = {})[r.Startup = 1] = "Startup";
  r[r.Polling = 2] = "Polling";
  r[r.Notified = 3] = "Notified";
  let s = r;
  require.d(exports, {
    ChatFeatureFlags: function () {
      return o;
    },
    ChatRuntimeStatus: function () {
      return s;
    }
  });
}