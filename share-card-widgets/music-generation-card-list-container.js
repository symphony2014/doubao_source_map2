// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'MusicGenerationCardList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 807914
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var rtlChevronLeftIcon = require("rtl-chevron-left-icon") /*id: 400992*/;
  var arrowRightRtlIcon = require("arrow-right-rtl-icon") /*id: 371018*/;
  var l = {
    container: "container-CCxh8g",
    content: "content-srgLYF",
    "left-bg": "left-bg-bNjkcA",
    "right-bg": "right-bg-lFzoBU",
    "scroll-btn": "scroll-btn-zoik81",
    "left-btn": "left-btn-fQODRc",
    "right-btn": "right-btn-hVAtbY"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      width: t = 0,
      scrollLeft: r = 0,
      scrollWidth: n = 0
    } = e;
    let i = true;
    let a = true;
    switch (true) {
      case t >= n:
        i = false;
        a = false;
        break;
      case r > 0 && t + r >= n:
        i = true;
        a = false;
        break;
      case r > 0 && t + r < n:
        i = true;
        a = true;
        break;
      default:
        i = false;
        a = true;
    }
    return {
      showLeft: i,
      showRight: a
    };
  };
  let u = e => {
    let {
      className: t = "",
      children: r
    } = e;
    let [u, h] = reactCoreLibraryReexport.useState(false);
    let [p, f] = reactCoreLibraryReexport.useState(false);
    let m = reactCoreLibraryReexport.useRef(null);
    let {
      width: g
    } = resizeObserverHooks.useResizeObserverEx({
      ref: m
    });
    let v = function (e = 0) {
      if (!m.current) {
        return;
      }
      let {
        scrollWidth: t,
        scrollLeft: r
      } = m.current;
      let {
        showLeft: n,
        showRight: i
      } = d({
        width: e,
        scrollLeft: r,
        scrollWidth: t
      });
      h(n);
      f(i);
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (g) {
        v(g);
      }
    }, [g]);
    reactCoreLibraryReexport.useEffect(() => {
      if (m.current) {
        m.current.addEventListener("scroll", () => {
          return v(m.current?.clientWidth || 0);
        });
      }
    }, [m.current]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: l.container,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        ref: m,
        className: `${l.content} ${t}`,
        children: r
      }), u && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: l["left-bg"]
        }), reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
          onClick: () => {
            if (!m.current) {
              return;
            }
            let {
              scrollLeft: e
            } = m.current;
            m.current.scrollTo({
              left: e - (g || 0),
              behavior: "smooth"
            });
          },
          icon: reactJsxRuntimeCoreReexport.jsx(rtlChevronLeftIcon.ChevronLeftIcon, {
            className: "!text-12 m-2"
          }),
          className: `${l["scroll-btn"]} ${l["left-btn"]}`
        })]
      }), p && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: l["right-bg"]
        }), reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
          onClick: () => {
            if (!m.current) {
              return;
            }
            let {
              scrollLeft: e
            } = m.current;
            m.current.scrollTo({
              left: e + (g || 0),
              behavior: "smooth"
            });
          },
          icon: reactJsxRuntimeCoreReexport.jsx(arrowRightRtlIcon.ArrowRightRtlIcon, {
            className: "!text-12 m-2"
          }),
          className: `${l["scroll-btn"]} ${l["right-btn"]}`
        })]
      })]
    });
  };
  var musicGenerationCardComponent = require("music-generation-card-component") /*id: 958261*/;
  let p = e => {
    let {
      musicContentData: t,
      ...r
    } = e;
    let i = reactCoreLibraryReexport.useMemo(() => {
      let {
        task_nums: e
      } = t;
      if (e) {
        let {
          music_gen_failed: r,
          music_gen_failed_msg: n
        } = t["0"] || {};
        return Array.from({
          length: Number(e) || 1
        }).map((e, i) => {
          let a = t[`${i}`] || {};
          let o = {
            task_id: `${i}`
          };
          if (r) {
            return {
              title: n || "",
              music_gen_failed: r,
              music_gen_failed_msg: n || "",
              ...o
            };
          } else {
            return {
              ...a,
              ...o
            };
          }
        });
      }
      return [t];
    }, [t]);
    return reactJsxRuntimeCoreReexport.jsx(u, {
      className: "list-XY11if",
      children: i.map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
        className: "item-XG7Tmn",
        children: reactJsxRuntimeCoreReexport.jsx(musicGenerationCardComponent.MusicGenerationCard, {
          musicContentData: e,
          ...r
        }, t)
      }, `${t}`))
    });
  };
  require.d(exports, {
    MusicGenerationCardList: function () {
      return p;
    }
  });
}