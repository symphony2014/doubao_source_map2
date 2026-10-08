// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'QrCodeLogin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50418.2df2ac84.js
         * chunkId: 50418
         * moduleId: 496521
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var d = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: 1.5,
      d: "M12 5a7 7 0 0 1 4.95 11.95M12 19A7 7 0 0 1 7.05 7.05"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "m18.018 18.546-2.5.419q-.294.04-.456-.122-.166-.158-.117-.45l.42-2.51q.057-.347.283-.447c.15-.066.478.153.478.153.634.544.668.669 2.194 2.195q.258.257.158.482t-.46.28M5.66 5.735l2.501-.419q.293-.04.456.122.166.158.117.45l-.42 2.51q-.058.347-.283.447c-.15.066-.478-.153-.478-.153-.634-.544-.668-.668-2.195-2.195q-.255-.257-.157-.482.099-.225.46-.28"
    })]
  }), {}));
  var _ = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 60,
    height: 61,
    fill: "none",
    viewBox: "0 0 60 61",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#34C759",
      d: "M30 60.73q-6.123 0-11.543-2.343a30.6 30.6 0 0 1-9.521-6.475 30.6 30.6 0 0 1-6.475-9.521Q.117 36.97.117 30.848t2.344-11.514a30.8 30.8 0 0 1 6.445-9.55 30.6 30.6 0 0 1 9.522-6.475Q23.847.965 29.97.965t11.543 2.344a30.5 30.5 0 0 1 9.55 6.474 30.5 30.5 0 0 1 6.475 9.551q2.344 5.391 2.344 11.514T57.539 42.39a30.6 30.6 0 0 1-6.474 9.521 30.5 30.5 0 0 1-9.551 6.475Q36.123 60.73 30 60.73m-3.281-15.585q.761 0 1.377-.352.615-.351 1.084-1.055L42.95 22.03q.263-.44.497-.937t.235-.996q0-1.026-.762-1.612a2.64 2.64 0 0 0-1.7-.615q-1.289 0-2.109 1.348l-12.51 20.098-5.947-7.676q-.556-.733-1.084-.996a2.4 2.4 0 0 0-1.142-.264q-.996 0-1.67.732a2.37 2.37 0 0 0-.674 1.7q0 .498.176.996.204.468.527.908l7.354 9.023q.585.762 1.2 1.084.616.322 1.378.322"
    })
  }), {}));
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var authPlatformEnums = require("auth-platform-enums") /*id: 9360*/;
  var qrCodeSvgGenerator = require("qr-code-svg-generator") /*id: 841484*/;
  var p = qrCodeSvgGenerator;
  var g = {
    container: "container-zDJUmx",
    img: "img-BI1PbG",
    qrcode: "qrcode-DeN5Ny",
    cover: "cover-kIII0c",
    loading: "loading-CGUkMl",
    scaned: "scaned-gHafU9",
    toast: "toast-xaCEeh"
  };
  let y = {
    width: 156,
    height: 156,
    type: "svg",
    margin: 0,
    qrOptions: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: "L"
    },
    imageOptions: {
      saveAsBlob: true,
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 0
    },
    dotsOptions: {
      type: "dots",
      color: "#262626",
      roundSize: false
    },
    backgroundOptions: {
      round: 0,
      color: "#ffffff"
    },
    dotsOptionsHelper: {
      colorType: {
        single: true,
        gradient: false
      },
      gradient: {
        linear: true,
        radial: false,
        color1: "#6a1a4c",
        color2: "#6a1a4c",
        rotation: "0"
      }
    },
    cornersSquareOptions: {
      type: "extra-rounded",
      color: "#000000"
    },
    cornersSquareOptionsHelper: {
      colorType: {
        single: true,
        gradient: false
      },
      gradient: {
        linear: true,
        radial: false,
        color1: "#000000",
        color2: "#000000",
        rotation: "0"
      }
    },
    cornersDotOptions: {
      type: "dot",
      color: "#000000"
    },
    cornersDotOptionsHelper: {
      colorType: {
        single: true,
        gradient: false
      },
      gradient: {
        linear: true,
        radial: false,
        color1: "#000000",
        color2: "#000000",
        rotation: "0"
      }
    },
    backgroundOptionsHelper: {
      colorType: {
        single: true,
        gradient: false
      },
      gradient: {
        linear: true,
        radial: false,
        color1: "#ffffff",
        color2: "#ffffff",
        rotation: "0"
      }
    }
  };
  let f = e => ({
    ...y,
    data: e
  });
  let v = e => {
    let {
      url: n
    } = e;
    let i = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (i.current && n) {
        let e = f(n);
        let t = new p(e);
        p._clearContainer(i.current);
        t.append(i.current);
      }
    }, [n]);
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        ref: i,
        className: g.qrcode,
        "data-testid": "qrcode_image"
      });
    } else {
      return null;
    }
  };
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  var mobileAuthButtonStrings = require("mobile-auth-button-strings") /*id: 457618*/;
  let b = {
    FETCH_FAILED: "Login_with_QR_code_failure"
  };
  let k = e => {
    let {
      onLoginSuccess: n,
      trackMeta: i = {}
    } = e;
    let o = reactCoreLibraryReexport.useRef();
    let [a, s] = reactCoreLibraryReexport.useState();
    let [d, m] = reactCoreLibraryReexport.useState();
    let [p, y] = reactCoreLibraryReexport.useState(false);
    let [f, v] = reactCoreLibraryReexport.useState("");
    let k = reactCoreLibraryReexport.useRef(false);
    let S = i18nTranslationUtils.useTranslationWithFallback();
    let N = e => {
      samanthaToastFactory.toastInstance.success({
        content: S("Login_with_QR_code_success"),
        icon: reactJsxRuntimeCoreReexport.jsx(_, {}),
        showClose: false,
        theme: "light",
        className: g.toast
      });
      setTimeout(() => {
        teaAnalyticsEventTracker.trackEvent("login_result", {
          type: "mobile_scan_qr_code",
          success: 1,
          ...i
        }, {
          key: "",
          withSlardar: true
        });
        if (e == null ? undefined : e.user_data) {
          n(e.user_data);
        } else {
          window.location.reload();
        }
      }, 500);
    };
    let x = e => {
      let n = e.status || e.error_code || "-1";
      let t = e.status || e.description || e.message;
      teaAnalyticsEventTracker.trackEvent("login_result", {
        type: "mobile_scan_qr_code",
        success: 0,
        err_code: n,
        code: n,
        err_tips: t,
        reason: t,
        ...i
      }, {
        key: "",
        withSlardar: true
      });
    };
    let R = () => {
      if (!k.current) {
        k.current = true;
        teaAnalyticsEventTracker.trackEvent("click_login", {
          ...i,
          type: "mobile_scan_qr_code"
        }, {
          key: "",
          withSlardar: true
        });
        teaAnalyticsEventTracker.trackEvent("scan_finish", {
          current_page: "login_home",
          ...i
        }, {
          key: "",
          withSlardar: true
        });
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "click_login",
          meta: {
            type: mobileAuthButtonStrings.mobileAuthButtonStrings.qrcodeScanned
          }
        });
      }
    };
    let C = reactCoreLibraryReexport.useCallback(() => {
      y(true);
      flowAccountModule.getFlowAccount().passportApi.getQrcode().then(e => {
        if (e.error_code === 0) {
          s(e);
          k.current = false;
          m(authPlatformEnums.authStates.NewState);
          v("");
        } else {
          x(e);
          v(b.FETCH_FAILED);
        }
      }).catch(e => {
        x(e);
        v(b.FETCH_FAILED);
      }).finally(() => {
        y(false);
      });
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if ((a == null ? undefined : a.qrcode) && a.token) {
        o.current = setInterval(() => {
          flowAccountModule.getFlowAccount().passportApi.checkQrconnect(a.token).then(e => {
            if (![authPlatformEnums.authStates.NewState, authPlatformEnums.authStates.ScannedState].includes(e.status) && o.current) {
              clearInterval(o.current);
            }
            if (authPlatformEnums.authStates.ConfirmedState === e.status) {
              N(e);
            } else if (authPlatformEnums.authStates.RefusedState === e.status) {
              x(e);
              C();
            } else if (authPlatformEnums.authStates.ScannedState === e.status) {
              R();
            }
            m(e.status);
          }).catch(e => {
            loggerServiceCore.defaultLogger.persist.error({
              eventName: "qrcode_check_connect_error",
              error: e
            });
          });
        }, 1000);
      }
      return () => {
        if (o.current) {
          clearInterval(o.current);
        }
      };
    }, [a]);
    reactCoreLibraryReexport.useEffect(C, []);
    return {
      qrcodeData: a,
      setQrcodeData: s,
      status: d,
      fetchQrcode: C,
      loading: p,
      error: f
    };
  };
  let S = e => {
    let {
      onLoginSuccess: n,
      trackMeta: i,
      containerClassName: o,
      imgClassName: s
    } = e;
    let {
      qrcodeData: m,
      status: p,
      fetchQrcode: y,
      loading: f,
      error: w
    } = k({
      trackMeta: i,
      onLoginSuccess: n
    });
    let A = i18nTranslationUtils.useTranslationWithFallback();
    reactCoreLibraryReexport.useEffect(() => {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "qrcode_show",
        meta: {
          ...i
        }
      });
      teaAnalyticsEventTracker.trackEvent("login_scan_qr_code_show", {
        ...i
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: a(g.container, o),
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: a(g.img, s),
        children: [(m == null ? undefined : m.qrcode_index_url) ? reactJsxRuntimeCoreReexport.jsx(v, {
          url: m.qrcode_index_url
        }) : null, p === authPlatformEnums.authStates.ExpiredState || w ? reactJsxRuntimeCoreReexport.jsxs("div", {
          className: g.cover,
          onClick: y,
          children: [reactJsxRuntimeCoreReexport.jsx(d, {
            className: a({
              [g.loading]: f
            })
          }), reactJsxRuntimeCoreReexport.jsx("p", {
            children: A(w || "Login_with_QR_code_timeout_line1")
          }), w ? null : reactJsxRuntimeCoreReexport.jsx("p", {
            children: A("Login_with_QR_code_timeout_line2")
          })]
        }) : null, p === authPlatformEnums.authStates.ScannedState ? reactJsxRuntimeCoreReexport.jsxs("div", {
          className: a(g.cover, g.scaned),
          children: [reactJsxRuntimeCoreReexport.jsx(_, {}), reactJsxRuntimeCoreReexport.jsx("p", {
            children: A("Login_with_QR_code_success_line1")
          }), reactJsxRuntimeCoreReexport.jsx("p", {
            children: A("Login_with_QR_code_success_line2")
          })]
        }) : null]
      })
    });
  };
  require.d(exports, {
    QrCodeLogin: function () {
      return S;
    }
  });
}