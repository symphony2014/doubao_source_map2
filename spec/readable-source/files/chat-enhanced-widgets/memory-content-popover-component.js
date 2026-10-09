// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'MemoryContentPopover'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 188650
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var samanthaPopoverWrapperComponent = require("samantha-popover-wrapper-component") /*id: 137563*/;
  var arrowRightRtlIcon = require("arrow-right-rtl-icon") /*id: 371018*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var p = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M12 3.142a3.97 3.97 0 0 1 3.858-.458 3.97 3.97 0 0 1 2.404 3.053 3.97 3.97 0 0 1 3.053 2.404A3.97 3.97 0 0 1 20.857 12a3.97 3.97 0 0 1 .458 3.858 3.97 3.97 0 0 1-3.053 2.404 3.97 3.97 0 0 1-2.404 3.053A3.97 3.97 0 0 1 12 20.857a3.97 3.97 0 0 1-3.859.458 3.97 3.97 0 0 1-2.404-3.053 3.97 3.97 0 0 1-3.053-2.404A3.97 3.97 0 0 1 3.142 12a3.97 3.97 0 0 1-.458-3.859 3.97 3.97 0 0 1 3.053-2.404 3.97 3.97 0 0 1 2.404-3.053A3.97 3.97 0 0 1 12 3.142m-.916 1.615a2.14 2.14 0 0 0-3.555 1.78.917.917 0 0 1-.992.992 2.14 2.14 0 0 0-1.56 3.77.917.917 0 0 1 0 1.403 2.14 2.14 0 0 0 1.56 3.768.918.918 0 0 1 .992.993 2.14 2.14 0 0 0 3.555 1.78zm4.073-.38a2.14 2.14 0 0 0-2.24.379v14.488a2.14 2.14 0 0 0 3.554-1.781.917.917 0 0 1 .992-.993 2.14 2.14 0 0 0 1.56-3.77.917.917 0 0 1 0-1.401 2.141 2.141 0 0 0-1.56-3.77.917.917 0 0 1-.992-.992 2.14 2.14 0 0 0-1.314-2.16"
    })
  }), {}));
  var mainBotMemoryStoreHook = require("main-bot-memory-store-hook") /*id: 404006*/;
  var botMemoryManagementModal = require("bot-memory-management-modal") /*id: 640220*/;
  var g = {
    memoryContent: "memoryContent-DmwQLR",
    "memoryContent-update": "memoryContent-update-CfvaIE",
    memoryText: "memoryText-pMHNqP",
    memoryIcon: "memoryIcon-JywE7X",
    popoverWrapper: "popoverWrapper-vRLoWU",
    popoverTitle: "popoverTitle-Jh9xiv",
    popoverDesc: "popoverDesc-Eb_M7n"
  };
  let x = e => {
    let {
      title: t,
      desc: n,
      showMemoryManagePage: o = false,
      onClickTitle: l
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex-column flex !items-start gap-4",
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: a(g.popoverTitle, {
            "cursor-pointer": o
          }),
          onClick: () => {
            if (o) {
              if (l != null) {
                l();
              }
            }
          },
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            children: t
          }), o && reactJsxRuntimeCoreReexport.jsx(arrowRightRtlIcon.ArrowRightRtlIcon, {
            className: "!text-10"
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: g.popoverDesc,
          children: n
        })]
      })
    });
  };
  let k = e => {
    let {
      value: t,
      isUpdate: n,
      conversationId: i,
      trackEvent: m
    } = e;
    let h = i18nTranslationUtils.useTranslationWithFallback();
    let k = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let [w, b] = reactCoreLibraryReexport.useState(false);
    let y = mainBotMemoryStoreHook.useMainBotMemoryStore(e => {
      return e.main_bot_setting?.enable_main_bot_memory;
    }, deepEqualityUtil.deepEqual);
    let C = k && y;
    let R = n || (t == null ? undefined : t.memory_loading);
    let {
      onClickSettingBtn: j,
      renderMemoryModal: N
    } = botMemoryManagementModal.useMemoryManagement();
    let [S] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false,
      threshold: 1,
      onChange: e => {
        if (e) {
          if (m != null) {
            m("show_memory_content_detail", {
              content: t == null ? undefined : t.memory_action_tag,
              enter_from: "chat"
            });
          }
        }
      }
    });
    let {
      memoryText: T,
      popoverTitle: E,
      popoverContent: $
    } = functionInvoker.invoke(() => {
      let {
        memory_action_title: n,
        memory_actions: o
      } = t ?? {};
      if (R) {
        return {
          memoryText: n,
          popoverTitle: C ? h("new_memory_manage_toggle") : "",
          popoverContent: ""
        };
      }
      let {
        memory_tip_title: l,
        memory_tip_sub_title: r
      } = (o == null ? undefined : o[0]) ?? {};
      return {
        memoryText: n,
        popoverTitle: C ? h("new_memory_manage_toggle") : l,
        popoverContent: r
      };
    });
    let W = () => {
      b(!w);
      if (m != null) {
        m("click_memory_content_detail", {
          content: t == null ? undefined : t.memory_action_tag,
          enter_from: "chat"
        });
      }
    };
    let Z = () => reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: S,
      className: a(g.memoryContent, {
        [g["memoryContent-update"]]: R
      }),
      onClick: () => {
        if (!R) {
          W();
        }
      },
      children: [reactJsxRuntimeCoreReexport.jsx(p, {
        className: a(g.memoryIcon, "memoryIcon")
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: a(g.memoryText, "memoryText"),
        children: T
      })]
    });
    reactCoreLibraryReexport.useEffect(() => {
      mainBotMemoryStoreHook.useMainBotMemoryStore.getState().getMainBotSetting();
    }, [i]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [R ? Z() : reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
        className: g.popoverWrapper,
        showArrow: true,
        position: "top",
        trigger: "click",
        visible: w,
        onClickOutSide: () => {
          b(false);
        },
        content: x({
          title: E,
          desc: $,
          showMemoryManagePage: C,
          onClickTitle: () => {
            b(false);
            j(true);
          }
        }),
        children: Z()
      }), N({
        currentMemory: $,
        trackParams: {
          enter_from: "chat",
          conversation_id: i
        }
      })]
    });
  };
  require.d(exports, {
    MemoryContentPopover: function () {
      return k;
    }
  });
}