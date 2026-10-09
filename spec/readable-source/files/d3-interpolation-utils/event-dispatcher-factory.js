// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createDispatcher'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 522958
         */
module.exports = function (module, exports, require) {
  var e = {
    value: () => {}
  };
  function i() {
    var t;
    var n = 0;
    var e = arguments.length;
    var i = {};
    for (; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in i || /[\s.]/.test(t)) {
        throw Error("illegal type: " + t);
      }
      i[t] = [];
    }
    return new r(i);
  }
  function r(t) {
    this._ = t;
  }
  function o(t, n, i) {
    var r = 0;
    var o = t.length;
    for (; r < o; ++r) {
      if (t[r].name === n) {
        t[r] = e;
        t = t.slice(0, r).concat(t.slice(r + 1));
        break;
      }
    }
    if (i != null) {
      t.push({
        name: n,
        value: i
      });
    }
    return t;
  }
  r.prototype = i.prototype = {
    constructor: r,
    on: function (t, n) {
      var e;
      var i = this._;
      var r = (t + "").trim().split(/^|\s+/).map(function (t) {
        var n = "";
        var e = t.indexOf(".");
        if (e >= 0) {
          n = t.slice(e + 1);
          t = t.slice(0, e);
        }
        if (t && !i.hasOwnProperty(t)) {
          throw Error("unknown type: " + t);
        }
        return {
          type: t,
          name: n
        };
      });
      var u = -1;
      var a = r.length;
      if (arguments.length < 2) {
        while (++u < a) {
          if ((e = (t = r[u]).type) && (e = function (t, n) {
            var e;
            var i = 0;
            var r = t.length;
            for (; i < r; ++i) {
              if ((e = t[i]).name === n) {
                return e.value;
              }
            }
          }(i[e], t.name))) {
            return e;
          }
        }
        return;
      }
      if (n != null && typeof n != "function") {
        throw Error("invalid callback: " + n);
      }
      while (++u < a) {
        if (e = (t = r[u]).type) {
          i[e] = o(i[e], t.name, n);
        } else if (n == null) {
          for (e in i) {
            i[e] = o(i[e], t.name, null);
          }
        }
      }
      return this;
    },
    copy: function () {
      var t = {};
      var n = this._;
      for (var e in n) {
        t[e] = n[e].slice();
      }
      return new r(t);
    },
    call: function (t, n) {
      if ((e = arguments.length - 2) > 0) {
        var e;
        var i;
        var r = Array(e);
        var o = 0;
        for (; o < e; ++o) {
          r[o] = arguments[o + 2];
        }
      }
      if (!this._.hasOwnProperty(t)) {
        throw Error("unknown type: " + t);
      }
      i = this._[t];
      o = 0;
      e = i.length;
      for (; o < e; ++o) {
        i[o].value.apply(n, r);
      }
    },
    apply: function (t, n, e) {
      if (!this._.hasOwnProperty(t)) {
        throw Error("unknown type: " + t);
      }
      var i = this._[t];
      var r = 0;
      var o = i.length;
      for (; r < o; ++r) {
        i[r].value.apply(n, e);
      }
    }
  };
  exports.createDispatcher = i;
}