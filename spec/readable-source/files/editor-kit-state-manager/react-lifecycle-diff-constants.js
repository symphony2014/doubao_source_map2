// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A5' to 'LifecycleEvents'
// - Renamed export 'Gm' to 'markPrefix'
// - Renamed export 'T6' to 'invisibleSep'
// - Renamed export 'Uu' to 'DiffOperations'
// - Renamed export 'rC' to 'defaultSeparator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 971280
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  var a;
  var s;
  var l;
  var u = "​";
  (r = a ||= {}).ATTACH_REF = "ATTACH_REF";
  r.DETACH_REF = "DETACH_REF";
  r.DID_MOUNT = "DID_MOUNT";
  r.DID_UPDATE = "DID_UPDATE";
  r.WILL_UNMOUNT = "WILL_UNMOUNT";
  r.REACT_IN_X_FORCE_UPDATE = "REACT_IN_X_FORCE_UPDATE";
  var c = "M-";
  var f = "-";
  (i = s ||= {})[i.EQUAL = 0] = "EQUAL";
  i[i.UNEQUAL = 1] = "UNEQUAL";
  i[i.UPDATE = 2] = "UPDATE";
  (o = l ||= {})[o.ZONE = 0] = "ZONE";
  o[o.LINE_UPDATE = 1] = "LINE_UPDATE";
  o[o.LINE_CONSTANT = 2] = "LINE_CONSTANT";
  o[o.LINE_INSERT = 3] = "LINE_INSERT";
  o[o.LINE_DELETE = 4] = "LINE_DELETE";
  o[o.LEAF_UPDATE = 5] = "LEAF_UPDATE";
  o[o.LEAF_CONSTANT = 6] = "LEAF_CONSTANT";
  o[o.LEAF_INSERT = 7] = "LEAF_INSERT";
  o[o.LEAF_DELETE = 8] = "LEAF_DELETE";
  require.d(exports, {
    LifecycleEvents: function () {
      return a;
    },
    markPrefix: function () {
      return c;
    },
    invisibleSep: function () {
      return u;
    },
    DiffOperations: function () {
      return l;
    },
    defaultSeparator: function () {
      return f;
    }
  });
}