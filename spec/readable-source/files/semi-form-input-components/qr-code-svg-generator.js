// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(989572) to 'buffer-polyfill-impl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40786.791bfd9b.js
         * chunkId: 40786
         * moduleId: 841484
         */
module.exports = function (module, exports, require) {
  var r;
  var i = require("buffer-polyfill-impl") /*id: 989572*/.Buffer;
  r = () => (() => {
    var e = {
      873: (e, t) => {
        var n;
        var r;
        var i = function () {
          var e;
          var t;
          function n(e, t) {
            var n = e;
            var r = s[t];
            var i = null;
            var o = 0;
            var l = null;
            var m = [];
            var b = {};
            function v(e, t) {
              i = function (e) {
                var t = Array(e);
                var n = 0;
                for (; n < e; n += 1) {
                  t[n] = Array(e);
                  for (var r = 0; r < e; r += 1) {
                    t[n][r] = null;
                  }
                }
                return t;
              }(o = n * 4 + 17);
              w(0, 0);
              w(o - 7, 0);
              w(0, o - 7);
              C();
              _();
              x(e, t);
              if (n >= 7) {
                O(e);
              }
              if (l == null) {
                l = S(n, r, m);
              }
              E(l, t);
            }
            function w(e, t) {
              for (var n = -1; n <= 7; n += 1) {
                if (!(e + n <= -1) && !(o <= e + n)) {
                  for (var r = -1; r <= 7; r += 1) {
                    if (!(t + r <= -1) && !(o <= t + r)) {
                      i[e + n][t + r] = n >= 0 && n <= 6 && (r == 0 || r == 6) || r >= 0 && r <= 6 && (n == 0 || n == 6) || n >= 2 && n <= 4 && r >= 2 && r <= 4;
                    }
                  }
                }
              }
            }
            function _() {
              for (var e = 8; e < o - 8; e += 1) {
                if (i[e][6] == null) {
                  i[e][6] = e % 2 == 0;
                }
              }
              for (var t = 8; t < o - 8; t += 1) {
                if (i[6][t] == null) {
                  i[6][t] = t % 2 == 0;
                }
              }
            }
            function C() {
              var e = a.getPatternPosition(n);
              var t = 0;
              for (; t < e.length; t += 1) {
                for (var r = 0; r < e.length; r += 1) {
                  var o = e[t];
                  var s = e[r];
                  if (i[o][s] == null) {
                    for (var l = -2; l <= 2; l += 1) {
                      for (var d = -2; d <= 2; d += 1) {
                        i[o + l][s + d] = l == -2 || l == 2 || d == -2 || d == 2 || l == 0 && d == 0;
                      }
                    }
                  }
                }
              }
            }
            function O(e) {
              var t = a.getBCHTypeNumber(n);
              var r = 0;
              for (; r < 18; r += 1) {
                var s = !e && (t >> r & 1) == 1;
                i[Math.floor(r / 3)][r % 3 + o - 8 - 3] = s;
              }
              for (r = 0; r < 18; r += 1) {
                s = !e && (t >> r & 1) == 1;
                i[r % 3 + o - 8 - 3][Math.floor(r / 3)] = s;
              }
            }
            function x(e, t) {
              var n = r << 3 | t;
              var s = a.getBCHTypeInfo(n);
              var l = 0;
              for (; l < 15; l += 1) {
                var d = !e && (s >> l & 1) == 1;
                if (l < 6) {
                  i[l][8] = d;
                } else if (l < 8) {
                  i[l + 1][8] = d;
                } else {
                  i[o - 15 + l][8] = d;
                }
              }
              for (l = 0; l < 15; l += 1) {
                d = !e && (s >> l & 1) == 1;
                if (l < 8) {
                  i[8][o - l - 1] = d;
                } else if (l < 9) {
                  i[8][15 - l - 1 + 1] = d;
                } else {
                  i[8][15 - l - 1] = d;
                }
              }
              i[o - 8][8] = !e;
            }
            function E(e, t) {
              var n = -1;
              var r = o - 1;
              var s = 7;
              var l = 0;
              var d = a.getMaskFunction(t);
              var h = o - 1;
              for (; h > 0; h -= 2) {
                for (h == 6 && (h -= 1);;) {
                  for (var c = 0; c < 2; c += 1) {
                    if (i[r][h - c] == null) {
                      var u = false;
                      if (l < e.length) {
                        u = (e[l] >>> s & 1) == 1;
                      }
                      if (d(r, h - c)) {
                        u = !u;
                      }
                      i[r][h - c] = u;
                      if ((s -= 1) == -1) {
                        l += 1;
                        s = 7;
                      }
                    }
                  }
                  if ((r += n) < 0 || o <= r) {
                    r -= n;
                    n = -n;
                    break;
                  }
                }
              }
            }
            function S(e, t, n) {
              var r = h.getRSBlocks(e, t);
              var i = c();
              var o = 0;
              for (; o < n.length; o += 1) {
                var s = n[o];
                i.put(s.getMode(), 4);
                i.put(s.getLength(), a.getLengthInBits(s.getMode(), e));
                s.write(i);
              }
              var l = 0;
              for (o = 0; o < r.length; o += 1) {
                l += r[o].dataCount;
              }
              if (i.getLengthInBits() > l * 8) {
                throw "code length overflow. (" + i.getLengthInBits() + ">" + l * 8 + ")";
              }
              for (i.getLengthInBits() + 4 <= l * 8 && i.put(0, 4); i.getLengthInBits() % 8 != 0;) {
                i.putBit(false);
              }
              while (!(i.getLengthInBits() >= l * 8) && !(i.put(236, 8), i.getLengthInBits() >= l * 8)) {
                i.put(17, 8);
              }
              return function (e, t) {
                var n = 0;
                var r = 0;
                var i = 0;
                var o = Array(t.length);
                var s = Array(t.length);
                var l = 0;
                for (; l < t.length; l += 1) {
                  var h = t[l].dataCount;
                  var c = t[l].totalCount - h;
                  r = Math.max(r, h);
                  i = Math.max(i, c);
                  o[l] = Array(h);
                  for (var u = 0; u < o[l].length; u += 1) {
                    o[l][u] = e.getBuffer()[u + n] & 255;
                  }
                  n += h;
                  var p = a.getErrorCorrectPolynomial(c);
                  var g = d(o[l], p.getLength() - 1).mod(p);
                  s[l] = Array(p.getLength() - 1);
                  u = 0;
                  for (; u < s[l].length; u += 1) {
                    var f = u + g.getLength() - s[l].length;
                    s[l][u] = f >= 0 ? g.getAt(f) : 0;
                  }
                }
                var m = 0;
                for (u = 0; u < t.length; u += 1) {
                  m += t[u].totalCount;
                }
                var b = Array(m);
                var y = 0;
                for (u = 0; u < r; u += 1) {
                  for (l = 0; l < t.length; l += 1) {
                    if (u < o[l].length) {
                      b[y] = o[l][u];
                      y += 1;
                    }
                  }
                }
                for (u = 0; u < i; u += 1) {
                  for (l = 0; l < t.length; l += 1) {
                    if (u < s[l].length) {
                      b[y] = s[l][u];
                      y += 1;
                    }
                  }
                }
                return b;
              }(i, r);
            }
            b.addData = function (e, t) {
              var n = null;
              switch (t = t || "Byte") {
                case "Numeric":
                  n = u(e);
                  break;
                case "Alphanumeric":
                  n = p(e);
                  break;
                case "Byte":
                  n = g(e);
                  break;
                case "Kanji":
                  n = f(e);
                  break;
                default:
                  throw "mode:" + t;
              }
              m.push(n);
              l = null;
            };
            b.isDark = function (e, t) {
              if (e < 0 || o <= e || t < 0 || o <= t) {
                throw e + "," + t;
              }
              return i[e][t];
            };
            b.getModuleCount = function () {
              return o;
            };
            b.make = function () {
              if (n < 1) {
                for (var e = 1; e < 40; e++) {
                  var t = h.getRSBlocks(e, r);
                  var i = c();
                  var o = 0;
                  for (; o < m.length; o++) {
                    var s = m[o];
                    i.put(s.getMode(), 4);
                    i.put(s.getLength(), a.getLengthInBits(s.getMode(), e));
                    s.write(i);
                  }
                  var l = 0;
                  for (o = 0; o < t.length; o++) {
                    l += t[o].dataCount;
                  }
                  if (i.getLengthInBits() <= l * 8) {
                    break;
                  }
                }
                n = e;
              }
              v(false, function () {
                var e = 0;
                var t = 0;
                var n = 0;
                for (; n < 8; n += 1) {
                  v(true, n);
                  var r = a.getLostPoint(b);
                  if (n == 0 || e > r) {
                    e = r;
                    t = n;
                  }
                }
                return t;
              }());
            };
            b.createTableTag = function (e, t) {
              e = e || 2;
              var n = "";
              n += "<table style=\" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: " + (t = t === undefined ? e * 4 : t) + "px;\"><tbody>";
              for (var r = 0; r < b.getModuleCount(); r += 1) {
                n += "<tr>";
                for (var i = 0; i < b.getModuleCount(); i += 1) {
                  n += "<td style=\" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: 0px; width: " + e + "px;" + (" height: " + e) + "px; background-color: " + (b.isDark(r, i) ? "#000000" : "#ffffff") + ";\"/>";
                }
                n += "</tr>";
              }
              return (n += "</tbody>") + "</table>";
            };
            b.createSvgTag = function (e, t, n, r) {
              var i = {};
              if (typeof arguments[0] == "object") {
                e = (i = arguments[0]).cellSize;
                t = i.margin;
                n = i.alt;
                r = i.title;
              }
              e = e || 2;
              t = t === undefined ? e * 4 : t;
              (n = typeof n == "string" ? {
                text: n
              } : n || {}).text = n.text || null;
              n.id = n.text ? n.id || "qrcode-description" : null;
              (r = typeof r == "string" ? {
                text: r
              } : r || {}).text = r.text || null;
              r.id = r.text ? r.id || "qrcode-title" : null;
              var o;
              var s;
              var a;
              var l;
              var d = b.getModuleCount() * e + t * 2;
              var h = "";
              l = "l" + e + ",0 0," + e + " -" + e + ",0 0,-" + e + "z ";
              h += "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"";
              h += i.scalable ? "" : " width=\"" + d + "px\" height=\"" + d + "px\"";
              h += " viewBox=\"0 0 " + d + " " + d + "\" ";
              h += " preserveAspectRatio=\"xMinYMin meet\"";
              h += r.text || n.text ? " role=\"img\" aria-labelledby=\"" + D([r.id, n.id].join(" ").trim()) + "\"" : "";
              h += ">";
              h += r.text ? "<title id=\"" + D(r.id) + "\">" + D(r.text) + "</title>" : "";
              h += n.text ? "<description id=\"" + D(n.id) + "\">" + D(n.text) + "</description>" : "";
              h += "<rect width=\"100%\" height=\"100%\" fill=\"white\" cx=\"0\" cy=\"0\"/>";
              h += "<path d=\"";
              s = 0;
              for (; s < b.getModuleCount(); s += 1) {
                a = s * e + t;
                o = 0;
                for (; o < b.getModuleCount(); o += 1) {
                  if (b.isDark(s, o)) {
                    h += "M" + (o * e + t) + "," + a + l;
                  }
                }
              }
              return (h += "\" stroke=\"transparent\" fill=\"black\"/>") + "</svg>";
            };
            b.createDataURL = function (e, t) {
              e = e || 2;
              t = t === undefined ? e * 4 : t;
              var n = b.getModuleCount() * e + t * 2;
              var r = t;
              var i = n - t;
              return y(n, n, function (t, n) {
                if (r <= t && t < i && r <= n && n < i) {
                  var o = Math.floor((t - r) / e);
                  var s = Math.floor((n - r) / e);
                  return +!b.isDark(s, o);
                }
                return 1;
              });
            };
            b.createImgTag = function (e, t, n) {
              e = e || 2;
              t = t === undefined ? e * 4 : t;
              var r = b.getModuleCount() * e + t * 2;
              var i = "";
              i += "<img";
              i += " src=\"";
              i += b.createDataURL(e, t);
              i += "\"";
              i += " width=\"";
              i += r;
              i += "\"";
              i += " height=\"";
              i += r;
              i += "\"";
              if (n) {
                i += " alt=\"";
                i += D(n);
                i += "\"";
              }
              return i + "/>";
            };
            function D(e) {
              var t = "";
              var n = 0;
              for (; n < e.length; n += 1) {
                var r = e.charAt(n);
                switch (r) {
                  case "<":
                    t += "&lt;";
                    break;
                  case ">":
                    t += "&gt;";
                    break;
                  case "&":
                    t += "&amp;";
                    break;
                  case "\"":
                    t += "&quot;";
                    break;
                  default:
                    t += r;
                }
              }
              return t;
            }
            b.createASCII = function (e, t) {
              if ((e = e || 1) < 2) {
                return function (e) {
                  e = e === undefined ? 2 : e;
                  var t;
                  var n;
                  var r;
                  var i;
                  var o;
                  var s = +b.getModuleCount() + e * 2;
                  var a = e;
                  var l = s - e;
                  var d = {
                    "██": "█",
                    "█ ": "▀",
                    " █": "▄",
                    "  ": " "
                  };
                  var h = {
                    "██": "▀",
                    "█ ": "▀",
                    " █": " ",
                    "  ": " "
                  };
                  var c = "";
                  for (t = 0; t < s; t += 2) {
                    r = Math.floor((t - a) / 1);
                    i = Math.floor((t + 1 - a) / 1);
                    n = 0;
                    for (; n < s; n += 1) {
                      o = "█";
                      if (a <= n && n < l && a <= t && t < l && b.isDark(r, Math.floor((n - a) / 1))) {
                        o = " ";
                      }
                      if (a <= n && n < l && a <= t + 1 && t + 1 < l && b.isDark(i, Math.floor((n - a) / 1))) {
                        o += " ";
                      } else {
                        o += "█";
                      }
                      c += e < 1 && t + 1 >= l ? h[o] : d[o];
                    }
                    c += "\n";
                  }
                  if (s % 2 && e > 0) {
                    return c.substring(0, c.length - s - 1) + Array(s + 1).join("▀");
                  } else {
                    return c.substring(0, c.length - 1);
                  }
                }(t);
              }
              e -= 1;
              t = t === undefined ? e * 2 : t;
              var n;
              var r;
              var i;
              var o;
              var s = b.getModuleCount() * e + t * 2;
              var a = t;
              var l = s - t;
              var d = Array(e + 1).join("██");
              var h = Array(e + 1).join("  ");
              var c = "";
              var u = "";
              for (n = 0; n < s; n += 1) {
                i = Math.floor((n - a) / e);
                u = "";
                r = 0;
                for (; r < s; r += 1) {
                  o = 1;
                  if (a <= r && r < l && a <= n && n < l && b.isDark(i, Math.floor((r - a) / e))) {
                    o = 0;
                  }
                  u += o ? d : h;
                }
                for (i = 0; i < e; i += 1) {
                  c += u + "\n";
                }
              }
              return c.substring(0, c.length - 1);
            };
            b.renderTo2dContext = function (e, t) {
              t = t || 2;
              var n = b.getModuleCount();
              var r = 0;
              for (; r < n; r++) {
                for (var i = 0; i < n; i++) {
                  e.fillStyle = b.isDark(r, i) ? "black" : "white";
                  e.fillRect(r * t, i * t, t, t);
                }
              }
            };
            return b;
          }
          n.stringToBytes = (n.stringToBytesFuncs = {
            default: function (e) {
              var t = [];
              var n = 0;
              for (; n < e.length; n += 1) {
                var r = e.charCodeAt(n);
                t.push(r & 255);
              }
              return t;
            }
          }).default;
          n.createStringToBytes = function (e, t) {
            var n = function () {
              var n = b(e);
              function r() {
                var e = n.read();
                if (e == -1) {
                  throw "eof";
                }
                return e;
              }
              var i = 0;
              var o = {};
              while (true) {
                var s = n.read();
                if (s == -1) {
                  break;
                }
                var a = r();
                var l = r() << 8 | r();
                o[String.fromCharCode(s << 8 | a)] = l;
                i += 1;
              }
              if (i != t) {
                throw i + " != " + t;
              }
              return o;
            }();
            return function (e) {
              var t = [];
              var r = 0;
              for (; r < e.length; r += 1) {
                var i = e.charCodeAt(r);
                if (i < 128) {
                  t.push(i);
                } else {
                  var o = n[e.charAt(r)];
                  if (typeof o == "number") {
                    if ((o & 255) == o) {
                      t.push(o);
                    } else {
                      t.push(o >>> 8);
                      t.push(o & 255);
                    }
                  } else {
                    t.push(63);
                  }
                }
              }
              return t;
            };
          };
          var r;
          var i;
          var o;
          var s = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
          };
          r = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]];
          o = function (e) {
            var t = 0;
            for (; e != 0;) {
              t += 1;
              e >>>= 1;
            }
            return t;
          };
          (i = {}).getBCHTypeInfo = function (e) {
            for (var t = e << 10; o(t) - o(1335) >= 0;) {
              t ^= 1335 << o(t) - o(1335);
            }
            return (e << 10 | t) ^ 21522;
          };
          i.getBCHTypeNumber = function (e) {
            for (var t = e << 12; o(t) - o(7973) >= 0;) {
              t ^= 7973 << o(t) - o(7973);
            }
            return e << 12 | t;
          };
          i.getPatternPosition = function (e) {
            return r[e - 1];
          };
          i.getMaskFunction = function (e) {
            switch (e) {
              case 0:
                return function (e, t) {
                  return (e + t) % 2 == 0;
                };
              case 1:
                return function (e, t) {
                  return e % 2 == 0;
                };
              case 2:
                return function (e, t) {
                  return t % 3 == 0;
                };
              case 3:
                return function (e, t) {
                  return (e + t) % 3 == 0;
                };
              case 4:
                return function (e, t) {
                  return (Math.floor(e / 2) + Math.floor(t / 3)) % 2 == 0;
                };
              case 5:
                return function (e, t) {
                  return e * t % 2 + e * t % 3 == 0;
                };
              case 6:
                return function (e, t) {
                  return (e * t % 2 + e * t % 3) % 2 == 0;
                };
              case 7:
                return function (e, t) {
                  return (e * t % 3 + (e + t) % 2) % 2 == 0;
                };
              default:
                throw "bad maskPattern:" + e;
            }
          };
          i.getErrorCorrectPolynomial = function (e) {
            var t = d([1], 0);
            var n = 0;
            for (; n < e; n += 1) {
              t = t.multiply(d([1, l.gexp(n)], 0));
            }
            return t;
          };
          i.getLengthInBits = function (e, t) {
            if (t >= 1 && t < 10) {
              switch (e) {
                case 1:
                  return 10;
                case 2:
                  return 9;
                case 4:
                case 8:
                  return 8;
                default:
                  throw "mode:" + e;
              }
            } else if (t < 27) {
              switch (e) {
                case 1:
                  return 12;
                case 2:
                  return 11;
                case 4:
                  return 16;
                case 8:
                  return 10;
                default:
                  throw "mode:" + e;
              }
            } else {
              if (!(t < 41)) {
                throw "type:" + t;
              }
              switch (e) {
                case 1:
                  return 14;
                case 2:
                  return 13;
                case 4:
                  return 16;
                case 8:
                  return 12;
                default:
                  throw "mode:" + e;
              }
            }
          };
          i.getLostPoint = function (e) {
            var t = e.getModuleCount();
            var n = 0;
            var r = 0;
            for (; r < t; r += 1) {
              for (var i = 0; i < t; i += 1) {
                var o = 0;
                var s = e.isDark(r, i);
                var a = -1;
                for (; a <= 1; a += 1) {
                  if (!(r + a < 0) && !(t <= r + a)) {
                    for (var l = -1; l <= 1; l += 1) {
                      if (!(i + l < 0) && !(t <= i + l) && (a != 0 || l != 0)) {
                        if (s == e.isDark(r + a, i + l)) {
                          o += 1;
                        }
                      }
                    }
                  }
                }
                if (o > 5) {
                  n += 3 + o - 5;
                }
              }
            }
            for (r = 0; r < t - 1; r += 1) {
              for (i = 0; i < t - 1; i += 1) {
                var d = 0;
                if (e.isDark(r, i)) {
                  d += 1;
                }
                if (e.isDark(r + 1, i)) {
                  d += 1;
                }
                if (e.isDark(r, i + 1)) {
                  d += 1;
                }
                if (e.isDark(r + 1, i + 1)) {
                  d += 1;
                }
                if (d == 0 || d == 4) {
                  n += 3;
                }
              }
            }
            for (r = 0; r < t; r += 1) {
              for (i = 0; i < t - 6; i += 1) {
                if (e.isDark(r, i) && !e.isDark(r, i + 1) && e.isDark(r, i + 2) && e.isDark(r, i + 3) && e.isDark(r, i + 4) && !e.isDark(r, i + 5) && e.isDark(r, i + 6)) {
                  n += 40;
                }
              }
            }
            for (i = 0; i < t; i += 1) {
              for (r = 0; r < t - 6; r += 1) {
                if (e.isDark(r, i) && !e.isDark(r + 1, i) && e.isDark(r + 2, i) && e.isDark(r + 3, i) && e.isDark(r + 4, i) && !e.isDark(r + 5, i) && e.isDark(r + 6, i)) {
                  n += 40;
                }
              }
            }
            var h = 0;
            for (i = 0; i < t; i += 1) {
              for (r = 0; r < t; r += 1) {
                if (e.isDark(r, i)) {
                  h += 1;
                }
              }
            }
            return n + Math.abs(h * 100 / t / t - 50) / 5 * 10;
          };
          var a = i;
          var l = function () {
            var e = Array(256);
            var t = Array(256);
            var n = 0;
            for (; n < 8; n += 1) {
              e[n] = 1 << n;
            }
            for (n = 8; n < 256; n += 1) {
              e[n] = e[n - 4] ^ e[n - 5] ^ e[n - 6] ^ e[n - 8];
            }
            for (n = 0; n < 255; n += 1) {
              t[e[n]] = n;
            }
            return {
              glog: function (e) {
                if (e < 1) {
                  throw "glog(" + e + ")";
                }
                return t[e];
              },
              gexp: function (t) {
                while (t < 0) {
                  t += 255;
                }
                while (t >= 256) {
                  t -= 255;
                }
                return e[t];
              }
            };
          }();
          function d(e, t) {
            if (e.length === undefined) {
              throw e.length + "/" + t;
            }
            var n = function () {
              for (var n = 0; n < e.length && e[n] == 0;) {
                n += 1;
              }
              var r = Array(e.length - n + t);
              var i = 0;
              for (; i < e.length - n; i += 1) {
                r[i] = e[i + n];
              }
              return r;
            }();
            var r = {
              getAt: function (e) {
                return n[e];
              },
              getLength: function () {
                return n.length;
              },
              multiply: function (e) {
                var t = Array(r.getLength() + e.getLength() - 1);
                var n = 0;
                for (; n < r.getLength(); n += 1) {
                  for (var i = 0; i < e.getLength(); i += 1) {
                    t[n + i] ^= l.gexp(l.glog(r.getAt(n)) + l.glog(e.getAt(i)));
                  }
                }
                return d(t, 0);
              },
              mod: function (e) {
                if (r.getLength() - e.getLength() < 0) {
                  return r;
                }
                var t = l.glog(r.getAt(0)) - l.glog(e.getAt(0));
                var n = Array(r.getLength());
                var i = 0;
                for (; i < r.getLength(); i += 1) {
                  n[i] = r.getAt(i);
                }
                for (i = 0; i < e.getLength(); i += 1) {
                  n[i] ^= l.gexp(l.glog(e.getAt(i)) + t);
                }
                return d(n, 0).mod(e);
              }
            };
            return r;
          }
          e = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
          t = function (e, t) {
            var n = {
              totalCount: e,
              dataCount: t
            };
            return n;
          };
          var h = {
            getRSBlocks: function (n, r) {
              var i = function (t, n) {
                switch (n) {
                  case s.L:
                    return e[(t - 1) * 4 + 0];
                  case s.M:
                    return e[(t - 1) * 4 + 1];
                  case s.Q:
                    return e[(t - 1) * 4 + 2];
                  case s.H:
                    return e[(t - 1) * 4 + 3];
                  default:
                    return;
                }
              }(n, r);
              if (i === undefined) {
                throw "bad rs block @ typeNumber:" + n + "/errorCorrectionLevel:" + r;
              }
              var o = i.length / 3;
              var a = [];
              var l = 0;
              for (; l < o; l += 1) {
                var d = i[l * 3 + 0];
                var h = i[l * 3 + 1];
                var c = i[l * 3 + 2];
                var u = 0;
                for (; u < d; u += 1) {
                  a.push(t(h, c));
                }
              }
              return a;
            }
          };
          function c() {
            var e = [];
            var t = 0;
            var n = {
              getBuffer: function () {
                return e;
              },
              getAt: function (t) {
                return (e[Math.floor(t / 8)] >>> 7 - t % 8 & 1) == 1;
              },
              put: function (e, t) {
                for (var r = 0; r < t; r += 1) {
                  n.putBit((e >>> t - r - 1 & 1) == 1);
                }
              },
              getLengthInBits: function () {
                return t;
              },
              putBit: function (n) {
                var r = Math.floor(t / 8);
                if (e.length <= r) {
                  e.push(0);
                }
                if (n) {
                  e[r] |= 128 >>> t % 8;
                }
                t += 1;
              }
            };
            return n;
          }
          function u(e) {
            function t(e) {
              var t = 0;
              var r = 0;
              for (; r < e.length; r += 1) {
                t = t * 10 + n(e.charAt(r));
              }
              return t;
            }
            function n(e) {
              if (e >= "0" && e <= "9") {
                return e.charCodeAt(0) - 48;
              }
              throw "illegal char :" + e;
            }
            return {
              getMode: function () {
                return 1;
              },
              getLength: function (t) {
                return e.length;
              },
              write: function (n) {
                for (var r = 0; r + 2 < e.length;) {
                  n.put(t(e.substring(r, r + 3)), 10);
                  r += 3;
                }
                if (r < e.length) {
                  if (e.length - r == 1) {
                    n.put(t(e.substring(r, r + 1)), 4);
                  } else if (e.length - r == 2) {
                    n.put(t(e.substring(r, r + 2)), 7);
                  }
                }
              }
            };
          }
          function p(e) {
            function t(e) {
              if (e >= "0" && e <= "9") {
                return e.charCodeAt(0) - 48;
              }
              if (e >= "A" && e <= "Z") {
                return e.charCodeAt(0) - 65 + 10;
              }
              switch (e) {
                case " ":
                  return 36;
                case "$":
                  return 37;
                case "%":
                  return 38;
                case "*":
                  return 39;
                case "+":
                  return 40;
                case "-":
                  return 41;
                case ".":
                  return 42;
                case "/":
                  return 43;
                case ":":
                  return 44;
                default:
                  throw "illegal char :" + e;
              }
            }
            return {
              getMode: function () {
                return 2;
              },
              getLength: function (t) {
                return e.length;
              },
              write: function (n) {
                for (var r = 0; r + 1 < e.length;) {
                  n.put(t(e.charAt(r)) * 45 + t(e.charAt(r + 1)), 11);
                  r += 2;
                }
                if (r < e.length) {
                  n.put(t(e.charAt(r)), 6);
                }
              }
            };
          }
          function g(e) {
            var t = n.stringToBytes(e);
            return {
              getMode: function () {
                return 4;
              },
              getLength: function (e) {
                return t.length;
              },
              write: function (e) {
                for (var n = 0; n < t.length; n += 1) {
                  e.put(t[n], 8);
                }
              }
            };
          }
          function f(e) {
            var t = n.stringToBytesFuncs.SJIS;
            if (!t) {
              throw "sjis not supported.";
            }
            (function () {
              var e = t("友");
              if (e.length != 2 || (e[0] << 8 | e[1]) != 38726) {
                throw "sjis not supported.";
              }
            })();
            var r = t(e);
            return {
              getMode: function () {
                return 8;
              },
              getLength: function (e) {
                return ~~(r.length / 2);
              },
              write: function (e) {
                for (var t = 0; t + 1 < r.length;) {
                  var n = (r[t] & 255) << 8 | r[t + 1] & 255;
                  if (n >= 33088 && n <= 40956) {
                    n -= 33088;
                  } else {
                    if (!(n >= 57408) || !(n <= 60351)) {
                      throw "illegal char at " + (t + 1) + "/" + n;
                    }
                    n -= 49472;
                  }
                  n = (n >>> 8 & 255) * 192 + (n & 255);
                  e.put(n, 13);
                  t += 2;
                }
                if (t < r.length) {
                  throw "illegal char at " + (t + 1);
                }
              }
            };
          }
          function m() {
            var e = [];
            var t = {
              writeByte: function (t) {
                e.push(t & 255);
              },
              writeShort: function (e) {
                t.writeByte(e);
                t.writeByte(e >>> 8);
              },
              writeBytes: function (e, n, r) {
                n = n || 0;
                r = r || e.length;
                for (var i = 0; i < r; i += 1) {
                  t.writeByte(e[i + n]);
                }
              },
              writeString: function (e) {
                for (var n = 0; n < e.length; n += 1) {
                  t.writeByte(e.charCodeAt(n));
                }
              },
              toByteArray: function () {
                return e;
              },
              toString: function () {
                var t = "";
                t += "[";
                for (var n = 0; n < e.length; n += 1) {
                  if (n > 0) {
                    t += ",";
                  }
                  t += e[n];
                }
                return t + "]";
              }
            };
            return t;
          }
          function b(e) {
            var t = 0;
            var n = 0;
            var r = 0;
            function i(e) {
              if (e >= 65 && e <= 90) {
                return e - 65;
              }
              if (e >= 97 && e <= 122) {
                return e - 97 + 26;
              }
              if (e >= 48 && e <= 57) {
                return e - 48 + 52;
              }
              if (e == 43) {
                return 62;
              }
              if (e == 47) {
                return 63;
              }
              throw "c:" + e;
            }
            return {
              read: function () {
                while (r < 8) {
                  if (t >= e.length) {
                    if (r == 0) {
                      return -1;
                    }
                    throw "unexpected end of file./" + r;
                  }
                  var o = e.charAt(t);
                  t += 1;
                  if (o == "=") {
                    r = 0;
                    return -1;
                  }
                  if (!o.match(/^\s$/)) {
                    n = n << 6 | i(o.charCodeAt(0));
                    r += 6;
                  }
                }
                var s = n >>> r - 8 & 255;
                r -= 8;
                return s;
              }
            };
          }
          function y(e, t, n) {
            var r;
            var i;
            var o;
            var s;
            var a;
            var l;
            var d;
            var h;
            var c;
            var u;
            r = Array(e * t);
            i = function (e) {
              var t = 1 << e;
              var n = 1 + (1 << e);
              var i = e + 1;
              var s = o();
              var a = 0;
              for (; a < t; a += 1) {
                s.add(String.fromCharCode(a));
              }
              s.add(String.fromCharCode(t));
              s.add(String.fromCharCode(n));
              var l;
              var d;
              var h = m();
              l = 0;
              d = 0;
              var c = {
                write: function (e, t) {
                  if (e >>> t != 0) {
                    throw "length over";
                  }
                  while (l + t >= 8) {
                    h.writeByte((e << l | d) & 255);
                    t -= 8 - l;
                    e >>>= 8 - l;
                    d = 0;
                    l = 0;
                  }
                  d |= e << l;
                  l += t;
                },
                flush: function () {
                  if (l > 0) {
                    h.writeByte(d);
                  }
                }
              };
              c.write(t, i);
              var u = 0;
              var p = String.fromCharCode(r[0]);
              for (u += 1; u < r.length;) {
                var g = String.fromCharCode(r[u]);
                u += 1;
                if (s.contains(p + g)) {
                  p += g;
                } else {
                  c.write(s.indexOf(p), i);
                  if (s.size() < 4095) {
                    if (s.size() == 1 << i) {
                      i += 1;
                    }
                    s.add(p + g);
                  }
                  p = g;
                }
              }
              c.write(s.indexOf(p), i);
              c.write(n, i);
              c.flush();
              return h.toByteArray();
            };
            o = function () {
              var e = {};
              var t = 0;
              var n = {
                add: function (r) {
                  if (n.contains(r)) {
                    throw "dup key:" + r;
                  }
                  e[r] = t;
                  t += 1;
                },
                size: function () {
                  return t;
                },
                indexOf: function (t) {
                  return e[t];
                },
                contains: function (t) {
                  return e[t] !== undefined;
                }
              };
              return n;
            };
            var p = {
              setPixel: function (t, n, i) {
                r[n * e + t] = i;
              },
              write: function (n) {
                n.writeString("GIF87a");
                n.writeShort(e);
                n.writeShort(t);
                n.writeByte(128);
                n.writeByte(0);
                n.writeByte(0);
                n.writeByte(0);
                n.writeByte(0);
                n.writeByte(0);
                n.writeByte(255);
                n.writeByte(255);
                n.writeByte(255);
                n.writeString(",");
                n.writeShort(0);
                n.writeShort(0);
                n.writeShort(e);
                n.writeShort(t);
                n.writeByte(0);
                var r = i(2);
                n.writeByte(2);
                for (var o = 0; r.length - o > 255;) {
                  n.writeByte(255);
                  n.writeBytes(r, o, 255);
                  o += 255;
                }
                n.writeByte(r.length - o);
                n.writeBytes(r, o, r.length - o);
                n.writeByte(0);
                n.writeString(";");
              }
            };
            var g = 0;
            for (; g < t; g += 1) {
              for (var f = 0; f < e; f += 1) {
                p.setPixel(f, g, n(f, g));
              }
            }
            var b = m();
            p.write(b);
            s = 0;
            a = 0;
            l = 0;
            d = "";
            h = {};
            c = function (e) {
              d += String.fromCharCode(u(e & 63));
            };
            u = function (e) {
              if (e < 0) ;else {
                if (e < 26) {
                  return 65 + e;
                }
                if (e < 52) {
                  return e - 26 + 97;
                }
                if (e < 62) {
                  return e - 52 + 48;
                }
                if (e == 62) {
                  return 43;
                }
                if (e == 63) {
                  return 47;
                }
              }
              throw "n:" + e;
            };
            h.writeByte = function (e) {
              s = s << 8 | e & 255;
              a += 8;
              l += 1;
              while (a >= 6) {
                c(s >>> a - 6);
                a -= 6;
              }
            };
            h.flush = function () {
              if (a > 0) {
                c(s << 6 - a);
                s = 0;
                a = 0;
              }
              if (l % 3 != 0) {
                var e = 3 - l % 3;
                var t = 0;
                for (; t < e; t += 1) {
                  d += "=";
                }
              }
            };
            h.toString = function () {
              return d;
            };
            var y = h;
            var v = b.toByteArray();
            var w = 0;
            for (; w < v.length; w += 1) {
              y.writeByte(v[w]);
            }
            y.flush();
            return "data:image/gif;base64," + y;
          }
          return n;
        }();
        i.stringToBytesFuncs["UTF-8"] = function (e) {
          return function (e) {
            var t = [];
            var n = 0;
            for (; n < e.length; n++) {
              var r = e.charCodeAt(n);
              if (r < 128) {
                t.push(r);
              } else if (r < 2048) {
                t.push(r >> 6 | 192, r & 63 | 128);
              } else if (r < 55296 || r >= 57344) {
                t.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
              } else {
                n++;
                r = 65536 + ((r & 1023) << 10 | e.charCodeAt(n) & 1023);
                t.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
              }
            }
            return t;
          }(e);
        };
        if ((r = typeof (n = function () {
          return i;
        }) == "function" ? n.apply(t, []) : n) !== undefined) {
          e.exports = r;
        }
      }
    };
    var t = {};
    function n(r) {
      var i = t[r];
      if (i !== undefined) {
        return i.exports;
      }
      var o = t[r] = {
        exports: {}
      };
      e[r](o, o.exports, n);
      return o.exports;
    }
    n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      n.d(t, {
        a: t
      });
      return t;
    };
    n.d = (e, t) => {
      for (var r in t) {
        if (n.o(t, r) && !n.o(e, r)) {
          Object.defineProperty(e, r, {
            enumerable: true,
            get: t[r]
          });
        }
      }
    };
    n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var r = {};
    (() => {
      "use strict";

      n.d(r, {
        default: () => D
      });
      let e = e => !!e && typeof e == "object" && !Array.isArray(e);
      function t(n, ...r) {
        if (!r.length) {
          return n;
        }
        let i = r.shift();
        if (i !== undefined && e(n) && e(i)) {
          n = Object.assign({}, n);
          Object.keys(i).forEach(r => {
            let o = n[r];
            let s = i[r];
            if (Array.isArray(o) && Array.isArray(s)) {
              n[r] = s;
            } else if (e(o) && e(s)) {
              n[r] = t(Object.assign({}, o), s);
            } else {
              n[r] = s;
            }
          });
          return t(n, ...r);
        } else {
          return n;
        }
      }
      function o(e, t) {
        let n = document.createElement("a");
        n.download = t;
        n.href = e;
        document.body.appendChild(n);
        n.click();
        document.body.removeChild(n);
      }
      let s = {
        L: 0.07,
        M: 0.15,
        Q: 0.25,
        H: 0.3
      };
      class a {
        constructor({
          svg: e,
          type: t,
          window: n
        }) {
          this._svg = e;
          this._type = t;
          this._window = n;
        }
        draw(e, t, n, r) {
          let i;
          switch (this._type) {
            case "dots":
              i = this._drawDot;
              break;
            case "classy":
              i = this._drawClassy;
              break;
            case "classy-rounded":
              i = this._drawClassyRounded;
              break;
            case "rounded":
              i = this._drawRounded;
              break;
            case "extra-rounded":
              i = this._drawExtraRounded;
              break;
            default:
              i = this._drawSquare;
          }
          i.call(this, {
            x: e,
            y: t,
            size: n,
            getNeighbor: r
          });
        }
        _rotateFigure({
          x: e,
          y: t,
          size: n,
          rotation: r = 0,
          draw: i
        }) {
          var o;
          i();
          if ((o = this._element) !== null && o !== undefined) {
            o.setAttribute("transform", `rotate(${r * 180 / Math.PI},${e + n / 2},${t + n / 2})`);
          }
        }
        _basicDot(e) {
          let {
            size: t,
            x: n,
            y: r
          } = e;
          this._rotateFigure(Object.assign(Object.assign({}, e), {
            draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "circle");
              this._element.setAttribute("cx", String(n + t / 2));
              this._element.setAttribute("cy", String(r + t / 2));
              this._element.setAttribute("r", String(t / 2));
            }
          }));
        }
        _basicSquare(e) {
          let {
            size: t,
            x: n,
            y: r
          } = e;
          this._rotateFigure(Object.assign(Object.assign({}, e), {
            draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
              this._element.setAttribute("x", String(n));
              this._element.setAttribute("y", String(r));
              this._element.setAttribute("width", String(t));
              this._element.setAttribute("height", String(t));
            }
          }));
        }
        _basicSideRounded(e) {
          let {
            size: t,
            x: n,
            y: r
          } = e;
          this._rotateFigure(Object.assign(Object.assign({}, e), {
            draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path");
              this._element.setAttribute("d", `M ${n} ${r}v ${t}h ${t / 2}a ${t / 2} ${t / 2}, 0, 0, 0, 0 ${-t}`);
            }
          }));
        }
        _basicCornerRounded(e) {
          let {
            size: t,
            x: n,
            y: r
          } = e;
          this._rotateFigure(Object.assign(Object.assign({}, e), {
            draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path");
              this._element.setAttribute("d", `M ${n} ${r}v ${t}h ${t}v ${-t / 2}a ${t / 2} ${t / 2}, 0, 0, 0, ${-t / 2} ${-t / 2}`);
            }
          }));
        }
        _basicCornerExtraRounded(e) {
          let {
            size: t,
            x: n,
            y: r
          } = e;
          this._rotateFigure(Object.assign(Object.assign({}, e), {
            draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path");
              this._element.setAttribute("d", `M ${n} ${r}v ${t}h ${t}a ${t} ${t}, 0, 0, 0, ${-t} ${-t}`);
            }
          }));
        }
        _basicCornersRounded(e) {
          let {
            size: t,
            x: n,
            y: r
          } = e;
          this._rotateFigure(Object.assign(Object.assign({}, e), {
            draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path");
              this._element.setAttribute("d", `M ${n} ${r}v ${t / 2}a ${t / 2} ${t / 2}, 0, 0, 0, ${t / 2} ${t / 2}h ${t / 2}v ${-t / 2}a ${t / 2} ${t / 2}, 0, 0, 0, ${-t / 2} ${-t / 2}`);
            }
          }));
        }
        _drawDot({
          x: e,
          y: t,
          size: n
        }) {
          this._basicDot({
            x: e,
            y: t,
            size: n,
            rotation: 0
          });
        }
        _drawSquare({
          x: e,
          y: t,
          size: n
        }) {
          this._basicSquare({
            x: e,
            y: t,
            size: n,
            rotation: 0
          });
        }
        _drawRounded({
          x: e,
          y: t,
          size: n,
          getNeighbor: r
        }) {
          let i = r ? +r(-1, 0) : 0;
          let o = r ? +r(1, 0) : 0;
          let s = r ? +r(0, -1) : 0;
          let a = r ? +r(0, 1) : 0;
          let l = i + o + s + a;
          if (l !== 0) {
            if (l > 2 || i && o || s && a) {
              this._basicSquare({
                x: e,
                y: t,
                size: n,
                rotation: 0
              });
            } else {
              if (l === 2) {
                let r = 0;
                if (i && s) {
                  r = Math.PI / 2;
                } else if (s && o) {
                  r = Math.PI;
                } else if (o && a) {
                  r = -Math.PI / 2;
                }
                this._basicCornerRounded({
                  x: e,
                  y: t,
                  size: n,
                  rotation: r
                });
                return;
              }
              if (l === 1) {
                let r = 0;
                if (s) {
                  r = Math.PI / 2;
                } else if (o) {
                  r = Math.PI;
                } else if (a) {
                  r = -Math.PI / 2;
                }
                this._basicSideRounded({
                  x: e,
                  y: t,
                  size: n,
                  rotation: r
                });
                return;
              }
            }
          } else {
            this._basicDot({
              x: e,
              y: t,
              size: n,
              rotation: 0
            });
          }
        }
        _drawExtraRounded({
          x: e,
          y: t,
          size: n,
          getNeighbor: r
        }) {
          let i = r ? +r(-1, 0) : 0;
          let o = r ? +r(1, 0) : 0;
          let s = r ? +r(0, -1) : 0;
          let a = r ? +r(0, 1) : 0;
          let l = i + o + s + a;
          if (l !== 0) {
            if (l > 2 || i && o || s && a) {
              this._basicSquare({
                x: e,
                y: t,
                size: n,
                rotation: 0
              });
            } else {
              if (l === 2) {
                let r = 0;
                if (i && s) {
                  r = Math.PI / 2;
                } else if (s && o) {
                  r = Math.PI;
                } else if (o && a) {
                  r = -Math.PI / 2;
                }
                this._basicCornerExtraRounded({
                  x: e,
                  y: t,
                  size: n,
                  rotation: r
                });
                return;
              }
              if (l === 1) {
                let r = 0;
                if (s) {
                  r = Math.PI / 2;
                } else if (o) {
                  r = Math.PI;
                } else if (a) {
                  r = -Math.PI / 2;
                }
                this._basicSideRounded({
                  x: e,
                  y: t,
                  size: n,
                  rotation: r
                });
                return;
              }
            }
          } else {
            this._basicDot({
              x: e,
              y: t,
              size: n,
              rotation: 0
            });
          }
        }
        _drawClassy({
          x: e,
          y: t,
          size: n,
          getNeighbor: r
        }) {
          let i = r ? +r(-1, 0) : 0;
          let o = r ? +r(1, 0) : 0;
          let s = r ? +r(0, -1) : 0;
          let a = r ? +r(0, 1) : 0;
          if (i + o + s + a !== 0) {
            if (i || s) {
              if (o || a) {
                this._basicSquare({
                  x: e,
                  y: t,
                  size: n,
                  rotation: 0
                });
              } else {
                this._basicCornerRounded({
                  x: e,
                  y: t,
                  size: n,
                  rotation: Math.PI / 2
                });
              }
            } else {
              this._basicCornerRounded({
                x: e,
                y: t,
                size: n,
                rotation: -Math.PI / 2
              });
            }
          } else {
            this._basicCornersRounded({
              x: e,
              y: t,
              size: n,
              rotation: Math.PI / 2
            });
          }
        }
        _drawClassyRounded({
          x: e,
          y: t,
          size: n,
          getNeighbor: r
        }) {
          let i = r ? +r(-1, 0) : 0;
          let o = r ? +r(1, 0) : 0;
          let s = r ? +r(0, -1) : 0;
          let a = r ? +r(0, 1) : 0;
          if (i + o + s + a !== 0) {
            if (i || s) {
              if (o || a) {
                this._basicSquare({
                  x: e,
                  y: t,
                  size: n,
                  rotation: 0
                });
              } else {
                this._basicCornerExtraRounded({
                  x: e,
                  y: t,
                  size: n,
                  rotation: Math.PI / 2
                });
              }
            } else {
              this._basicCornerExtraRounded({
                x: e,
                y: t,
                size: n,
                rotation: -Math.PI / 2
              });
            }
          } else {
            this._basicCornersRounded({
              x: e,
              y: t,
              size: n,
              rotation: Math.PI / 2
            });
          }
        }
      }
      let l = {
        dot: "dot",
        square: "square",
        extraRounded: "extra-rounded"
      };
      let d = Object.values(l);
      class h {
        constructor({
          svg: e,
          type: t,
          window: n
        }) {
          this._svg = e;
          this._type = t;
          this._window = n;
        }
        draw(e, t, n, r) {
          let i;
          switch (this._type) {
            case l.square:
              i = this._drawSquare;
              break;
            case l.extraRounded:
              i = this._drawExtraRounded;
              break;
            default:
              i = this._drawDot;
          }
          i.call(this, {
            x: e,
            y: t,
            size: n,
            rotation: r
          });
        }
        _rotateFigure({
          x: e,
          y: t,
          size: n,
          rotation: r = 0,
          draw: i
        }) {
          var o;
          i();
          if ((o = this._element) !== null && o !== undefined) {
            o.setAttribute("transform", `rotate(${r * 180 / Math.PI},${e + n / 2},${t + n / 2})`);
          }
        }
        _basicDot(e) {
          let {
            size: t,
            x: n,
            y: r
          } = e;
          let i = t / 7;
          this._rotateFigure(Object.assign(Object.assign({}, e), {
            draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path");
              this._element.setAttribute("clip-rule", "evenodd");
              this._element.setAttribute("d", `M ${n + t / 2} ${r}a ${t / 2} ${t / 2} 0 1 0 0.1 0zm 0 ${i}a ${t / 2 - i} ${t / 2 - i} 0 1 1 -0.1 0Z`);
            }
          }));
        }
        _basicSquare(e) {
          let {
            size: t,
            x: n,
            y: r
          } = e;
          let i = t / 7;
          this._rotateFigure(Object.assign(Object.assign({}, e), {
            draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path");
              this._element.setAttribute("clip-rule", "evenodd");
              this._element.setAttribute("d", `M ${n} ${r}v ${t}h ${t}v ${-t}zM ${n + i} ${r + i}h ${t - i * 2}v ${t - i * 2}h ${i * 2 - t}z`);
            }
          }));
        }
        _basicExtraRounded(e) {
          let {
            size: t,
            x: n,
            y: r
          } = e;
          let i = t / 7;
          this._rotateFigure(Object.assign(Object.assign({}, e), {
            draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path");
              this._element.setAttribute("clip-rule", "evenodd");
              this._element.setAttribute("d", `M ${n} ${r + i * 2.5}v ${i * 2}a ${i * 2.5} ${i * 2.5}, 0, 0, 0, ${i * 2.5} ${i * 2.5}h ${i * 2}a ${i * 2.5} ${i * 2.5}, 0, 0, 0, ${i * 2.5} ${-(i * 2.5)}v ${i * -2}a ${i * 2.5} ${i * 2.5}, 0, 0, 0, ${-(i * 2.5)} ${-(i * 2.5)}h ${i * -2}a ${i * 2.5} ${i * 2.5}, 0, 0, 0, ${-(i * 2.5)} ${i * 2.5}M ${n + i * 2.5} ${r + i}h ${i * 2}a ${i * 1.5} ${i * 1.5}, 0, 0, 1, ${i * 1.5} ${i * 1.5}v ${i * 2}a ${i * 1.5} ${i * 1.5}, 0, 0, 1, ${-(i * 1.5)} ${i * 1.5}h ${i * -2}a ${i * 1.5} ${i * 1.5}, 0, 0, 1, ${-(i * 1.5)} ${-(i * 1.5)}v ${i * -2}a ${i * 1.5} ${i * 1.5}, 0, 0, 1, ${i * 1.5} ${-(i * 1.5)}`);
            }
          }));
        }
        _drawDot({
          x: e,
          y: t,
          size: n,
          rotation: r
        }) {
          this._basicDot({
            x: e,
            y: t,
            size: n,
            rotation: r
          });
        }
        _drawSquare({
          x: e,
          y: t,
          size: n,
          rotation: r
        }) {
          this._basicSquare({
            x: e,
            y: t,
            size: n,
            rotation: r
          });
        }
        _drawExtraRounded({
          x: e,
          y: t,
          size: n,
          rotation: r
        }) {
          this._basicExtraRounded({
            x: e,
            y: t,
            size: n,
            rotation: r
          });
        }
      }
      let c = {
        dot: "dot",
        square: "square"
      };
      let u = Object.values(c);
      class p {
        constructor({
          svg: e,
          type: t,
          window: n
        }) {
          this._svg = e;
          this._type = t;
          this._window = n;
        }
        draw(e, t, n, r) {
          (this._type === c.square ? this._drawSquare : this._drawDot).call(this, {
            x: e,
            y: t,
            size: n,
            rotation: r
          });
        }
        _rotateFigure({
          x: e,
          y: t,
          size: n,
          rotation: r = 0,
          draw: i
        }) {
          var o;
          i();
          if ((o = this._element) !== null && o !== undefined) {
            o.setAttribute("transform", `rotate(${r * 180 / Math.PI},${e + n / 2},${t + n / 2})`);
          }
        }
        _basicDot(e) {
          let {
            size: t,
            x: n,
            y: r
          } = e;
          this._rotateFigure(Object.assign(Object.assign({}, e), {
            draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "circle");
              this._element.setAttribute("cx", String(n + t / 2));
              this._element.setAttribute("cy", String(r + t / 2));
              this._element.setAttribute("r", String(t / 2));
            }
          }));
        }
        _basicSquare(e) {
          let {
            size: t,
            x: n,
            y: r
          } = e;
          this._rotateFigure(Object.assign(Object.assign({}, e), {
            draw: () => {
              this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
              this._element.setAttribute("x", String(n));
              this._element.setAttribute("y", String(r));
              this._element.setAttribute("width", String(t));
              this._element.setAttribute("height", String(t));
            }
          }));
        }
        _drawDot({
          x: e,
          y: t,
          size: n,
          rotation: r
        }) {
          this._basicDot({
            x: e,
            y: t,
            size: n,
            rotation: r
          });
        }
        _drawSquare({
          x: e,
          y: t,
          size: n,
          rotation: r
        }) {
          this._basicSquare({
            x: e,
            y: t,
            size: n,
            rotation: r
          });
        }
      }
      let g = "circle";
      let f = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]];
      let m = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
      class b {
        constructor(e, t) {
          this._roundSize = e => this._options.dotsOptions.roundSize ? Math.floor(e) : e;
          this._window = t;
          this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "svg");
          this._element.setAttribute("width", String(e.width));
          this._element.setAttribute("height", String(e.height));
          this._element.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
          if (!e.dotsOptions.roundSize) {
            this._element.setAttribute("shape-rendering", "crispEdges");
          }
          this._element.setAttribute("viewBox", `0 0 ${e.width} ${e.height}`);
          this._defs = this._window.document.createElementNS("http://www.w3.org/2000/svg", "defs");
          this._element.appendChild(this._defs);
          this._imageUri = e.image;
          this._instanceId = b.instanceCount++;
          this._options = e;
        }
        get width() {
          return this._options.width;
        }
        get height() {
          return this._options.height;
        }
        getElement() {
          return this._element;
        }
        async drawQR(e) {
          let t = e.getModuleCount();
          let n = Math.min(this._options.width, this._options.height) - this._options.margin * 2;
          let r = this._options.shape === g ? n / Math.sqrt(2) : n;
          let i = this._roundSize(r / t);
          let o = {
            hideXDots: 0,
            hideYDots: 0,
            width: 0,
            height: 0
          };
          this._qr = e;
          if (this._options.image) {
            await this.loadImage();
            if (!this._image) {
              return;
            }
            let {
              imageOptions: e,
              qrOptions: n
            } = this._options;
            let r = Math.floor(e.imageSize * s[n.errorCorrectionLevel] * t * t);
            o = function ({
              originalHeight: e,
              originalWidth: t,
              maxHiddenDots: n,
              maxHiddenAxisDots: r,
              dotSize: i
            }) {
              let o = {
                x: 0,
                y: 0
              };
              let s = {
                x: 0,
                y: 0
              };
              if (e <= 0 || t <= 0 || n <= 0 || i <= 0) {
                return {
                  height: 0,
                  width: 0,
                  hideYDots: 0,
                  hideXDots: 0
                };
              }
              let a = e / t;
              o.x = Math.floor(Math.sqrt(n / a));
              if (o.x <= 0) {
                o.x = 1;
              }
              if (r && r < o.x) {
                o.x = r;
              }
              if (o.x % 2 == 0) {
                o.x--;
              }
              s.x = o.x * i;
              o.y = 1 + Math.ceil((o.x * a - 1) / 2) * 2;
              s.y = Math.round(s.x * a);
              if (o.y * o.x > n || r && r < o.y) {
                if (r && r < o.y) {
                  o.y = r;
                  if (o.y % 2 == 0) {
                    o.x--;
                  }
                } else {
                  o.y -= 2;
                }
                s.y = o.y * i;
                o.x = 1 + Math.ceil((o.y / a - 1) / 2) * 2;
                s.x = Math.round(s.y / a);
              }
              return {
                height: s.y,
                width: s.x,
                hideYDots: o.y,
                hideXDots: o.x
              };
            }({
              originalWidth: this._image.width,
              originalHeight: this._image.height,
              maxHiddenDots: r,
              maxHiddenAxisDots: t - 14,
              dotSize: i
            });
          }
          this.drawBackground();
          this.drawDots((e, n) => {
            return (!this._options.imageOptions.hideBackgroundDots || !(e >= (t - o.hideYDots) / 2) || !(e < (t + o.hideYDots) / 2) || !(n >= (t - o.hideXDots) / 2) || !(n < (t + o.hideXDots) / 2)) && !f[e]?.[n] && !f[e - t + 7]?.[n] && !f[e]?.[n - t + 7] && !m[e]?.[n] && !m[e - t + 7]?.[n] && !m[e]?.[n - t + 7];
          });
          this.drawCorners();
          if (this._options.image) {
            await this.drawImage({
              width: o.width,
              height: o.height,
              count: t,
              dotSize: i
            });
          }
        }
        drawBackground() {
          let r = this._element;
          let i = this._options;
          if (r) {
            let r = i.backgroundOptions?.gradient;
            let o = i.backgroundOptions?.color;
            let s = i.height;
            let a = i.width;
            if (r || o) {
              let e = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
              this._backgroundClipPath = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
              this._backgroundClipPath.setAttribute("id", `clip-path-background-color-${this._instanceId}`);
              this._defs.appendChild(this._backgroundClipPath);
              if (i.backgroundOptions?.round) {
                s = a = Math.min(i.width, i.height);
                e.setAttribute("rx", String(s / 2 * i.backgroundOptions.round));
              }
              e.setAttribute("x", String(this._roundSize((i.width - a) / 2)));
              e.setAttribute("y", String(this._roundSize((i.height - s) / 2)));
              e.setAttribute("width", String(a));
              e.setAttribute("height", String(s));
              this._backgroundClipPath.appendChild(e);
              this._createColor({
                options: r,
                color: o,
                additionalRotation: 0,
                x: 0,
                y: 0,
                height: i.height,
                width: i.width,
                name: `background-color-${this._instanceId}`
              });
            }
          }
        }
        drawDots(e) {
          var n;
          if (!this._qr) {
            throw "QR code is not defined";
          }
          let r = this._options;
          let i = this._qr.getModuleCount();
          if (i > r.width || i > r.height) {
            throw "The canvas is too small.";
          }
          let o = Math.min(r.width, r.height) - r.margin * 2;
          let s = r.shape === g ? o / Math.sqrt(2) : o;
          let l = this._roundSize(s / i);
          let d = this._roundSize((r.width - i * l) / 2);
          let h = this._roundSize((r.height - i * l) / 2);
          let c = new a({
            svg: this._element,
            type: r.dotsOptions.type,
            window: this._window
          });
          this._dotsClipPath = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
          this._dotsClipPath.setAttribute("id", `clip-path-dot-color-${this._instanceId}`);
          this._defs.appendChild(this._dotsClipPath);
          this._createColor({
            options: r.dotsOptions?.gradient,
            color: r.dotsOptions.color,
            additionalRotation: 0,
            x: 0,
            y: 0,
            height: r.height,
            width: r.width,
            name: `dot-color-${this._instanceId}`
          });
          for (let t = 0; t < i; t++) {
            for (let r = 0; r < i; r++) {
              if (!e || !!e(t, r)) {
                if ((n = this._qr) === null || n === undefined ? undefined : n.isDark(t, r)) {
                  c.draw(d + r * l, h + t * l, l, (n, o) => !(r + n < 0) && !(t + o < 0) && !(r + n >= i) && !(t + o >= i) && (!e || !!e(t + o, r + n)) && !!this._qr && this._qr.isDark(t + o, r + n));
                  if (c._element && this._dotsClipPath) {
                    this._dotsClipPath.appendChild(c._element);
                  }
                }
              }
            }
          }
          if (r.shape === g) {
            let e = this._roundSize((o / l - i) / 2);
            let t = i + e * 2;
            let n = d - e * l;
            let r = h - e * l;
            let s = [];
            let a = this._roundSize(t / 2);
            for (let n = 0; n < t; n++) {
              s[n] = [];
              for (let r = 0; r < t; r++) {
                if (n >= e - 1 && n <= t - e && r >= e - 1 && r <= t - e || Math.sqrt((n - a) * (n - a) + (r - a) * (r - a)) > a) {
                  s[n][r] = 0;
                } else {
                  s[n][r] = +!!this._qr.isDark(r - e * 2 < 0 ? r : r >= i ? r - e * 2 : r - e, n - e * 2 < 0 ? n : n >= i ? n - e * 2 : n - e);
                }
              }
            }
            for (let e = 0; e < t; e++) {
              for (let i = 0; i < t; i++) {
                if (s[e][i]) {
                  c.draw(n + i * l, r + e * l, l, (t, n) => {
                    return !!s[e + n]?.[i + t];
                  });
                  if (c._element && this._dotsClipPath) {
                    this._dotsClipPath.appendChild(c._element);
                  }
                }
              }
            }
          }
        }
        drawCorners() {
          if (!this._qr) {
            throw "QR code is not defined";
          }
          let e = this._element;
          let t = this._options;
          if (!e) {
            throw "Element code is not defined";
          }
          let n = this._qr.getModuleCount();
          let r = Math.min(t.width, t.height) - t.margin * 2;
          let i = t.shape === g ? r / Math.sqrt(2) : r;
          let o = this._roundSize(i / n);
          let s = o * 7;
          let l = o * 3;
          let c = this._roundSize((t.width - n * o) / 2);
          let b = this._roundSize((t.height - n * o) / 2);
          [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach(([e, r, i]) => {
            let $ = c + e * o * (n - 7);
            let M = b + r * o * (n - 7);
            let I = this._dotsClipPath;
            let N = this._dotsClipPath;
            if (t.cornersSquareOptions?.gradient || t.cornersSquareOptions?.color) {
              (I = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", `clip-path-corners-square-color-${e}-${r}-${this._instanceId}`);
              this._defs.appendChild(I);
              this._cornersSquareClipPath = this._cornersDotClipPath = N = I;
              this._createColor({
                options: t.cornersSquareOptions?.gradient,
                color: t.cornersSquareOptions?.color,
                additionalRotation: i,
                x: $,
                y: M,
                height: s,
                width: s,
                name: `corners-square-color-${e}-${r}-${this._instanceId}`
              });
            }
            if (t.cornersSquareOptions?.type && d.includes(t.cornersSquareOptions.type)) {
              let e = new h({
                svg: this._element,
                type: t.cornersSquareOptions.type,
                window: this._window
              });
              e.draw($, M, s, i);
              if (e._element && I) {
                I.appendChild(e._element);
              }
            } else {
              let e = new a({
                svg: this._element,
                type: t.cornersSquareOptions?.type || t.dotsOptions.type,
                window: this._window
              });
              for (let t = 0; t < f.length; t++) {
                for (let n = 0; n < f[t].length; n++) {
                  if (f[t]?.[n]) {
                    e.draw($ + n * o, M + t * o, o, (e, r) => {
                      return !!f[t + r]?.[n + e];
                    });
                    if (e._element && I) {
                      I.appendChild(e._element);
                    }
                  }
                }
              }
            }
            if (t.cornersDotOptions?.gradient || t.cornersDotOptions?.color) {
              (N = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", `clip-path-corners-dot-color-${e}-${r}-${this._instanceId}`);
              this._defs.appendChild(N);
              this._cornersDotClipPath = N;
              this._createColor({
                options: t.cornersDotOptions?.gradient,
                color: t.cornersDotOptions?.color,
                additionalRotation: i,
                x: $ + o * 2,
                y: M + o * 2,
                height: l,
                width: l,
                name: `corners-dot-color-${e}-${r}-${this._instanceId}`
              });
            }
            if (t.cornersDotOptions?.type && u.includes(t.cornersDotOptions.type)) {
              let e = new p({
                svg: this._element,
                type: t.cornersDotOptions.type,
                window: this._window
              });
              e.draw($ + o * 2, M + o * 2, l, i);
              if (e._element && N) {
                N.appendChild(e._element);
              }
            } else {
              let e = new a({
                svg: this._element,
                type: t.cornersDotOptions?.type || t.dotsOptions.type,
                window: this._window
              });
              for (let t = 0; t < m.length; t++) {
                for (let n = 0; n < m[t].length; n++) {
                  if (m[t]?.[n]) {
                    e.draw($ + n * o, M + t * o, o, (e, r) => {
                      return !!m[t + r]?.[n + e];
                    });
                    if (e._element && N) {
                      N.appendChild(e._element);
                    }
                  }
                }
              }
            }
          });
        }
        loadImage() {
          return new Promise((e, t) => {
            let r = this._options;
            if (!r.image) {
              return t("Image is not defined");
            }
            if (r.nodeCanvas?.loadImage) {
              r.nodeCanvas.loadImage(r.image).then(t => {
                var n;
                var i;
                this._image = t;
                if (this._options.imageOptions.saveAsBlob) {
                  let e = (n = r.nodeCanvas) === null || n === undefined ? undefined : n.createCanvas(this._image.width, this._image.height);
                  if ((i = e == null ? undefined : e.getContext("2d")) !== null && i !== undefined) {
                    i.drawImage(t, 0, 0);
                  }
                  this._imageUri = e == null ? undefined : e.toDataURL();
                }
                e();
              }).catch(t);
            } else {
              let t = new this._window.Image();
              if (typeof r.imageOptions.crossOrigin == "string") {
                t.crossOrigin = r.imageOptions.crossOrigin;
              }
              this._image = t;
              t.onload = async () => {
                if (this._options.imageOptions.saveAsBlob) {
                  this._imageUri = await async function (e, t) {
                    return new Promise(n => {
                      let r = new t.XMLHttpRequest();
                      r.onload = function () {
                        let e = new t.FileReader();
                        e.onloadend = function () {
                          n(e.result);
                        };
                        e.readAsDataURL(r.response);
                      };
                      r.open("GET", e);
                      r.responseType = "blob";
                      r.send();
                    });
                  }(r.image || "", this._window);
                }
                e();
              };
              t.src = r.image;
            }
          });
        }
        async drawImage({
          width: e,
          height: t,
          count: n,
          dotSize: r
        }) {
          let i = this._options;
          let o = this._roundSize((i.width - n * r) / 2);
          let s = this._roundSize((i.height - n * r) / 2);
          let a = o + this._roundSize(i.imageOptions.margin + (n * r - e) / 2);
          let l = s + this._roundSize(i.imageOptions.margin + (n * r - t) / 2);
          let d = e - i.imageOptions.margin * 2;
          let h = t - i.imageOptions.margin * 2;
          let c = this._window.document.createElementNS("http://www.w3.org/2000/svg", "image");
          c.setAttribute("href", this._imageUri || "");
          c.setAttribute("xlink:href", this._imageUri || "");
          c.setAttribute("x", String(a));
          c.setAttribute("y", String(l));
          c.setAttribute("width", `${d}px`);
          c.setAttribute("height", `${h}px`);
          this._element.appendChild(c);
        }
        _createColor({
          options: e,
          color: t,
          additionalRotation: n,
          x: r,
          y: i,
          height: o,
          width: s,
          name: a
        }) {
          let l = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
          l.setAttribute("x", String(r));
          l.setAttribute("y", String(i));
          l.setAttribute("height", String(o));
          l.setAttribute("width", String(s));
          l.setAttribute("clip-path", `url('#clip-path-${a}')`);
          if (e) {
            let t;
            if (e.type === "radial") {
              (t = this._window.document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")).setAttribute("id", a);
              t.setAttribute("gradientUnits", "userSpaceOnUse");
              t.setAttribute("fx", String(r + s / 2));
              t.setAttribute("fy", String(i + o / 2));
              t.setAttribute("cx", String(r + s / 2));
              t.setAttribute("cy", String(i + o / 2));
              t.setAttribute("r", String((s > o ? s : o) / 2));
            } else {
              let l = ((e.rotation || 0) + n) % (Math.PI * 2);
              let d = (l + Math.PI * 2) % (Math.PI * 2);
              let h = r + s / 2;
              let c = i + o / 2;
              let u = r + s / 2;
              let p = i + o / 2;
              if (d >= 0 && d <= Math.PI * 0.25 || d > Math.PI * 1.75 && d <= Math.PI * 2) {
                h -= s / 2;
                c -= o / 2 * Math.tan(l);
                u += s / 2;
                p += o / 2 * Math.tan(l);
              } else if (d > Math.PI * 0.25 && d <= Math.PI * 0.75) {
                c -= o / 2;
                h -= s / 2 / Math.tan(l);
                p += o / 2;
                u += s / 2 / Math.tan(l);
              } else if (d > Math.PI * 0.75 && d <= Math.PI * 1.25) {
                h += s / 2;
                c += o / 2 * Math.tan(l);
                u -= s / 2;
                p -= o / 2 * Math.tan(l);
              } else if (d > Math.PI * 1.25 && d <= Math.PI * 1.75) {
                c += o / 2;
                h += s / 2 / Math.tan(l);
                p -= o / 2;
                u -= s / 2 / Math.tan(l);
              }
              (t = this._window.document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")).setAttribute("id", a);
              t.setAttribute("gradientUnits", "userSpaceOnUse");
              t.setAttribute("x1", String(Math.round(h)));
              t.setAttribute("y1", String(Math.round(c)));
              t.setAttribute("x2", String(Math.round(u)));
              t.setAttribute("y2", String(Math.round(p)));
            }
            e.colorStops.forEach(({
              offset: e,
              color: n
            }) => {
              let r = this._window.document.createElementNS("http://www.w3.org/2000/svg", "stop");
              r.setAttribute("offset", e * 100 + "%");
              r.setAttribute("stop-color", n);
              t.appendChild(r);
            });
            l.setAttribute("fill", `url('#${a}')`);
            this._defs.appendChild(t);
          } else if (t) {
            l.setAttribute("fill", t);
          }
          this._element.appendChild(l);
        }
      }
      b.instanceCount = 0;
      let y = "canvas";
      let v = {};
      for (let e = 0; e <= 40; e++) {
        v[e] = e;
      }
      let w = {
        type: y,
        shape: "square",
        width: 300,
        height: 300,
        data: "",
        margin: 0,
        qrOptions: {
          typeNumber: v[0],
          mode: undefined,
          errorCorrectionLevel: "Q"
        },
        imageOptions: {
          saveAsBlob: true,
          hideBackgroundDots: true,
          imageSize: 0.4,
          crossOrigin: undefined,
          margin: 0
        },
        dotsOptions: {
          type: "square",
          color: "#000",
          roundSize: true
        },
        backgroundOptions: {
          round: 0,
          color: "#fff"
        }
      };
      function _(e) {
        let t = Object.assign({}, e);
        if (!t.colorStops || !t.colorStops.length) {
          throw "Field 'colorStops' is required in gradient";
        }
        if (t.rotation) {
          t.rotation = Number(t.rotation);
        } else {
          t.rotation = 0;
        }
        t.colorStops = t.colorStops.map(e => Object.assign(Object.assign({}, e), {
          offset: Number(e.offset)
        }));
        return t;
      }
      function C(e) {
        let t = Object.assign({}, e);
        t.width = Number(t.width);
        t.height = Number(t.height);
        t.margin = Number(t.margin);
        t.imageOptions = Object.assign(Object.assign({}, t.imageOptions), {
          hideBackgroundDots: !!t.imageOptions.hideBackgroundDots,
          imageSize: Number(t.imageOptions.imageSize),
          margin: Number(t.imageOptions.margin)
        });
        if (t.margin > Math.min(t.width, t.height)) {
          t.margin = Math.min(t.width, t.height);
        }
        t.dotsOptions = Object.assign({}, t.dotsOptions);
        t.dotsOptions.gradient &&= _(t.dotsOptions.gradient);
        if (t.cornersSquareOptions) {
          t.cornersSquareOptions = Object.assign({}, t.cornersSquareOptions);
          t.cornersSquareOptions.gradient &&= _(t.cornersSquareOptions.gradient);
        }
        if (t.cornersDotOptions) {
          t.cornersDotOptions = Object.assign({}, t.cornersDotOptions);
          t.cornersDotOptions.gradient &&= _(t.cornersDotOptions.gradient);
        }
        if (t.backgroundOptions) {
          t.backgroundOptions = Object.assign({}, t.backgroundOptions);
          t.backgroundOptions.gradient &&= _(t.backgroundOptions.gradient);
        }
        return t;
      }
      var O = n(873);
      var x = n.n(O);
      function E(e) {
        if (!e) {
          throw Error("Extension must be defined");
        }
        if (e[0] === ".") {
          e = e.substring(1);
        }
        let t = {
          bmp: "image/bmp",
          gif: "image/gif",
          ico: "image/vnd.microsoft.icon",
          jpeg: "image/jpeg",
          jpg: "image/jpeg",
          png: "image/png",
          svg: "image/svg+xml",
          tif: "image/tiff",
          tiff: "image/tiff",
          webp: "image/webp",
          pdf: "application/pdf"
        }[e.toLowerCase()];
        if (!t) {
          throw Error(`Extension "${e}" is not supported`);
        }
        return t;
      }
      class S {
        constructor(e) {
          if (e == null ? undefined : e.jsdom) {
            this._window = new e.jsdom("", {
              resources: "usable"
            }).window;
          } else {
            this._window = window;
          }
          this._options = e ? C(t(w, e)) : w;
          this.update();
        }
        static _clearContainer(e) {
          if (e) {
            e.innerHTML = "";
          }
        }
        _setupSvg() {
          if (!this._qr) {
            return;
          }
          let e = new b(this._options, this._window);
          this._svg = e.getElement();
          this._svgDrawingPromise = e.drawQR(this._qr).then(() => {
            var t;
            if (this._svg) {
              if ((t = this._extension) !== null && t !== undefined) {
                t.call(this, e.getElement(), this._options);
              }
            }
          });
        }
        _setupCanvas() {
          var t;
          if (this._qr) {
            if (this._options.nodeCanvas?.createCanvas) {
              this._nodeCanvas = this._options.nodeCanvas.createCanvas(this._options.width, this._options.height);
              this._nodeCanvas.width = this._options.width;
              this._nodeCanvas.height = this._options.height;
            } else {
              this._domCanvas = document.createElement("canvas");
              this._domCanvas.width = this._options.width;
              this._domCanvas.height = this._options.height;
            }
            this._setupSvg();
            this._canvasDrawingPromise = (t = this._svgDrawingPromise) === null || t === undefined ? undefined : t.then(() => {
              if (!this._svg) {
                return;
              }
              let t = this._svg;
              let n = btoa(new this._window.XMLSerializer().serializeToString(t));
              let r = `data:${E("svg")};base64,${n}`;
              if (this._options.nodeCanvas?.loadImage) {
                return this._options.nodeCanvas.loadImage(r).then(e => {
                  var t;
                  var n;
                  e.width = this._options.width;
                  e.height = this._options.height;
                  if ((n = (t = this._nodeCanvas) === null || t === undefined ? undefined : t.getContext("2d")) !== null && n !== undefined) {
                    n.drawImage(e, 0, 0);
                  }
                });
              }
              {
                let e = new this._window.Image();
                return new Promise(t => {
                  e.onload = () => {
                    var n;
                    var r;
                    if ((r = (n = this._domCanvas) === null || n === undefined ? undefined : n.getContext("2d")) !== null && r !== undefined) {
                      r.drawImage(e, 0, 0);
                    }
                    t();
                  };
                  e.src = r;
                });
              }
            });
          }
        }
        async _getElement(e = "png") {
          if (!this._qr) {
            throw "QR code is empty";
          }
          if (e.toLowerCase() === "svg") {
            if (!this._svg || !this._svgDrawingPromise) {
              this._setupSvg();
            }
            await this._svgDrawingPromise;
            return this._svg;
          } else {
            if (!this._domCanvas && !this._nodeCanvas || !this._canvasDrawingPromise) {
              this._setupCanvas();
            }
            await this._canvasDrawingPromise;
            return this._domCanvas || this._nodeCanvas;
          }
        }
        update(e) {
          S._clearContainer(this._container);
          this._options = e ? C(t(this._options, e)) : this._options;
          if (this._options.data) {
            this._qr = x()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel);
            this._qr.addData(this._options.data, this._options.qrOptions.mode || function (e) {
              switch (true) {
                case /^[0-9]*$/.test(e):
                  return "Numeric";
                case /^[0-9A-Z $%*+\-./:]*$/.test(e):
                  return "Alphanumeric";
                default:
                  return "Byte";
              }
            }(this._options.data));
            this._qr.make();
            if (this._options.type === y) {
              this._setupCanvas();
            } else {
              this._setupSvg();
            }
            this.append(this._container);
          }
        }
        append(e) {
          if (e) {
            if (typeof e.appendChild != "function") {
              throw "Container should be a single DOM node";
            }
            if (this._options.type === y) {
              if (this._domCanvas) {
                e.appendChild(this._domCanvas);
              }
            } else if (this._svg) {
              e.appendChild(this._svg);
            }
            this._container = e;
          }
        }
        applyExtension(e) {
          if (!e) {
            throw "Extension function should be defined.";
          }
          this._extension = e;
          this.update();
        }
        deleteExtension() {
          this._extension = undefined;
          this.update();
        }
        async getRawData(e = "png") {
          if (!this._qr) {
            throw "QR code is empty";
          }
          let t = await this._getElement(e);
          let n = E(e);
          if (!t) {
            return null;
          }
          if (e.toLowerCase() === "svg") {
            let e = `<?xml version="1.0" standalone="no"?>\r
${new this._window.XMLSerializer().serializeToString(t)}`;
            if (typeof Blob == "undefined" || this._options.jsdom) {
              return i.from(e);
            } else {
              return new Blob([e], {
                type: n
              });
            }
          }
          return new Promise(e => {
            if ("toBuffer" in t) {
              if (n === "image/png") {
                e(t.toBuffer(n));
              } else if (n === "image/jpeg") {
                e(t.toBuffer(n));
              } else {
                if (n !== "application/pdf") {
                  throw Error("Unsupported extension");
                }
                e(t.toBuffer(n));
              }
            } else if ("toBlob" in t) {
              t.toBlob(e, n, 1);
            }
          });
        }
        async download(e) {
          if (!this._qr) {
            throw "QR code is empty";
          }
          if (typeof Blob == "undefined") {
            throw "Cannot download in Node.js, call getRawData instead.";
          }
          let t = "png";
          let n = "qr";
          if (typeof e == "string") {
            t = e;
          } else if (typeof e == "object" && e !== null) {
            if (e.name) {
              n = e.name;
            }
            if (e.extension) {
              t = e.extension;
            }
          }
          let r = await this._getElement(t);
          if (r) {
            if (t.toLowerCase() === "svg") {
              let e = new XMLSerializer().serializeToString(r);
              e = "<?xml version=\"1.0\" standalone=\"no\"?>\r\n" + e;
              o(`data:${E(t)};charset=utf-8,${encodeURIComponent(e)}`, `${n}.svg`);
            } else {
              o(r.toDataURL(E(t)), `${n}.${t}`);
            }
          }
        }
      }
      let D = S;
    })();
    return r.default;
  })();
  module.exports = r();
}