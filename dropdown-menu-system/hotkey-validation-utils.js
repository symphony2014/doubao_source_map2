// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18380.923ae249.js
         * chunkId: 18380
         * moduleId: 691069
         */
module.exports = function (module, exports, require) {
  var r = typeof window != "undefined" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
  var n = {
    alt: "altKey",
    control: "ctrlKey",
    meta: "metaKey",
    shift: "shiftKey"
  };
  var u = {
    add: "+",
    break: "pause",
    cmd: "meta",
    command: "meta",
    ctl: "control",
    ctrl: "control",
    del: "delete",
    down: "arrowdown",
    esc: "escape",
    ins: "insert",
    left: "arrowleft",
    mod: r ? "meta" : "control",
    opt: "alt",
    option: "alt",
    return: "enter",
    right: "arrowright",
    space: " ",
    spacebar: " ",
    up: "arrowup",
    win: "meta",
    windows: "meta"
  };
  var o = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    control: 17,
    alt: 18,
    pause: 19,
    capslock: 20,
    escape: 27,
    " ": 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    arrowleft: 37,
    arrowup: 38,
    arrowright: 39,
    arrowdown: 40,
    insert: 45,
    delete: 46,
    meta: 91,
    numlock: 144,
    scrolllock: 145,
    ";": 186,
    "=": 187,
    ",": 188,
    "-": 189,
    ".": 190,
    "/": 191,
    "`": 192,
    "[": 219,
    "\\": 220,
    "]": 221,
    "'": 222
  };
  var a = 1;
  for (; a < 20; a++) {
    o["f" + a] = 111 + a;
  }
  function i(e, t, r) {
    if (!!t && !("byKey" in t)) {
      r = t;
      t = null;
    }
    if (!Array.isArray(e)) {
      e = [e];
    }
    var a = e.map(function (e) {
      return function (e, t) {
        var r = t && t.byKey;
        var a = {};
        var i = (e = e.replace("++", "+add")).split("+");
        var l = i.length;
        for (var c in n) {
          a[n[c]] = false;
        }
        var d = true;
        var f = false;
        var p = undefined;
        try {
          var h;
          var v = i[Symbol.iterator]();
          for (; !(d = (h = v.next()).done); d = true) {
            var D = h.value;
            var g = D.endsWith("?") && D.length > 1;
            if (g) {
              D = D.slice(0, -1);
            }
            var C = s(D);
            var m = n[C];
            if (D.length > 1 && !m && !u[D] && !o[C]) {
              throw TypeError("Unknown modifier: \"" + D + "\"");
            }
            if (l === 1 || !m) {
              if (r) {
                a.key = C;
              } else {
                a.which = function (e) {
                  return o[e = s(e)] || e.toUpperCase().charCodeAt(0);
                }(D);
              }
            }
            if (m) {
              a[m] = !g || null;
            }
          }
        } catch (e) {
          f = true;
          p = e;
        } finally {
          try {
            if (!d && v.return) {
              v.return();
            }
          } finally {
            if (f) {
              throw p;
            }
          }
        }
        return a;
      }(e, t);
    });
    function i(e) {
      return a.some(function (t) {
        return function (e, t) {
          for (var r in e) {
            var n = e[r];
            var u = undefined;
            if (n != null && ((u = r === "key" && t.key != null ? t.key.toLowerCase() : r === "which" ? n === 91 && t.which === 93 ? 91 : t.which : t[r]) != null || n !== false) && u !== n) {
              return false;
            }
          }
          return true;
        }(t, e);
      });
    }
    if (r == null) {
      return i;
    } else {
      return i(r);
    }
  }
  function s(e) {
    return e = u[e = e.toLowerCase()] || e;
  }
  exports.isHotkey = i;
  exports.isKeyHotkey = function (e, t) {
    return i(e, {
      byKey: true
    }, t);
  };
}