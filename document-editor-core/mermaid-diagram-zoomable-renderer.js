// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'ZoomableMermaidDiagram'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27139.0cd87021.js
         * chunkId: 27139
         * moduleId: 935111
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var mermaidCoreApiEntryModule = require("mermaid-core-api-entry-module") /*id: 724919*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var u = classnamesUtils;
  var warningIcon_1 = require("warning-icon_1") /*id: 215884*/;
  var uniqueIdUtils = require("unique-id-utils") /*id: 912031*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  let h = e => {
    let {
      svgSelector: t,
      viewportSelector: n,
      renderedChart: a,
      zoomStepLength: i = 0.25,
      svgContainer: l,
      onError: c,
      svgPanZoomProps: u
    } = e;
    let s = reactCoreLibraryReexport.useRef();
    let d = reactCoreLibraryReexport.useRef(null);
    let h = () => {
      let e = document.querySelector(t);
      return !!e && e.clientWidth > 0 && e.clientHeight > 0;
    };
    let m = () => {
      require.e("svg-pan-zoom-library") /*id: 43923*/.then(require.t.bind(require, 466355, 23)).then(e => {
        try {
          let r = l ? l.querySelector(t) : undefined;
          let o = r instanceof SVGElement ? r : t;
          let a = e.default(o, {
            viewportSelector: n,
            mouseWheelZoomEnabled: false,
            fit: true,
            center: true,
            ...u
          });
          d.current = a;
          let i = () => {
            if (h()) {
              p();
            } else {
              setTimeout(i, 100);
            }
          };
          i();
        } catch (e) {
          if (c != null) {
            c(e);
          }
        }
      });
    };
    let g = () => {
      if (h()) {
        m();
        return;
      }
      let e = () => {
        if (h()) {
          m();
          return;
        }
        setTimeout(e, 200);
      };
      e();
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (a) {
        g();
      }
    }, [a, l]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!a || s.current) {
        return;
      }
      s.current = new ResizeObserver(debounceUtilWrapper.createDebounce(() => {
        var e;
        if (h()) {
          if ((e = d.current) !== null && e !== undefined) {
            e.resize();
          }
          p();
        }
      }, 200, {
        leading: false
      }));
      let e = (l || document).querySelector(t);
      if (e) {
        s.current.observe(e);
      }
      return () => {
        var e;
        if ((e = s.current) !== null && e !== undefined) {
          e.disconnect();
        }
        s.current = undefined;
      };
    }, [a, l, t]);
    let p = () => {
      var e;
      var t;
      if (h()) {
        if ((e = d.current) !== null && e !== undefined) {
          e.fit();
        }
        if ((t = d.current) !== null && t !== undefined) {
          t.center();
        }
      }
    };
    return {
      zoomIn: () => {
        var e;
        var t;
        if (h()) {
          if ((t = d.current) !== null && t !== undefined) {
            t.zoom(((e = d.current) === null || e === undefined ? undefined : e.getZoom()) + i);
          }
        }
      },
      zoomOut: () => {
        var e;
        var t;
        if (h()) {
          if ((t = d.current) !== null && t !== undefined) {
            t.zoom(((e = d.current) === null || e === undefined ? undefined : e.getZoom()) - i);
          }
        }
      },
      fit: p,
      rebind: g
    };
  };
  var m = {
    container: "container-i9_3Nf",
    "error-wrapper": "error-wrapper-leId05",
    "error-container": "error-container-k119cc",
    "error-icon": "error-icon-bNyIeG",
    "error-text": "error-text-qnJKkf"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = {
    theme: "base",
    themeVariables: {
      background: "#f9fafb",
      fontSize: "12px",
      primaryColor: "#E5F6FF",
      primaryTextColor: "rgba(0,0,0,0.8)",
      secondaryColor: "#F5EBFF",
      primaryBorderColor: "#73A6FF",
      secondaryBorderColor: "#BE8FED",
      secondaryTextColor: "rgba(0,0,0,0.56)",
      tertiaryColor: "#FFF6CC",
      tertiaryBorderColor: "#FFBC52",
      tertiaryTextColor: "rgba(0,0,0,0.3)",
      noteBkgColor: "#F3F4F6",
      noteTextColor: "rgba(0,0,0,0.55)",
      noteBorderColor: "#A8A8A8",
      lineColor: "rgba(0,0,0,0.3)",
      textColor: "rgba(0,0,0,0.8)",
      errorBkgColor: "#FFEBEA",
      errorTextColor: "#FF3B30"
    }
  };
  let w = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      chart: r,
      onClick: c,
      className: f,
      loading: w,
      onSuccess: y,
      onError: v,
      mermaidSvgContainingElement: b,
      i18nConfig: _,
      svgPanZoomProps: x
    } = e;
    let S = reactCoreLibraryReexport.useRef(null);
    let E = reactCoreLibraryReexport.useRef(`mermaid-diagram-${uniqueIdUtils.generateRandomId()}`);
    let C = `svg-${E.current}`;
    let [$, T] = reactCoreLibraryReexport.useState("");
    let [A, k] = reactCoreLibraryReexport.useState(false);
    let N = reactCoreLibraryReexport.useCallback(onceFunctionFactory.createOnce((e, t) => {
      if (e) {
        k(true);
        if (v != null) {
          v(e, t);
        }
        return;
      }
      if (y != null) {
        y(t);
      }
    }), []);
    let R = async e => {
      if (!isEmptyUtil.isEmpty(e)) {
        try {
          if (!(await mermaidCoreApiEntryModule.mermaid.parse(e, {
            suppressErrors: true
          }))) {
            if (!w) {
              N(Error("mermaid parse not valid"));
            }
            return;
          }
          let r = await mermaidCoreApiEntryModule.mermaid.render(C, e, b || S.current || undefined);
          if (S.current && r.svg) {
            var t;
            S.current.innerHTML = xssContentSanitizer.sanitizeHtml(r.svg, null, {
              logType: "js.innerHTML",
              reportOnly: "false",
              blackConfig: "{}",
              configMode: "merge",
              isCloseSSRReport: false,
              bid: "flow_web",
              region: "cn",
              urlLimit: "-1",
              htmlLimit: "-1",
              isSaveValidUrl: false,
              isRuntimeLog: false,
              isDOMParser: true,
              escapeRule: "escape-report",
              reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
              scmBranch: "release_train_samantha_2026-03-09_1120843696898",
              scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
              scmVersion: "1.0.4.168",
              webpackPluginVersion: "3.4.5",
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lb*x-T$doaWJsSnZX$k14T$d*$E1Xd*FXR%o1$2xkT2FH%khWbXRNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$TZWt3e%1Xe*pi$EZvW$Zk%mR*cEhiR2hhTTBwb1lsTT$jR0p0$W14bFF6$XdZek5v-%dOdFpERmpkejA5"
            });
            if ((t = r.bindFunctions) !== null && t !== undefined) {
              t.call(r, S.current);
            }
            T(e);
          }
          if (!w && N != null) {
            N(null);
          }
        } catch (e) {
          if (!w) {
            N(e);
          }
        }
      }
    };
    let {
      zoomIn: F,
      zoomOut: j,
      fit: P,
      rebind: D
    } = h({
      svgSelector: `#${C}`,
      viewportSelector: E.current,
      renderedChart: $,
      onError: N,
      svgContainer: S.current,
      svgPanZoomProps: x
    });
    reactCoreLibraryReexport.useEffect(() => {
      mermaidCoreApiEntryModule.mermaid.initialize({
        ...p,
        startOnLoad: false,
        logLevel: "fatal",
        suppressErrorRendering: true
      });
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      R(r);
    }, [r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!w && !A) {
        (async () => {
          await R(r);
          D();
        })();
      }
    }, [w]);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      zoomIn: F,
      zoomOut: j,
      fit: P
    }));
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: u("w-full h-full relative", f),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        onClick: c,
        id: E.current,
        className: u("w-full h-full", m.container),
        ref: S
      }), A ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: m["error-wrapper"],
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: m["error-container"],
          children: [reactJsxRuntimeCoreReexport.jsx(warningIcon_1.WarningIcon, {
            className: m["error-icon"]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: m["error-text"],
            children: (_ == null ? undefined : _.errorText) || "Error"
          })]
        })
      }) : null]
    });
  });
  require.d(exports, {
    ZoomableMermaidDiagram: function () {
      return w;
    }
  });
}