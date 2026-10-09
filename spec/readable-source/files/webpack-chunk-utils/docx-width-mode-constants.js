// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C2' to 'attrNames'
// - Renamed export 'Mb' to 'widthDescriptions'
// - Renamed export 'aB' to 'widthValues'
// - Renamed export 'bC' to 'sizeModes'
// - Renamed export 'cr' to 'widthModeKeys'
// - Renamed export 'fe' to 'widthClassNames'
// - Renamed export 'lc' to 'statusModes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 194078
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var a;
  (i = {}).FULL = "full";
  i.LARGE = "large";
  i.STANDARD = "standard";
  i.NONE = "NONE";
  i.UNKNOWN = "UNKNOWN";
  let u = i;
  let c = {
    [u.LARGE]: 1020,
    [u.STANDARD]: 820
  };
  let _ = {
    [u.STANDARD]: "docx-width-mode-standard",
    [u.LARGE]: "docx-width-mode-large",
    [u.FULL]: "docx-width-mode-full"
  };
  (o = {}).CLOSE = "close";
  o.OPEN = "open";
  o.NONE = "NONE";
  o.UNKNOWN = "UNKNOWN";
  let l = o;
  (a = {}).WIDTH_MODE = "width_mode";
  a.CATALOGUE_STATUS = "catalogue_status";
  a.HAS_UNFINISHED_COMMENT = "has_unfinished_comment";
  let s = a;
  let E = {
    [u.FULL]: "full_width",
    [u.LARGE]: "wider_width",
    [u.STANDARD]: "standard_width"
  };
  let d = [s.WIDTH_MODE];
  require.d(exports, {
    attrNames: function () {
      return s;
    },
    widthDescriptions: function () {
      return E;
    },
    widthValues: function () {
      return c;
    },
    sizeModes: function () {
      return u;
    },
    widthModeKeys: function () {
      return d;
    },
    widthClassNames: function () {
      return _;
    },
    statusModes: function () {
      return l;
    }
  });
}