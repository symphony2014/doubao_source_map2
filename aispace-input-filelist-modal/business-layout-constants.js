// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$Q' to 'SortField'
// - Renamed export 'Be' to 'FileType'
// - Renamed export 'Dh' to 'StreamStatus'
// - Renamed export 'Jq' to 'ItemType'
// - Renamed export 'Lq' to 'SiteType'
// - Renamed export 'Nz' to 'ProviderType'
// - Renamed export 'Pu' to 'FileSource'
// - Renamed export 'Th' to 'ViewCategory'
// - Renamed export 'ce' to 'ProcessState'
// - Renamed export 'cj' to 'SortOrder'
// - Renamed export 'e$' to 'ReviewStatus'
// - Renamed export 'p1' to 'Capability'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 252973
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  var a;
  var s;
  var l;
  var c;
  var d;
  var u;
  var h;
  var f;
  var p;
  (i = {})[i.Processing = 0] = "Processing";
  i[i.Enable = 1] = "Enable";
  i[i.Disable = 2] = "Disable";
  i[i.Init = 3] = "Init";
  let m = i;
  (r = {})[r.from_upload = 0] = "from_upload";
  r[r.from_share = 1] = "from_share";
  r[r.from_conversation = 2] = "from_conversation";
  let v = r;
  (o = {})[o.all = 0] = "all";
  o[o.doc = 1] = "doc";
  o[o.image = 2] = "image";
  o[o.media = 3] = "media";
  o[o.chart = 4] = "chart";
  o[o.ppt = 5] = "ppt";
  o[o.code_project = 6] = "code_project";
  o[o.meeting_minutes = 7] = "meeting_minutes";
  o[o.archive = 8] = "archive";
  o[o.others = 100] = "others";
  let g = o;
  (a = {})[a.Default = 0] = "Default";
  a[a.Desc = 1] = "Desc";
  a[a.Asc = 2] = "Asc";
  let _ = a;
  (s = {})[s.Default = 0] = "Default";
  s[s.LastUsedTime = 1] = "LastUsedTime";
  s[s.Name = 2] = "Name";
  s[s.CreateTime = 3] = "CreateTime";
  s[s.Size = 4] = "Size";
  s[s.Source = 5] = "Source";
  s[s.FileType = 6] = "FileType";
  s[s.UpdateTime = 7] = "UpdateTime";
  let b = s;
  (l = {})[l.Default = 0] = "Default";
  l[l.Documents = 1] = "Documents";
  l[l.ConversationFiles = 2] = "ConversationFiles";
  l[l.MeetingMinutes = 3] = "MeetingMinutes";
  l[l.CodeArtifact = 4] = "CodeArtifact";
  l[l.Creation = 5] = "Creation";
  let y = l;
  (c = {})[c.AI = 1] = "AI";
  let w = c;
  (d = {})[d.Default = 0] = "Default";
  d[d.CodeIndependentSite = 1] = "CodeIndependentSite";
  let S = d;
  (u = {})[u.Default = 0] = "Default";
  u[u.Otter = 1] = "Otter";
  u[u.DocxPage = 2] = "DocxPage";
  let x = u;
  (h = {})[h.Init = 0] = "Init";
  h[h.Pass = 1] = "Pass";
  h[h.Reject = 2] = "Reject";
  h[h.Processing = 3] = "Processing";
  h[h.Failed = 51] = "Failed";
  let C = h;
  (f = {})[f.UnKnown = 0] = "UnKnown";
  f[f.Directory = 1] = "Directory";
  f[f.File = 2] = "File";
  f[f.Link = 3] = "Link";
  f[f.Image = 4] = "Image";
  f[f.Pages = 5] = "Pages";
  f[f.Video = 6] = "Video";
  f[f.Audio = 7] = "Audio";
  f[f.MeetingMinutes = 8] = "MeetingMinutes";
  f[f.CodeArtifact = 9] = "CodeArtifact";
  f[f.CodeProject = 10] = "CodeProject";
  let k = f;
  (p = {})[p.Unknown = 0] = "Unknown";
  p[p.Available = 1] = "Available";
  p[p.NoEncodedStream = 2] = "NoEncodedStream";
  p[p.ReviewFailed = 3] = "ReviewFailed";
  let T = p;
  require.d(exports, {
    SortField: function () {
      return b;
    },
    FileType: function () {
      return g;
    },
    StreamStatus: function () {
      return T;
    },
    ItemType: function () {
      return k;
    },
    SiteType: function () {
      return S;
    },
    ProviderType: function () {
      return x;
    },
    FileSource: function () {
      return v;
    },
    ViewCategory: function () {
      return y;
    },
    ProcessState: function () {
      return m;
    },
    SortOrder: function () {
      return _;
    },
    ReviewStatus: function () {
      return C;
    },
    Capability: function () {
      return w;
    }
  });
}