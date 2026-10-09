// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AI' to 'fileOpenType'
// - Renamed export 'Cr' to 'processingStatus'
// - Renamed export 'DD' to 'codeFeatureType'
// - Renamed export 'ES' to 'deepThinkMode'
// - Renamed export 'FB' to 'docType'
// - Renamed export 'M7' to 'workspaceMode'
// - Renamed export 'PK' to 'bindingStatus'
// - Renamed export 'Pu' to 'serviceLevel'
// - Renamed export 'UB' to 'platformType'
// - Renamed export 'V4' to 'docSourceType'
// - Renamed export 'Wz' to 'searchNewsType'
// - Renamed export 'ZQ' to 'itemStatus'
// - Renamed export 'cC' to 'conversationSource'
// - Renamed export 'lP' to 'githubValidationReason'
// - Renamed export 'or' to 'placeholderType'
// - Renamed export 'pR' to 'recentDocTab'
// - Renamed export 'pu' to 'sourceType'
// - Renamed export 'yj' to 'fileSelectionType'
// - Renamed export 'yw' to 'filterType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 447912
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
  var h;
  var m;
  var g;
  var f;
  var p;
  var _;
  var v;
  var b;
  var S;
  var P;
  (i = {})[i.Web = 0] = "Web";
  i[i.Desktop = 1] = "Desktop";
  i[i.App = 2] = "App";
  let C = i;
  (r = {})[r.DeepThinkOff = 0] = "DeepThinkOff";
  r[r.DeepThinkOn = 1] = "DeepThinkOn";
  r[r.DeepThinkAuto = 2] = "DeepThinkAuto";
  r[r.ProModel = 3] = "ProModel";
  let y = r;
  (o = {})[o.Unbinding = 1] = "Unbinding";
  o[o.Success = 2] = "Success";
  let E = o;
  (a = {})[a.file_open = 1] = "file_open";
  let x = a;
  (l = {})[l.Latest = 1] = "Latest";
  l[l.FromAiCreate = 2] = "FromAiCreate";
  l[l.FromUserUpload = 3] = "FromUserUpload";
  let T = l;
  (s = {})[s.None = 0] = "None";
  s[s.CodeGenerate = 1] = "CodeGenerate";
  s[s.CodeDebug = 2] = "CodeDebug";
  s[s.CodeKnowledge = 3] = "CodeKnowledge";
  s[s.CodeBase = 4] = "CodeBase";
  let k = s;
  (u = {})[u.RepoID = 1] = "RepoID";
  u[u.File = 2] = "File";
  u[u.DirectoryID = 3] = "DirectoryID";
  let R = u;
  (c = {})[c.from_conversation = 0] = "from_conversation";
  c[c.from_aispace = 1] = "from_aispace";
  let w = c;
  (d = {})[d.Processing = 1] = "Processing";
  d[d.Succeed = 2] = "Succeed";
  d[d.Failed = 3] = "Failed";
  d[d.Ready = 4] = "Ready";
  let I = d;
  (h = {})[h.MultiDirectories = 1] = "MultiDirectories";
  h[h.DirectoryAndFile = 2] = "DirectoryAndFile";
  h[h.MultiFiles = 3] = "MultiFiles";
  let M = h;
  (m = {})[m.Default = 0] = "Default";
  m[m.Pages = 1] = "Pages";
  m[m.MeetingMinutes = 2] = "MeetingMinutes";
  m[m.Creation = 3] = "Creation";
  let A = m;
  (g = {})[g.RecentDocTabQuickStart = 1] = "RecentDocTabQuickStart";
  g[g.RecentDocTabRecentVisit = 2] = "RecentDocTabRecentVisit";
  g[g.RecentDocTabMyDoc = 3] = "RecentDocTabMyDoc";
  g[g.RecentDocTabShareMe = 4] = "RecentDocTabShareMe";
  g[g.RecentDocTabTemplate = 5] = "RecentDocTabTemplate";
  let D = g;
  (f = {})[f.New = 1] = "New";
  f[f.Recommend = 2] = "Recommend";
  f[f.Upgrade = 3] = "Upgrade";
  let N = f;
  (p = {})[p.All = 1] = "All";
  p[p.Conversation = 2] = "Conversation";
  let L = p;
  (_ = {})[_.Default = 0] = "Default";
  _[_.Workspace = 1] = "Workspace";
  let O = _;
  (v = {})[v.None = 0] = "None";
  v[v.Placeholder = 1] = "Placeholder";
  v[v.Language = 2] = "Language";
  v[v.Select = 3] = "Select";
  v[v.CliekArea = 4] = "CliekArea";
  let B = v;
  (b = {})[b.None = 0] = "None";
  b[b.Search_News_Onboarding = 1] = "Search_News_Onboarding";
  b[b.Search_News_Subscribe = 2] = "Search_News_Subscribe";
  let G = b;
  (S = {})[S.NoReason = 0] = "NoReason";
  S[S.NotGitHubLink = 1] = "NotGitHubLink";
  S[S.SizeOverLimit = 2] = "SizeOverLimit";
  S[S.NotPublicRepository = 3] = "NotPublicRepository";
  let j = S;
  (P = {})[P.General = 1] = "General";
  P[P.Professional = 2] = "Professional";
  let W = P;
  require.d(exports, {
    fileOpenType: function () {
      return x;
    },
    processingStatus: function () {
      return I;
    },
    codeFeatureType: function () {
      return k;
    },
    deepThinkMode: function () {
      return y;
    },
    docType: function () {
      return A;
    },
    workspaceMode: function () {
      return O;
    },
    bindingStatus: function () {
      return E;
    },
    serviceLevel: function () {
      return W;
    },
    platformType: function () {
      return C;
    },
    docSourceType: function () {
      return T;
    },
    searchNewsType: function () {
      return G;
    },
    itemStatus: function () {
      return N;
    },
    conversationSource: function () {
      return w;
    },
    githubValidationReason: function () {
      return j;
    },
    placeholderType: function () {
      return B;
    },
    recentDocTab: function () {
      return D;
    },
    sourceType: function () {
      return R;
    },
    fileSelectionType: function () {
      return M;
    },
    filterType: function () {
      return L;
    }
  });
}