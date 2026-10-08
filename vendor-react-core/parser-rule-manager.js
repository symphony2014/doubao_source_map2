// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 624533
         */
module.exports = function (module, exports, require) {
  function e() {
    this.__rules__ = [];
    this.__cache__ = null;
  }
  e.prototype.__find__ = function (t) {
    for (var e = 0; e < this.__rules__.length; e++) {
      if (this.__rules__[e].name === t) {
        return e;
      }
    }
    return -1;
  };
  e.prototype.__compile__ = function () {
    var t = this;
    var e = [""];
    t.__rules__.forEach(function (t) {
      if (t.enabled) {
        t.alt.forEach(function (t) {
          if (e.indexOf(t) < 0) {
            e.push(t);
          }
        });
      }
    });
    t.__cache__ = {};
    e.forEach(function (e) {
      t.__cache__[e] = [];
      t.__rules__.forEach(function (r) {
        if (!!r.enabled && (!e || !(r.alt.indexOf(e) < 0))) {
          t.__cache__[e].push(r.fn);
        }
      });
    });
  };
  e.prototype.at = function (t, e, r) {
    var n = this.__find__(t);
    if (n === -1) {
      throw Error("Parser rule not found: " + t);
    }
    this.__rules__[n].fn = e;
    this.__rules__[n].alt = (r || {}).alt || [];
    this.__cache__ = null;
  };
  e.prototype.before = function (t, e, r, n) {
    var i = this.__find__(t);
    if (i === -1) {
      throw Error("Parser rule not found: " + t);
    }
    this.__rules__.splice(i, 0, {
      name: e,
      enabled: true,
      fn: r,
      alt: (n || {}).alt || []
    });
    this.__cache__ = null;
  };
  e.prototype.after = function (t, e, r, n) {
    var i = this.__find__(t);
    if (i === -1) {
      throw Error("Parser rule not found: " + t);
    }
    this.__rules__.splice(i + 1, 0, {
      name: e,
      enabled: true,
      fn: r,
      alt: (n || {}).alt || []
    });
    this.__cache__ = null;
  };
  e.prototype.push = function (t, e, r) {
    this.__rules__.push({
      name: t,
      enabled: true,
      fn: e,
      alt: (r || {}).alt || []
    });
    this.__cache__ = null;
  };
  e.prototype.enable = function (t, e) {
    if (!Array.isArray(t)) {
      t = [t];
    }
    var r = [];
    t.forEach(function (t) {
      var n = this.__find__(t);
      if (n < 0) {
        if (e) {
          return;
        }
        throw Error("Rules manager: invalid rule name " + t);
      }
      this.__rules__[n].enabled = true;
      r.push(t);
    }, this);
    this.__cache__ = null;
    return r;
  };
  e.prototype.enableOnly = function (t, e) {
    if (!Array.isArray(t)) {
      t = [t];
    }
    this.__rules__.forEach(function (t) {
      t.enabled = false;
    });
    this.enable(t, e);
  };
  e.prototype.disable = function (t, e) {
    if (!Array.isArray(t)) {
      t = [t];
    }
    var r = [];
    t.forEach(function (t) {
      var n = this.__find__(t);
      if (n < 0) {
        if (e) {
          return;
        }
        throw Error("Rules manager: invalid rule name " + t);
      }
      this.__rules__[n].enabled = false;
      r.push(t);
    }, this);
    this.__cache__ = null;
    return r;
  };
  e.prototype.getRules = function (t) {
    if (this.__cache__ === null) {
      this.__compile__();
    }
    return this.__cache__[t] || [];
  };
  module.exports = e;
}