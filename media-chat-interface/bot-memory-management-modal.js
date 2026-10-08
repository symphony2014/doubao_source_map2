// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'useMemoryManagement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 640220
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var chatConstantId = require("chat-constant-id") /*id: 392213*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useStableObjectHook = require("use-stable-object-hook") /*id: 141660*/;
  let m = () => {
    let e = () => ({
      bot_id: chatConstantId.chatConstantId,
      enter_from: "bot_list_profile",
      conversation_id: ""
    });
    let t = function (t, n = {}) {
      try {
        teaAnalyticsEventTracker.trackEvent(t, {
          ...e(),
          ...n
        });
      } catch (e) {}
    };
    return useStableObjectHook.useStableObject({
      trackEnterPage: function (e = {}) {
        t("enter_page", {
          ...e
        });
      },
      trackClickDeleteMemory: function (e = {}) {
        t("click_delete_memory", {
          ...e
        });
      },
      trackClickMemorySwitch: function (e = {}) {
        t("click_memory_switch", {
          ...e
        });
      },
      trackConfirmDeleteMemory: function (e = {}) {
        t("confirm_delete_memory", {
          ...e
        });
      }
    });
  };
  var mainBotMemoryStoreHook = require("main-bot-memory-store-hook") /*id: 404006*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var switchComponentWrapper = require("switch-component-wrapper") /*id: 571857*/;
  var g = {
    container: "container-RsyRGI",
    header: "header-AYIt5T",
    "header-title": "header-title-RxbtTP",
    headerTitle: "header-title-RxbtTP",
    "header-footer": "header-footer-VRaTKQ",
    headerFooter: "header-footer-VRaTKQ",
    "header-footer-icon": "header-footer-icon-jKsSPF",
    headerFooterIcon: "header-footer-icon-jKsSPF",
    "dropdown-item": "dropdown-item-AI2o_r",
    dropdownItem: "dropdown-item-AI2o_r",
    "memory-remove-btn": "memory-remove-btn-gWJIVF",
    memoryRemoveBtn: "memory-remove-btn-gWJIVF",
    switch: "switch-eFFpqC",
    "switch-content": "switch-content-yRoXGf",
    switchContent: "switch-content-yRoXGf",
    "switch-content-title": "switch-content-title-OAxTBX",
    switchContentTitle: "switch-content-title-OAxTBX",
    "switch-desc": "switch-desc-rh0DtW",
    switchDesc: "switch-desc-rh0DtW",
    "switch-desc-link": "switch-desc-link-kChaVO",
    switchDescLink: "switch-desc-link-kChaVO",
    item: "item-ux7l99",
    "item-active": "item-active-bGEN7m",
    itemActive: "item-active-bGEN7m",
    "item-border": "item-border-N2HMSj",
    itemBorder: "item-border-N2HMSj",
    "item-disabled": "item-disabled-qJiiq2",
    itemDisabled: "item-disabled-qJiiq2",
    "item-content": "item-content-bdWtD8",
    itemContent: "item-content-bdWtD8",
    "item-icon": "item-icon-EG5DdA",
    itemIcon: "item-icon-EG5DdA",
    "item-date": "item-date-pyqqGO",
    itemDate: "item-date-pyqqGO",
    "memory-empty": "memory-empty-camj5c",
    memoryEmpty: "memory-empty-camj5c",
    "memory-empty-desc": "memory-empty-desc-bPWHaj",
    memoryEmptyDesc: "memory-empty-desc-bPWHaj",
    flash: "flash-GSHoBL",
    "skeleton-loading": "skeleton-loading-lTNgDh",
    skeletonLoading: "skeleton-loading-lTNgDh"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let k = e => {
    let {
      classname: t,
      trackParams: n
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let {
      trackClickMemorySwitch: a
    } = m();
    let {
      getMainBotSetting: s,
      updateMainBotSettingAsync: d
    } = mainBotMemoryStoreHook.useMainBotMemoryStore.getState();
    let c = mainBotMemoryStoreHook.useMainBotMemoryStore(e => e.main_bot_setting, deepEqualityUtil.deepEqual);
    let u = functionInvoker.invoke(() => "https://www.doubao.com/legal/memory_faq");
    reactCoreLibraryReexport.useEffect(() => {
      s();
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: i(g.switch, t),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: g["switch-content"],
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: g["switch-content-title"],
          children: r("settings_memory_on_off")
        }), reactJsxRuntimeCoreReexport.jsx(switchComponentWrapper.SwitchComponentWrapper, {
          className: "ml-auto",
          onChange: e => {
            d({
              main_bot_memory_switch_status: e
            });
            a({
              ...n,
              to_status: e ? "on" : "off"
            });
          },
          checked: !!(c == null ? undefined : c.main_bot_memory_switch_status)
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("span", {
        className: g["switch-desc"],
        children: [r("new_memory_toggle_desc", {
          postProcess: "sprintf",
          sprintf: [r("brandName_doubao")]
        }), reactJsxRuntimeCoreReexport.jsx("a", {
          target: "_blank",
          rel: "noreferrer noopener",
          href: xssContentSanitizer.sanitizeUrl(u, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*1KWFZu%mlNM*8x$ERKT2RtSllRblpp-lZaM$pFTT$kRnB-T$haamJtdDBZekpXT%dSS*JI$mFl$E-wWWpK%2FHSkRPWHBrTW13d1d%Sm5k$1JJ$*pSWldFcH$aRmhO%FE9PQ"
          }),
          className: g["switch-desc-link"],
          children: r("memory_toggle_desc_learn_more")
        })]
      })]
    });
  };
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var archiveBuildingIcon = require("archive-building-icon") /*id: 804712*/;
  var notificationColoredIcon = require("notification-colored-icon") /*id: 338685*/;
  let C = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: g["memory-empty"],
      children: [reactJsxRuntimeCoreReexport.jsx(notificationColoredIcon.NotificationColoredIcon, {
        className: "h-48 w-48"
      }), reactJsxRuntimeCoreReexport.jsx("span", {
        className: g["memory-empty-desc"],
        children: e("new_memory_empty_desc", {
          postProcess: "sprintf",
          sprintf: [e("brandName_doubao")]
        })
      })]
    });
  };
  let R = () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "flex w-full flex-col gap-12",
    children: Array.from({
      length: 3
    }).map((e, t) => reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex-column flex items-start gap-14 pt-10",
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex w-full items-center",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: i(g.input, g.flash, "w-2/3 h-26 py-10 rounded-8")
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: i(g.input, g.flash, "ml-auto w-22 h-22 rounded-half")
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: i(g.input, g.flash, "w-1/3 h-18 rounded-8")
      })]
    }, t))
  });
  let j = e => {
    let {
      item: t,
      disable: n = false,
      currentMemory: l,
      isFirstItem: r = false,
      trackParams: a
    } = e;
    let d = i18nTranslationUtils.useTranslationWithFallback();
    let {
      trackClickDeleteMemory: c,
      trackConfirmDeleteMemory: u
    } = m();
    let _ = reactCoreLibraryReexport.useRef(null);
    let {
      deleteMemoryContent: v
    } = mainBotMemoryStoreHook.useMainBotMemoryStore.getState();
    let f = l && (t.content.includes(l || "") || l.includes(t.content || "")) && !n;
    let k = () => {
      if (n) {
        samanthaToastFactory.toastInstance.info(d("new_memory_toggle_on_toast"));
        return;
      }
      modalConfirmDialogManager.ModalConfirmDialog.error({
        title: d("delete_memory_popup_header"),
        content: d("delete_memory_popup_desc"),
        onOk: async () => {
          u({
            ...a,
            type: "delete_one"
          });
          await v([t.id]);
        }
      });
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (f) {
        var e;
        if ((e = _.current) !== null && e !== undefined) {
          e.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
          });
        }
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: _,
      className: i(g.item, {
        [g["item-border"]]: !r,
        [g["item-disabled"]]: n
      }),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: i("flex w-full items-start pt-10 pr-8 pl-4"),
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: i(g["item-content"], {
            [g["item-active"]]: f
          }),
          children: t.content
        }), reactJsxRuntimeCoreReexport.jsx(archiveBuildingIcon.ArchiveIcon, {
          className: g["item-icon"],
          onClick: () => {
            c({
              ...a,
              type: "delete_one"
            });
            k();
          }
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: i(g["item-date"], {
          [g["item-disabled"]]: n
        }),
        children: t.date
      })]
    });
  };
  let N = e => {
    let {
      className: t,
      loading: n = false,
      disable: o = false,
      currentMemory: l,
      trackParams: r,
      data: a
    } = e;
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx(R, {});
    } else if (a && a.length !== 0) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: i(t),
        children: a.map((e, t) => reactJsxRuntimeCoreReexport.jsx(j, {
          item: e,
          currentMemory: l,
          disable: o,
          trackParams: r,
          isFirstItem: t === 0
        }, e.id))
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(C, {});
    }
  };
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  var samanthaPopoverWrapperComponent = require("samantha-popover-wrapper-component") /*id: 137563*/;
  var horizontalDotsIcon = require("horizontal-dots-icon") /*id: 743464*/;
  var closeIconComponent_1_1 = require("close-icon-component_1_1") /*id: 259726*/;
  let W = e => {
    let {
      disable: t,
      trackParams: n
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let [r, a] = reactCoreLibraryReexport.useState(false);
    let {
      trackClickDeleteMemory: d,
      trackConfirmDeleteMemory: c
    } = m();
    let {
      clearMainBotMemoryHistory: u
    } = mainBotMemoryStoreHook.useMainBotMemoryStore.getState();
    let _ = () => {
      if (t) {
        samanthaToastFactory.toastInstance.info(l("new_memory_toggle_on_toast"));
        return;
      }
      modalConfirmDialogManager.ModalConfirmDialog.error({
        title: l("new_delete_memory_popup_header"),
        content: l("new_delete_memory_popup_desc"),
        onOk: async () => {
          c({
            ...n,
            type: "delete_all"
          });
          await u();
        }
      });
    };
    return reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
      position: "bottomRight",
      trigger: "click",
      clickToHide: true,
      visible: r,
      autoAdjustOverflow: true,
      onVisibleChange: e => {
        a(e);
      },
      className: "!rounded-10 px-4",
      content: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Menu, {
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: g["dropdown-item"],
            children: reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Item, {
              className: i(g["memory-remove-btn"]),
              icon: reactJsxRuntimeCoreReexport.jsx(archiveBuildingIcon.ArchiveIcon, {
                className: "py-4 !text-16"
              }),
              onClick: () => {
                d({
                  ...n,
                  type: "delete_all"
                });
                _();
              },
              children: l("new_delete_memory_btn")
            }, "delete")
          })
        })
      }),
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: g["header-footer-icon"],
        children: reactJsxRuntimeCoreReexport.jsx(horizontalDotsIcon.HorizontalDotsIcon, {
          className: "h-18 w-18"
        })
      })
    });
  };
  let Z = e => {
    let {
      classname: t,
      disable: n,
      trackParams: o,
      onClose: l
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: i(g.header, t),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: g["header-title"],
        children: r("new_memory_manage_toggle")
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: g["header-footer"],
        children: [reactJsxRuntimeCoreReexport.jsx(W, {
          disable: n,
          trackParams: o
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: g["header-footer-icon"],
          onClick: () => l == null ? undefined : l(),
          children: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1_1.CloseIcon, {
            className: "h-18 w-18"
          })
        })]
      })]
    });
  };
  let M = e => {
    let {
      visible: t,
      classname: n,
      currentMemory: r,
      trackParams: d = {},
      onCancel: c
    } = e;
    let {
      trackEnterPage: u
    } = m();
    let {
      getMemoryContentList: _
    } = mainBotMemoryStoreHook.useMainBotMemoryStore.getState();
    let [p, v, f] = mainBotMemoryStoreHook.useMainBotMemoryStore(e => {
      return [e.main_bot_setting?.main_bot_memory_switch_status, e.main_bot_setting?.memory_saved_content_list, e.main_bot_setting?.loading_content_list];
    }, deepEqualityUtil.deepEqual);
    reactCoreLibraryReexport.useEffect(() => {
      _();
      u({
        ...d,
        enter_method: "setting"
      });
    }, []);
    if (t) {
      return reactJsxRuntimeCoreReexport.jsx(modalConfirmDialogManager.ModalConfirmDialog, {
        centered: true,
        size: "large",
        header: reactJsxRuntimeCoreReexport.jsx(Z, {
          disable: !p,
          trackParams: d,
          onClose: c
        }),
        footer: null,
        visible: t,
        onCancel: c,
        className: i(g.container, n),
        children: reactJsxRuntimeCoreReexport.jsxs(scrollViewComponent.ScrollView, {
          showScrollbar: true,
          scrollableClassName: "h-410",
          children: [reactJsxRuntimeCoreReexport.jsx(k, {
            trackParams: d
          }), reactJsxRuntimeCoreReexport.jsx(N, {
            loading: f,
            disable: !p,
            currentMemory: r,
            trackParams: d,
            data: v ?? []
          })]
        })
      });
    } else {
      return null;
    }
  };
  let F = () => {
    let [e, t] = reactCoreLibraryReexport.useState(false);
    return {
      onClickSettingBtn: e => {
        t(e);
      },
      renderMemoryModal: function (n = {}) {
        let {
          currentMemory: o,
          trackParams: l
        } = n;
        return e && reactJsxRuntimeCoreReexport.jsx("div", {
          onClick: e => e.stopPropagation(),
          children: reactJsxRuntimeCoreReexport.jsx(M, {
            currentMemory: o,
            trackParams: l,
            visible: e,
            onCancel: () => t(false)
          })
        });
      }
    };
  };
  require.d(exports, {
    useMemoryManagement: function () {
      return F;
    }
  });
}