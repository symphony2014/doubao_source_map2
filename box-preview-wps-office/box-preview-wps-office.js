// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'isNullishCheck'
// - Resolved require(282109) to 'is-nullish-check'
// - Renamed variable 'a' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 's' to 'isNumberUtil'
// - Resolved require(897814) to 'is-number-util'
// - Renamed variable 'l' to 'uiModalComponent'
// - Resolved require(173302) to 'ui-modal-component'
// - Renamed variable 'u' to 'styledComponentsCore'
// - Resolved require(842965) to 'styled-components-core'
// - Renamed variable 'el' to 'securityLinkProcessor'
// - Resolved require(103048) to 'security-link-processor'
// - Renamed variable 'eu' to 'filePreviewUtils'
// - Resolved require(116443) to 'file-preview-utils'
// - Renamed variable 'ec' to 'nameExtensionUtils'
// - Resolved require(146008) to 'name-extension-utils'
// - Renamed variable 'ed' to 'fileTypeConstants_1'
// - Resolved require(331664) to 'file-type-constants_1'
// - Renamed variable 'ef' to 'boxPreviewEventConstants'
// - Resolved require(654234) to 'box-preview-event-constants'
// - Renamed variable 'ep' to 'boxPreviewConstantsMap'
// - Resolved require(485900) to 'box-preview-constants-map'
// - Renamed variable 'eh' to 'driveSdkPreviewConstants'
// - Resolved require(395351) to 'drive-sdk-preview-constants'
// - Renamed variable 'em' to 'filePreviewSdkConstants'
// - Resolved require(842643) to 'file-preview-sdk-constants'
// - Renamed variable 'ev' to 'previewSdkConstants'
// - Resolved require(38424) to 'preview-sdk-constants'
// - Renamed variable 'eg' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require(941450) to 'file-preview-contexts'
// - Updated imported property 'CJ' to 'fileExtensions' (module 331664)
// - Updated imported property 'bt' to 'previewStates' (module 331664)
// - Updated imported property 'kE' to 'errorCodes' (module 331664)
// - Updated imported property 'jp' to 'fileCategories' (module 331664)
// - Updated imported property 'uL' to 'docSourceTypes' (module 331664)
// - Updated imported property 'uj' to 'toggleStateConstants' (module 654234)
// - Updated imported property 'mP' to 'previewEventConstants' (module 654234)
// - Updated imported property 'jf' to 'previewAreaConstants' (module 654234)
// - Updated imported property 'fh' to 'previewActionConstants' (module 654234)
// - Updated imported property 'l' to 'debugEventTypes' (module 485900)
// - Updated imported property 'F6' to 'actionTypes' (module 485900)
// - Updated imported property 'fm' to 'postMessageToWindow' (module 116443)
// - Updated imported property 'dr' to 'extractObjectValues' (module 116443)
// - Updated imported property 'zs' to 'generateRandomString' (module 116443)
// - Updated imported property 'M1' to 'getSupportedLanguage' (module 116443)
// - Updated imported property 'Wb' to 'generateUniqueId' (module 116443)
// - Updated imported property 'V$' to 'isValidMessageEvent' (module 116443)
// - Updated imported property 'kW' to 'safeJsonParse' (module 116443)
// - Updated imported property 'NS' to 'previewErrorCodes' (module 395351)
// - Updated imported property 'GP' to 'wpsModes' (module 842643)
// - Updated imported property 'Do' to 'specificErrorCode' (module 842643)
// - Updated imported property 'aV' to 'permissionLevels' (module 842643)
// - Updated imported property 'AQ' to 'platformLanguageMap' (module 842643)
// - Updated imported property '_u' to 'errorMessages' (module 842643)
// - Updated imported property 'J' to 'getObjectExtension' (module 146008)
// - Updated imported property 'Z' to 'isNil' (module 282109)
// - Updated imported property 'JA' to 'platformTypes' (module 38424)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'Z' to 'isNumber' (module 897814)
// - Updated imported property 'uS' to 'openSecureLink' (module 103048)
// - Updated imported property 'IH' to 'openSecureWindow' (module 103048)
// - Updated imported property 'Vq' to 'ModalComponent' (module 173302)
// - Updated imported property 'nO' to 'withBoxPreviewCtx' (module 941450)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-preview-wps-office.cb58c39e.js
         * chunkId: 95570
         * moduleId: 37547
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var uiModalComponent = require("ui-modal-component") /*id: 173302*/;
  var styledComponentsCore = require("styled-components-core") /*id: 842965*/;
  let c = styledComponentsCore.default.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
  styledComponentsCore.default.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
  styledComponentsCore.default.div`
  position: relative;
  display: inline-block;
  height: 20px;
  line-height: 20px;
  padding: 0 10px;
  border-radius: 2px;
  margin-left: 8px;
  cursor: default;
  // @ts-ignore
  color: ${e => e.selected ? "white" : "#3d4757"};
  // @ts-ignore
  background: ${e => {
    if (!e.selected) {
      return "transparent";
    }
    switch (e.wpsType) {
      case "w":
        return "#4991f2";
      case "s":
        return "#1fbb7d";
      case "p":
        return "#f46d43";
      case "f":
        return "#eb5451";
      default:
        return "#3a72df";
    }
  }};
  font-size: 12px;
  font-family: PingFang SC, Microsoft YaHei, Tahoma, Arial;

  &:first-child {
    margin-left: 0;
  }

  // @ts-ignore
  ${e => {
    let {
      selected: t
    } = e;
    return !t && `
  &:hover {
    background: rgba(25, 55, 88, 0.04);
  }
`;
  }}
`;
  let d = styledComponentsCore.default.div`
  width: 100%;
  height: 100%;
`;
  function f() {
    return (f = Object.assign || function (e) {
      var t;
      var n = 1;
      var r = arguments.length;
      for (; n < r; n++) {
        for (var i in t = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            e[i] = t[i];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function p(e, t, n, r) {
    return new (n ||= Promise)(function (i, o) {
      function a(e) {
        try {
          l(r.next(e));
        } catch (e) {
          o(e);
        }
      }
      function s(e) {
        try {
          l(r.throw(e));
        } catch (e) {
          o(e);
        }
      }
      function l(e) {
        var t;
        if (e.done) {
          i(e.value);
        } else {
          ((t = e.value) instanceof n ? t : new n(function (e) {
            e(t);
          })).then(a, s);
        }
      }
      l((r = r.apply(e, t || [])).next());
    });
  }
  function h(e, t) {
    var n;
    var r;
    var i;
    var o;
    var a = {
      label: 0,
      sent: function () {
        if (i[0] & 1) {
          throw i[1];
        }
        return i[1];
      },
      trys: [],
      ops: []
    };
    o = {
      next: s(0),
      throw: s(1),
      return: s(2)
    };
    if (typeof Symbol == "function") {
      o[Symbol.iterator] = function () {
        return this;
      };
    }
    return o;
    function s(o) {
      return function (s) {
        return function (o) {
          if (n) {
            throw TypeError("Generator is already executing.");
          }
          while (a) {
            try {
              n = 1;
              if (r && (i = o[0] & 2 ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
                return i;
              }
              r = 0;
              if (i) {
                o = [o[0] & 2, i.value];
              }
              switch (o[0]) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  a.label++;
                  return {
                    value: o[1],
                    done: false
                  };
                case 5:
                  a.label++;
                  r = o[1];
                  o = [0];
                  continue;
                case 7:
                  o = a.ops.pop();
                  a.trys.pop();
                  continue;
                default:
                  if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                    a = 0;
                    continue;
                  }
                  if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                    a.label = o[1];
                    break;
                  }
                  if (o[0] === 6 && a.label < i[1]) {
                    a.label = i[1];
                    i = o;
                    break;
                  }
                  if (i && a.label < i[2]) {
                    a.label = i[2];
                    a.ops.push(o);
                    break;
                  }
                  if (i[2]) {
                    a.ops.pop();
                  }
                  a.trys.pop();
                  continue;
              }
              o = t.call(e, a);
            } catch (e) {
              o = [6, e];
              r = 0;
            } finally {
              n = i = 0;
            }
          }
          if (o[0] & 5) {
            throw o[1];
          }
          return {
            value: o[0] ? o[1] : undefined,
            done: true
          };
        }([o, s]);
      };
    }
  }
  var m = function () {
    function e() {}
    e.add = function (t) {
      e.HANDLE_LIST.push(t);
      window.addEventListener("message", t, false);
    };
    e.remove = function (t) {
      var n = e.HANDLE_LIST.indexOf(t);
      if (n >= 0) {
        e.HANDLE_LIST.splice(n, 1);
      }
      window.removeEventListener("message", t, false);
    };
    e.empty = function () {
      while (e.HANDLE_LIST.length) {
        window.removeEventListener("message", e.HANDLE_LIST.shift(), false);
      }
    };
    e.parse = function (e) {
      try {
        if (typeof e == "object") {
          return e;
        } else if (e) {
          return JSON.parse(e);
        } else {
          return e;
        }
      } catch (t) {
        return e;
      }
    };
    e.HANDLE_LIST = [];
    return e;
  }();
  function v(e) {
    return {}.toString.call(e) === "[object Function]";
  }
  var g;
  var b;
  var y;
  var E;
  var w = {
    origin: ""
  };
  function C(e) {
    return w.origin !== e.origin;
  }
  (x = g ||= {}).unknown = "unknown";
  x.spreadsheet = "s";
  x.writer = "w";
  x.presentation = "p";
  x.pdf = "f";
  (T = b ||= {}).wps = "w";
  T.et = "s";
  T.presentation = "p";
  T.pdf = "f";
  (S = y ||= {}).nomal = "nomal";
  S.simple = "simple";
  (k = E ||= {})[k.requestFullscreen = 1] = "requestFullscreen";
  k[k.exitFullscreen = 0] = "exitFullscreen";
  var x;
  var T;
  var S;
  var k;
  var _;
  var P;
  var O;
  _ = 0;
  function I() {
    return _ += 1;
  }
  function N(e, t, n = true) {
    var r = t;
    if (!P) {
      var i;
      var o;
      var a;
      var s = function e(t) {
        var n = t.clientHeight;
        var r = t.clientWidth;
        if (n !== 0 || r !== 0 || O) {
          if ((n !== 0 || r !== 0) && O) {
            O.disconnect();
            O = null;
          }
        } else if (window.ResizeObserver) {
          (O = new ResizeObserver(function (n) {
            e(t);
          })).observe(t);
        }
        P.style.cssText += "height: " + n + "px; width: " + r + "px";
      }.bind(null, r);
      (P = document.createElement("iframe")).classList.add("web-office-iframe");
      var l = {
        id: "office-iframe",
        src: e,
        scrolling: "no",
        frameborder: "0",
        allowfullscreen: "allowfullscreen",
        webkitallowfullscreen: "true",
        mozallowfullscreen: "true"
      };
      if (r) {
        l.style = "width: " + r.clientWidth + "px; height: " + r.clientHeight + "px;";
        if (n) {
          window.addEventListener("resize", s);
        }
      } else {
        (r = document.createElement("div")).classList.add("web-office-default-container");
        i = ".web-office-default-container {position: absolute; padding: 0;  margin: 0; width: 100vw; height: 100vh; left: 0; top: 0;}";
        o = document.createElement("style");
        document.head.appendChild(o);
        (a = o.sheet).insertRule(i, a.cssRules.length);
        document.body.appendChild(r);
        l.style = "width: 100vw; height: 100vh;";
      }
      for (var u in l) {
        P.setAttribute(u, l[u]);
      }
      r.appendChild(P);
      P.destroy = function () {
        P.parentNode.removeChild(P);
        P = null;
        window.removeEventListener("resize", s);
        if (O) {
          O.disconnect();
          O = null;
        }
      };
    }
    return P;
  }
  function A(e) {
    N().contentWindow.postMessage(JSON.stringify(e), w.origin);
  }
  function R(e, t, n) {
    return new Promise(function (r) {
      var i = I();
      function o(e) {
        if (!C(e)) {
          var t = m.parse(e.data);
          if (t.eventName === n && t.msgId === i) {
            r(t.data);
            m.remove(o);
          }
        }
      }
      m.add(o);
      A({
        data: e,
        msgId: i,
        eventName: t
      });
    });
  }
  function Z(e) {
    return R(e, "api.basic", "api.basic.reply");
  }
  var D = {
    idMap: {}
  };
  function F(e) {
    return p(this, undefined, undefined, function () {
      var t;
      var n;
      var r;
      var i;
      var o;
      var a;
      var s;
      var l;
      var u;
      return h(this, function (c) {
        switch (c.label) {
          case 0:
            if (C(e)) {
              return [2];
            } else {
              n = (t = m.parse(e.data)).eventName;
              r = t.callbackId;
              i = t.data;
              if (r && (o = D.idMap[r])) {
                s = (a = o.split(":"))[0];
                l = a[1];
                if (n === "api.callback" && D[s] && D[s][l]) {
                  return [4, (u = D[s][l]).callback.apply(u, i.args)];
                } else {
                  return [3, 2];
                }
              } else {
                return [3, 2];
              }
            }
          case 1:
            A({
              result: c.sent(),
              callbackId: r,
              eventName: "api.callback.reply"
            });
            c.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function M(e, t, n, r) {
    return p(undefined, undefined, undefined, function () {
      var i;
      var o;
      var a;
      var s;
      var l;
      var u;
      var c;
      var d;
      return h(this, function (v) {
        var g;
        var b;
        var y;
        switch (v.label) {
          case 0:
            i = I();
            s = new Promise(function (e, t) {
              o = e;
              a = t;
            });
            l = {};
            if (t.args) {
              return [4, W(t.args)];
            } else {
              return [3, 2];
            }
          case 1:
            c = (u = v.sent())[0];
            d = u[1];
            t.args = c;
            l = d;
            v.label = 2;
          case 2:
            if (e !== "api.setter") {
              return [3, 4];
            } else {
              return [4, p(undefined, undefined, undefined, function () {
                var e;
                var n;
                var r;
                var i;
                var o;
                var a;
                var s;
                var l;
                var u;
                function c() {
                  return Object.keys(D.idMap).find(function (t) {
                    return D.idMap[t] === n + ":" + e;
                  });
                }
                return h(this, function (d) {
                  switch (d.label) {
                    case 0:
                      e = t.prop;
                      n = t.parentObjId;
                      return [4, W([r = t.value])];
                    case 1:
                      o = (i = d.sent())[0];
                      a = i[1];
                      t.value = o[0];
                      s = Object.keys(a)[0];
                      l = D[n];
                      if (r === null && l && l[e]) {
                        if (u = c()) {
                          delete D.idMap[u];
                        }
                        delete l[e];
                        if (!Object.keys(l).length) {
                          delete D[n];
                        }
                        if (!Object.keys(D.idMap).length) {
                          m.remove(F);
                        }
                      }
                      if (s) {
                        if (!Object.keys(D.idMap).length) {
                          m.add(F);
                        }
                        D[n] ||= {};
                        D[n][e] = {
                          callbackId: s,
                          callback: a[s]
                        };
                        if (u = c()) {
                          delete D.idMap[u];
                        }
                        D.idMap[s] = n + ":" + e;
                      }
                      return [2];
                  }
                });
              })];
            }
          case 3:
            v.sent();
            v.label = 4;
          case 4:
            b = (g = [{
              eventName: e,
              data: t,
              msgId: i
            }, function () {
              var t = this;
              function u(s) {
                return p(t, undefined, undefined, function () {
                  var t;
                  var c;
                  return h(this, function (d) {
                    switch (d.label) {
                      case 0:
                        if (C(s)) {
                          return [2];
                        } else if ((t = m.parse(s.data)).eventName === "api.callback" && t.callbackId && l[t.callbackId]) {
                          return [4, l[t.callbackId].apply(l, t.data.args)];
                        } else {
                          return [3, 2];
                        }
                      case 1:
                        A({
                          result: d.sent(),
                          eventName: "api.callback.reply",
                          callbackId: t.callbackId
                        });
                        d.label = 2;
                      case 2:
                        if (t.eventName === e + ".reply" && t.msgId === i) {
                          if (t.error) {
                            (c = Error("")).stack = t.error + "\n" + n;
                            if (r) {
                              r();
                            }
                            a(c);
                          } else {
                            o(t.result);
                          }
                          m.remove(u);
                        }
                        return [2];
                    }
                  });
                });
              }
              m.add(u);
              return s;
            }])[0];
            y = g[1];
            if (typeof (b = f({}, b)).data == "function") {
              b.data = b.data();
            }
            y();
            A(b);
            return [2, s];
        }
      });
    });
  }
  function W(e) {
    return p(this, undefined, undefined, function () {
      var t;
      var n;
      var r;
      var i;
      var o;
      var a;
      var s;
      var l;
      var u;
      var c;
      var d;
      return h(this, function (f) {
        switch (f.label) {
          case 0:
            t = {};
            n = [];
            r = e.slice(0);
            f.label = 1;
          case 1:
            if (r.length) {
              i = undefined;
              return [4, r.shift()];
            } else {
              return [3, 13];
            }
          case 2:
            if ((o = f.sent()) && o.done) {
              return [4, o.done()];
            } else {
              return [3, 4];
            }
          case 3:
            f.sent();
            f.label = 4;
          case 4:
            if (!function (e) {
              if (!e) {
                return false;
              }
              for (var t = e; Object.getPrototypeOf(t) !== null;) {
                t = Object.getPrototypeOf(t);
              }
              return Object.getPrototypeOf(e) === t;
            }(i)) {
              return [3, 11];
            }
            i = {};
            a = [];
            for (s in o) {
              a.push(s);
            }
            l = 0;
            f.label = 5;
          case 5:
            if (l < a.length) {
              c = o[u = a[l]];
              if (/^[A-Z]/.test(u)) {
                if (c && c.done) {
                  return [4, c.done()];
                } else {
                  return [3, 7];
                }
              } else {
                return [3, 8];
              }
            } else {
              return [3, 10];
            }
          case 6:
            f.sent();
            f.label = 7;
          case 7:
            if (c && c.objId) {
              c = {
                objId: c.objId
              };
            } else if (typeof c == "function") {
              t[d = I()] = c;
              c = {
                callbackId: d
              };
            }
            f.label = 8;
          case 8:
            i[u] = c;
            f.label = 9;
          case 9:
            l++;
            return [3, 5];
          case 10:
            return [3, 12];
          case 11:
            if (o && o.objId) {
              i = {
                objId: o.objId
              };
            } else if (typeof o == "function" && o.objId === undefined) {
              t[d = I()] = o;
              i = {
                callbackId: d
              };
            } else {
              i = o;
            }
            f.label = 12;
          case 12:
            n.push(i);
            return [3, 1];
          case 13:
            return [2, [n, t]];
        }
      });
    });
  }
  function L(e, t = true) {
    var n = f({}, e);
    var r = n.headers;
    var i = r === undefined ? {} : r;
    var o = n.subscriptions;
    var a = o === undefined ? {} : o;
    var s = n.mode;
    var l = s === undefined ? y.nomal : s;
    var u = n.commonOptions;
    var c = i.backBtn;
    var d = i.shareBtn;
    var p = i.otherMenuBtn;
    var h = p === undefined ? {} : p;
    function m(e, n) {
      if (e.subscribe && typeof e.subscribe == "function") {
        e.callback = n;
        a[n] = e.subscribe;
        if (t) {
          delete e.subscribe;
        }
      }
    }
    m(c === undefined ? {} : c, "wpsconfig_back_btn");
    m(d === undefined ? {} : d, "wpsconfig_share_btn");
    m(h, "wpsconfig_other_menu_btn");
    if (h.items && Array.isArray(h.items)) {
      var v = [];
      h.items.forEach(function (e = {}, t) {
        switch (e.type) {
          case "export_img":
            e.type = 1;
            e.callback = "export_img";
            break;
          case "export_pdf":
            e.type = 1;
            e.callback = "export_pdf";
            break;
          case "save_version":
            e.type = 1;
            e.callback = "save_version";
            break;
          case "about_wps":
            e.type = 1;
            e.callback = "about_wps";
            break;
          case "split_line":
            e.type = 2;
            break;
          case "custom":
            e.type = 3;
            m(e, "wpsconfig_other_menu_btn_" + t);
            v.push(e);
        }
      });
      if (v.length && (U || j)) {
        h.items = v;
      }
    }
    n.url = n.url || n.wpsUrl;
    var g = [];
    if (l === y.simple || u && u.isShowTopArea === false) {
      g.push("simple", "hidecmb");
    }
    if (n.debug) {
      g.push("debugger");
    }
    if (n.url && g.length) {
      n.url = n.url + (n.url.indexOf("?") >= 0 ? "&" : "?") + g.join("&");
    }
    if (u && (u.isParentFullscreen || u.isBrowserViewFullscreen)) {
      document.addEventListener("fullscreenchange", z);
      document.addEventListener("webkitfullscreenchange", z);
      document.addEventListener("mozfullscreenchange", z);
    }
    if (n.wordOptions) {
      n.wpsOptions = n.wordOptions;
    }
    if (n.excelOptions) {
      n.etOptions = n.excelOptions;
    }
    if (n.pptOptions) {
      n.wppOptions = n.pptOptions;
    }
    if (typeof a.print == "object") {
      var b = "wpsconfig_print";
      if (typeof a.print.subscribe == "function") {
        a[b] = a.print.subscribe;
        n.print = {
          callback: b
        };
        if (a.print.custom !== undefined) {
          n.print.custom = a.print.custom;
        }
      }
      delete a.print;
    }
    if (typeof a.exportPdf == "function") {
      a[b = "wpsconfig_export_pdf"] = a.exportPdf;
      n.exportPdf = {
        callback: b
      };
      delete a.exportPdf;
    }
    if (n.commandBars) {
      H(n.commandBars, false);
    }
    return f(f({}, n), {
      subscriptions: a
    });
  }
  function B(e = "") {
    var t = "";
    if (!t && e) {
      var n = e.toLowerCase();
      if (n.indexOf("/office/s/") !== -1) {
        t = g.spreadsheet;
      }
      if (n.indexOf("/office/w/") !== -1) {
        t = g.writer;
      }
      if (n.indexOf("/office/p/") !== -1) {
        t = g.presentation;
      }
      if (n.indexOf("/office/f/") !== -1) {
        t = g.pdf;
      }
    }
    t ||= b[(e.match(/[\?&]type=([a-z]+)/) || [])[1]] || "";
    return t;
  }
  function H(e, t = true) {
    var n = e.map(function (e) {
      var t = e.attributes;
      if (!Array.isArray(t)) {
        var n = [];
        for (var r in t) {
          if (t.hasOwnProperty(r)) {
            var i = {
              name: r,
              value: t[r]
            };
            n.push(i);
          }
        }
        e.attributes = n;
      }
      return e;
    });
    if (t) {
      A({
        data: n,
        eventName: "setCommandBars"
      });
    }
    return n;
  }
  var V = window.navigator.userAgent.toLowerCase();
  var U = /Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(V);
  var j = function () {
    try {
      return window._parent.location.search.indexOf("from=wxminiprogram") !== -1;
    } catch (e) {
      return false;
    }
  }();
  function z() {
    var e = {
      status: E.requestFullscreen
    };
    var t = document;
    var n = t.fullscreenElement || t.webkitFullscreenElement || t.mozFullScreenElement;
    e.status = n ? E.requestFullscreen : E.exitFullscreen;
    A({
      data: e,
      eventName: "fullscreenchange"
    });
  }
  function G() {
    D.idMap = {};
  }
  var J = 0;
  var K = new Set();
  function q(e) {
    var t;
    J += 1;
    if (!e) {
      t = J;
      K.forEach(function (e) {
        return e(t);
      });
    }
    return J;
  }
  function X() {
    var e = Error("");
    return (e.stack || e.message || "").split("\n").slice(2).join("\n");
  }
  var $ = ["ExportAsFixedFormat", "GetOperatorsInfo", "ImportDataIntoFields", "ReplaceText", "ReplaceBookmark", "GetBookmarkText", "GetComments"];
  function Q(e, t, n, r, i, o) {
    var a;
    var s = (e.done ? e.done() : Promise.resolve()).then(function () {
      a ||= M(n, r, i, o);
      return a;
    });
    t.done = function () {
      return s;
    };
    t.then = function (e, n) {
      if (r.objId >= 0) {
        t.then = null;
        t.catch = null;
        return s.then(function () {
          e(t);
        }).catch(function (e) {
          return n(e);
        });
      } else {
        return s.then(e, n);
      }
    };
    t.catch = function (e) {
      return s.catch(e);
    };
    t.Destroy = function () {
      return M("api.free", {
        objId: t.objId
      }, "");
    };
  }
  var Y = null;
  var ee = {
    fileOpen: "fileOpen",
    tabSwitch: "tabSwitch",
    fileSaved: "fileSaved",
    fileStatus: "fileStatus",
    fullscreenChange: "fullscreenChange",
    error: "error",
    stage: "stage"
  };
  var et = {
    getToken: "api.getToken",
    onToast: "event.toast",
    onHyperLinkOpen: "event.hyperLinkOpen",
    getClipboardData: "api.getClipboardData"
  };
  function en(e, t, n, r, i, o, a) {
    var s = this;
    if (n === undefined) {
      n = {};
    }
    m.add(function (l) {
      return p(s, undefined, undefined, function () {
        var s;
        var u;
        var c;
        var d;
        var v;
        var b;
        var y;
        var E;
        var w;
        var x;
        var T;
        var S;
        var k;
        var _;
        return h(this, function (N) {
          switch (N.label) {
            case 0:
              if (C(l)) {
                return [2];
              } else {
                c = (u = (s = m.parse(l.data)).eventName) === undefined ? "" : u;
                v = (d = s.data) === undefined ? null : d;
                y = (b = s.url) === undefined ? null : b;
                if (["wps.jssdk.api"].indexOf(c) !== -1) {
                  return [2];
                } else if (c !== "ready") {
                  return [3, 1];
                } else {
                  A({
                    eventName: "setConfig",
                    data: f(f({}, n), {
                      version: e.version
                    })
                  });
                  if (e.tokenData) {
                    e.setToken(f(f({}, e.tokenData), {
                      hasRefreshTokenConfig: !!n.refreshToken
                    }));
                  }
                  if (i.apiReadySended) {
                    A({
                      eventName: "api.ready"
                    });
                  }
                  e.iframeReady = true;
                  return [3, 17];
                }
              }
            case 1:
              if (c !== "error") {
                return [3, 2];
              } else {
                t.emit(ee.error, v);
                return [3, 17];
              }
            case 2:
              if (c !== "open.result") {
                return [3, 3];
              } else {
                if ((v == null ? undefined : v.fileInfo)?.officeVersion !== undefined) {
                  e.mainVersion = v.fileInfo.officeVersion;
                }
                t.emit(ee.fileOpen, v);
                return [3, 17];
              }
            case 3:
              if (c !== "file.saved") {
                return [3, 4];
              } else {
                t.emit(ee.fileStatus, v);
                t.emit(ee.fileSaved, v);
                return [3, 17];
              }
            case 4:
              if (c !== "tab.switch") {
                return [3, 5];
              } else {
                t.emit(ee.tabSwitch, v);
                return [3, 17];
              }
            case 5:
              if (c !== "api.scroll") {
                return [3, 6];
              } else {
                window.scrollTo(v.x, v.y);
                return [3, 17];
              }
            case 6:
              if (c !== et.getToken) {
                return [3, 11];
              }
              E = {
                token: false
              };
              N.label = 7;
            case 7:
              N.trys.push([7, 9,, 10]);
              return [4, i.refreshToken()];
            case 8:
              E = N.sent();
              return [3, 10];
            case 9:
              N.sent();
              return [3, 10];
            case 10:
              A({
                eventName: et.getToken + ".reply",
                data: E
              });
              return [3, 17];
            case 11:
              if (c !== et.getClipboardData) {
                return [3, 16];
              }
              w = {
                text: "",
                html: ""
              };
              N.label = 12;
            case 12:
              N.trys.push([12, 14,, 15]);
              return [4, i.getClipboardData()];
            case 13:
              w = N.sent();
              return [3, 15];
            case 14:
              N.sent();
              return [3, 15];
            case 15:
              A({
                eventName: et.getClipboardData + ".reply",
                data: w
              });
              return [3, 17];
            case 16:
              var R;
              var Z;
              if (c === et.onToast) {
                i.onToast(v);
              } else if (c === et.onHyperLinkOpen) {
                i.onHyperLinkOpen(v);
              } else if (c === "stage") {
                t.emit(ee.stage, v);
              } else if (c === "event.callback") {
                x = v.eventName;
                T = v.data;
                S = x;
                if (x === "fullScreenChange") {
                  S = ee.fullscreenChange;
                }
                if ((n.commonOptions?.isBrowserViewFullscreen || n.commonOptions?.isParentFullscreen) && S === "fullscreenchange") {
                  k = T.status;
                  _ = T.isDispatchEvent;
                  if (n.commonOptions.isBrowserViewFullscreen) {
                    if (k === 0) {
                      o.style = "position: static; width: " + a.width + "; height: " + a.height;
                    } else if (k === 1) {
                      o.style = "position: absolute; width: 100%; height: 100%";
                    }
                    if (_) {
                      R = {
                        status: k
                      };
                      ["fullscreen", "fullscreenElement"].forEach(function (e) {
                        Object.defineProperty(document, e, {
                          get: function () {
                            return !!R.status;
                          },
                          configurable: true
                        });
                      });
                      Z = new CustomEvent("fullscreenchange");
                      document.dispatchEvent(Z);
                    }
                  } else if (n.commonOptions.isParentFullscreen) {
                    (function (e, t, n) {
                      var r = document.querySelector(n);
                      var i = r && r.nodeType === 1 ? r : t;
                      if (e === 0) {
                        var o = document;
                        (o.exitFullscreen || o.mozCancelFullScreen || o.msExitFullscreen || o.webkitCancelFullScreen || o.webkitExitFullscreen).call(document);
                      } else if (e === 1) {
                        (i.requestFullscreen || i.mozRequestFullScreen || i.msRequestFullscreen || i.webkitRequestFullscreen).call(i);
                      }
                    })(k, o, n.commonOptions.isParentFullscreen);
                  }
                }
                t.emit(S, T);
              } else if (c === "api.ready") {
                (function (e, t) {
                  var n;
                  var r = this;
                  var i = t.Events;
                  var o = t.Enum;
                  var a = t.Props;
                  var s = a[0];
                  var l = a[1];
                  var u = {
                    objId: J
                  };
                  (function e(t, n, r) {
                    for (var i = n.slice(0); i.length;) {
                      (function () {
                        var n = i.shift();
                        if (!n.alias && ~$.indexOf(n.prop)) {
                          i.push(f(f({}, n), {
                            alias: n.prop + "Async"
                          }));
                        }
                        Object.defineProperty(t, n.alias || n.prop, {
                          get: function () {
                            var i = this;
                            var o = n.cache === 1;
                            var a = o && this["__" + n.prop + "CacheValue"];
                            if (!a) {
                              var s = X();
                              var l = q(o);
                              function u() {
                                var e;
                                var i = [];
                                var o = 0;
                                for (; o < arguments.length; o++) {
                                  i[o] = arguments[o];
                                }
                                if (n.caller !== undefined) {
                                  (function e(t, n, r) {
                                    for (var i = n.slice(0); i.length;) {
                                      (function () {
                                        var n = i.shift();
                                        if (!n.alias && ~$.indexOf(n.prop)) {
                                          i.push(f(f({}, n), {
                                            alias: n.prop + "Async"
                                          }));
                                        }
                                        Object.defineProperty(t, n.alias || n.prop, {
                                          get: function () {
                                            var i = this;
                                            var o = n.cache === 1;
                                            var a = o && this["__" + n.prop + "CacheValue"];
                                            if (!a) {
                                              var s = X();
                                              var l = q(o);
                                              function u() {
                                                var i;
                                                var o = [];
                                                var a = 0;
                                                for (; a < arguments.length; a++) {
                                                  o[a] = arguments[a];
                                                }
                                                if (n.caller !== undefined) {
                                                  e(i = {
                                                    objId: q()
                                                  }, r[n.caller], r);
                                                } else {
                                                  i = {};
                                                }
                                                Q(u, i, "api.caller", {
                                                  obj: u,
                                                  args: o,
                                                  parentObjId: t.objId,
                                                  objId: i.objId,
                                                  prop: n.prop
                                                }, s);
                                                return i;
                                              }
                                              u.objId = -1;
                                              if (n.getter !== undefined) {
                                                u.objId = l;
                                                e(u, r[n.getter], r);
                                              }
                                              Q(t, u, "api.getter", {
                                                parentObjId: t.objId,
                                                objId: u.objId,
                                                prop: n.prop
                                              }, s, function () {
                                                delete i["__" + n.prop + "CacheValue"];
                                              });
                                              if (o) {
                                                this["__" + n.prop + "CacheValue"] = u;
                                              }
                                              return u;
                                            }
                                            return a;
                                          },
                                          set: function (e) {
                                            var r = X();
                                            return Q(t, {}, "api.setter", {
                                              value: e,
                                              parentObjId: t.objId,
                                              objId: -1,
                                              prop: n.prop
                                            }, r);
                                          }
                                        });
                                      })();
                                    }
                                  })(e = {
                                    objId: q()
                                  }, r[n.caller], r);
                                } else {
                                  e = {};
                                }
                                Q(u, e, "api.caller", {
                                  obj: u,
                                  args: i,
                                  parentObjId: t.objId,
                                  objId: e.objId,
                                  prop: n.prop
                                }, s);
                                return e;
                              }
                              u.objId = -1;
                              if (n.getter !== undefined) {
                                u.objId = l;
                                e(u, r[n.getter], r);
                              }
                              Q(t, u, "api.getter", {
                                parentObjId: t.objId,
                                objId: u.objId,
                                prop: n.prop
                              }, s, function () {
                                delete i["__" + n.prop + "CacheValue"];
                              });
                              if (o) {
                                this["__" + n.prop + "CacheValue"] = u;
                              }
                              return u;
                            }
                            return a;
                          },
                          set: function (e) {
                            var r = X();
                            return Q(t, {}, "api.setter", {
                              value: e,
                              parentObjId: t.objId,
                              objId: -1,
                              prop: n.prop
                            }, r);
                          }
                        });
                      })();
                    }
                  })(u, s, l);
                  u.Events = i;
                  u.Enum = o;
                  e.Enum = u.Enum;
                  e.Events = u.Events;
                  e.Props = a;
                  switch (B(e.url)) {
                    case g.writer:
                      e.WordApplication = e.WpsApplication = function () {
                        return u;
                      };
                      break;
                    case g.spreadsheet:
                      e.ExcelApplication = e.EtApplication = function () {
                        return u;
                      };
                      break;
                    case g.presentation:
                      e.PPTApplication = e.WppApplication = function () {
                        return u;
                      };
                      break;
                    case g.pdf:
                      e.PDFApplication = function () {
                        return u;
                      };
                  }
                  e.Application = u;
                  e.Free = function (e) {
                    return M("api.free", {
                      objId: e
                    }, "");
                  };
                  n = function (t) {
                    if (e) {
                      e.Free(t);
                    }
                  };
                  e.Stack = u.Stack = function () {
                    var e = [];
                    function t(t) {
                      e.push(t);
                    }
                    K.add(t);
                    return {
                      End: function () {
                        n(e);
                        K.delete(t);
                      }
                    };
                  };
                  var c = {};
                  m.add(function (e) {
                    return p(r, undefined, undefined, function () {
                      var t;
                      var n;
                      var r;
                      var i;
                      var o;
                      return h(this, function (a) {
                        switch (a.label) {
                          case 0:
                            if (C(e)) {
                              return [2];
                            } else if ((t = m.parse(e.data)).eventName === "api.event" && t.data) {
                              r = (n = t.data).eventName;
                              i = n.data;
                              if (o = c[r]) {
                                return [4, o(i)];
                              } else {
                                return [3, 2];
                              }
                            } else {
                              return [3, 2];
                            }
                          case 1:
                            a.sent();
                            a.label = 2;
                          case 2:
                            return [2];
                        }
                      });
                    });
                  });
                  u.Sub = {};
                  for (var d in i) {
                    (function (e) {
                      var t = i[e];
                      Object.defineProperty(u.Sub, t, {
                        set: function (e) {
                          c[t] = e;
                          A({
                            eventName: "api.event.register",
                            data: {
                              eventName: t,
                              register: !!e,
                              objId: J += 1
                            }
                          });
                        }
                      });
                    })(d);
                  }
                })(e, v);
              }
              N.label = 17;
            case 17:
              if (typeof r[c] == "function") {
                r[c](e, y || v);
              }
              return [2];
          }
        });
      });
    });
  }
  function er(e) {
    return new Promise(function (t) {
      function n(r) {
        if (!C(r)) {
          if (m.parse(r.data).eventName === e) {
            t();
            m.remove(n);
          }
        }
      }
      m.add(n);
    });
  }
  function ei(e = {}) {
    if (Y) {
      Y.destroy();
    }
    try {
      var t;
      var n;
      var r;
      var i = L(e);
      var o = i.subscriptions;
      var a = i.mount;
      var s = a === undefined ? null : a;
      var l = i.url;
      var u = i.refreshToken;
      var c = i.onToast;
      var d = i.onHyperLinkOpen;
      var f = i.getClipboardData;
      n = "origin";
      r = (l.match(/https*:\/\/[^\/]+/g) || [])[0];
      w[n] = r;
      var g = N(l, s);
      var b = er("ready");
      var y = er("open.result");
      var E = er("api.ready");
      var C = s ? {
        width: s.clientWidth + "px",
        height: s.clientHeight + "px"
      } : {
        width: "100vw",
        height: "100vh"
      };
      delete i.mount;
      if (l) {
        delete i.url;
      }
      delete i.subscriptions;
      t = t || Object.create(null);
      var x = {
        on: function (e, n) {
          (t[e] ||= []).push(n);
        },
        off: function (e, n) {
          if (t[e]) {
            t[e].splice(t[e].indexOf(n) >>> 0, 1);
          }
        },
        emit: function (e, n) {
          (t[e] || []).slice().map(function (e) {
            e(n);
          });
          (t["*"] || []).slice().map(function (t) {
            t(e, n);
          });
        }
      };
      var T = {
        apiReadySended: false
      };
      Y = {
        url: l,
        iframe: g,
        version: "1.1.13",
        iframeReady: false,
        tokenData: null,
        commandBars: null,
        tabs: {
          getTabs: function () {
            return p(this, undefined, undefined, function () {
              return h(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, b];
                  case 1:
                    e.sent();
                    return [2, Z({
                      api: "tab.getTabs"
                    })];
                }
              });
            });
          },
          switchTab: function (e) {
            return p(this, undefined, undefined, function () {
              return h(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, b];
                  case 1:
                    t.sent();
                    return [2, Z({
                      api: "tab.switchTab",
                      args: {
                        tabKey: e
                      }
                    })];
                }
              });
            });
          }
        },
        setCooperUserColor: function (e) {
          return p(this, undefined, undefined, function () {
            return h(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, b];
                case 1:
                  t.sent();
                  return [2, Z({
                    api: "setCooperUserColor",
                    args: e
                  })];
              }
            });
          });
        },
        setToken: function (e) {
          return p(this, undefined, undefined, function () {
            return h(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, b];
                case 1:
                  t.sent();
                  Y.tokenData = e;
                  A({
                    eventName: "setToken",
                    data: e
                  });
                  return [2];
              }
            });
          });
        },
        ready: function () {
          return p(this, undefined, undefined, function () {
            return h(this, function (e) {
              switch (e.label) {
                case 0:
                  if (T.apiReadySended) {
                    return [3, 2];
                  } else {
                    return [4, y];
                  }
                case 1:
                  e.sent();
                  T.apiReadySended = true;
                  A({
                    eventName: "api.ready"
                  });
                  e.label = 2;
                case 2:
                  return [4, E];
                case 3:
                  e.sent();
                  return [2, new Promise(function (e) {
                    return setTimeout(function () {
                      return e(Y == null ? undefined : Y.Application);
                    }, 0);
                  })];
              }
            });
          });
        },
        destroy: function () {
          g.destroy();
          m.empty();
          Y = null;
          K = new Set();
          J = 0;
          document.removeEventListener("fullscreenchange", z);
          G();
        },
        save: function () {
          return p(this, undefined, undefined, function () {
            return h(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, b];
                case 1:
                  var t;
                  e.sent();
                  return [2, (t = {
                    api: "save"
                  }, R(t, "wps.jssdk.api", "wps.api.reply"))];
              }
            });
          });
        },
        setCommandBars: function (e) {
          return p(this, undefined, undefined, function () {
            return h(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, b];
                case 1:
                  t.sent();
                  H(e);
                  return [2];
              }
            });
          });
        },
        updateConfig: function (e = {}) {
          return p(this, undefined, undefined, function () {
            return h(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, b];
                case 1:
                  t.sent();
                  if (e.commandBars) {
                    return [4, H(e.commandBars)];
                  } else {
                    return [3, 3];
                  }
                case 2:
                  t.sent();
                  t.label = 3;
                case 3:
                  return [2];
              }
            });
          });
        },
        executeCommandBar: function (e) {
          return p(this, undefined, undefined, function () {
            return h(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, b];
                case 1:
                  t.sent();
                  H([{
                    cmbId: e,
                    attributes: [{
                      name: "click",
                      value: true
                    }]
                  }]);
                  return [2];
              }
            });
          });
        },
        on: function (e, t) {
          return p(this, undefined, undefined, function () {
            var n;
            return h(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, b];
                case 1:
                  r.sent();
                  n = e;
                  ee.fileSaved;
                  if (e === ee.fullscreenChange) {
                    n = "fullscreenchange";
                  }
                  eo(n, "on");
                  x.on(e, t);
                  return [2];
              }
            });
          });
        },
        off: function (e, t) {
          return p(this, undefined, undefined, function () {
            return h(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, b];
                case 1:
                  n.sent();
                  eo(e, "off");
                  x.off(e, t);
                  return [2];
              }
            });
          });
        }
      };
      if (u && v(u)) {
        T.refreshToken = u;
        i.refreshToken = {
          eventName: et.getToken
        };
      }
      if (f && v(f)) {
        T.getClipboardData = f;
        i.getClipboardData = {
          eventName: et.getClipboardData
        };
      }
      if (c && v(c)) {
        T.onToast = c;
        i.onToast = {
          eventName: et.onToast
        };
      }
      if (d && v(d)) {
        T.onHyperLinkOpen = d;
        i.onHyperLinkOpen = {
          eventName: et.onHyperLinkOpen
        };
      }
      en(Y, x, i, o === undefined ? {} : o, T, g, C);
      return Y;
    } catch (e) {}
  }
  function eo(e, t) {
    var n = e;
    if (!["error", "fileOpen"].includes(n)) {
      if (n === "fileSaved") {
        n = "fileStatus";
      }
      A({
        eventName: "basic.event",
        data: {
          eventName: n,
          action: t
        }
      });
    }
  }
  var ea = Object.freeze({
    __proto__: null,
    listener: en,
    config: ei
  });
  window.WPS = ea;
  var es = {
    config: ei
  };
  var securityLinkProcessor = require("security-link-processor") /*id: 103048*/;
  var filePreviewUtils = require("file-preview-utils") /*id: 116443*/;
  var nameExtensionUtils = require("name-extension-utils") /*id: 146008*/;
  var fileTypeConstants_1 = require("file-type-constants_1") /*id: 331664*/;
  var boxPreviewEventConstants = require("box-preview-event-constants") /*id: 654234*/;
  var boxPreviewConstantsMap = require("box-preview-constants-map") /*id: 485900*/;
  var driveSdkPreviewConstants = require("drive-sdk-preview-constants") /*id: 395351*/;
  var filePreviewSdkConstants = require("file-preview-sdk-constants") /*id: 842643*/;
  var previewSdkConstants = require("preview-sdk-constants") /*id: 38424*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function eb(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  (r = ey || {}).Online = "_online";
  r.Offline = "_offline";
  r.Close = "_close";
  var ey = r;
  let eE = new Map([[fileTypeConstants_1.fileExtensions.DOCX, "w"], [fileTypeConstants_1.fileExtensions.DOC, "w"], [fileTypeConstants_1.fileExtensions.DOTX, "w"], [fileTypeConstants_1.fileExtensions.DOT, "w"], [fileTypeConstants_1.fileExtensions.DOTM, "w"], [fileTypeConstants_1.fileExtensions.DOCM, "w"], [fileTypeConstants_1.fileExtensions.XLSX, "s"], [fileTypeConstants_1.fileExtensions.XLS, "s"], [fileTypeConstants_1.fileExtensions.XLTX, "s"], [fileTypeConstants_1.fileExtensions.XLT, "s"], [fileTypeConstants_1.fileExtensions.XLSM, "s"], [fileTypeConstants_1.fileExtensions.XLTM, "s"], [fileTypeConstants_1.fileExtensions.CSV, "s"], [fileTypeConstants_1.fileExtensions.PPTX, "p"], [fileTypeConstants_1.fileExtensions.PPT, "p"], [fileTypeConstants_1.fileExtensions.PPTM, "p"], [fileTypeConstants_1.fileExtensions.PPSX, "p"], [fileTypeConstants_1.fileExtensions.PPSM, "p"], [fileTypeConstants_1.fileExtensions.PPS, "p"], [fileTypeConstants_1.fileExtensions.POTX, "p"], [fileTypeConstants_1.fileExtensions.POTM, "p"], [fileTypeConstants_1.fileExtensions.POT, "p"], [fileTypeConstants_1.fileExtensions.PDF, "f"]]);
  let ew = {
    LOAD_START: "loadStart",
    CUSTOM_ERROR: "customError",
    OUTLINE_CLICKED: "outlineClicked"
  };
  let eC = {
    FILE_OPEN_FAILED: "[fileOpenFailed]"
  };
  let ex = ["closed", "sessionExpired"];
  class eT extends reactCoreLibraryReexport.PureComponent {
    componentDidMount() {
      this.initSDK();
      this.startOpenTimeoutTimer();
      this.handleEventFromBus(boxPreviewEventConstants.toggleStateConstants.ON);
      this.addStyle();
      window.addEventListener("message", this.handleIframeMessage, false);
      document.addEventListener("fullscreenchange", this.handleFullscreenChange, false);
      document.addEventListener("mozfullscreenchange", this.handleFullscreenChange, false);
      document.addEventListener("webkitfullscreenchange", this.handleFullscreenChange, false);
      document.addEventListener("MSFullscreenChange", this.handleFullscreenChange, false);
      document.addEventListener("visibilitychange", this.handleVisibilityChange, false);
      let {
        eventBus: e
      } = this.props.fixedContextValue;
      e.on(boxPreviewEventConstants.previewEventConstants.WPS_ENTER_PLAY_MODE, this.handleWPSEnterPlayMode);
      let {
        fileType: t
      } = this.props.dynamicContextValue;
      if (t === fileTypeConstants_1.fileExtensions.PDF) {
        this.initDebugInfo();
      }
    }
    componentDidUpdate(e, t) {
      let {
        cooperUserList: n
      } = this.props.dynamicContextValue;
      let {
        pageNumber: r,
        tabIndex: i
      } = this.state;
      if (this.sdk && n && e.dynamicContextValue.cooperUserList !== n) {
        this.sdk.setCooperUserColor(n);
      }
      if (t.pageNumber !== r) {
        this.handlePageNumberChanged();
      }
      if (t.tabIndex !== i) {
        this.handleTabIndexChanged();
      }
    }
    componentWillUnmount() {
      this.hasUnmount = true;
      if (this.sdk) {
        this.sdk.destroy();
        this.sdk = null;
      }
      this.handleEventFromBus(boxPreviewEventConstants.toggleStateConstants.OFF);
      this.removeStyle();
      this.setIsWPSOn(false);
      this.clearOpenTimeoutTimer();
      this.handlePreviewMsgDeregister();
      window.removeEventListener("message", this.handleIframeMessage, false);
      document.removeEventListener("fullscreenchange", this.handleFullscreenChange, false);
      document.removeEventListener("mozfullscreenchange", this.handleFullscreenChange, false);
      document.removeEventListener("webkitfullscreenchange", this.handleFullscreenChange, false);
      document.removeEventListener("MSFullscreenChange", this.handleFullscreenChange, false);
      document.removeEventListener("visibilitychange", this.handleVisibilityChange, false);
      let {
        eventBus: e
      } = this.props.fixedContextValue;
      e.off(boxPreviewEventConstants.previewEventConstants.WPS_ENTER_PLAY_MODE, this.handleWPSEnterPlayMode);
    }
    initDebugInfo() {
      let {
        eventBus: e
      } = this.props.fixedContextValue;
      e.safelyEmit(boxPreviewConstantsMap.debugEventTypes.SET_INFO, {
        key: "pdfMode",
        label: "PDF Mode",
        value: "wps"
      });
    }
    startOpenTimeoutTimer() {
      this.openTimeoutTimer = window.setTimeout(() => this.throwTimeoutError("open timeout"), 120000);
    }
    startTemplateRenderTimeoutTimer() {
      this.templateRenderTimeoutTimer = window.setTimeout(() => this.throwTimeoutError("template render timeout"), 10000);
    }
    dispatchInitialData() {
      let {
        networkController: e,
        userId: t
      } = this.props.fixedContextValue;
      let {
        isOnlineEnv: n
      } = e;
      this.postMyMessageToIframe({
        key: "initData",
        value: {}
      });
    }
    postMyMessageToIframe(e) {
      let {
        key: t,
        value: n
      } = e;
      if (this.iframeElement && this.iframeElement.contentWindow) {
        filePreviewUtils.postMessageToWindow(this.iframeElement, this.getOrigin(false), {
          key: t,
          value: n
        });
      }
    }
    handleEventFromBus(e) {
      let {
        eventBus: t
      } = this.props.fixedContextValue;
      if (t) {
        t[e](boxPreviewEventConstants.previewEventConstants.TRIGGER_WPS_ACTION, this.handleEventByAction);
      }
    }
    setIsWPSOn(e) {
      let t = e ? boxPreviewEventConstants.previewEventConstants.WPS_IS_ON : boxPreviewEventConstants.previewEventConstants.WPS_IS_OFF;
      this.props.fixedContextValue.eventBus.safelyEmit(t);
    }
    addStyle() {
      document.body.style.overflow = "hidden";
    }
    removeStyle() {
      document.body.style.overflow = "";
    }
    async initSDK() {
      let {
        networkController: e
      } = this.props.fixedContextValue;
      try {
        let {
          timeout: t,
          token: n,
          brand: r,
          url: i = ""
        } = await this.doGetAuthToken({
          needEdit: this.needEdit,
          needUrl: true,
          needGrayStrategy: !this.shouldUseMidWPS
        });
        if (this.hasUnmount) {
          return;
        }
        let {
          canEdit: o
        } = this;
        let a = this.shouldUseMidWPS ? this.handleMidWPSUrl(i, o) : this.handleWPSUrl(i, o, r);
        if (!this.shouldUseMidWPS) {
          this.startTemplateRenderTimeoutTimer();
        }
        this.startWpsIframeUrlCheckTimeoutTimer();
        if (a) {
          e.checkWpsUrl(`${a}&shouldBypassScsDialog`).then(e => {
            if (e) {
              this.cleartWpsIframeUrlCheckTimeoutTimer();
            }
          });
        }
        this.sdk = es.config({
          url: a,
          mount: this.wpsContainer.current,
          mode: o ? "normal" : "simple",
          cooperUserAttribute: {
            isCooperUsersAvatarVisible: false,
            cooperUsersColor: this.props.dynamicContextValue.cooperUserList || []
          },
          commonOptions: {
            isShowTopArea: true,
            isShowHeader: true,
            isParentFullscreen: `.${this.wpsWrapperClassName}`
          },
          pptOptions: {
            isExitPlayByEsc: true
          },
          commandBars: ["HeaderLeft", "HeaderRight", "FloatQuickHelp", "CooperationPanelOwnerInfo", "Logo", "Cooperation", "More", "Print", "CheckCellHistory", "HistoryVersion", "HistoryRecord", "HistoryVersionDivider", "ContextMenuConvene", "Comment", "Review", "WPPPcCommentButton", "WPPMobileCommentButton", "WPPMobileMarkButton"].map(e => ({
            cmbId: e,
            attributes: {
              visible: false
            }
          })),
          onHyperLinkOpen: this.onHyperLinkOpen,
          refreshToken: this.getAuthToken
        });
        this.iframeElement = this.sdk.iframe;
        this.sdk.setToken({
          token: n,
          timeout: t
        });
        this.sdk.on("stage", this.onSDKStage);
        this.sdk.on("fileOpen", this.onSDKFileOpen);
        this.sdk.on("error", this.onSDKError);
        this.sdk.on("webSocketStatus", this.onWebSocketStatusChanged);
        this.sdk.on("filePasswordStatus", this.onFilePasswordStatusChanged);
        this.props.boxPreviewContextValue.setCustomLoadingComponent(() => reactJsxRuntimeCoreReexport.jsx("div", {}));
        this.props.fixedContextValue.eventBus.safelyEmit(boxPreviewEventConstants.previewEventConstants.FIRST_MEANINGFUL_PAINTED);
        await this.sdk.ready();
        this.clearOpenTimeoutTimer();
        this.sdk.on("fileStatus", this.onFileStatusChanged);
        window.setTimeout(this.prepareApplication, 0);
        if (o) {
          this.handlePreviewMsgRegister();
        }
      } catch (e) {
        if (e && !e.handled) {
          this.handleError(fileTypeConstants_1.previewStates.WPS_GENERIC_ERROR, {
            reason: "SDK init error"
          });
        }
      }
    }
    async triggerWPSSave(e) {
      let {
        eventBus: t
      } = this.props.fixedContextValue;
      try {
        if (!this.sdk) {
          throw Error("sdk not ready");
        }
        let n = await this.sdk.save();
        if (!n || n.result !== "nochange" && n.result !== "ok") {
          throw Error(n.result || n.error);
        }
        t.safelyEmit(boxPreviewEventConstants.previewEventConstants.WPS_SAVED_RESULT, {
          uuid: e,
          isSuccess: true
        });
      } catch (n) {
        t.safelyEmit(boxPreviewEventConstants.previewEventConstants.WPS_SAVED_RESULT, {
          uuid: e,
          isSuccess: false
        });
      }
    }
    async switchToTab(e) {
      if (this.ExcelApplication) {
        await this.ExcelApplication.Sheets.Item(e + 1).Activate();
      }
    }
    async jumpToPage(e) {
      if (this.WordApplication) {
        let {
          Enum: t
        } = this.WordApplication;
        await this.WordApplication.ActiveDocument.Selection.GoTo({
          What: t.WdGoToItem.wdGoToPage,
          Which: t.WdGoToDirection.wdGoToAbsolute,
          Count: e
        });
        return;
      }
      if (this.PPTApplication) {
        await this.PPTApplication.ActivePresentation.SlideShowWindow.View.GotoSlide(e);
        return;
      }
      if (this.PDFApplication) {
        await this.PDFApplication.ActivePDF.JumpToPage(e);
      }
    }
    handleSuccess() {
      if (!this.loaded) {
        this.props.boxPreviewContextValue.updateProgress(100);
        this.props.boxPreviewContextValue.logOpenFileStatus("success", driveSdkPreviewConstants.previewErrorCodes.Success, {
          message_detail: JSON.stringify(this.stageList)
        });
        this.loaded = true;
      }
    }
    handlePageNumberChanged() {
      this.props.fixedContextValue.eventBus.safelyEmit(boxPreviewEventConstants.previewEventConstants.WPS_PAGE_NUMBER_UPDATED, {
        pageNumber: this.state.pageNumber
      });
    }
    handleTabIndexChanged() {
      this.props.fixedContextValue.eventBus.safelyEmit(boxPreviewEventConstants.previewEventConstants.WPS_TAB_INDEX_UPDATED, {
        tabIndex: this.state.tabIndex
      });
    }
    get shouldUseMidWPS() {
      return this.wpsThirdSource === filePreviewSdkConstants.wpsModes.MID_WPS;
    }
    get canDownload() {
      let {
        dynamicContextValue: e
      } = this.props;
      let {
        authority: t
      } = e;
      return filePreviewUtils.extractObjectValues(t, ["downloadable"]).downloadable;
    }
    async doGetAuthToken(e) {
      let {
        needEdit: t,
        needUrl: n,
        needGrayStrategy: r
      } = e;
      let {
        commonParams: i
      } = this.props.boxPreviewContextValue;
      let {
        networkController: o
      } = this.props.fixedContextValue;
      let {
        fileToken: a
      } = i;
      this.stopWriting = false;
      let s = this.wpsThirdSource;
      try {
        let {
          expire: e,
          token: i,
          env: l,
          url: u,
          brand: c
        } = await o.getThirdPartyAccessToken({
          fileToken: a,
          needEdit: t,
          needUrl: n,
          needGrayStrategy: r,
          source: s
        });
        return {
          brand: c,
          url: u,
          token: i,
          env: l,
          timeout: e * 1000
        };
      } catch (t) {
        let e = t.code && typeof t.code == "number" ? t.code : null;
        if (e === filePreviewSdkConstants.specificErrorCode) {
          let {
            eventBus: n
          } = this.props.fixedContextValue;
          n.safelyEmit(boxPreviewEventConstants.previewEventConstants.MULTI_GEO_MIGRATION_FORBIDDEN, {
            code: e
          });
          this.stopWriting = true;
          let {
            expire: r,
            token: i,
            env: o
          } = t.data;
          return {
            token: i,
            env: o,
            timeout: r * 1000
          };
        }
        if (e === fileTypeConstants_1.errorCodes.NO_PERMISSION) {
          this.handleError(fileTypeConstants_1.previewStates.WPS_NO_EDIT_PERMISSION, {
            reason: "get auth token failed"
          });
          t.handled = true;
        } else if (e === fileTypeConstants_1.errorCodes.POINT_KILL) {
          setTimeout(() => this.handleError(fileTypeConstants_1.previewStates.WPS_POINT_KILL, {
            reason: "get auth token failed"
          }));
          t.handled = true;
        } else if (e === fileTypeConstants_1.errorCodes.TENANT_QUOTA_EXCEEDED || e === fileTypeConstants_1.errorCodes.USER_QUOTA_EXCEEDED || e === fileTypeConstants_1.errorCodes.FILE_EDIT_QUOTA_EXCEEDED) {
          let {
            eventBus: n
          } = this.props.fixedContextValue;
          n.safelyEmit(boxPreviewEventConstants.previewEventConstants.STORAGE_QUOTA_EXHAUSTED, {
            code: e,
            data: t.data
          });
          this.hasQuota = false;
          let {
            token: r,
            expire: i
          } = t.data || {};
          return {
            token: r,
            timeout: i * 1000
          };
        }
        throw t;
      }
    }
    clearOpenTimeoutTimer() {
      if (this.openTimeoutTimer) {
        window.clearTimeout(this.openTimeoutTimer);
        this.openTimeoutTimer = undefined;
      }
    }
    clearTemplateRenderTimeoutTimer() {
      if (this.templateRenderTimeoutTimer) {
        window.clearTimeout(this.templateRenderTimeoutTimer);
        this.templateRenderTimeoutTimer = undefined;
      }
    }
    handleError(e, t) {
      let {
        showNotPreviewableComponent: n
      } = this.props.boxPreviewContextValue;
      let {
        eventBus: r
      } = this.props.fixedContextValue;
      let {
        reason: i,
        customReason: o = ""
      } = t;
      let a = JSON.stringify({
        reason: o + i,
        stageList: this.stageList
      });
      if (this.errorHandled || ex.includes(i)) {
        r.safelyEmit(boxPreviewEventConstants.previewEventConstants.WPS_COMMON_ERROR, {
          errorType: e,
          errorMessage: a
        });
        return;
      }
      r.safelyEmit(boxPreviewEventConstants.previewEventConstants.PREVIEW_ERROR, {
        messageDetail: a,
        previewComponent: fileTypeConstants_1.fileCategories.WPS
      });
      n(e, i);
      this.errorHandled = true;
    }
    get wpsFileType() {
      let e = nameExtensionUtils.getObjectExtension(this.props.dynamicContextValue.fileInfo);
      return eE.get(e);
    }
    get wpsThirdSource() {
      let {
        fileInfo: e
      } = this.props.dynamicContextValue;
      if (e && e.available_third_source) {
        return e.available_third_source;
      } else {
        return filePreviewSdkConstants.wpsModes.WPS;
      }
    }
    get needEdit() {
      let {
        isInEditMode: e,
        mountPoint: {
          type: t = ""
        } = {}
      } = this.props.fixedContextValue;
      let {
        fileInfo: n
      } = this.props.dynamicContextValue;
      if (!n) {
        return false;
      }
      let r = n.mount_point;
      let i = r === fileTypeConstants_1.docSourceTypes.EXPLORER || r === fileTypeConstants_1.docSourceTypes.WIKI;
      let o = t === fileTypeConstants_1.docSourceTypes.LARK;
      return !!e && (!!i || !!o);
    }
    get canEdit() {
      return !this.stopWriting && this.hasQuota && this.needEdit;
    }
    getOrigin(e) {
      return this.props.fixedContextValue.networkController.getWPSDomain(e);
    }
    handleWPSUrl(e, t, n) {
      if (!e) {
        throw Error(`WPS url is required, but receive: ${e}`);
      }
      let {
        isDriveSDK: r
      } = this.props.fixedContextValue;
      let {
        dataVersion: i
      } = this.props.boxPreviewContextValue;
      let o = {
        ...(r ? {} : {
          data_version: i
        }),
        lang: this.getWpsLanguage(n),
        require_mode: t ? filePreviewSdkConstants.permissionLevels.EDIT : filePreviewSdkConstants.permissionLevels.READ,
        third_req_id: filePreviewUtils.generateRandomString(32)
      };
      let a = this.handleUrlParams(o);
      return `${e}&${a}`;
    }
    handleMidWPSUrl(e, t) {
      if (!e) {
        throw Error(`Mid WPS url is required, but receive: ${e}`);
      }
      let n = {
        _w_third_lang: this.getWpsLanguage(),
        _w_third_req_id: filePreviewUtils.generateRandomString(32),
        _w_third_require_mode: t ? filePreviewSdkConstants.permissionLevels.EDIT : filePreviewSdkConstants.permissionLevels.READ
      };
      let r = this.handleUrlParams(n);
      return `${e}&${r}`;
    }
    getWpsBrandName(e) {
      if (isNullishCheck.isNil(e)) {
        return previewSdkConstants.platformTypes.FEISHU;
      }
      let {
        overrideBrandName: t
      } = this.props.fixedContextValue;
      return t || e || previewSdkConstants.platformTypes.FEISHU;
    }
    getWpsLanguage(e) {
      let r = this.getWpsBrandName(e);
      let i = filePreviewUtils.getSupportedLanguage(this.props.fixedContextValue?.languageType);
      return filePreviewSdkConstants.platformLanguageMap[r]?.[i] || filePreviewSdkConstants.platformLanguageMap[previewSdkConstants.platformTypes.FEISHU][i];
    }
    handleUrlParams(e) {
      return Object.keys(e).map(t => `${t}=${encodeURIComponent(e[t])}`).join("&");
    }
    render() {
      let {
        renderWatermark: e
      } = this.props.fixedContextValue;
      let {
        isFullscreen: t
      } = this.state;
      return reactJsxRuntimeCoreReexport.jsxs(c, {
        className: this.wpsWrapperClassName,
        children: [reactJsxRuntimeCoreReexport.jsx(d, {
          ref: this.wpsContainer
        }), t && e && e()]
      });
    }
    constructor(...e) {
      super(...e);
      eb(this, "sdk", undefined);
      eb(this, "wpsWrapperClassName", `wps-wrapper-${filePreviewUtils.generateRandomString(5)}`);
      eb(this, "wpsContainer", reactCoreLibraryReexport.createRef());
      eb(this, "openTimeoutTimer", undefined);
      eb(this, "templateRenderTimeoutTimer", undefined);
      eb(this, "wpsIframeUrlCheckTimeoutTimer", undefined);
      eb(this, "WordApplication", undefined);
      eb(this, "ExcelApplication", undefined);
      eb(this, "PPTApplication", undefined);
      eb(this, "PDFApplication", undefined);
      eb(this, "loaded", false);
      eb(this, "iframeElement", null);
      eb(this, "errorHandled", false);
      eb(this, "hasUnmount", false);
      eb(this, "hasQuota", true);
      eb(this, "stopWriting", false);
      eb(this, "webSocketStatus", null);
      eb(this, "state", {
        pageNumber: 0,
        tabIndex: -1,
        isFullscreen: false
      });
      eb(this, "stageList", []);
      eb(this, "isMessageRegistered", false);
      eb(this, "slideShowing", false);
      eb(this, "wpsTabHiddenLogInterval", null);
      eb(this, "wpsHiddenTabDestroyTimer", null);
      eb(this, "isDestroyed", false);
      eb(this, "handleVisibilityChange", () => {
        let {
          eventBus: e,
          wpsHiddenTabDestroyTime: t
        } = this.props.fixedContextValue;
        let {
          commonParams: n
        } = this.props.boxPreviewContextValue;
        let {
          fileToken: r
        } = n;
        let i = filePreviewUtils.generateUniqueId();
        let o = 0;
        if (document.hidden) {
          this.wpsTabHiddenLogInterval = setInterval(() => {
            o += 300000;
            e.safelyEmit(boxPreviewEventConstants.previewEventConstants.WPS_HIDDEN_TIME, {
              file_id: r,
              inactive_wps_id: i,
              inactive_time_sec: o > 10800000 ? "999" : String(o / 1000)
            });
          }, 300000);
          if (t) {
            this.wpsHiddenTabDestroyTimer = setTimeout(() => {
              var e;
              if ((e = this.sdk) !== null && e !== undefined) {
                e.destroy();
              }
              this.sdk = null;
              this.isDestroyed = true;
            }, t);
          }
        } else {
          if (this.wpsHiddenTabDestroyTimer) {
            clearTimeout(this.wpsHiddenTabDestroyTimer);
            this.wpsHiddenTabDestroyTimer = null;
          }
          if (this.isDestroyed) {
            this.initSDK();
            this.isDestroyed = false;
          }
          if (this.wpsTabHiddenLogInterval) {
            clearInterval(this.wpsTabHiddenLogInterval);
            this.wpsTabHiddenLogInterval = null;
            o = 0;
          }
        }
      });
      eb(this, "handleFullscreenChange", e => {
        let t = document;
        let n = !!t.fullscreenElement || !!t.mozFullScreen || !!t.webkitIsFullScreen || !!t.msFullscreenElement;
        this.setState({
          isFullscreen: n
        });
        if (!n && this.slideShowing) {
          this.focusApplication();
        }
      });
      eb(this, "startWpsIframeUrlCheckTimeoutTimer", () => {
        this.wpsIframeUrlCheckTimeoutTimer = window.setTimeout(() => this.throwTimeoutError("check wps-iframe-url timeout"), 10000);
      });
      eb(this, "throwTimeoutError", e => {
        let t = fileTypeConstants_1.previewStates.WPS_CUSTOM_ERROR;
        if (document.visibilityState !== "visible" && this.wpsFileType === "p") {
          this.props.fixedContextValue.eventBus.safelyEmit(boxPreviewEventConstants.previewEventConstants.WPS_COMMON_ERROR, {
            errorType: t,
            errorMessage: e
          });
          return;
        }
        this.handleError(t, {
          reason: e
        });
      });
      eb(this, "handleIframeMessage", e => {
        if (!filePreviewUtils.isValidMessageEvent(e, this.iframeElement)) {
          return;
        }
        let {
          data: t
        } = e;
        if (t.key) {
          switch (t.key) {
            case ew.LOAD_START:
              this.clearTemplateRenderTimeoutTimer();
              this.cleartWpsIframeUrlCheckTimeoutTimer();
              this.props.fixedContextValue.eventBus.safelyEmit(boxPreviewEventConstants.previewEventConstants.RENDER_TEMPLATE);
              this.props.fixedContextValue.eventBus.safelyEmit(boxPreviewEventConstants.previewEventConstants.WPS_IFRAME_LOAD_START, {
                webOfficeVersion: t.value && t.value.webOfficeVersion
              });
              this.dispatchInitialData();
              break;
            case ew.CUSTOM_ERROR:
              this.handleError(fileTypeConstants_1.previewStates.WPS_CUSTOM_ERROR, {
                reason: objectPathGetDefault.getObjectPathDefault(t, "value.errorType")
              });
              break;
            case ew.OUTLINE_CLICKED:
              this.focusApplication();
          }
        }
      });
      eb(this, "handleEventByAction", e => {
        if (e && e.action) {
          switch (e.action) {
            case boxPreviewConstantsMap.actionTypes.WPS_SAVE:
              this.triggerWPSSave(e.uuid);
              break;
            case boxPreviewConstantsMap.actionTypes.WPS_JUMP_TO_PAGE:
              let {
                pageNumber: t
              } = e;
              if (isNumberUtil.isNumber(t) && !isNaN(t)) {
                this.jumpToPage(t);
              }
              break;
            case boxPreviewConstantsMap.actionTypes.WPS_TAB_TO_INDEX:
              let {
                tabIndex: n
              } = e;
              if (isNumberUtil.isNumber(n) && !isNaN(n)) {
                this.switchToTab(n);
              }
              break;
            case boxPreviewConstantsMap.actionTypes.WPS_PRINT:
              if (this.sdk) {
                this.sdk.executeCommandBar("TabPrintPreview");
                this.props.fixedContextValue.eventBus.safelyEmit(boxPreviewEventConstants.previewEventConstants.OPERATION, {
                  source: boxPreviewEventConstants.previewAreaConstants.PREVIEW_COMPONENT,
                  operationType: boxPreviewEventConstants.previewActionConstants.WPS_PRINT
                });
              }
          }
        }
      });
      eb(this, "onHyperLinkOpen", e => {
        let {
          linkUrl: t
        } = e;
        if (!t) {
          return;
        }
        let {
          seclinkEnabled: n,
          seclinkBaseUrl: r
        } = this.props.fixedContextValue;
        if (n) {
          securityLinkProcessor.openSecureLink(t, {
            baseUrl: r
          });
        } else {
          securityLinkProcessor.openSecureWindow(t);
        }
      });
      eb(this, "getTag", e => ({
        token: `DRIVE_THIRD_EVENT_${e}`,
        resourceType: "DRIVE_THIRD_EVENT",
        routeType: "local",
        routeKey: ""
      }));
      eb(this, "handlePreviewMsgRegister", () => {
        let {
          PreviewMessageHandler: e,
          fileToken: t
        } = this.props.fixedContextValue;
        if (e && e.register && !this.isMessageRegistered) {
          this.isMessageRegistered = true;
          let n = this.getTag(t);
          e.register(n, this.handlePreviewMessageReceived);
          e.onError(n, e => {});
        }
      });
      eb(this, "handlePreviewMsgDeregister", () => {
        let {
          PreviewMessageHandler: e,
          fileToken: t
        } = this.props.fixedContextValue;
        if (e && e.deregister && this.isMessageRegistered) {
          e.deregister(this.getTag(t), this.handlePreviewMessageReceived);
          this.isMessageRegistered = false;
        }
      });
      eb(this, "handlePreviewMessageReceived", e => {
        let t = filePreviewUtils.safeJsonParse(e);
        if (!t) {
          return;
        }
        let n = t.biz_code;
        if (n === fileTypeConstants_1.errorCodes.FILE_EDIT_QUOTA_EXCEEDED || n === fileTypeConstants_1.errorCodes.FILE_SAVE_QUOTA_EXCEEDED) {
          let {
            eventBus: e
          } = this.props.fixedContextValue;
          e.safelyEmit(boxPreviewEventConstants.previewEventConstants.STORAGE_QUOTA_EXHAUSTED, {
            code: n,
            data: t
          });
          this.hasQuota = false;
        }
      });
      eb(this, "trySetCooperUserColor", () => {
        let {
          cooperUserList: e
        } = this.props.dynamicContextValue;
        if (this.sdk && e) {
          this.sdk.setCooperUserColor(e);
        }
      });
      eb(this, "setIsDownloadVisible", (e, t) => {
        if (this.sdk) {
          this.sdk.Application.CommandBars("DownloadImg").Visible = e;
          if (t === "ppt") {
            this.sdk.Application.CommandBars("ContextDownloadImage").Visible = e;
            this.sdk.Application.CommandBars("TaskbarDownloadImage").Visible = e;
          } else if (t === "word") {
            this.sdk.Application.CommandBars("TextMenuSaveImage").Visible = e;
          }
        }
      });
      eb(this, "prepareApplication", async () => {
        if (!this.sdk) {
          return;
        }
        this.sdk.Application.Sub.User_Join = this.trySetCooperUserColor;
        if (this.sdk.WordApplication) {
          this.WordApplication = this.sdk.WordApplication();
          this.WordApplication.Sub.CurrentPageChange = this.onPageChanged;
          let {
            Enum: e
          } = this.WordApplication;
          let t = await this.WordApplication.ActiveDocument.Selection.Information(e.WdInformation.wdActiveEndPageNumber);
          this.setState({
            pageNumber: t
          });
          this.setIsDownloadVisible(this.canDownload, "word");
        } else if (this.sdk.PPTApplication) {
          this.PPTApplication = this.sdk.PPTApplication();
          this.PPTApplication.Sub.SlideSelectionChanged = this.onPageChanged;
          let e = await this.PPTApplication.ActivePresentation.SlideShowWindow.View.Slide.SlideIndex;
          this.setState({
            pageNumber: e
          });
          this.setIsDownloadVisible(this.canDownload, "ppt");
          this.PPTApplication.Sub.SlideShowBegin = this.onSlideShowBegin;
          this.PPTApplication.Sub.SlideShowEnd = this.onSlideShowEnd;
          this.emitPlayModeEnableChange(true);
        } else if (this.sdk.ExcelApplication) {
          this.ExcelApplication = this.sdk.ExcelApplication();
          this.ExcelApplication.Sub.Worksheet_Activate = this.onTabIndexChanged;
          let e = await this.ExcelApplication.ActiveSheet.Index;
          this.setState({
            tabIndex: e
          });
          this.setIsDownloadVisible(this.canDownload, "excel");
        } else if (this.sdk.PDFApplication) {
          this.PDFApplication = this.sdk.PDFApplication();
          this.PDFApplication.Sub.CurrentPageChange = e => {
            this.onPageChanged(e + 1);
          };
          let e = await this.PDFApplication.ActivePDF.CurrentPage;
          this.setState({
            pageNumber: e
          });
        }
        this.focusApplication();
        this.setIsWPSOn(true);
        let {
          scrollTopPosition: e
        } = this.props.fixedContextValue;
        if (e) {
          let {
            page: t,
            range: n
          } = e;
          this.jumpToPage(t + 1);
          if (this.ExcelApplication) {
            await this.switchToTab(t);
            if (n) {
              n = atob(n);
              this.ExcelApplication.Range(n).Select();
            }
          }
        }
      });
      eb(this, "onFileStatusChanged", e => {
        if (e && typeof e.status == "number") {
          let {
            fixedContextValue: t
          } = this.props;
          let {
            i18n: n
          } = t;
          if (e.status === 5) {
            uiModalComponent.ModalComponent.error({
              title: n.LarkCCM_CM_DocsSaveFailed_Title,
              content: n.LarkCCM_CM_CurrentServerUnstable_Desc,
              okText: n["common.confirm"]
            });
          }
          t.eventBus.safelyEmit(boxPreviewEventConstants.previewEventConstants.WPS_SAVED_STATUS_CHANGED, {
            status: e.status
          });
        }
      });
      eb(this, "onWebSocketStatusChanged", e => {
        if (e && e.status) {
          if (this.webSocketStatus !== ey.Online && e.status === ey.Online) {
            this.trySetCooperUserColor();
          }
          this.webSocketStatus = e.status;
        }
      });
      eb(this, "onFilePasswordStatusChanged", e => {
        this.clearOpenTimeoutTimer();
      });
      eb(this, "onSDKStage", e => {
        this.stageList.push(e);
      });
      eb(this, "onSDKFileOpen", e => {
        this.clearOpenTimeoutTimer();
        this.cleartWpsIframeUrlCheckTimeoutTimer();
        if (e.success) {
          this.handleSuccess();
        } else {
          e.reason;
          filePreviewSdkConstants.errorMessages.FILE_INFO_ERROR;
          e.customReason = eC.FILE_OPEN_FAILED;
          this.onSDKError(e);
        }
      });
      eb(this, "onPageChanged", e => {
        this.setState({
          pageNumber: e
        });
      });
      eb(this, "onSlideShowBegin", () => {
        this.focusApplication();
        this.slideShowing = true;
        this.emitPlayModeEnableChange(false);
      });
      eb(this, "onSlideShowEnd", () => {
        this.focusApplication();
        this.slideShowing = false;
        this.emitPlayModeEnableChange(true);
      });
      eb(this, "emitPlayModeEnableChange", e => {
        let t = boxPreviewEventConstants.previewEventConstants.WPS_PLAY_MODE_ENABLE_CHANGE;
        this.props.fixedContextValue.eventBus.safelyEmit(t, {
          status: e
        });
      });
      eb(this, "handleWPSEnterPlayMode", async () => {
        if (this.PPTApplication) {
          (await this.PPTApplication.ActivePresentation.SlideShowSettings).Run();
        }
      });
      eb(this, "onTabIndexChanged", async () => {
        let e = await this.ExcelApplication.ActiveSheet.Index;
        this.setState({
          tabIndex: e
        });
      });
      eb(this, "onSDKError", e => {
        switch (e && e.reason) {
          case filePreviewSdkConstants.errorMessages.SESSION_FULL:
            this.handleError(fileTypeConstants_1.previewStates.WPS_SESSION_FULL, e);
            break;
          case filePreviewSdkConstants.errorMessages.PERMISSION_DENIED:
            this.handleError(fileTypeConstants_1.previewStates.WPS_NO_EDIT_PERMISSION, e);
            break;
          case filePreviewSdkConstants.errorMessages.FILE_TOO_LARGE:
            this.handleError(fileTypeConstants_1.previewStates.WPS_FILE_TOO_LARGE, e);
            break;
          case filePreviewSdkConstants.errorMessages.FAIL:
            this.handleError(fileTypeConstants_1.previewStates.WPS_FILE_ERROR, e);
            break;
          case filePreviewSdkConstants.errorMessages.SECURE_DOCUMENT_ERROR:
            return;
          case filePreviewSdkConstants.errorMessages.USER_NOT_LOGIN:
          case filePreviewSdkConstants.errorMessages.GET_TOKEN_FAILED:
          case filePreviewSdkConstants.errorMessages.INVALID_LINK:
          case filePreviewSdkConstants.errorMessages.UNKNOWN:
          default:
            this.handleError(navigator.onLine ? fileTypeConstants_1.previewStates.WPS_GENERIC_ERROR : fileTypeConstants_1.previewStates.WPS_NETWORK_OFFLINE, e);
        }
      });
      eb(this, "focusApplication", () => {
        if (this.iframeElement && this.iframeElement.contentWindow) {
          this.iframeElement.contentWindow.focus();
        }
      });
      eb(this, "getAuthToken", () => this.doGetAuthToken({
        needEdit: this.canEdit
      }));
      eb(this, "cleartWpsIframeUrlCheckTimeoutTimer", () => {
        if (this.wpsIframeUrlCheckTimeoutTimer) {
          window.clearTimeout(this.wpsIframeUrlCheckTimeoutTimer);
          this.wpsIframeUrlCheckTimeoutTimer = undefined;
        }
      });
    }
  }
  var eS = require("file-preview-contexts") /*id: 941450*/.withBoxPreviewCtx(eT);
  require.r(exports);
  require.d(exports, {
    default: function () {
      return eS;
    }
  });
}