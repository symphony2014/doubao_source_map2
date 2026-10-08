// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'CodeVerifyPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50418.2df2ac84.js
         * chunkId: 50418
         * moduleId: 981246
         */
module.exports = function (module, exports, require) {
  var t;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  let l = (e, n) => {
    let i = reactCoreLibraryReexport.useRef();
    let [t, a] = reactCoreLibraryReexport.useState(0);
    let [r, c] = reactCoreLibraryReexport.useState(false);
    let l = () => {
      if (i.current) {
        clearInterval(i.current);
        i.current = undefined;
      }
      c(false);
    };
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (r && t <= 0) {
        l();
        if (n != null) {
          n();
        }
      }
    }, [t, n, r]);
    return {
      count: t,
      start: () => {
        if (i.current) {
          clearInterval(i.current);
        }
        c(true);
        a(e);
        i.current = window.setInterval(() => {
          a(e => Math.max(e - 1, 0));
        }, 1000);
      },
      stop: l
    };
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 14,
    height: 15,
    fill: "none",
    viewBox: "0 0 14 15",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("g", {
      clipPath: "url(#blue-loading_svg__a)",
      children: reactJsxRuntimeCoreReexport.jsx("path", {
        stroke: "url(#blue-loading_svg__b)",
        strokeLinecap: "round",
        strokeWidth: 1.778,
        d: "M13.222 7.5A6.222 6.222 0 0 0 1.396 4.792"
      })
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "blue-loading_svg__b",
        x1: 1.396,
        x2: 13.222,
        y1: 7.5,
        y2: 7.5,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#0064FA",
          stopOpacity: 0
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 0.399,
          stopColor: "#0064FA",
          stopOpacity: 0.5
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#0064FA"
        })]
      }), reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "blue-loading_svg__a",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "#fff",
          d: "M0 .5h14v14H0z"
        })
      })]
    })]
  });
  var numericRangeUtil = require("numeric-range-util") /*id: 685991*/;
  var useStateRefHook = require("use-state-ref-hook") /*id: 739141*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var useEventListenerHook = require("use-event-listener-hook") /*id: 629504*/;
  var semiInputComponent = require("semi-input-component") /*id: 410861*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let f = () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "container-S4zyAv"
  });
  var v = {
    container: "container-MmfdsQ",
    inputting: "inputting-duhmfr",
    disabled: "disabled-HHuTea",
    text: "text-RFTL9V",
    error: "error-zWEkGU"
  };
  let w = e => {
    let {
      className: n,
      style: i,
      value: t,
      inputting: o = false,
      disabled: a = false,
      error: c = false,
      onClick: s
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: r(v.container, n, {
        [v.inputting]: !a && o,
        [v.error]: c,
        [v.disabled]: a
      }),
      style: i,
      onClick: s,
      children: t ? reactJsxRuntimeCoreReexport.jsx("span", {
        className: v.text,
        children: t
      }) : o && !a && reactJsxRuntimeCoreReexport.jsx(f, {})
    });
  };
  let A = e => !isNaN(parseInt(e));
  let E = e => {
    let {
      length: n = 6,
      value: i = "",
      disabled: t = false,
      error: a = false,
      onChange: c,
      onFinish: s,
      className: l,
      style: _,
      inputClassName: f
    } = e;
    let [v, E, b] = useStateRefHook.useStateRef(i.slice(0, n));
    let k = reactCoreLibraryReexport.useRef(null);
    let S = skillPinModalCallback.useSkillPinCallback(() => {
      var e;
      if ((e = k.current) !== null && e !== undefined) {
        e.blur();
      }
    });
    let N = skillPinModalCallback.useSkillPinCallback(() => {
      var e;
      if ((e = k.current) !== null && e !== undefined) {
        e.focus();
      }
    });
    let x = skillPinModalCallback.useSkillPinCallback(() => !!document.activeElement && document.activeElement === k.current);
    useEventListenerHook.useEventListener("keydown", e => {
      let {
        key: i
      } = e;
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "code_input_global_key_down",
        meta: {
          val: v,
          key: i
        }
      });
      if (!x() && (A(i) || i === "Backspace") && v.length < n) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "code_input_global_key_down_and_focus",
          meta: {
            val: v,
            key: i
          }
        });
        N();
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      N();
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "code_input_innervalue_effect",
        meta: {
          val: v
        }
      });
      if (c != null) {
        c(v);
      }
      if (v.length >= n) {
        if (s != null) {
          s(v.slice(0, n));
        }
        S();
      }
    }, [v, n]);
    reactCoreLibraryReexport.useEffect(() => {
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "code_input_value_effect",
        meta: {
          all_val: i,
          val: i.slice(0, n)
        }
      });
      E(i.slice(0, n));
    }, [i]);
    let R = () => {
      var e;
      var i;
      if (v.length !== n) {
        if ((e = k.current) !== null && e !== undefined) {
          e.blur();
        }
        if ((i = k.current) !== null && i !== undefined) {
          i.focus();
        }
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: r("container-HEzj_P", "code-input", l),
      style: _,
      "data-testid": "code_input",
      children: [numericRangeUtil.createRange(0, n).map(e => reactJsxRuntimeCoreReexport.jsx(w, {
        className: r("item-nwxHNk", "char-input", f),
        value: b()[e],
        disabled: t,
        error: a,
        inputting: e === v.length,
        onClick: R
      }, e)), reactJsxRuntimeCoreReexport.jsx(semiInputComponent.InputComponent, {
        className: "input-w9UHYf",
        ref: k,
        inputMode: "decimal",
        value: v,
        disabled: t,
        onChange: e => {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "code_input_onchange",
            meta: {
              val: e
            }
          });
          if (e && !A(e)) {
            loggerServiceCore.defaultLogger.persist.info({
              eventName: "code_input_onchange_break",
              meta: {
                val: e,
                new_value: e,
                reason: "not_number_v1"
              }
            });
            return;
          }
          E(e.toLocaleUpperCase());
        }
      })]
    });
  };
  var b = {
    "code-input-panel": "code-input-panel-Igs8eF",
    desc: "desc-y4EJHw",
    link: "link-F_sTeR",
    sending: "sending-tQ_l1X",
    disabled: "disabled-Hx2W8l",
    "vertical-align-center": "vertical-align-center-nSMkyR",
    icon: "icon-KxgMDS",
    rotate: "rotate-ZWyk82"
  };
  (t = k || {}).WaitToRetry = "wait_to_retry";
  t.CanRetry = "can_retry";
  t.VerifyFinished = "verify_finished";
  var k = t;
  let S = e => {
    let {
      retryTime: n,
      length: i,
      onFinish: t,
      onResend: a,
      autoSend: s = false,
      className: u,
      style: h,
      inputClassName: m,
      footerRender: p
    } = e;
    let [g, y] = reactCoreLibraryReexport.useState();
    let [f, v] = reactCoreLibraryReexport.useState(false);
    let [w, A] = reactCoreLibraryReexport.useState(false);
    let [S, N] = reactCoreLibraryReexport.useState(false);
    let [x, R] = reactCoreLibraryReexport.useState(s);
    let [C, j] = reactCoreLibraryReexport.useState(s ? k.CanRetry : k.WaitToRetry);
    let {
      count: L,
      start: T
    } = l(n, () => {
      if (C === k.WaitToRetry) {
        j(k.CanRetry);
      }
    });
    let I = async e => {
      if (e) {
        v(false);
        try {
          A(true);
          await t(e);
          j(k.VerifyFinished);
        } catch (e) {
          y(undefined);
          v(true);
        } finally {
          A(false);
        }
      }
    };
    let O = async () => {
      if (C === k.CanRetry) {
        N(true);
        try {
          await a();
          j(k.WaitToRetry);
        } catch (e) {
          j(k.CanRetry);
        } finally {
          N(false);
          R(false);
        }
      }
    };
    let P = reactCoreLibraryReexport.useRef(n);
    reactCoreLibraryReexport.useEffect(() => {
      P.current = n;
    }, [n]);
    reactCoreLibraryReexport.useEffect(() => {
      if (C === k.WaitToRetry) {
        T(P.current);
      }
    }, [C, P]);
    reactCoreLibraryReexport.useEffect(() => {
      if (g) {
        v(false);
      }
    }, [g]);
    reactCoreLibraryReexport.useEffect(() => {
      if (s) {
        O();
      }
    }, [s]);
    let M = w ? reactJsxRuntimeCoreReexport.jsx("div", {
      className: r(b.desc),
      children: i18nTranslationUtils.i18nextTranslate("delete_account_verifying", "Verifying")
    }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [C === k.WaitToRetry ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: r(b.desc, b.sending),
        children: i18nTranslationUtils.i18nextTranslate("resend_code_countdown", "Resend Code %ds").replace("%d", String(L))
      }) : null, C === k.CanRetry ? reactJsxRuntimeCoreReexport.jsxs("div", {
        className: r(b.desc, S ? b.disabled : b.link, b["vertical-align-center"]),
        onClick: O,
        children: [S ? reactJsxRuntimeCoreReexport.jsx(_, {
          className: r(b.icon, b.rotate)
        }) : null, i18nTranslationUtils.i18nextTranslate("resend_code", "Resend Code")]
      }) : null]
    });
    let B = x ? null : M;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: r(u, b["code-input-panel"]),
      style: h,
      children: [reactJsxRuntimeCoreReexport.jsx(E, {
        length: i,
        value: g,
        onChange: y,
        onFinish: I,
        disabled: w,
        error: f,
        inputClassName: m
      }), p ? p(B) : reactJsxRuntimeCoreReexport.jsx("div", {
        className: "text-12",
        children: B
      })]
    });
  };
  require.d(exports, {
    CodeVerifyPanel: function () {
      return S;
    }
  });
}