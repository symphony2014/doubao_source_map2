// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'useAutoFocusOnKeyPress'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 952645
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  let c = () => {
    var e;
    var t;
    var n;
    let i = document.activeElement;
    if (!i) {
      return false;
    }
    let o = ["TEXTAREA", "INPUT"].includes((i == null ? undefined : (t = i.tagName) === null || t === undefined ? undefined : (e = t.toUpperCase) === null || e === undefined ? undefined : e.call(t)) || "") && !objectPathGetDefault.getObjectPathDefault(i, "disabled") && !objectPathGetDefault.getObjectPathDefault(i, "readOnly");
    let a = i == null ? undefined : (n = i.getAttribute) === null || n === undefined ? undefined : n.call(i, "contenteditable");
    return o || a === "true" || a === "plaintext-only" || a === "";
  };
  let d = () => document.querySelector("[role=\"alertdialog\"][data-state=\"open\"], [role=\"dialog\"][aria-modal=\"true\"]");
  let h = e => {
    let t = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => e.isExpand);
    let n = useLatestCallbackHook_1.useLatestCallback(n => {
      var i;
      var r;
      if (t) {
        return;
      }
      let o = ((r = document.activeElement) === null || r === undefined ? undefined : (i = r.getAttribute) === null || i === undefined ? undefined : i.call(r, "data-is-cloud-browser")) === "true";
      if (!n.metaKey && !n.ctrlKey && !n.shiftKey && !n.altKey && !c() && !o && /^[a-z0-9A-Z]$/.test(n.key)) {
        setTimeout(() => {
          var t;
          var n;
          if ((n = e.current) !== null && n !== undefined && (t = n.focus) !== null && t !== undefined) {
            t.call(n);
          }
        });
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (typeof window != "undefined") {
        document.addEventListener("keypress", n);
        return () => {
          document.removeEventListener("keypress", n);
        };
      }
    }, []);
    let {
      autoRefocusOSNames: r
    } = chatLauncherConfigHooks.useAutoRefocusOS();
    reactCoreLibraryReexport.useEffect(() => {
      if (typeof window == "undefined") {
        return;
      }
      let t = userAgentDeviceDetector.getOSName();
      if (!r.includes(t)) {
        return;
      }
      let n = debounceUtil_1_1.debounce(() => {
        if (document.visibilityState !== "hidden" && !d()) {
          setTimeout(() => {
            var t;
            var n;
            if ((n = e.current) !== null && n !== undefined && (t = n.focus) !== null && t !== undefined) {
              t.call(n);
            }
          });
        }
      }, 300, {
        leading: true,
        trailing: false
      });
      document.addEventListener("visibilitychange", n);
      window.addEventListener("focus", n);
      return () => {
        document.removeEventListener("visibilitychange", n);
        window.removeEventListener("focus", n);
      };
    }, [r]);
  };
  require.d(exports, {
    useAutoFocusOnKeyPress: function () {
      return h;
    }
  });
}