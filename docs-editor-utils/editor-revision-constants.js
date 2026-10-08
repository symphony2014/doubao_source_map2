// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ee' to 'revisionIdPrefix'
// - Renamed export 'FJ' to 'reviewActionTypes'
// - Renamed export 'Fh' to 'sequenceLevels'
// - Renamed export 'H$' to 'revisionIdString'
// - Renamed export 'J$' to 'diffTypeToLowerMap'
// - Renamed export 'Lg' to 'diffTypeToUpperMap'
// - Renamed export 'U1' to 'mentionTypeMap'
// - Renamed export 'Wj' to 'revisionHlPrefix'
// - Renamed export 'gd' to 'diffOperationMap'
// - Renamed export 'lL' to 'replaceOpTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 835842
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var c;
  var clientsidePrefixConstant = require("clientside-prefix-constant") /*id: 888035*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  let s = "revision-id-";
  let d = `${clientsidePrefixConstant.clientsidePrefix}${s}`;
  let f = `${clientsidePrefixConstant.clientsidePrefix}revision-hl`;
  (o = {}).ADD = "add";
  o.DELETE = "delete";
  o.REPLACE = "replace";
  o.FORMAT = "format";
  let h = o;
  (i = {}).ADD = "ADD";
  i.DELETE = "DEL";
  i.REPLACE = "REPLACE";
  i.FORMAT = "FORMAT";
  let _ = i;
  let p = {
    [h.ADD]: _.ADD,
    [h.DELETE]: _.DELETE,
    [h.REPLACE]: _.REPLACE,
    [h.FORMAT]: _.FORMAT
  };
  let g = {
    [_.ADD]: h.ADD,
    [_.DELETE]: h.DELETE,
    [_.REPLACE]: h.REPLACE,
    [_.FORMAT]: h.FORMAT
  };
  (l = {}).REPLACE_ADD = "replace_add";
  l.REPLACE_DELETE = "replace_delete";
  let E = l;
  (c = {}).ACCEPT = "accept";
  c.REJECT = "reject";
  c.DELETE = "delete";
  let m = c;
  let b = {
    [inlineComponentConstants.mentionTypes.USER]: "user",
    [inlineComponentConstants.mentionTypes.DOC]: "suite"
  };
  let v = ["seq_level"];
  require.d(exports, {
    revisionIdPrefix: function () {
      return d;
    },
    reviewActionTypes: function () {
      return m;
    },
    sequenceLevels: function () {
      return v;
    },
    revisionIdString: function () {
      return s;
    },
    diffTypeToLowerMap: function () {
      return g;
    },
    diffTypeToUpperMap: function () {
      return p;
    },
    mentionTypeMap: function () {
      return b;
    },
    revisionHlPrefix: function () {
      return f;
    },
    diffOperationMap: function () {
      return h;
    },
    replaceOpTypes: function () {
      return E;
    }
  });
}