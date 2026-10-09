// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 299505
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
  (i = {})[i.Init = 0] = "Init";
  i[i.Success = 1] = "Success";
  i[i.Error = 2] = "Error";
  i[i.Delete = 3] = "Delete";
  i[i.Cancel = 4] = "Cancel";
  let C = i;
  (r = {})[r.None = 0] = "None";
  r[r.Web = 1] = "Web";
  r[r.Client = 2] = "Client";
  r[r.Extension = 3] = "Extension";
  r[r.OlaFriend = 4] = "OlaFriend";
  r[r.Inhouse = 5] = "Inhouse";
  let y = r;
  (o = {})[o.MLA = 0] = "MLA";
  o[o.APA = 1] = "APA";
  o[o.Chicago = 2] = "Chicago";
  o[o.Harvard = 3] = "Harvard";
  let E = o;
  (a = {})[a.File = 1] = "File";
  a[a.URL = 2] = "URL";
  let x = a;
  (l = {})[l.Code = 1] = "Code";
  let T = l;
  (s = {})[s.Unknow = 0] = "Unknow";
  s[s.PcWeb = 1] = "PcWeb";
  s[s.MacDesktopWeb = 2] = "MacDesktopWeb";
  s[s.WindowsDesktopWeb = 3] = "WindowsDesktopWeb";
  let k = s;
  (u = {})[u.Unknown = 0] = "Unknown";
  u[u.Offline = 1] = "Offline";
  u[u.Preview = 2] = "Preview";
  u[u.Online = 3] = "Online";
  u[u.Delete = 4] = "Delete";
  let R = u;
  (c = {})[c.Chat = 0] = "Chat";
  c[c.Editor = 1] = "Editor";
  c[c.Message = 2] = "Message";
  c[c.Share = 3] = "Share";
  let w = c;
  (d = {})[d.Generating = 1] = "Generating";
  d[d.Generated = 2] = "Generated";
  d[d.Updated = 3] = "Updated";
  let I = d;
  (h = {})[h.WebText = 1] = "WebText";
  h[h.VideoTranscriptText = 2] = "VideoTranscriptText";
  h[h.PodcastTranscriptText = 3] = "PodcastTranscriptText";
  h[h.SelectedCollectionGroupText = 4] = "SelectedCollectionGroupText";
  h[h.MeetingTranscript = 5] = "MeetingTranscript";
  h[h.PDF = 6] = "PDF";
  h[h.SearchResult = 7] = "SearchResult";
  h[h.WebMarkdown = 8] = "WebMarkdown";
  h[h.VideoMarkdown = 9] = "VideoMarkdown";
  h[h.PodcastMarkdown = 10] = "PodcastMarkdown";
  h[h.Word = 11] = "Word";
  h[h.Excel = 12] = "Excel";
  h[h.CSV = 13] = "CSV";
  h[h.CodeFile = 14] = "CodeFile";
  h[h.Image = 15] = "Image";
  let M = h;
  (m = {})[m.Pass = 1] = "Pass";
  m[m.Pending = 2] = "Pending";
  m[m.Reject = 3] = "Reject";
  let A = m;
  (g = {})[g.None = 0] = "None";
  g[g.Placeholder = 1] = "Placeholder";
  g[g.Language = 2] = "Language";
  g[g.Select = 3] = "Select";
  g[g.CliekArea = 4] = "CliekArea";
  let D = g;
  (f = {})[f.Plugin = 1] = "Plugin";
  f[f.DesktopToolbar = 2] = "DesktopToolbar";
  f[f.DesktopLauncher = 3] = "DesktopLauncher";
  let N = f;
  (p = {})[p.Unknown = 0] = "Unknown";
  p[p.Prompt = 1] = "Prompt";
  p[p.Skill = 2] = "Skill";
  let L = p;
  (_ = {})[_.Default = 0] = "Default";
  _[_.ReadAndSummarize = 1] = "ReadAndSummarize";
  _[_.WriteAssistant = 2] = "WriteAssistant";
  _[_.ImageGeneration = 3] = "ImageGeneration";
  _[_.Search = 4] = "Search";
  _[_.Translate = 5] = "Translate";
  _[_.ReadPDF = 6] = "ReadPDF";
  _[_.ReadWebsite = 7] = "ReadWebsite";
  _[_.DeepSearch = 8] = "DeepSearch";
  _[_.MusicAssistant = 9] = "MusicAssistant";
  _[_.AcademicSearch = 10] = "AcademicSearch";
  _[_.ExerciseAssistant = 11] = "ExerciseAssistant";
  _[_.ReadMultiWebsites = 12] = "ReadMultiWebsites";
  _[_.CodeInterpreter = 13] = "CodeInterpreter";
  _[_.ReferenceAsk = 14] = "ReferenceAsk";
  _[_.VoiceCall = 15] = "VoiceCall";
  _[_.CodeAssistant = 16] = "CodeAssistant";
  _[_.VideoGeneration = 17] = "VideoGeneration";
  _[_.AiPPT = 18] = "AiPPT";
  _[_.MediaUnderstandingByAsr = 19] = "MediaUnderstandingByAsr";
  _[_.SearchEngine = 20] = "SearchEngine";
  _[_.SkillDeepResearch = 25] = "SkillDeepResearch";
  _[_.SkillAiPodcast = 26] = "SkillAiPodcast";
  _[_.CustomSkill = 27] = "CustomSkill";
  _[_.DesExtChatSkillPlaceholder = 100] = "DesExtChatSkillPlaceholder";
  _[_.DesExtSkillTranslate = 101] = "DesExtSkillTranslate";
  _[_.DesExtSkillSummaryHighlight = 102] = "DesExtSkillSummaryHighlight";
  _[_.DesExtSkillExplain = 103] = "DesExtSkillExplain";
  _[_.DesExtSkillDesExtSearchCard = 104] = "DesExtSkillDesExtSearchCard";
  _[_.DesExtSkillLinkPreview = 105] = "DesExtSkillLinkPreview";
  _[_.DesExtSkillDesExtSuggest = 106] = "DesExtSkillDesExtSuggest";
  _[_.DesExtSkillAIToolSummary = 107] = "DesExtSkillAIToolSummary";
  _[_.DesExtSkillCustomSkill = 111] = "DesExtSkillCustomSkill";
  _[_.DesExtSkillSharedAppAssistant = 131] = "DesExtSkillSharedAppAssistant";
  _[_.DesExtSkillMeetingSummary = 133] = "DesExtSkillMeetingSummary";
  _[_.DesExtSkillSuperTask = 138] = "DesExtSkillSuperTask";
  _[_.AiReadWebsite = 200] = "AiReadWebsite";
  _[_.UGCBot = 201] = "UGCBot";
  _[_.LocalModelQA = 202] = "LocalModelQA";
  _[_.AISpace = 203] = "AISpace";
  _[_.AIBilingualSubtitles = 204] = "AIBilingualSubtitles";
  _[_.AIPlayground = 205] = "AIPlayground";
  _[_.AIPPTSlides = 5000] = "AIPPTSlides";
  let O = _;
  (v = {})[v.Left = 0] = "Left";
  v[v.Middle = 1] = "Middle";
  v[v.Right = 2] = "Right";
  let B = v;
  (b = {})[b.Horizontal = 0] = "Horizontal";
  b[b.Vertical = 1] = "Vertical";
  let G = b;
  (S = {})[S.WebLink = 1] = "WebLink";
  S[S.MeetingMinutes = 2] = "MeetingMinutes";
  S[S.Pages = 3] = "Pages";
  S[S.LinkShareCode = 4] = "LinkShareCode";
  S[S.CodeBlock = 5] = "CodeBlock";
  let j = S;
  (P = {})[P.Unknown = 0] = "Unknown";
  P[P.Plugin = 1] = "Plugin";
  P[P.Desktop = 2] = "Desktop";
  let W = P;
  require.r(exports);
  require.d(exports, {
    AiPPTDetailStatusEnum: function () {
      return C;
    },
    AppType: function () {
      return y;
    },
    CitationFormatType: function () {
      return E;
    },
    DocumentType: function () {
      return x;
    },
    IndependentSiteType: function () {
      return T;
    },
    NoticeRecordVisibilityPlatform: function () {
      return k;
    },
    NoticeVersionStatus: function () {
      return R;
    },
    PagesSource: function () {
      return w;
    },
    PagesStatus: function () {
      return I;
    },
    ResourceContentType: function () {
      return M;
    },
    ReviewStatus: function () {
      return A;
    },
    SkillInputOptionType: function () {
      return D;
    },
    SkillItemFrontendSource: function () {
      return N;
    },
    SkillItemType: function () {
      return L;
    },
    SkillType: function () {
      return O;
    },
    TextAlignment: function () {
      return B;
    },
    TextDirection: function () {
      return G;
    },
    ThreadSourceType: function () {
      return j;
    },
    UserSystemSettingsSource: function () {
      return W;
    }
  });
}