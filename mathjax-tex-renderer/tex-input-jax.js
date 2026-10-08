// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'abstractInputJax'
// - Resolved require(335857) to 'abstract-input-jax'
// - Renamed variable 'u' to 'optionsMergeUtils'
// - Resolved require(625001) to 'options-merge-utils'
// - Renamed variable 's' to 'texMathFinder'
// - Resolved require(971062) to 'tex-math-finder'
// - Resolved require(103107) to 'mathml-node-processor'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Resolved require(658610) to 'mathjax-tex-parser'
// - Resolved require(342117) to 'message-format-util'
// - Resolved require(751670) to 'mathml-configuration'
// - Renamed variable 'd' to 'mathjaxEquationTaggingSystem'
// - Resolved require(9120) to 'mathjax-equation-tagging-system'
// - Renamed variable 'D' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Resolved require(929941) to 'mathjax-base-configuration'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 110289
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
  var n = this && this.__assign || function () {
    return (n = Object.assign || function (t) {
      var e;
      var Q = 1;
      var r = arguments.length;
      for (; Q < r; Q++) {
        for (var T in e = arguments[Q]) {
          if (Object.prototype.hasOwnProperty.call(e, T)) {
            t[T] = e[T];
          }
        }
      }
      return t;
    }).apply(this, arguments);
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
  var i = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.TeX = undefined;
  var abstractInputJax = require("abstract-input-jax") /*id: 335857*/;
  var optionsMergeUtils = require("options-merge-utils") /*id: 625001*/;
  var texMathFinder = require("tex-math-finder") /*id: 971062*/;
  var l = i(require("mathml-node-processor") /*id: 103107*/);
  var c = i(require("mathml-abstract-node-util") /*id: 352636*/);
  var p = i(require("mathjax-tex-parser") /*id: 658610*/);
  var h = i(require("message-format-util") /*id: 342117*/);
  var f = i(require("mathml-configuration") /*id: 751670*/);
  var mathjaxEquationTaggingSystem = require("mathjax-equation-tagging-system") /*id: 9120*/;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  require("mathjax-base-configuration") /*id: 929941*/;
  var L = function (t) {
    function e(Q = {}) {
      var r = this;
      var T = o(optionsMergeUtils.separateOptions(Q, e.OPTIONS, texMathFinder.FindTeX.OPTIONS), 3);
      var n = T[0];
      var i = T[1];
      var a = T[2];
      (r = t.call(this, i) || this).findTeX = r.options.FindTeX || new texMathFinder.FindTeX(a);
      var c = r.options.packages;
      var p = r.configuration = e.configure(c);
      var h = r._parseOptions = new f.default(p, [r.options, mathjaxEquationTaggingSystem.TagsFactory.OPTIONS]);
      optionsMergeUtils.userOptions(h.options, n);
      p.config(r);
      e.tags(h, p);
      r.postFilters.add(l.default.cleanSubSup, -6);
      r.postFilters.add(l.default.setInherited, -5);
      r.postFilters.add(l.default.moveLimits, -4);
      r.postFilters.add(l.default.cleanStretchy, -3);
      r.postFilters.add(l.default.cleanAttributes, -2);
      r.postFilters.add(l.default.combineRelations, -1);
      return r;
    }
    T(e, t);
    e.configure = function (t) {
      var e = new mathjaxParserConfiguration.ParserConfiguration(t, ["tex"]);
      e.init();
      return e;
    };
    e.tags = function (t, e) {
      mathjaxEquationTaggingSystem.TagsFactory.addTags(e.tags);
      mathjaxEquationTaggingSystem.TagsFactory.setDefault(t.options.tags);
      t.tags = mathjaxEquationTaggingSystem.TagsFactory.getDefault();
      t.tags.configuration = t;
    };
    e.prototype.setMmlFactory = function (e) {
      t.prototype.setMmlFactory.call(this, e);
      this._parseOptions.nodeFactory.setMmlFactory(e);
    };
    Object.defineProperty(e.prototype, "parseOptions", {
      get: function () {
        return this._parseOptions;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.reset = function (t = 0) {
      this.parseOptions.tags.reset(t);
    };
    e.prototype.compile = function (t, e) {
      this.parseOptions.clear();
      this.executeFilters(this.preFilters, t, e, this.parseOptions);
      var Q;
      var r;
      var T = t.display;
      this.latex = t.math;
      this.parseOptions.tags.startEquation(t);
      try {
        var n = new p.default(this.latex, {
          display: T,
          isInner: false
        }, this.parseOptions);
        Q = n.mml();
        r = n.stack.global;
      } catch (t) {
        if (!(t instanceof h.default)) {
          throw t;
        }
        this.parseOptions.error = true;
        Q = this.options.formatError(this, t);
      }
      Q = this.parseOptions.nodeFactory.create("node", "math", [Q]);
      if (r == null ? undefined : r.indentalign) {
        c.default.setAttribute(Q, "indentalign", r.indentalign);
      }
      if (T) {
        c.default.setAttribute(Q, "display", "block");
      }
      this.parseOptions.tags.finishEquation(t);
      this.parseOptions.root = Q;
      this.executeFilters(this.postFilters, t, e, this.parseOptions);
      this.mathNode = this.parseOptions.root;
      return this.mathNode;
    };
    e.prototype.findMath = function (t) {
      return this.findTeX.findMath(t);
    };
    e.prototype.formatError = function (t) {
      var e = t.message.replace(/\n.*/, "");
      return this.parseOptions.nodeFactory.create("error", e, t.id, this.latex);
    };
    e.NAME = "TeX";
    e.OPTIONS = n(n({}, abstractInputJax.AbstractInputJax.OPTIONS), {
      FindTeX: null,
      packages: ["base"],
      digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
      maxBuffer: 5120,
      formatError: function (t, e) {
        return t.formatError(e);
      }
    });
    return e;
  }(abstractInputJax.AbstractInputJax);
  exports.TeX = L;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}