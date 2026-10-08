// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(342117) to 'message-format-util'
// - Resolved require(658610) to 'mathjax-tex-parser'
// - Resolved require(142412) to 'mathjax-utilities'
// - Resolved require(526347) to 'bussproofs-mathml-layout-balancer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 263761
         */
module.exports = function (module, exports, require) {
  var r = this && this.__createBinding || (Object.create ? function (t, e, Q, r = Q) {
    var T = Object.getOwnPropertyDescriptor(e, Q);
    if (!T || ("get" in T ? !e.__esModule : T.writable || T.configurable)) {
      T = {
        enumerable: true,
        get: function () {
          return e[Q];
        }
      };
    }
    Object.defineProperty(t, r, T);
  } : function (t, e, Q, r = Q) {
    t[r] = e[Q];
  });
  var T = this && this.__setModuleDefault || (Object.create ? function (t, e) {
    Object.defineProperty(t, "default", {
      enumerable: true,
      value: e
    });
  } : function (t, e) {
    t.default = e;
  });
  var n = this && this.__importStar || function (t) {
    if (t && t.__esModule) {
      return t;
    }
    var e = {};
    if (t != null) {
      for (var Q in t) {
        if (Q !== "default" && Object.prototype.hasOwnProperty.call(t, Q)) {
          r(e, t, Q);
        }
      }
    }
    T(e, t);
    return e;
  };
  var o = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  var i = this && this.__spreadArray || function (t, e, Q) {
    if (Q || arguments.length == 2) {
      var r;
      var T = 0;
      var n = e.length;
      for (; T < n; T++) {
        if (!!r || !(T in e)) {
          r ||= Array.prototype.slice.call(e, 0, T);
          r[T] = e[T];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  };
  var a = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  var u = a(require("message-format-util") /*id: 342117*/);
  var s = a(require("mathjax-tex-parser") /*id: 658610*/);
  var l = a(require("mathjax-utilities") /*id: 142412*/);
  var c = n(require("bussproofs-mathml-layout-balancer") /*id: 526347*/);
  var p = {};
  p.Prooftree = function (t, e) {
    t.Push(e);
    return t.itemFactory.create("proofTree").setProperties({
      name: e.getName(),
      line: "solid",
      currentLine: "solid",
      rootAtTop: false
    });
  };
  p.Axiom = function (t, e) {
    var Q = t.stack.Top();
    if (Q.kind !== "proofTree") {
      throw new u.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
    }
    var r = h(t, t.GetArgument(e));
    c.setProperty(r, "axiom", true);
    Q.Push(r);
  };
  function h(t, e) {
    var Q = l.default.internalMath(t, l.default.trimSpaces(e), 0);
    if (!Q[0].childNodes[0].childNodes.length) {
      return t.create("node", "mrow", []);
    }
    var r = t.create("node", "mspace", [], {
      width: ".5ex"
    });
    var T = t.create("node", "mspace", [], {
      width: ".5ex"
    });
    return t.create("node", "mrow", i(i([r], o(Q), false), [T], false));
  }
  function f(t, e, Q, r, T, n, o) {
    var i;
    var a;
    var u;
    var s;
    var l = t.create("node", "mtr", [t.create("node", "mtd", [e], {})], {});
    var p = t.create("node", "mtr", [t.create("node", "mtd", Q, {})], {});
    var h = t.create("node", "mtable", o ? [p, l] : [l, p], {
      align: "top 2",
      rowlines: n,
      framespacing: "0 0"
    });
    c.setProperty(h, "inferenceRule", o ? "up" : "down");
    if (r) {
      i = t.create("node", "mpadded", [r], {
        height: "+.5em",
        width: "+.5em",
        voffset: "-.15em"
      });
      c.setProperty(i, "prooflabel", "left");
    }
    if (T) {
      a = t.create("node", "mpadded", [T], {
        height: "+.5em",
        width: "+.5em",
        voffset: "-.15em"
      });
      c.setProperty(a, "prooflabel", "right");
    }
    if (r && T) {
      u = [i, h, a];
      s = "both";
    } else if (r) {
      u = [i, h];
      s = "left";
    } else {
      if (!T) {
        return h;
      }
      u = [h, a];
      s = "right";
    }
    h = t.create("node", "mrow", u);
    c.setProperty(h, "labelledRule", s);
    return h;
  }
  function d(t, e) {
    if (t.GetNext() !== "$") {
      throw new u.default("IllegalUseOfCommand", "Use of %1 does not match it's definition.", e);
    }
    t.i++;
    var Q = t.GetUpTo(e, "$");
    if (Q.indexOf("\\fCenter") === -1) {
      throw new u.default("IllegalUseOfCommand", "Missing \\fCenter in %1.", e);
    }
    var r = o(Q.split("\\fCenter"), 2);
    var T = r[0];
    var n = r[1];
    var i = new s.default(T, t.stack.env, t.configuration).mml();
    var a = new s.default(n, t.stack.env, t.configuration).mml();
    var l = new s.default("\\fCenter", t.stack.env, t.configuration).mml();
    var p = t.create("node", "mtd", [i], {});
    var h = t.create("node", "mtd", [l], {});
    var f = t.create("node", "mtd", [a], {});
    var d = t.create("node", "mtr", [p, h, f], {});
    var D = t.create("node", "mtable", [d], {
      columnspacing: ".5ex",
      columnalign: "center 2"
    });
    c.setProperty(D, "sequent", true);
    t.configuration.addNode("sequent", d);
    return D;
  }
  p.Inference = function (t, e, Q) {
    var r = t.stack.Top();
    if (r.kind !== "proofTree") {
      throw new u.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
    }
    if (r.Size() < Q) {
      throw new u.default("BadProofTree", "Proof tree badly specified.");
    }
    var T = r.getProperty("rootAtTop");
    var n = Q !== 1 || r.Peek()[0].childNodes.length ? Q : 0;
    var o = [];
    do {
      if (o.length) {
        o.unshift(t.create("node", "mtd", [], {}));
      }
      o.unshift(t.create("node", "mtd", [r.Pop()], {
        rowalign: T ? "top" : "bottom"
      }));
      Q--;
    } while (Q > 0);
    var i = t.create("node", "mtr", o, {});
    var a = t.create("node", "mtable", [i], {
      framespacing: "0 0"
    });
    var s = h(t, t.GetArgument(e));
    var l = r.getProperty("currentLine");
    if (l !== r.getProperty("line")) {
      r.setProperty("currentLine", r.getProperty("line"));
    }
    var p = f(t, a, [s], r.getProperty("left"), r.getProperty("right"), l, T);
    r.setProperty("left", null);
    r.setProperty("right", null);
    c.setProperty(p, "inference", n);
    t.configuration.addNode("inference", p);
    r.Push(p);
  };
  p.Label = function (t, e, Q) {
    var r = t.stack.Top();
    if (r.kind !== "proofTree") {
      throw new u.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
    }
    var T = l.default.internalMath(t, t.GetArgument(e), 0);
    var n = T.length > 1 ? t.create("node", "mrow", T, {}) : T[0];
    r.setProperty(Q, n);
  };
  p.SetLine = function (t, e, Q, r) {
    var T = t.stack.Top();
    if (T.kind !== "proofTree") {
      throw new u.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
    }
    T.setProperty("currentLine", Q);
    if (r) {
      T.setProperty("line", Q);
    }
  };
  p.RootAtTop = function (t, e, Q) {
    var r = t.stack.Top();
    if (r.kind !== "proofTree") {
      throw new u.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
    }
    r.setProperty("rootAtTop", Q);
  };
  p.AxiomF = function (t, e) {
    var Q = t.stack.Top();
    if (Q.kind !== "proofTree") {
      throw new u.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
    }
    var r = d(t, e);
    c.setProperty(r, "axiom", true);
    Q.Push(r);
  };
  p.FCenter = function (t, e) {};
  p.InferenceF = function (t, e, Q) {
    var r = t.stack.Top();
    if (r.kind !== "proofTree") {
      throw new u.default("IllegalProofCommand", "Proof commands only allowed in prooftree environment.");
    }
    if (r.Size() < Q) {
      throw new u.default("BadProofTree", "Proof tree badly specified.");
    }
    var T = r.getProperty("rootAtTop");
    var n = Q !== 1 || r.Peek()[0].childNodes.length ? Q : 0;
    var o = [];
    do {
      if (o.length) {
        o.unshift(t.create("node", "mtd", [], {}));
      }
      o.unshift(t.create("node", "mtd", [r.Pop()], {
        rowalign: T ? "top" : "bottom"
      }));
      Q--;
    } while (Q > 0);
    var i = t.create("node", "mtr", o, {});
    var a = t.create("node", "mtable", [i], {
      framespacing: "0 0"
    });
    var s = d(t, e);
    var l = r.getProperty("currentLine");
    if (l !== r.getProperty("line")) {
      r.setProperty("currentLine", r.getProperty("line"));
    }
    var p = f(t, a, [s], r.getProperty("left"), r.getProperty("right"), l, T);
    r.setProperty("left", null);
    r.setProperty("right", null);
    c.setProperty(p, "inference", n);
    t.configuration.addNode("inference", p);
    r.Push(p);
  };
  exports.default = p;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}