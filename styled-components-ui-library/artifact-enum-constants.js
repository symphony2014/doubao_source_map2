// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 912769
         */
module.exports = function (module, exports, require) {
  var r;
  var n;
  var i;
  var s;
  var o;
  (r = {})[r.Undefined = 0] = "Undefined";
  r[r.Normal = 1] = "Normal";
  r[r.Deleted = 2] = "Deleted";
  let l = r;
  (n = {})[n.WriteDoc = 1] = "WriteDoc";
  n[n.Pages = 2] = "Pages";
  n[n.CanvasPage = 3] = "CanvasPage";
  n[n.StepWritingPage = 4] = "StepWritingPage";
  n[n.Code = 5] = "Code";
  n[n.StepWritingOtterPage = 6] = "StepWritingOtterPage";
  n[n.CodeBlock = 7] = "CodeBlock";
  n[n.CodeDevelopMode = 8] = "CodeDevelopMode";
  n[n.SlidePPT = 9] = "SlidePPT";
  n[n.DocxPage = 10] = "DocxPage";
  n[n.StepDocxPage = 11] = "StepDocxPage";
  let d = n;
  (i = {})[i.Conversation = 1] = "Conversation";
  i[i.MobileMainConversation = 2] = "MobileMainConversation";
  let c = i;
  (s = {})[s.Init = 0] = "Init";
  s[s.Generating = 1] = "Generating";
  s[s.Generated = 2] = "Generated";
  s[s.Deleted = 3] = "Deleted";
  s[s.Terminal = 4] = "Terminal";
  s[s.UnSupport = 5] = "UnSupport";
  let u = s;
  (o = {})[o.Page = 1] = "Page";
  o[o.SlidePPT = 2] = "SlidePPT";
  let h = o;
  require.r(exports);
  require.d(exports, {
    ArtifactMetaStatus: function () {
      return l;
    },
    ArtifactResourceType: function () {
      return d;
    },
    ArtifactSourceType: function () {
      return c;
    },
    ArtifactStatus: function () {
      return u;
    },
    ArtifactType: function () {
      return h;
    }
  });
}