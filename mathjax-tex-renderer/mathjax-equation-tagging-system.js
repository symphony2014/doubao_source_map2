// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(658610) to 'mathjax-tex-parser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 9120
         */
module.exports = function (module, exports, require) {
  var r;
  var T;
  var n;
  var o;
  var i = this && this.__extends || (o = function (t, e) {
    return (o = Object.setPrototypeOf || {
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
    o(t, e);
    t.prototype = e === null ? Object.create(e) : (Q.prototype = e.prototype, new Q());
  });
  var a = this && this.__values || function (t) {
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
  var u = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.TagsFactory = exports.AllTags = exports.NoTags = exports.AbstractTags = exports.TagInfo = exports.Label = undefined;
  var s = u(require("mathjax-tex-parser") /*id: 658610*/);
  function l(t = "???", e = "") {
    this.tag = t;
    this.id = e;
  }
  exports.Label = l;
  function c(t = "", e = false, Q = false, r = null, T = "", n = "", o = false, i = "") {
    this.env = t;
    this.taggable = e;
    this.defaultTags = Q;
    this.tag = r;
    this.tagId = T;
    this.tagFormat = n;
    this.noTag = o;
    this.labelId = i;
  }
  exports.TagInfo = c;
  var p = function () {
    function t() {
      this.counter = 0;
      this.allCounter = 0;
      this.configuration = null;
      this.ids = {};
      this.allIds = {};
      this.labels = {};
      this.allLabels = {};
      this.redo = false;
      this.refUpdate = false;
      this.currentTag = new c();
      this.history = [];
      this.stack = [];
      this.enTag = function (t, e) {
        var Q = this.configuration.nodeFactory;
        var r = Q.create("node", "mtd", [t]);
        var T = Q.create("node", "mlabeledtr", [e, r]);
        return Q.create("node", "mtable", [T], {
          side: this.configuration.options.tagSide,
          minlabelspacing: this.configuration.options.tagIndent,
          displaystyle: true
        });
      };
    }
    t.prototype.start = function (t, e, Q) {
      if (this.currentTag) {
        this.stack.push(this.currentTag);
      }
      this.currentTag = new c(t, e, Q);
    };
    Object.defineProperty(t.prototype, "env", {
      get: function () {
        return this.currentTag.env;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.end = function () {
      this.history.push(this.currentTag);
      this.currentTag = this.stack.pop();
    };
    t.prototype.tag = function (t, e) {
      this.currentTag.tag = t;
      this.currentTag.tagFormat = e ? t : this.formatTag(t);
      this.currentTag.noTag = false;
    };
    t.prototype.notag = function () {
      this.tag("", true);
      this.currentTag.noTag = true;
    };
    Object.defineProperty(t.prototype, "noTag", {
      get: function () {
        return this.currentTag.noTag;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "label", {
      get: function () {
        return this.currentTag.labelId;
      },
      set: function (t) {
        this.currentTag.labelId = t;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.formatUrl = function (t, e) {
      return e + "#" + encodeURIComponent(t);
    };
    t.prototype.formatTag = function (t) {
      return "(" + t + ")";
    };
    t.prototype.formatId = function (t) {
      return "mjx-eqn:" + t.replace(/\s/g, "_");
    };
    t.prototype.formatNumber = function (t) {
      return t.toString();
    };
    t.prototype.autoTag = function () {
      if (this.currentTag.tag == null) {
        this.counter++;
        this.tag(this.formatNumber(this.counter), false);
      }
    };
    t.prototype.clearTag = function () {
      this.label = "";
      this.tag(null, true);
      this.currentTag.tagId = "";
    };
    t.prototype.getTag = function (t = false) {
      if (t) {
        this.autoTag();
        return this.makeTag();
      }
      var e = this.currentTag;
      if (e.taggable && !e.noTag && (e.defaultTags && this.autoTag(), e.tag)) {
        return this.makeTag();
      } else {
        return null;
      }
    };
    t.prototype.resetTag = function () {
      this.history = [];
      this.redo = false;
      this.refUpdate = false;
      this.clearTag();
    };
    t.prototype.reset = function (t = 0) {
      this.resetTag();
      this.counter = this.allCounter = t;
      this.allLabels = {};
      this.allIds = {};
    };
    t.prototype.startEquation = function (t) {
      this.history = [];
      this.stack = [];
      this.clearTag();
      this.currentTag = new c("", undefined, undefined);
      this.labels = {};
      this.ids = {};
      this.counter = this.allCounter;
      this.redo = false;
      var e = t.inputData.recompile;
      if (e) {
        this.refUpdate = true;
        this.counter = e.counter;
      }
    };
    t.prototype.finishEquation = function (t) {
      if (this.redo) {
        t.inputData.recompile = {
          state: t.state(),
          counter: this.allCounter
        };
      }
      if (!this.refUpdate) {
        this.allCounter = this.counter;
      }
      Object.assign(this.allIds, this.ids);
      Object.assign(this.allLabels, this.labels);
    };
    t.prototype.finalize = function (t, e) {
      if (!e.display || this.currentTag.env || this.currentTag.tag == null) {
        return t;
      }
      var Q = this.makeTag();
      return this.enTag(t, Q);
    };
    t.prototype.makeId = function () {
      this.currentTag.tagId = this.formatId(this.configuration.options.useLabelIds && this.label || this.currentTag.tag);
    };
    t.prototype.makeTag = function () {
      this.makeId();
      if (this.label) {
        this.labels[this.label] = new l(this.currentTag.tag, this.currentTag.tagId);
      }
      var t = new s.default("\\text{" + this.currentTag.tagFormat + "}", {}, this.configuration).mml();
      return this.configuration.nodeFactory.create("node", "mtd", [t], {
        id: this.currentTag.tagId
      });
    };
    return t;
  }();
  exports.AbstractTags = p;
  var h = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    i(e, t);
    e.prototype.autoTag = function () {};
    e.prototype.getTag = function () {
      if (this.currentTag.tag) {
        return t.prototype.getTag.call(this);
      } else {
        return null;
      }
    };
    return e;
  }(p);
  exports.NoTags = h;
  var f = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    i(e, t);
    e.prototype.finalize = function (t, e) {
      if (!e.display || this.history.find(function (t) {
        return t.taggable;
      })) {
        return t;
      }
      var Q = this.getTag(true);
      return this.enTag(t, Q);
    };
    return e;
  }(p);
  exports.AllTags = f;
  r = exports.TagsFactory ||= {};
  T = new Map([["none", h], ["all", f]]);
  n = "none";
  r.OPTIONS = {
    tags: n,
    tagSide: "right",
    tagIndent: "0.8em",
    useLabelIds: true,
    ignoreDuplicateLabels: false
  };
  r.add = function (t, e) {
    T.set(t, e);
  };
  r.addTags = function (t) {
    var e;
    var Q;
    try {
      var T = a(Object.keys(t));
      var n = T.next();
      for (; !n.done; n = T.next()) {
        var o = n.value;
        r.add(o, t[o]);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (n && !n.done && (Q = T.return)) {
          Q.call(T);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
  };
  r.create = function (t) {
    var e = T.get(t) || T.get(n);
    if (!e) {
      throw Error("Unknown tags class");
    }
    return new e();
  };
  r.setDefault = function (t) {
    n = t;
  };
  r.getDefault = function () {
    return r.create(n);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}