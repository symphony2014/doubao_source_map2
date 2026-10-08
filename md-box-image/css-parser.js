// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MY' to 'parseCss'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 363110
         */
module.exports = function (module, exports, require) {
  var cssSyntaxConstants = require("css-syntax-constants") /*id: 115450*/;
  var stringUtils = require("string-utils") /*id: 267634*/;
  var cssParserUtils = require("css-parser-utils") /*id: 310243*/;
  function s(e) {
    return cssParserUtils.resetInput(function e(t, n, s, a, f, l, d, p, h) {
      var v;
      var m;
      var g;
      var y = 0;
      var b = 0;
      var x = d;
      var E = 0;
      var w = 0;
      var C = 0;
      var $ = 1;
      var _ = 1;
      var N = 1;
      var S = 0;
      var k = "";
      var T = f;
      var A = l;
      var O = a;
      var I = k;
      while (_) {
        C = S;
        switch (S = cssParserUtils.nextChar()) {
          case 40:
            if (C != 108 && stringUtils.charCode(I, x - 1) == 58) {
              if (stringUtils.indexOf(I += stringUtils.replace(cssParserUtils.trimContent(S), "&", "&\f"), "&\f") != -1) {
                N = -1;
              }
              break;
            }
          case 34:
          case 39:
          case 91:
            I += cssParserUtils.trimContent(S);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            I += cssParserUtils.normalizeSpace(C);
            break;
          case 92:
            I += cssParserUtils.parseHexValue(cssParserUtils.currentPosition() - 1, 7);
            continue;
          case 47:
            switch (cssParserUtils.peekCharCode()) {
              case 42:
              case 47:
                stringUtils.pushItem((v = cssParserUtils.parseComment(cssParserUtils.nextChar(), cssParserUtils.currentPosition()), m = n, g = s, cssParserUtils.createNode(v, m, g, cssSyntaxConstants.cssComment, stringUtils.fromCharCode(cssParserUtils.currentCharCode()), stringUtils.slice(v, 2, -2), 0)), h);
                break;
              default:
                I += "/";
            }
            break;
          case $ * 123:
            p[y++] = stringUtils.getSize(I) * N;
          case $ * 125:
          case 59:
          case 0:
            switch (S) {
              case 0:
              case 125:
                _ = 0;
              case 59 + b:
                if (N == -1) {
                  I = stringUtils.replace(I, /\f/g, "");
                }
                if (w > 0 && stringUtils.getSize(I) - x) {
                  stringUtils.pushItem(w > 32 ? u(I + ";", a, s, x - 1) : u(stringUtils.replace(I, " ", "") + ";", a, s, x - 2), h);
                }
                break;
              case 59:
                I += ";";
              default:
                stringUtils.pushItem(O = c(I, n, s, y, b, f, p, k, T = [], A = [], x), l);
                if (S === 123) {
                  if (b === 0) {
                    e(I, n, O, O, T, l, x, p, A);
                  } else {
                    switch (E === 99 && stringUtils.charCode(I, 3) === 110 ? 100 : E) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                        e(t, O, O, a && stringUtils.pushItem(c(t, O, O, 0, 0, f, p, k, f, T = [], x), A), f, A, x, p, a ? T : A);
                        break;
                      default:
                        e(I, O, O, O, [""], A, 0, p, A);
                    }
                  }
                }
            }
            y = b = w = 0;
            $ = N = 1;
            k = I = "";
            x = d;
            break;
          case 58:
            x = 1 + stringUtils.getSize(I);
            w = C;
          default:
            if ($ < 1) {
              if (S == 123) {
                --$;
              } else if (S == 125 && $++ == 0 && cssParserUtils.prevChar() == 125) {
                continue;
              }
            }
            I += stringUtils.fromCharCode(S);
            switch (S * $) {
              case 38:
                N = b > 0 ? 1 : (I += "\f", -1);
                break;
              case 44:
                p[y++] = (stringUtils.getSize(I) - 1) * N;
                N = 1;
                break;
              case 64:
                if (cssParserUtils.peekCharCode() === 45) {
                  I += cssParserUtils.trimContent(cssParserUtils.nextChar());
                }
                E = cssParserUtils.peekCharCode();
                b = x = stringUtils.getSize(k = I += cssParserUtils.skipToSpecial(cssParserUtils.currentPosition()));
                S++;
                break;
              case 45:
                if (C === 45 && stringUtils.getSize(I) == 2) {
                  $ = 0;
                }
            }
        }
      }
      return l;
    }("", null, null, null, [""], e = cssParserUtils.initParser(e), 0, [0], e));
  }
  function c(e, t, n, s, c, u, a, f, l, d, p) {
    var h = c - 1;
    var v = c === 0 ? u : [""];
    var m = stringUtils.getLength(v);
    var g = 0;
    var y = 0;
    var b = 0;
    for (; g < s; ++g) {
      var x = 0;
      var E = stringUtils.slice(e, h + 1, h = stringUtils.abs(y = a[g]));
      var w = e;
      for (; x < m; ++x) {
        if (w = stringUtils.trim(y > 0 ? v[x] + " " + E : stringUtils.replace(E, /&\f/g, v[x]))) {
          l[b++] = w;
        }
      }
    }
    return cssParserUtils.createNode(e, t, n, c === 0 ? cssSyntaxConstants.cssRule : f, l, d, p);
  }
  function u(e, t, n, s) {
    return cssParserUtils.createNode(e, t, n, cssSyntaxConstants.cssDecl, stringUtils.slice(e, 0, s), stringUtils.slice(e, s + 1, -1), s);
  }
  require.d(exports, {
    parseCss: function () {
      return s;
    }
  });
}