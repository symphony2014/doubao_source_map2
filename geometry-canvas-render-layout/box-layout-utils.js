// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'nu' to 'layoutBoxes'
// - Renamed export 'tQ' to 'normalizePadding'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 578400
         */
module.exports = function (module, exports, require) {
  var arraySumHelper = require("array-sum-helper") /*id: 218454*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  function a(t, e, n, i) {
    return {
      start: t,
      end: e - n,
      center: (t + e) / 2 - n / 2
    }[i];
  }
  function s(t, e, n, r = "start", o = "start") {
    var s = t.x;
    var h = t.x + t.width;
    var l = t.y;
    var u = t.y + t.height;
    function c(t, n) {
      e.forEach(function (e) {
        if (t === "x") {
          e.x = a(s, h, e.width, n);
        } else if (t === "y") {
          e.y = a(l, u, e.height, n);
        }
      });
    }
    function p(t, n) {
      var r = t === "x" ? arraySumHelper.sumArray(e.map(function (t) {
        return t.width;
      })) : arraySumHelper.sumArray(e.map(function (t) {
        return t.height;
      }));
      var o = t === "x" ? a(s, h, r, n) : a(l, u, r, n);
      e.reduce(function (e, n) {
        if (t === "x") {
          n.x = e;
          return e + n.width;
        } else if (t === "y") {
          n.y = e;
          return e + n.height;
        } else {
          return undefined;
        }
      }, o);
    }
    if (n === "hbox") {
      p("x", o);
      c("y", r);
    } else if (n === "vbox") {
      p("y", o);
      c("x", r);
    }
  }
  function h(t) {
    var e = 0;
    var n = 0;
    var i = 0;
    var a = 0;
    if (isNumberUtil.isNumber(t)) {
      e = n = i = a = t;
    } else if (arrayIsArrayUtil.isArray(t)) {
      if (t.length === 1) {
        e = n = i = a = t[0];
      } else if (t.length === 2) {
        e = a = t[0];
        n = i = t[1];
      } else if (t.length === 3) {
        e = t[0];
        i = n = t[1];
        a = t[2];
      } else if (t.length === 4) {
        e = t[0];
        i = t[1];
        a = t[2];
        n = t[3];
      }
    }
    return {
      paddingTop: e,
      paddingLeft: n,
      paddingRight: i,
      paddingBottom: a
    };
  }
  require.d(exports, {
    layoutBoxes: function () {
      return s;
    },
    normalizePadding: function () {
      return h;
    }
  });
}