// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ee' to 'fileActions'
// - Renamed export 'KN' to 'visibilityTypes'
// - Renamed export 'ND' to 'permissionTypes'
// - Renamed export 'RQ' to 'userRoles'
// - Renamed export 'U1' to 'spaceTypes'
// - Renamed export 'hF' to 'fileExtensions'
// - Renamed export 'jc' to 'entityTypes'
// - Renamed export 'kN' to 'fileTypes'
// - Renamed export 'qn' to 'accessLevels'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx-export-popover.ab82113b.js
         * chunkId: 65132
         * moduleId: 890549
         */
module.exports = function (module, exports, require) {
  var t;
  var r;
  var i;
  var a;
  var c;
  var l;
  var d;
  var _;
  var u;
  (t = {})[t.FOLDER = 0] = "FOLDER";
  t[t.DOC = 2] = "DOC";
  t[t.SHEET = 3] = "SHEET";
  t[t.SHARE_FOLDER = 6] = "SHARE_FOLDER";
  t[t.SHARE_FOLDER_LINK = 7] = "SHARE_FOLDER_LINK";
  t[t.BITABLE = 8] = "BITABLE";
  t[t.RECORD = 81] = "RECORD";
  t[t.BASE_ADD = 84] = "BASE_ADD";
  t[t.MINDNOTE = 11] = "MINDNOTE";
  t[t.FILE = 12] = "FILE";
  t[t.WIKI = 16] = "WIKI";
  t[t.ISV = 20] = "ISV";
  t[t.DOCX = 22] = "DOCX";
  t[t.SYNCED = 44] = "SYNCED";
  t[t.SLIDES = 30] = "SLIDES";
  t[t.WHITEBOARD = 38] = "WHITEBOARD";
  t[t.BY_TEMPLATE = 101] = "BY_TEMPLATE";
  t[t.CATALOG = 111] = "CATALOG";
  var s = t;
  (r = {}).DOC = "docx";
  r.PDF = "pdf";
  r.PPTX = "pptx";
  r.MARKDOWN = "md";
  var E = r;
  (i = {}).Space = "1";
  i.Wiki = "6";
  i.Doubao = "41";
  var D = i;
  (a = {})[a.visitor = 1] = "visitor";
  a[a.member = 2] = "member";
  a[a.manager = 3] = "manager";
  var A = a;
  (c = {})[c.update = 2] = "update";
  c[c.reset = 3] = "reset";
  c[c.close = 4] = "close";
  var p = c;
  (l = {})[l.user = 0] = "user";
  l[l.group = 2] = "group";
  var w = l;
  (d = {})[d.visible = 0] = "visible";
  d[d.hidden = 2] = "hidden";
  var f = d;
  (_ = {})[_.read = 1] = "read";
  _[_.edit = 4] = "edit";
  _[_.manage = 1024] = "manage";
  var N = _;
  (u = {})[u.PRIVATE = 1] = "PRIVATE";
  u[u.READABLE = 2] = "READABLE";
  u[u.EDITABLE = 3] = "EDITABLE";
  u[u.ANYONE_READABLE = 4] = "ANYONE_READABLE";
  u[u.ANYONE_EDITABLE = 5] = "ANYONE_EDITABLE";
  u[u.PARTNER_TENANT_VIEWABLE = 6] = "PARTNER_TENANT_VIEWABLE";
  u[u.PARTNER_TENANT_EDITABLE = 7] = "PARTNER_TENANT_EDITABLE";
  var T = u;
  require.d(exports, {
    fileActions: function () {
      return p;
    },
    visibilityTypes: function () {
      return f;
    },
    permissionTypes: function () {
      return N;
    },
    userRoles: function () {
      return A;
    },
    spaceTypes: function () {
      return D;
    },
    fileExtensions: function () {
      return E;
    },
    entityTypes: function () {
      return w;
    },
    fileTypes: function () {
      return s;
    },
    accessLevels: function () {
      return T;
    }
  });
}