// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 211267
         */
module.exports = function (module, exports, require) {
  var t;
  var r;
  window;
  r = function () {
    return function (e) {
      var t = {};
      function r(n) {
        if (t[n]) {
          return t[n].exports;
        }
        var i = t[n] = {
          i: n,
          l: false,
          exports: {}
        };
        e[n].call(i.exports, i, i.exports, r);
        i.l = true;
        return i.exports;
      }
      r.m = e;
      r.c = t;
      r.d = function (e, t, n) {
        if (!r.o(e, t)) {
          Object.defineProperty(e, t, {
            enumerable: true,
            get: n
          });
        }
      };
      r.r = function (e) {
        if (typeof Symbol != "undefined" && Symbol.toStringTag) {
          Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          });
        }
        Object.defineProperty(e, "__esModule", {
          value: true
        });
      };
      r.t = function (e, t) {
        if (t & 1) {
          e = r(e);
        }
        if (t & 8 || t & 4 && typeof e == "object" && e && e.__esModule) {
          return e;
        }
        var n = Object.create(null);
        r.r(n);
        Object.defineProperty(n, "default", {
          enumerable: true,
          value: e
        });
        if (t & 2 && typeof e != "string") {
          for (var i in e) {
            r.d(n, i, function (t) {
              return e[t];
            }.bind(null, i));
          }
        }
        return n;
      };
      r.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };
        r.d(t, "a", t);
        return t;
      };
      r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
      r.p = "";
      return r(r.s = 0);
    }([function (e, t, r) {
      var n;
      var i;
      var o;
      i = [];
      if ((o = typeof (n = function () {
        "use strict";

        function t(e) {
          return (t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
            return typeof e;
          } : function (e) {
            if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
              return "symbol";
            } else {
              return typeof e;
            }
          })(e);
        }
        function n(e) {
          return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
        }
        function i(e, t) {
          return (i = Object.setPrototypeOf || function (e, t) {
            e.__proto__ = t;
            return e;
          })(e, t);
        }
        var o = function (e) {
          var r;
          function o() {
            var e;
            var r;
            (function (e, t) {
              if (!(e instanceof t)) {
                throw TypeError("Cannot call a class as a function");
              }
            })(this, o);
            (e = (r = n(o).call(this)) && (t(r) === "object" || typeof r == "function") ? r : function (e) {
              if (e === undefined) {
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return e;
            }(this)).blockTags = /^(div|p|h1|h2|h3|h4|h5|h6)$/i;
            e.ignoredTags = /^(script|code|pre|textarea)$/i;
            e.presentationalTags = /^(b|code|del|em|i|s|strong)$/i;
            e.spaceLikeTags = /^(br|hr|i|img|pangu)$/i;
            e.spaceSensitiveTags = /^(a|del|pre|s|strike|u)$/i;
            e.isAutoSpacingPageExecuted = false;
            return e;
          }
          (function (e, t) {
            if (typeof t != "function" && t !== null) {
              throw TypeError("Super expression must either be null or a function");
            }
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: true,
                configurable: true
              }
            });
            if (t) {
              i(e, t);
            }
          })(o, e);
          r = [{
            key: "isContentEditable",
            value: function (e) {
              return e.isContentEditable || e.getAttribute && e.getAttribute("g_editable") === "true";
            }
          }, {
            key: "isSpecificTag",
            value: function (e, t) {
              return e && e.nodeName && e.nodeName.search(t) >= 0;
            }
          }, {
            key: "isInsideSpecificTag",
            value: function (e, t, r = false) {
              var n = e;
              if (r && this.isSpecificTag(n, t)) {
                return true;
              }
              while (n.parentNode) {
                n = n.parentNode;
                if (this.isSpecificTag(n, t)) {
                  return true;
                }
              }
              return false;
            }
          }, {
            key: "canIgnoreNode",
            value: function (e) {
              var t = e;
              if (t && (this.isSpecificTag(t, this.ignoredTags) || this.isContentEditable(t))) {
                return true;
              }
              while (t.parentNode) {
                if ((t = t.parentNode) && (this.isSpecificTag(t, this.ignoredTags) || this.isContentEditable(t))) {
                  return true;
                }
              }
              return false;
            }
          }, {
            key: "isFirstTextChild",
            value: function (e, t) {
              var r = e.childNodes;
              var n = 0;
              for (; n < r.length; n++) {
                var i = r[n];
                if (i.nodeType !== Node.COMMENT_NODE && i.textContent) {
                  return i === t;
                }
              }
              return false;
            }
          }, {
            key: "isLastTextChild",
            value: function (e, t) {
              var r = e.childNodes;
              var n = r.length - 1;
              for (; n > -1; n--) {
                var i = r[n];
                if (i.nodeType !== Node.COMMENT_NODE && i.textContent) {
                  return i === t;
                }
              }
              return false;
            }
          }, {
            key: "spacingNodeByXPath",
            value: function (e, t) {
              if (!!(t instanceof Node) && !(t instanceof DocumentFragment)) {
                var r;
                var n;
                var i = document.evaluate(e, t, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                var o = i.snapshotLength - 1;
                for (; o > -1; --o) {
                  r = i.snapshotItem(o);
                  if (this.isSpecificTag(r.parentNode, this.presentationalTags) && !this.isInsideSpecificTag(r.parentNode, this.ignoredTags)) {
                    var u = r.parentNode;
                    if (u.previousSibling) {
                      var a = u.previousSibling;
                      if (a.nodeType === Node.TEXT_NODE) {
                        var c = a.data.substr(-1) + r.data.toString().charAt(0);
                        var l = this.spacing(c);
                        if (c !== l) {
                          a.data = `${a.data} `;
                        }
                      }
                    }
                    if (u.nextSibling) {
                      var s = u.nextSibling;
                      if (s.nodeType === Node.TEXT_NODE) {
                        var f = r.data.substr(-1) + s.data.toString().charAt(0);
                        var p = this.spacing(f);
                        if (f !== p) {
                          s.data = ` ${s.data}`;
                        }
                      }
                    }
                  }
                  if (this.canIgnoreNode(r)) {
                    n = r;
                    continue;
                  }
                  var h = this.spacing(r.data);
                  if (r.data !== h) {
                    r.data = h;
                  }
                  if (n) {
                    if (r.nextSibling && r.nextSibling.nodeName.search(this.spaceLikeTags) >= 0) {
                      n = r;
                      continue;
                    }
                    var d = r.data.toString().substr(-1) + n.data.toString().substr(0, 1);
                    if (this.spacing(d) !== d) {
                      for (var g = n; g.parentNode && g.nodeName.search(this.spaceSensitiveTags) === -1 && this.isFirstTextChild(g.parentNode, g);) {
                        g = g.parentNode;
                      }
                      for (var m = r; m.parentNode && m.nodeName.search(this.spaceSensitiveTags) === -1 && this.isLastTextChild(m.parentNode, m);) {
                        m = m.parentNode;
                      }
                      if (m.nextSibling && m.nextSibling.nodeName.search(this.spaceLikeTags) >= 0) {
                        n = r;
                        continue;
                      }
                      if (m.nodeName.search(this.blockTags) === -1) {
                        if (g.nodeName.search(this.spaceSensitiveTags) === -1) {
                          if (g.nodeName.search(this.ignoredTags) === -1 && g.nodeName.search(this.blockTags) === -1) {
                            if (n.previousSibling) {
                              if (n.previousSibling.nodeName.search(this.spaceLikeTags) === -1) {
                                n.data = ` ${n.data}`;
                              }
                            } else if (!this.canIgnoreNode(n)) {
                              n.data = ` ${n.data}`;
                            }
                          }
                        } else if (m.nodeName.search(this.spaceSensitiveTags) === -1) {
                          r.data = `${r.data} `;
                        } else {
                          var b = document.createElement("pangu");
                          b.innerHTML = " ";
                          if (g.previousSibling) {
                            if (g.previousSibling.nodeName.search(this.spaceLikeTags) === -1) {
                              g.parentNode.insertBefore(b, g);
                            }
                          } else {
                            g.parentNode.insertBefore(b, g);
                          }
                          if (!b.previousElementSibling && b.parentNode) {
                            b.parentNode.removeChild(b);
                          }
                        }
                      }
                    }
                  }
                  n = r;
                }
              }
            }
          }, {
            key: "spacingNode",
            value: function (e) {
              var t = ".//*/text()[normalize-space(.)]";
              if (e.children && e.children.length === 0) {
                t = ".//text()[normalize-space(.)]";
              }
              this.spacingNodeByXPath(t, e);
            }
          }, {
            key: "spacingElementById",
            value: function (e) {
              this.spacingNodeByXPath(`id("${e}")//text()`, document);
            }
          }, {
            key: "spacingElementByClassName",
            value: function (e) {
              this.spacingNodeByXPath(`//*[contains(concat(" ", normalize-space(@class), " "), "${e}")]//text()`, document);
            }
          }, {
            key: "spacingElementByTagName",
            value: function (e) {
              this.spacingNodeByXPath(`//${e}//text()`, document);
            }
          }, {
            key: "spacingPageTitle",
            value: function () {
              this.spacingNodeByXPath("/html/head/title/text()", document);
            }
          }, {
            key: "spacingPageBody",
            value: function () {
              var e = "/html/body//*/text()[normalize-space(.)]";
              ["script", "style", "textarea"].forEach(function (t) {
                e = `${e}[translate(name(..),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz")!="${t}"]`;
              });
              this.spacingNodeByXPath(e, document);
            }
          }, {
            key: "spacingPage",
            value: function () {
              this.spacingPageTitle();
              this.spacingPageBody();
            }
          }, {
            key: "autoSpacingPage",
            value: function (e = 1000, t = 500, r = 2000) {
              if (document.body instanceof Node && !this.isAutoSpacingPageExecuted) {
                this.isAutoSpacingPageExecuted = true;
                var n = this;
                var i = function (e) {
                  var t = this;
                  var r = arguments;
                  var n = false;
                  return function () {
                    if (!n) {
                      n = true;
                      e.apply(t, r);
                    }
                  };
                }(function () {
                  n.spacingPage();
                });
                var o = document.getElementsByTagName("video");
                if (o.length === 0) {
                  setTimeout(function () {
                    i();
                  }, e);
                } else {
                  for (var u = 0; u < o.length; u++) {
                    var a = o[u];
                    if (a.readyState === 4) {
                      setTimeout(function () {
                        i();
                      }, 3000);
                      break;
                    }
                    a.addEventListener("loadeddata", function () {
                      setTimeout(function () {
                        i();
                      }, 4000);
                    });
                  }
                }
                var c = [];
                var l = function (e, t, r) {
                  var n = this;
                  var i = arguments;
                  var o = null;
                  var u = null;
                  return function () {
                    var a = +new Date();
                    clearTimeout(o);
                    u ||= a;
                    if (a - u >= r) {
                      e.apply(n, i);
                      u = a;
                    } else {
                      o = setTimeout(function () {
                        e.apply(n, i);
                      }, t);
                    }
                  };
                }(function () {
                  while (c.length) {
                    var e = c.shift();
                    if (e) {
                      n.spacingNode(e);
                    }
                  }
                }, t, {
                  maxWait: r
                });
                new MutationObserver(function (e, t) {
                  e.forEach(function (e) {
                    switch (e.type) {
                      case "childList":
                        e.addedNodes.forEach(function (e) {
                          if (e.nodeType === Node.ELEMENT_NODE) {
                            c.push(e);
                          } else if (e.nodeType === Node.TEXT_NODE) {
                            c.push(e.parentNode);
                          }
                        });
                        break;
                      case "characterData":
                        var t = e.target;
                        if (t.nodeType === Node.TEXT_NODE) {
                          c.push(t.parentNode);
                        }
                    }
                  });
                  l();
                }).observe(document.body, {
                  characterData: true,
                  childList: true,
                  subtree: true
                });
              }
            }
          }];
          (function (e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || false;
              n.configurable = true;
              if ("value" in n) {
                n.writable = true;
              }
              Object.defineProperty(e, n.key, n);
            }
          })(o.prototype, r);
          return o;
        }(r(1).Pangu);
        var u = new o();
        e.exports = u;
        e.exports.default = u;
        e.exports.Pangu = o;
      }) == "function" ? n.apply(t, i) : n) !== undefined) {
        e.exports = o;
      }
    }, function (e, t, r) {
      var n;
      var i;
      var o;
      i = [];
      if ((o = typeof (n = function () {
        "use strict";

        var t = "⺀-⻿⼀-⿟぀-ゟ゠-ヺー-ヿ㄀-ㄯ㈀-㋿㐀-䶿一-鿿豈-﫿";
        var r = new RegExp(`[${t}]`);
        var n = RegExp(`([${t}])[ ]*([\\:]+|\\.)[ ]*([${t}])`, "g");
        var i = RegExp(`([${t}])[ ]*([~\\!;,\\?]+)[ ]*`, "g");
        var o = RegExp(`([\\.]{2,}|…)([${t}])`, "g");
        var u = RegExp(`([${t}])\\:([A-Z0-9\\(\\)])`, "g");
        var a = RegExp(`([${t}])([\`"״])`, "g");
        var c = RegExp(`([\`"״])([${t}])`, "g");
        var l = /([`"\u05f4]+)[ ]*(.+?)[ ]*([`"\u05f4]+)/g;
        var s = RegExp(`([${t}])('[^s])`, "g");
        var f = RegExp(`(')([${t}])`, "g");
        var p = RegExp(`([A-Za-z0-9${t}])( )('s)`, "g");
        var h = RegExp(`([${t}])(#)([${t}]+)(#)([${t}])`, "g");
        var d = RegExp(`([${t}])(#([^ ]))`, "g");
        var g = RegExp(`(([^ ])#)([${t}])`, "g");
        var m = RegExp(`([${t}])([\\+\\-\\*\\/=&\\|<>])([A-Za-z0-9])`, "g");
        var b = RegExp(`([A-Za-z0-9])([\\+\\-\\*\\/=&\\|<>])([${t}])`, "g");
        var D = /([/]) ([a-z\-_\./]+)/g;
        var y = /([/\.])([A-Za-z\-_\./]+) ([/])/g;
        var v = RegExp(`([${t}])([\\(\\[\\{<>“])`, "g");
        var x = RegExp(`([\\)\\]\\}<>”])([${t}])`, "g");
        var k = /([\(\[\{<\u201c]+)[ ]*(.+?)[ ]*([\)\]\}>\u201d]+)/;
        var w = RegExp(`([A-Za-z0-9${t}])[ ]*([“])([A-Za-z0-9${t}\\-_ ]+)([”])`, "g");
        var C = RegExp(`([“])([A-Za-z0-9${t}\\-_ ]+)([”])[ ]*([A-Za-z0-9${t}])`, "g");
        var E = /([A-Za-z0-9])([\(\[\{])/g;
        var A = /([\)\]\}])([A-Za-z0-9])/g;
        var S = RegExp(`([${t}])([A-Za-zͰ-Ͽ0-9@\\\$%\\^&\\*\\-\\+\\\\=\\|/¡-ÿ⅐-↏✀—➿])`, "g");
        var q = RegExp(`([A-Za-zͰ-Ͽ0-9~\\\$%\\^&\\*\\-\\+\\\\=\\|/!;:,\\.\\?¡-ÿ⅐-↏✀—➿])([${t}])`, "g");
        var T = /(%)([A-Za-z])/g;
        var B = /([ ]*)([\u00b7\u2022\u2027])([ ]*)/g;
        var L = function () {
          var e;
          function t() {
            (function (e, t) {
              if (!(e instanceof t)) {
                throw TypeError("Cannot call a class as a function");
              }
            })(this, t);
            this.version = "4.0.7";
          }
          e = [{
            key: "convertToFullwidth",
            value: function (e) {
              return e.replace(/~/g, "～").replace(/!/g, "！").replace(/;/g, "；").replace(/:/g, "：").replace(/,/g, "，").replace(/\./g, "。").replace(/\?/g, "？");
            }
          }, {
            key: "spacing",
            value: function (e) {
              if (typeof e != "string" || e.length <= 1 || !r.test(e)) {
                return e;
              }
              var t = this;
              var L = e;
              return (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = (L = L.replace(n, function (e, r, n, i) {
                var o = t.convertToFullwidth(n);
                return `${r}${o}${i}`;
              })).replace(i, function (e, r, n) {
                var i = t.convertToFullwidth(n);
                return `${r}${i}`;
              })).replace(o, "$1 $2")).replace(u, "$1：$2")).replace(a, "$1 $2")).replace(c, "$1 $2")).replace(l, "$1$2$3")).replace(s, "$1 $2")).replace(f, "$1 $2")).replace(p, "$1's")).replace(h, "$1 $2$3$4 $5")).replace(d, "$1 $2")).replace(g, "$1 $3")).replace(m, "$1 $2 $3")).replace(b, "$1 $2 $3")).replace(D, "$1$2")).replace(y, "$1$2$3")).replace(v, "$1 $2")).replace(x, "$1 $2")).replace(k, "$1$2$3")).replace(w, "$1 $2$3$4")).replace(C, "$1$2$3 $4")).replace(E, "$1 $2")).replace(A, "$1 $2")).replace(S, "$1 $2")).replace(q, "$1 $2")).replace(T, "$1 $2")).replace(B, "・");
            }
          }, {
            key: "spacingText",
            value: function (e) {
              var t;
              var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
              try {
                t = this.spacing(e);
              } catch (e) {
                r(e);
                return;
              }
              r(null, t);
            }
          }, {
            key: "spacingTextSync",
            value: function (e) {
              return this.spacing(e);
            }
          }];
          (function (e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || false;
              n.configurable = true;
              if ("value" in n) {
                n.writable = true;
              }
              Object.defineProperty(e, n.key, n);
            }
          })(t.prototype, e);
          return t;
        }();
        var F = new L();
        e.exports = F;
        e.exports.default = F;
        e.exports.Pangu = L;
      }) == "function" ? n.apply(t, i) : n) !== undefined) {
        e.exports = o;
      }
    }]);
  };
  module.exports = r();
}