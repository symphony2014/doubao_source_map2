// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'AcademicSourceCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 889624
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var externalLinkSafetyTransformer = require("external-link-safety-transformer") /*id: 844886*/;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var rtlFileExportIcon_1 = require("rtl-file-export-icon_1") /*id: 104751*/;
  var rtlIconComponent_2 = require("rtl-icon-component_2") /*id: 675725*/;
  var chatSettingsOutlinedIcon = require("chat-settings-outlined-icon") /*id: 8717*/;
  var academicCitationDialogProvider = require("academic-citation-dialog-provider") /*id: 703881*/;
  var m = {
    "academic-source-card": "academic-source-card-mGcfDV",
    "view-only": "view-only-iuYFvO",
    "academic-source-card-header": "academic-source-card-header-hs1di2",
    "academic-source-card-header-title": "academic-source-card-header-title-Ivap9T",
    "academic-source-card-content": "academic-source-card-content-v31z4M",
    "academic-source-card-footer": "academic-source-card-footer-ggyy1M",
    "academic-source-card-footer-content": "academic-source-card-footer-content-DZ7ysK",
    "academic-source-card-footer-quote": "academic-source-card-footer-quote-wvRczi",
    "academic-source-card-footer-quote-item": "academic-source-card-footer-quote-item-zhHL3v",
    divider: "divider-cl4fjF",
    "info-text-wrapper": "info-text-wrapper-yVYBD1",
    "grid-container": "grid-container-kFn1pH",
    "grid-info": "grid-info-NWs5M6",
    "grid-empty": "grid-empty-CQxK3y",
    "grid-quote": "grid-quote-PY_dhe",
    "grid-container-sm": "grid-container-sm-_foyPr",
    "card-index": "card-index-Oc6L8T"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    var o;
    var _;
    var y;
    let {
      className: x,
      style: w,
      source: C,
      showFrom: S,
      index: $,
      viewOnly: T,
      t: R,
      onTrackEvent: j,
      onOpenAcademicSearchCard: E
    } = e;
    let {
      ref: N,
      width: I
    } = resizeObserverHooks.useResizeObserverEx();
    let {
      ref: P,
      width: Z
    } = resizeObserverHooks.useResizeObserverEx();
    let {
      ref: F,
      width: M
    } = resizeObserverHooks.useResizeObserverEx();
    let [O, W] = reactCoreLibraryReexport.useState(false);
    let [B, A] = reactCoreLibraryReexport.useState(0);
    let [L, D] = reactCoreLibraryReexport.useState("");
    let z = S === "search_reference" ? "search_reference" : "chat";
    let H = (C == null ? undefined : C.citation_datas) && C.citation_datas.length > 0;
    let V = !!(C == null ? undefined : C.home_page_url);
    let {
      onAcademicQuoteClick: X,
      renderAcademicQuoteDialog: U
    } = academicCitationDialogProvider.useAcademicCitationDialog({
      click_from: "test",
      t: R,
      onTrackEvent: j
    });
    let [J, K] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false,
      threshold: 1
    });
    let q = [];
    if (V) {
      q.unshift({
        icon: reactJsxRuntimeCoreReexport.jsx(rtlFileExportIcon_1.FileExportIcon, {
          className: "text-16"
        }),
        name: "skill_search_openweb",
        key: "open_url"
      });
    }
    if (H) {
      q.unshift({
        icon: reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_2.RtlIcon, {
          className: "text-16"
        }),
        name: "skill_search_ref",
        key: "quote"
      });
    }
    let G = e => {
      if (e.key === "quote") {
        if (X != null) {
          X({
            visible: true,
            click_from: "test",
            url: C == null ? undefined : C.pdf_url,
            citationDatas: C.citation_datas
          });
        }
        if (j != null) {
          j("search_reference_click", {
            current_page: z,
            search_type: "academic_search",
            show_from: S,
            search_url: C == null ? undefined : C.pdf_url,
            click_type: "get_reference"
          });
        }
      } else if (C == null ? undefined : C.home_page_url) {
        window.open(xssContentSanitizer.sanitizeUrl(externalLinkSafetyTransformer.ExternalLinkTransformer.transform(C.home_page_url), null, {
          logType: "js.window.location",
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWXpK$2FHTnR%bTlNTTA1N$d-az$hb%l5T$hka%1q$nNZbT$SZ*xsWFRta*FSM$owW$ZkTmRHTXlP$EZq-l%1c1R*ZE9hR050$$haaFZ6$nJXb*huZFdSS$Rq%lpXRXB1WkZoTlBRPT0"
        }));
        if (j != null) {
          j("search_reference_click", {
            current_page: z,
            search_type: "academic_search",
            show_from: S,
            search_url: C.home_page_url,
            click_type: "to_reference_page"
          });
        }
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (K) {
        if (j != null) {
          j("search_reference_show", {
            search_type: "academic_search",
            show_from: S,
            search_url: C == null ? undefined : C.home_page_url,
            current_page: z
          });
        }
        if (j != null) {
          j("search_singlecard_show", {
            search_url: C == null ? undefined : C.home_page_url,
            search_type: "academic_search",
            card_type: "doubao_search",
            content_type: "webpage",
            show_from: "chat",
            whether_use_deep_thinking: "no"
          });
        }
      }
    }, [K]);
    reactCoreLibraryReexport.useEffect(() => {
      if (I && M && Z && (I + M + 34 >= Z && !O && (A(Z), W(true)), Z > B)) {
        W(false);
        D((C == null ? undefined : C.title) ?? "");
      }
    }, [Z, M, I, L]);
    reactCoreLibraryReexport.useEffect(() => {
      D(String(Math.random()));
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        ref: J,
        className: "w-full",
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          ref: P,
          style: w,
          onClick: () => {
            if (!T) {
              if (E != null) {
                E(C);
              }
              if (j != null) {
                j("search_reference_click", {
                  current_page: z,
                  search_type: "academic_search",
                  show_from: S,
                  search_url: C == null ? undefined : C.home_page_url,
                  click_type: "to_search_reference"
                });
              }
              if (j != null) {
                j("search_singlecard_click", {
                  search_url: C == null ? undefined : C.home_page_url,
                  search_type: "academic_search",
                  card_type: "doubao_search",
                  content_type: "webpage",
                  click_from: "chat",
                  whether_use_deep_thinking: "no"
                });
              }
            }
          },
          className: l(m["academic-source-card"], T && m["view-only"], x),
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: m["academic-source-card-header"],
            children: [reactJsxRuntimeCoreReexport.jsx(chatSettingsOutlinedIcon.ChatSettingsOutlined, {
              className: "pt-4 text-16 text-s-color-text-secondary"
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: m["academic-source-card-header-title"],
              children: C == null ? undefined : C.title
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: m["card-index"],
              children: $
            })]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: m["academic-source-card-content"],
            children: (C == null ? undefined : C.abstract) ?? R("skill_search_unableinfo")
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: l(m["academic-source-card-footer"], {
              [m["grid-container"]]: !O,
              [m["grid-container-sm"]]: O
            }),
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              ref: N,
              className: l(m["academic-source-card-footer-content"], m["grid-info"]),
              children: [(C == null ? undefined : C.journal?.name) && reactJsxRuntimeCoreReexport.jsx("span", {
                className: m["info-text-wrapper"],
                children: C.journal.name
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: l(m.divider, {
                  hidden: !(C == null ? undefined : (o = C.authors) === null || o === undefined ? undefined : o[0]?.name) || !(C == null ? undefined : C.journal?.name)
                })
              }), (C == null ? undefined : (_ = C.authors) === null || _ === undefined ? undefined : _[0]?.name) ? reactJsxRuntimeCoreReexport.jsx("span", {
                className: m["info-text-wrapper"],
                children: C.authors[0].name
              }) : null, reactJsxRuntimeCoreReexport.jsx("div", {
                className: l(m.divider, {
                  hidden: !(C == null ? undefined : C.citation_count) || !(C == null ? undefined : (y = C.authors) === null || y === undefined ? undefined : y[0]?.name)
                })
              }), (C == null ? undefined : C.citation_count) && C.citation_count !== 0 ? reactJsxRuntimeCoreReexport.jsx("span", {
                className: m["info-text-wrapper"],
                children: C.citation_count && R("skill_search_beref", {
                  postProcess: "sprintf",
                  sprintf: [C.citation_count]
                })
              }) : null, reactJsxRuntimeCoreReexport.jsx("div", {
                className: l(m.divider, {
                  hidden: !(C == null ? undefined : C.year) || !(C == null ? undefined : C.citation_count)
                })
              }), (C == null ? undefined : C.year) ? reactJsxRuntimeCoreReexport.jsx("span", {
                className: m["info-text-wrapper"],
                children: C.year
              }) : null]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: m["grid-empty"]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              ref: F,
              className: l(m["academic-source-card-footer-quote"], m["grid-quote"]),
              children: q.map((e, t) => reactJsxRuntimeCoreReexport.jsxs("div", {
                onClick: t => {
                  t.stopPropagation();
                  G(e);
                },
                className: m["academic-source-card-footer-quote-item"],
                children: [e.icon, reactJsxRuntimeCoreReexport.jsx("div", {
                  className: "whitespace-nowrap",
                  children: R(e.name)
                })]
              }, t))
            })]
          })]
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "h-0 w-0",
        children: U == null ? undefined : U()
      })]
    });
  };
  require.d(exports, {
    AcademicSourceCard: function () {
      return f;
    }
  });
}