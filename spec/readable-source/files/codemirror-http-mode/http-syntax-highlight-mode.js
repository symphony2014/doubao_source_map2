// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 77594.68482975.js
         * chunkId: 77594
         * moduleId: 511906
         */
module.exports = function (module, exports, require) {
  function u(r, t) {
    r.skipToEnd();
    t.cur = f;
    return "error";
  }
  function e(r, t) {
    if (r.match(/^HTTP\/\d\.\d/)) {
      t.cur = c;
      return "keyword";
    } else if (r.match(/^[A-Z]+/) && /[ \t]/.test(r.peek())) {
      t.cur = i;
      return "keyword";
    } else {
      return u(r, t);
    }
  }
  function c(r, t) {
    var n = r.match(/^\d+/);
    if (!n) {
      return u(r, t);
    }
    t.cur = o;
    var e = Number(n[0]);
    if (e >= 100 && e < 400) {
      return "atom";
    } else {
      return "error";
    }
  }
  function o(r, t) {
    r.skipToEnd();
    t.cur = f;
    return null;
  }
  function i(r, t) {
    r.eatWhile(/\S/);
    t.cur = a;
    return "string.special";
  }
  function a(r, t) {
    if (r.match(/^HTTP\/\d\.\d$/)) {
      t.cur = f;
      return "keyword";
    } else {
      return u(r, t);
    }
  }
  function f(r) {
    if (!r.sol() || r.eat(/[ \t]/)) {
      r.skipToEnd();
      return "string";
    } else if (r.match(/^.*?:/)) {
      return "atom";
    } else {
      r.skipToEnd();
      return "error";
    }
  }
  function s(r) {
    r.skipToEnd();
    return null;
  }
  let d = {
    name: "http",
    token: function (r, t) {
      var n = t.cur;
      if (n != f && n != s && r.eatSpace()) {
        return null;
      } else {
        return n(r, t);
      }
    },
    blankLine: function (r) {
      r.cur = s;
    },
    startState: function () {
      return {
        cur: e
      };
    }
  };
  require.r(exports);
  require.d(exports, {
    http: function () {
      return d;
    }
  });
}