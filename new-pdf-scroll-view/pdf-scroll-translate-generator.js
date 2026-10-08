// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'generatePdfOverlays'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 234227
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var o = {
    "translate-overlay": "translate-overlay-cKa8LE",
    "translate-loading-overlay": "translate-loading-overlay-peWxoY",
    "translate-image-overlay": "translate-image-overlay-XbtiSg"
  };
  var pdfBoundsUtils = require("pdf-bounds-utils") /*id: 309227*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var mdBoxLazyComponentsModule = require("md-box-lazy-components-module") /*id: 857296*/;
  var observableFromSource = require("observable-from-source") /*id: 564103*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var g = clipboardCopyHelper;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var samanthaPopoverWrapperComponent = require("samantha-popover-wrapper-component") /*id: 137563*/;
  var microsoftLogoIcon = require("microsoft-logo-icon") /*id: 780129*/;
  var huoshanIconComponent = require("huoshan-icon-component") /*id: 591545*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var noteOutlinedIcon = require("note-outlined-icon") /*id: 356739*/;
  var N = require.p + "static/image/doubao_icon.68a4a30d.png";
  var translateServiceSelector = require("translate-service-selector") /*id: 512967*/;
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  var _ = {
    "hover-container": "hover-container-LuYIQN",
    "overflow-container": "overflow-container-ykDC03",
    container: "container-RPqmBR",
    "container-new": "container-new-Y_0nmf",
    "translate-mdbox-wrap": "translate-mdbox-wrap-q2mHfm",
    "anchor-area": "anchor-area-a3_Ah5",
    popover: "popover-uWX6UW",
    content: "content-m4sqtb",
    item: "item-Oczb1e",
    disabled: "disabled-uxZM8z",
    icon: "icon-CMd57S",
    title: "title-Aejugg",
    "zh-font": "zh-font-nHdmqq",
    "zh-degrade-font": "zh-degrade-font-zrR6fZ",
    "en-font": "en-font-WZmU_E"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let R = e => {
    let {
      text: t,
      onLoadAITranslate: n,
      value: a,
      aiTranslateIconSrc: l,
      getPopupContainer: i,
      onClick: o
    } = e;
    let s = translationContextProvider.useTranslation();
    let [u, h] = reactCoreLibraryReexport.useState(false);
    let [f, R] = reactCoreLibraryReexport.useState(false);
    let [E, $] = reactCoreLibraryReexport.useState("");
    let [k, P] = reactCoreLibraryReexport.useState(false);
    let [Z, M] = reactCoreLibraryReexport.useState(false);
    let L = f ? E : t;
    let F = reactCoreLibraryReexport.useMemo(() => {
      let e = [];
      if (a === translateServiceSelector.translateServiceEnum.MICROSOFT) {
        e.push({
          label: s("translate_microsoft"),
          value: translateServiceSelector.translateServiceEnum.MICROSOFT,
          icon: reactJsxRuntimeCoreReexport.jsx(microsoftLogoIcon.MicrosoftLogoIcon, {
            className: _.icon
          })
        });
      } else if (a === translateServiceSelector.translateServiceEnum.HUOSHAN) {
        e.push({
          label: s("translate_huoshan"),
          value: translateServiceSelector.translateServiceEnum.HUOSHAN,
          icon: reactJsxRuntimeCoreReexport.jsx(huoshanIconComponent.HuoshanIcon, {
            className: _.icon
          })
        });
      }
      if (n) {
        e.push({
          label: s("translate_ai"),
          value: translateServiceSelector.translateServiceEnum.LLM,
          icon: reactJsxRuntimeCoreReexport.jsx("img", {
            className: _.icon,
            src: xssContentSanitizer.sanitizeUrl(l || N, null, {
              logType: "js.href/src",
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$dFcHNX$mRSZ*1NelNtcE1Na3B3Wldre*FtSXlNW*RpTWpWc1ltN$Nla3d6%W10-WF%RjZX$E5LZ*1KS*Qz%mti$3hzWkhrNWFtSXlNW*RpTWpWc1ltN$Nla3d6$W5sWlZ6$jZZa2RHT%Zw$E1%QmFXR2d3$EZkS2MySXl%bkpNTTFaNldsTXhNRnBZ-%RCT$-wcHpZakpP-2t4d$$uc*xSMFo1$2pO$2$nPT0"
            })
          })
        });
      }
      return e;
    }, [a, n]);
    let I = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (k || E || !n) {
        return;
      }
      P(true);
      let e = n();
      (e instanceof Promise ? observableFromSource.fromAnySource(e) : e).subscribe({
        next: e => {
          $(t => t + e);
          P(false);
        },
        error: () => {
          P(false);
        },
        complete: () => {
          P(false);
        }
      });
    });
    let A = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (L) {
        g(L);
        h(true);
      }
    });
    let W = reactFunctionMemoHook.useMemoizedCallback(() => {
      R(!f);
    });
    let O = reactFunctionMemoHook.useMemoizedCallback(() => {
      M(true);
      if (o != null) {
        o();
      }
    });
    let B = F.find(e => f ? e.value === a : e.value !== a);
    let z = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsxs("div", {
      className: _.content,
      children: [B ? reactJsxRuntimeCoreReexport.jsxs("div", {
        className: _.item,
        onClick: W,
        children: [B.icon, reactJsxRuntimeCoreReexport.jsx("div", {
          className: _.title,
          children: B.label
        })]
      }) : null, reactJsxRuntimeCoreReexport.jsxs("div", {
        className: d(_.item, {
          [_.disabled]: !L
        }),
        onClick: A,
        children: [u ? reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {
          className: _.icon
        }) : reactJsxRuntimeCoreReexport.jsx(noteOutlinedIcon.NoteOutlinedIcon, {
          className: _.icon
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: _.title,
          children: s("hover_toolbar_copy")
        })]
      })]
    }), [B, L, u, s]);
    let H = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
      className: _.popover,
      trigger: "custom",
      content: z,
      position: "bottom",
      visible: Z,
      onClickOutSide: () => {
        M(false);
      },
      getPopupContainer: i,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: _["anchor-area"],
        children: f && k && reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {})
      })
    }), [z, Z, M, i, f, k]);
    reactCoreLibraryReexport.useEffect(() => {
      if (f) {
        I();
      }
      M(false);
    }, [f]);
    reactCoreLibraryReexport.useEffect(() => {
      if (u) {
        setTimeout(() => {
          h(false);
        }, 2000);
      }
    }, [u]);
    return {
      currentText: L,
      popover: H,
      popoverVisible: Z,
      setPopoverVisible: M,
      handleClickBlock: O
    };
  };
  var languageCodeEnumUtils = require("language-code-enum-utils") /*id: 964571*/;
  let $ = [languageCodeEnumUtils.LanguageCodeEnum.ZH, languageCodeEnumUtils.LanguageCodeEnum.JA, languageCodeEnumUtils.LanguageCodeEnum.KO];
  let k = [languageCodeEnumUtils.LanguageCodeEnum.EN, languageCodeEnumUtils.LanguageCodeEnum.ES, languageCodeEnumUtils.LanguageCodeEnum.DE, languageCodeEnumUtils.LanguageCodeEnum.FR, languageCodeEnumUtils.LanguageCodeEnum.ID, languageCodeEnumUtils.LanguageCodeEnum.IT, languageCodeEnumUtils.LanguageCodeEnum.MS, languageCodeEnumUtils.LanguageCodeEnum.PT, languageCodeEnumUtils.LanguageCodeEnum.VI];
  let P = [languageCodeEnumUtils.LanguageCodeEnum.RU];
  let Z = [languageCodeEnumUtils.LanguageCodeEnum.AR];
  let M = [{
    languages: $,
    maxLineHeight: 1.8
  }, {
    languages: k,
    maxLineHeight: 1.5
  }, {
    languages: P,
    maxLineHeight: 1.7
  }, {
    languages: Z,
    maxLineHeight: 1.7
  }, {
    languages: [languageCodeEnumUtils.LanguageCodeEnum.TH],
    maxLineHeight: 1.9
  }];
  let L = e => {
    let {
      targetLanguage: t,
      currentText: n
    } = e;
    let r = reactCoreLibraryReexport.useMemo(() => {
      if (!t) {
        return 1.8;
      }
      let e = M.find(e => {
        let {
          languages: n
        } = e;
        return n.includes(t);
      });
      if (e) {
        return e.maxLineHeight;
      } else {
        return 1.8;
      }
    }, [t]);
    return reactCoreLibraryReexport.useMemo(() => ({
      minFontSize: 50,
      maxFontSize: 100,
      minLineHeight: 1.1,
      maxLineHeight: r,
      text: n
    }), [r, n]);
  };
  let F = typeof window != "undefined" && window.document ? reactCoreLibraryReexport.useLayoutEffect : reactCoreLibraryReexport.useEffect;
  function I({
    maxFontSize: e = 100,
    minFontSize: t = 20,
    maxLineHeight: n = 1.8,
    minLineHeight: r = 1.1,
    onFinish: a,
    onStart: l,
    onFailed: i,
    text: o,
    resolution: s = 5,
    isFontLoaded: u
  } = {}) {
    let d = reactCoreLibraryReexport.useCallback(() => ({
      calcKey: 0,
      fontSize: e,
      fontSizePrev: t,
      fontSizeMax: e,
      fontSizeMin: t,
      lineHeight: n
    }), [e, t]);
    let h = reactCoreLibraryReexport.useRef(null);
    let p = reactCoreLibraryReexport.useRef();
    let f = reactCoreLibraryReexport.useRef(false);
    let g = reactCoreLibraryReexport.useRef(false);
    let [m, v] = reactCoreLibraryReexport.useState(false);
    let [x, b] = reactCoreLibraryReexport.useState(d);
    let {
      calcKey: w,
      fontSize: y,
      fontSizeMax: S,
      fontSizeMin: N,
      fontSizePrev: C,
      lineHeight: T
    } = x;
    let _ = null;
    let [j] = reactCoreLibraryReexport.useState(() => new ResizeObserver(() => {
      _ = window.requestAnimationFrame(() => {
        if (!f.current && !g.current) {
          if (l != null) {
            l();
          }
          f.current = true;
          b({
            ...d(),
            calcKey: w + 1
          });
        }
      });
    }));
    reactCoreLibraryReexport.useEffect(() => {
      if (h.current) {
        j.observe(h.current);
      }
      return () => {
        if (_) {
          window.cancelAnimationFrame(_);
        }
        j.disconnect();
      };
    }, [_, j]);
    reactCoreLibraryReexport.useEffect(() => {
      if (w !== 0 && !f.current) {
        if (o !== p.current) {
          g.current = false;
          if (l != null) {
            l();
          }
          b({
            ...d(),
            calcKey: w + 1
          });
        }
        p.current = o;
      }
    }, [w, d, o, l]);
    reactCoreLibraryReexport.useEffect(() => {
      if ((f.current || g.current) && u) {
        g.current = false;
        f.current = true;
        if (l != null) {
          l();
        }
        b(e => ({
          ...d(),
          calcKey: e.calcKey + 1
        }));
      }
    }, [u]);
    F(() => {
      let e;
      if (w === 0) {
        return;
      }
      let t = Math.abs(y - C) <= s;
      let n = !!h.current && (h.current.scrollHeight > h.current.offsetHeight || h.current.scrollWidth > h.current.offsetWidth);
      let l = n && y === C;
      let o = y > C;
      if (t) {
        if (l) {
          f.current = false;
          g.current = true;
          v(true);
          if (i != null) {
            i();
          }
        } else if (n) {
          if (T > r) {
            b({
              calcKey: w,
              fontSize: y,
              fontSizeMax: S,
              fontSizeMin: N,
              fontSizePrev: C,
              lineHeight: (T * 10 - 1) / 10
            });
          } else {
            b({
              fontSize: o ? C : N,
              fontSizeMax: S,
              fontSizeMin: N,
              fontSizePrev: C,
              calcKey: w,
              lineHeight: T
            });
          }
        } else {
          f.current = false;
          g.current = true;
          v(false);
          if (a != null) {
            a(y);
          }
        }
        return;
      }
      let c = S;
      let u = N;
      if (n) {
        if (T > r) {
          b({
            calcKey: w,
            fontSize: y,
            fontSizeMax: S,
            fontSizeMin: N,
            fontSizePrev: C,
            lineHeight: (T * 10 - 1) / 10
          });
          return;
        }
        e = o ? C - y : N - y;
        c = Math.min(S, y);
      } else {
        e = o ? S - y : C - y;
        u = Math.max(N, y);
      }
      b({
        calcKey: w,
        fontSize: y + e / 2,
        fontSizeMax: c,
        fontSizeMin: u,
        fontSizePrev: y,
        lineHeight: T
      });
    }, [w, y, S, N, C, T, a, h, s]);
    return {
      fontSize: y,
      lineHeight: T,
      ref: h,
      isFinallyOverflow: m
    };
  }
  var katexMathjaxTexComponent = require("katex-mathjax-tex-component") /*id: 809253*/;
  let W = e => reactJsxRuntimeCoreReexport.jsx(katexMathjaxTexComponent.KatexMathjaxTex, {
    ...e,
    className: d(e.className, e.mode === "display" && "math-block")
  });
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var pdfScrollViewStore = require("pdf-scroll-view-store") /*id: 234902*/;
  let z = e => {
    let {
      needLoad: t
    } = e;
    let n = pdfScrollViewStore.pdfStore(e => e.isTranslationFontLoaded, deepEqualityUtil_1.isDeepEqual);
    reactCoreLibraryReexport.useEffect(() => {
      let e;
      let n = async function (t = 0) {
        let r = new Promise((r, a) => {
          document.fonts.load("12px \"Noto Serif SC\"", "中文").then(l => {
            if (l.length >= 1) {
              r(true);
            } else if (t >= 120) {
              a(Error("check font timeout"));
            } else {
              e = setTimeout(() => n(++t), 500);
            }
          }, a);
        });
        try {
          await r;
          pdfScrollViewStore.pdfStore.getState().setIsTranslationFontLoaded(true);
        } catch (e) {}
      };
      let {
        isCheckingTranslationFontLoaded: r,
        isTranslationFontLoaded: a,
        setIsCheckingTranslationFontLoaded: l
      } = pdfScrollViewStore.pdfStore.getState();
      if (t && !r && !a) {
        l(true);
        n();
        return () => {
          clearTimeout(e);
        };
      }
    }, []);
    return n;
  };
  let H = () => (window.devicePixelRatio || 1) * (window.screen.width || 1920) < 2560;
  let D = translateServiceSelector.translateServiceEnum.LLM;
  let V = e => {
    let {
      className: t,
      style: n,
      fontSize: r = 10,
      isBold: a = false,
      isItalic: l = false,
      text: i,
      value: o = D,
      textColor: s,
      backgroundColor: u,
      onLoadAITranslate: p,
      onClick: f,
      getPopupContainer: g,
      aiTranslateIconSrc: m,
      targetLanguage: v
    } = e;
    let {
      currentText: x,
      popover: b,
      popoverVisible: w,
      handleClickBlock: y
    } = R({
      text: i,
      onLoadAITranslate: p,
      value: o,
      aiTranslateIconSrc: m,
      getPopupContainer: g,
      onClick: f
    });
    let S = reactCoreLibraryReexport.useMemo(() => v === languageCodeEnumUtils.LanguageCodeEnum.ZH && H(), [v]);
    let N = z({
      needLoad: v === languageCodeEnumUtils.LanguageCodeEnum.ZH && !S
    });
    let {
      ref: C,
      fontSize: T,
      lineHeight: $,
      isFinallyOverflow: k
    } = I({
      ...L({
        targetLanguage: v,
        currentText: x
      }),
      isFontLoaded: N
    });
    let P = reactCoreLibraryReexport.useMemo(() => v === languageCodeEnumUtils.LanguageCodeEnum.ZH ? S ? _["zh-degrade-font"] : _["zh-font"] : v === languageCodeEnumUtils.LanguageCodeEnum.EN ? _["en-font"] : undefined, [v, S]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        ref: C,
        className: d(_["container-new"], k && _["overflow-container"], w && _["hover-container"], t),
        style: {
          ...n,
          "--md-text-color": s,
          "--md-background-color": u,
          "--base-font-size": `${T * r / 100}px`,
          "--base-font-weight": a ? "bold" : "normal",
          "--base-font-style": l ? "italic" : "normal",
          "--base-line-height": $
        },
        onClick: y,
        children: reactJsxRuntimeCoreReexport.jsx(mdBoxLazyComponentsModule.lazyMdBoxComponent, {
          markDown: x,
          theme: "samantha",
          className: d(_["translate-mdbox-wrap"], P),
          slots: {
            Tex: W
          }
        })
      }), b]
    });
  };
  let X = translateServiceSelector.translateServiceEnum.LLM;
  let U = e => {
    let {
      className: t,
      style: n,
      fontSize: r = 10,
      isBold: a = false,
      isItalic: l = false,
      text: i,
      value: o = X,
      onLoadAITranslate: s,
      onClick: c,
      getPopupContainer: u,
      aiTranslateIconSrc: p
    } = e;
    let {
      currentText: f,
      popover: g,
      setPopoverVisible: m
    } = R({
      text: i,
      onLoadAITranslate: s,
      value: o,
      aiTranslateIconSrc: p,
      getPopupContainer: u,
      onClick: c
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: d(_.container, t),
        style: {
          ...n,
          "--base-font-size": `${r}px`,
          "--base-font-weight": a ? "bold" : "normal",
          "--base-font-style": l ? "italic" : "normal"
        },
        onClick: e => {
          e.stopPropagation();
          m(true);
          if (c != null) {
            c();
          }
        },
        children: reactJsxRuntimeCoreReexport.jsx(mdBoxLazyComponentsModule.lazyMdBoxComponent, {
          markDown: f,
          theme: "samantha"
        })
      }), g]
    });
  };
  let q = ["title", "sec", "sub_sec", "sub_sub_sec"];
  let Q = (e, t) => t.length ? e.map(e => {
    if (e.label && q.includes(e.label)) {
      let [,, n, r] = e.area;
      let l = (t == null ? undefined : t.filter(t => {
        let {
          area: n
        } = t;
        return !deepEqualUtil_1.deepEqual(n, e.area);
      })) || [];
      if (l.some(t => {
        let {
          area: n
        } = t;
        return pdfBoundsUtils.checkBoundsOverlap(n, e.area);
      })) {
        return e;
      }
      let i = l.filter(t => {
        let {
          area: n
        } = t;
        return n[1] > r && pdfBoundsUtils.checkHorizontalOverlap(n, e.area);
      });
      r = i.length > 0 ? Math.min(...i.map(e => {
        let {
          area: t
        } = e;
        return t[1];
      })) : Math.max(r, 0.9);
      let o = l.filter(t => {
        let {
          area: r
        } = t;
        return r[0] > n && pdfBoundsUtils.checkVerticalOverlap(r, e.area);
      });
      n = o.length > 0 ? Math.min(...o.map(e => {
        let {
          area: t
        } = e;
        return t[0];
      })) : Math.max(n, 0.9);
      return {
        ...e,
        area: [e.area[0], e.area[1], n, r]
      };
    }
    return e;
  }) : e;
  let Y = (e, t) => ({
    page: e,
    area: t.area,
    content: t.loading ? reactJsxRuntimeCoreReexport.jsx("div", {
      className: o["translate-loading-overlay"]
    }) : reactJsxRuntimeCoreReexport.jsx("div", {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: reactJsxRuntimeCoreReexport.jsx("img", {
        style: {
          width: "100%",
          height: "100%",
          objectFit: "contain"
        },
        src: xssContentSanitizer.sanitizeUrl(t.url, null, {
          logType: "js.href/src",
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$dFcHNX$mRSZ*1NelNtcE1Na3B3Wldre*FtSXlNW*RpTWpWc1ltN$Nla3d6%W10-WF%RjZX$E5LZ*1KS*Qz%mti$3hzWkhrNWIySXlPWEpqZ$Rrd1kyM%dk$015Z%doa1Ix$jJaRmhT-0dKS$R-WmhWelZy$2xobmRX%kl%alJa$0$wd$p*aE5Q%T09"
        })
      })
    }),
    loading: t.loading,
    overlayClassName: o["translate-image-overlay"]
  });
  let G = e => {
    let {
      page: t,
      translateItem: n,
      enableTranslateOptimize: r,
      sourceLanguage: a,
      targetLanguage: i,
      fetchAITranslate: s,
      onHighlight: c,
      getPopupContainer: u,
      aiTranslateIconSrc: d,
      translateService: h
    } = e;
    let {
      area: p,
      text: f,
      sourceText: g,
      fontSize: m,
      isBold: v,
      isItalic: x,
      loading: b
    } = n;
    let w = objectPathGetDefault.getObjectPathDefault(n, "textColor", undefined);
    let y = objectPathGetDefault.getObjectPathDefault(n, "backgroundColor", undefined);
    return {
      page: t,
      area: p,
      content: b ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: o["translate-loading-overlay"]
      }) : reactJsxRuntimeCoreReexport.jsx(r ? V : U, {
        text: f,
        fontSize: m,
        isBold: v,
        isItalic: x,
        targetLanguage: i,
        onLoadAITranslate: s && (() => s({
          text: g,
          sourceLanguage: a,
          targetLanguage: i
        })),
        onClick: () => {
          if (c != null) {
            c([{
              page: t,
              area: p
            }]);
          }
        },
        getPopupContainer: u,
        aiTranslateIconSrc: d,
        value: h,
        textColor: w,
        backgroundColor: y
      }),
      loading: b,
      overlayClassName: o["translate-overlay"]
    };
  };
  let J = e => {
    let {
      currentDocMap: t,
      sourceLanguage: n,
      targetLanguage: r,
      fetchAITranslate: a,
      onHighlight: l,
      getPopupContainer: o,
      aiTranslateIconSrc: c,
      translateService: u,
      ocrPageChunks: d,
      enableTranslateOptimize: h
    } = e;
    let p = [];
    if (!t) {
      return [];
    }
    for (let e of getOwnKeys.getOwnKeys(t)) {
      var g;
      let i = Number(e);
      let v = ((g = t[i]) === null || g === undefined ? undefined : g.items?.data) || [];
      if (h) {
        let e = ((d == null ? undefined : d[i - 1]?.text_blocks) || []).map(e => {
          let {
            label: t,
            norm_box: n
          } = e;
          return {
            label: t,
            area: pdfBoundsUtils.extractCoordinates(n || {})
          };
        });
        if (e == null ? undefined : e.length) {
          v = Q(v, e);
        }
      }
      p.push(...v.flatMap(e => {
        var t;
        if ("url" in e) {
          return [Y(i, e), ...(((t = e.textBlocks) === null || t === undefined ? undefined : t.map(e => G({
            page: i,
            translateItem: e,
            enableTranslateOptimize: h,
            sourceLanguage: n,
            targetLanguage: r,
            fetchAITranslate: a,
            onHighlight: l,
            getPopupContainer: o,
            aiTranslateIconSrc: c,
            translateService: u
          }))) ?? [])];
        } else {
          return G({
            page: i,
            translateItem: e,
            enableTranslateOptimize: h,
            sourceLanguage: n,
            targetLanguage: r,
            fetchAITranslate: a,
            onHighlight: l,
            getPopupContainer: o,
            aiTranslateIconSrc: c,
            translateService: u
          });
        }
      }));
    }
    return p;
  };
  require.d(exports, {
    generatePdfOverlays: function () {
      return J;
    }
  });
}