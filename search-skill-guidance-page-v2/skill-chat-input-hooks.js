// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'useChatInputBase'
// - Renamed export 'z' to 'useSkillChatInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: search-skill-guidance-page-v2.6f4bfe01.js
         * chunkId: 29927
         * moduleId: 354217
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  let o = e => {
    let {
      disabled: t,
      onSubmit: n,
      value: i,
      setValue: o,
      allowEmpty: s = false,
      clearInputOnSubmit: l = true,
      attachmentCanNotSend: c = false,
      onEmptyAt: d
    } = e;
    let u = reactCoreLibraryReexport.useRef(null);
    let [h, p] = reactCoreLibraryReexport.useState(null);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (h !== null) {
        if (u.current) {
          let e = h + 1;
          u.current.selectionStart = e;
          u.current.selectionEnd = e;
        }
        p(null);
      }
    }, [u.current, h, i]);
    let m = reactCoreLibraryReexport.useCallback(() => {
      o("");
    }, []);
    let f = reactCoreLibraryReexport.useCallback((e, r) => {
      if (!t && (s || i.trim()) && !c) {
        if (l === "dependOnSubmit") {
          (async () => {
            if (await (n == null ? undefined : n(r ?? i))) {
              o("");
            }
          })();
          return;
        }
        if (n != null) {
          n(r ?? i);
        }
        if (l) {
          o("");
        }
      }
    }, [t, n, i, s, l]);
    let g = reactCoreLibraryReexport.useCallback(e => {
      let t = e.shiftKey || !!userAgentDeviceDetector.isMac() && e.altKey || !!userAgentDeviceDetector.isWindows() && e.ctrlKey;
      if (e.keyCode === 13 && !t) {
        if (!userAgentDeviceDetector.isMobileOrIOS()) {
          e.preventDefault();
        }
        f();
        return;
      }
    }, [i, p, f]);
    return {
      textAreaRef: u,
      textAreaProps: {
        value: i,
        onChange: e => {
          if (!i && (e === "@" || e === "/") && d) {
            d(true, e);
          } else {
            if (d != null) {
              d(false);
            }
            o(e);
          }
        },
        onKeyDown: g
      },
      submit: f,
      clear: m
    };
  };
  let s = e => {
    let {
      defaultValue: t = "",
      onChange: n = emptyExportFunction.emptyFunction,
      ...a
    } = e;
    let [s, l] = reactCoreLibraryReexport.useState(t);
    let {
      textAreaRef: c,
      textAreaProps: d,
      submit: u,
      clear: h
    } = o({
      value: s,
      setValue: reactCoreLibraryReexport.useCallback(e => {
        n(e);
        l(e);
      }, [n]),
      ...a
    });
    return {
      textAreaRef: c,
      textAreaProps: d,
      submit: u,
      clear: h,
      value: s,
      setValue: l
    };
  };
  require.d(exports, {
    useChatInputBase: function () {
      return o;
    },
    useSkillChatInput: function () {
      return s;
    }
  });
}