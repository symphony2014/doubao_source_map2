// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J4' to 'RoleType'
// - Renamed export 'L6' to 'AuthType'
// - Renamed export 'UE' to 'SceneType'
// - Renamed export 'W8' to 'ConversationAction'
// - Renamed export 'dm' to 'ParticipantType'
// - Renamed export 'iz' to 'ContentSource'
// - Renamed export 'vS' to 'AskStrategy'
// - Renamed export 'ym' to 'BizIconType'
// - Renamed export 'z_' to 'VisibilityType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 180943
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  var a;
  var l;
  var s;
  var u;
  var c;
  var d;
  (i = {})[i.CreateConversation = 1] = "CreateConversation";
  i[i.ArchiveConversation = 2] = "ArchiveConversation";
  let h = i;
  (r = {})[r.subject = 1] = "subject";
  r[r.guest = 2] = "guest";
  let m = r;
  (o = {})[o.Choiceness = 1] = "Choiceness";
  o[o.Discovery = 2] = "Discovery";
  o[o.NotLogin = 3] = "NotLogin";
  o[o.ConversationPage = 4] = "ConversationPage";
  o[o.ImmersiveMode = 5] = "ImmersiveMode";
  o[o.ParticipantPage = 6] = "ParticipantPage";
  o[o.ConversationChatMode = 7] = "ConversationChatMode";
  o[o.CocoWebNotLogin = 8] = "CocoWebNotLogin";
  o[o.ConvRcmdToOldUser = 9] = "ConvRcmdToOldUser";
  o[o.ConvRcmdToOldUserReGen = 10] = "ConvRcmdToOldUserReGen";
  let g = o;
  (a = {})[a.User = 0] = "User";
  a[a.Coco = 1] = "Coco";
  a[a.GuanFang = 2] = "GuanFang";
  a[a.CocoWeb = 3] = "CocoWeb";
  let f = a;
  (l = {})[l.None = 0] = "None";
  l[l.Real = 1] = "Real";
  l[l.RealNone = 2] = "RealNone";
  let p = l;
  (s = {})[s.ContentPool = 1] = "ContentPool";
  s[s.Preset = 2] = "Preset";
  let _ = s;
  (u = {})[u.BIZ_UNKNOWN = 0] = "BIZ_UNKNOWN";
  u[u.BIZ_BOT_ICON = 1] = "BIZ_BOT_ICON";
  u[u.BIZ_PROFILE_ICON = 2] = "BIZ_PROFILE_ICON";
  u[u.BIZ_AUDIO = 3] = "BIZ_AUDIO";
  u[u.BIZ_VOICE_ICON = 4] = "BIZ_VOICE_ICON";
  u[u.BIZ_BOT_REF_BG_IMAGE_ORIGIN = 5] = "BIZ_BOT_REF_BG_IMAGE_ORIGIN";
  u[u.BIZ_BOT_REF_BG_IMAGE_CROP = 6] = "BIZ_BOT_REF_BG_IMAGE_CROP";
  u[u.BIZ_BOT_BG_IMAGE = 7] = "BIZ_BOT_BG_IMAGE";
  let v = u;
  (c = {})[c.Ask = 0] = "Ask";
  c[c.Once = 1] = "Once";
  c[c.Always = 2] = "Always";
  let b = c;
  (d = {})[d.Public = 1] = "Public";
  d[d.Private = 2] = "Private";
  d[d.Unlisted = 3] = "Unlisted";
  let S = d;
  require.d(exports, {
    RoleType: function () {
      return m;
    },
    AuthType: function () {
      return p;
    },
    SceneType: function () {
      return g;
    },
    ConversationAction: function () {
      return h;
    },
    ParticipantType: function () {
      return f;
    },
    ContentSource: function () {
      return _;
    },
    AskStrategy: function () {
      return b;
    },
    BizIconType: function () {
      return v;
    },
    VisibilityType: function () {
      return S;
    }
  });
}