// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'InternSet'
// - Renamed export 'L' to 'InternMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 636784
         */
module.exports = function (module, exports, require) {
  class i extends Map {
    constructor(t, n = s) {
      super();
      Object.defineProperties(this, {
        _intern: {
          value: new Map()
        },
        _key: {
          value: n
        }
      });
      if (t != null) {
        for (let [n, e] of t) {
          this.set(n, e);
        }
      }
    }
    get(t) {
      return super.get(o(this, t));
    }
    has(t) {
      return super.has(o(this, t));
    }
    set(t, n) {
      return super.set(u(this, t), n);
    }
    delete(t) {
      return super.delete(a(this, t));
    }
  }
  class r extends Set {
    constructor(t, n = s) {
      super();
      Object.defineProperties(this, {
        _intern: {
          value: new Map()
        },
        _key: {
          value: n
        }
      });
      if (t != null) {
        for (let n of t) {
          this.add(n);
        }
      }
    }
    has(t) {
      return super.has(o(this, t));
    }
    add(t) {
      return super.add(u(this, t));
    }
    delete(t) {
      return super.delete(a(this, t));
    }
  }
  function o({
    _intern: t,
    _key: n
  }, e) {
    let i = n(e);
    if (t.has(i)) {
      return t.get(i);
    } else {
      return e;
    }
  }
  function u({
    _intern: t,
    _key: n
  }, e) {
    let i = n(e);
    if (t.has(i)) {
      return t.get(i);
    } else {
      t.set(i, e);
      return e;
    }
  }
  function a({
    _intern: t,
    _key: n
  }, e) {
    let i = n(e);
    if (t.has(i)) {
      e = t.get(i);
      t.delete(i);
    }
    return e;
  }
  function s(t) {
    if (t !== null && typeof t == "object") {
      return t.valueOf();
    } else {
      return t;
    }
  }
  require.d(exports, {
    InternSet: function () {
      return r;
    },
    InternMap: function () {
      return i;
    }
  });
}