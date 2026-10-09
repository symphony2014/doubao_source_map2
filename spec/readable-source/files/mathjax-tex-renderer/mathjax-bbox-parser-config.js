// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'n' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(342117) to 'message-format-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 806931
         */
module.exports = function (module, exports, require) {
  var r = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.BboxConfiguration = exports.BboxMethods = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var o = r(require("message-format-util") /*id: 342117*/);
  exports.BboxMethods = {};
  exports.BboxMethods.BBox = function (t, e) {
    var Q;
    var r;
    var T;
    var n = t.GetBrackets(e, "");
    var u = t.ParseArg(e);
    var s = n.split(/,/);
    var l = 0;
    var c = s.length;
    for (; l < c; l++) {
      var p = s[l].trim();
      var h = p.match(/^(\.\d+|\d+(\.\d*)?)(pt|em|ex|mu|px|in|cm|mm)$/);
      if (h) {
        if (Q) {
          throw new o.default("MultipleBBoxProperty", "%1 specified twice in %2", "Padding", e);
        }
        var f = a(h[1] + h[3]);
        if (f) {
          Q = {
            height: "+" + f,
            depth: "+" + f,
            lspace: f,
            width: "+" + parseInt(h[1], 10) * 2 + h[3]
          };
        }
      } else if (p.match(/^([a-z0-9]+|\#[0-9a-f]{6}|\#[0-9a-f]{3})$/i)) {
        if (r) {
          throw new o.default("MultipleBBoxProperty", "%1 specified twice in %2", "Background", e);
        }
        r = p;
      } else if (p.match(/^[-a-z]+:/i)) {
        if (T) {
          throw new o.default("MultipleBBoxProperty", "%1 specified twice in %2", "Style", e);
        }
        T = i(p);
      } else if (p !== "") {
        throw new o.default("InvalidBBoxProperty", "\"%1\" doesn't look like a color, a padding dimension, or a style", p);
      }
    }
    if (Q) {
      u = t.create("node", "mpadded", [u], Q);
    }
    if (r || T) {
      Q = {};
      if (r) {
        Object.assign(Q, {
          mathbackground: r
        });
      }
      if (T) {
        Object.assign(Q, {
          style: T
        });
      }
      u = t.create("node", "mstyle", [u], Q);
    }
    t.Push(u);
  };
  function i(t) {
    return t;
  }
  function a(t) {
    return t;
  }
  new symbolParseMaps.CommandMap("bbox", {
    bbox: "BBox"
  }, exports.BboxMethods);
  exports.BboxConfiguration = mathjaxParserConfiguration.Configuration.create("bbox", {
    handler: {
      macro: ["bbox"]
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}