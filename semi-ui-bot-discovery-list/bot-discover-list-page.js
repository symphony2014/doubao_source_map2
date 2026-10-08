// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'o' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 's' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'u' to 'botStoreManager'
// - Resolved require(359169) to 'bot-store-manager'
// - Renamed variable 'c' to 'constantDefinition'
// - Resolved require(129999) to 'constant-definition'
// - Renamed variable 'd' to 'samanthaTagSelector'
// - Resolved require(848347) to 'samantha-tag-selector'
// - Renamed variable 'h' to 'eventEmitterInstance'
// - Resolved require(842485) to 'event-emitter-instance'
// - Renamed variable 'f' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'v' to 'chatEnumConstants'
// - Resolved require(180943) to 'chat-enum-constants'
// - Renamed variable 'g' to 'useDebouncedValueHook'
// - Resolved require(510920) to 'use-debounced-value-hook'
// - Renamed variable 'm' to 'useRequestHook_1'
// - Resolved require(458670) to 'use-request-hook_1'
// - Renamed variable 'b' to 'storageWrapperWithFallback'
// - Resolved require(319763) to 'storage-wrapper-with-fallback'
// - Renamed variable 'w' to 'semiSpinComponent'
// - Resolved require(714437) to 'semi-spin-component'
// - Renamed variable 'y' to 'chatMaxWidthLayout'
// - Resolved require(871367) to 'chat-max-width-layout'
// - Renamed variable '_' to 'reactCarouselComponent'
// - Resolved require(464116) to 'react-carousel-component'
// - Renamed variable 'x' to 'useLocationWrapper'
// - Resolved require(999635) to 'use-location-wrapper'
// - Renamed variable 'S' to 'reactErrorBoundary'
// - Resolved require(528804) to 'react-error-boundary'
// - Renamed variable 'C' to 'debounceUtil_1_1'
// - Resolved require(887312) to 'debounce-util_1_1'
// - Renamed variable 'j' to 'rtlIconFactory'
// - Resolved require(682145) to 'rtl-icon-factory'
// - Renamed variable 'E' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'O' to 'rtlCloseIcon'
// - Resolved require(851909) to 'rtl-close-icon'
// - Renamed variable 'P' to 'rtlAwareInputWrapper'
// - Resolved require(91343) to 'rtl-aware-input-wrapper'
// - Renamed variable 'N' to 'botScrollViewComponent'
// - Resolved require(262272) to 'bot-scroll-view-component'
// - Updated imported property 'G' to 'createRtlIcon' (module 682145)
// - Updated imported property 'Z' to 'debounce' (module 887312)
// - Updated imported property 'e' to 'RTLInputComponent' (module 91343)
// - Updated imported property 'Z' to 'RtlCloseIcon' (module 851909)
// - Updated imported property 'GG' to 'guestBotStore' (module 359169)
// - Updated imported property 'cj' to 'botStore' (module 359169)
// - Updated imported property 'Z' to 'useDebouncedValue' (module 510920)
// - Updated imported property 'T' to 'useLocationWrapper' (module 999635)
// - Updated imported property 'yQ' to 'LocalStorageWrapper' (module 319763)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'cO' to 'useErrorBoundary' (module 528804)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 'Ts' to 'SearchApiService' (module 147875)
// - Updated imported property 'B' to 'useRequest' (module 458670)
// - Updated imported property 't' to 'constantValue' (module 129999)
// - Updated imported property 'UE' to 'SceneType' (module 180943)
// - Updated imported property 'l' to 'eventEmitter' (module 842485)
// - Updated imported property 'bo' to 'chatLayout' (module 871367)
// - Updated imported property 'l' to 'Carousel' (module 464116)
// - Updated imported property 'P' to 'SamanthaTagSelector' (module 848347)
// - Updated imported property 'Z' to 'BotScrollView' (module 262272)
// - Updated imported property 'Z' to 'Spin' (module 714437)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75546.100e73a4.js
         * chunkId: 75546
         * moduleId: 955363
         */
module.exports = function (module, exports, require) {
  var n;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var botStoreManager = require("bot-store-manager") /*id: 359169*/;
  var constantDefinition = require("constant-definition") /*id: 129999*/;
  var samanthaTagSelector = require("samantha-tag-selector") /*id: 848347*/;
  var eventEmitterInstance = require("event-emitter-instance") /*id: 842485*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  (n = {})[n.Conversation = 0] = "Conversation";
  n[n.Message = 1] = "Message";
  n[n.Bot = 2] = "Bot";
  n[n.All = 101] = "All";
  let p = n;
  var chatEnumConstants = require("chat-enum-constants") /*id: 180943*/;
  var useDebouncedValueHook = require("use-debounced-value-hook") /*id: 510920*/;
  var useRequestHook_1 = require("use-request-hook_1") /*id: 458670*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var reactCarouselComponent = require("react-carousel-component") /*id: 464116*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var reactErrorBoundary = require("react-error-boundary") /*id: 528804*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var Z = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fillRule: "evenodd",
      d: "M16.64 10.233a6.186 6.186 0 1 1-12.372 0 6.186 6.186 0 0 1 12.372 0m-1.84 6.662a7.953 7.953 0 1 1 1.949-1.8l4.363 4.363a1.325 1.325 0 1 1-1.875 1.875z",
      clipRule: "evenodd"
    })
  }), {}));
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var rtlAwareInputWrapper = require("rtl-aware-input-wrapper") /*id: 91343*/;
  let R = e => {
    let {
      useNewUIShow: t = false,
      value: r,
      onValueChange: n,
      t: i,
      trackEvent: o
    } = e;
    let s = (e, t) => {
      o(e, {
        enter_from: "bot_discover_page",
        ...t
      });
    };
    let u = reactCoreLibraryReexport.useCallback(debounceUtil_1_1.debounce(e => {
      if (e) {
        s("click_search_button", {
          enter_method: "auto"
        });
      }
    }, 500), []);
    reactCoreLibraryReexport.useEffect(() => {
      s("search_bar_show");
    }, []);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "botSearchWrapper-vzEhfc",
      "data-testid": "bot_discover_search",
      children: reactJsxRuntimeCoreReexport.jsx(rtlAwareInputWrapper.RTLInputComponent, {
        className: a("botSearch-o2yCeA", {
          "placeholder-MaF1Ay": t
        }),
        style: {
          backgroundColor: t ? "#f5f5f5" : ""
        },
        value: r,
        prefix: reactJsxRuntimeCoreReexport.jsx(Z, {
          className: a("searchIcon-MoiHtU", "rounded-12", {
            "iconColor-W1WhZw": t
          })
        }),
        placeholder: i("inapp_search_bot_placeholder"),
        onChange: e => {
          n(e);
          u(e);
        },
        onFocus: () => s("search_bar_click"),
        showClear: true,
        "data-testid": "bot_discover_search_input",
        clearIcon: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {})
      })
    });
  };
  var botScrollViewComponent = require("bot-scroll-view-component") /*id: 262272*/;
  let T = () => Number(new URLSearchParams(window.location.search).get("tagId"));
  let L = e => {
    let t = new URLSearchParams(window.location.search);
    t.set("tagId", e);
    history.pushState({}, "", `?${t.toString()}`);
  };
  let I = e => {
    let {
      isError: t = false,
      reload: r,
      t: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "searchBotNotFound-DuP5LW",
      children: t ? reactJsxRuntimeCoreReexport.jsx("div", {
        style: {
          cursor: "pointer",
          color: "#0066FF"
        },
        onClick: r,
        children: n("inapp_search_no_internet")
      }) : n("inapp_search_no_result")
    });
  };
  let D = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      noLogin: r = false,
      styleContainer: n,
      safeMargin: s = "15",
      extraNode: C,
      headerHeight: j,
      t: Z,
      trackEvent: O,
      enableRecommendSetting: P,
      isFromSeo: D,
      BotItem: M
    } = e;
    let k = r ? botStoreManager.guestBotStore : botStoreManager.botStore;
    let [B, A] = reactCoreLibraryReexport.useState("");
    let F = useDebouncedValueHook.useDebouncedValue(B, {
      wait: 500
    });
    let [$, V] = reactCoreLibraryReexport.useState(false);
    let [H, z] = reactCoreLibraryReexport.useState(false);
    let U = reactCoreLibraryReexport.useRef("");
    let K = reactCoreLibraryReexport.useRef(0);
    let W = reactCoreLibraryReexport.useRef(Date.now());
    let q = reactCoreLibraryReexport.useRef(null);
    let {
      enter_from: X
    } = useLocationWrapper.useLocationWrapper().state || {};
    let G = String(storageWrapperWithFallback.LocalStorageWrapper.getItem("discover_list_scroll_top"));
    let J = X === "chat_page" && G !== "null";
    let Y = isUndefinedCheck.isUndefined(C);
    let {
      showBoundary: Q
    } = reactErrorBoundary.useErrorBoundary();
    let [ee, et] = reactCoreLibraryReexport.useState(false);
    let [er, en] = reactCoreLibraryReexport.useState(1);
    reactCoreLibraryReexport.useEffect(() => {
      if (!r) {
        O("enter_page", {
          page: "bot_discover",
          is_tts: 0,
          is_from_ug: "0"
        });
      }
    }, [r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!r && $) {
        O("enter_page", {
          current_page: "bot_list_discover_search",
          page: "bot_list_discover_search",
          previous_page: "bot_list_discover",
          is_tts: 0,
          is_from_ug: "0"
        });
      }
    }, [$]);
    let el = !!F;
    let [ei, eo, es, ea, eu, ec] = k(e => [e.discoveryBotListStatus, e.loadRecommendBotList, e.discoveryBotLinks, e.initRecommendBotList, e.overrideBots, e.resetDiscoverBotListSelectedTagId], deepEqualityUtil_1.isDeepEqual);
    let ed = reactCoreLibraryReexport.useRef(0);
    reactCoreLibraryReexport.useEffect(() => {
      if (r && (ed.current++, ed.current !== 2)) {
        return;
      }
    }, [es]);
    let {
      hasMore: eh,
      loading: ef,
      count: ep,
      tagList: ev,
      selectedTagId: eg,
      failed: em,
      error: eb
    } = ei;
    let ew = reactCoreLibraryReexport.useRef(eg);
    if (em) {
      Q(eb || {});
    }
    let ey = async e => {
      let {
        pageSize: t,
        offset: r,
        searchValue: n
      } = e;
      if (!n) {
        eO(String(ew.current));
        return {
          total: 0,
          list: []
        };
      }
      {
        let e = await apiServicesCollection.SearchApiService.Search({
          keyword: n,
          index_type: p.Bot,
          offset: r,
          size: t
        }).catch(e => {
          z(true);
          et(true);
          O("report_search_error", {
            err: e
          });
          throw e;
        });
        let s = e.data?.bot_infos;
        let a = e.data?.total;
        z(false);
        et(true);
        eu((s == null ? undefined : s.map(e => e.bot_info)) || []);
        return {
          total: Number(a) ?? 0,
          list: s ?? []
        };
      }
    };
    let {
      data: e_,
      loading: ex = true,
      loadingMore: eS,
      loadMore: eC,
      noMore: ej,
      reload: eE
    } = useRequestHook_1.useRequest(e => ey({
      ...e,
      searchValue: F
    }), {
      initPageSize: 30,
      incrementSize: 30,
      resetDeps: [F]
    });
    let eZ = reactCoreLibraryReexport.useCallback(() => {
      if (!ef && eh) {
        eo({
          size: constantDefinition.constantValue,
          index: er + 1,
          recommendType: chatEnumConstants.SceneType.Discovery,
          tagId: eg
        });
        en(er + 1);
      }
    }, [ef, eh, eg]);
    let eO = async e => {
      var t;
      et(false);
      A("");
      let r = ev.find(t => String(t.tag_id) === e);
      ew.current = r == null ? undefined : r.tag_id;
      en(1);
      O("click_discover_page_tab", {
        tab_name: r == null ? undefined : r.tag_name,
        enter_method: "click"
      });
      if (ev.length > 0) {
        L(String(r == null ? undefined : r.tag_id));
      }
      await eo({
        size: constantDefinition.constantValue,
        index: 1,
        recommendType: chatEnumConstants.SceneType.Discovery,
        tagId: r == null ? undefined : r.tag_id
      });
      if ((t = q.current) !== null && t !== undefined) {
        t.scrollToTop();
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (q.current) {
        eventEmitterInstance.eventEmitter.on("bot.discover.goTop", () => {
          var e;
          if ((e = q.current) !== null && e !== undefined) {
            e.scrollToTop();
          }
        });
      }
    }, [q.current]);
    reactCoreLibraryReexport.useEffect(() => {
      if (J) {
        return;
      }
      let e = T() || (eg === -1 ? undefined : eg);
      ea({
        size: constantDefinition.constantValue,
        recommendType: chatEnumConstants.SceneType.Discovery,
        tagId: e
      });
    }, []);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (J && q.current) {
        var e;
        var t;
        if ((t = q.current) !== null && t !== undefined && (e = t.scrollTo) !== null && e !== undefined) {
          e.call(t, Number(G));
        }
        storageWrapperWithFallback.LocalStorageWrapper.setItem("discover_list_scroll_top", "null");
      }
    }, [es]);
    reactCoreLibraryReexport.useEffect(() => {
      if (U.current) {
        O("leave_discover_tab", {
          tab_name: U.current,
          tag_duration: String(Date.now() - W.current),
          bot_cnt: String(K.current)
        });
      }
      let t = ev.find(e => e.tag_id === eg);
      W.current = Date.now();
      U.current = (t == null ? undefined : t.tag_name) ?? "";
      K.current = 0;
      return () => {
        O("leave_discover_tab", {
          tab_name: U.current,
          tag_duration: String(Date.now() - W.current),
          bot_cnt: String(K.current)
        });
      };
    }, [eg]);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      isInSearch: () => el,
      scrollDomRef: () => q.current
    }));
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: a("container-Vr0z17"),
        style: n,
        children: [reactJsxRuntimeCoreReexport.jsx(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "mb-20 flex items-center justify-between",
            children: [Y && reactJsxRuntimeCoreReexport.jsx(reactCarouselComponent.Carousel, {
              enableArrowBorder: false,
              children: reactJsxRuntimeCoreReexport.jsx(samanthaTagSelector.SamanthaTagSelector, {
                value: [String(eg)],
                items: ev.map(e => {
                  let {
                    tag_id: t,
                    tag_name: r
                  } = e;
                  return {
                    key: String(t),
                    label: r
                  };
                }),
                className: "!block",
                itemClassName: "!inline-flex",
                onChange: e => {
                  let [t] = e;
                  return eO(t);
                }
              })
            }), P && Y && reactJsxRuntimeCoreReexport.jsx(R, {
              useNewUIShow: true,
              value: B,
              onValueChange: e => {
                if (!B) {
                  et(false);
                }
                A(e);
                if (e) {
                  ec();
                  if (!$) {
                    V(true);
                  }
                }
              },
              t: Z,
              trackEvent: O
            })]
          })
        }), F ? reactJsxRuntimeCoreReexport.jsx(botScrollViewComponent.BotScrollView, {
          showSkeleton: false,
          hasMore: !ej,
          loading: eS,
          onReachBottom: eC,
          safeMargin: s,
          useNewBotListPage: e_ && e_.list.length > 0,
          headerHeight: j,
          isFromSeo: D,
          enableRecommendSetting: P,
          children: ex ? reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
            size: "middle",
            style: {
              width: "24px",
              height: "24px"
            }
          }) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
            children: e_ && e_.list.length > 0 ? reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
              children: e_.list.map((e, t) => {
                return reactJsxRuntimeCoreReexport.jsx(M, {
                  searchBotInfo: e,
                  botID: e == null ? undefined : e.bot_info?.bot_id,
                  index: t,
                  noLogin: r
                }, `${t}_${e.bot_info.bot_id}`);
              })
            }) : ee && reactJsxRuntimeCoreReexport.jsx(I, {
              isError: H,
              reload: eE,
              t: Z
            })
          })
        }) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: reactJsxRuntimeCoreReexport.jsx(botScrollViewComponent.BotScrollView, {
            ref: q,
            showSkeleton: !ep,
            hasMore: eh,
            loading: ef,
            onReachBottom: eZ,
            onScroll: () => {
              O("slide_discover_page");
            },
            safeMargin: s,
            useNewBotListPage: true,
            headerHeight: j,
            isFromSeo: D,
            enableRecommendSetting: P,
            "data-testid": "bot_discover_recommend_list",
            children: es.map((e, t) => {
              let {
                botID: n
              } = e;
              return reactJsxRuntimeCoreReexport.jsx(M, {
                botID: n,
                index: t,
                noLogin: r,
                "data-testid": `bot_discover_bot_item_${t}`
              }, n);
            })
          })
        })]
      })
    });
  });
  require.r(exports);
  require.d(exports, {
    DiscoverBotList: function () {
      return D;
    }
  });
}