// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(658610) to 'mathjax-tex-parser'
// - Renamed variable 'n' to 'mathjaxBaseConfiguration'
// - Resolved require(929941) to 'mathjax-base-configuration'
// - Renamed variable 'o' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 79346
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
  var T = r(require("mathjax-tex-parser") /*id: 658610*/);
  var mathjaxBaseConfiguration = require("mathjax-base-configuration") /*id: 929941*/;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var i = r(require("mathml-abstract-node-util") /*id: 352636*/);
  var a = {};
  a.CD = function (t, e) {
    t.Push(e);
    var Q = t.itemFactory.create("array");
    var r = t.configuration.options.amscd;
    Q.setProperties({
      minw: t.stack.env.CD_minw || r.harrowsize,
      minh: t.stack.env.CD_minh || r.varrowsize
    });
    Q.arraydef = {
      columnalign: "center",
      columnspacing: r.colspace,
      rowspacing: r.rowspace,
      displaystyle: true
    };
    return Q;
  };
  a.arrow = function (t, e) {
    var Q;
    var r = t.string.charAt(t.i);
    if (!r.match(/[><VA.|=]/)) {
      return mathjaxBaseConfiguration.Other(t, e);
    }
    t.i++;
    var u = t.stack.Top();
    if (!u.isKind("array") || u.Size()) {
      a.cell(t, e);
      u = t.stack.Top();
    }
    var s = u;
    var l = s.table.length % 2 == 1;
    var c = (s.row.length + +!l) % 2;
    while (c) {
      a.cell(t, e);
      c--;
    }
    var p = {
      minsize: s.getProperty("minw"),
      stretchy: true
    };
    var h = {
      minsize: s.getProperty("minh"),
      stretchy: true,
      symmetric: true,
      lspace: 0,
      rspace: 0
    };
    if (r === ".") ;else if (r === "|") {
      Q = t.create("token", "mo", h, "∥");
    } else if (r === "=") {
      Q = t.create("token", "mo", p, "=");
    } else {
      var f = {
        ">": "→",
        "<": "←",
        V: "↓",
        A: "↑"
      }[r];
      var d = t.GetUpTo(e + r, r);
      var D = t.GetUpTo(e + r, r);
      if (r === ">" || r === "<") {
        Q = t.create("token", "mo", p, f);
        d ||= "\\kern " + s.getProperty("minw");
        if (d || D) {
          var L = {
            width: "+.67em",
            lspace: ".33em"
          };
          Q = t.create("node", "munderover", [Q]);
          if (d) {
            var m = new T.default(d, t.stack.env, t.configuration).mml();
            var y = t.create("node", "mpadded", [m], L);
            i.default.setAttribute(y, "voffset", ".1em");
            i.default.setChild(Q, Q.over, y);
          }
          if (D) {
            var H = new T.default(D, t.stack.env, t.configuration).mml();
            i.default.setChild(Q, Q.under, t.create("node", "mpadded", [H], L));
          }
          if (t.configuration.options.amscd.hideHorizontalLabels) {
            Q = t.create("node", "mpadded", Q, {
              depth: 0,
              height: ".67em"
            });
          }
        }
      } else {
        var v = t.create("token", "mo", h, f);
        Q = v;
        if (d || D) {
          Q = t.create("node", "mrow");
          if (d) {
            i.default.appendChildren(Q, [new T.default("\\scriptstyle\\llap{" + d + "}", t.stack.env, t.configuration).mml()]);
          }
          v.texClass = mathmlAbstractNodeClasses.TEXCLASS.ORD;
          i.default.appendChildren(Q, [v]);
          if (D) {
            i.default.appendChildren(Q, [new T.default("\\scriptstyle\\rlap{" + D + "}", t.stack.env, t.configuration).mml()]);
          }
        }
      }
    }
    if (Q) {
      t.Push(Q);
    }
    a.cell(t, e);
  };
  a.cell = function (t, e) {
    var Q = t.stack.Top();
    if ((Q.table || []).length % 2 == 0 && (Q.row || []).length === 0) {
      t.Push(t.create("node", "mpadded", [], {
        height: "8.5pt",
        depth: "2pt"
      }));
    }
    t.Push(t.itemFactory.create("cell").setProperties({
      isEntry: true,
      name: e
    }));
  };
  a.minCDarrowwidth = function (t, e) {
    t.stack.env.CD_minw = t.GetDimen(e);
  };
  a.minCDarrowheight = function (t, e) {
    t.stack.env.CD_minh = t.GetDimen(e);
  };
  exports.default = a;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}