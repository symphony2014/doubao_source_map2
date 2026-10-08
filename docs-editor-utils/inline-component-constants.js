// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$0' to 'componentType'
// - Renamed export 'AJ' to 'configLimit'
// - Renamed export 'II' to 'containerClass'
// - Renamed export 'O1' to 'mentionTypes'
// - Renamed export 'a$' to 'platformEnum'
// - Renamed export 'kO' to 'contentStatus'
// - Renamed export 'u7' to 'actionTypes'
// - Renamed export 'w$' to 'permissionStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 427890
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var c;
  var u;
  let a = "inline-component";
  let s = "at-user-embed-container";
  (o = {}).USER = "user";
  o.REMINDER = "reminder";
  o.DOC = "mention_doc";
  o.URL = "url_preview";
  o.FILE = "file";
  o.BUTTON = "button";
  let d = o;
  (i = {})[i.READABLE = 1] = "READABLE";
  i[i.UNREADABLE_ALLOW_APPLY = 2] = "UNREADABLE_ALLOW_APPLY";
  i[i.UNREADABLE_NOT_ALLOW_APPLY = 3] = "UNREADABLE_NOT_ALLOW_APPLY";
  i[i.NETWORK_ERROR = 4] = "NETWORK_ERROR";
  i[i.LOADING = 5] = "LOADING";
  i[i.NOT_EXIST = 6] = "NOT_EXIST";
  let f = i;
  (l = {})[l.ALLOW = 0] = "ALLOW";
  l[l.NO_PERMISSION = 1] = "NO_PERMISSION";
  l[l.NETWORK_ERROR = 2] = "NETWORK_ERROR";
  l[l.NOT_EXIST = 3] = "NOT_EXIST";
  let h = l;
  (c = {})[c.MEEGO = 1] = "MEEGO";
  let _ = c;
  (u = {}).Default = "Default";
  u.DuplicatePage = "DuplicatePage";
  u.FollowPage = "FollowPage";
  u.OpenLink = "OpenLink";
  u.OpenDocVerse = "OpenDocVerse";
  let p = u;
  let g = 16;
  require.d(exports, {
    componentType: function () {
      return a;
    },
    configLimit: function () {
      return g;
    },
    containerClass: function () {
      return s;
    },
    mentionTypes: function () {
      return d;
    },
    platformEnum: function () {
      return _;
    },
    contentStatus: function () {
      return f;
    },
    actionTypes: function () {
      return p;
    },
    permissionStatus: function () {
      return h;
    }
  });
}