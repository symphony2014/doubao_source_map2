// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-preview-pdf-viewer.a091068e.js
         * chunkId: 55505
         * moduleId: 188389
         */
module.exports = function (module, exports, require) {
  var t;
  var i;
  window;
  i = function () {
    return function (e) {
      var t = {};
      function i(n) {
        if (t[n]) {
          return t[n].exports;
        }
        var r = t[n] = {
          i: n,
          l: false,
          exports: {}
        };
        e[n].call(r.exports, r, r.exports, i);
        r.l = true;
        return r.exports;
      }
      i.m = e;
      i.c = t;
      i.d = function (e, t, n) {
        if (!i.o(e, t)) {
          Object.defineProperty(e, t, {
            enumerable: true,
            get: n
          });
        }
      };
      i.r = function (e) {
        if (typeof Symbol != "undefined" && Symbol.toStringTag) {
          Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          });
        }
        Object.defineProperty(e, "__esModule", {
          value: true
        });
      };
      i.t = function (e, t) {
        if (t & 1) {
          e = i(e);
        }
        if (t & 8 || t & 4 && typeof e == "object" && e && e.__esModule) {
          return e;
        }
        var n = Object.create(null);
        i.r(n);
        Object.defineProperty(n, "default", {
          enumerable: true,
          value: e
        });
        if (t & 2 && typeof e != "string") {
          for (var r in e) {
            i.d(n, r, function (t) {
              return e[t];
            }.bind(null, r));
          }
        }
        return n;
      };
      i.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };
        i.d(t, "a", t);
        return t;
      };
      i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
      i.p = "";
      return i(i.s = 0);
    }({
      "./src/index.js": function (e, t, i) {
        "use strict";

        i.r(t);
        i("./src/sass/index.scss");
        var n = i("./src/js/init.js").default.init;
        if (typeof window != "undefined") {
          window.printJS = n;
        }
        t.default = n;
      },
      "./src/js/browser.js": function (e, t, i) {
        "use strict";

        i.r(t);
        var n = {
          isFirefox: function () {
            return typeof InstallTrigger != "undefined";
          },
          isIE: function () {
            return navigator.userAgent.indexOf("MSIE") !== -1 || !!document.documentMode;
          },
          isEdge: function () {
            return !n.isIE() && !!window.StyleMedia;
          },
          isChrome: function (e = window) {
            return !!e.chrome;
          },
          isSafari: function () {
            return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 || navigator.userAgent.toLowerCase().indexOf("safari") !== -1;
          },
          isIOSChrome: function () {
            return navigator.userAgent.toLowerCase().indexOf("crios") !== -1;
          }
        };
        t.default = n;
      },
      "./src/js/functions.js": function (e, t, i) {
        "use strict";

        i.r(t);
        i.d(t, "addWrapper", function () {
          return s;
        });
        i.d(t, "capitalizePrint", function () {
          return a;
        });
        i.d(t, "collectStyles", function () {
          return l;
        });
        i.d(t, "addHeader", function () {
          return c;
        });
        i.d(t, "cleanUp", function () {
          return d;
        });
        i.d(t, "isRawHTML", function () {
          return u;
        });
        var n = i("./src/js/modal.js");
        var r = i("./src/js/browser.js");
        function o(e) {
          return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
            return typeof e;
          } : function (e) {
            if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
              return "symbol";
            } else {
              return typeof e;
            }
          })(e);
        }
        function s(e, t) {
          return "<div style=\"" + ("font-family:" + t.font + " !important; font-size: " + t.font_size) + " !important; width:100%;\">" + e + "</div>";
        }
        function a(e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        }
        function l(e, t) {
          var i = document.defaultView || window;
          var n = "";
          var r = i.getComputedStyle(e, "");
          var s = 0;
          for (; s < r.length; s++) {
            if ((t.targetStyles.indexOf("*") !== -1 || t.targetStyle.indexOf(r[s]) !== -1 || function (e, t) {
              for (var i = 0; i < e.length; i++) {
                if (o(t) === "object" && t.indexOf(e[i]) !== -1) {
                  return true;
                }
              }
              return false;
            }(t.targetStyles, r[s])) && r.getPropertyValue(r[s])) {
              n += r[s] + ":" + r.getPropertyValue(r[s]) + ";";
            }
          }
          return n + ("max-width: " + t.maxWidth + "px !important; font-size: " + t.font_size + " !important;");
        }
        function c(e, t) {
          var i = document.createElement("div");
          if (u(t.header)) {
            i.innerHTML = t.header;
          } else {
            var n = document.createElement("h1");
            var r = document.createTextNode(t.header);
            n.appendChild(r);
            n.setAttribute("style", t.headerStyle);
            i.appendChild(n);
          }
          e.insertBefore(i, e.childNodes[0]);
        }
        function d(e) {
          if (e.showModal) {
            n.default.close();
          }
          if (e.onLoadingEnd) {
            e.onLoadingEnd();
          }
          if (e.showModal || e.onLoadingStart) {
            window.URL.revokeObjectURL(e.printable);
          }
          var t = "mouseover";
          if (r.default.isChrome() || r.default.isFirefox()) {
            t = "focus";
          }
          window.addEventListener(t, function i() {
            window.removeEventListener(t, i);
            e.onPrintDialogClose();
            var n = document.getElementById(e.frameId);
            if (n) {
              n.remove();
            }
          });
        }
        function u(e) {
          return RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>").test(e);
        }
      },
      "./src/js/html.js": function (e, t, i) {
        "use strict";

        i.r(t);
        var n = i("./src/js/functions.js");
        var r = i("./src/js/print.js");
        function o(e) {
          return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
            return typeof e;
          } : function (e) {
            if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
              return "symbol";
            } else {
              return typeof e;
            }
          })(e);
        }
        t.default = {
          print: function (e, t) {
            var i;
            var s = (i = e.printable, o(i) === "object" && i && (i instanceof HTMLElement || i.nodeType === 1)) ? e.printable : document.getElementById(e.printable);
            if (!s) {
              window.console.error("Invalid HTML element id: " + e.printable);
              return;
            }
            e.printableElement = function e(t, i) {
              var r = t.cloneNode();
              var o = Array.prototype.slice.call(t.childNodes);
              var s = 0;
              for (; s < o.length; s++) {
                if (i.ignoreElements.indexOf(o[s].id) === -1) {
                  var a = e(o[s], i);
                  r.appendChild(a);
                }
              }
              if (i.scanStyles && t.nodeType === 1) {
                r.setAttribute("style", Object(n.collectStyles)(t, i));
              }
              switch (t.tagName) {
                case "SELECT":
                  r.value = t.value;
                  break;
                case "CANVAS":
                  r.getContext("2d").drawImage(t, 0, 0);
              }
              return r;
            }(s, e);
            if (e.header) {
              Object(n.addHeader)(e.printableElement, e);
            }
            r.default.send(e, t);
          }
        };
      },
      "./src/js/image.js": function (e, t, i) {
        "use strict";

        i.r(t);
        var n = i("./src/js/functions.js");
        var r = i("./src/js/print.js");
        var o = i("./src/js/browser.js");
        t.default = {
          print: function (e, t) {
            if (e.printable.constructor !== Array) {
              e.printable = [e.printable];
            }
            e.printableElement = document.createElement("div");
            e.printable.forEach(function (t) {
              var i = document.createElement("img");
              i.setAttribute("style", e.imageStyle);
              i.src = t;
              if (o.default.isFirefox()) {
                var n = i.src;
                i.src = n;
              }
              var r = document.createElement("div");
              r.appendChild(i);
              e.printableElement.appendChild(r);
            });
            if (e.header) {
              Object(n.addHeader)(e.printableElement, e);
            }
            r.default.send(e, t);
          }
        };
      },
      "./src/js/init.js": function (e, t, i) {
        "use strict";

        i.r(t);
        var n = i("./src/js/browser.js");
        var r = i("./src/js/modal.js");
        var o = i("./src/js/pdf.js");
        var s = i("./src/js/html.js");
        var a = i("./src/js/raw-html.js");
        var l = i("./src/js/image.js");
        var c = i("./src/js/json.js");
        function d(e) {
          return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
            return typeof e;
          } : function (e) {
            if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
              return "symbol";
            } else {
              return typeof e;
            }
          })(e);
        }
        var u = ["pdf", "html", "image", "json", "raw-html"];
        t.default = {
          init: function () {
            var e = {
              printable: null,
              fallbackPrintable: null,
              type: "pdf",
              header: null,
              headerStyle: "font-weight: 300;",
              maxWidth: 800,
              properties: null,
              gridHeaderStyle: "font-weight: bold; padding: 5px; border: 1px solid #dddddd;",
              gridStyle: "border: 1px solid lightgray; margin-bottom: -1px;",
              showModal: false,
              onError: function (e) {
                throw e;
              },
              onLoadingStart: null,
              onLoadingEnd: null,
              onPrintDialogClose: function () {},
              onIncompatibleBrowser: function () {},
              modalMessage: "Retrieving Document...",
              frameId: "printJS",
              printableElement: null,
              documentTitle: "Document",
              targetStyle: ["clear", "display", "width", "min-width", "height", "min-height", "max-height"],
              targetStyles: ["border", "box", "break", "text-decoration"],
              ignoreElements: [],
              repeatTableHeader: true,
              css: null,
              style: null,
              scanStyles: true,
              base64: false,
              onPdfOpen: null,
              font: "TimesNewRoman",
              font_size: "12pt",
              honorMarginPadding: true,
              honorColor: false,
              imageStyle: "max-width: 100%;"
            };
            var t = arguments[0];
            if (t === undefined) {
              throw Error("printJS expects at least 1 attribute.");
            }
            switch (d(t)) {
              case "string":
                e.printable = encodeURI(t);
                e.fallbackPrintable = e.printable;
                e.type = arguments[1] || e.type;
                break;
              case "object":
                e.printable = t.printable;
                e.fallbackPrintable = t.fallbackPrintable !== undefined ? t.fallbackPrintable : e.printable;
                e.fallbackPrintable = e.base64 ? `data:application/pdf;base64,${e.fallbackPrintable}` : e.fallbackPrintable;
                for (var i in e) {
                  if (i !== "printable" && i !== "fallbackPrintable") {
                    e[i] = t[i] !== undefined ? t[i] : e[i];
                  }
                }
                break;
              default:
                throw Error("Unexpected argument type! Expected \"string\" or \"object\", got " + d(t));
            }
            if (!e.printable) {
              throw Error("Missing printable information.");
            }
            if (!e.type || typeof e.type != "string" || u.indexOf(e.type.toLowerCase()) === -1) {
              throw Error("Invalid print type. Available types are: pdf, html, image and json.");
            }
            if (e.showModal) {
              r.default.show(e);
            }
            if (e.onLoadingStart) {
              e.onLoadingStart();
            }
            var h = document.getElementById(e.frameId);
            if (h) {
              h.parentNode.removeChild(h);
            }
            var p = document.createElement("iframe");
            if (n.default.isFirefox()) {
              p.setAttribute("style", "width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0");
            } else {
              p.setAttribute("style", "visibility: hidden; height: 0; width: 0; position: absolute; border: 0");
            }
            p.setAttribute("id", e.frameId);
            if (e.type !== "pdf") {
              p.srcdoc = "<html><head><title>" + e.documentTitle + "</title>";
              if (e.css) {
                if (!Array.isArray(e.css)) {
                  e.css = [e.css];
                }
                e.css.forEach(function (e) {
                  p.srcdoc += "<link rel=\"stylesheet\" href=\"" + e + "\">";
                });
              }
              p.srcdoc += "</head><body></body></html>";
            }
            switch (e.type) {
              case "pdf":
                if (n.default.isIE()) {
                  try {
                    window.open(e.fallbackPrintable, "_blank").focus();
                    e.onIncompatibleBrowser();
                  } catch (t) {
                    e.onError(t);
                  } finally {
                    if (e.showModal) {
                      r.default.close();
                    }
                    if (e.onLoadingEnd) {
                      e.onLoadingEnd();
                    }
                  }
                } else {
                  o.default.print(e, p);
                }
                break;
              case "image":
                l.default.print(e, p);
                break;
              case "html":
                s.default.print(e, p);
                break;
              case "raw-html":
                a.default.print(e, p);
                break;
              case "json":
                c.default.print(e, p);
            }
          }
        };
      },
      "./src/js/json.js": function (e, t, i) {
        "use strict";

        i.r(t);
        var n = i("./src/js/functions.js");
        var r = i("./src/js/print.js");
        function o(e) {
          return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
            return typeof e;
          } : function (e) {
            if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
              return "symbol";
            } else {
              return typeof e;
            }
          })(e);
        }
        t.default = {
          print: function (e, t) {
            if (o(e.printable) !== "object") {
              throw Error("Invalid javascript data object (JSON).");
            }
            if (typeof e.repeatTableHeader != "boolean") {
              throw Error("Invalid value for repeatTableHeader attribute (JSON).");
            }
            if (!e.properties || !Array.isArray(e.properties)) {
              throw Error("Invalid properties array for your JSON data.");
            }
            e.properties = e.properties.map(function (t) {
              return {
                field: o(t) === "object" ? t.field : t,
                displayName: o(t) === "object" ? t.displayName : t,
                columnSize: o(t) === "object" && t.columnSize ? t.columnSize + ";" : 100 / e.properties.length + "%;"
              };
            });
            e.printableElement = document.createElement("div");
            if (e.header) {
              Object(n.addHeader)(e.printableElement, e);
            }
            e.printableElement.innerHTML += function (e) {
              var t = e.printable;
              var i = e.properties;
              var r = "<table style=\"border-collapse: collapse; width: 100%;\">";
              if (e.repeatTableHeader) {
                r += "<thead>";
              }
              r += "<tr>";
              for (var o = 0; o < i.length; o++) {
                r += "<th style=\"width:" + i[o].columnSize + ";" + e.gridHeaderStyle + "\">" + Object(n.capitalizePrint)(i[o].displayName) + "</th>";
              }
              r += "</tr>";
              if (e.repeatTableHeader) {
                r += "</thead>";
              }
              r += "<tbody>";
              for (var s = 0; s < t.length; s++) {
                r += "<tr>";
                for (var a = 0; a < i.length; a++) {
                  var l = t[s];
                  var c = i[a].field.split(".");
                  if (c.length > 1) {
                    for (var d = 0; d < c.length; d++) {
                      l = l[c[d]];
                    }
                  } else {
                    l = l[i[a].field];
                  }
                  r += "<td style=\"width:" + i[a].columnSize + e.gridStyle + "\">" + l + "</td>";
                }
                r += "</tr>";
              }
              return r + "</tbody></table>";
            }(e);
            r.default.send(e, t);
          }
        };
      },
      "./src/js/modal.js": function (e, t, i) {
        "use strict";

        i.r(t);
        var n = {
          show: function (e) {
            var t = document.createElement("div");
            t.setAttribute("style", "font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;");
            t.setAttribute("id", "printJS-Modal");
            var i = document.createElement("div");
            i.setAttribute("style", "display:table-cell; vertical-align:middle; padding-bottom:100px;");
            var r = document.createElement("div");
            r.setAttribute("class", "printClose");
            r.setAttribute("id", "printClose");
            i.appendChild(r);
            var o = document.createElement("span");
            o.setAttribute("class", "printSpinner");
            i.appendChild(o);
            var s = document.createTextNode(e.modalMessage);
            i.appendChild(s);
            t.appendChild(i);
            document.getElementsByTagName("body")[0].appendChild(t);
            document.getElementById("printClose").addEventListener("click", function () {
              n.close();
            });
          },
          close: function () {
            var e = document.getElementById("printJS-Modal");
            if (e) {
              e.parentNode.removeChild(e);
            }
          }
        };
        t.default = n;
      },
      "./src/js/pdf.js": function (e, t, i) {
        "use strict";

        i.r(t);
        var n = i("./src/js/print.js");
        var r = i("./src/js/functions.js");
        function o(e, t, i) {
          var r = new window.Blob([i], {
            type: "application/pdf"
          });
          r = window.URL.createObjectURL(r);
          t.setAttribute("src", r);
          n.default.send(e, t);
        }
        t.default = {
          print: function (e, t) {
            if (e.base64) {
              var i = Uint8Array.from(atob(e.printable), function (e) {
                return e.charCodeAt(0);
              });
              o(e, t, i);
              return;
            }
            e.printable = /^(blob|http|\/\/)/i.test(e.printable) ? e.printable : window.location.origin + (e.printable.charAt(0) !== "/" ? "/" + e.printable : e.printable);
            var n = new window.XMLHttpRequest();
            n.responseType = "arraybuffer";
            n.addEventListener("error", function () {
              Object(r.cleanUp)(e);
              e.onError(n.statusText, n);
            });
            n.addEventListener("load", function () {
              if ([200, 201].indexOf(n.status) === -1) {
                Object(r.cleanUp)(e);
                e.onError(n.statusText, n);
                return;
              }
              o(e, t, n.response);
            });
            n.open("GET", e.printable, true);
            n.send();
          }
        };
      },
      "./src/js/print.js": function (e, t, i) {
        "use strict";

        i.r(t);
        var n = i("./src/js/browser.js");
        var r = i("./src/js/functions.js");
        function o(e, t) {
          try {
            e.focus();
            if (n.default.isEdge() || n.default.isIE()) {
              try {
                e.contentWindow.document.execCommand("print", false, null);
              } catch (t) {
                e.contentWindow.print();
              }
            } else {
              e.contentWindow.print();
            }
          } catch (e) {
            t.onError(e);
          } finally {
            if (n.default.isFirefox()) {
              e.style.visibility = "hidden";
              e.style.left = "-1px";
            }
            Object(r.cleanUp)(t);
          }
        }
        t.default = {
          send: function (e, t) {
            document.getElementsByTagName("body")[0].appendChild(t);
            var i = document.getElementById(e.frameId);
            i.onload = function () {
              if (e.type === "pdf") {
                if (n.default.isFirefox()) {
                  setTimeout(function () {
                    return o(i, e);
                  }, 1000);
                } else {
                  o(i, e);
                }
                return;
              }
              var t = i.contentWindow || i.contentDocument;
              if (t.document) {
                t = t.document;
              }
              t.body.appendChild(e.printableElement);
              if (e.type !== "pdf" && e.style) {
                var r = document.createElement("style");
                r.innerHTML = e.style;
                t.head.appendChild(r);
              }
              var s = t.getElementsByTagName("img");
              if (s.length > 0) {
                Promise.all(Array.from(s).map(function (e) {
                  if (e.src && e.src !== window.location.href) {
                    var t;
                    t = e;
                    return new Promise(function (e) {
                      (function i() {
                        if (t && t.naturalWidth !== undefined && t.naturalWidth !== 0 && t.complete) {
                          e();
                        } else {
                          setTimeout(i, 500);
                        }
                      })();
                    });
                  }
                })).then(function () {
                  return o(i, e);
                });
              } else {
                o(i, e);
              }
            };
          }
        };
      },
      "./src/js/raw-html.js": function (e, t, i) {
        "use strict";

        i.r(t);
        var n = i("./src/js/print.js");
        t.default = {
          print: function (e, t) {
            e.printableElement = document.createElement("div");
            e.printableElement.setAttribute("style", "width:100%");
            e.printableElement.innerHTML = e.printable;
            n.default.send(e, t);
          }
        };
      },
      "./src/sass/index.scss": function (e, t, i) {},
      0: function (e, t, i) {
        e.exports = i("./src/index.js");
      }
    }).default;
  };
  module.exports = i();
}