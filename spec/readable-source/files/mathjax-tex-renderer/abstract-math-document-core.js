// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'optionsMergeUtils'
// - Resolved require(625001) to 'options-merge-utils'
// - Renamed variable 'u' to 'abstractInputJax'
// - Resolved require(335857) to 'abstract-input-jax'
// - Renamed variable 's' to 'abstractOutputJax'
// - Resolved require(704834) to 'abstract-output-jax'
// - Renamed variable 'l' to 'abstractMathList'
// - Resolved require(893698) to 'abstract-math-list'
// - Renamed variable 'c' to 'abstractMathItemCore'
// - Resolved require(254335) to 'abstract-math-item-core'
// - Renamed variable 'p' to 'mathmlNodeFactory_1'
// - Resolved require(793218) to 'mathml-node-factory_1'
// - Renamed variable 'h' to 'bitFieldManager'
// - Resolved require(347387) to 'bit-field-manager'
// - Resolved require(591133) to 'priority-list-structure'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 216525
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
  var n = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
  exports.AbstractMathDocument = exports.resetAllOptions = exports.resetOptions = exports.RenderList = undefined;
  var optionsMergeUtils = require("options-merge-utils") /*id: 625001*/;
  var abstractInputJax = require("abstract-input-jax") /*id: 335857*/;
  var abstractOutputJax = require("abstract-output-jax") /*id: 704834*/;
  var abstractMathList = require("abstract-math-list") /*id: 893698*/;
  var abstractMathItemCore = require("abstract-math-item-core") /*id: 254335*/;
  var mathmlNodeFactory_1 = require("mathml-node-factory_1") /*id: 793218*/;
  var bitFieldManager = require("bit-field-manager") /*id: 347387*/;
  var f = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.create = function (t) {
      var e;
      var Q;
      var r = new this();
      try {
        var T = n(Object.keys(t));
        var i = T.next();
        for (; !i.done; i = T.next()) {
          var a = i.value;
          var u = o(this.action(a, t[a]), 2);
          var s = u[0];
          var l = u[1];
          if (l) {
            r.add(s, l);
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (Q = T.return)) {
            Q.call(T);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return r;
    };
    e.action = function (t, e) {
      var Q;
      var r;
      var T;
      var n;
      var i;
      var a;
      var u = true;
      var s = e[0];
      if (e.length === 1 || typeof e[1] == "boolean") {
        if (e.length === 2) {
          u = e[1];
        }
        i = (Q = o(this.methodActions(t), 2))[0];
        a = Q[1];
      } else if (typeof e[1] == "string") {
        if (typeof e[2] == "string") {
          if (e.length === 4) {
            u = e[3];
          }
          var l = o(e.slice(1), 2);
          var c = l[0];
          var p = l[1];
          i = (r = o(this.methodActions(c, p), 2))[0];
          a = r[1];
        } else {
          if (e.length === 3) {
            u = e[2];
          }
          i = (T = o(this.methodActions(e[1]), 2))[0];
          a = T[1];
        }
      } else {
        if (e.length === 4) {
          u = e[3];
        }
        i = (n = o(e.slice(1), 2))[0];
        a = n[1];
      }
      return [{
        id: t,
        renderDoc: i,
        renderMath: a,
        convert: u
      }, s];
    };
    e.methodActions = function (t, e = t) {
      return [function (e) {
        if (t) {
          e[t]();
        }
        return false;
      }, function (t, Q) {
        if (e) {
          t[e](Q);
        }
        return false;
      }];
    };
    e.prototype.renderDoc = function (t, e) {
      var Q;
      var r;
      if (e === undefined) {
        e = abstractMathItemCore.STATE.UNPROCESSED;
      }
      try {
        var T = n(this.items);
        var o = T.next();
        for (; !o.done; o = T.next()) {
          var i = o.value;
          if (i.priority >= e && i.item.renderDoc(t)) {
            return;
          }
        }
      } catch (t) {
        Q = {
          error: t
        };
      } finally {
        try {
          if (o && !o.done && (r = T.return)) {
            r.call(T);
          }
        } finally {
          if (Q) {
            throw Q.error;
          }
        }
      }
    };
    e.prototype.renderMath = function (t, e, Q) {
      var r;
      var T;
      if (Q === undefined) {
        Q = abstractMathItemCore.STATE.UNPROCESSED;
      }
      try {
        var o = n(this.items);
        var i = o.next();
        for (; !i.done; i = o.next()) {
          var a = i.value;
          if (a.priority >= Q && a.item.renderMath(t, e)) {
            return;
          }
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (T = o.return)) {
            T.call(o);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
    };
    e.prototype.renderConvert = function (t, e, Q) {
      var r;
      var T;
      if (Q === undefined) {
        Q = abstractMathItemCore.STATE.LAST;
      }
      try {
        var o = n(this.items);
        var i = o.next();
        for (; !i.done; i = o.next()) {
          var a = i.value;
          if (a.priority > Q || a.item.convert && a.item.renderMath(t, e)) {
            return;
          }
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (T = o.return)) {
            T.call(o);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
    };
    e.prototype.findID = function (t) {
      var e;
      var Q;
      try {
        var r = n(this.items);
        var T = r.next();
        for (; !T.done; T = r.next()) {
          var o = T.value;
          if (o.item.id === t) {
            return o.item;
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (T && !T.done && (Q = r.return)) {
            Q.call(r);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return null;
    };
    return e;
  }(require("priority-list-structure") /*id: 591133*/.PrioritizedList);
  exports.RenderList = f;
  exports.resetOptions = {
    all: false,
    processed: false,
    inputJax: null,
    outputJax: null
  };
  exports.resetAllOptions = {
    all: true,
    processed: true,
    inputJax: [],
    outputJax: []
  };
  var d = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.compile = function (t) {
      return null;
    };
    return e;
  }(abstractInputJax.AbstractInputJax);
  var D = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.typeset = function (t, e = null) {
      return null;
    };
    e.prototype.escaped = function (t, e) {
      return null;
    };
    return e;
  }(abstractOutputJax.AbstractOutputJax);
  var L = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    return e;
  }(abstractMathList.AbstractMathList);
  var m = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    return e;
  }(abstractMathItemCore.AbstractMathItem);
  var y = function () {
    function t(e, Q, r) {
      var T = this;
      var n = this.constructor;
      this.document = e;
      this.options = optionsMergeUtils.userOptions(optionsMergeUtils.defaultOptions({}, n.OPTIONS), r);
      this.math = new (this.options.MathList || L)();
      this.renderActions = f.create(this.options.renderActions);
      this.processed = new t.ProcessBits();
      this.outputJax = this.options.OutputJax || new D();
      var o = this.options.InputJax || [new d()];
      if (!Array.isArray(o)) {
        o = [o];
      }
      this.inputJax = o;
      this.adaptor = Q;
      this.outputJax.setAdaptor(Q);
      this.inputJax.map(function (t) {
        return t.setAdaptor(Q);
      });
      this.mmlFactory = this.options.MmlFactory || new mathmlNodeFactory_1.MmlFactory();
      this.inputJax.map(function (t) {
        return t.setMmlFactory(T.mmlFactory);
      });
      this.outputJax.initialize();
      this.inputJax.map(function (t) {
        return t.initialize();
      });
    }
    Object.defineProperty(t.prototype, "kind", {
      get: function () {
        return this.constructor.KIND;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.addRenderAction = function (t) {
      var e = [];
      var Q = 1;
      for (; Q < arguments.length; Q++) {
        e[Q - 1] = arguments[Q];
      }
      var r = o(f.action(t, e), 2);
      var T = r[0];
      var n = r[1];
      this.renderActions.add(T, n);
    };
    t.prototype.removeRenderAction = function (t) {
      var e = this.renderActions.findID(t);
      if (e) {
        this.renderActions.remove(e);
      }
    };
    t.prototype.render = function () {
      this.renderActions.renderDoc(this);
      return this;
    };
    t.prototype.rerender = function (t = abstractMathItemCore.STATE.RERENDER) {
      this.state(t - 1);
      this.render();
      return this;
    };
    t.prototype.convert = function (t, e = {}) {
      var Q = optionsMergeUtils.userOptions({
        format: this.inputJax[0].name,
        display: true,
        end: abstractMathItemCore.STATE.LAST,
        em: 16,
        ex: 8,
        containerWidth: null,
        lineWidth: 1000000,
        scale: 1,
        family: ""
      }, e);
      var r = Q.format;
      var T = Q.display;
      var n = Q.end;
      var o = Q.ex;
      var i = Q.em;
      var u = Q.containerWidth;
      var s = Q.lineWidth;
      var l = Q.scale;
      var p = Q.family;
      if (u === null) {
        u = o * 80;
      }
      var h = this.inputJax.reduce(function (t, e) {
        if (e.name === r) {
          return e;
        } else {
          return t;
        }
      }, null);
      var f = new this.options.MathItem(t, h, T);
      f.start.node = this.adaptor.body(this.document);
      f.setMetrics(i, o, u, s, l);
      if (this.outputJax.options.mtextInheritFont) {
        f.outputData.mtextFamily = p;
      }
      if (this.outputJax.options.merrorInheritFont) {
        f.outputData.merrorFamily = p;
      }
      f.convert(this, n);
      return f.typesetRoot || f.root;
    };
    t.prototype.findMath = function (t = null) {
      this.processed.set("findMath");
      return this;
    };
    t.prototype.compile = function () {
      var t;
      var e;
      var Q;
      var r;
      if (!this.processed.isSet("compile")) {
        var T = [];
        try {
          var o = n(this.math);
          var i = o.next();
          for (; !i.done; i = o.next()) {
            var a = i.value;
            this.compileMath(a);
            if (a.inputData.recompile !== undefined) {
              T.push(a);
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (i && !i.done && (e = o.return)) {
              e.call(o);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        try {
          var u = n(T);
          var s = u.next();
          for (; !s.done; s = u.next()) {
            var a = s.value;
            var l = a.inputData.recompile;
            a.state(l.state);
            a.inputData.recompile = l;
            this.compileMath(a);
          }
        } catch (t) {
          Q = {
            error: t
          };
        } finally {
          try {
            if (s && !s.done && (r = u.return)) {
              r.call(u);
            }
          } finally {
            if (Q) {
              throw Q.error;
            }
          }
        }
        this.processed.set("compile");
      }
      return this;
    };
    t.prototype.compileMath = function (t) {
      try {
        t.compile(this);
      } catch (e) {
        if (e.retry || e.restart) {
          throw e;
        }
        this.options.compileError(this, t, e);
        t.inputData.error = e;
      }
    };
    t.prototype.compileError = function (t, e) {
      t.root = this.mmlFactory.create("math", null, [this.mmlFactory.create("merror", {
        "data-mjx-error": e.message,
        title: e.message
      }, [this.mmlFactory.create("mtext", null, [this.mmlFactory.create("text").setText("Math input error")])])]);
      if (t.display) {
        t.root.attributes.set("display", "block");
      }
      t.inputData.error = e.message;
    };
    t.prototype.typeset = function () {
      var t;
      var e;
      if (!this.processed.isSet("typeset")) {
        try {
          var Q = n(this.math);
          var r = Q.next();
          for (; !r.done; r = Q.next()) {
            var T = r.value;
            try {
              T.typeset(this);
            } catch (t) {
              if (t.retry || t.restart) {
                throw t;
              }
              this.options.typesetError(this, T, t);
              T.outputData.error = t;
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (r && !r.done && (e = Q.return)) {
              e.call(Q);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        this.processed.set("typeset");
      }
      return this;
    };
    t.prototype.typesetError = function (t, e) {
      t.typesetRoot = this.adaptor.node("mjx-container", {
        class: "MathJax mjx-output-error",
        jax: this.outputJax.name
      }, [this.adaptor.node("span", {
        "data-mjx-error": e.message,
        title: e.message,
        style: {
          color: "red",
          "background-color": "yellow",
          "line-height": "normal"
        }
      }, [this.adaptor.text("Math output error")])]);
      if (t.display) {
        this.adaptor.setAttributes(t.typesetRoot, {
          style: {
            display: "block",
            margin: "1em 0",
            "text-align": "center"
          }
        });
      }
      t.outputData.error = e.message;
    };
    t.prototype.getMetrics = function () {
      if (!this.processed.isSet("getMetrics")) {
        this.outputJax.getMetrics(this);
        this.processed.set("getMetrics");
      }
      return this;
    };
    t.prototype.updateDocument = function () {
      var t;
      var e;
      if (!this.processed.isSet("updateDocument")) {
        try {
          var Q = n(this.math.reversed());
          var r = Q.next();
          for (; !r.done; r = Q.next()) {
            r.value.updateDocument(this);
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (r && !r.done && (e = Q.return)) {
              e.call(Q);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        this.processed.set("updateDocument");
      }
      return this;
    };
    t.prototype.removeFromDocument = function (t = false) {
      return this;
    };
    t.prototype.state = function (t, e) {
      var Q;
      var r;
      if (e === undefined) {
        e = false;
      }
      try {
        var T = n(this.math);
        var o = T.next();
        for (; !o.done; o = T.next()) {
          o.value.state(t, e);
        }
      } catch (t) {
        Q = {
          error: t
        };
      } finally {
        try {
          if (o && !o.done && (r = T.return)) {
            r.call(T);
          }
        } finally {
          if (Q) {
            throw Q.error;
          }
        }
      }
      if (t < abstractMathItemCore.STATE.INSERTED) {
        this.processed.clear("updateDocument");
      }
      if (t < abstractMathItemCore.STATE.TYPESET) {
        this.processed.clear("typeset");
        this.processed.clear("getMetrics");
      }
      if (t < abstractMathItemCore.STATE.COMPILED) {
        this.processed.clear("compile");
      }
      return this;
    };
    t.prototype.reset = function (t) {
      var Q;
      if (t === undefined) {
        t = {
          processed: true
        };
      }
      if ((t = optionsMergeUtils.userOptions(Object.assign({}, exports.resetOptions), t)).all) {
        Object.assign(t, exports.resetAllOptions);
      }
      if (t.processed) {
        this.processed.reset();
      }
      if (t.inputJax) {
        this.inputJax.forEach(function (e) {
          return e.reset.apply(e, i([], o(t.inputJax), false));
        });
      }
      if (t.outputJax) {
        (Q = this.outputJax).reset.apply(Q, i([], o(t.outputJax), false));
      }
      return this;
    };
    t.prototype.clear = function () {
      this.reset();
      this.math.clear();
      return this;
    };
    t.prototype.concat = function (t) {
      this.math.merge(t);
      return this;
    };
    t.prototype.clearMathItemsWithin = function (t) {
      var e;
      var Q = this.getMathItemsWithin(t);
      (e = this.math).remove.apply(e, i([], o(Q), false));
      return Q;
    };
    t.prototype.getMathItemsWithin = function (t) {
      if (!Array.isArray(t)) {
        t = [t];
      }
      var e;
      var Q;
      var r;
      var T;
      var o = this.adaptor;
      var i = [];
      var a = o.getElements(t, this.document);
      try {
        var u = n(this.math);
        var s = u.next();
        t: for (; !s.done; s = u.next()) {
          var l = s.value;
          try {
            r = undefined;
            var c = n(a);
            var p = c.next();
            for (; !p.done; p = c.next()) {
              var h = p.value;
              if (l.start.node && o.contains(h, l.start.node)) {
                i.push(l);
                continue t;
              }
            }
          } catch (t) {
            r = {
              error: t
            };
          } finally {
            try {
              if (p && !p.done && (T = c.return)) {
                T.call(c);
              }
            } finally {
              if (r) {
                throw r.error;
              }
            }
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (s && !s.done && (Q = u.return)) {
            Q.call(u);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return i;
    };
    t.KIND = "MathDocument";
    t.OPTIONS = {
      OutputJax: null,
      InputJax: null,
      MmlFactory: null,
      MathList: L,
      MathItem: m,
      compileError: function (t, e, Q) {
        t.compileError(e, Q);
      },
      typesetError: function (t, e, Q) {
        t.typesetError(e, Q);
      },
      renderActions: optionsMergeUtils.expandable({
        find: [abstractMathItemCore.STATE.FINDMATH, "findMath", "", false],
        compile: [abstractMathItemCore.STATE.COMPILED],
        metrics: [abstractMathItemCore.STATE.METRICS, "getMetrics", "", false],
        typeset: [abstractMathItemCore.STATE.TYPESET],
        update: [abstractMathItemCore.STATE.INSERTED, "updateDocument", false]
      })
    };
    t.ProcessBits = bitFieldManager.BitFieldClass("findMath", "compile", "getMetrics", "typeset", "updateDocument");
    return t;
  }();
  exports.AbstractMathDocument = y;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}