// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'JN' to 'copyToClipboardAsync'
// - Renamed export 'S6' to 'copyWithToast'
// - Renamed export 'hf' to 'copyFromSelectionWithFallback'
// - Renamed export 'ol' to 'copyFromSelection'
// - Renamed export 'zp' to 'copyToClipboard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 411076
         */
module.exports = function (module, exports, require) {
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var toastManagerWrapper = require("toast-manager-wrapper") /*id: 55407*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  function u(e) {
    let n;
    let r;
    let o = document.createElement("textarea");
    o.style.position = "fixed";
    o.style.top = "0px";
    o.style.left = "0px";
    o.style.zIndex = "-1";
    o.style.opacity = "0";
    o.textContent = e;
    document.body.appendChild(o);
    o.select();
    try {
      n = document.execCommand("copy");
    } catch (e) {
      r = e;
      n = false;
    }
    document.body.removeChild(o);
    if (!n) {
      docxEventCollector.wrappedCollector("doc_bug_track_dev", {
        action: "white_clipboard_fail",
        info: "copy command fail",
        error: r && r.message,
        stack: Error("").stack
      });
    }
    return n;
  }
  function a(e) {
    let n = Promise.resolve().then(() => e());
    if (browserEnvironmentDetectionUtils.browserDetector.isOpendoc || browserEnvironmentDetectionUtils.browserDetector.isLarkFeed || !navigator.clipboard) {
      return n.then(e => {
        if (!u(e)) {
          throw Error("copy command fail");
        }
      });
    }
    if (!browserEnvironmentDetectionUtils.browserDetector.isSafari && !browserEnvironmentDetectionUtils.browserDetector.isIPadBrowser) {
      return n.then(e => navigator.clipboard.writeText(e));
    }
    {
      let e = new ClipboardItem({
        "text/plain": n.then(e => new Blob([e], {
          type: "text/plain"
        }))
      });
      let r = new ClipboardItem({
        "text/white": "true"
      });
      return navigator.clipboard.write([r, e]);
    }
  }
  function s(e, n, r) {
    a(() => e).then(() => {
      toastManagerWrapper.showToast({
        type: "success",
        content: n || t("common.copied")
      });
    }).catch(() => {
      toastManagerWrapper.showToast({
        type: "error",
        content: r || t("LarkCCM_DocxIM_SharePart_CopyFailed_Toast")
      });
    });
  }
  function d(e) {
    if (!browserEnvironmentDetectionUtils.browserDetector.isOpendoc && !browserEnvironmentDetectionUtils.browserDetector.isLarkFeed && navigator.clipboard) {
      let n = navigator.clipboard.writeText(e);
      if (isFunctionUtil_1.isFunction(n == null ? undefined : n.catch)) {
        n.catch(e => {
          docxEventCollector.wrappedCollector("doc_bug_track_dev", {
            action: "white_clipboard_fail",
            info: "clipboard.writeText fail",
            error: e && e.message,
            stack: Error("").stack
          });
        });
      }
      return;
    }
    u(e);
  }
  function f() {
    let e;
    try {
      e = document.execCommand("copy");
    } catch (n) {
      e = false;
    }
    if (!e && browserEnvironmentDetectionUtils.browserDetector.isSafari) {
      e = function () {
        let e;
        let n = document.createElement("textarea");
        document.body.appendChild(n);
        n.style.opacity = "0";
        n.value = " ";
        n.focus({
          preventScroll: true
        });
        n.select();
        try {
          e = document.execCommand("copy");
        } catch (n) {
          e = false;
        }
        document.body.removeChild(n);
        return e;
      }();
    }
    return e;
  }
  function h(e) {
    e.selectAll();
    let n = f();
    e.removeAllSelection();
    return n;
  }
  function _(e, n) {
    e.selectAll();
    let r = f();
    if (r) {
      e.removeAllSelection();
      if (n) {
        n(r);
      }
      return;
    }
    let o = true;
    let i = window.setTimeout(function (r = false) {
      if (o) {
        e.removeAllSelection();
        if (n) {
          n(r);
        }
        o = false;
      }
    }, 2000);
    window.flow.biz.navigation.handleCopyMenuClick({
      callback: r => {
        if (o) {
          clearTimeout(i);
          e.removeAllSelection();
          if (n) {
            n(r.success);
          }
          o = false;
        }
      }
    });
  }
  require.d(exports, {
    copyToClipboardAsync: function () {
      return a;
    },
    copyWithToast: function () {
      return s;
    },
    copyFromSelectionWithFallback: function () {
      return _;
    },
    copyFromSelection: function () {
      return h;
    },
    copyToClipboard: function () {
      return d;
    }
  });
}