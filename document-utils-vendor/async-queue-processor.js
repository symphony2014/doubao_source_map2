// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'inheritsHelper'
// - Resolved require(595924) to 'inherits-helper'
// - Resolved require(361873) to 'event-emitter-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 265863
         */
module.exports = function (module, exports, require) {
  var inheritsHelper = require("inherits-helper") /*id: 595924*/;
  var i = require("event-emitter-polyfill") /*id: 361873*/.EventEmitter;
  function o(e) {
    if (!(this instanceof o)) {
      return new o(e);
    }
    i.call(this);
    e = e || {};
    this.concurrency = e.concurrency || Infinity;
    this.timeout = e.timeout || 0;
    this.autostart = e.autostart || false;
    this.results = e.results || null;
    this.pending = 0;
    this.session = 0;
    this.running = false;
    this.jobs = [];
    this.timers = {};
  }
  function a() {
    for (var e in this.timers) {
      var t = this.timers[e];
      delete this.timers[e];
      clearTimeout(t);
    }
  }
  function s(e) {
    var t = this;
    function r(e) {
      t.end(e);
    }
    this.on("error", r);
    this.on("end", function n(i) {
      t.removeListener("error", r);
      t.removeListener("end", n);
      e(i, this.results);
    });
  }
  function l(e) {
    this.session++;
    this.running = false;
    this.emit("end", e);
  }
  module.exports = o;
  module.exports.default = o;
  inheritsHelper(o, i);
  ["pop", "shift", "indexOf", "lastIndexOf"].forEach(function (e) {
    o.prototype[e] = function () {
      return Array.prototype[e].apply(this.jobs, arguments);
    };
  });
  o.prototype.slice = function (e, t) {
    this.jobs = this.jobs.slice(e, t);
    return this;
  };
  o.prototype.reverse = function () {
    this.jobs.reverse();
    return this;
  };
  ["push", "unshift", "splice"].forEach(function (e) {
    o.prototype[e] = function () {
      var t = Array.prototype[e].apply(this.jobs, arguments);
      if (this.autostart) {
        this.start();
      }
      return t;
    };
  });
  Object.defineProperty(o.prototype, "length", {
    get: function () {
      return this.pending + this.jobs.length;
    }
  });
  o.prototype.start = function (e) {
    if (e) {
      s.call(this, e);
    }
    this.running = true;
    if (!(this.pending >= this.concurrency)) {
      if (this.jobs.length === 0) {
        if (this.pending === 0) {
          l.call(this);
        }
        return;
      }
      var t = this;
      var r = this.jobs.shift();
      var n = true;
      var i = this.session;
      var o = null;
      var a = false;
      var u = null;
      var c = r.hasOwnProperty("timeout") ? r.timeout : this.timeout;
      if (c) {
        o = setTimeout(function () {
          a = true;
          if (t.listeners("timeout").length > 0) {
            t.emit("timeout", d, r);
          } else {
            d();
          }
        }, c);
        this.timers[o] = o;
      }
      if (this.results) {
        u = this.results.length;
        this.results[u] = null;
      }
      this.pending++;
      t.emit("start", r);
      var h = r(d);
      if (h && h.then && typeof h.then == "function") {
        h.then(function (e) {
          return d(null, e);
        }).catch(function (e) {
          return d(e || true);
        });
      }
      if (this.running && this.jobs.length > 0) {
        this.start();
      }
    }
    function d(e, s) {
      if (n && t.session === i) {
        n = false;
        t.pending--;
        if (o !== null) {
          delete t.timers[o];
          clearTimeout(o);
        }
        if (e) {
          t.emit("error", e, r);
        } else if (a === false) {
          if (u !== null) {
            t.results[u] = Array.prototype.slice.call(arguments, 1);
          }
          t.emit("success", s, r);
        }
        if (t.session === i) {
          if (t.pending === 0 && t.jobs.length === 0) {
            l.call(t);
          } else if (t.running) {
            t.start();
          }
        }
      }
    }
  };
  o.prototype.stop = function () {
    this.running = false;
  };
  o.prototype.end = function (e) {
    a.call(this);
    this.jobs.length = 0;
    this.pending = 0;
    l.call(this, e);
  };
}