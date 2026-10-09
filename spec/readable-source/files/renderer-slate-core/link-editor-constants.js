// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GL' to 'entityTypes'
// - Renamed export 'Rc' to 'targetTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18653.6c0138b3.js
         * chunkId: 18653
         * moduleId: 962583
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var i;
  var s;
  var c;
  var u;
  var a;
  var l;
  var p;
  var h;
  var f;
  var d;
  (a = r ||= {}).ALL = "t-all";
  a.USER = "t-user";
  a.GROUP = "t-group";
  a.DOCS = "t-docs";
  (l = o ||= {}).UNKNOWN = "unknown";
  l.NOTIFICATION = "notification";
  l.USER = "user";
  l.CHAT = "chat";
  l.DOC = "doc";
  l.WIKI = "wiki";
  (p = i ||= {})[p.SearchDefault = 0] = "SearchDefault";
  p[p.SearchInUserIds = 1] = "SearchInUserIds";
  (h = s ||= {}).DEFAULT = "default";
  h.MINI = "mini";
  h.AUTO = "auto";
  (f = c ||= {})[f.SINGLE = 0] = "SINGLE";
  f[f.DOUBLE = 1] = "DOUBLE";
  (d = u ||= {})[d.ERROR = 0] = "ERROR";
  d[d.COMPLETE = 1] = "COMPLETE";
  d[d.CACHED = 2] = "CACHED";
  require.d(exports, {
    entityTypes: function () {
      return o;
    },
    targetTypes: function () {
      return r;
    }
  });
}