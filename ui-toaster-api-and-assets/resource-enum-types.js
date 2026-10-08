// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$Q' to 'SortFields'
// - Renamed export 'Jq' to 'FileTypes'
// - Renamed export 'Th' to 'ContentTypes'
// - Renamed export 'ce' to 'EnableStatus'
// - Renamed export 'cj' to 'SortOrder'
// - Renamed export 'e$' to 'ProcessStatus'
// - Renamed export 'z6' to 'Visibility'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 801204
         */
module.exports = function (module, exports, require) {
  var n;
  var a;
  var r;
  var o;
  var s;
  var l;
  var c;
  (n = {})[n.private = 1] = "private";
  n[n.public = 4] = "public";
  let d = n;
  (a = {})[a.Init = 0] = "Init";
  a[a.Pass = 1] = "Pass";
  a[a.Reject = 2] = "Reject";
  a[a.Processing = 3] = "Processing";
  a[a.Failed = 51] = "Failed";
  let u = a;
  (r = {})[r.Default = 0] = "Default";
  r[r.Desc = 1] = "Desc";
  r[r.Asc = 2] = "Asc";
  let p = r;
  (o = {})[o.Default = 0] = "Default";
  o[o.LastUsedTime = 1] = "LastUsedTime";
  o[o.Name = 2] = "Name";
  o[o.CreateTime = 3] = "CreateTime";
  o[o.Size = 4] = "Size";
  o[o.Source = 5] = "Source";
  o[o.FileType = 6] = "FileType";
  o[o.UpdateTime = 7] = "UpdateTime";
  let m = o;
  (s = {})[s.Processing = 0] = "Processing";
  s[s.Enable = 1] = "Enable";
  s[s.Disable = 2] = "Disable";
  s[s.Init = 3] = "Init";
  let _ = s;
  (l = {})[l.Default = 0] = "Default";
  l[l.Documents = 1] = "Documents";
  l[l.ConversationFiles = 2] = "ConversationFiles";
  l[l.MeetingMinutes = 3] = "MeetingMinutes";
  l[l.CodeArtifact = 4] = "CodeArtifact";
  l[l.Creation = 5] = "Creation";
  let h = l;
  (c = {})[c.UnKnown = 0] = "UnKnown";
  c[c.Directory = 1] = "Directory";
  c[c.File = 2] = "File";
  c[c.Link = 3] = "Link";
  c[c.Image = 4] = "Image";
  c[c.Pages = 5] = "Pages";
  c[c.Video = 6] = "Video";
  c[c.Audio = 7] = "Audio";
  c[c.MeetingMinutes = 8] = "MeetingMinutes";
  c[c.CodeArtifact = 9] = "CodeArtifact";
  c[c.CodeProject = 10] = "CodeProject";
  c[c.Slides = 11] = "Slides";
  c[c.FeishuPages = 12] = "FeishuPages";
  let f = c;
  require.d(exports, {
    SortFields: function () {
      return m;
    },
    FileTypes: function () {
      return f;
    },
    ContentTypes: function () {
      return h;
    },
    EnableStatus: function () {
      return _;
    },
    SortOrder: function () {
      return p;
    },
    ProcessStatus: function () {
      return u;
    },
    Visibility: function () {
      return d;
    }
  });
}