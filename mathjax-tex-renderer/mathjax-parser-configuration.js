// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'optionsMergeUtils'
// - Resolved require(625001) to 'options-merge-utils'
// - Renamed variable 'u' to 'priorityHandlerConfig'
// - Resolved require(706684) to 'priority-handler-config'
// - Renamed variable 's' to 'priorityFunctionList'
// - Resolved require(238191) to 'priority-function-list'
// - Renamed variable 'l' to 'priorityListStructure'
// - Resolved require(591133) to 'priority-list-structure'
// - Renamed variable 'c' to 'mathjaxEquationTaggingSystem'
// - Resolved require(9120) to 'mathjax-equation-tagging-system'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 947676
         */
module.exports = function (module, exports, require) {
  var r;
  var T;
  var n;
  var o = this && this.__values || function (t) {
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
  var i = this && this.__read || function (t, e) {
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
  exports.ParserConfiguration = exports.ConfigurationHandler = exports.Configuration = undefined;
  var optionsMergeUtils = require("options-merge-utils") /*id: 625001*/;
  var priorityHandlerConfig = require("priority-handler-config") /*id: 706684*/;
  var priorityFunctionList = require("priority-function-list") /*id: 238191*/;
  var priorityListStructure = require("priority-list-structure") /*id: 591133*/;
  var mathjaxEquationTaggingSystem = require("mathjax-equation-tagging-system") /*id: 9120*/;
  var p = function () {
    function t(t, e = {}, Q = {}, r = {}, T = {}, n = {}, o = {}, i = [], a = [], u = null, s = null, l, c) {
      this.name = t;
      this.handler = e;
      this.fallback = Q;
      this.items = r;
      this.tags = T;
      this.options = n;
      this.nodes = o;
      this.preprocessors = i;
      this.postprocessors = a;
      this.initMethod = u;
      this.configMethod = s;
      this.priority = l;
      this.parser = c;
      this.handler = Object.assign({
        character: [],
        delimiter: [],
        macro: [],
        environment: []
      }, e);
    }
    t.makeProcessor = function (t, e) {
      if (Array.isArray(t)) {
        return t;
      } else {
        return [t, e];
      }
    };
    t._create = function (e, Q) {
      var r = this;
      if (Q === undefined) {
        Q = {};
      }
      var T = Q.priority || priorityListStructure.PrioritizedList.DEFAULTPRIORITY;
      var n = Q.init ? this.makeProcessor(Q.init, T) : null;
      var o = Q.config ? this.makeProcessor(Q.config, T) : null;
      var i = (Q.preprocessors || []).map(function (t) {
        return r.makeProcessor(t, T);
      });
      var a = (Q.postprocessors || []).map(function (t) {
        return r.makeProcessor(t, T);
      });
      var u = Q.parser || "tex";
      return new t(e, Q.handler || {}, Q.fallback || {}, Q.items || {}, Q.tags || {}, Q.options || {}, Q.nodes || {}, i, a, n, o, T, u);
    };
    t.create = function (e, Q = {}) {
      var r = t._create(e, Q);
      n.set(e, r);
      return r;
    };
    t.local = function (e = {}) {
      return t._create("", e);
    };
    Object.defineProperty(t.prototype, "init", {
      get: function () {
        if (this.initMethod) {
          return this.initMethod[0];
        } else {
          return null;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "config", {
      get: function () {
        if (this.configMethod) {
          return this.configMethod[0];
        } else {
          return null;
        }
      },
      enumerable: false,
      configurable: true
    });
    return t;
  }();
  exports.Configuration = p;
  r = n = exports.ConfigurationHandler ||= {};
  T = new Map();
  r.set = function (t, e) {
    T.set(t, e);
  };
  r.get = function (t) {
    return T.get(t);
  };
  r.keys = function () {
    return T.keys();
  };
  var h = function () {
    function t(t, e) {
      var Q;
      var r;
      var T;
      var n;
      if (e === undefined) {
        e = ["tex"];
      }
      this.initMethod = new priorityFunctionList.FunctionList();
      this.configMethod = new priorityFunctionList.FunctionList();
      this.configurations = new priorityListStructure.PrioritizedList();
      this.parsers = [];
      this.handlers = new priorityHandlerConfig.SubHandlers();
      this.items = {};
      this.tags = {};
      this.options = {};
      this.nodes = {};
      this.parsers = e;
      try {
        var i = o(t.slice().reverse());
        var a = i.next();
        for (; !a.done; a = i.next()) {
          var c = a.value;
          this.addPackage(c);
        }
      } catch (t) {
        Q = {
          error: t
        };
      } finally {
        try {
          if (a && !a.done && (r = i.return)) {
            r.call(i);
          }
        } finally {
          if (Q) {
            throw Q.error;
          }
        }
      }
      try {
        var p = o(this.configurations);
        var h = p.next();
        for (; !h.done; h = p.next()) {
          var f = h.value;
          var d = f.item;
          var D = f.priority;
          this.append(d, D);
        }
      } catch (t) {
        T = {
          error: t
        };
      } finally {
        try {
          if (h && !h.done && (n = p.return)) {
            n.call(p);
          }
        } finally {
          if (T) {
            throw T.error;
          }
        }
      }
    }
    t.prototype.init = function () {
      this.initMethod.execute(this);
    };
    t.prototype.config = function (t) {
      var e;
      var Q;
      this.configMethod.execute(this, t);
      try {
        var r = o(this.configurations);
        var T = r.next();
        for (; !T.done; T = r.next()) {
          var n = T.value;
          this.addFilters(t, n.item);
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
    };
    t.prototype.addPackage = function (t) {
      var e = typeof t == "string" ? t : t[0];
      var Q = this.getPackage(e);
      if (Q) {
        this.configurations.add(Q, typeof t == "string" ? Q.priority : t[1]);
      }
    };
    t.prototype.add = function (t, e, Q = {}) {
      var r;
      var T;
      var n = this.getPackage(t);
      this.append(n);
      this.configurations.add(n, n.priority);
      this.init();
      var i = e.parseOptions;
      i.nodeFactory.setCreators(n.nodes);
      try {
        var u = o(Object.keys(n.items));
        var s = u.next();
        for (; !s.done; s = u.next()) {
          var l = s.value;
          i.itemFactory.setNodeClass(l, n.items[l]);
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          if (s && !s.done && (T = u.return)) {
            T.call(u);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
      mathjaxEquationTaggingSystem.TagsFactory.addTags(n.tags);
      optionsMergeUtils.defaultOptions(i.options, n.options);
      optionsMergeUtils.userOptions(i.options, Q);
      this.addFilters(e, n);
      if (n.config) {
        n.config(this, e);
      }
    };
    t.prototype.getPackage = function (t) {
      var e = n.get(t);
      if (e && this.parsers.indexOf(e.parser) < 0) {
        throw Error(`Package ${t} doesn't target the proper parser`);
      }
      return e;
    };
    t.prototype.append = function (t, e) {
      e = e || t.priority;
      if (t.initMethod) {
        this.initMethod.add(t.initMethod[0], t.initMethod[1]);
      }
      if (t.configMethod) {
        this.configMethod.add(t.configMethod[0], t.configMethod[1]);
      }
      this.handlers.add(t.handler, t.fallback, e);
      Object.assign(this.items, t.items);
      Object.assign(this.tags, t.tags);
      optionsMergeUtils.defaultOptions(this.options, t.options);
      Object.assign(this.nodes, t.nodes);
    };
    t.prototype.addFilters = function (t, e) {
      var Q;
      var r;
      var T;
      var n;
      try {
        var a = o(e.preprocessors);
        var u = a.next();
        for (; !u.done; u = a.next()) {
          var s = i(u.value, 2);
          var l = s[0];
          var c = s[1];
          t.preFilters.add(l, c);
        }
      } catch (t) {
        Q = {
          error: t
        };
      } finally {
        try {
          if (u && !u.done && (r = a.return)) {
            r.call(a);
          }
        } finally {
          if (Q) {
            throw Q.error;
          }
        }
      }
      try {
        var p = o(e.postprocessors);
        var h = p.next();
        for (; !h.done; h = p.next()) {
          var f = i(h.value, 2);
          var d = f[0];
          var c = f[1];
          t.postFilters.add(d, c);
        }
      } catch (t) {
        T = {
          error: t
        };
      } finally {
        try {
          if (h && !h.done && (n = p.return)) {
            n.call(p);
          }
        } finally {
          if (T) {
            throw T.error;
          }
        }
      }
    };
    return t;
  }();
  exports.ParserConfiguration = h;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}