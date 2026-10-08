// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 468009
         */
module.exports = function (module, exports, require) {
  module.exports = function (e) {
    var t = {};
    function n(r) {
      if (t[r]) {
        return t[r].exports;
      }
      var i = t[r] = {
        exports: {},
        id: r,
        loaded: false
      };
      e[r].call(i.exports, i, i.exports, n);
      i.loaded = true;
      return i.exports;
    }
    n.m = e;
    n.c = t;
    n.p = "";
    return n(0);
  }([function (e, t, n) {
    e.exports = n(1);
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = n(2);
    Object.defineProperty(t, "combineChunks", {
      enumerable: true,
      get: function () {
        return r.combineChunks;
      }
    });
    Object.defineProperty(t, "fillInChunks", {
      enumerable: true,
      get: function () {
        return r.fillInChunks;
      }
    });
    Object.defineProperty(t, "findAll", {
      enumerable: true,
      get: function () {
        return r.findAll;
      }
    });
    Object.defineProperty(t, "findChunks", {
      enumerable: true,
      get: function () {
        return r.findChunks;
      }
    });
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.findAll = function (e) {
      var t = e.autoEscape;
      var o = e.caseSensitive;
      var _ = e.findChunks;
      var a = _ === undefined ? r : _;
      var E = e.sanitize;
      var l = e.searchWords;
      var c = e.textToHighlight;
      return i({
        chunksToHighlight: n({
          chunks: a({
            autoEscape: t,
            caseSensitive: o !== undefined && o,
            sanitize: E,
            searchWords: l,
            textToHighlight: c
          })
        }),
        totalLength: c ? c.length : 0
      });
    };
    var n = t.combineChunks = function (e) {
      var t = e.chunks;
      return t.sort(function (e, t) {
        return e.start - t.start;
      }).reduce(function (e, t) {
        if (e.length === 0) {
          return [t];
        }
        var n = e.pop();
        if (t.start <= n.end) {
          var r = Math.max(n.end, t.end);
          e.push({
            highlight: false,
            start: n.start,
            end: r
          });
        } else {
          e.push(n, t);
        }
        return e;
      }, []);
    };
    function r(e) {
      var t = e.autoEscape;
      var n = e.caseSensitive;
      var r = e.sanitize;
      var i = r === undefined ? o : r;
      var _ = e.searchWords;
      var a = e.textToHighlight;
      a = i(a);
      return _.filter(function (e) {
        return e;
      }).reduce(function (e, r) {
        r = i(r);
        if (t) {
          r = r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        }
        var o = new RegExp(r, n ? "g" : "gi");
        var _ = undefined;
        while (_ = o.exec(a)) {
          var E = _.index;
          var l = o.lastIndex;
          if (l > E) {
            e.push({
              highlight: false,
              start: E,
              end: l
            });
          }
          if (_.index === o.lastIndex) {
            o.lastIndex++;
          }
        }
        return e;
      }, []);
    }
    t.findChunks = r;
    var i = t.fillInChunks = function (e) {
      var t = e.chunksToHighlight;
      var n = e.totalLength;
      var r = [];
      function i(e, t, n) {
        if (t - e > 0) {
          r.push({
            start: e,
            end: t,
            highlight: n
          });
        }
      }
      if (t.length === 0) {
        i(0, n, false);
      } else {
        var o = 0;
        t.forEach(function (e) {
          i(o, e.start, false);
          i(e.start, e.end, true);
          o = e.end;
        });
        i(o, n, false);
      }
      return r;
    };
    function o(e) {
      return e;
    }
  }]);
}