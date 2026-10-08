// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Gd' to 'ActionTypes'
// - Renamed export 'Q6' to 'EditActions'
// - Renamed export 'QS' to 'SyncStatus'
// - Renamed export 'wR' to 'ChangeTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 41369
         */
module.exports = function (module, exports, require) {
  var o;
  var n;
  var l;
  var s;
  (o = {}).modify = "modify";
  o.add = "add";
  o.remove = "remove";
  let a = o;
  (n = {}).modify = "modify";
  n.add = "add";
  n.remove = "remove";
  let c = n;
  (l = {})[l.UnKnow = -1] = "UnKnow";
  l[l.Add = 0] = "Add";
  l[l.TextChange = 1] = "TextChange";
  l[l.InsertNode = 2] = "InsertNode";
  l[l.DeleteNode = 3] = "DeleteNode";
  l[l.InitNode = 4] = "InitNode";
  l[l.InsertChildNode = 5] = "InsertChildNode";
  l[l.InsertChildrenNodes = 6] = "InsertChildrenNodes";
  l[l.NormalPropertyChange = 7] = "NormalPropertyChange";
  l[l.ComplexPropertyChange = 8] = "ComplexPropertyChange";
  l[l.ListChange = 9] = "ListChange";
  let d = l;
  (s = {}).NO_DATA = "NO_DATA";
  s.OFFLINE = "OFFLINE";
  s.FAILED = "FAILED";
  s.NO_SECRET = "NO_SECRET";
  let u = s;
  require.d(exports, {
    ActionTypes: function () {
      return c;
    },
    EditActions: function () {
      return a;
    },
    SyncStatus: function () {
      return u;
    },
    ChangeTypes: function () {
      return d;
    }
  });
}