// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E7' to 'roleType'
// - Renamed export 'KF' to 'messageType'
// - Renamed export 'MZ' to 'parseState'
// - Renamed export 'Tv' to 'mediaType'
// - Renamed export 'm9' to 'reviewState'
// - Renamed export 'nw' to 'feedbackType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 292449
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var s;
  var a;
  var o;
  var l;
  (i = {})[i.MessageDelete = 1] = "MessageDelete";
  i[i.MessageLike = 2] = "MessageLike";
  i[i.MessageDislike = 3] = "MessageDislike";
  i[i.MessageIDLocalMapping = 4] = "MessageIDLocalMapping";
  i[i.MessageNotCompliant = 5] = "MessageNotCompliant";
  i[i.ConversationArchive = 11] = "ConversationArchive";
  i[i.ConversationAdd = 12] = "ConversationAdd";
  i[i.ConversationCreateSection = 13] = "ConversationCreateSection";
  i[i.ConversationClearHistory = 14] = "ConversationClearHistory";
  i[i.ConversationUpdate = 15] = "ConversationUpdate";
  i[i.ConversationRead = 16] = "ConversationRead";
  i[i.ConversationLandingInsert = 17] = "ConversationLandingInsert";
  i[i.OnboardingBegin = 21] = "OnboardingBegin";
  i[i.OnboardingFail = 22] = "OnboardingFail";
  i[i.OnboardingCancel = 23] = "OnboardingCancel";
  i[i.OnboardingNeedStart = 26] = "OnboardingNeedStart";
  i[i.UserBanned = 31] = "UserBanned";
  i[i.UserBanRelease = 32] = "UserBanRelease";
  i[i.UserLogout = 33] = "UserLogout";
  i[i.UserConfigUpdate = 41] = "UserConfigUpdate";
  i[i.NeedLocation = 51] = "NeedLocation";
  i[i.PushToast = 60] = "PushToast";
  i[i.TTSBegin = 91] = "TTSBegin";
  i[i.UserMute = 101] = "UserMute";
  i[i.UserMuteRelease = 102] = "UserMuteRelease";
  i[i.TouristReachChatLimit = 1000] = "TouristReachChatLimit";
  i[i.NestedMessageStateChange = 1001] = "NestedMessageStateChange";
  i[i.TouristReachThreadLimit = 1002] = "TouristReachThreadLimit";
  i[i.MessageRefImagesNotCompliant = 1003] = "MessageRefImagesNotCompliant";
  i[i.MessageUpdate = 1004] = "MessageUpdate";
  i[i.MailboxActivated = 1005] = "MailboxActivated";
  i[i.QueryBroadcast = 1006] = "QueryBroadcast";
  i[i.SafetyResponseAnswer = 1007] = "SafetyResponseAnswer";
  i[i.FetchAnswer = 1008] = "FetchAnswer";
  i[i.GuidanceTaskCompleted = 1009] = "GuidanceTaskCompleted";
  i[i.DisableActionBar = 1010] = "DisableActionBar";
  i[i.DeepResearchFinished = 1011] = "DeepResearchFinished";
  i[i.SuperTaskFinished = 1012] = "SuperTaskFinished";
  i[i.SuperTaskNeedAskHuman = 1013] = "SuperTaskNeedAskHuman";
  i[i.CodeAssistantAsyncTaskFinished = 1014] = "CodeAssistantAsyncTaskFinished";
  i[i.SuperTaskModelCallOverload = 1015] = "SuperTaskModelCallOverload";
  i[i.SuperTaskApplyTrialSuccess = 1016] = "SuperTaskApplyTrialSuccess";
  i[i.BlockMessageStateChange = 1017] = "BlockMessageStateChange";
  i[i.SuperTaskModifyPPTOutline = 1018] = "SuperTaskModifyPPTOutline";
  i[i.SuperTaskSelectPPTTemplate = 1019] = "SuperTaskSelectPPTTemplate";
  i[i.AIPPTTaskSuccess = 1020] = "AIPPTTaskSuccess";
  i[i.ActionBarRefresh = 10000] = "ActionBarRefresh";
  let u = i;
  (r = {})[r.User = 0] = "User";
  r[r.System = 1] = "System";
  let c = r;
  (s = {})[s.Default = 0] = "Default";
  s[s.Like = 1] = "Like";
  s[s.Unlike = 2] = "Unlike";
  s[s.Better = 3] = "Better";
  s[s.Almost = 4] = "Almost";
  s[s.BothBad = 5] = "BothBad";
  s[s.Form = 6] = "Form";
  let d = s;
  (a = {})[a.Unknown = 0] = "Unknown";
  a[a.File = 1] = "File";
  a[a.OCRImage = 2] = "OCRImage";
  a[a.Audio = 3] = "Audio";
  a[a.Video = 4] = "Video";
  let f = a;
  (o = {})[o.ParseState_Default = 0] = "ParseState_Default";
  o[o.ParseState_Success = 1] = "ParseState_Success";
  o[o.ParseState_Failed = 2] = "ParseState_Failed";
  o[o.ParseState_Processing = 3] = "ParseState_Processing";
  let h = o;
  (l = {})[l.ReviewState_Default = 0] = "ReviewState_Default";
  l[l.ReviewState_Access = 1] = "ReviewState_Access";
  l[l.ReviewState_NotCompliant = 2] = "ReviewState_NotCompliant";
  l[l.ReviewState_Processing = 3] = "ReviewState_Processing";
  let p = l;
  require.d(exports, {
    roleType: function () {
      return c;
    },
    messageType: function () {
      return u;
    },
    parseState: function () {
      return h;
    },
    mediaType: function () {
      return f;
    },
    reviewState: function () {
      return p;
    },
    feedbackType: function () {
      return d;
    }
  });
}