// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'generateRandomString'
// - Renamed export 'b' to 'getMergeCellState'
// - Renamed export 'c' to 'createRowId'
// - Renamed export 'd' to 'createColId'
// - Renamed export 'e' to 'createCellId'
// - Renamed export 'f' to 'parseCellId'
// - Renamed export 'h' to 'generateCellIds'
// - Renamed export 'i' to 'isValidCellId'
// - Renamed export 'l' to 'createTableClassName'
// - Renamed export 'n' to 'generateRowSessionId'
// - Renamed export 'o' to 'parseTableClassName'
// - Renamed export 'p' to 'parseSpaceSeparatedIds'
// - Renamed export 'q' to 'extractIdsFromText'
// - Renamed export 'r' to 'getVectorCellIds'
// - Renamed export 'u' to 'checkVectorCellContains'
// - Renamed export 'w' to 'getMergeDisabledState'
// - Renamed export 'x' to 'convertIdsToIndices'
// - Renamed export 'y' to 'getCellDataByIds'
// - Renamed export 'z' to 'checkMergeCellState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 693152
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  function o(e) {
    var t = "abcdefghijklmnopqrstuvwyz0123456789";
    var r = "";
    var n = 0;
    for (; n < e; n++) {
      r += t[function (e, t) {
        if (t == null) {
          t = e || 4294967296;
          e = 0;
        }
        if (typeof e != "number") {
          throw Error("invalid arguments to getRandomInt: " + e + ", " + t);
        }
        return Math.floor((window.crypto && window.crypto.getRandomValues ? window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296 : Math.random()) * (t - e)) + e;
      }(t.length)];
    }
    return r;
  }
  function a() {
    return "rs" + o(32);
  }
  function s() {
    return "cs" + o(32);
  }
  function l() {
    return "r1" + o(32);
  }
  function u() {
    return "c1" + o(32);
  }
  function c(e, t) {
    if (typeof e != "string" || typeof t != "string") {
      throw Error("got non-string rowId or colId: " + e + " " + t);
    }
    if (e.indexOf(",") !== -1 || t.indexOf(",") !== -1) {
      throw Error("got rowId or colId: " + e + " " + t);
    }
    return "x" + e + "x" + t;
  }
  function h(e) {
    var t = e.split("x");
    return {
      rowId: t[1],
      colId: t[2]
    };
  }
  function d(e, t, r = false) {
    var n = [];
    e.forEach(function (e) {
      t.forEach(function (t) {
        if (r) {
          n.push(c(t, e));
        } else {
          n.push(c(e, t));
        }
      });
    });
    return n;
  }
  function f(e) {
    return e.charAt(0) === "x" && e.length === 70;
  }
  function A(e, t) {
    return "aceTable-" + e + " " + t;
  }
  function g(e) {
    var t = /(^|\s*)aceTable-([a-zA-Z0-9]+)\s([a-zA-Z0-9]+)(\s|$)/.exec(e);
    if (t) {
      return {
        rowId: t[2],
        colId: t[3]
      };
    } else {
      return null;
    }
  }
  function p(e) {
    var t = /^([a-zA-Z0-9]+)\s([a-zA-Z0-9]+)$/.exec(e);
    if (t) {
      return {
        rowId: t[1],
        colId: t[2]
      };
    } else {
      return null;
    }
  }
  function m(e) {
    var t = /([a-zA-Z0-9]+)\s([a-zA-Z0-9]+)/.exec(e);
    if (t) {
      return {
        rowId: t[1],
        colId: t[2]
      };
    } else {
      return null;
    }
  }
  function y(e, t) {
    var r = t.rowId;
    var n = t.colId;
    var i = [];
    var o = e[r] && e[r].vectorIds;
    var a = e[n] && e[n].vectorIds;
    if (o && a) {
      o.forEach(function (e) {
        a.forEach(function (t) {
          i.push(c(e, t));
        });
      });
    }
    return i;
  }
  function v(e, t, r) {
    var n = m(t);
    if (n) {
      return y(r, n).includes(e);
    }
  }
  function b(e, t, r, o) {
    if (!e.length || !e[0]) {
      return "";
    }
    if (e.length === 1 && (!e[0].mergeCellID || !e[0].rowspan || !e[0].colspan)) {
      return "disabled";
    }
    var a;
    var s = function (e, t, r) {
      var o = new Map();
      w(e, t, r).forEach(function (e) {
        var t = typescriptHelpers_1.readIterator(typescriptHelpers_1.spreadArray(e), 2);
        var r = t[0];
        var i = t[1];
        if (o.has(r)) {
          var a = o.get(r);
          a.push(i);
          o.set(r, a);
        } else {
          o.set(r, [i]);
        }
      });
      var a = Array.from(o.keys()).sort(function (e, t) {
        return e - t;
      });
      var s = Array.from(o.values());
      if (!a.length) {
        return "";
      }
      var l = false;
      var u = false;
      if (a.length === 1) {
        u = true;
        s.forEach(function (e) {
          var t = e.sort(function (e, t) {
            return e - t;
          });
          var r = t.length;
          var n = 0;
          for (; n < r; n++) {
            if (r[n] !== 0) {
              if (n > 0 && t[n - 1] + 1 !== t[n]) {
                l = false;
                break;
              }
              l = true;
            }
          }
        });
      } else {
        s.forEach(function (e, t) {
          var r = e.sort(function (e, t) {
            return e - t;
          });
          var n = r.length;
          var o = 0;
          for (; o < n; o++) {
            if (n[o] !== 0) {
              if (o > 0 && r[o - 1] + 1 !== r[o]) {
                l = false;
                break;
              }
              l = true;
            }
          }
          if (t !== 0) {
            u = deepEqualUtil_1.deepEqual(s[t - 1], e);
          }
        });
      }
      return !!u && !!l;
    }(t, r, o);
    if (!s) {
      if (s === false) {
        return "disabled";
      } else {
        return s;
      }
    }
    var l = new Set();
    var u = e.length;
    var c = 0;
    for (; c < u; c++) {
      var h = e[c];
      if (!h || !h.mergeCellID) {
        return "unmerge";
      }
      a = "merged";
      l.add(h.mergeCellID);
    }
    if (l.size > 1) {
      a = "unmerge";
    }
    return a;
  }
  function w(e, t, r) {
    var n = [];
    r.forEach(function (r) {
      var i = h(r);
      if (i) {
        var o = i.rowId;
        var a = i.colId;
        var s = e.indexOf(o);
        var l = t.indexOf(a);
        n.push([s, l]);
      }
    });
    return n;
  }
  function C(e, t, r, i) {
    if (typeof r == "string") {
      r = [r];
    }
    var o = new Set();
    var a = w(e, t, r);
    if (a.length) {
      a.forEach(function (e) {
        var t = typescriptHelpers_1.readIterator(typescriptHelpers_1.spreadArray(e), 2);
        var r = t[0];
        var a = t[1];
        if (r !== -1 && a !== -1) {
          o.add(i[r][a]);
        }
      });
      return Array.from(o);
    } else {
      return null;
    }
  }
  function E(e, t, r, n) {
    var i = C(t, r, e, n);
    var o = false;
    if (i && i.length) {
      var a = i[0].mergeCellID;
      var s = i[0].colspan;
      var l = i[0].rowspan;
      if (a && (s !== undefined || l !== undefined)) {
        if (Number(s) === 0 || Number(l) === 0) {
          return true;
        }
        o = false;
      }
    }
    return o;
  }
  require.d(exports, {
    generateRandomString: function () {
      return o;
    },
    getMergeCellState: function () {
      return s;
    },
    createRowId: function () {
      return l;
    },
    createColId: function () {
      return u;
    },
    createCellId: function () {
      return c;
    },
    parseCellId: function () {
      return h;
    },
    generateCellIds: function () {
      return d;
    },
    isValidCellId: function () {
      return f;
    },
    createTableClassName: function () {
      return A;
    },
    generateRowSessionId: function () {
      return a;
    },
    parseTableClassName: function () {
      return g;
    },
    parseSpaceSeparatedIds: function () {
      return p;
    },
    extractIdsFromText: function () {
      return m;
    },
    getVectorCellIds: function () {
      return y;
    },
    checkVectorCellContains: function () {
      return v;
    },
    getMergeDisabledState: function () {
      return b;
    },
    convertIdsToIndices: function () {
      return w;
    },
    getCellDataByIds: function () {
      return C;
    },
    checkMergeCellState: function () {
      return E;
    }
  });
}