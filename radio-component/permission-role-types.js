// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'PermissionTypes'
// - Renamed export 'u' to 'UserRoles'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 992343
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  (i = {})[i.View = 1] = "View";
  i[i.Edit = 2] = "Edit";
  i[i.Comment = 3] = "Comment";
  i[i.Export = 4] = "Export";
  i[i.Copy = 5] = "Copy";
  i[i.Duplicate = 6] = "Duplicate";
  i[i.Transfer = 7] = "Transfer";
  i[i.Manage = 8] = "Manage";
  i[i.ViewHistory = 9] = "ViewHistory";
  i[i.Delete = 10] = "Delete";
  let a = i;
  (o = {})[o.None = 0] = "None";
  o[o.Viewer = 1] = "Viewer";
  o[o.Editor = 2] = "Editor";
  o[o.Manager = 3] = "Manager";
  o[o.Owner = 4] = "Owner";
  o[o.Reviewer = 5] = "Reviewer";
  let u = o;
  require.d(exports, {
    PermissionTypes: function () {
      return a;
    },
    UserRoles: function () {
      return u;
    }
  });
}