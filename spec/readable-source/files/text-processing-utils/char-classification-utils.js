// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AF' to 'isHexDigit'
// - Renamed export 'Av' to 'isControlChar'
// - Renamed export 'B8' to 'isWhitespace'
// - Renamed export 'Ch' to 'isInvalidChar'
// - Renamed export 'H$' to 'isAlphaNumeric'
// - Renamed export 'Xh' to 'isPunctuation'
// - Renamed export 'jv' to 'isLetter'
// - Renamed export 'n9' to 'isTokenChar'
// - Renamed export 'pY' to 'isDigit'
// - Renamed export 'sR' to 'isSpecialChar'
// - Renamed export 'xz' to 'isSpaceLike'
// - Renamed export 'z3' to 'isWhitespaceOrNeg'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 140430
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var o;
  var u;
  var a;
  var c;
  var l;
  var s;
  n = /[A-Za-z]/;
  let f = function (e) {
    return e !== null && e > -1 && n.test(String.fromCharCode(e));
  };
  i = /[\dA-Za-z]/;
  let p = function (e) {
    return e !== null && e > -1 && i.test(String.fromCharCode(e));
  };
  o = /[#-'*+\--9=?A-Z^-~]/;
  let h = function (e) {
    return e !== null && e > -1 && o.test(String.fromCharCode(e));
  };
  function d(e) {
    return e !== null && (e < 32 || e === 127);
  }
  u = /\d/;
  let g = function (e) {
    return e !== null && e > -1 && u.test(String.fromCharCode(e));
  };
  a = /[\dA-Fa-f]/;
  let m = function (e) {
    return e !== null && e > -1 && a.test(String.fromCharCode(e));
  };
  c = /[!-/:-@[-`{-~]/;
  let b = function (e) {
    return e !== null && e > -1 && c.test(String.fromCharCode(e));
  };
  function D(e) {
    return e !== null && e < -2;
  }
  function y(e) {
    return e !== null && (e < 0 || e === 32);
  }
  function v(e) {
    return e === -2 || e === -1 || e === 32;
  }
  l = /\p{P}|\p{S}/u;
  let x = function (e) {
    return e !== null && e > -1 && l.test(String.fromCharCode(e));
  };
  s = /\s/;
  let k = function (e) {
    return e !== null && e > -1 && s.test(String.fromCharCode(e));
  };
  require.d(exports, {
    isHexDigit: function () {
      return m;
    },
    isControlChar: function () {
      return d;
    },
    isWhitespace: function () {
      return k;
    },
    isInvalidChar: function () {
      return D;
    },
    isAlphaNumeric: function () {
      return p;
    },
    isPunctuation: function () {
      return x;
    },
    isLetter: function () {
      return f;
    },
    isTokenChar: function () {
      return h;
    },
    isDigit: function () {
      return g;
    },
    isSpecialChar: function () {
      return b;
    },
    isSpaceLike: function () {
      return v;
    },
    isWhitespaceOrNeg: function () {
      return y;
    }
  });
}