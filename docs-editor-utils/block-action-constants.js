// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$o' to 'blockActionTypes'
// - Renamed export 'Tk' to 'clientVarTypes'
// - Renamed export 'y$' to 'cacheOpListKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 699900
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  (o = {}).INIT = "INIT";
  o.ACCEPT_COMMIT = "ACCEPT_COMMIT";
  o.NEW_CHANGES = "NEW_CHANGES";
  o.ADD_BLOCK_DATA = "ADD_BLOCK_DATA";
  o.VERSION_CHANGE = "VERSION_CHANGE";
  o.MENTION_DOC_CHANGE = "MENTION_DOC_CHANGE";
  o.MENTION_USER_CHANGE = "MENTION_USER_CHANGE";
  o.EDITTIME_CHANGE = "EDITTIME_CHANGE";
  o.DESTROY = "DESTROY";
  let l = o;
  let c = "cache-op-list";
  (i = {}).LOCAL_CLIENT_VARS = "LOCAL_CLIENT_VARS";
  i.CLIENT_VARS = "CLIENT_VARS";
  i.CLIENT_VARS_OP = "CLIENT_VARS_OP";
  let u = i;
  require.d(exports, {
    blockActionTypes: function () {
      return l;
    },
    clientVarTypes: function () {
      return u;
    },
    cacheOpListKey: function () {
      return c;
    }
  });
}