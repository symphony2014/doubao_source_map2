// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'DocCommentThread'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 276299
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var arrayUniqByMatcher = require("array-uniq-by-matcher") /*id: 898750*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var useClickOutside = require("use-click-outside") /*id: 87494*/;
  var dateFormatUtils_1 = require("date-format-utils_1") /*id: 179094*/;
  var avatarComponent = require("avatar-component") /*id: 16165*/;
  var businessSkillBar = require("business-skill-bar") /*id: 342181*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var iconChevronDown = require("icon-chevron-down") /*id: 521832*/;
  var chevronDownIconComponent = require("chevron-down-icon-component") /*id: 634936*/;
  var checkCircleFilledIcon = require("check-circle-filled-icon") /*id: 259842*/;
  var documentIconComponent = require("document-icon-component") /*id: 886397*/;
  var shuffleIconRtlComponent = require("shuffle-icon-rtl-component") /*id: 297545*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactUseChangedRef = require("react-use-changed-ref") /*id: 284850*/;
  var contentTypeConstants = require("content-type-constants") /*id: 937300*/;
  let $ = e => e.flatMap(e => e.content.map(e => {
    if (e.type === contentTypeConstants.contentTypes.DocLink) {
      return e.token;
    }
  }).filter(Boolean));
  let E = (e, n) => {
    let r = reactUseChangedRef.useChangedRef($(e), deepEqualUtil_1.deepEqual);
    let [i, a] = reactCoreLibraryReexport.useState({});
    let l = async () => {
      let e = await (n == null ? undefined : n(r));
      if (!deepEqualUtil_1.deepEqual(i, e)) {
        a(e || {});
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      l();
    }, [r]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = () => {
        if (document.visibilityState === "visible") {
          l();
        }
      };
      document.addEventListener("visibilitychange", e);
      return () => {
        document.removeEventListener("visibilitychange", e);
      };
    }, []);
    return {
      applyLatestDocLinkInfo: reactCoreLibraryReexport.useCallback(e => e.map(e => ({
        ...e,
        content: e.content.map(e => {
          if (e.type === contentTypeConstants.contentTypes.DocLink) {
            let n = i[e.token];
            return {
              ...e,
              title: (n == null ? undefined : n.title) || e.title,
              hasPermission: n == null ? undefined : n.hasPermission
            };
          }
          return e;
        })
      })), [i])
    };
  };
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  let N = (e, n) => {
    let r = e === `${n} `;
    let i = e.endsWith("\n") && e.slice(0, -1) === n;
    if (r || i) {
      let i = n.lastIndexOf("\n");
      let o = n.substring(i + 1);
      let a = o.match(/(\S+)$/);
      if (!a) {
        return e;
      }
      let l = a[0];
      let s = false;
      let c = o.substring(0, o.length - l.length).trim();
      if (c === "") {
        s = true;
      } else if (/[.!?]$/.test(c)) {
        s = true;
      }
      if (s && /^[a-z][a-z0-9]+$/.test(l)) {
        let e = l.charAt(0).toUpperCase() + l.slice(1);
        let i = n.lastIndexOf(l);
        return n.substring(0, i) + e + (r ? " " : "\n");
      }
    }
    return e;
  };
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var contentStructureUtils = require("content-structure-utils") /*id: 429644*/;
  let W = /https:\/\/[a-zA-Z0-9\-]+\.doubao\.com\/doc\/(?!invite|public|review)(?<token>[a-zA-Z0-9]+)(?:\?[^\s#]*)?(?:#[^\s]*)?/i;
  let O = RegExp(W.source, "gi");
  let F = e => {
    let {
      data: n,
      getEditorBlocks: r,
      getDocMetaInfos: i,
      onUpdateEditorBlocks: o
    } = e;
    let a = I(n);
    setTimeout(async () => {
      let n = D(r());
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "comment_reply_input_paste_start",
        meta: {
          doc_token_length: n.length
        }
      });
      let a = (await (i == null ? undefined : i(n))) ?? {};
      let l = B(r(), a);
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "comment_reply_input_paste_finish",
        meta: {
          doc_token_length: n.length
        }
      });
      o(l);
    }, 100);
    return contentStructureUtils.buildEditorContent(a);
  };
  let I = e => {
    let n = e.getData("text/plain");
    let r = e.getData("text/html");
    let i = [];
    if (r) {
      let e = new DOMParser().parseFromString(r, "text/html");
      let n = e => {
        var r;
        var s;
        if (e.nodeType === Node.TEXT_NODE) {
          let n = (r = e.textContent) === null || r === undefined ? undefined : r.trim();
          if (n) {
            i.push({
              type: contentTypeConstants.contentTypes.Text,
              text: n
            });
          }
        }
        if (e.nodeType === Node.ELEMENT_NODE) {
          let r = null;
          let p = null;
          if (e.tagName.toLowerCase() === "a" && e.dataset?.doclink === "true") {
            let n = safeJsonUtils.safeParse(e.dataset?.larkDoclink || "{}", {});
            r = (n == null ? undefined : n.url) ?? null;
            p = (n == null ? undefined : n.title) ?? null;
          } else if (e.tagName.toLowerCase() === "span" && e.dataset?.inlineType === "mention_doc") {
            let n = e.querySelector("a");
            r = (n == null ? undefined : n.dataset?.href) ?? null;
            p = (n == null ? undefined : n.textContent) ?? null;
          }
          let v = r == null ? undefined : (s = r.match(W)) === null || s === undefined ? undefined : s.groups?.token;
          if (!v || !r) {
            for (let r of Array.from(e.childNodes)) {
              n(r);
            }
            return;
          }
          i.push({
            type: contentTypeConstants.contentTypes.DocLink,
            url: r,
            title: p ?? r,
            token: v
          });
        }
      };
      n(e.body);
    } else if (n) {
      i.push({
        type: contentTypeConstants.contentTypes.Text,
        text: n
      });
    }
    return i;
  };
  let D = e => e.flatMap(e => e.type === contentTypeConstants.contentTypes.DocLink ? e.token : Array.from(e.text.matchAll(O)).map(e => {
    return e.groups?.token;
  }).filter(Boolean));
  let B = (e, n) => {
    let r = [...e];
    e.forEach((e, i) => {
      if (e.type === contentTypeConstants.contentTypes.Text) {
        let o = [];
        let a = 0;
        Array.from(e.text.matchAll(O)).forEach((r, i, l) => {
          let c = r[0];
          let u = c.length;
          let d = n[r.groups?.token || ""];
          if (d) {
            let n = e.text.slice(a, r.index);
            if (n) {
              o.push({
                type: contentTypeConstants.contentTypes.Text,
                text: n
              });
            }
            o.push({
              type: contentTypeConstants.contentTypes.DocLink,
              title: d.title,
              token: d.token,
              url: c,
              hasPermission: d.hasPermission
            });
            let s = r.index + u;
            let f = e.text.slice(s);
            if (i === l.length - 1 && f) {
              o.push({
                type: contentTypeConstants.contentTypes.Text,
                text: f
              });
            }
            a = s;
          }
        });
        if (o.length) {
          r.splice(i, 1, ...o);
        }
      } else if (e.type === contentTypeConstants.contentTypes.DocLink) {
        let o = n[e.token];
        if (o) {
          r[i] = {
            ...e,
            title: o.title,
            hasPermission: o.hasPermission
          };
        } else {
          r.splice(i, 1, {
            type: contentTypeConstants.contentTypes.Text,
            text: e.title || e.url
          });
        }
      }
    });
    return r;
  };
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let A = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => Promise.all([require.e("dropdown-menu-system") /*id: 18380*/, require.e("flow-chat-editor") /*id: 88860*/]).then(require.bind(require, "flow-chat-editor-core") /*id: 741518*/)
  }));
  let H = reactCoreLibraryReexport.forwardRef(function (e, n) {
    let {
      fallback: r,
      ...i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
      fallback: r ?? reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
      children: reactJsxRuntimeCoreReexport.jsx(A, {
        ...i,
        ref: n
      })
    });
  });
  var J = {
    "description-input-outer-wrapper": "description-input-outer-wrapper-zR4Hsj",
    "description-input-wrapper": "description-input-wrapper-RZsDK_",
    editor: "editor-tOIBwC",
    footer: "footer-P7Gc6x"
  };
  let X = reactCoreLibraryReexport.forwardRef(function (e, n) {
    let {
      className: r,
      defaultValue: a,
      alwaysShowFooter: l,
      placeholder: c,
      autoFocus: u,
      getDocMetaInfos: d,
      onSubmit: f,
      onCancel: m
    } = e;
    let h = reactCoreLibraryReexport.useRef(null);
    let v = a || [{
      text: "",
      type: contentTypeConstants.contentTypes.Text
    }];
    let [g, y] = reactCoreLibraryReexport.useState(v);
    let b = useLatestRef_1.useLatestRef(g);
    let _ = contentStructureUtils.stringifyContent(g);
    let w = !(_ == null ? undefined : _.trim()) || _.length > 500;
    reactCoreLibraryReexport.useImperativeHandle(n, () => ({
      focus: M,
      getValue: () => g,
      setValue: e => y(e),
      clear: () => y(v)
    }));
    reactCoreLibraryReexport.useEffect(() => {
      if (u) {
        M();
      }
    }, [u]);
    let x = () => reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
      size: "small",
      type: "primary",
      disabled: w,
      onClick: j,
      children: t("common.confirm")
    });
    let [$, E] = reactCoreLibraryReexport.useMemo(() => {
      let e = emptyExportFunction.emptyFunction;
      return [new Promise(n => {
        e = n;
      }), e];
    }, []);
    let M = reactFunctionMemoHook.useMemoizedCallback(async () => {
      await $;
      setTimeout(() => {
        var e;
        if ((e = h.current) !== null && e !== undefined) {
          e.focus({
            toIndex: Number.MAX_SAFE_INTEGER
          });
        }
      }, 20);
    });
    let j = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e != null) {
        e.stopPropagation();
      }
      if (f != null) {
        f(b.current);
      }
    });
    let W = reactFunctionMemoHook.useMemoizedCallback(e => {
      let n = e[e.length - 1];
      let r = g[g.length - 1];
      if (n.type !== contentTypeConstants.contentTypes.Text || r.type !== contentTypeConstants.contentTypes.Text) {
        y(e);
        return;
      }
      let i = n.text;
      let o = N(i, r.text);
      if (o !== i) {
        y([...e.slice(0, e.length - 1), {
          text: o,
          type: contentTypeConstants.contentTypes.Text
        }]);
        setTimeout(() => {
          var e;
          if ((e = h.current) !== null && e !== undefined) {
            e.focus({
              toIndex: Number.MAX_SAFE_INTEGER
            });
          }
        }, 0);
      } else {
        y(e);
      }
    });
    let O = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e.keyCode === 13 && !e.shiftKey && !e.altKey) {
        if (!userAgentDeviceDetector.isMobileCached() && !userAgentDeviceDetector.isIOS()) {
          e.preventDefault();
        }
        if (!w && j != null) {
          j();
        }
        return;
      }
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: s(J["description-input-outer-wrapper"], r),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: J["description-input-wrapper"],
        children: reactJsxRuntimeCoreReexport.jsx(H, {
          ref: h,
          className: J.editor,
          value: g,
          placeholder: c ?? t("comment.placeholder.add_comment"),
          scrollSelectionIntoView: emptyExportFunction.emptyFunction,
          history: {
            mergeTimeout: 1000
          },
          onInsertData: e => F({
            data: e,
            getDocMetaInfos: d,
            getEditorBlocks: () => b.current,
            onUpdateEditorBlocks: e => y(e)
          }),
          onChange: W,
          onKeyDown: O,
          onClickLink: e => {
            window.open(xssContentSanitizer.sanitizeUrl(e, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmFSemxxWl$Ne*FtSXlNWFJh$np$d1R*aENhR0p0$m5OT%1rNTJZb*hDZ*1KdFZu$mtTRTEy$1RJNWRHSlhWblZr%Xp*cFlr-z$hb%-1T1dwa%1qRjNZakkx-kdKd$$ucE1Naz%yWWxje*JHSn$$WFJq-lZaM1lraHJkR0Z-Tlhka1d*RjJZ$mMx-TFwW$oz$mtTRTQw$1ZoS2Jt%ll%$DA9"
            }));
          },
          onClickDocLink: e => {
            window.open(xssContentSanitizer.sanitizeUrl(e.url, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmFSemxxWl$Ne*FtSXlNWFJh$np$d1R*aENhR0p0$m5OT%1rNTJZb*hDZ*1KdFZu$mtTRTEy$1RJNWRHSlhWblZr%Xp*cFlr-z$hb%-1T1dwa%1qRjNZakkx-kdKd$$ucE1Naz%yWWxje*JHSn$$WFJq-lZaM1lraHJkR0Z-Tlhka1d*RjJZ$mMx-TFwW$oz$mtTRTQw$1ZoS2Jt%ll%$DA9"
            }));
          },
          onMount: () => E()
        })
      }), (_ || l) && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: J.footer,
        children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          size: "small",
          type: "tertiary",
          onClick: m,
          children: t("LarkCCM_Common_Cancel_Button")
        }), _.length > 500 ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          content: t("doc_comment_toolong"),
          children: x()
        }) : x()]
      })]
    });
  });
  var secureLinkComponent = require("secure-link-component") /*id: 887200*/;
  var chatDocumentLink = require("chat-document-link") /*id: 68458*/;
  let V = e => {
    let {
      content: n,
      onClickLink: r,
      onClickDocLink: o
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-testid": "doc_comment_text",
      className: "content-LbZ2rC",
      children: n.map(e => {
        if (e.type === contentTypeConstants.contentTypes.Text) {
          let n = Array.from(e.text.matchAll(contentStructureUtils.urlRegex));
          let o = e.text.split(contentStructureUtils.urlRegex);
          return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
            children: o.flatMap((e, o) => {
              let l = n[o]?.[0];
              let s = [];
              if (e) {
                s.push(reactJsxRuntimeCoreReexport.jsx("span", {
                  children: e
                }, `text-${o}`));
              }
              if (l) {
                s.push(reactJsxRuntimeCoreReexport.jsx(secureLinkComponent.secureLink, {
                  href: xssContentSanitizer.sanitizeUrl(l, null, {
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
                    filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmFSemxxWl$Ne*FtSXlNWFJh$np$d1R*aENhR0p0$m5OT%1rNTJZb*hDZ*1KdFZu$mtTRTEy$1RJNWRHSlhWblZr%Xp*cFlr-z$hb%-1T1dwa%1qRjNZakkx-kdKd$$ucE1Naz%yWWxje*JHSn$$WFJaTWpsM$pFZFdk$1JET1hCaWJWSnNa$%0xT%dNemFHa*pi$1F4WTNjO$BRPT0"
                  }),
                  onClick: () => r == null ? undefined : r(l),
                  children: l
                }, `link-${o}`));
              }
              return s;
            })
          });
        }
        if (e.type === contentTypeConstants.contentTypes.DocLink) {
          return reactJsxRuntimeCoreReexport.jsx(chatDocumentLink.ChatDocLink, {
            title: e.title || e.url,
            url: e.url,
            hasPermission: e.hasPermission,
            onClick: () => o == null ? undefined : o(e.url)
          });
        } else {
          return null;
        }
      })
    });
  };
  var Y = {
    container: "container-QihoV3",
    focused: "focused-NyHhJB",
    clickable: "clickable-CHpsuR",
    ref: "ref-P6_AYq",
    text: "text-BZKj01",
    "actions-btn": "actions-btn-risly0",
    larger: "larger-Mm6TsS",
    disabled: "disabled-v_8F0G",
    "actions-divider": "actions-divider-KxSoOs",
    comments: "comments-T9mBtl",
    item: "item-lcd1qx",
    avatar: "avatar-ayvHBj",
    right: "right-WV4A4m",
    info: "info-vZYnNp",
    name: "name-YcOzVv",
    time: "time-ykdSec",
    operations: "operations-PP9Odj",
    operation: "operation-ht4LOm",
    "solve-tooltip": "solve-tooltip-ODyDIX",
    "operations-dropdown": "operations-dropdown-q4BCsH"
  };
  let q = e => {
    let {
      className: n,
      style: r,
      readonly: l = false,
      focused: w = false,
      refText: x,
      items: k,
      userId: $ = "",
      canDeleteOthersComment: S = false,
      generateReplyId: R,
      getDocMetaInfos: Z,
      onClick: T,
      onCreateReply: C,
      onClickAway: N,
      onCancelCreateReply: M,
      onClickEdit: j,
      onEditReply: W,
      onDeleteReply: O,
      onMouseEnter: F,
      onMouseLeave: I,
      onPrev: D,
      onNext: B,
      onSolve: z,
      ...A
    } = e;
    let H = reactCoreLibraryReexport.useRef(null);
    let J = () => {
      var e;
      let n = (e = H.current) === null || e === undefined ? undefined : e.getValue();
      return !n || !contentStructureUtils.stringifyContent(n);
    };
    let K = chatUserInfoActions.subscribeUserInfo();
    let [U, q] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (w) {
        q(true);
      }
    }, [w]);
    let [G, Q] = reactCoreLibraryReexport.useState("");
    let ee = e => !!W && $ === e;
    let et = e => !!O && ($ === e || S);
    let en = reactCoreLibraryReexport.useRef(null);
    let {
      applyLatestDocLinkInfo: er
    } = E(k, Z);
    let [ei, eo] = reactCoreLibraryReexport.useState(null);
    let ea = k.length === 0;
    let el = reactCoreLibraryReexport.useMemo(() => ea ? [{
      id: "MOCK_CREATING_REPLY_ID",
      avatar: K == null ? undefined : K.avatar_url,
      name: K == null ? undefined : K.name,
      time: 0,
      content: ei ? ei.content : [],
      modified: false,
      authorId: ""
    }] : ei ? er(arrayUniqByMatcher.uniqByMatcher(k.concat(ei), "id")) : er(k), [k, ea, ei, er]);
    let es = (!!D || !!B) && !ea;
    let ec = !!z && !ea && !l;
    let eu = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      window.setTimeout(() => {
        eu.current = true;
      });
    }, []);
    let ed = useLatestCallbackHook_1.useLatestCallback(() => {
      if (M != null) {
        M(ea && !ei ? 0 : el.length);
      }
      q(false);
    });
    useClickOutside.useClickOutside(async e => {
      await (N == null ? undefined : N(e));
      if (J()) {
        ed();
      }
    }, en);
    let [ef, em] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (ea) {
        em(true);
      }
    }, [ea]);
    reactCoreLibraryReexport.useEffect(() => {
      if (U && !G && ef && H.current) {
        H.current.focus();
        em(false);
      }
    }, [U, ef, G, H.current]);
    let eh = reactCoreLibraryReexport.useRef(false);
    let ep = async e => {
      if (eh.current) {
        return;
      }
      eh.current = true;
      let n = () => {
        var n;
        var r;
        eo(null);
        if ((n = H.current) !== null && n !== undefined) {
          n.setValue(e);
        }
        if ((r = H.current) !== null && r !== undefined) {
          r.focus();
        }
        em(true);
      };
      try {
        let a = R == null ? undefined : R();
        if (a) {
          var r;
          var i;
          eo({
            id: a,
            avatar: K == null ? undefined : K.avatar_url,
            name: (K == null ? undefined : K.name) ?? "",
            time: Date.now(),
            content: e,
            modified: false,
            authorId: $
          });
          if ((r = H.current) !== null && r !== undefined) {
            r.clear();
          }
          if ((i = H.current) !== null && i !== undefined) {
            i.focus();
          }
          em(true);
        }
        let l = await (C == null ? undefined : C({
          id: a,
          content: e
        }));
        await new Promise(e => setTimeout(e, 500));
        if (l === false) {
          n();
        } else {
          eo(null);
        }
      } catch {
        n();
      } finally {
        eh.current = false;
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: en,
      className: s(Y.container, n, {
        [Y.focused]: w,
        [Y.clickable]: !!T
      }),
      style: r,
      onClick: () => {
        if (!H.current) {
          em(true);
        }
        if (!w) {
          if (T != null) {
            T();
          }
        }
      },
      onMouseEnter: F,
      onMouseLeave: I,
      ...A,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: Y.ref,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          "data-testid": "doc_comment_ref",
          className: Y.text,
          children: x
        }), es && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            position: "top",
            content: t("comment.next"),
            mouseEnterDelay: 300,
            mouseLeaveDelay: 300,
            children: reactJsxRuntimeCoreReexport.jsx(iconChevronDown.ChevronDownIcon, {
              "data-testid": "doc_comment_next_button",
              "data-disabled": !B,
              className: s(Y["actions-btn"], {
                [Y.disabled]: !B
              }),
              onClick: e => {
                e.stopPropagation();
                e.preventDefault();
                if (J()) {
                  q(false);
                }
                if (B != null) {
                  B();
                }
              }
            })
          }), reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            position: "top",
            content: t("comment.previout"),
            mouseEnterDelay: 300,
            mouseLeaveDelay: 300,
            children: reactJsxRuntimeCoreReexport.jsx(chevronDownIconComponent.ChevronDownIcon, {
              "data-testid": "doc_comment_prev_button",
              "data-disabled": !D,
              className: s(Y["actions-btn"], {
                [Y.disabled]: !D
              }),
              onClick: e => {
                e.stopPropagation();
                e.preventDefault();
                if (J()) {
                  q(false);
                }
                if (D != null) {
                  D();
                }
              }
            })
          })]
        }), es && ec && reactJsxRuntimeCoreReexport.jsx("div", {
          className: Y["actions-divider"]
        }), ec && reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          position: "top",
          content: t("comment.solve_tip"),
          className: Y["solve-tooltip"],
          children: reactJsxRuntimeCoreReexport.jsx(checkCircleFilledIcon.CheckCircleFilledIcon, {
            className: s(Y["actions-btn"], Y.larger),
            onClick: e => {
              e.stopPropagation();
              e.preventDefault();
              if (z != null) {
                z();
              }
            }
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: Y.comments,
        children: [el.map((e, n) => {
          let {
            id: r,
            avatar: o,
            name: a,
            time: s,
            content: c,
            modified: u,
            authorId: d
          } = e;
          let v = [];
          if (ee(d)) {
            v.push({
              label: t("LarkCCM_Docx_Board_Edit_Button"),
              value: "edit",
              onClick: () => {
                if (j != null) {
                  j({
                    replyId: r
                  });
                }
                Q(r);
              }
            });
          }
          if (et(d)) {
            v.push({
              label: t("CreationDoc_common_DeleteConfirm"),
              value: "delete",
              onClick: () => O == null ? undefined : O({
                replyId: r
              })
            });
          }
          return reactJsxRuntimeCoreReexport.jsxs("div", {
            className: Y.item,
            children: [reactJsxRuntimeCoreReexport.jsx(avatarComponent.AvatarComponent, {
              "data-testid": "doc_comment_avatar",
              className: Y.avatar,
              src: xssContentSanitizer.sanitizeUrl(o, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmFSemxxWl$Ne*FtSXlNWFJh$np$d1R*aENhR0p0$m5OT%1rNTJZb*hDZ*1KdFZu$mtTRTEy$1RJNWRHSlhWblZr%Xp*cFlr-z$hb%-1T1hCaWJWSnNa$%0xT%dNemFHa*pi$1F4WTNjO$BRPT0"
              })
            }), reactJsxRuntimeCoreReexport.jsxs("div", {
              className: Y.right,
              children: [reactJsxRuntimeCoreReexport.jsxs("div", {
                className: Y.info,
                children: [reactJsxRuntimeCoreReexport.jsx("div", {
                  "data-testid": "doc_comment_name",
                  className: Y.name,
                  children: a
                }), !ea && reactJsxRuntimeCoreReexport.jsxs("div", {
                  "data-testid": "doc_comment_time",
                  className: Y.time,
                  children: [dateFormatUtils_1.formatRelativeDate(s), " ", u ? t("LarkCCM_Docx_IM_Edited") : ""]
                }), !l && !ea && reactJsxRuntimeCoreReexport.jsxs("div", {
                  className: Y.operations,
                  children: [reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
                    position: "top",
                    content: t("LarkCCM_Docx_IM_ReplyTo"),
                    children: reactJsxRuntimeCoreReexport.jsx("span", {
                      className: Y.operation,
                      onClick: () => {
                        var e;
                        q(true);
                        if ((e = H.current) !== null && e !== undefined) {
                          e.focus();
                        }
                      },
                      children: reactJsxRuntimeCoreReexport.jsx(documentIconComponent.DocumentIcon, {})
                    })
                  }), v.length > 0 && reactJsxRuntimeCoreReexport.jsx(businessSkillBar.BusinessSkillBar, {
                    defaultValue: "edit",
                    trigger: "hover",
                    highlightWhenChecked: false,
                    contentClassName: Y["operations-dropdown"],
                    options: v,
                    children: reactJsxRuntimeCoreReexport.jsx("span", {
                      className: Y.operation,
                      children: reactJsxRuntimeCoreReexport.jsx(shuffleIconRtlComponent.ShuffleIcon, {})
                    })
                  })]
                })]
              }), l || G !== r ? !ea || ei ? reactJsxRuntimeCoreReexport.jsx(V, {
                content: c,
                onClickDocLink: e => {
                  window.open(xssContentSanitizer.sanitizeUrl(e, null, {
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
                    filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmFSemxxWl$Ne*FtSXlNWFJh$np$d1R*aENhR0p0$m5OT%1rNTJZb*hDZ*1KdFZu$mtTRTEy$1RJNWRHSlhWblZr%Xp*cFlr-z$hb%-1T1hCaWJWSnNa$%0xT%dNemFHa*pi$1F4WTNjO$BRPT0"
                  }));
                }
              }) : null : reactJsxRuntimeCoreReexport.jsx(X, {
                defaultValue: c,
                placeholder: t("comment.placeholder.add_comment"),
                autoFocus: true,
                alwaysShowFooter: true,
                getDocMetaInfos: Z,
                onSubmit: async e => {
                  await (W == null ? undefined : W({
                    replyId: r,
                    content: e
                  }));
                  Q("");
                },
                onCancel: e => {
                  e.stopPropagation();
                  Q("");
                }
              }, el.length)]
            })]
          }, n);
        }), !l && U && !G && reactJsxRuntimeCoreReexport.jsx(X, {
          ref: H,
          placeholder: el.length ? t("comment.placeholder.add_comment") : undefined,
          autoFocus: ea,
          getDocMetaInfos: Z,
          onCancel: e => {
            e.stopPropagation();
            ed();
          },
          onSubmit: ep
        })]
      })]
    });
  };
  require.d(exports, {
    DocCommentThread: function () {
      return q;
    }
  });
}