// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'reactIntersectionObserver_1'
// - Resolved require(728951) to 'react-intersection-observer_1'
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'isNumberUtil'
// - Resolved require(897814) to 'is-number-util'
// - Renamed variable 'l' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'u' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'd' to 'resizeObserverHooks'
// - Resolved require(246619) to 'resize-observer-hooks'
// - Renamed variable 'c' to 'usePreviousHook'
// - Resolved require(903727) to 'use-previous-hook'
// - Renamed variable 'f' to 'semiInputComponent'
// - Resolved require(410861) to 'semi-input-component'
// - Renamed variable 'p' to 'svgShuffleIcon'
// - Resolved require(281227) to 'svg-shuffle-icon'
// - Renamed variable 'h' to 'isObjectOrFunction_1_1'
// - Resolved require(433743) to 'is-object-or-function_1_1'
// - Renamed variable 'v' to 'isNullCheck'
// - Resolved require(36126) to 'is-null-check'
// - Renamed variable 'x' to 'dbxDropdownMenuComponents'
// - Resolved require(491728) to 'dbx-dropdown-menu-components'
// - Renamed variable 'b' to 'chevronDownIcon_1_1'
// - Resolved require(452133) to 'chevron-down-icon_1_1'
// - Renamed variable 'y' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'E' to 'toutiaoSearchConstants'
// - Resolved require(937588) to 'toutiao-search-constants'
// - Renamed variable 'M' to 'cardWrapperComponent'
// - Resolved require(201819) to 'card-wrapper-component'
// - Updated imported property 'u' to 'ChevronDownIcon' (module 452133)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'y' to 'useResizeObserverEx' (module 246619)
// - Updated imported property 'YD' to 'useInView' (module 728951)
// - Updated imported property 'Z' to 'isNumber' (module 897814)
// - Updated imported property 'Z' to 'usePrevious' (module 903727)
// - Updated imported property 'N6' to 'apiBaseUrl' (module 937588)
// - Updated imported property 'Z' to 'isObjectOrFunction' (module 433743)
// - Updated imported property 'Z' to 'isNull' (module 36126)
// - Updated imported property 'l' to 'CardWrapper' (module 201819)
// - Updated imported property 'Z' to 'InputComponent' (module 410861)
// - Updated imported property 'U' to 'ShuffleIcon' (module 281227)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 4172.4a5095ba.js
         * chunkId: 4172
         * moduleId: 704017
         */
module.exports = function (module, exports, require) {
  var r;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var usePreviousHook = require("use-previous-hook") /*id: 903727*/;
  var semiInputComponent = require("semi-input-component") /*id: 410861*/;
  var svgShuffleIcon = require("svg-shuffle-icon") /*id: 281227*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var isNullCheck = require("is-null-check") /*id: 36126*/;
  function m(e) {
    return Number(e.toFixed(4));
  }
  (r = {}).ChangeFromType = "changeFromType";
  r.ChangeToType = "changeToType";
  r.ChangeFromInput = "changeFromInput";
  r.ChangeToInput = "changeToInput";
  r.UpdateRate = "updateRate";
  r.SwapCurrency = "swapCurrency";
  let g = r;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var chevronDownIcon_1_1 = require("chevron-down-icon_1_1") /*id: 452133*/;
  var w = "select-item-en-iL_xxW";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let C = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      list: r,
      value: o,
      currentItem: a,
      isNarrow: l = false,
      onChange: u
    } = e;
    let [d, c] = reactCoreLibraryReexport.useState(false);
    let f = e => reactJsxRuntimeCoreReexport.jsxs("div", {
      className: s("select-item-oCFEp0", "text-dbx-text-primary"),
      children: [e == null ? undefined : e.name, reactJsxRuntimeCoreReexport.jsx("span", {
        className: s(w),
        children: ` ${e == null ? undefined : e.signal}`
      })]
    });
    let p = e => {
      u(e);
    };
    return reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
      onOpenChange: c,
      children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {
        className: s("w-1/2"),
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          ref: t,
          className: s("inner-tFVcU4", "border-r-1 border-solid border-dbx-line-10 cursor-pointer", "hover:bg-dbx-fill-trans-10", {
            "inner-narrow-CEpwT3": l
          }),
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: s("type-ezTmxk", "text-dbx-text-primary", {
              "type-narrow-IHlE0g": l
            }),
            children: [o == null ? undefined : o.name, reactJsxRuntimeCoreReexport.jsx("span", {
              className: s(w),
              children: ` ${(a == null ? undefined : a.signal) ?? (o == null ? undefined : o.value)}`
            })]
          }), reactJsxRuntimeCoreReexport.jsx(chevronDownIcon_1_1.ChevronDownIcon, {
            className: s("icon-ld2PNc", "text-dbx-text-primary", l ? "size-12" : "size-14", {
              "up-qWPyAr": d
            })
          })]
        })
      }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
        children: reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
          children: r.map(e => reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuItemWithVariants, {
            className: s("flex items-center"),
            onSelect: () => p(e),
            active: (a == null ? undefined : a.name) === e.name,
            children: f(e)
          }, e.name))
        })
      })]
    });
  });
  var toutiaoSearchConstants = require("toutiao-search-constants") /*id: 937588*/;
  var cardWrapperComponent = require("card-wrapper-component") /*id: 201819*/;
  var j = {
    "equal-source": "equal-source-ZELBXo",
    "equal-source-mobile": "equal-source-mobile-DgRMeO",
    "equal-source-en": "equal-source-en-Zy6kX7",
    "equal-result": "equal-result-J2ZGey",
    "equal-result-mobile": "equal-result-mobile-uAbIIP",
    input: "input-h_RPka",
    "input-narrow": "input-narrow-Divo14",
    tip: "tip-crbc0a",
    "no-select": "no-select-SSBE4d"
  };
  let _ = e => {
    let {
      optionsGroup: n,
      keyToOptionGroup: r,
      state: u
    } = function (e) {
      var t;
      var n;
      var r;
      var o;
      var c;
      let {
        display: x,
        keyinfo: b
      } = e ?? {};
      let {
        fromshow: w,
        toshow: y,
        rate_info: C,
        show_name: E
      } = x ?? {};
      let M = [];
      let j = /[A-Z]/;
      let _ = (x == null ? undefined : (r = x.lists) === null || r === undefined ? undefined : (n = r.find(e => e.label && !e.label.match(j))) === null || n === undefined ? undefined : (t = n.node) === null || t === undefined ? undefined : t.filter(e => !isUndefinedCheck.isUndefined(e))) ?? [];
      if (x != null && (o = x.lists) !== null && o !== undefined) {
        o.filter(e => {
          var t;
          if (e == null) {
            return undefined;
          } else if ((t = e.label) === null || t === undefined) {
            return undefined;
          } else {
            return t.match(j);
          }
        }).forEach(e => {
          M = [...M, ...((e == null ? undefined : e.node) ?? [])];
        });
      }
      let R = M && (c = M.map(e => e && _ && !_.find(t => t.signal === e.signal) ? e : {
        name: "",
        image: "",
        signal: ""
      }).filter(e => e.name)) !== null && c !== undefined ? c : [];
      let S = [...(_ || []), ...(R || [])].filter(e => !isUndefinedCheck.isUndefined(e));
      let T = {};
      S.forEach(e => {
        if (e) {
          T[e.signal] = e;
        }
      });
      let D = Number(C == null ? undefined : C.data?.rate);
      let N = Number(C == null ? undefined : C.data?.inverse_rate);
      let I = Number(x == null ? undefined : x.seed_plugin_keyinfo?.num) || Number(b == null ? undefined : b.num) || 1;
      return {
        optionsGroup: S,
        keyToOptionGroup: T,
        state: {
          from: {
            name: (w == null ? undefined : w.name) ?? "",
            value: (w == null ? undefined : w.signal) ?? ""
          },
          to: {
            name: (y == null ? undefined : y.name) ?? "",
            value: (y == null ? undefined : y.signal) ?? ""
          },
          rate: D ?? 1,
          inverseRate: N ?? 1,
          updateTime: (C == null ? undefined : C.data?.update_time) ?? "",
          fromInputValue: I,
          toInputValue: m(I * (D ?? 1)),
          isEmpty: false,
          isInvalid: false,
          source: E
        }
      };
    }((e == null ? undefined : e.data) ?? {});
    let {
      onTrackEvent: x
    } = e;
    let [b, w] = reactCoreLibraryReexport.useState(false);
    let _ = reactCoreLibraryReexport.useRef(null);
    let {
      width: R
    } = resizeObserverHooks.useResizeObserverEx({
      ref: _
    });
    let [S, T] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false,
      threshold: 0.8
    });
    let [D, N] = reactCoreLibraryReexport.useReducer((e, t) => {
      let {
        type: i,
        payload: l
      } = t;
      if (i === g.ChangeFromType) {
        let t = r[l.signal];
        let n = {
          name: t.name,
          value: t.signal
        };
        return {
          ...e,
          from: {
            ...n
          }
        };
      }
      if (i === g.ChangeToType) {
        let t = r[l.signal];
        let n = {
          name: t.name,
          value: t.signal
        };
        return {
          ...e,
          to: {
            ...n
          }
        };
      }
      if (i === g.ChangeFromInput) {
        let {
          rate: t,
          isEmpty: r
        } = e;
        let o = String(l.fromInputValue ?? "");
        if (!o || r && o === "1") {
          return {
            ...e,
            fromInputValue: 1,
            toInputValue: m(t),
            isEmpty: true,
            isInvalid: false
          };
        }
        if (!/^\d*\.?\d*$/.test(o) || o === ".") {
          return {
            ...e,
            fromInputValue: o,
            toInputValue: "",
            isEmpty: false,
            isInvalid: false
          };
        }
        if (o.replace(/[^0-9]/g, "").length >= 19) {
          return {
            ...e,
            fromInputValue: Number(o),
            toInputValue: e.toInputValue,
            isEmpty: false,
            isInvalid: true
          };
        }
        let i = Number(o);
        let a = m(i * t);
        let u = String(a).replace(/[^0-9]/g, "").length;
        return {
          ...e,
          toInputValue: a,
          fromInputValue: i,
          isEmpty: false,
          isInvalid: u >= 19
        };
      }
      if (i === g.ChangeToInput) {
        let {
          inverseRate: t,
          isEmpty: n
        } = e;
        let r = String(l.toInputValue ?? "");
        if (!r || n && r === "1") {
          return {
            ...e,
            fromInputValue: m(t),
            toInputValue: 1,
            isEmpty: true,
            isInvalid: false
          };
        }
        if (!/^\d*\.?\d*$/.test(r) || r === ".") {
          return {
            ...e,
            fromInputValue: "",
            toInputValue: r,
            isEmpty: false,
            isInvalid: false
          };
        }
        if (r.replace(/[^0-9]/g, "").length >= 19) {
          return {
            ...e,
            fromInputValue: e.fromInputValue,
            toInputValue: Number(r),
            isEmpty: false,
            isInvalid: true
          };
        }
        let i = Number(r);
        let a = m(i * t);
        let u = String(a).replace(/[^0-9]/g, "").length;
        return {
          ...e,
          toInputValue: i,
          fromInputValue: a,
          isEmpty: false,
          isInvalid: u >= 19
        };
      }
      if (i === g.UpdateRate) {
        let {
          toInputValue: t,
          fromInputValue: n
        } = e;
        let r = Number(l.rate);
        let o = Number(l.inverseRate);
        if (isNumberUtil.isNumber(t) && isNumberUtil.isNumber(n)) {
          return {
            ...e,
            rate: r,
            updateTime: l.updateTime,
            inverseRate: o,
            toInputValue: m(n * r)
          };
        } else {
          return {
            ...e,
            rate: r,
            updateTime: l.updateTime,
            inverseRate: o
          };
        }
      } else if (i === g.SwapCurrency) {
        let {
          from: t,
          to: n,
          rate: r,
          inverseRate: o,
          fromInputValue: i
        } = e;
        if (isNumberUtil.isNumber(i)) {
          return {
            ...e,
            from: n,
            to: t,
            rate: o,
            inverseRate: r,
            toInputValue: m(i * o)
          };
        } else {
          return {
            ...e,
            from: n,
            to: t,
            rate: o,
            inverseRate: r,
            toInputValue: ""
          };
        }
      }
      return {
        ...e
      };
    }, u);
    let {
      from: I,
      to: k,
      fromInputValue: L,
      toInputValue: P,
      isEmpty: z,
      isInvalid: O,
      rate: F,
      inverseRate: A,
      source: Z
    } = D;
    let B = usePreviousHook.usePrevious({
      from: I,
      to: k
    });
    let V = reactCoreLibraryReexport.useCallback(e => {
      _.current = e;
      S(e);
    }, [S]);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (!isUndefinedCheck.isUndefined(B) && (B.from !== I || B.to !== k) && (B.from !== k || B.to !== I)) {
        fetch(`${toutiaoSearchConstants.apiBaseUrl}/2/wap/search/extra/exchange_rate?${function (e) {
          if (!isObjectOrFunction_1_1.isObjectOrFunction(e)) {
            return "";
          }
          let t = "";
          for (let n in e) {
            let r = e[n];
            if (!isUndefinedCheck.isUndefined(r) && !isNullCheck.isNull(r)) {
              t += `&${encodeURIComponent(n)}=${encodeURIComponent(r)}`;
            }
          }
          return t.substr(1);
        }({
          from: I.value,
          to: k.value
        })}`).then(e => {
          if (!e.ok) {
            throw Error("Network response was not ok");
          }
          return e.json();
        }).then(e => {
          if (e.status_code === 200 && e.message === "success") {
            let {
              rate: r,
              update_time: o,
              inverse_rate: i
            } = (e == null ? undefined : e.data?.data) ?? {};
            let a = (B == null ? undefined : B.from) === I ? "to" : " from";
            N({
              type: g.UpdateRate,
              payload: {
                rate: r,
                updateTime: o,
                inverseRate: i,
                changeType: a
              }
            });
          }
        }).catch(e => {});
      }
    }, [I, k]);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (T) {
        if (x != null) {
          x("venue_card_show", {
            currency: [I.value, k.value]
          });
        }
      }
    }, [T]);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (R && R < 460) {
        w(true);
      } else {
        w(false);
      }
    }, [R]);
    let $ = e => {
      if (isNumberUtil.isNumber(e)) {
        return e;
      }
      let t = String(e);
      if (/^\d*\.?\d*$/.test(t) && t !== "." && t !== "") {
        return Number(t);
      } else {
        return "--";
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs(cardWrapperComponent.CardWrapper, {
      classname: "!max-w-600 min-w-334",
      cardClassName: "!max-w-600",
      ref: V,
      cardStyle: {
        background: "var(--dbx-bg-body-overlay-web) !important",
        padding: b ? "14px 16px 16px" : "18px 20px 20px"
      },
      children: [z ? reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `
            flex flex-col text-dbx-text-primary
            ${b ? "gap-8" : "gap-6"}
          `,
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s(j["equal-source"], {
            [j["equal-source-mobile"]]: b
          }),
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            className: j["equal-source-en"],
            children: "1"
          }), ` ${I.name} \u{2248} `, reactJsxRuntimeCoreReexport.jsx("span", {
            className: j["equal-source-en"],
            children: `${m(F)}`
          }), ` ${k.name}`]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s(j["equal-source"], {
            [j["equal-source-mobile"]]: b
          }),
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            className: j["equal-source-en"],
            children: "1"
          }), ` ${k.name} \u{2248} `, reactJsxRuntimeCoreReexport.jsx("span", {
            className: j["equal-source-en"],
            children: `${m(A)}`
          }), ` ${I.name}`]
        })]
      }) : reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `
            flex flex-col text-dbx-text-primary
            ${b ? "gap-8" : "gap-4"}
          `,
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s(j["equal-source"], {
            [j["equal-source-mobile"]]: b
          }),
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            className: j["equal-source-en"],
            children: `${$(L)}`
          }), ` ${I.name} \u{2248}`]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s(j["equal-result"], {
            [j["equal-result-mobile"]]: b
          }),
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            className: j["equal-source-en"],
            children: `${$(P)} `
          }), k.name]
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s("flex w-full", b ? "gap-8 h-104" : "gap-12 h-116"),
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: s("flex flex-col flex-1 gap-12 h-full"),
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              className: s("flex items-center w-full", "border-1 border-solid border-dbx-line-10 rounded-10", b ? "h-46" : "h-52"),
              children: [reactJsxRuntimeCoreReexport.jsx(C, {
                value: I,
                list: n,
                onChange: e => {
                  if (x != null) {
                    x("venue_card_click", {
                      click_option: "rate_field",
                      currency: [e.signal, k.value]
                    });
                  }
                  N({
                    type: g.ChangeFromType,
                    payload: {
                      signal: e.signal
                    }
                  });
                },
                isNarrow: b,
                currentItem: n.find(e => e.signal === I.value)
              }), reactJsxRuntimeCoreReexport.jsx(semiInputComponent.InputComponent, {
                value: L,
                maxLength: 19,
                className: s(j.input, {
                  [j["input-narrow"]]: b
                }),
                onChange: e => {
                  N({
                    type: g.ChangeFromInput,
                    payload: {
                      fromInputValue: e
                    }
                  });
                },
                onBlur: () => {
                  if (x != null) {
                    x("venue_card_click", {
                      click_option: "update_value",
                      currency: [I.value, k.value]
                    });
                  }
                }
              })]
            }), reactJsxRuntimeCoreReexport.jsxs("div", {
              className: s("flex items-center w-full", "border-1 border-solid border-dbx-line-10 rounded-10", b ? "h-46" : "h-52"),
              children: [reactJsxRuntimeCoreReexport.jsx(C, {
                value: k,
                list: n,
                onChange: e => {
                  if (x != null) {
                    x("venue_card_click", {
                      click_option: "rate_field",
                      currency: [I.value, e.signal]
                    });
                  }
                  N({
                    type: g.ChangeToType,
                    payload: {
                      signal: e.signal
                    }
                  });
                },
                isNarrow: b,
                currentItem: n.find(e => e.signal === k.value)
              }), reactJsxRuntimeCoreReexport.jsx(semiInputComponent.InputComponent, {
                min: 0,
                value: P,
                maxLength: 19,
                className: s(j.input, {
                  [j["input-narrow"]]: b
                }),
                onChange: e => {
                  N({
                    type: g.ChangeToInput,
                    payload: {
                      toInputValue: e
                    }
                  });
                },
                onBlur: () => {
                  if (x != null) {
                    x("venue_card_click", {
                      click_option: "update_value",
                      currency: [I.value, k.value]
                    });
                  }
                }
              })]
            })]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: s("flex justify-center items-center h-full", "bg-dbx-fill-trans-10 cursor-pointer", "hover:bg-dbx-fill-trans-10-hover", b ? "w-40 rounded-10" : "w-56 rounded-12", j["no-select"]),
            onClick: () => {
              if (x != null) {
                x("venue_card_click", {
                  click_option: "rate_switch",
                  currency: [k.value, I.value]
                });
              }
              N({
                type: g.SwapCurrency,
                payload: {}
              });
            },
            onMouseDown: e => e.preventDefault(),
            onDoubleClick: e => e.preventDefault(),
            children: reactJsxRuntimeCoreReexport.jsx(svgShuffleIcon.ShuffleIcon, {
              className: s("text-dbx-text-primary", b ? "size-15" : "size-18")
            })
          })]
        }), O && reactJsxRuntimeCoreReexport.jsx("div", {
          className: s(j.tip, "mt-8 text-dbx-function-danger", j["no-select"]),
          children: "超出计算单位"
        })]
      }), Z && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: s(j.tip, "text-dbx-text-tertiary", j["no-select"]),
        children: ["数据来自", Z]
      })]
    });
  };
  require.r(exports);
  require.d(exports, {
    ExchangeRateCard: function () {
      return _;
    }
  });
}