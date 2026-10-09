// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'CarouselNavigation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 77292
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var motionPresenceComponent = require("motion-presence-component") /*id: 591327*/;
  var motionComponentFactory_1 = require("motion-component-factory_1") /*id: 57495*/;
  let o = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  let a = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase());
  let s = e => {
    let t = a(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  };
  let c = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim();
  let d = e => {
    for (let t in e) {
      if (t.startsWith("aria-") || t === "role" || t === "title") {
        return true;
      }
    }
  };
  var u = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  let p = reactCoreLibraryReexport.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: l,
    className: r = "",
    children: o,
    iconNode: a,
    ...s
  }, p) => reactCoreLibraryReexport.createElement("svg", {
    ref: p,
    ...u,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: l ? Number(n) * 24 / Number(t) : n,
    className: c("lucide", r),
    ...(!o && !d(s) && {
      "aria-hidden": "true"
    }),
    ...s
  }, [...a.map(([e, t]) => reactCoreLibraryReexport.createElement(e, t)), ...(Array.isArray(o) ? o : [o])]));
  let m = (e, t) => {
    let n = reactCoreLibraryReexport.forwardRef(({
      className: n,
      ...l
    }, r) => reactCoreLibraryReexport.createElement(p, {
      ref: r,
      iconNode: t,
      className: c(`lucide-${o(s(e))}`, `lucide-${e}`, n),
      ...l
    }));
    n.displayName = s(e);
    return n;
  };
  let v = m("arrow-left-to-line", [["path", {
    d: "M3 19V5",
    key: "rwsyhb"
  }], ["path", {
    d: "m13 6-6 6 6 6",
    key: "1yhaz7"
  }], ["path", {
    d: "M7 12h14",
    key: "uoisry"
  }]]);
  let f = m("chevron-left", [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
  }]]);
  let h = m("pause", [["rect", {
    x: "14",
    y: "4",
    width: "4",
    height: "16",
    rx: "1",
    key: "zuxfzm"
  }], ["rect", {
    x: "6",
    y: "4",
    width: "4",
    height: "16",
    rx: "1",
    key: "1okwgv"
  }]]);
  let g = m("play", [["polygon", {
    points: "6 3 20 12 6 21 6 3",
    key: "1oa8hb"
  }]]);
  let _ = m("chevron-right", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
  }]]);
  let b = m("arrow-right-to-line", [["path", {
    d: "M17 12H3",
    key: "8awo09"
  }], ["path", {
    d: "m11 18 6-6-6-6",
    key: "8c2y43"
  }], ["path", {
    d: "M21 5v14",
    key: "nzette"
  }]]);
  var useMediaQuery = require("use-media-query") /*id: 797741*/;
  var mergeClassNamesUtil = require("merge-class-names-util") /*id: 975716*/;
  var reactUseEventCallback = require("react-use-event-callback") /*id: 112412*/;
  let w = e => {
    let [t, n] = reactCoreLibraryReexport.useState(false);
    let [l, r] = reactCoreLibraryReexport.useState(false);
    let o = reactUseEventCallback.useEventCallback(e.onKeyDown);
    let a = reactUseEventCallback.useEventCallback(e.onKeyUp);
    let {
      key: s,
      preventDefault: c
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        if (e.key === s) {
          if (e.repeat) {
            if (c) {
              e.preventDefault();
            }
            return;
          }
          if (c) {
            e.preventDefault();
          }
          if (e.shiftKey) {
            r(true);
            if (o != null) {
              o(true);
            }
          } else {
            n(true);
            if (o != null) {
              o(false);
            }
          }
        }
      };
      let t = e => {
        if (e.key === s || e.key === "Meta") {
          if (c) {
            e.preventDefault();
          }
          n(false);
          r(false);
          if (a != null) {
            a();
          }
        }
      };
      window.addEventListener("keydown", e);
      window.addEventListener("keyup", t);
      return () => {
        window.removeEventListener("keydown", e);
        window.removeEventListener("keyup", t);
        n(false);
        r(false);
      };
    }, [s, o, a, c]);
    return {
      activeWithoutShift: t,
      activeWithShift: l
    };
  };
  let S = e => {
    let {
      currentStep: t,
      autoSwitchIntervalInMs: n,
      totalSteps: l,
      onStepChange: r,
      onAutoPlayEnd: o
    } = e;
    let [a, s] = reactCoreLibraryReexport.useState(false);
    let c = reactCoreLibraryReexport.useRef(null);
    let d = reactUseEventCallback.useEventCallback(r);
    let u = reactUseEventCallback.useEventCallback(o);
    reactCoreLibraryReexport.useEffect(() => {
      let e = () => {
        if (c.current) {
          clearInterval(c.current);
          c.current = null;
        }
      };
      if (!a) {
        e();
        return;
      }
      c.current = window.setInterval(() => {
        if (d != null) {
          d(t + 1);
        }
        if (t + 1 >= l - 1) {
          s(false);
          if (u != null) {
            u();
          }
        }
      }, n);
      return () => {
        e();
      };
    }, [a, n, l, d, u]);
    let p = reactCoreLibraryReexport.useCallback(e => {
      if (e !== t) {
        if (d != null) {
          d(e);
        }
      }
      s(false);
    }, [t, d]);
    let m = reactCoreLibraryReexport.useCallback(() => {
      s(false);
    }, []);
    let v = reactCoreLibraryReexport.useCallback(() => {
      if (!a && t === l - 2) {
        p(l - 1);
        return;
      }
      if (!a && t === l - 1) {
        p(0);
        s(true);
        return;
      }
      s(true);
    }, [a, t, l, p]);
    let f = reactCoreLibraryReexport.useCallback(() => {
      p(Math.max(0, t - 1));
    }, [t, p]);
    let h = reactCoreLibraryReexport.useCallback(() => {
      p(Math.min(l - 1, t + 1));
    }, [t, l, p]);
    return {
      currentStep: t,
      isPlaying: a,
      isFirstStep: t === 0,
      isLastStep: t === e.totalSteps - 1,
      setCurrentStepAndPause: p,
      pause: m,
      play: v,
      previousStep: f,
      nextStep: h
    };
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let $ = reactCoreLibraryReexport.memo(e => {
    let {
      keyText: t,
      className: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: mergeClassNamesUtil.mergeClassNames("relative h-[1rem] w-[1rem]", n),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "absolute inset-0 translate-y-[2px] rounded-sm bg-s-color-bg-quaternary"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "absolute inset-0 flex items-center justify-center rounded-sm bg-s-color-bg-tertiary text-[9px] font-medium text-s-color-text-primary",
        children: t
      })]
    });
  });
  let C = e => {
    let {
      className: t,
      totalSteps: n = Infinity,
      currentStep: o = 0,
      autoSwitchIntervalInMs: a = 2000,
      disableAutoPlay: s = false,
      onStepChange: c,
      onPreviousClick: d,
      onNextClick: u,
      hideFirstAndLastButton: p = false,
      isCanvasOpen: m = false
    } = e;
    let {
      isPlaying: x,
      pause: C,
      play: j,
      previousStep: N,
      nextStep: E,
      isFirstStep: P,
      isLastStep: I,
      setCurrentStepAndPause: W
    } = S({
      currentStep: o,
      totalSteps: n,
      autoSwitchIntervalInMs: a,
      onStepChange: c
    });
    let F = reactCoreLibraryReexport.useRef(j);
    reactCoreLibraryReexport.useEffect(() => {
      if (!s) {
        F.current();
      }
    }, []);
    let M = reactCoreLibraryReexport.useCallback(() => {
      j();
    }, [j]);
    let A = reactCoreLibraryReexport.useCallback(() => {
      C();
    }, [C]);
    let Z = reactCoreLibraryReexport.useCallback(() => {
      if (d != null) {
        d();
      }
      N();
    }, [N, d]);
    let B = reactCoreLibraryReexport.useCallback(() => {
      if (u != null) {
        u();
      }
      E();
    }, [E, u]);
    let {
      activeWithoutShift: O,
      activeWithShift: D
    } = w({
      key: "ArrowLeft",
      preventDefault: true,
      onKeyDown: e => {
        if (e) {
          if (!p) {
            W(0);
          }
        } else {
          Z();
        }
      }
    });
    let {
      activeWithoutShift: L,
      activeWithShift: z
    } = w({
      key: "ArrowRight",
      preventDefault: true,
      onKeyDown: e => {
        if (e) {
          if (!p) {
            W(n - 1);
          }
        } else {
          B();
        }
      }
    });
    let {
      activeWithoutShift: V
    } = w({
      key: " ",
      preventDefault: true,
      onKeyDown: reactCoreLibraryReexport.useCallback(() => {
        if (x) {
          A();
        } else {
          M();
        }
      }, [x, A, M])
    });
    let H = useMediaQuery.useMediaQuery("(width < 600px)") || m;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: mergeClassNamesUtil.mergeClassNames("relative flex flex-row items-stretch overflow-clip rounded-s-radius-s border border-solid border-s-color-border-tertiary bg-s-color-bg-primary justify-between p-[1rem] gap-[1rem]", H && "justify-center p-[0.5rem]", t),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex flex-row items-center justify-end gap-[0.5rem]",
        children: [!p && reactJsxRuntimeCoreReexport.jsx(T, {
          onClick: () => W(0),
          disabled: P,
          activeByKeyboard: D,
          variant: "secondary",
          ariaLabel: "First Step",
          title: "First Step",
          children: reactJsxRuntimeCoreReexport.jsx(v, {
            className: "h-[1rem] w-[1rem] text-s-color-text-primary"
          })
        }), reactJsxRuntimeCoreReexport.jsx(T, {
          onClick: Z,
          disabled: P,
          activeByKeyboard: O,
          variant: "secondary",
          ariaLabel: "Previous",
          title: "Previous (Left Arrow)",
          children: reactJsxRuntimeCoreReexport.jsx(f, {
            className: "h-[1rem] w-[1rem] text-s-color-text-primary"
          })
        }), reactJsxRuntimeCoreReexport.jsx(T, {
          onClick: x ? A : M,
          disabled: false,
          activeByKeyboard: V,
          variant: "primary",
          ariaLabel: x ? "Pause" : "Play",
          title: x ? "Pause (Space)" : "Play (Space)",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "relative h-[1rem] w-[1rem]",
            children: reactJsxRuntimeCoreReexport.jsx(motionPresenceComponent.AnimatePresence, {
              mode: "sync",
              initial: false,
              children: x ? reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
                initial: {
                  opacity: 0,
                  scale: 0.7,
                  filter: "blur(2px)"
                },
                animate: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)"
                },
                exit: {
                  opacity: 0,
                  scale: 0.7,
                  filter: "blur(2px)"
                },
                transition: {
                  duration: 0.2
                },
                className: "absolute inset-0",
                children: reactJsxRuntimeCoreReexport.jsx(h, {
                  className: "h-[1rem] w-[1rem] text-s-color-text-primary"
                })
              }, "pause-icon") : reactJsxRuntimeCoreReexport.jsx(motionComponentFactory_1.motionFactory.div, {
                initial: {
                  opacity: 0,
                  scale: 0.7,
                  filter: "blur(2px)"
                },
                animate: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)"
                },
                exit: {
                  opacity: 0,
                  scale: 0.7,
                  filter: "blur(2px)"
                },
                transition: {
                  duration: 0.2
                },
                className: "absolute inset-0",
                children: reactJsxRuntimeCoreReexport.jsx(g, {
                  className: "h-[1rem] w-[1rem] text-s-color-text-primary"
                })
              }, "play-icon")
            })
          })
        }), reactJsxRuntimeCoreReexport.jsx(T, {
          onClick: B,
          disabled: I,
          activeByKeyboard: L,
          variant: "secondary",
          ariaLabel: "Next",
          title: "Next (Right Arrow)",
          children: reactJsxRuntimeCoreReexport.jsx(_, {
            className: "h-[1rem] w-[1rem] text-s-color-text-primary"
          })
        }), !p && reactJsxRuntimeCoreReexport.jsx(T, {
          onClick: () => W(n - 1),
          disabled: I,
          activeByKeyboard: z,
          variant: "secondary",
          ariaLabel: "Last Step",
          title: "Last Step",
          children: reactJsxRuntimeCoreReexport.jsx(b, {
            className: "h-[1rem] w-[1rem] text-s-color-text-primary"
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: mergeClassNamesUtil.mergeClassNames("flex-col justify-end flex", H && "hidden"),
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "text-xs text-s-color-text-tertiary",
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "inline-flex gap-[0.25rem] px-[0.25rem] align-bottom",
            children: [!p && reactJsxRuntimeCoreReexport.jsx($, {
              className: "block",
              keyText: "⇧"
            }), reactJsxRuntimeCoreReexport.jsx($, {
              className: "block",
              keyText: "←"
            }), reactJsxRuntimeCoreReexport.jsx($, {
              className: "block",
              keyText: "→"
            })]
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            children: "Navigate"
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            className: "mx-[0.25rem]",
            children: " • "
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            className: "inline-flex gap-[0.25rem] px-[0.25rem] align-bottom",
            children: reactJsxRuntimeCoreReexport.jsx($, {
              className: "inline-block",
              keyText: "␣"
            })
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            children: "Play / Pause"
          })]
        })
      })]
    });
  };
  let T = e => {
    let {
      children: t,
      className: n,
      onClick: i,
      disabled: l,
      activeByKeyboard: r,
      variant: o,
      ariaLabel: a,
      title: s
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("button", {
      onClick: i,
      disabled: l,
      className: mergeClassNamesUtil.mergeClassNames("[&_svg]:block border-none cursor-pointer rounded-full p-[0.5rem] transition-colors outline-none active:scale-95 disabled:cursor-not-allowed disabled:opacity-50", o === "primary" && "bg-s-color-bg-tertiary hover:bg-s-color-bg-tertiary/80", o === "secondary" && "bg-s-color-bg-tertiary hover:bg-s-color-bg-tertiary/80", r && !l && "scale-95", r && !l && o === "primary" && "bg-s-color-bg-secondary", r && !l && o === "secondary" && "bg-s-color-bg-secondary", n),
      "aria-label": a,
      title: s,
      children: t
    });
  };
  require.d(exports, {
    CarouselNavigation: function () {
      return C;
    }
  });
}