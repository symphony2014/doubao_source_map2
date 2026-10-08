// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'ChatResponseTable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58948.b1d5109e.js
         * chunkId: 58948
         * moduleId: 127927
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var dayjsDateLibrary = require("dayjs-date-library") /*id: 349712*/;
  var l = dayjsDateLibrary;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var doubaoConfigConstants_1 = require("doubao-config-constants_1") /*id: 234080*/;
  var checkCircleIcon = require("check-circle-icon") /*id: 724493*/;
  var ringOutlinedIcon = require("ring-outlined-icon") /*id: 112124*/;
  var reactDownloadIcon = require("react-download-icon") /*id: 391488*/;
  var reactSvgIcon_2 = require("react-svg-icon_2") /*id: 975719*/;
  var closeIconComponent_1_1 = require("close-icon-component_1_1") /*id: 259726*/;
  var tableScrollContainerHook = require("table-scroll-container-hook") /*id: 446359*/;
  var reactContextHelper = require("react-context-helper") /*id: 229399*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatMessageUtils_1 = require("chat-message-utils_1") /*id: 711513*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let S = e => chatMessageStoreFactory.createMessageStore(t => {
    let n = t.messageLinkMap[e];
    if (!(n == null ? undefined : n.length)) {
      return;
    }
    let i = t.messageMap[e] || {};
    let r = t.localMessageMap[e] || {};
    for (let e = n.length - 1; e >= 0; e--) {
      let t = n[e];
      let o = t.isLocalMessage ? r[t.messageId] : i[t.messageId];
      if (o && messageContentTypeAndStatusChecker.z_e(o, false)) {
        return o;
      }
    }
  }, deepEqualityUtil.deepEqual);
  let k = e => {
    let {
      inView: t,
      buttonsInView: n,
      message: i,
      isExpanded: r,
      isLastMessage: o
    } = e;
    let s = reactCoreLibraryReexport.useMemo(() => {
      if (i) {
        return {
          skill_id: chatMessageUtils_1.getSkillIdWithDefault(i) ?? "",
          skill_name: chatMessageUtils_1.getSkillIdNoDefault(i) ?? "",
          message_id: i.message_id,
          conversation_id: i.conversation_id,
          bot_id: i.bot_id,
          section_id: i.section_id,
          is_current_conv_last_message: +!!o,
          is_full_screen: +!!r
        };
      }
    }, [i, o, r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (t && i && s) {
        teaAnalyticsEventTracker.trackEvent("response_table_show", {
          has_content: true,
          is_last_message: o != null && o,
          skill_id: s.skill_id,
          skill_name: s.skill_name,
          message_id: s.message_id,
          conversation_id: s.conversation_id,
          bot_id: s.bot_id,
          section_id: s.section_id
        });
      }
    }, [t, i, s]);
    reactCoreLibraryReexport.useEffect(() => {
      if (n && i && s) {
        ["copy", "download"].forEach(e => {
          teaAnalyticsEventTracker.trackEvent("response_table_button_action_show", {
            ...s,
            button_name: e
          });
        });
      }
    }, [n, i, s]);
    reactCoreLibraryReexport.useEffect(() => {
      if (n && i && s) {
        let e = r ? "close" : "full_screen";
        teaAnalyticsEventTracker.trackEvent("response_table_button_action_show", {
          ...s,
          button_name: e
        });
      }
    }, [n, i, r, s]);
    return {
      trackButtonClick: e => {
        if (i && s) {
          teaAnalyticsEventTracker.trackEvent("response_table_button_action_click", {
            ...s,
            button_name: e
          });
        }
      }
    };
  };
  var N = {
    "table-wrapper": "table-wrapper-wG0rS7",
    "table-header": "table-header-qH9Ajf",
    title: "title-JhOBP1",
    actions: "actions-XLKatx",
    "action-btn": "action-btn-NhM0gh",
    disabled: "disabled-VhgIH7",
    "table-body": "table-body-JE6MJT",
    "two-columns": "two-columns-Syt5I6",
    "three-columns": "three-columns-RhonQR",
    "many-columns": "many-columns-Mk_66C",
    expanded: "expanded-JZKZ4x"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let T = doubaoConfigConstants_1.productName === "Dola";
  let j = new Set();
  let O = e => {
    let {
      children: n,
      className: s,
      message: c,
      ...p
    } = e;
    let w = reactCoreLibraryReexport.useRef(null);
    let [x, C] = reactCoreLibraryReexport.useState(false);
    let [E, _] = reactCoreLibraryReexport.useState(0);
    let [O, I] = reactCoreLibraryReexport.useState(() => c != null && !!c.message_id && j.has(c.message_id));
    let M = reactContextHelper.useContextHook();
    let P = i18nTranslationUtils.useTranslationWithFallback();
    let Z = S((c == null ? undefined : c.conversation_id) ?? "");
    let D = reactCoreLibraryReexport.useMemo(() => !!Z && !!c && (Z.message_id === c.message_id || !!Z.local_message_id && Z.local_message_id === c.local_message_id), [Z, c]);
    let {
      ref: L,
      inView: $
    } = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      threshold: 0
    });
    let {
      ref: W,
      inView: B
    } = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      threshold: 0
    });
    let {
      trackButtonClick: F
    } = k({
      inView: !!$,
      buttonsInView: B,
      message: c,
      isExpanded: O,
      isLastMessage: D
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!O) {
        return;
      }
      let e = e => {
        if (e.key === "Escape") {
          I(false);
          if (c == null ? undefined : c.message_id) {
            j.delete(c.message_id);
          }
        }
      };
      window.addEventListener("keydown", e);
      return () => window.removeEventListener("keydown", e);
    }, [O, c == null ? undefined : c.message_id]);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (!w.current) {
        _(0);
        return;
      }
      let t = w.current.querySelector("table");
      if (!t) {
        _(0);
        return;
      }
      let n = t.querySelector("tr");
      let i = n == null ? undefined : n.querySelectorAll("th, td");
      _((i == null ? undefined : i.length) ?? 0);
    }, [n, O, M]);
    let H = reactCoreLibraryReexport.useCallback(async () => {
      if (M || !w.current) {
        return;
      }
      let e = w.current.querySelector("table");
      if (e) {
        F("copy");
        try {
          let t = `
        <html>
          <head>
            <meta charset='utf-8'>
            <style>
              table { border-collapse: collapse; width: 100%; }
              th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
            </style>
          </head>
          <body>${e.outerHTML}</body>
        </html>
      `;
          let n = Array.from(e.querySelectorAll("tr")).map(e => Array.from(e.querySelectorAll("th, td")).map(e => (e.textContent || "").replace(/\t/g, " ").replace(/\n/g, " ")).join("\t")).join("\n");
          if (navigator.clipboard && navigator.clipboard.write) {
            let e = new ClipboardItem({
              "text/html": new Blob([t], {
                type: "text/html"
              }),
              "text/plain": new Blob([n], {
                type: "text/plain"
              })
            });
            await navigator.clipboard.write([e]);
          } else {
            await navigator.clipboard.writeText(n);
          }
          C(true);
          setTimeout(() => C(false), 2000);
        } catch (e) {}
      }
    }, [M, F]);
    let z = reactCoreLibraryReexport.useCallback(() => {
      if (M || !w.current) {
        return;
      }
      let e = w.current.querySelector("table");
      if (!e) {
        return;
      }
      F("download");
      let t = Array.from(e.querySelectorAll("tr")).map(e => Array.from(e.querySelectorAll("th, td")).map(e => {
        let t = (e.textContent || "").replace(/"/g, "\"\"");
        if (t.search(/("|,|\n)/g) >= 0) {
          t = `"${t}"`;
        }
        return t;
      }).join(",")).join("\n");
      let n = l();
      let r = "";
      r = T ? `Sheet_${n.format("DDMMYYYY")}.csv` : `\u{8868}\u{683C}_${n.format("YYYYMMDD")}.csv`;
      let o = new Blob([`\ufeff${t}`], {
        type: "text/csv;charset=utf-8;"
      });
      let a = document.createElement("a");
      let s = URL.createObjectURL(o);
      a.setAttribute("href", xssContentSanitizer.sanitizeUrl(s, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*1KWFJub*hNbEoyWkRJM*RHTnRWblZh%jFaN$RETlNhRmx0Z%d4T$dFSnpaRmRr-0dKcE9-Qmli$kpzWl$NM%1HTXphR2hq-ldReFkz-zlQ%T09"
      }));
      a.setAttribute("download", r);
      a.style.visibility = "hidden";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(s);
    }, [M, F]);
    let V = reactCoreLibraryReexport.useCallback(() => {
      if (!M) {
        F(O ? "close" : "full_screen");
        I(e => {
          let t = !e;
          if (c == null ? undefined : c.message_id) {
            if (t) {
              j.add(c.message_id);
            } else {
              j.delete(c.message_id);
            }
          }
          return t;
        });
      }
    }, [M, O, F, c == null ? undefined : c.message_id]);
    let U = reactCoreLibraryReexport.useCallback(e => {
      w.current = e;
      L(e);
      if (O && e) {
        e.focus({
          preventScroll: true
        });
      }
    }, [L, O]);
    let X = e => reactJsxRuntimeCoreReexport.jsxs("div", {
      className: d(N["table-wrapper"], {
        [N.expanded]: e,
        [N["two-columns"]]: E === 2,
        [N["three-columns"]]: E === 3,
        [N["many-columns"]]: E >= 4
      }),
      ref: e === O ? U : undefined,
      tabIndex: e ? -1 : undefined,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: N["table-header"],
        ref: e === O ? W : undefined,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: N.title,
          children: P("table_header_title", {
            defaultValue: "表格"
          })
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: N.actions,
          children: [reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            content: x ? P("chat_table_toast_copied") : P("chat_table_cta_tooltip_copy"),
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: d(N["action-btn"], {
                [N.disabled]: M
              }),
              onClick: H,
              children: x ? reactJsxRuntimeCoreReexport.jsx(checkCircleIcon.CheckCircleIcon, {}) : reactJsxRuntimeCoreReexport.jsx(ringOutlinedIcon.RingOutlinedIcon, {})
            })
          }), reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            content: P("chat_table_cta_tooltip_download"),
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: d(N["action-btn"], {
                [N.disabled]: M
              }),
              onClick: z,
              children: reactJsxRuntimeCoreReexport.jsx(reactDownloadIcon.DownloadIcon, {})
            })
          }), !e && reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            content: P("chat_table_cta_tooltip_fullScreen"),
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: d(N["action-btn"], {
                [N.disabled]: M
              }),
              onClick: V,
              children: reactJsxRuntimeCoreReexport.jsx(reactSvgIcon_2.SvgIcon, {})
            })
          }), e && reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            content: P("chat_table_cta_tooltip_close"),
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: N["action-btn"],
              onClick: V,
              children: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1_1.CloseIcon, {})
            })
          })]
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: N["table-body"],
        children: reactJsxRuntimeCoreReexport.jsx(tableScrollContainerHook.TableScrollContainer, {
          className: s,
          ...p,
          children: n
        })
      })]
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [X(false), O && reactDomEntryWrapper.createPortal(X(true), document.body)]
    });
  };
  require.d(exports, {
    ChatResponseTable: function () {
      return O;
    }
  });
}