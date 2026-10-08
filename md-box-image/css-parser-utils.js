// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FK' to 'currentIndex'
// - Renamed export 'JG' to 'assignNodeProps'
// - Renamed export 'QU' to 'skipToSpecial'
// - Renamed export 'Qb' to 'normalizeSpace'
// - Renamed export 'Tb' to 'currentCharCode'
// - Renamed export 'Ud' to 'currentPosition'
// - Renamed export 'cE' to 'resetInput'
// - Renamed export 'dH' to 'createNode'
// - Renamed export 'fj' to 'peekCharCode'
// - Renamed export 'iF' to 'trimContent'
// - Renamed export 'kq' to 'parseHexValue'
// - Renamed export 'lp' to 'nextChar'
// - Renamed export 'mp' to 'prevChar'
// - Renamed export 'q6' to 'parseComment'
// - Renamed export 'r' to 'getCharType'
// - Renamed export 'tP' to 'sliceString'
// - Renamed export 'un' to 'initParser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 310243
         */
module.exports = function (module, exports, require) {
  var stringUtils = require("string-utils") /*id: 267634*/;
  var i = 1;
  var o = 1;
  var s = 0;
  var c = 0;
  var u = 0;
  var a = "";
  function f(e, t, n, r, s, c, u) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: s,
      children: c,
      line: i,
      column: o,
      length: u,
      return: ""
    };
  }
  function l(e, t) {
    return stringUtils.assign(f("", null, null, "", null, null, 0), e, {
      length: -e.length
    }, t);
  }
  function d() {
    return u;
  }
  function p() {
    u = c > 0 ? stringUtils.charCode(a, --c) : 0;
    o--;
    if (u === 10) {
      o = 1;
      i--;
    }
    return u;
  }
  function h() {
    u = c < s ? stringUtils.charCode(a, c++) : 0;
    o++;
    if (u === 10) {
      o = 1;
      i++;
    }
    return u;
  }
  function v() {
    return stringUtils.charCode(a, c);
  }
  function m() {
    return c;
  }
  function g(e, t) {
    return stringUtils.slice(a, e, t);
  }
  function y(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function b(e) {
    i = o = 1;
    s = stringUtils.getSize(a = e);
    c = 0;
    return [];
  }
  function x(e) {
    a = "";
    return e;
  }
  function E(e) {
    return stringUtils.trim(g(c - 1, function e(t) {
      while (h()) {
        switch (u) {
          case t:
            return c;
          case 34:
          case 39:
            if (t !== 34 && t !== 39) {
              e(u);
            }
            break;
          case 40:
            if (t === 41) {
              e(t);
            }
            break;
          case 92:
            h();
        }
      }
      return c;
    }(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function w(e) {
    while (u = v()) {
      if (u < 33) {
        h();
      } else {
        break;
      }
    }
    if (y(e) > 2 || y(u) > 3) {
      return "";
    } else {
      return " ";
    }
  }
  function C(e, t) {
    while (--t && h() && !(u < 48) && !(u > 102) && (!(u > 57) || !(u < 65)) && (!(u > 70) || !(u < 97)));
    return g(e, c + (t < 6 && v() == 32 && h() == 32));
  }
  function $(e, t) {
    while (h()) {
      if (e + u === 57) {
        break;
      } else if (e + u === 84 && v() === 47) {
        break;
      }
    }
    return "/*" + g(t, c - 1) + "*" + stringUtils.fromCharCode(e === 47 ? e : h());
  }
  function _(e) {
    while (!y(v())) {
      h();
    }
    return g(e, c);
  }
  require.d(exports, {
    currentIndex: function () {
      return c;
    },
    assignNodeProps: function () {
      return l;
    },
    skipToSpecial: function () {
      return _;
    },
    normalizeSpace: function () {
      return w;
    },
    currentCharCode: function () {
      return d;
    },
    currentPosition: function () {
      return m;
    },
    resetInput: function () {
      return x;
    },
    createNode: function () {
      return f;
    },
    peekCharCode: function () {
      return v;
    },
    trimContent: function () {
      return E;
    },
    parseHexValue: function () {
      return C;
    },
    nextChar: function () {
      return h;
    },
    prevChar: function () {
      return p;
    },
    parseComment: function () {
      return $;
    },
    getCharType: function () {
      return y;
    },
    sliceString: function () {
      return g;
    },
    initParser: function () {
      return b;
    }
  });
}