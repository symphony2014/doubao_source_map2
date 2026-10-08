// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createEmotionSheet'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 992521
         */
module.exports = function (module, exports, require) {
  var emotionStylesheetManager = require("emotion-stylesheet-manager") /*id: 399882*/;
  var cssParserUtils = require("css-parser-utils") /*id: 310243*/;
  var stringUtils = require("string-utils") /*id: 267634*/;
  var cssSyntaxConstants = require("css-syntax-constants") /*id: 115450*/;
  var cssSyntaxStringifier = require("css-syntax-stringifier") /*id: 392385*/;
  var cssParser = require("css-parser") /*id: 363110*/;
  function a(e, t, n) {
    var r = 0;
    var o = 0;
    while (r = o, o = cssParserUtils.peekCharCode(), r === 38 && o === 12 && (t[n] = 1), !cssParserUtils.getCharType(o)) {
      cssParserUtils.nextChar();
    }
    return cssParserUtils.sliceString(e, cssParserUtils.currentIndex);
  }
  function f(e, t) {
    var n = -1;
    var r = 44;
    do {
      switch (cssParserUtils.getCharType(r)) {
        case 0:
          if (r === 38 && cssParserUtils.peekCharCode() === 12) {
            t[n] = 1;
          }
          e[n] += a(cssParserUtils.currentIndex - 1, t, n);
          break;
        case 2:
          e[n] += cssParserUtils.trimContent(r);
          break;
        case 4:
          if (r === 44) {
            e[++n] = cssParserUtils.peekCharCode() === 58 ? "&\f" : "";
            t[n] = e[n].length;
            break;
          }
        default:
          e[n] += stringUtils.fromCharCode(r);
      }
    } while (r = cssParserUtils.nextChar());
    return e;
  }
  var l = new WeakMap();
  function d(e) {
    if (e.type === "rule" && e.parent && !(e.length < 1)) {
      var t = e.value;
      var n = e.parent;
      var r = e.column === n.column && e.line === n.line;
      while (n.type !== "rule") {
        if (!(n = n.parent)) {
          return;
        }
      }
      if ((e.props.length !== 1 || t.charCodeAt(0) === 58 || l.get(n)) && !r) {
        l.set(e, true);
        var o = [];
        var s = cssParserUtils.resetInput(f(cssParserUtils.initParser(t), o));
        var c = n.props;
        var u = 0;
        var a = 0;
        for (; u < s.length; u++) {
          for (var d = 0; d < c.length; d++, a++) {
            e.props[a] = o[u] ? s[u].replace(/&\f/g, c[d]) : c[d] + " " + s[u];
          }
        }
      }
    }
  }
  function p(e) {
    if (e.type === "decl") {
      var t = e.value;
      if (t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98) {
        e.return = "";
        e.value = "";
      }
    }
  }
  var h = [function (e, t, n, r) {
    if (e.length > -1 && !e.return) {
      switch (e.type) {
        case cssSyntaxConstants.cssDecl:
          e.return = function e(t, n) {
            switch (stringUtils.calcCode(t, n)) {
              case 5103:
                return cssSyntaxConstants.webkitPrefix + "print-" + t + t;
              case 5737:
              case 4201:
              case 3177:
              case 3433:
              case 1641:
              case 4457:
              case 2921:
              case 5572:
              case 6356:
              case 5844:
              case 3191:
              case 6645:
              case 3005:
              case 6391:
              case 5879:
              case 5623:
              case 6135:
              case 4599:
              case 4855:
              case 4215:
              case 6389:
              case 5109:
              case 5365:
              case 5621:
              case 3829:
                return cssSyntaxConstants.webkitPrefix + t + t;
              case 5349:
              case 4246:
              case 4810:
              case 6968:
              case 2756:
                return cssSyntaxConstants.webkitPrefix + t + cssSyntaxConstants.mozPrefix + t + cssSyntaxConstants.msPrefix + t + t;
              case 6828:
              case 4268:
                return cssSyntaxConstants.webkitPrefix + t + cssSyntaxConstants.msPrefix + t + t;
              case 6165:
                return cssSyntaxConstants.webkitPrefix + t + cssSyntaxConstants.msPrefix + "flex-" + t + t;
              case 5187:
                return cssSyntaxConstants.webkitPrefix + t + stringUtils.replace(t, /(\w+).+(:[^]+)/, cssSyntaxConstants.webkitPrefix + "box-$1$2" + cssSyntaxConstants.msPrefix + "flex-$1$2") + t;
              case 5443:
                return cssSyntaxConstants.webkitPrefix + t + cssSyntaxConstants.msPrefix + "flex-item-" + stringUtils.replace(t, /flex-|-self/, "") + t;
              case 4675:
                return cssSyntaxConstants.webkitPrefix + t + cssSyntaxConstants.msPrefix + "flex-line-pack" + stringUtils.replace(t, /align-content|flex-|-self/, "") + t;
              case 5548:
                return cssSyntaxConstants.webkitPrefix + t + cssSyntaxConstants.msPrefix + stringUtils.replace(t, "shrink", "negative") + t;
              case 5292:
                return cssSyntaxConstants.webkitPrefix + t + cssSyntaxConstants.msPrefix + stringUtils.replace(t, "basis", "preferred-size") + t;
              case 6060:
                return cssSyntaxConstants.webkitPrefix + "box-" + stringUtils.replace(t, "-grow", "") + cssSyntaxConstants.webkitPrefix + t + cssSyntaxConstants.msPrefix + stringUtils.replace(t, "grow", "positive") + t;
              case 4554:
                return cssSyntaxConstants.webkitPrefix + stringUtils.replace(t, /([^-])(transform)/g, "$1" + cssSyntaxConstants.webkitPrefix + "$2") + t;
              case 6187:
                return stringUtils.replace(stringUtils.replace(stringUtils.replace(t, /(zoom-|grab)/, cssSyntaxConstants.webkitPrefix + "$1"), /(image-set)/, cssSyntaxConstants.webkitPrefix + "$1"), t, "") + t;
              case 5495:
              case 3959:
                return stringUtils.replace(t, /(image-set\([^]*)/, cssSyntaxConstants.webkitPrefix + "$1$`$1");
              case 4968:
                return stringUtils.replace(stringUtils.replace(t, /(.+:)(flex-)?(.*)/, cssSyntaxConstants.webkitPrefix + "box-pack:$3" + cssSyntaxConstants.msPrefix + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + cssSyntaxConstants.webkitPrefix + t + t;
              case 4095:
              case 3583:
              case 4068:
              case 2532:
                return stringUtils.replace(t, /(.+)-inline(.+)/, cssSyntaxConstants.webkitPrefix + "$1$2") + t;
              case 8116:
              case 7059:
              case 5753:
              case 5535:
              case 5445:
              case 5701:
              case 4933:
              case 4677:
              case 5533:
              case 5789:
              case 5021:
              case 4765:
                if (stringUtils.getSize(t) - 1 - n > 6) {
                  switch (stringUtils.charCode(t, n + 1)) {
                    case 109:
                      if (stringUtils.charCode(t, n + 4) !== 45) {
                        break;
                      }
                    case 102:
                      return stringUtils.replace(t, /(.+:)(.+)-([^]+)/, "$1" + cssSyntaxConstants.webkitPrefix + "$2-$3$1" + cssSyntaxConstants.mozPrefix + (stringUtils.charCode(t, n + 3) == 108 ? "$3" : "$2-$3")) + t;
                    case 115:
                      if (~stringUtils.indexOf(t, "stretch")) {
                        return e(stringUtils.replace(t, "stretch", "fill-available"), n) + t;
                      } else {
                        return t;
                      }
                  }
                }
                break;
              case 4949:
                if (stringUtils.charCode(t, n + 1) !== 115) {
                  break;
                }
              case 6444:
                switch (stringUtils.charCode(t, stringUtils.getSize(t) - 3 - (~stringUtils.indexOf(t, "!important") && 10))) {
                  case 107:
                    return stringUtils.replace(t, ":", ":" + cssSyntaxConstants.webkitPrefix) + t;
                  case 101:
                    return stringUtils.replace(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + cssSyntaxConstants.webkitPrefix + (stringUtils.charCode(t, 14) === 45 ? "inline-" : "") + "box$3$1" + cssSyntaxConstants.webkitPrefix + "$2$3$1" + cssSyntaxConstants.msPrefix + "$2box$3") + t;
                }
                break;
              case 5936:
                switch (stringUtils.charCode(t, n + 11)) {
                  case 114:
                    return cssSyntaxConstants.webkitPrefix + t + cssSyntaxConstants.msPrefix + stringUtils.replace(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
                  case 108:
                    return cssSyntaxConstants.webkitPrefix + t + cssSyntaxConstants.msPrefix + stringUtils.replace(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
                  case 45:
                    return cssSyntaxConstants.webkitPrefix + t + cssSyntaxConstants.msPrefix + stringUtils.replace(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
                }
                return cssSyntaxConstants.webkitPrefix + t + cssSyntaxConstants.msPrefix + t + t;
            }
            return t;
          }(e.value, e.length);
          break;
        case cssSyntaxConstants.atKeyframes:
          return cssSyntaxStringifier.transformNodes([cssParserUtils.assignNodeProps(e, {
            value: stringUtils.replace(e.value, "@", "@" + cssSyntaxConstants.webkitPrefix)
          })], r);
        case cssSyntaxConstants.cssRule:
          if (e.length) {
            return stringUtils.mapJoin(e.props, function (t) {
              switch (stringUtils.regexExec(t, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return cssSyntaxStringifier.transformNodes([cssParserUtils.assignNodeProps(e, {
                    props: [stringUtils.replace(t, /:(read-\w+)/, ":" + cssSyntaxConstants.mozPrefix + "$1")]
                  })], r);
                case "::placeholder":
                  return cssSyntaxStringifier.transformNodes([cssParserUtils.assignNodeProps(e, {
                    props: [stringUtils.replace(t, /:(plac\w+)/, ":" + cssSyntaxConstants.webkitPrefix + "input-$1")]
                  }), cssParserUtils.assignNodeProps(e, {
                    props: [stringUtils.replace(t, /:(plac\w+)/, ":" + cssSyntaxConstants.mozPrefix + "$1")]
                  }), cssParserUtils.assignNodeProps(e, {
                    props: [stringUtils.replace(t, /:(plac\w+)/, cssSyntaxConstants.msPrefix + "input-$1")]
                  })], r);
              }
              return "";
            });
          }
      }
    }
  }];
  function v(e) {
    var t;
    var n;
    var i;
    var s;
    var a;
    var f;
    var l = e.key;
    if (l === "css") {
      var v = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(v, function (e) {
        if (e.getAttribute("data-emotion").indexOf(" ") !== -1) {
          document.head.appendChild(e);
          e.setAttribute("data-s", "");
        }
      });
    }
    var m = e.stylisPlugins || h;
    var g = {};
    var y = [];
    n = e.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + l + " \"]"), function (e) {
      var t = e.getAttribute("data-emotion").split(" ");
      var n = 1;
      for (; n < t.length; n++) {
        g[t[n]] = true;
      }
      y.push(e);
    });
    a = [d, p].concat(m, [cssSyntaxStringifier.buildCssString, (t = function (e) {
      s.insert(e);
    }, function (e) {
      if (!e.root && (e = e.return)) {
        t(e);
      }
    })]);
    f = stringUtils.getLength(a);
    function b(e, t, n, r) {
      var i = "";
      var o = 0;
      for (; o < f; o++) {
        i += a[o](e, t, n, r) || "";
      }
      return i;
    }
    i = function (e, t, n, r) {
      var i;
      s = n;
      i = e ? e + "{" + t.styles + "}" : t.styles;
      cssSyntaxStringifier.transformNodes(cssParser.parseCss(i), b);
      if (r) {
        x.inserted[t.name] = true;
      }
    };
    var x = {
      key: l,
      sheet: new emotionStylesheetManager.StyleSheetManager({
        key: l,
        container: n,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint
      }),
      nonce: e.nonce,
      inserted: g,
      registered: {},
      insert: i
    };
    x.sheet.hydrate(y);
    return x;
  }
  require.d(exports, {
    createEmotionSheet: function () {
      return v;
    }
  });
}