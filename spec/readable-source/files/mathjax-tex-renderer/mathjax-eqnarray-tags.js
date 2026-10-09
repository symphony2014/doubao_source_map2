// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'priorityHandlerConfig'
// - Resolved require(706684) to 'priority-handler-config'
// - Renamed variable 'u' to 'mathjaxEntitiesUtil'
// - Resolved require(22642) to 'mathjax-entities-util'
// - Renamed variable 's' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Resolved require(342117) to 'message-format-util'
// - Resolved require(142412) to 'mathjax-utilities'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Renamed variable 'h' to 'mmlStackItemClasses'
// - Resolved require(174186) to 'mml-stack-item-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 962632
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__extends || (r = function (t, e) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var Q in e) {
        if (Object.prototype.hasOwnProperty.call(e, Q)) {
          t[Q] = e[Q];
        }
      }
    })(t, e);
  }, function (t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function Q() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (Q.prototype = e.prototype, new Q());
  });
  var n = this && this.__read || function (t, e) {
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
  var o = this && this.__spreadArray || function (t, e, Q) {
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
  var i = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.EquationItem = exports.EqnArrayItem = exports.ArrayItem = exports.DotsItem = exports.NonscriptItem = exports.NotItem = exports.FnItem = exports.MmlItem = exports.CellItem = exports.PositionItem = exports.StyleItem = exports.EndItem = exports.BeginItem = exports.RightItem = exports.Middle = exports.LeftItem = exports.OverItem = exports.SubsupItem = exports.PrimeItem = exports.CloseItem = exports.OpenItem = exports.StopItem = exports.StartItem = undefined;
  var priorityHandlerConfig = require("priority-handler-config") /*id: 706684*/;
  var mathjaxEntitiesUtil = require("mathjax-entities-util") /*id: 22642*/;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var l = i(require("message-format-util") /*id: 342117*/);
  var c = i(require("mathjax-utilities") /*id: 142412*/);
  var p = i(require("mathml-abstract-node-util") /*id: 352636*/);
  var mmlStackItemClasses = require("mml-stack-item-classes") /*id: 174186*/;
  var f = function (t) {
    function e(e, Q) {
      var r = t.call(this, e) || this;
      r.global = Q;
      return r;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "start";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isOpen", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (e) {
      if (e.isKind("stop")) {
        var Q = this.toMml();
        if (!this.global.isInner) {
          Q = this.factory.configuration.tags.finalize(Q, this.env);
        }
        return [[this.factory.create("mml", Q)], true];
      }
      return t.prototype.checkItem.call(this, e);
    };
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.StartItem = f;
  var d = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "stop";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isClose", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.StopItem = d;
  var D = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "open";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isOpen", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (e) {
      if (e.isKind("close")) {
        var Q = this.toMml();
        var r = this.create("node", "TeXAtom", [Q]);
        return [[this.factory.create("mml", r)], true];
      }
      return t.prototype.checkItem.call(this, e);
    };
    e.errors = Object.assign(Object.create(mmlStackItemClasses.BaseItem.errors), {
      stop: ["ExtraOpenMissingClose", "Extra open brace or missing close brace"]
    });
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.OpenItem = D;
  var L = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "close";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isClose", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.CloseItem = L;
  var m = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "prime";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (t) {
      var e = n(this.Peek(2), 2);
      var Q = e[0];
      var r = e[1];
      if (!p.default.isType(Q, "msubsup") || p.default.isType(Q, "msup")) {
        return [[this.create("node", "msup", [Q, r]), t], true];
      } else {
        p.default.setChild(Q, Q.sup, r);
        return [[Q, t], true];
      }
    };
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.PrimeItem = m;
  var y = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "subsup";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (e) {
      if (e.isKind("open") || e.isKind("left")) {
        return mmlStackItemClasses.BaseItem.success;
      }
      var Q = this.First;
      var r = this.getProperty("position");
      if (e.isKind("mml")) {
        if (this.getProperty("primes")) {
          if (r !== 2) {
            p.default.setChild(Q, 2, this.getProperty("primes"));
          } else {
            p.default.setProperty(this.getProperty("primes"), "variantForm", true);
            var T = this.create("node", "mrow", [this.getProperty("primes"), e.First]);
            e.First = T;
          }
        }
        p.default.setChild(Q, r, e.First);
        if (this.getProperty("movesupsub") != null) {
          p.default.setProperty(Q, "movesupsub", this.getProperty("movesupsub"));
        }
        return [[this.factory.create("mml", Q)], true];
      }
      if (t.prototype.checkItem.call(this, e)[1]) {
        var i = this.getErrors(["", "sub", "sup"][r]);
        throw new (l.default.bind.apply(l.default, o([undefined, i[0], i[1]], n(i.splice(2)), false)))();
      }
      return null;
    };
    e.errors = Object.assign(Object.create(mmlStackItemClasses.BaseItem.errors), {
      stop: ["MissingScript", "Missing superscript or subscript argument"],
      sup: ["MissingOpenForSup", "Missing open brace for superscript"],
      sub: ["MissingOpenForSub", "Missing open brace for subscript"]
    });
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.SubsupItem = y;
  var H = function (t) {
    function e(e) {
      var Q = t.call(this, e) || this;
      Q.setProperty("name", "\\over");
      return Q;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "over";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isClose", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (e) {
      if (e.isKind("over")) {
        throw new l.default("AmbiguousUseOf", "Ambiguous use of %1", e.getName());
      }
      if (e.isClose) {
        var Q = this.create("node", "mfrac", [this.getProperty("num"), this.toMml(false)]);
        if (this.getProperty("thickness") != null) {
          p.default.setAttribute(Q, "linethickness", this.getProperty("thickness"));
        }
        if (this.getProperty("open") || this.getProperty("close")) {
          p.default.setProperty(Q, "withDelims", true);
          Q = c.default.fixedFence(this.factory.configuration, this.getProperty("open"), Q, this.getProperty("close"));
        }
        return [[this.factory.create("mml", Q), e], true];
      }
      return t.prototype.checkItem.call(this, e);
    };
    e.prototype.toString = function () {
      return "over[" + this.getProperty("num") + " / " + this.nodes.join("; ") + "]";
    };
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.OverItem = H;
  var v = function (t) {
    function e(e, Q) {
      var r = t.call(this, e) || this;
      r.setProperty("delim", Q);
      return r;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "left";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isOpen", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (e) {
      if (e.isKind("right")) {
        return [[this.factory.create("mml", c.default.fenced(this.factory.configuration, this.getProperty("delim"), this.toMml(), e.getProperty("delim"), "", e.getProperty("color")))], true];
      }
      if (e.isKind("middle")) {
        var Q = {
          stretchy: true
        };
        if (e.getProperty("color")) {
          Q.mathcolor = e.getProperty("color");
        }
        this.Push(this.create("node", "TeXAtom", [], {
          texClass: mathmlAbstractNodeClasses.TEXCLASS.CLOSE
        }), this.create("token", "mo", Q, e.getProperty("delim")), this.create("node", "TeXAtom", [], {
          texClass: mathmlAbstractNodeClasses.TEXCLASS.OPEN
        }));
        this.env = {};
        return [[this], true];
      }
      return t.prototype.checkItem.call(this, e);
    };
    e.errors = Object.assign(Object.create(mmlStackItemClasses.BaseItem.errors), {
      stop: ["ExtraLeftMissingRight", "Extra \\left or missing \\right"]
    });
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.LeftItem = v;
  var g = function (t) {
    function e(e, Q, r) {
      var T = t.call(this, e) || this;
      T.setProperty("delim", Q);
      if (r) {
        T.setProperty("color", r);
      }
      return T;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "middle";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isClose", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.Middle = g;
  var b = function (t) {
    function e(e, Q, r) {
      var T = t.call(this, e) || this;
      T.setProperty("delim", Q);
      if (r) {
        T.setProperty("color", r);
      }
      return T;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "right";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isClose", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.RightItem = b;
  var E = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "begin";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isOpen", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (e) {
      if (e.isKind("end")) {
        if (e.getName() !== this.getName()) {
          throw new l.default("EnvBadEnd", "\\begin{%1} ended with \\end{%2}", this.getName(), e.getName());
        }
        if (this.getProperty("end")) {
          return mmlStackItemClasses.BaseItem.fail;
        } else {
          return [[this.factory.create("mml", this.toMml())], true];
        }
      }
      if (e.isKind("stop")) {
        throw new l.default("EnvMissingEnd", "Missing \\end{%1}", this.getName());
      }
      return t.prototype.checkItem.call(this, e);
    };
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.BeginItem = E;
  var C = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "end";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isClose", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.EndItem = C;
  var V = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "style";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (e) {
      if (!e.isClose) {
        return t.prototype.checkItem.call(this, e);
      }
      var Q = this.create("node", "mstyle", this.nodes, this.getProperty("styles"));
      return [[this.factory.create("mml", Q), e], true];
    };
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.StyleItem = V;
  var M = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "position";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (e) {
      if (e.isClose) {
        throw new l.default("MissingBoxFor", "Missing box for %1", this.getName());
      }
      if (e.isFinal) {
        var Q = e.toMml();
        switch (this.getProperty("move")) {
          case "vertical":
            Q = this.create("node", "mpadded", [Q], {
              height: this.getProperty("dh"),
              depth: this.getProperty("dd"),
              voffset: this.getProperty("dh")
            });
            return [[this.factory.create("mml", Q)], true];
          case "horizontal":
            return [[this.factory.create("mml", this.getProperty("left")), e, this.factory.create("mml", this.getProperty("right"))], true];
        }
      }
      return t.prototype.checkItem.call(this, e);
    };
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.PositionItem = M;
  var F = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "cell";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isClose", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.CellItem = F;
  var x = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "isFinal", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "mml";
      },
      enumerable: false,
      configurable: true
    });
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.MmlItem = x;
  var O = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "fn";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (e) {
      var Q = this.First;
      if (Q) {
        if (e.isOpen) {
          return mmlStackItemClasses.BaseItem.success;
        }
        if (!e.isKind("fn")) {
          var r = e.First;
          if (!e.isKind("mml") || !r || p.default.isType(r, "mstyle") && r.childNodes.length && p.default.isType(r.childNodes[0].childNodes[0], "mspace") || p.default.isType(r, "mspace")) {
            return [[Q, e], true];
          }
          if (p.default.isEmbellished(r)) {
            r = p.default.getCoreMO(r);
          }
          var T = p.default.getForm(r);
          if (T != null && [0, 0, 1, 1, 0, 1, 1, 0, 0, 0][T[2]]) {
            return [[Q, e], true];
          }
        }
        return [[Q, this.create("token", "mo", {
          texClass: mathmlAbstractNodeClasses.TEXCLASS.NONE
        }, mathjaxEntitiesUtil.entities.ApplyFunction), e], true];
      }
      return t.prototype.checkItem.apply(this, arguments);
    };
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.FnItem = O;
  var A = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.remap = priorityHandlerConfig.MapHandler.getMap("not_remap");
      return e;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "not";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (t) {
      if (t.isKind("open") || t.isKind("left")) {
        return mmlStackItemClasses.BaseItem.success;
      }
      if (t.isKind("mml") && (p.default.isType(t.First, "mo") || p.default.isType(t.First, "mi") || p.default.isType(t.First, "mtext")) && (e = t.First, (Q = p.default.getText(e)).length === 1 && !p.default.getProperty(e, "movesupsub") && p.default.getChildren(e).length === 1)) {
        if (this.remap.contains(Q)) {
          r = this.create("text", this.remap.lookup(Q).char);
          p.default.setChild(e, 0, r);
        } else {
          r = this.create("text", "̸");
          p.default.appendChildren(e, [r]);
        }
        return [[t], true];
      }
      r = this.create("text", "⧸");
      var e;
      var Q;
      var r;
      var T = this.create("node", "mtext", [], {}, r);
      var n = this.create("node", "mpadded", [T], {
        width: 0
      });
      return [[e = this.create("node", "TeXAtom", [n], {
        texClass: mathmlAbstractNodeClasses.TEXCLASS.REL
      }), t], true];
    };
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.NotItem = A;
  var _ = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "nonscript";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (t) {
      if (t.isKind("mml") && t.Size() === 1) {
        var e = t.First;
        if (e.isKind("mstyle") && e.notParent) {
          e = p.default.getChildren(p.default.getChildren(e)[0])[0];
        }
        if (e.isKind("mspace")) {
          if (e !== t.First) {
            var Q = this.create("node", "mrow", [t.Pop()]);
            t.Push(Q);
          }
          this.factory.configuration.addNode("nonscript", t.First);
        }
      }
      return [[t], true];
    };
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.NonscriptItem = _;
  var S = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "dots";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (t) {
      if (t.isKind("open") || t.isKind("left")) {
        return mmlStackItemClasses.BaseItem.success;
      }
      var e = this.getProperty("ldots");
      var Q = t.First;
      if (t.isKind("mml") && p.default.isEmbellished(Q)) {
        var r = p.default.getTexClass(p.default.getCoreMO(Q));
        if (r === mathmlAbstractNodeClasses.TEXCLASS.BIN || r === mathmlAbstractNodeClasses.TEXCLASS.REL) {
          e = this.getProperty("cdots");
        }
      }
      return [[e, t], true];
    };
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.DotsItem = S;
  var w = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.table = [];
      e.row = [];
      e.frame = [];
      e.hfill = [];
      e.arraydef = {};
      e.dashed = false;
      return e;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "array";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isOpen", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "copyEnv", {
      get: function () {
        return false;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (e) {
      if (e.isClose && !e.isKind("over")) {
        if (e.getProperty("isEntry")) {
          this.EndEntry();
          this.clearEnv();
          return mmlStackItemClasses.BaseItem.fail;
        }
        if (e.getProperty("isCR")) {
          this.EndEntry();
          this.EndRow();
          this.clearEnv();
          return mmlStackItemClasses.BaseItem.fail;
        }
        this.EndTable();
        this.clearEnv();
        var Q = this.factory.create("mml", this.createMml());
        if (this.getProperty("requireClose")) {
          if (e.isKind("close")) {
            return [[Q], true];
          }
          throw new l.default("MissingCloseBrace", "Missing close brace");
        }
        return [[Q, e], true];
      }
      return t.prototype.checkItem.call(this, e);
    };
    e.prototype.createMml = function () {
      var t = this.arraydef.scriptlevel;
      delete this.arraydef.scriptlevel;
      var e = this.create("node", "mtable", this.table, this.arraydef);
      if (t) {
        e.setProperty("scriptlevel", t);
      }
      if (this.frame.length === 4) {
        p.default.setAttribute(e, "frame", this.dashed ? "dashed" : "solid");
      } else if (this.frame.length) {
        this.arraydef.rowlines &&= this.arraydef.rowlines.replace(/none( none)+$/, "none");
        p.default.setAttribute(e, "frame", "");
        e = this.create("node", "menclose", [e], {
          notation: this.frame.join(" ")
        });
        if ((this.arraydef.columnlines || "none") !== "none" || (this.arraydef.rowlines || "none") !== "none") {
          p.default.setAttribute(e, "data-padding", 0);
        }
      }
      if (this.getProperty("open") || this.getProperty("close")) {
        e = c.default.fenced(this.factory.configuration, this.getProperty("open"), e, this.getProperty("close"));
      }
      return e;
    };
    e.prototype.EndEntry = function () {
      var t = this.create("node", "mtd", this.nodes);
      if (this.hfill.length) {
        if (this.hfill[0] === 0) {
          p.default.setAttribute(t, "columnalign", "right");
        }
        if (this.hfill[this.hfill.length - 1] === this.Size()) {
          p.default.setAttribute(t, "columnalign", p.default.getAttribute(t, "columnalign") ? "center" : "left");
        }
      }
      this.row.push(t);
      this.Clear();
      this.hfill = [];
    };
    e.prototype.EndRow = function () {
      var t;
      if (this.getProperty("isNumbered") && this.row.length === 3) {
        this.row.unshift(this.row.pop());
        t = this.create("node", "mlabeledtr", this.row);
      } else {
        t = this.create("node", "mtr", this.row);
      }
      this.table.push(t);
      this.row = [];
    };
    e.prototype.EndTable = function () {
      if (this.Size() || this.row.length) {
        this.EndEntry();
        this.EndRow();
      }
      this.checkLines();
    };
    e.prototype.checkLines = function () {
      if (this.arraydef.rowlines) {
        var t = this.arraydef.rowlines.split(/ /);
        if (t.length === this.table.length) {
          this.frame.push("bottom");
          t.pop();
          this.arraydef.rowlines = t.join(" ");
        } else if (t.length < this.table.length - 1) {
          this.arraydef.rowlines += " none";
        }
      }
      if (this.getProperty("rowspacing")) {
        for (var e = this.arraydef.rowspacing.split(/ /); e.length < this.table.length;) {
          e.push(this.getProperty("rowspacing") + "em");
        }
        this.arraydef.rowspacing = e.join(" ");
      }
    };
    e.prototype.addRowSpacing = function (t) {
      if (this.arraydef.rowspacing) {
        var e = this.arraydef.rowspacing.split(/ /);
        if (!this.getProperty("rowspacing")) {
          var Q = c.default.dimen2em(e[0]);
          this.setProperty("rowspacing", Q);
        }
        var r = this.getProperty("rowspacing");
        for (; e.length < this.table.length;) {
          e.push(c.default.Em(r));
        }
        e[this.table.length - 1] = c.default.Em(Math.max(0, r + c.default.dimen2em(t)));
        this.arraydef.rowspacing = e.join(" ");
      }
    };
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.ArrayItem = w;
  var B = function (t) {
    function e(e) {
      var Q = [];
      var r = 1;
      for (; r < arguments.length; r++) {
        Q[r - 1] = arguments[r];
      }
      var T = t.call(this, e) || this;
      T.maxrow = 0;
      T.factory.configuration.tags.start(Q[0], Q[2], Q[1]);
      return T;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "eqnarray";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.EndEntry = function () {
      if (this.row.length) {
        c.default.fixInitialMO(this.factory.configuration, this.nodes);
      }
      var t = this.create("node", "mtd", this.nodes);
      this.row.push(t);
      this.Clear();
    };
    e.prototype.EndRow = function () {
      if (this.row.length > this.maxrow) {
        this.maxrow = this.row.length;
      }
      var t = "mtr";
      var e = this.factory.configuration.tags.getTag();
      if (e) {
        this.row = [e].concat(this.row);
        t = "mlabeledtr";
      }
      this.factory.configuration.tags.clearTag();
      var Q = this.create("node", t, this.row);
      this.table.push(Q);
      this.row = [];
    };
    e.prototype.EndTable = function () {
      t.prototype.EndTable.call(this);
      this.factory.configuration.tags.end();
      this.extendArray("columnalign", this.maxrow);
      this.extendArray("columnwidth", this.maxrow);
      this.extendArray("columnspacing", this.maxrow - 1);
    };
    e.prototype.extendArray = function (t, e) {
      if (this.arraydef[t]) {
        var Q = this.arraydef[t].split(/ /);
        var r = o([], n(Q), false);
        if (r.length > 1) {
          while (r.length < e) {
            r.push.apply(r, o([], n(Q), false));
          }
          this.arraydef[t] = r.slice(0, e).join(" ");
        }
      }
    };
    return e;
  }(w);
  exports.EqnArrayItem = B;
  var P = function (t) {
    function e(e) {
      var Q = [];
      var r = 1;
      for (; r < arguments.length; r++) {
        Q[r - 1] = arguments[r];
      }
      var T = t.call(this, e) || this;
      T.factory.configuration.tags.start("equation", true, Q[0]);
      return T;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "equation";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isOpen", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (e) {
      if (e.isKind("end")) {
        var Q = this.toMml();
        var r = this.factory.configuration.tags.getTag();
        this.factory.configuration.tags.end();
        return [[r ? this.factory.configuration.tags.enTag(Q, r) : Q, e], true];
      }
      if (e.isKind("stop")) {
        throw new l.default("EnvMissingEnd", "Missing \\end{%1}", this.getName());
      }
      return t.prototype.checkItem.call(this, e);
    };
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.EquationItem = P;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}