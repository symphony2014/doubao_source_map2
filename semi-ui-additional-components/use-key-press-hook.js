// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useKeyPress'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 707737
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var typeCheckUtils = require("type-check-utils") /*id: 916406*/;
  var browserDomValueUnwrap = require("browser-dom-value-unwrap") /*id: 999608*/;
  var deepResourceEffectHook = require("deep-resource-effect-hook") /*id: 295232*/;
  var s = {
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pausebreak: 19,
    capslock: 20,
    esc: 27,
    space: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    leftarrow: 37,
    uparrow: 38,
    rightarrow: 39,
    downarrow: 40,
    insert: 45,
    delete: 46,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftwindowkey: 91,
    rightwindowkey: 92,
    meta: /(mac|iphone|ipod|ipad)/i.test(typeof navigator != "undefined" ? navigator == null ? undefined : navigator.platform : "") ? [91, 93] : [91, 92],
    selectkey: 93,
    numpad0: 96,
    numpad1: 97,
    numpad2: 98,
    numpad3: 99,
    numpad4: 100,
    numpad5: 101,
    numpad6: 102,
    numpad7: 103,
    numpad8: 104,
    numpad9: 105,
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalpoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrolllock: 145,
    semicolon: 186,
    equalsign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardslash: 191,
    graveaccent: 192,
    openbracket: 219,
    backslash: 220,
    closebracket: 221,
    singlequote: 222
  };
  var u = {
    ctrl: function (e) {
      return e.ctrlKey;
    },
    shift: function (e) {
      return e.shiftKey;
    },
    alt: function (e) {
      return e.altKey;
    },
    meta: function (e) {
      if (e.type === "keyup") {
        return s.meta.includes(e.keyCode);
      } else {
        return e.metaKey;
      }
    }
  };
  function d(e, t, n) {
    if (!e.key) {
      return false;
    }
    if (typeCheckUtils.isNumber(t)) {
      return e.keyCode === t;
    }
    var o;
    var a;
    var l;
    var d = t.split(".");
    var c = 0;
    try {
      var h = typescriptRuntimeHelpers.iteratorValues(d);
      var f = h.next();
      for (; !f.done; f = h.next()) {
        var p = f.value;
        var v = u[p];
        var g = s[p.toLowerCase()];
        if (v && v(e) || g && g === e.keyCode) {
          c++;
        }
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        if (f && !f.done && (l = h.return)) {
          l.call(h);
        }
      } finally {
        if (a) {
          throw a.error;
        }
      }
    }
    if (n) {
      return c === d.length && (o = Object.keys(u).reduce(function (t, n) {
        if (u[n](e)) {
          return t + 1;
        } else {
          return t;
        }
      }, 0), ([16, 17, 18, 91, 92].includes(e.keyCode) ? o : o + 1) === d.length);
    } else {
      return c === d.length;
    }
  }
  var c = ["keydown"];
  function h(e, t, n) {
    var s = n || {};
    var u = s.events;
    var h = u === undefined ? c : u;
    var f = s.target;
    var p = s.exactMatch;
    var v = p !== undefined && p;
    var g = s.useCapture;
    var m = g !== undefined && g;
    var y = useLatestRef_1.useLatestRef(t);
    var b = useLatestRef_1.useLatestRef(e);
    deepResourceEffectHook.useDeepResourceHook(function () {
      var e;
      var t;
      var n;
      var o = browserDomValueUnwrap.unwrapBrowserValue(f, window);
      if (o) {
        function l(e) {
          var t;
          var n;
          if ((t = b.current, typeCheckUtils.isFunction(t) ? t : typeCheckUtils.isString(t) || typeCheckUtils.isNumber(t) ? function (e) {
            return d(e, t, v);
          } : Array.isArray(t) ? function (e) {
            return t.some(function (t) {
              return d(e, t, v);
            });
          } : function () {
            return !!t;
          })(e)) {
            if ((n = y.current) === null || n === undefined) {
              return undefined;
            } else {
              return n.call(y, e);
            }
          }
        }
        try {
          var s = typescriptRuntimeHelpers.iteratorValues(h);
          var u = s.next();
          for (; !u.done; u = s.next()) {
            var c = u.value;
            if ((n = o == null ? undefined : o.addEventListener) !== null && n !== undefined) {
              n.call(o, c, l, m);
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (u && !u.done && (t = s.return)) {
              t.call(s);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
        return function () {
          try {
            var e;
            var t;
            var n;
            var r = typescriptRuntimeHelpers.iteratorValues(h);
            var a = r.next();
            for (; !a.done; a = r.next()) {
              var s = a.value;
              if ((n = o == null ? undefined : o.removeEventListener) !== null && n !== undefined) {
                n.call(o, s, l, m);
              }
            }
          } catch (t) {
            e = {
              error: t
            };
          } finally {
            try {
              if (a && !a.done && (t = r.return)) {
                t.call(r);
              }
            } finally {
              if (e) {
                throw e.error;
              }
            }
          }
        };
      }
    }, [h], f);
  }
  require.d(exports, {
    useKeyPress: function () {
      return h;
    }
  });
}