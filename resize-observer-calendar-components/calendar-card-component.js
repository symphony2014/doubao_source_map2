// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactIntersectionObserver_1'
// - Resolved require(728951) to 'react-intersection-observer_1'
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'resizeObserverHooks'
// - Resolved require(246619) to 'resize-observer-hooks'
// - Renamed variable 'c' to 'chevronRightIcon_1'
// - Resolved require(839336) to 'chevron-right-icon_1'
// - Renamed variable 'u' to 'rightOutlinedIcon'
// - Resolved require(831095) to 'right-outlined-icon'
// - Renamed variable 'l' to 'cardWrapperComponent'
// - Resolved require(201819) to 'card-wrapper-component'
// - Renamed variable 'd' to 'dayjsDateLibrary'
// - Resolved require(349712) to 'dayjs-date-library'
// - Renamed variable 'f' to 'toutiaoSearchConstants'
// - Resolved require(937588) to 'toutiao-search-constants'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'N6' to 'apiBaseUrl' (module 937588)
// - Updated imported property 'YD' to 'useInView' (module 728951)
// - Updated imported property 'y' to 'useResizeObserverEx' (module 246619)
// - Updated imported property 'l' to 'CardWrapper' (module 201819)
// - Updated imported property 'L' to 'ChevronRightIcon' (module 839336)
// - Updated imported property 'U' to 'RightOutlinedIcon' (module 831095)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37250.2ef369e2.js
         * chunkId: 37250
         * moduleId: 510198
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var chevronRightIcon_1 = require("chevron-right-icon_1") /*id: 839336*/;
  var rightOutlinedIcon = require("right-outlined-icon") /*id: 831095*/;
  var cardWrapperComponent = require("card-wrapper-component") /*id: 201819*/;
  var dayjsDateLibrary = require("dayjs-date-library") /*id: 349712*/;
  var h = dayjsDateLibrary;
  var toutiaoSearchConstants = require("toutiao-search-constants") /*id: 937588*/;
  async function v(e) {
    let n = `${toutiaoSearchConstants.apiBaseUrl}/2/wap/search/extra/aladin/?${new URLSearchParams({
      keyword: "节假日",
      alasrc: "calendar_new",
      wish_source: "toutiaosousuo",
      extra: `{"time_feature": "${e}"}`
    }).toString()}`;
    let r = await fetch(n);
    let i = await r.json();
    if ((i == null ? undefined : i.message) === "success" && (i == null ? undefined : i.data?.display)) {
      return i.data.display;
    } else {
      return null;
    }
  }
  function g(e) {
    let t = new Map();
    try {
      let n = JSON.parse(e);
      if (typeof n == "object" && n !== null) {
        Object.keys(n).forEach(e => {
          n[e].forEach(n => {
            let r = `${e}-${String(n.month).padStart(2, "0")}-${String(n.date).padStart(2, "0")}`;
            t.set(r, n.status);
          });
        });
      }
    } catch (e) {}
    return t;
  }
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("g", {
      clipPath: "url(#loading-light_svg__a)",
      "data-figma-skip-parse": "true",
      children: reactJsxRuntimeCoreReexport.jsx("foreignObject", {
        width: 2942.53,
        height: 2942.53,
        x: -1471.26,
        y: -1471.26,
        transform: "matrix(-.00375 .00937 .00937 .00375 12 12)",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          xmlns: "http://www.w3.org/1999/xhtml",
          style: {
            background: "conic-gradient(from 90deg,#000 0deg,transparent 360deg)",
            height: "100%",
            width: "100%",
            opacity: 1
          }
        })
      })
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M12 15.75c-.69 0-1.25.56-1.25 1.25v3.75a1.25 1.25 0 1 0 2.5 0V17c0-.69-.56-1.25-1.25-1.25m4.42-1.099a1.25 1.25 0 0 0-1.769 1.768l2.653 2.652a1.25 1.25 0 0 0 1.767-1.768zm-7.071 0a1.25 1.25 0 0 0-1.768 0L4.93 17.3a1.25 1.25 0 0 0 1.768 1.768l2.652-2.651a1.25 1.25 0 0 0 0-1.768M17 10.75a1.25 1.25 0 1 0 0 2.5h3.75a1.25 1.25 0 1 0 0-2.5zm-13.75 0a1.25 1.25 0 1 0 0 2.5H7a1.25 1.25 0 1 0 0-2.5zm3.447-5.821A1.251 1.251 0 0 0 4.93 6.696L7.58 9.348A1.25 1.25 0 1 0 9.35 7.58zm12.374-.001a1.25 1.25 0 0 0-1.767 0l-2.652 2.651a1.25 1.25 0 0 0 1.768 1.768l2.651-2.652a1.25 1.25 0 0 0 0-1.767M12 2c-.69 0-1.25.56-1.25 1.25V7a1.25 1.25 0 1 0 2.5 0V3.25C13.25 2.56 12.69 2 12 2",
      "data-figma-gradient-fill": "{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.0,\"g\":0.0,\"b\":0.0,\"a\":1.0},\"position\":0.0},{\"color\":{\"r\":0.0,\"g\":0.0,\"b\":0.0,\"a\":0.0},\"position\":1.0}],\"stopsVar\":[],\"transform\":{\"m00\":-7.50,\"m01\":18.750,\"m02\":6.3749995231628418,\"m10\":18.750,\"m11\":7.50,\"m12\":-1.1250002384185791},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}"
    }), reactJsxRuntimeCoreReexport.jsx("defs", {
      children: reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "loading-light_svg__a",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          d: "M12 15.75c-.69 0-1.25.56-1.25 1.25v3.75a1.25 1.25 0 1 0 2.5 0V17c0-.69-.56-1.25-1.25-1.25m4.42-1.099a1.25 1.25 0 0 0-1.769 1.768l2.653 2.652a1.25 1.25 0 0 0 1.767-1.768zm-7.071 0a1.25 1.25 0 0 0-1.768 0L4.93 17.3a1.25 1.25 0 0 0 1.768 1.768l2.652-2.651a1.25 1.25 0 0 0 0-1.768M17 10.75a1.25 1.25 0 1 0 0 2.5h3.75a1.25 1.25 0 1 0 0-2.5zm-13.75 0a1.25 1.25 0 1 0 0 2.5H7a1.25 1.25 0 1 0 0-2.5zm3.447-5.821A1.251 1.251 0 0 0 4.93 6.696L7.58 9.348A1.25 1.25 0 1 0 9.35 7.58zm12.374-.001a1.25 1.25 0 0 0-1.767 0l-2.652 2.651a1.25 1.25 0 0 0 1.768 1.768l2.651-2.652a1.25 1.25 0 0 0 0-1.767M12 2c-.69 0-1.25.56-1.25 1.25V7a1.25 1.25 0 1 0 2.5 0V3.25C13.25 2.56 12.69 2 12 2"
        })
      })
    })]
  });
  let b = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    fill: "none",
    viewBox: "0 0 20 20",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("g", {
      clipPath: "url(#loading-dark_svg__a)",
      "data-figma-skip-parse": "true",
      children: reactJsxRuntimeCoreReexport.jsx("foreignObject", {
        width: 2942.53,
        height: 2942.53,
        x: -1471.26,
        y: -1471.26,
        transform: "matrix(-.00375 .00937 .00937 .00375 10 10)",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          xmlns: "http://www.w3.org/1999/xhtml",
          style: {
            background: "conic-gradient(from 90deg,#fff 0deg,rgba(255,255,255,0) 360deg)",
            height: "100%",
            width: "100%",
            opacity: 1
          }
        })
      })
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M10 13.75c-.69 0-1.25.56-1.25 1.25v3.75a1.25 1.25 0 1 0 2.5 0V15c0-.69-.56-1.25-1.25-1.25m4.42-1.099a1.25 1.25 0 0 0-1.769 1.768l2.653 2.652a1.25 1.25 0 0 0 1.767-1.768zm-7.071 0a1.25 1.25 0 0 0-1.768 0L2.929 15.3a1.25 1.25 0 0 0 1.768 1.768l2.652-2.651a1.25 1.25 0 0 0 0-1.768M15 8.75a1.25 1.25 0 1 0 0 2.5h3.75a1.25 1.25 0 1 0 0-2.5zm-13.75 0a1.25 1.25 0 1 0 0 2.5H5a1.25 1.25 0 1 0 0-2.5zm3.447-5.821A1.251 1.251 0 0 0 2.93 4.696L5.58 7.348A1.25 1.25 0 1 0 7.35 5.58zm12.374-.001a1.25 1.25 0 0 0-1.767 0l-2.652 2.651a1.25 1.25 0 0 0 1.768 1.768l2.651-2.652a1.25 1.25 0 0 0 0-1.767M10 0c-.69 0-1.25.56-1.25 1.25V5a1.25 1.25 0 1 0 2.5 0V1.25C11.25.56 10.69 0 10 0",
      "data-figma-gradient-fill": "{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":1.0},\"position\":0.0},{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":0.0},\"position\":1.0}],\"stopsVar\":[{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":1.0},\"position\":0.0},{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":0.0},\"position\":1.0}],\"transform\":{\"m00\":-7.50,\"m01\":18.750,\"m02\":4.3749995231628418,\"m10\":18.750,\"m11\":7.50,\"m12\":-3.1250002384185791},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}"
    }), reactJsxRuntimeCoreReexport.jsx("defs", {
      children: reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "loading-dark_svg__a",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          d: "M10 13.75c-.69 0-1.25.56-1.25 1.25v3.75a1.25 1.25 0 1 0 2.5 0V15c0-.69-.56-1.25-1.25-1.25m4.42-1.099a1.25 1.25 0 0 0-1.769 1.768l2.653 2.652a1.25 1.25 0 0 0 1.767-1.768zm-7.071 0a1.25 1.25 0 0 0-1.768 0L2.929 15.3a1.25 1.25 0 0 0 1.768 1.768l2.652-2.651a1.25 1.25 0 0 0 0-1.768M15 8.75a1.25 1.25 0 1 0 0 2.5h3.75a1.25 1.25 0 1 0 0-2.5zm-13.75 0a1.25 1.25 0 1 0 0 2.5H5a1.25 1.25 0 1 0 0-2.5zm3.447-5.821A1.251 1.251 0 0 0 2.93 4.696L5.58 7.348A1.25 1.25 0 1 0 7.35 5.58zm12.374-.001a1.25 1.25 0 0 0-1.767 0l-2.652 2.651a1.25 1.25 0 0 0 1.768 1.768l2.651-2.652a1.25 1.25 0 0 0 0-1.767M10 0c-.69 0-1.25.56-1.25 1.25V5a1.25 1.25 0 1 0 2.5 0V1.25C11.25.56 10.69 0 10 0"
        })
      })
    })]
  });
  var x = e => {
    let {
      isDark: t,
      className: n = ""
    } = e;
    if (t) {
      return reactJsxRuntimeCoreReexport.jsx(b, {
        className: n
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(p, {
        className: n
      });
    }
  };
  var w = {
    "calendar-active-title": "calendar-active-title-Ng9Jo1",
    "calendar-active-title-mobile": "calendar-active-title-mobile-yOkjHL",
    "calendar-active-title-en": "calendar-active-title-en-d39kMv",
    "calendar-grid-item": "calendar-grid-item-nMOPfz",
    "calendar-grid-item-mobile": "calendar-grid-item-mobile-sZNMBh",
    "calendar-week-title-item": "calendar-week-title-item-zH8a_T",
    "calendar-date-item": "calendar-date-item-lfjfxj",
    "calendar-date-item-mobile": "calendar-date-item-mobile-A6ZLl4",
    "calendar-date-item-title": "calendar-date-item-title-EFGSA0",
    "calendar-date-item-title-mobile": "calendar-date-item-title-mobile-pG5A4O",
    "calendar-date-item-subtitle": "calendar-date-item-subtitle-huBcqt",
    "calendar-date-item-subtitle-mobile": "calendar-date-item-subtitle-mobile-W1x44q",
    "calendar-date-item-tag": "calendar-date-item-tag-LWgEmH",
    "calendar-date-item-tag-mobile": "calendar-date-item-tag-mobile-_oYdPg"
  };
  let y = e => {
    var t;
    var n;
    let {
      onTrackEvent: a,
      data: d,
      autoSelectOnMonthChange: f
    } = e;
    let p = ((n = document.documentElement) === null || n === undefined ? undefined : (t = n.getAttribute) === null || t === undefined ? undefined : t.call(n, "data-theme")) || "light";
    let {
      dateList: b,
      activeDate: y,
      weekDays: S,
      goPrevMonth: M,
      goNextMonth: $,
      prevLoading: z,
      nextLoading: _
    } = function (e, t) {
      let [n, r] = reactCoreLibraryReexport.useState(false);
      let [a, s] = reactCoreLibraryReexport.useState("");
      let [o, c] = reactCoreLibraryReexport.useState(() => h());
      let [u, l] = reactCoreLibraryReexport.useState(() => new Map());
      let [d, f] = reactCoreLibraryReexport.useState([]);
      let [m, p] = reactCoreLibraryReexport.useState(false);
      let [b, x] = reactCoreLibraryReexport.useState(false);
      let w = reactCoreLibraryReexport.useMemo(() => ["一", "二", "三", "四", "五", "六", "日"], []);
      reactCoreLibraryReexport.useEffect(() => {
        if (n) {
          return;
        }
        let i = e == null ? undefined : e.display;
        if (i) {
          r(true);
          s(i.time_feature);
          c(h(i.time_feature));
          l(g(i.holiday));
          f(i.date_list ?? []);
        }
      }, [e]);
      let y = reactCoreLibraryReexport.useMemo(() => function (e) {
        let {
          source: t,
          activeDate: n,
          holidayMap: r,
          selectedDate: i
        } = e;
        if (!(t == null ? undefined : t.length)) {
          return [];
        }
        let a = n.startOf("month");
        let s = a.format("YYYY-MM-DD");
        let o = t.findIndex(e => e.Solar === s) - ((a.day() === 0 ? 7 : a.day()) - 1);
        let c = h().format("YYYY-MM-DD");
        return t.slice(o, o + 42).map(e => {
          let t = e.Lunar.slice(-2);
          let a = e.FeastList.length && e.FeastList[0].length < 4 ? e.FeastList[0] : "";
          let s = e.Solar === c;
          let o = h(e.Solar);
          let u = o.day();
          let l = r.get(e.Solar);
          let d = "";
          if (l === 1) {
            d = "班";
          } else if (l === 0) {
            d = "休";
          }
          if (s) {
            d = "今";
          }
          return {
            ...e,
            title: Number(e.Solar.slice(-2)).toString(),
            subTitle: a || t,
            isToday: s,
            isSelected: e.Solar === i,
            isWeekend: u === 0 || u === 6,
            tagText: d,
            isActiveMonth: o.month() === n.month()
          };
        });
      }({
        source: d,
        activeDate: o,
        holidayMap: u,
        selectedDate: a
      }), [d, o, u, a]);
      let S = reactCoreLibraryReexport.useCallback(async e => {
        if (e) {
          x(true);
        } else {
          p(true);
        }
        let n = e ? o.add(1, "month") : o.add(-1, "month");
        let r = await v(n.format("YYYY-MM-DD"));
        if (r) {
          let {
            date_list: e,
            holiday: i,
            time_feature: a
          } = r;
          if ((t == null ? undefined : t.autoSelectOnMonthChange) === true) {
            s(a);
          }
          c(n);
          l(g(i));
          f(e ?? []);
        }
        x(false);
        p(false);
      }, [o, t == null ? undefined : t.autoSelectOnMonthChange]);
      let M = reactCoreLibraryReexport.useCallback(() => S(false), [S]);
      let $ = reactCoreLibraryReexport.useCallback(() => S(true), [S]);
      return {
        selectedDate: a,
        activeDate: o,
        weekDays: w,
        dateList: y,
        prevLoading: m,
        nextLoading: b,
        getCalendarData: S,
        goPrevMonth: M,
        goNextMonth: $
      };
    }(d, {
      autoSelectOnMonthChange: f
    });
    let [O, E] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false,
      threshold: 0.8
    });
    let D = reactCoreLibraryReexport.useRef(null);
    let {
      width: k
    } = resizeObserverHooks.useResizeObserverEx({
      ref: D
    });
    let C = reactCoreLibraryReexport.useMemo(() => k && k < 392, [k]);
    let T = reactCoreLibraryReexport.useCallback(e => {
      D.current = e;
      O(e);
    }, [O]);
    reactCoreLibraryReexport.useEffect(() => {
      if (E) {
        if (a != null) {
          a("venue_card_show", {});
        }
      }
    }, [E]);
    return reactJsxRuntimeCoreReexport.jsx(cardWrapperComponent.CardWrapper, {
      classname: "!max-w-450 min-w-334",
      cardStyle: {
        background: "var(--dbx-bg-body-overlay-web) !important",
        padding: C ? "14px 6px" : "22px 10px 18px"
      },
      ref: T,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: s("flex flex-col gap-12"),
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s("flex justify-between items-center", "pl-16 pr-18 h-26", "sm:pl-11 sm:pr-10 sm:h-24"),
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: s(w["calendar-active-title"], "text-dbx-text-primary", C && w["calendar-active-title-mobile"]),
            children: [reactJsxRuntimeCoreReexport.jsx("span", {
              className: s(w["calendar-active-title-en"]),
              children: y.year().toString()
            }), "年", reactJsxRuntimeCoreReexport.jsx("span", {
              className: s(w["calendar-active-title-en"]),
              children: (y.month() + 1).toString().padStart(2, "0")
            }), "月"]
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: s("w-84 sm:w-69", "flex justify-between items-center"),
            children: [z ? reactJsxRuntimeCoreReexport.jsx(x, {
              isDark: p === "dark",
              className: s("size-18 text-dbx-text-disable animate-spin p-4")
            }) : reactJsxRuntimeCoreReexport.jsx(chevronRightIcon_1.ChevronRightIcon, {
              onClick: () => {
                if (a != null) {
                  a("venue_card_click", {
                    click_option: "switch_month"
                  });
                }
                M();
              },
              className: s("text-dbx-text-primary cursor-pointer", "hover:bg-dbx-fill-trans-10-hover rounded-8", "size-22 p-4 sm:p-5")
            }), _ ? reactJsxRuntimeCoreReexport.jsx(x, {
              isDark: p === "dark",
              className: s("size-18 text-dbx-text-disable animate-spin pr-4")
            }) : reactJsxRuntimeCoreReexport.jsx(rightOutlinedIcon.RightOutlinedIcon, {
              onClick: () => {
                if (a != null) {
                  a("venue_card_click", {
                    click_option: "switch_month"
                  });
                }
                $();
              },
              className: s("text-dbx-text-primary cursor-pointer", "hover:bg-dbx-fill-trans-10-hover rounded-8", "size-22 p-4 sm:p-5")
            })]
          })]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: s("flex flex-col"),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: s("flex justify-between items-center"),
            children: S.map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
              className: s(w["calendar-grid-item"], C && w["calendar-grid-item-mobile"], w["calendar-week-title-item"], "text-dbx-text-primary", (t === 5 || t === 6) && "text-dbx-text-tertiary"),
              children: e
            }, e))
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: s("flex justify-between items-center flex-wrap"),
            children: b.map((e, t) => reactJsxRuntimeCoreReexport.jsxs("div", {
              className: s(w["calendar-grid-item"], C && w["calendar-grid-item-mobile"], w["calendar-date-item"], C && w["calendar-date-item-mobile"], "flex flex-col justify-center items-center gap-3 relative", ...function (e) {
                let {
                  isToday: t,
                  isSelected: n,
                  isActiveMonth: r
                } = e;
                return [t && !n ? "border-solid border-[0.5px]" : "", r ? "border-dbx-text-highlight" : "border-dbx-text-highlight-disable"];
              }(e), ...function (e) {
                let {
                  isSelected: t,
                  isActiveMonth: n,
                  tagText: r
                } = e;
                if (t) {
                  if (n) {
                    return ["bg-dbx-fill-highlight"];
                  } else {
                    return ["bg-dbx-fill-highlight-disable"];
                  }
                } else if (r === "休") {
                  return ["bg-dbx-fill-highlight-trans-10"];
                } else {
                  return [""];
                }
              }(e)),
              children: [reactJsxRuntimeCoreReexport.jsx("span", {
                className: s(w["calendar-date-item-title"], C && w["calendar-date-item-title-mobile"], ...function (e) {
                  let {
                    isSelected: t,
                    isActiveMonth: n,
                    tagText: r,
                    isWeekend: i
                  } = e;
                  if (t) {
                    return ["text-dbx-text-static-white-primary"];
                  } else if (i && r !== "班") {
                    if (n) {
                      return ["text-dbx-text-highlight"];
                    } else {
                      return ["text-dbx-text-highlight-disable"];
                    }
                  } else if (n) {
                    return ["text-dbx-text-primary"];
                  } else {
                    return ["text-dbx-text-disable"];
                  }
                }(e)),
                children: e.title
              }), reactJsxRuntimeCoreReexport.jsx("span", {
                className: s(w["calendar-date-item-subtitle"], C && w["calendar-date-item-subtitle-mobile"], ...function (e) {
                  let {
                    isSelected: t,
                    isActiveMonth: n
                  } = e;
                  if (t) {
                    return ["text-dbx-text-static-white-primary"];
                  } else if (n) {
                    return ["text-dbx-text-secondary"];
                  } else {
                    return ["text-dbx-text-disable"];
                  }
                }(e)),
                children: e.subTitle
              }), e.tagText && reactJsxRuntimeCoreReexport.jsx("span", {
                className: s(w["calendar-date-item-tag"], C && w["calendar-date-item-tag-mobile"], ...function (e) {
                  let {
                    isSelected: t,
                    isActiveMonth: n,
                    tagText: r
                  } = e;
                  if (t) {
                    return ["text-dbx-text-static-white-primary"];
                  } else if (r === "班") {
                    if (n) {
                      return ["text-dbx-function-danger"];
                    } else {
                      return ["text-dbx-function-danger-disable"];
                    }
                  } else if (n) {
                    return ["text-dbx-text-highlight"];
                  } else {
                    return ["text-dbx-text-highlight-disable"];
                  }
                }(e)),
                children: e.tagText
              })]
            }, e.title + t))
          })]
        })]
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    CalendarCard: function () {
      return y;
    }
  });
}