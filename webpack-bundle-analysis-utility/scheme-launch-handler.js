// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'clipboardCopyHelper'
// - Resolved require(735474) to 'clipboard-copy-helper'
// - Renamed variable 'a' to 'mergeQueryParams'
// - Resolved require(786143) to 'merge-query-params'
// - Renamed variable 'u' to 'safeObjectPathGet'
// - Resolved require(490291) to 'safe-object-path-get'
// - Renamed variable 'f' to 'axiosCoreModuleProxy'
// - Resolved require(172136) to 'axios-core-module-proxy'
// - Renamed variable 'd' to 'userAgentParserUtil'
// - Resolved require(955867) to 'user-agent-parser-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 97038.67ba788d.js
         * chunkId: 97038
         * moduleId: 664457
         */
module.exports = function (module, exports, require) {
  var n;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var i = clipboardCopyHelper;
  var mergeQueryParams = require("merge-query-params") /*id: 786143*/;
  var s = mergeQueryParams;
  var safeObjectPathGet = require("safe-object-path-get") /*id: 490291*/;
  var c = safeObjectPathGet;
  var axiosCoreModuleProxy = require("axios-core-module-proxy") /*id: 172136*/;
  var l = axiosCoreModuleProxy;
  var userAgentParserUtil = require("user-agent-parser-util") /*id: 955867*/;
  var p = userAgentParserUtil;
  var h = typeof window != "undefined" && typeof navigator != "undefined" && typeof document != "undefined" ? navigator.userAgent : "";
  var m = p(h);
  function v(e) {
    var t;
    var r;
    var n;
    (t = document.createElement("textArea")).value = e;
    document.body.appendChild(t);
    if (navigator.userAgent.match(/ipad|iphone/i)) {
      (r = document.createRange()).selectNodeContents(t);
      (n = window.getSelection()).removeAllRanges();
      n.addRange(r);
      t.setSelectionRange(0, 999999);
    }
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
  }
  var b = Number(m.os.version && ((n = m.os.version) === null || n === undefined ? undefined : n.split(".")[0]));
  function y(e = "", t, r, n) {
    try {
      if (!t && e && (m.os.android || m.os.ios && b >= 9)) {
        r(`复制剪切板，内容:${e}`);
        i(e, {
          message: null,
          debug: n
        });
      }
    } catch (t) {
      try {
        v(e);
      } catch (e) {}
    }
  }
  function g(e) {
    var t = e.link;
    var r = e.scheme;
    var n = e.schemeWaitTime;
    var o = n === undefined ? 3000 : n;
    var i = e.disableLinkLaunch;
    var a = i !== undefined && i;
    var u = e.disableClipboard;
    var f = u !== undefined && u;
    var d = e.disableLog;
    var p = d !== undefined && d;
    var h = e.debug;
    var v = h !== undefined && h;
    var g = e.zlinkData;
    var x = e.timeout;
    function w(e) {
      return v && undefined;
    }
    if (t && r) {
      var _ = 0;
      function O(e, r) {
        if (!p) {
          var n = new Image();
          var i = {
            sw: screen.width,
            sh: screen.height,
            link: t,
            scheme: e
          };
          n.src = s("https://zlink.toutiao.com/api/click_event", i);
        }
        var u = {
          zlink: t,
          zlink_click_time: Date.now()
        };
        if (g) {
          u.zlink_data = g;
        }
        var d = s(e, u);
        var h = s(t, {
          scheme: d
        });
        function O() {
          setTimeout(function () {
            if (!a && (m.os.ios && b >= 9 || m.browser.weixin)) {
              w(`iOS 9+, 使用 universal link 调起 :${h}`);
              window.location.href = h;
            } else {
              w(`使用 scheme 调起: ${d}`);
              window.location.href = d;
              var e = true;
              function t() {
                if (document.hidden) {
                  w("检测到页面隐藏");
                  e = false;
                }
              }
              document.addEventListener("visibilitychange", t);
              setTimeout(function () {
                if (e && _ >= E.length - 1) {
                  w(`未检测到页面隐藏，跳到下载: ${h}`);
                  location.href = h;
                }
                document.removeEventListener("visibilitychange", t);
                if (e) {
                  _++;
                  r();
                }
              }, o || 3000);
            }
          }, 200);
        }
        l({
          method: "POST",
          url: "https://zlink.toutiao.com/api/cb_e",
          data: {
            scheme: d
          },
          timeout: x || 1000
        }).then(function (e) {
          y(c(e, "data.data"), f, w, v);
          O();
        }).catch(function (e) {
          O();
        });
      }
      var E = Array.isArray(r) ? r : [r];
      (function e(t, r = 0) {
        if (t[r]) {
          O(t[r], function () {
            e(t, r + 1);
          });
        }
      })(E);
    }
  }
  function x(e) {
    try {
      i(e, {
        debug: true
      });
    } catch (t) {
      v(e);
    }
  }
  function w(e = "snssdk32://detail?groupid=2&zlink=https%3A%2F%2Fz.ixigua.com%2FfYWw&zlink_click_time=1634804936095", t = {}) {
    return l(Object.assign({
      method: "POST",
      url: "https://zlink.toutiao.com/api/cb_e",
      data: {
        scheme: e
      },
      timeout: 1000
    }, t)).then(function (e) {
      return c(e, "data.data");
    }).catch(function (e) {});
  }
  function _(e) {
    var t = e || {};
    var r = t.link;
    var n = t.scheme;
    if (r && n) {
      var o = new Image();
      var i = {
        sw: screen.width,
        sh: screen.height,
        link: r,
        scheme: n
      };
      o.src = s("https://zlink.toutiao.com/api/click_event", i);
    }
  }
  require.r(exports);
  require.d(exports, {
    cbApiData: function () {
      return w;
    },
    clickReport: function () {
      return _;
    },
    copyData: function () {
      return x;
    },
    default: function () {
      return g;
    }
  });
}