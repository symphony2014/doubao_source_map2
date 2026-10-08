// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'TemplateSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 276405
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var arrayValueFinder = require("array-value-finder") /*id: 421495*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var aiPptTemplateStore_1 = require("ai-ppt-template-store_1") /*id: 698449*/;
  var aiPptTemplateStore = require("ai-ppt-template-store") /*id: 603769*/;
  var p = {
    customVerticalScrollBar: "customVerticalScrollBar-AqLGoj",
    scrollbarHidden: "scrollbarHidden-AmGhp8",
    customHorizenScrollBar: "customHorizenScrollBar-cLxllU"
  };
  let _ = {
    direction: "vertical"
  };
  function v(e) {
    let {
      direction: t = "vertical"
    } = e || _;
    let [l, n] = reactCoreLibraryReexport.useState(false);
    let o = reactCoreLibraryReexport.useMemo(() => {
      let e;
      return () => {
        n(true);
        if (e) {
          clearTimeout(e);
        }
        e = setTimeout(() => {
          n(false);
        }, 1000);
      };
    }, []);
    if (t === "vertical") {
      return {
        listenScroll: o,
        className: r(p.customVerticalScrollBar, l ? "" : p.scrollbarHidden)
      };
    } else {
      return {
        listenScroll: o,
        className: r(p.customHorizenScrollBar, l ? "" : p.scrollbarHidden)
      };
    }
  }
  var aiPptCustomTemplateCard = require("ai-ppt-custom-template-card") /*id: 740723*/;
  var autoRecommendCardComponent = require("auto-recommend-card-component") /*id: 541404*/;
  var imagePreloadCardComponent = require("image-preload-card-component") /*id: 899467*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let w = e => {
    let {
      cardList: t,
      activeId: l,
      setActiveId: n,
      className: o,
      onScroll: a,
      loadMore: s,
      onCardInView: c,
      selectedCategoryId: d,
      loading: u,
      showCustomStyleUpload: p,
      showAutoRecommend: _,
      onClose: v,
      onCardClick: w
    } = e;
    let y = reactCoreLibraryReexport.useRef(null);
    (function (e, t) {
      let l = reactCoreLibraryReexport.useRef(t);
      l.current = t;
      reactCoreLibraryReexport.useEffect(() => {
        let t = e.current;
        if (!t) {
          return;
        }
        let i = () => {
          var e;
          var i;
          let {
            scrollTop: n,
            clientHeight: o,
            scrollHeight: a
          } = t;
          if (a <= o) {
            if ((e = l.current) !== null && e !== undefined) {
              e.call(l);
            }
          } else if (n + o >= a - 5) {
            if ((i = l.current) !== null && i !== undefined) {
              i.call(l);
            }
          }
        };
        t.addEventListener("scroll", i);
        i();
        return () => {
          t.removeEventListener("scroll", i);
        };
      }, [e.current]);
    })(y, s);
    let [C, S] = reactCoreLibraryReexport.useState(0);
    let E = reactCoreLibraryReexport.useRef(d || "");
    let k = reactCoreLibraryReexport.useRef(new Set());
    let R = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (d !== E.current) {
        R.current = true;
        E.current = d || "";
      }
    }, [d]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!u && R.current) {
        k.current = new Set();
        S(e => e + 1);
        R.current = false;
      }
    }, [u]);
    let x = reactCoreLibraryReexport.useCallback((e, t) => {
      if (u) {
        return;
      }
      let l = `${e.id}_${t}`;
      if (!k.current.has(l)) {
        k.current.add(l);
        if (c != null) {
          c(e);
        }
      }
    }, [u]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: y,
      onScroll: a,
      className: r("grid gap-y-16 gap-x-12", "grid-cols-1", "dbx-xs:grid-cols-2", "dbx-sm:grid-cols-3", "dbx-md:grid-cols-4", "cardList-BTlo7y", o),
      children: [!u && p && reactJsxRuntimeCoreReexport.jsx(aiPptCustomTemplateCard.AIPptCustomTemplateCard, {
        item: aiPptTemplateStore.customUploadCard,
        onFileSelected: v,
        onCardInView: () => x(aiPptTemplateStore.customUploadCard, 0),
        onClick: () => w == null ? undefined : w(aiPptTemplateStore.customUploadCard)
      }), !u && _ && reactJsxRuntimeCoreReexport.jsx(autoRecommendCardComponent.AutoRecommendCard, {
        item: aiPptTemplateStore.autoRecCardItem,
        active: l === aiPptTemplateStore.autoRecCardId,
        onClick: () => {
          if (w != null) {
            w(aiPptTemplateStore.autoRecCardItem);
          }
          n(aiPptTemplateStore.autoRecCardId);
        },
        onCardInView: () => x(aiPptTemplateStore.autoRecCardItem, 0)
      }), t.map((e, t) => reactJsxRuntimeCoreReexport.jsx(imagePreloadCardComponent.CardComponent, {
        active: e.id === l,
        item: e,
        onClick: () => {
          if (w != null) {
            w(aiPptTemplateStore.autoRecCardItem);
          }
          n(e.id);
        },
        onShow: () => undefined,
        onCardInView: () => x(e, t),
        tabVersion: C
      }, `${e.cover_url}-${t}`))]
    });
  };
  var y = {
    templateSelectorModule: "templateSelectorModule-zhvGwQ",
    cardList: "cardList-jfeGaw",
    moduleContent: "moduleContent-UumQOD",
    hideRight: "hideRight-eik4vb",
    moduleLeft: "moduleLeft-tUuHdl",
    moduleRight: "moduleRight-qyFZuJ",
    pageCover: "pageCover-QPKLtQ",
    spin: "spin-Qu5QvS",
    tab: "tab-tyQ8X0",
    tabItem: "tabItem-AkJcIV",
    tabTitle: "tabTitle-lVklqi",
    active: "active-FyCGVe",
    titleAnchor: "titleAnchor-jvWInU"
  };
  let C = e => {
    let {
      showModule: t,
      setShowModule: l,
      onConfirm: a,
      onCardInView: p,
      onCardClick: _
    } = e;
    let [g, h] = reactCoreLibraryReexport.useState(false);
    let f = i18nTranslationUtils.useTranslationWithFallback();
    let [C, S] = reactCoreLibraryReexport.useState(0);
    let [E, k] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useEffect(() => h(g || t), [g, t]);
    let {
      cardList: R,
      templateCategories: x,
      fetchCardList: T,
      loadMore: I,
      selectedCategoryId: $,
      selectCategoryId: N,
      loading: A,
      category_id: P,
      showCustomUploadCard: W,
      showAutoRecommendCard: j
    } = aiPptTemplateStore_1.aiPptTemplateStore(e => ({
      cardList: e.cardList,
      templateCategories: e.templateCategories,
      fetchCardList: e.fetchCardList,
      loadMore: e.loadMore,
      selectedCategoryId: e.selectedCategoryId,
      selectCategoryId: e.selectCategoryId,
      loading: e.loading,
      category_id: e.category_id,
      showCustomUploadCard: e.showCustomUploadCard,
      showAutoRecommendCard: e.showAutoRecommendCard
    }), deepEqualityUtil.deepEqual);
    let [O, L] = reactCoreLibraryReexport.useState(true);
    let M = reactCoreLibraryReexport.useMemo(() => [{
      label: "aispace_tab_all",
      value: undefined
    }, ...x.map(e => ({
      label: e.name,
      value: e.id
    }))], [x]);
    let [F, D] = reactCoreLibraryReexport.useState("");
    let U = reactCoreLibraryReexport.useMemo(() => arrayValueFinder.valueFinder(M, {
      value: $
    }), [$, M]);
    reactCoreLibraryReexport.useEffect(() => {
      if (g) {
        T(aiPptTemplateStore_1.aiPptTemplateStore.getState().selectedCategoryId);
      }
    }, [g]);
    let {
      className: Z,
      listenScroll: B
    } = v();
    let {
      className: H,
      listenScroll: V
    } = v();
    let {
      className: z,
      listenScroll: G
    } = v({
      direction: "horizen"
    });
    let X = reactCoreLibraryReexport.useMemo(() => F === aiPptTemplateStore.autoRecCardId || W && !F ? aiPptTemplateStore.autoRecCardItem : R.find(e => e.id === F) || (R == null ? undefined : R[0]), [R, F, W]);
    reactCoreLibraryReexport.useEffect(() => {
      L(true);
      if (!t) {
        return;
      }
      let e = setTimeout(() => {
        L(false);
      }, 300);
      return () => {
        clearTimeout(e);
      };
    }, [t]);
    if (g) {
      return reactJsxRuntimeCoreReexport.jsx(modalConfirmDialogManager.ModalConfirmDialog, {
        visible: t,
        title: f("slides_mainPage_inputBox_template", "模板"),
        size: "full-width",
        maskClosable: false,
        onCancel: () => l(false),
        className: y.templateSelectorModule,
        okText: f("edit_chat_name_done"),
        cancelText: f("edit_chat_name_cancel"),
        onOk: () => {
          l(false);
          a(X, U == null ? undefined : U.label);
        },
        children: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
          spinning: A || O,
          wrapperClassName: y.spin,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: r({
              [y.moduleContent]: true
            }),
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: "h-[60vh] max-h-[750px] overflow-y-auto",
              children: reactJsxRuntimeCoreReexport.jsx(w, {
                showCustomStyleUpload: W,
                showAutoRecommend: j,
                onClose: () => l(false),
                onCardClick: _,
                className: r(H, y.cardList, y.heightControl),
                loadMore: I,
                onScroll: V,
                cardList: O ? [] : R,
                activeId: X == null ? undefined : X.id,
                selectedCategoryId: U == null ? undefined : U.value,
                setActiveId: D,
                onCardInView: e => {
                  if (p != null) {
                    p(e, U == null ? undefined : U.label);
                  }
                },
                loading: A || O
              })
            })
          })
        })
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    TemplateSelector: function () {
      return C;
    }
  });
}