// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'anchorSymbol'
// - Renamed export 'BG' to 'zeroSpaceSymbol'
// - Renamed export 'Br' to 'breakSymbol'
// - Renamed export 'D_' to 'elementTagMap'
// - Renamed export 'HY' to 'fragmentSymbol'
// - Renamed export 'Li' to 'listItemSymbol'
// - Renamed export 'Nh' to 'elementTypeSymbol'
// - Renamed export 'Ol' to 'orderedListSymbol'
// - Renamed export 'Ul' to 'unorderedListSymbol'
// - Renamed export 'ZC' to 'divSymbol'
// - Renamed export 'xv' to 'textSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 972519
         */
module.exports = function (module, exports, require) {
  var r;
  var i = Symbol.for("x.fragment");
  var o = Symbol.for("x.div");
  var a = Symbol.for("x.text");
  var s = Symbol.for("x.zero_space");
  var l = Symbol.for("x.ul");
  var u = Symbol.for("x.ol");
  var c = Symbol.for("x.li");
  var f = Symbol.for("x.a");
  var d = Symbol.for("x.br");
  var h = Symbol.for("x_element_type");
  (r = {})[o] = "div";
  r[a] = "span";
  r[s] = "span";
  r[l] = "ul";
  r[u] = "ol";
  r[c] = "li";
  r[f] = "a";
  r[d] = "br";
  var p = r;
  require.d(exports, {
    anchorSymbol: function () {
      return f;
    },
    zeroSpaceSymbol: function () {
      return s;
    },
    breakSymbol: function () {
      return d;
    },
    elementTagMap: function () {
      return p;
    },
    fragmentSymbol: function () {
      return i;
    },
    listItemSymbol: function () {
      return c;
    },
    elementTypeSymbol: function () {
      return h;
    },
    orderedListSymbol: function () {
      return u;
    },
    unorderedListSymbol: function () {
      return l;
    },
    divSymbol: function () {
      return o;
    },
    textSymbol: function () {
      return a;
    }
  });
}