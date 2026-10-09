// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 243788
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  var a;
  var l;
  var s;
  (i = {})[i.WebSocket = 0] = "WebSocket";
  i[i.HttpChunk = 1] = "HttpChunk";
  i[i.Http = 2] = "Http";
  let u = i;
  (r = {})[r.Text = 1] = "Text";
  r[r.Suggest = 2] = "Suggest";
  r[r.Music = 3] = "Music";
  r[r.WebView = 4] = "WebView";
  r[r.Video = 5] = "Video";
  r[r.Image = 6] = "Image";
  r[r.File = 7] = "File";
  r[r.PluginSearchResult = 8] = "PluginSearchResult";
  r[r.AwemeVideoList = 9] = "AwemeVideoList";
  r[r.Composite = 10] = "Composite";
  r[r.Biz = 11] = "Biz";
  r[r.Nested = 20] = "Nested";
  r[r.VLMData = 21] = "VLMData";
  r[r.Card = 50] = "Card";
  r[r.BotCard = 51] = "BotCard";
  r[r.FormMsg = 53] = "FormMsg";
  r[r.CopilotCard = 60] = "CopilotCard";
  r[r.DeepSearchCard = 61] = "DeepSearchCard";
  r[r.MultiContent = 66] = "MultiContent";
  r[r.AggregatedMsg = 67] = "AggregatedMsg";
  r[r.LyricsToSongMusic = 70] = "LyricsToSongMusic";
  r[r.LyricsToSongLyric = 71] = "LyricsToSongLyric";
  r[r.LyricsToSongsMusic = 72] = "LyricsToSongsMusic";
  r[r.PagesCard = 80] = "PagesCard";
  r[r.Outline = 81] = "Outline";
  r[r.PagesIntentionCard = 82] = "PagesIntentionCard";
  r[r.AiPPT = 83] = "AiPPT";
  r[r.CodeArtifact = 84] = "CodeArtifact";
  r[r.Widget = 100] = "Widget";
  r[r.DoraRecord = 101] = "DoraRecord";
  r[r.Other = 800] = "Other";
  r[r.Multi = 900] = "Multi";
  r[r.Unsupported = 1000] = "Unsupported";
  r[r.ReadingLoading = 2003] = "ReadingLoading";
  r[r.VideoGeneration = 2021] = "VideoGeneration";
  r[r.CreationMulti = 2022] = "CreationMulti";
  r[r.Block = 9999] = "Block";
  r[r.Block_Text = 10000] = "Block_Text";
  r[r.Block_RESEARCH_CARD = 10001] = "Block_RESEARCH_CARD";
  r[r.Block_Code_Assistant_Process = 10022] = "Block_Code_Assistant_Process";
  r[r.Block_Requirement_Clarify = 10023] = "Block_Requirement_Clarify";
  let c = r;
  (o = {})[o.Message = 1] = "Message";
  o[o.Ack = 2] = "Ack";
  o[o.Loading = 3] = "Loading";
  let d = o;
  (a = {})[a.DesktopSearchRelatedWebCard = -11] = "DesktopSearchRelatedWebCard";
  a[a.DesktopGrammarCorrection = -10] = "DesktopGrammarCorrection";
  a[a.DesktopTimeStampReference = -9] = "DesktopTimeStampReference";
  a[a.DesktopResourceContentReference = -8] = "DesktopResourceContentReference";
  a[a.DesktopPodcastTranscript = -7] = "DesktopPodcastTranscript";
  a[a.WebTranslateCardContext = -6] = "WebTranslateCardContext";
  a[a.WebVideoSummary = -5] = "WebVideoSummary";
  a[a.WebDocReference = -4] = "WebDocReference";
  a[a.WebAcademicPreview = -3] = "WebAcademicPreview";
  a[a.WebAcademicReference = -2] = "WebAcademicReference";
  a[a.WebPluginReference = -1] = "WebPluginReference";
  a[a.Replaceable = 1] = "Replaceable";
  a[a.Insertable = 2] = "Insertable";
  a[a.DocumentRef = 3] = "DocumentRef";
  a[a.KnowledgeCard = 4] = "KnowledgeCard";
  a[a.MetaPlaceHolder = 5] = "MetaPlaceHolder";
  a[a.EmbeddedMultiMedia = 100] = "EmbeddedMultiMedia";
  a[a.MetaTypeAlaCard = 101] = "MetaTypeAlaCard";
  a[a.CommonCard = 102] = "CommonCard";
  a[a.Think = 103] = "Think";
  a[a.BrandSuperscript = 104] = "BrandSuperscript";
  a[a.CodeAssistantFilePath = 200] = "CodeAssistantFilePath";
  let h = a;
  (l = {})[l.Available = 1] = "Available";
  l[l.InVisible = 2] = "InVisible";
  l[l.Broken = 3] = "Broken";
  l[l.Streaming = 4] = "Streaming";
  l[l.Unselected = 5] = "Unselected";
  l[l.NotCompliant = 6] = "NotCompliant";
  let m = l;
  (s = {})[s.Human = 1] = "Human";
  s[s.Bot = 2] = "Bot";
  let g = s;
  require.r(exports);
  require.d(exports, {
    ConnectionType: function () {
      return u;
    },
    ContentType: function () {
      return c;
    },
    MessageType: function () {
      return d;
    },
    MetaType: function () {
      return h;
    },
    PushMessageStatus: function () {
      return m;
    },
    UserType: function () {
      return g;
    }
  });
}