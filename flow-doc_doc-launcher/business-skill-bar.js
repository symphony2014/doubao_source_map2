// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'BusinessSkillBar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 342181
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var skillStateHook = require("skill-state-hook") /*id: 377944*/;
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var arrowRightRtlIcon = require("arrow-right-rtl-icon") /*id: 371018*/;
  let g = (e, t) => t.some(t => t.value === e || !!t.subOptions && !!g(e, t.subOptions));
  var _ = {
    "top-divider": "top-divider-aJrvEi",
    topDivider: "top-divider-aJrvEi",
    container: "container-MWoWM8",
    "theme-primary": "theme-primary-mzRdkc",
    themePrimary: "theme-primary-mzRdkc",
    "theme-rounded": "theme-rounded-CtyJFN",
    themeRounded: "theme-rounded-CtyJFN",
    "icon-size-small": "icon-size-small-wyIVG8",
    iconSizeSmall: "icon-size-small-wyIVG8",
    "icon-size-middler": "icon-size-middler-kIDEQi",
    iconSizeMiddler: "icon-size-middler-kIDEQi",
    "icon-size-middle": "icon-size-middle-xKhaaX",
    iconSizeMiddle: "icon-size-middle-xKhaaX",
    "font-size-middle": "font-size-middle-mNZcmk",
    fontSizeMiddle: "font-size-middle-mNZcmk",
    "font-size-large": "font-size-large-leYBUN",
    fontSizeLarge: "font-size-large-leYBUN",
    loading: "loading-CxpIoW",
    icon: "icon-CjS0dD",
    "new-icon": "new-icon-xb8CT0",
    newIcon: "new-icon-xb8CT0",
    content: "content-pPWzdg",
    title: "title-a5adwt",
    small: "small-y7eSCk",
    desc: "desc-gqBlCt",
    "selected-icon": "selected-icon-UME2r_",
    selectedIcon: "selected-icon-UME2r_",
    "sub-options-icon": "sub-options-icon-xwXuOZ",
    subOptionsIcon: "sub-options-icon-xwXuOZ",
    disabled: "disabled-AwfTDR",
    hovered: "hovered-wpg2oH",
    selected: "selected-oNJwdV"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = "magic_null_value";
  function w(e) {
    let {
      className: t,
      style: n,
      subOptionsPopoverProps: r = {},
      onSelect: o,
      onMouseDown: a,
      currentValue: l,
      itemValue: c,
      theme: u = "primary",
      iconSize: w = "small",
      fontSize: S = "middle",
      highlightWhenChecked: x = true,
      itemTitleClassName: C,
      subOptionsVisible: k = false,
      onSubOptionsVisibleChange: T,
      onEnter: E,
      onLeave: I,
      onInViewChange: j,
      PopoverSelectSlot: R,
      label: N,
      subLabel: $,
      value: M,
      disabled: P = false,
      checked: L = false,
      loading: D = false,
      topDivider: O = false,
      top: Z,
      waitForPromise: A = false,
      visible: W = true,
      hovered: B = false,
      rightIcon: F,
      icon: z,
      newIcon: H,
      subOptions: V = [],
      wrapper: U,
      onClick: X,
      onBeforeClick: K,
      onVisibleChange: G
    } = e;
    let [J, q] = reactCoreLibraryReexport.useState(k);
    let Q = L || l === M;
    let Y = g(l, V) ? l : undefined;
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (T != null) {
        T(J);
      }
    }, [J]);
    reactUseUpdateEffect.useUpdateEffect(() => {
      q(k);
    }, [k]);
    reactCoreLibraryReexport.useEffect(() => {
      if (B) {
        if (E != null) {
          E();
        }
      }
    }, [B]);
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (!B && I != null) {
        I();
      }
    }, [B]);
    let ee = reactJsxRuntimeCoreReexport.jsx(reactIntersectionObserver_1.InView, {
      onChange: j,
      children: e => {
        let {
          ref: i
        } = e;
        return reactJsxRuntimeCoreReexport.jsxs("div", {
          "data-testid": "popover_select_option_item",
          "data-value": c,
          ref: i,
          onMouseEnter: E,
          onMouseLeave: I,
          className: s(_.container, t, _[`icon-size-${w}`], _[`font-size-${S}`], _[`theme-${u}`], {
            [_.selected]: x && Q,
            [_.disabled]: P,
            [_.loading]: D,
            [_.hovered]: B
          }),
          style: n,
          onClick: async e => {
            if (!P && !V.length) {
              e.stopPropagation();
              if (K != null) {
                K();
              }
              if (A) {
                if ((await (X == null ? undefined : X())) === false) {
                  return;
                }
              } else if ((X == null ? undefined : X()) === false) {
                return;
              }
              if (o != null) {
                o(M);
              }
            }
          },
          onMouseDown: a,
          children: [z && reactJsxRuntimeCoreReexport.jsx("div", {
            className: s(_.icon, {
              [_["new-icon"]]: H != null && H
            }),
            children: z
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: _.content,
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: s(_.title, C, {
                [_.small]: !!$
              }),
              children: N
            }), $ && reactJsxRuntimeCoreReexport.jsx("div", {
              className: _.desc,
              children: $
            })]
          }), !D && x && Q && reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {
            className: _["selected-icon"]
          }), D && reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
            wrapperClassName: _.loading
          }), V.length ? reactJsxRuntimeCoreReexport.jsx(arrowRightRtlIcon.ArrowRightRtlIcon, {
            className: _["sub-options-icon"]
          }) : F]
        });
      }
    });
    if (!W) {
      return null;
    }
    let et = reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [O && reactJsxRuntimeCoreReexport.jsx("div", {
        className: _["top-divider"]
      }), Z, V.length ? reactJsxRuntimeCoreReexport.jsx(R, {
        ...r,
        fontSize: S,
        iconSize: w,
        theme: u,
        newIcon: H,
        highlightWhenChecked: x,
        position: "rightTop",
        spacing: 8,
        defaultValue: y,
        options: V,
        visible: J,
        onVisibleChange: q,
        onMouseDown: a,
        value: Y,
        onChange: e => {
          if (!isUndefinedCheck.isUndefined(e) && e !== y) {
            if (o != null) {
              o(e);
            }
          }
        },
        children: ee
      }) : ee]
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: U ? U(et, () => G == null ? undefined : G(false)) : et
    });
  }
  var S = {
    container: "container-RBMTaX",
    "theme-primary": "theme-primary-xOxCZs",
    themePrimary: "theme-primary-xOxCZs",
    "theme-rounded": "theme-rounded-ATtZLr",
    themeRounded: "theme-rounded-ATtZLr",
    "selection-content": "selection-content-gvlYHd",
    selectionContent: "selection-content-gvlYHd",
    scrollable: "scrollable-U_PFsk",
    "select-title": "select-title-_yLxLP",
    selectTitle: "select-title-_yLxLP",
    text: "text-T6QAhu"
  };
  function x(e) {
    let {
      popoverContentRef: t,
      className: n,
      style: a,
      contentClassName: h,
      contentStyle: f,
      contentProps: p,
      itemClassName: m,
      itemTitleClassName: v,
      children: g,
      content: _,
      disabled: y = false,
      title: C,
      options: k,
      defaultValue: T,
      value: E,
      onChange: I,
      visible: j,
      onVisibleChange: R,
      forceVisible: N,
      position: $ = "bottom",
      spacing: M = 0,
      iconSize: P,
      theme: L = "primary",
      fontSize: D,
      selectable: O = true,
      scrollable: Z = true,
      showScroller: A = true,
      highlightWhenChecked: W,
      newIcon: B,
      bottom: F,
      rePosKey: z,
      onMouseDown: H,
      onItemInViewChange: V,
      onItemClick: U,
      trigger: X = "custom",
      hideWhenClickOutside: K = true,
      ...G
    } = e;
    let [J, q] = skillStateHook.useSkillState({
      defaultValue: T,
      value: E,
      onChange: I
    });
    let [Q, Y] = skillStateHook.useSkillState({
      defaultValue: false,
      value: j,
      onChange: R
    });
    let [ee, et] = reactCoreLibraryReexport.useState();
    let en = N ?? Q;
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (!Q) {
        et(undefined);
      }
    }, [Q]);
    reactCoreLibraryReexport.useEffect(() => {
      if (y) {
        Y(false);
      }
    }, [y]);
    let ei = async e => {
      if (O) {
        q(e);
        await promiseAsyncUtilities.createDelayedPromise(50);
      }
      Y(false);
    };
    let er = e => {
      e.preventDefault();
      if (H != null) {
        H(e);
      }
    };
    let eo = reactJsxRuntimeCoreReexport.jsxs("div", {
      ...p,
      ref: t,
      className: s(S["selection-content"], h, {
        [S.scrollable]: Z,
        "flow-scrollbar": A
      }),
      style: f,
      children: [isStringTypeCheck.isString(C) ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: S["select-title"],
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: S.text,
          children: C
        })
      }) : C, k.map(e => {
        let {
          value: t,
          newIcon: n = B
        } = e;
        return reactCoreLibraryReexport.createElement(w, {
          ...e,
          subOptionsPopoverProps: {
            contentClassName: h,
            contentStyle: f,
            scrollable: Z,
            selectable: O,
            rePosKey: z,
            onItemInViewChange: t => {
              let {
                current: n,
                parents: i,
                visible: r
              } = t;
              if (V != null) {
                V({
                  visible: r,
                  current: n,
                  parents: e ? [...i, e] : i
                });
              }
            },
            onItemClick: t => {
              let {
                current: n,
                parents: i
              } = t;
              if (U != null) {
                U({
                  current: n,
                  parents: e ? [...i, e] : i
                });
              }
            }
          },
          key: t,
          itemValue: t,
          className: m,
          itemTitleClassName: v,
          iconSize: P,
          fontSize: D,
          newIcon: n,
          theme: L,
          highlightWhenChecked: W,
          currentValue: J,
          PopoverSelectSlot: x,
          onMouseDown: er,
          onSelect: ei,
          onVisibleChange: R,
          subOptionsVisible: ee === t,
          onSubOptionsVisibleChange: e => {
            if (ee === t && !e) {
              et(undefined);
            }
          },
          onEnter: () => {
            et(t);
          },
          onInViewChange: t => {
            if (V != null) {
              V({
                visible: t,
                current: e,
                parents: []
              });
            }
          },
          onBeforeClick: () => {
            if (U != null) {
              U({
                current: e,
                parents: []
              });
            }
          }
        });
      }), F]
    });
    let ea = {
      setVisible: Y,
      value: J,
      option: k.find(e => e.value === J)
    };
    let es = isFunctionUtil_1.isFunction(_) ? _(ea) : _;
    return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
      trigger: X,
      position: $,
      content: es || eo,
      spacing: M,
      className: s(S.container, n, S[`theme-${L}`]),
      style: a,
      visible: en,
      onVisibleChange: Y,
      onClickOutSide: () => {
        var e;
        var t;
        if (K && (!ee || (t = k.find(e => e.value === ee)) === null || t === undefined || (e = t.subOptions) === null || e === undefined || !e.length)) {
          Y(false);
        }
      },
      rePosKey: z,
      "data-visible": en,
      ...G,
      children: isFunctionUtil_1.isFunction(g) ? g(ea) : g
    });
  }
  require.d(exports, {
    BusinessSkillBar: function () {
      return x;
    }
  });
}