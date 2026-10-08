// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'openCreditPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43927.2698fd8a.js
         * chunkId: 43927
         * moduleId: 958026
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var creditPanelHashUtil = require("credit-panel-hash-util") /*id: 714047*/;
  var uiPanelConstants = require("ui-panel-constants") /*id: 263908*/;
  var uiPanelStateStore = require("ui-panel-state-store") /*id: 440908*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  (i = {})[i.BUTTON_STATUS_UNFINISHED = 1] = "BUTTON_STATUS_UNFINISHED";
  i[i.BUTTON_STATUS_FINISHED = 2] = "BUTTON_STATUS_FINISHED";
  i[i.BUTTON_STATUS_ONGOING = 3] = "BUTTON_STATUS_ONGOING";
  let _ = i;
  (r = {})[r.MOBILE_ACTIVITY = 1] = "MOBILE_ACTIVITY";
  r[r.PC_ACTIVITY = 2] = "PC_ACTIVITY";
  r[r.FISSION_CAMPAIGN = 3] = "FISSION_CAMPAIGN";
  let x = r;
  (o = {})[o.ALL = 0] = "ALL";
  o[o.USE = 1] = "USE";
  o[o.RECEIVE = 2] = "RECEIVE";
  let h = o;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var useEventListenerHook = require("use-event-listener-hook") /*id: 629504*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  var browserDomValueUnwrap = require("browser-dom-value-unwrap") /*id: 999608*/;
  function k(e, t = {}) {
    var n = t.target;
    var i = t.isNoMore;
    var r = t.threshold;
    var o = r === undefined ? 100 : r;
    var l = t.reloadDeps;
    var a = t.manual;
    var s = t.onBefore;
    var c = t.onSuccess;
    var d = t.onError;
    var p = t.onFinally;
    var u = typescriptRuntimeHelpers.spreadArray(reactCoreLibraryReexport.useState(), 2);
    var _ = u[0];
    var x = u[1];
    var h = typescriptRuntimeHelpers.spreadArray(reactCoreLibraryReexport.useState(false), 2);
    var f = h[0];
    var k = h[1];
    var N = reactCoreLibraryReexport.useMemo(function () {
      return !!i && i(_);
    }, [_]);
    var C = useRequestHook.useRequest(function (t) {
      return typescriptRuntimeHelpers.awaiter(undefined, undefined, undefined, function () {
        var n;
        return typescriptRuntimeHelpers.generator(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, e(t)];
            case 1:
              n = o.sent();
              if (t) {
                x(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, n), {
                  list: typescriptRuntimeHelpers.arraySpread(typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(t.list ?? []), false), typescriptRuntimeHelpers.spreadArray(n.list), false)
                }));
              } else {
                x(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, n), {
                  list: typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(n.list ?? []), false)
                }));
              }
              return [2, n];
          }
        });
      });
    }, {
      manual: a,
      onFinally: function (e, t, n) {
        k(false);
        if (p != null) {
          p(t, n);
        }
      },
      onBefore: function () {
        if (s == null) {
          return undefined;
        } else {
          return s();
        }
      },
      onSuccess: function (e) {
        setTimeout(function () {
          S();
        });
        if (c != null) {
          c(e);
        }
      },
      onError: function (e) {
        if (d == null) {
          return undefined;
        } else {
          return d(e);
        }
      }
    });
    var T = C.loading;
    var j = C.run;
    var y = C.runAsync;
    var W = C.cancel;
    var E = reactFunctionMemoHook.useMemoizedCallback(function () {
      if (!N) {
        k(true);
        j(_);
      }
    });
    var F = reactFunctionMemoHook.useMemoizedCallback(function () {
      if (N) {
        return Promise.reject();
      } else {
        k(true);
        return y(_);
      }
    });
    function S() {
      var e;
      var t = browserDomValueUnwrap.unwrapBrowserValue(n);
      if (t) {
        var i = (e = t = t === document ? document.documentElement : t) === document || e === document.body ? Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) : e.scrollTop;
        if ((t.scrollHeight || Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)) - i <= (t.clientHeight || Math.max(document.documentElement.clientHeight, document.body.clientHeight)) + o) {
          E();
        }
      }
    }
    useEventListenerHook.useEventListener("scroll", function () {
      if (!T && !f) {
        S();
      }
    }, {
      target: n
    });
    reactUseUpdateEffect.useUpdateEffect(function () {
      j();
    }, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(l === undefined ? [] : l), false));
    return {
      data: _,
      loading: !f && T,
      loadingMore: f,
      noMore: N,
      loadMore: E,
      loadMoreAsync: F,
      reload: reactFunctionMemoHook.useMemoizedCallback(function () {
        k(false);
        return j();
      }),
      reloadAsync: reactFunctionMemoHook.useMemoizedCallback(function () {
        k(false);
        return y();
      }),
      mutate: x,
      cancel: W
    };
  }
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var businessInputSelectButton = require("business-input-select-button") /*id: 61460*/;
  var rtlChevronLeftIcon = require("rtl-chevron-left-icon") /*id: 400992*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let W = e => {
    let {
      openPanel: t,
      onRecordTypeChange: n,
      className: i
    } = e;
    let r = [{
      label: i18nTranslationUtils.i18nextTranslate("credit_pc_modal_activity_dropdownMenu_all"),
      value: h.ALL
    }, {
      label: i18nTranslationUtils.i18nextTranslate("credit_pc_modal_activity_dropdownMenu_consume"),
      value: h.USE
    }, {
      label: i18nTranslationUtils.i18nextTranslate("credit_pc_modal_activity_dropdownMenu_receive"),
      value: h.RECEIVE
    }];
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a("mb-[18px] w-full flex h-[28px] items-center px-[20px] self-start", i),
      children: [reactJsxRuntimeCoreReexport.jsx(rtlChevronLeftIcon.ChevronLeftIcon, {
        className: `
          mr-[2px] ml-[-6px] flex-none cursor-pointer self-start
          rounded-(--s-radius-xxss) p-[7px] text-[16px] text-dbx-text-primary
          hover:bg-(--s-color-bg-trans)
        `,
        onClick: () => {
          if (t != null) {
            t({
              scene: uiPanelConstants.panelConstants.InviteActivity,
              isBackTo: true
            });
          }
        }
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
          flex-auto text-[16px] leading-[24px] font-medium text-dbx-text-primary
        `,
        children: i18nTranslationUtils.i18nextTranslate("credit_pc_modal_subtitle_activity")
      }), reactJsxRuntimeCoreReexport.jsx(businessInputSelectButton.BusinessInputSelect, {
        className: "!rounded-dbx-md !font-normal",
        dropdownClassName: "w-[140px] font-normal",
        position: "bottomRight",
        optionList: r,
        defaultValue: h.ALL,
        onChange: e => {
          if (n != null) {
            n(e || h.ALL);
          }
          teaAnalyticsEventTracker.trackEvent("credit_record_panel_click", {
            show_from: uiPanelStateStore.usePanelStore.getState().getOpenFrom(),
            button_name: {
              [h.ALL]: "all_credit_record",
              [h.USE]: "cost_credit_record",
              [h.RECEIVE]: "get_credit_record"
            }[e]
          });
        },
        zIndex: 2100
      })]
    });
  };
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  let F = e => {
    let {
      num: t,
      text: n,
      time: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "mb-[16px] flex h-[40px] items-center justify-between",
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex min-w-0 flex-1 flex-col",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            mr-10 overflow-hidden text-[14px] leading-[22px] font-normal
            text-ellipsis whitespace-nowrap text-dbx-text-primary
          `,
          children: n
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "text-[12px] leading-[18px] text-dbx-text-secondary",
          children: i
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: a("text-[16px] leading-[28px] font-semibold", {
          "text-(--dbx-text-highlight-blue,#0065FD)": t.startsWith("+"),
          "text-dbx-text-primary": t.startsWith("-")
        }),
        children: t
      })]
    });
  };
  var S = {
    spin: "spin-KOfGCM"
  };
  let M = e => {
    let {
      className: t,
      records: n,
      loading: i,
      loadingMore: r,
      noMore: o,
      scrollContainerRef: l
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: l,
      className: a("h-full", t),
      children: i ? reactJsxRuntimeCoreReexport.jsx("div", {
        children: Array.from({
          length: 3
        }).map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
                mb-[32px] h-[16px] rounded-[100px] bg-gradient-to-r
                from-black/10 to-black/5 opacity-50
              `
        }, t))
      }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [n == null ? undefined : n.map((e, t) => reactJsxRuntimeCoreReexport.jsx(F, {
          num: e.num || "",
          text: e.text || "",
          time: e.time || ""
        }, t)), reactJsxRuntimeCoreReexport.jsxs("div", {
          style: {
            marginTop: 8
          },
          children: [!o && r && reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex items-center justify-center text-center",
            children: [reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
              wrapperClassName: a(S.spin)
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              className: "text-[12px] leading-[18px] text-dbx-text-secondary",
              children: i18nTranslationUtils.i18nextTranslate("credit_pc_modal_activity_label_loading")
            })]
          }), o && !!(n == null ? undefined : n.length) && reactJsxRuntimeCoreReexport.jsx("div", {
            className: `
                  text-center text-[12px] leading-[18px] text-dbx-text-secondary
                `,
            children: i18nTranslationUtils.i18nextTranslate("credit_pc_modal_activity_label_end")
          }), o && !(n == null ? undefined : n.length) && reactJsxRuntimeCoreReexport.jsx("div", {
            className: `
                  mt-[68px] text-center text-[14px] leading-[22px]
                  text-dbx-text-tertiary
                `,
            children: i18nTranslationUtils.i18nextTranslate("credit_pc_modal_activity_label_none")
          })]
        })]
      })
    });
  };
  let Z = e => {
    let {
      openPanel: t
    } = e;
    let n = reactCoreLibraryReexport.useRef(null);
    let [i, r] = reactCoreLibraryReexport.useState(h.ALL);
    let {
      data: o,
      loading: l,
      loadingMore: a,
      noMore: s
    } = k(async e => {
      try {
        let {
          data: t
        } = await apiServicesCollection.CommerceBenefitSupplyService.AGWGetCreditUsageHistory({
          size: 10,
          transaction_type: i,
          cursor: e == null ? undefined : e.nextCursor
        });
        if (t) {
          return {
            list: t.items || [],
            nextCursor: Number(t.next_cursor) || undefined,
            hasMore: t.has_more || false
          };
        }
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "AGWGetCreditUsageHistoryError",
          error: e
        });
      }
      return {
        list: [],
        nextCursor: undefined,
        hasMore: false
      };
    }, {
      target: n,
      isNoMore: e => (e == null ? undefined : e.hasMore) === false,
      reloadDeps: [i]
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex h-full flex-col",
      children: [reactJsxRuntimeCoreReexport.jsx(W, {
        className: "flex-none",
        openPanel: t,
        onRecordTypeChange: e => r(e || h.ALL)
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex-1 overflow-auto px-[20px]",
        ref: n,
        children: reactJsxRuntimeCoreReexport.jsx(M, {
          className: "!h-auto pb-[10px]",
          records: o == null ? undefined : o.list,
          loading: l,
          loadingMore: a,
          noMore: s
        })
      })]
    });
  };
  let L = e => {
    let {
      openPanel: t
    } = e || {};
    return {
      title: null,
      closeIcon: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
      content: reactJsxRuntimeCoreReexport.jsx(Z, {
        openPanel: t
      }),
      className: "record-panel-tRXCw6"
    };
  };
  var fetchCreditInfoAction = require("fetch-credit-info-action") /*id: 210368*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var sendMessageIcon = require("send-message-icon") /*id: 11499*/;
  let D = () => {
    let {
      creditInfo: t
    } = uiPanelStateStore.usePanelStore(e => ({
      creditInfo: e.creditInfo
    }), deepEqualityUtil.deepEqual);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex h-[62px] items-end",
      children: [reactJsxRuntimeCoreReexport.jsx("span", {
        className: `
          self-center font-["SF_Pro",var(--s-font-family)] text-6xl font-bold
          text-dbx-text-primary
        `,
        children: (t == null ? undefined : t.total_credit_num) ?? "-"
      }), reactJsxRuntimeCoreReexport.jsx(sendMessageIcon.SendIcon, {
        className: `
          mr-[2px] mb-[9px] ml-[6px] size-[20px] flex-none items-center
          justify-center text-dbx-color-yellow-500
        `
      }), reactJsxRuntimeCoreReexport.jsx("span", {
        className: `
          mb-8 h-[22px] text-sm leading-[22px] font-normal text-dbx-text-primary
        `,
        children: i18nTranslationUtils.i18nextTranslate("credit_pc_setting_entrance_credit")
      })]
    });
  };
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var doubaoLegalUrls = require("doubao-legal-urls") /*id: 113045*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  let A = e => {
    let {
      title: t,
      desc: n,
      rightButton: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a(`
        flex items-center justify-between overflow-hidden rounded-(--s-radius-xs)
        bg-dbx-fill-trans-10-hover p-[16px]
        `),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            mb-[4px] h-[22px] text-sm leading-snug font-medium
            text-dbx-text-primary
          `,
          children: t
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            h-[18px] text-xs leading-none font-normal text-dbx-text-secondary
          `,
          children: n
        })]
      }), i ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex-none",
        children: i
      }) : null]
    });
  };
  var J = {
    "task-card-container": "task-card-container-ZeCnlK",
    "task-card": "task-card-oUIDjl"
  };
  let z = e => e.button_status === _.BUTTON_STATUS_FINISHED;
  let U = e => {
    let {
      openPanel: t
    } = e;
    let {
      creditTasks: n
    } = uiPanelStateStore.usePanelStore(e => ({
      creditTasks: e.creditTasks
    }), deepEqualityUtil.deepEqual);
    let i = reactFunctionMemoHook.useMemoizedCallback(() => {
      teaAnalyticsEventTracker.trackEvent("credit_task_panel_click", {
        show_from: uiPanelStateStore.usePanelStore.getState().getOpenFrom(),
        button_name: "invite_friends"
      });
      if (t != null) {
        t({
          scene: uiPanelConstants.panelConstants.InviteActivity,
          from: "click_credit_task_panel_invite_button"
        });
      }
    });
    let {
      inviteTask: r,
      pcActivityTask: o,
      mobileActivityTask: l
    } = reactCoreLibraryReexport.useMemo(() => {
      let e = n == null ? undefined : n.find(e => e.task_type === x.FISSION_CAMPAIGN);
      return {
        inviteTask: e,
        pcActivityTask: n == null ? undefined : n.find(e => e.task_type === x.PC_ACTIVITY),
        mobileActivityTask: n == null ? undefined : n.find(e => e.task_type === x.MOBILE_ACTIVITY)
      };
    }, [n]);
    if (r || o || l) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "mb-[16px] flex h-[24px] items-center justify-between",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: `
            text-base leading-normal font-medium text-dbx-text-primary
          `,
            children: i18nTranslationUtils.i18nextTranslate("credit_pc_modal_subtitle_task")
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: `
            cursor-pointer text-xs leading-none font-normal
            text-dbx-text-primary underline underline-offset-[2px]
            hover:text-(--dbx-text-highlight)
          `,
            onClick: () => {
              teaAnalyticsEventTracker.trackEvent("credit_task_panel_click", {
                show_from: uiPanelStateStore.usePanelStore.getState().getOpenFrom(),
                button_name: "understand_credit"
              });
              window.open(xssContentSanitizer.sanitizeUrl(doubaoLegalUrls.creditRuleUrl, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$-wNT$Xb*RT-0dSRE9-c*pi$TEy$1cxc05reFh%blpp$0$KMlltM$dk$1JJ$FhaalIwWjFXb*QzZ*xrelNte*FSMnd3$EZoQ2FHSnRWbk5NTWs1MllsaENkb%p0$m5Wa1NFMTJaRWRHZW1*N%1-%mlNbEl4WWtk$mRtRlhO$3Rh$0dkM$pFaE9ORmxZ%201a1dFMDk"
              }), "_blank");
            },
            children: i18nTranslationUtils.i18nextTranslate("credit_pc_bottomsheet_desc_textlink_credit")
          })]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [r ? reactJsxRuntimeCoreReexport.jsx("div", {
            className: "w-full",
            children: reactJsxRuntimeCoreReexport.jsx(A, {
              title: i18nTranslationUtils.i18nextTranslate("credit_pc_popUp_invite_title_pc"),
              desc: i18nTranslationUtils.i18nextTranslate("credit_pc_popUp_invite_desc_pc", {
                postProcess: "sprintf",
                sprintf: [i18nTranslationUtils.i18nextTranslate("brandName_doubao")]
              }),
              rightButton: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
                size: "small",
                onClick: i,
                children: i18nTranslationUtils.i18nextTranslate("credit_pc_popUp_invite_btn_pc")
              })
            })
          }) : null, (!!o || !!l) && reactJsxRuntimeCoreReexport.jsxs("div", {
            className: a("mt-[10px] flex-row flex w-full gap-[10px]", J["task-card-container"]),
            children: [o ? reactJsxRuntimeCoreReexport.jsx("div", {
              className: a("flex-1", J["task-card"]),
              children: reactJsxRuntimeCoreReexport.jsx(A, {
                title: i18nTranslationUtils.i18nextTranslate("credit_pc_record_dailyFree_pc"),
                desc: z(o) ? i18nTranslationUtils.i18nextTranslate("credit_pc_bottomsheet_item_dailyPC_status_completed") : i18nTranslationUtils.i18nextTranslate("credit_pc_bottomsheet_item_dailyPC_status_pending")
              })
            }) : null, l ? reactJsxRuntimeCoreReexport.jsx("div", {
              className: a("flex-1", J["task-card"]),
              children: reactJsxRuntimeCoreReexport.jsx(A, {
                title: i18nTranslationUtils.i18nextTranslate("credit_pc_record_dailyFree_app"),
                desc: z(l) ? i18nTranslationUtils.i18nextTranslate("credit_pc_bottomsheet_item_dailyPC_status_completed") : i18nTranslationUtils.i18nextTranslate("credit_pc_bottomsheet_item_dailyPC_status_pending")
              })
            }) : null]
          })]
        })]
      });
    } else {
      return null;
    }
  };
  let V = e => {
    let {
      className: t,
      scrollContainerRef: n
    } = e;
    let [i, r] = reactCoreLibraryReexport.useState(h.ALL);
    let {
      data: o,
      loading: l,
      loadingMore: a,
      noMore: c
    } = k(async e => {
      try {
        let {
          data: t
        } = await apiServicesCollection.CommerceBenefitSupplyService.AGWGetCreditUsageHistory({
          size: 10,
          transaction_type: i,
          cursor: e == null ? undefined : e.nextCursor
        });
        if (t) {
          return {
            list: t.items || [],
            nextCursor: Number(t.next_cursor) || undefined,
            hasMore: t.has_more || false
          };
        }
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "AGWGetCreditUsageHistoryError",
          error: e
        });
      }
      return {
        list: [],
        nextCursor: undefined,
        hasMore: false
      };
    }, {
      target: n,
      isNoMore: e => (e == null ? undefined : e.hasMore) === false,
      reloadDeps: [i]
    });
    let d = [{
      label: i18nTranslationUtils.i18nextTranslate("credit_pc_modal_activity_dropdownMenu_all"),
      value: h.ALL
    }, {
      label: i18nTranslationUtils.i18nextTranslate("credit_pc_modal_activity_dropdownMenu_consume"),
      value: h.USE
    }, {
      label: i18nTranslationUtils.i18nextTranslate("credit_pc_modal_activity_dropdownMenu_receive"),
      value: h.RECEIVE
    }];
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: t,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `
          sticky top-[-24px] flex h-[68px] items-center justify-between
          bg-s-color-bg-float pt-[24px] pb-[16px]
        `,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            text-base leading-normal font-medium text-dbx-text-primary
          `,
          children: i18nTranslationUtils.i18nextTranslate("credit_pc_modal_subtitle_activity")
        }), reactJsxRuntimeCoreReexport.jsx(businessInputSelectButton.BusinessInputSelect, {
          className: "!rounded-dbx-md !font-normal",
          dropdownClassName: "w-[140px] font-normal",
          position: "bottomRight",
          optionList: d,
          defaultValue: h.ALL,
          onChange: e => {
            r(e || h.ALL);
            teaAnalyticsEventTracker.trackEvent("credit_task_panel_click", {
              show_from: uiPanelStateStore.usePanelStore.getState().getOpenFrom(),
              button_name: {
                [h.ALL]: "all_credit_record",
                [h.USE]: "cost_credit_record",
                [h.RECEIVE]: "get_credit_record"
              }[e]
            });
          },
          zIndex: 2100
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "pb-[20px]",
        children: reactJsxRuntimeCoreReexport.jsx(M, {
          records: o == null ? undefined : o.list,
          loading: l,
          loadingMore: a,
          noMore: c
        })
      })]
    });
  };
  let q = e => {
    let {
      openPanel: t
    } = e;
    let n = reactCoreLibraryReexport.useRef(null);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `
        relative mx-[-20px] h-[calc(80vh-91px)] max-h-[484px] overflow-auto
        px-[20px] pt-[24px]
      `,
      ref: n,
      children: [reactJsxRuntimeCoreReexport.jsx(U, {
        openPanel: t
      }), reactJsxRuntimeCoreReexport.jsx(V, {
        scrollContainerRef: n
      })]
    });
  };
  let G = e => {
    let {
      openPanel: t
    } = e || {};
    fetchCreditInfoAction.fetchCreditInfo();
    return {
      title: reactJsxRuntimeCoreReexport.jsx(D, {}),
      content: reactJsxRuntimeCoreReexport.jsx(q, {
        openPanel: t
      }),
      className: "credit-panel-rTzxV2"
    };
  };
  let Y = () => {
    let e = [{
      title: i18nTranslationUtils.i18nextTranslate("credit_pc_popUp_invite_step1_title"),
      content: i18nTranslationUtils.i18nextTranslate("credit_pc_popUp_invite_step1_desc")
    }, {
      title: i18nTranslationUtils.i18nextTranslate("credit_pc_popUp_invite_step2_title", {
        postProcess: "sprintf",
        sprintf: [i18nTranslationUtils.i18nextTranslate("brandName_doubao")]
      }),
      content: i18nTranslationUtils.i18nextTranslate("credit_pc_popUp_invite_step2_desc", {
        postProcess: "sprintf",
        sprintf: [i18nTranslationUtils.i18nextTranslate("brandName_doubao")]
      })
    }, {
      title: i18nTranslationUtils.i18nextTranslate("credit_pc_popUp_invite_step3_title", {
        postProcess: "sprintf",
        sprintf: [i18nTranslationUtils.i18nextTranslate("brandName_doubao")]
      }),
      content: i18nTranslationUtils.i18nextTranslate("credit_pc_popUp_invite_step3_desc", {
        postProcess: "sprintf",
        sprintf: [i18nTranslationUtils.i18nextTranslate("brandName_doubao")]
      })
    }];
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "mt-[24px]",
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "mb-[16px] flex h-[22px] items-center justify-between",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            text-[14px] leading-[22px] font-medium text-dbx-text-primary
          `,
          children: i18nTranslationUtils.i18nextTranslate("credit_pc_popUp_invite_steps_title")
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            cursor-pointer text-[12px] leading-[18px] font-normal
            text-dbx-text-primary underline underline-offset-[2px]
            hover:text-(--dbx-text-highlight)
          `,
          onClick: () => {
            teaAnalyticsEventTracker.trackEvent("credit_invite_panel_click", {
              show_from: uiPanelStateStore.usePanelStore.getState().getOpenFrom(),
              button_name: "rule"
            });
            window.open(xssContentSanitizer.sanitizeUrl(doubaoLegalUrls.creditActivityRuleUrl, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$-wNT$Xb*RT-0dSRE9-c*pi$TEy$1cxc05reFh%blpp$0$KMlltM$dk$1JJ$FhaalIwWjFXb*QzZ*xsWFRqQmhXRnB3Wk$ocmRHTkhSblZh$jNkMllW-zFNb%ZZ$W14T%1rNTJZb*hDZ*1KdFZu$mtTRTEyW$ZjM%1tRll$bXhN$0$veFlrZFZkb%Z-Tld0-$dHZDFaRWhPTkZsW$NtNWtXRTA5"
            }), "_blank");
          },
          children: i18nTranslationUtils.i18nextTranslate("credit_pc_steps_actionLabel_rules")
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mt-[16px]",
        children: e.map(e => reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
                mb-[8px] flex h-[64px] w-full items-center
                rounded-(--s-radius-s) bg-dbx-fill-trans-10-hover px-[16px]
              `,
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: `
                    text-[14px] leading-[22px] font-medium text-dbx-text-primary
                  `,
              children: e.title
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: `
                    text-[12px] leading-[18px] text-dbx-text-secondary
                  `,
              children: e.content
            })]
          })
        }, e.title))
      })]
    });
  };
  var Q = require.p + "static/image/invite-activity-logo.acf97398.png";
  let K = e => {
    let {
      openPanel: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex h-[115px] items-center self-start",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex h-[28px] w-[32px] flex-none self-start",
        children: reactJsxRuntimeCoreReexport.jsx(rtlChevronLeftIcon.ChevronLeftIcon, {
          className: `
            mr-[10px] ml-[-6px] cursor-pointer rounded-(--s-radius-xxss) p-[7px]
            text-[16px] text-dbx-text-primary
            hover:bg-(--s-color-bg-trans)
          `,
          onClick: () => {
            if (t != null) {
              t({
                scene: uiPanelConstants.panelConstants.MainPanel,
                isBackTo: true
              });
            }
          }
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "ml-14 flex-auto",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            mb-[6px] text-[28px] leading-[40px] font-semibold
            text-dbx-text-primary
          `,
          children: i18nTranslationUtils.i18nextTranslate("credit_pc_popUp_invite_title", {
            postProcess: "sprintf",
            sprintf: [i18nTranslationUtils.i18nextTranslate("brandName_doubao")]
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "text-[12px] leading-[18px] text-dbx-text-secondary",
          children: i18nTranslationUtils.i18nextTranslate("credit_pc_popUp_invite_desc", {
            postProcess: "sprintf",
            sprintf: [i18nTranslationUtils.i18nextTranslate("brandName_doubao")]
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "ml-16 flex-none",
        children: reactJsxRuntimeCoreReexport.jsx("img", {
          src: xssContentSanitizer.sanitizeUrl(Q, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$-wNT$Xb*RT-0dSRE9-c*pi$TEy$1cxc05reFh%blpp$0$KMlltM$dk$1JJ$FhaalIwWjFXb*QzZ*xsWFRqQmhXRnB3Wk$ocmRHTkhSblZh$jNkMllW-zFNb%ZZ$W14T%1rNTJZb*hDZ*1KdFZu$mtTRTEyW$ZjM%1tRll$bXhN$jJoc1dWZFNiR05wT1hCaWJWSnNa$%0xT%dNemFHa*pi$1F4WTNjO$BRPT0"
          }),
          alt: "",
          className: "h-[85px] flex-none rotate-15"
        })
      })]
    });
  };
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var et = clipboardCopyHelper;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var arrowRightRtlIcon = require("arrow-right-rtl-icon") /*id: 371018*/;
  var creditConstantsConfig = require("credit-constants-config") /*id: 399502*/;
  let eo = e => {
    let {
      openPanel: i,
      campaignInfo: r,
      campaignKey: o
    } = e;
    let l = reactFunctionMemoHook.useMemoizedCallback(() => {
      teaAnalyticsEventTracker.trackEvent("credit_invite_panel_click", {
        show_from: uiPanelStateStore.usePanelStore.getState().getOpenFrom(),
        button_name: "total_credit"
      });
      if (i != null) {
        i({
          scene: uiPanelConstants.panelConstants.Record,
          from: "click_credit_invite_panel_detail_button"
        });
      }
    });
    let a = reactFunctionMemoHook.useMemoizedCallback(async () => {
      if (o) {
        try {
          let {
            data: e
          } = await apiServicesCollection.CommerceBenefitSupplyService.AGWGetFissionGroupInvitation({
            campaign_key: o
          });
          if (e) {
            return e;
          }
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "AGWGetFissionGroupInvitation_error",
            error: e
          });
        }
      }
    });
    let {
      run: c
    } = useRequestHook.useRequest(async () => {
      teaAnalyticsEventTracker.trackEvent("credit_invite_panel_click", {
        show_from: uiPanelStateStore.usePanelStore.getState().getOpenFrom(),
        button_name: "copy_link"
      });
      let e = await a();
      if ((e == null ? undefined : e.encrypt_group_id) && e.invitation_code) {
        let t = `${creditConstantsConfig.doubaoBaseUrl}${creditConstantsConfig.creditInvitePath}/${e.encrypt_group_id}`;
        let n = i18nTranslationUtils.i18nextTranslate("brandName_doubao");
        let i = i18nTranslationUtils.i18nextTranslate("copyLink_pc_share_text", {
          postProcess: "sprintf",
          sprintf: [n, t, e.invitation_code]
        });
        et(i);
        samanthaToastFactory.toastInstance.success(i18nTranslationUtils.i18nextTranslate("credit_pc_toast_invite_copied_link"));
      } else {
        samanthaToastFactory.toastInstance.error(i18nTranslationUtils.i18nextTranslate("credit_pc_errToast_invite_fail_copy_link"));
      }
    }, {
      manual: true,
      debounceWait: 500,
      debounceLeading: true,
      debounceTrailing: false
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "mt-[12px]",
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex justify-between gap-[8px] text-dbx-text-primary",
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: `
            flex h-[46px] flex-1 items-center justify-between
            rounded-(--s-radius-s) bg-dbx-fill-trans-10-hover pr-[14px]
            pl-[16px]
          `,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "text-[14px] leading-[22px]",
            children: i18nTranslationUtils.i18nextTranslate("credit_pc_popUp_history_tab_invited")
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "inline-flex items-center",
            children: [reactJsxRuntimeCoreReexport.jsx("span", {
              className: "mr-[6px] text-[20px] leading-[28px] font-semibold",
              children: (r == null ? undefined : r.award_info?.total_invite_num) || 0
            }), i18nTranslationUtils.i18nextTranslate("credit_pc_invited_number_label")]
          })]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: `
            flex h-[46px] flex-1 items-center justify-between
            rounded-(--s-radius-s) bg-dbx-fill-trans-10-hover pr-[14px]
            pl-[16px]
          `,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "text-[14px] leading-[22px]",
            children: i18nTranslationUtils.i18nextTranslate("credit_pc_popUp_history_tab_credits")
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: `
              inline-flex cursor-pointer items-center
              hover:text-(--dbx-text-highlight)
            `,
            onClick: l,
            children: [reactJsxRuntimeCoreReexport.jsx("span", {
              className: "mr-[6px] text-[20px] leading-[28px] font-semibold",
              children: (r == null ? undefined : r.award_info?.total_award_credit_num) || 0
            }), reactJsxRuntimeCoreReexport.jsx(arrowRightRtlIcon.ArrowRightRtlIcon, {
              className: "mr-[8px] text-[10px]"
            })]
          })]
        })]
      }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        className: "mt-[20px] w-full",
        size: "large",
        type: "primary",
        onClick: c,
        children: i18nTranslationUtils.i18nextTranslate("credit_pc_popUp_invite_btn_copy")
      })]
    });
  };
  let el = e => {
    let {
      openPanel: n
    } = e;
    let {
      creditTasks: i
    } = uiPanelStateStore.usePanelStore(e => ({
      creditTasks: e.creditTasks
    }), deepEqualityUtil.deepEqual);
    let r = i == null ? undefined : i.find(e => e.task_type === x.FISSION_CAMPAIGN)?.campaign_key;
    let {
      data: o
    } = useRequestHook.useRequest(async () => {
      if (r) {
        try {
          let {
            data: e
          } = await apiServicesCollection.CommerceBenefitSupplyService.AGWGetFissionCampaignInfo({
            campaign_key: r
          });
          if (e) {
            return e;
          }
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "AGWGetFissionCampaignInfo_error",
            error: e
          });
        }
      }
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `
        h-[calc(80vh-44px)] max-h-[540px] overflow-auto
        [-ms-overflow-style:none]
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
      `,
      children: [reactJsxRuntimeCoreReexport.jsx(K, {
        openPanel: n
      }), reactJsxRuntimeCoreReexport.jsx(eo, {
        openPanel: n,
        campaignKey: r,
        campaignInfo: o
      }), reactJsxRuntimeCoreReexport.jsx(Y, {})]
    });
  };
  let ea = e => {
    let {
      openPanel: t
    } = e || {};
    return {
      title: null,
      closeIcon: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
      content: reactJsxRuntimeCoreReexport.jsx(el, {
        openPanel: t
      })
    };
  };
  let es = {
    size: "large",
    icon: null,
    footer: null,
    closeIcon: null,
    className: "panel-AZxfT2",
    zIndex: 2000,
    cancelButtonProps: {
      autoFocus: false
    }
  };
  let ec = e => {
    switch (e) {
      case uiPanelConstants.panelConstants.MainPanel:
        return G({
          openPanel: ed
        });
      case uiPanelConstants.panelConstants.InviteActivity:
        return ea({
          openPanel: ed
        });
      case uiPanelConstants.panelConstants.Record:
        return L({
          openPanel: ed
        });
      default:
        return null;
    }
  };
  let ed = e => {
    let {
      from: t,
      isBackTo: n
    } = e || {};
    let {
      scene: i
    } = e || {};
    i ||= uiPanelConstants.panelConstants.MainPanel;
    if (!n) {
      uiPanelStateStore.usePanelStore.getState().setOpenFrom({
        scene: i,
        openFrom: t
      });
      let e = {
        [uiPanelConstants.panelConstants.MainPanel]: "credit_task_panel_show",
        [uiPanelConstants.panelConstants.InviteActivity]: "credit_invite_panel_show",
        [uiPanelConstants.panelConstants.Record]: "credit_record_panel_show"
      }[i];
      teaAnalyticsEventTracker.trackEvent(e, {
        show_from: t
      });
    }
    uiPanelStateStore.usePanelStore.getState().setScene(i);
    let r = ec(i);
    if (r) {
      let {
        modal: e
      } = uiPanelStateStore.usePanelStore.getState();
      let t = () => {
        uiPanelStateStore.usePanelStore.getState().clearOpenFromMap();
        creditPanelHashUtil.closeCreditPanel();
      };
      let n = a(es.className, r.className);
      if (e) {
        e.update({
          type: "info",
          onCancel: t,
          ...es,
          ...r,
          className: n
        });
      } else {
        e = modalConfirmDialogManager.ModalConfirmDialog.info({
          onCancel: t,
          ...es,
          ...r,
          className: n
        });
        uiPanelStateStore.usePanelStore.setState({
          modal: e
        });
      }
      creditPanelHashUtil.openCreditPanel();
    }
  };
  require.d(exports, {
    openCreditPanel: function () {
      return ed;
    }
  });
}