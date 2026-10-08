// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'tu' to 'DropdownMenuSubContent'
// - Renamed export 'Ee' to 'DropdownMenuRadioGroup'
// - Renamed export 'fC' to 'DropdownMenu'
// - Renamed export 'Tr' to 'DropdownMenuSub'
// - Renamed export 'oC' to 'DropdownMenuCheckboxItem'
// - Renamed export 'xz' to 'DropdownMenuTrigger'
// - Renamed export 'Eh' to 'DropdownMenuArrow'
// - Renamed export 'ck' to 'DropdownMenuItem'
// - Renamed export 'fF' to 'DropdownMenuSubTrigger'
// - Renamed export 'ZA' to 'DropdownMenuGroup'
// - Renamed export '__' to 'DropdownMenuLabel'
// - Renamed export 'wU' to 'DropdownMenuItemIndicator'
// - Renamed export 'Rk' to 'DropdownMenuRadioItem'
// - Renamed export 'VY' to 'DropdownMenuContent'
// - Renamed export 'Z0' to 'DropdownMenuSeparator'
// - Renamed export 'Uv' to 'DropdownMenuPortal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: super-task-audio-play-card.63d4cbf3.js
         * chunkId: 17108
         * moduleId: 86240
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var composeHandlers = require("compose-handlers") /*id: 999993*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var reactContextUtils = require("react-context-utils") /*id: 187414*/;
  var useControllableState = require("use-controllable-state") /*id: 584147*/;
  var reactPrimitiveComponents = require("react-primitive-components") /*id: 301296*/;
  var reactCollectionProviderFactory = require("react-collection-provider-factory") /*id: 680586*/;
  var useTextDirectionHook = require("use-text-direction-hook") /*id: 833962*/;
  var dismissableLayer = require("dismissable-layer") /*id: 749383*/;
  var useRadixFocusGuard = require("use-radix-focus-guard") /*id: 441896*/;
  var focusScopeComponent = require("focus-scope-component") /*id: 664921*/;
  var useIdHook = require("use-id-hook") /*id: 845738*/;
  var radixPopperPrimitives = require("radix-popper-primitives") /*id: 947189*/;
  var reactPortalComponent = require("react-portal-component") /*id: 535442*/;
  var reactPresenceComponent = require("react-presence-component") /*id: 292112*/;
  var rovingFocusGroup = require("roving-focus-group") /*id: 477483*/;
  var reactSlotUtils = require("react-slot-utils") /*id: 293688*/;
  var reactUseLatestCallback = require("react-use-latest-callback") /*id: 440027*/;
  var domInertPolyfill = require("dom-inert-polyfill") /*id: 21928*/;
  var reactScrollLock = require("react-scroll-lock") /*id: 184007*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var E = ["Enter", " "];
  var j = ["ArrowUp", "PageDown", "End"];
  var T = ["ArrowDown", "PageUp", "Home", ...j];
  var k = {
    ltr: [...E, "ArrowRight"],
    rtl: [...E, "ArrowLeft"]
  };
  var A = {
    ltr: ["ArrowLeft"],
    rtl: ["ArrowRight"]
  };
  var S = "Menu";
  var [M, N, O] = reactCollectionProviderFactory.createCollectionProvider(S);
  var [R, P] = reactContextUtils.createContextScope(S, [O, radixPopperPrimitives.createPopperScope, rovingFocusGroup.rovingFocusGroupScope]);
  var D = radixPopperPrimitives.createPopperScope();
  var L = rovingFocusGroup.rovingFocusGroupScope();
  var [I, F] = R(S);
  var [z, H] = R(S);
  var Z = e => {
    let {
      __scopeMenu: t,
      open: n = false,
      children: o,
      dir: i,
      onOpenChange: a,
      modal: u = true
    } = e;
    let c = D(t);
    let [l, d] = reactCoreLibraryReexport.useState(null);
    let f = reactCoreLibraryReexport.useRef(false);
    let p = reactUseLatestCallback.useLatestCallback(a);
    let h = useTextDirectionHook.useTextDirection(i);
    reactCoreLibraryReexport.useEffect(() => {
      let e = () => {
        f.current = true;
        document.addEventListener("pointerdown", t, {
          capture: true,
          once: true
        });
        document.addEventListener("pointermove", t, {
          capture: true,
          once: true
        });
      };
      let t = () => f.current = false;
      document.addEventListener("keydown", e, {
        capture: true
      });
      return () => {
        document.removeEventListener("keydown", e, {
          capture: true
        });
        document.removeEventListener("pointerdown", t, {
          capture: true
        });
        document.removeEventListener("pointermove", t, {
          capture: true
        });
      };
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(radixPopperPrimitives.Popper, {
      ...c,
      children: reactJsxRuntimeCoreReexport.jsx(I, {
        scope: t,
        open: n,
        onOpenChange: p,
        content: l,
        onContentChange: d,
        children: reactJsxRuntimeCoreReexport.jsx(z, {
          scope: t,
          onClose: reactCoreLibraryReexport.useCallback(() => p(false), [p]),
          isUsingKeyboardRef: f,
          dir: h,
          modal: u,
          children: o
        })
      })
    });
  };
  Z.displayName = S;
  var V = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeMenu: n,
      ...r
    } = e;
    let o = D(n);
    return reactJsxRuntimeCoreReexport.jsx(radixPopperPrimitives.PopperAnchor, {
      ...o,
      ...r,
      ref: t
    });
  });
  V.displayName = "MenuAnchor";
  var W = "MenuPortal";
  var [U, Y] = R(W, {
    forceMount: undefined
  });
  var B = e => {
    let {
      __scopeMenu: t,
      forceMount: n,
      children: r,
      container: o
    } = e;
    let i = F(W, t);
    return reactJsxRuntimeCoreReexport.jsx(U, {
      scope: t,
      forceMount: n,
      children: reactJsxRuntimeCoreReexport.jsx(reactPresenceComponent.Presence, {
        present: n || i.open,
        children: reactJsxRuntimeCoreReexport.jsx(reactPortalComponent.Portal, {
          asChild: true,
          container: o,
          children: r
        })
      })
    });
  };
  B.displayName = W;
  var G = "MenuContent";
  var [K, X] = R(G);
  var q = reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = Y(G, e.__scopeMenu);
    let {
      forceMount: r = n.forceMount,
      ...o
    } = e;
    let i = F(G, e.__scopeMenu);
    let a = H(G, e.__scopeMenu);
    return reactJsxRuntimeCoreReexport.jsx(M.Provider, {
      scope: e.__scopeMenu,
      children: reactJsxRuntimeCoreReexport.jsx(reactPresenceComponent.Presence, {
        present: r || i.open,
        children: reactJsxRuntimeCoreReexport.jsx(M.Slot, {
          scope: e.__scopeMenu,
          children: a.modal ? reactJsxRuntimeCoreReexport.jsx($, {
            ...o,
            ref: t
          }) : reactJsxRuntimeCoreReexport.jsx(J, {
            ...o,
            ref: t
          })
        })
      })
    });
  });
  var $ = reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = F(G, e.__scopeMenu);
    let a = reactCoreLibraryReexport.useRef(null);
    let u = reactMergeRefs.useMergeRefs(t, a);
    reactCoreLibraryReexport.useEffect(() => {
      let e = a.current;
      if (e) {
        return domInertPolyfill.manageAriaHidden(e);
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(ee, {
      ...e,
      ref: u,
      trapFocus: n.open,
      disableOutsidePointerEvents: n.open,
      disableOutsideScroll: true,
      onFocusOutside: composeHandlers.composeHandlers(e.onFocusOutside, e => e.preventDefault(), {
        checkForDefaultPrevented: false
      }),
      onDismiss: () => n.onOpenChange(false)
    });
  });
  var J = reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = F(G, e.__scopeMenu);
    return reactJsxRuntimeCoreReexport.jsx(ee, {
      ...e,
      ref: t,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: () => n.onOpenChange(false)
    });
  });
  var Q = reactSlotUtils.createSlot("MenuContent.ScrollLock");
  var ee = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeMenu: n,
      loop: a = false,
      trapFocus: u,
      onOpenAutoFocus: c,
      onCloseAutoFocus: l,
      disableOutsidePointerEvents: s,
      onEntryFocus: h,
      onEscapeKeyDown: m,
      onPointerDownOutside: g,
      onFocusOutside: x,
      onInteractOutside: b,
      onDismiss: w,
      disableOutsideScroll: E,
      ...k
    } = e;
    let A = F(G, n);
    let S = H(G, n);
    let M = D(n);
    let O = L(n);
    let R = N(n);
    let [P, I] = reactCoreLibraryReexport.useState(null);
    let z = reactCoreLibraryReexport.useRef(null);
    let Z = reactMergeRefs.useMergeRefs(t, z, A.onContentChange);
    let V = reactCoreLibraryReexport.useRef(0);
    let W = reactCoreLibraryReexport.useRef("");
    let U = reactCoreLibraryReexport.useRef(0);
    let Y = reactCoreLibraryReexport.useRef(null);
    let B = reactCoreLibraryReexport.useRef("right");
    let X = reactCoreLibraryReexport.useRef(0);
    let q = E ? reactScrollLock.BodyScrollLock : reactCoreLibraryReexport.Fragment;
    let $ = e => {
      var n;
      let r = W.current + e;
      let o = R().filter(e => !e.disabled);
      let i = document.activeElement;
      let a = o.find(e => e.ref.current === i)?.textValue;
      let u = function (e, t, n) {
        var r;
        let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t;
        r = Math.max(n ? e.indexOf(n) : -1, 0);
        let i = e.map((t, n) => e[(r + n) % e.length]);
        if (o.length === 1) {
          i = i.filter(e => e !== n);
        }
        let a = i.find(e => e.toLowerCase().startsWith(o.toLowerCase()));
        if (a !== n) {
          return a;
        } else {
          return undefined;
        }
      }(o.map(e => e.textValue), r, a);
      let c = (n = o.find(e => e.textValue === u)) === null || n === undefined ? undefined : n.ref.current;
      (function e(t) {
        W.current = t;
        window.clearTimeout(V.current);
        if (t !== "") {
          V.current = window.setTimeout(() => e(""), 1000);
        }
      })(r);
      if (c) {
        setTimeout(() => c.focus());
      }
    };
    reactCoreLibraryReexport.useEffect(() => () => window.clearTimeout(V.current), []);
    useRadixFocusGuard.useFocusGuard();
    let J = reactCoreLibraryReexport.useCallback(e => {
      var r;
      var o;
      return B.current === Y.current?.side && (r = e, !!(o = Y.current?.area) && function (e, t) {
        let {
          x: n,
          y: r
        } = e;
        let o = false;
        for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
          let a = t[e];
          let u = t[i];
          let c = a.x;
          let l = a.y;
          let s = u.x;
          let d = u.y;
          if (l > r != d > r && n < (s - c) * (r - l) / (d - l) + c) {
            o = !o;
          }
        }
        return o;
      }({
        x: r.clientX,
        y: r.clientY
      }, o));
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(K, {
      scope: n,
      searchRef: W,
      onItemEnter: reactCoreLibraryReexport.useCallback(e => {
        if (J(e)) {
          e.preventDefault();
        }
      }, [J]),
      onItemLeave: reactCoreLibraryReexport.useCallback(e => {
        var t;
        if (!J(e)) {
          if ((t = z.current) !== null && t !== undefined) {
            t.focus();
          }
          I(null);
        }
      }, [J]),
      onTriggerLeave: reactCoreLibraryReexport.useCallback(e => {
        if (J(e)) {
          e.preventDefault();
        }
      }, [J]),
      pointerGraceTimerRef: U,
      onPointerGraceIntentChange: reactCoreLibraryReexport.useCallback(e => {
        Y.current = e;
      }, []),
      children: reactJsxRuntimeCoreReexport.jsx(q, {
        ...(E ? {
          as: Q,
          allowPinchZoom: true
        } : undefined),
        children: reactJsxRuntimeCoreReexport.jsx(focusScopeComponent.FocusScope, {
          asChild: true,
          trapped: u,
          onMountAutoFocus: composeHandlers.composeHandlers(c, e => {
            var t;
            e.preventDefault();
            if ((t = z.current) !== null && t !== undefined) {
              t.focus({
                preventScroll: true
              });
            }
          }),
          onUnmountAutoFocus: l,
          children: reactJsxRuntimeCoreReexport.jsx(dismissableLayer.DismissableLayer, {
            asChild: true,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: m,
            onPointerDownOutside: g,
            onFocusOutside: x,
            onInteractOutside: b,
            onDismiss: w,
            children: reactJsxRuntimeCoreReexport.jsx(rovingFocusGroup.RovingFocusGroup, {
              asChild: true,
              ...O,
              dir: S.dir,
              orientation: "vertical",
              loop: a,
              currentTabStopId: P,
              onCurrentTabStopIdChange: I,
              onEntryFocus: composeHandlers.composeHandlers(h, e => {
                if (!S.isUsingKeyboardRef.current) {
                  e.preventDefault();
                }
              }),
              preventScrollOnEntryFocus: true,
              children: reactJsxRuntimeCoreReexport.jsx(radixPopperPrimitives.PopperContent, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": eA(A.open),
                "data-radix-menu-content": "",
                dir: S.dir,
                ...M,
                ...k,
                ref: Z,
                style: {
                  outline: "none",
                  ...k.style
                },
                onKeyDown: composeHandlers.composeHandlers(k.onKeyDown, e => {
                  let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget;
                  let n = e.ctrlKey || e.altKey || e.metaKey;
                  let r = e.key.length === 1;
                  if (t) {
                    if (e.key === "Tab") {
                      e.preventDefault();
                    }
                    if (!n && r) {
                      $(e.key);
                    }
                  }
                  let o = z.current;
                  if (e.target !== o || !T.includes(e.key)) {
                    return;
                  }
                  e.preventDefault();
                  let i = R().filter(e => !e.disabled).map(e => e.ref.current);
                  if (j.includes(e.key)) {
                    i.reverse();
                  }
                  (function (e) {
                    let t = document.activeElement;
                    for (let n of e) {
                      if (n === t || (n.focus(), document.activeElement !== t)) {
                        return;
                      }
                    }
                  })(i);
                }),
                onBlur: composeHandlers.composeHandlers(e.onBlur, e => {
                  if (!e.currentTarget.contains(e.target)) {
                    window.clearTimeout(V.current);
                    W.current = "";
                  }
                }),
                onPointerMove: composeHandlers.composeHandlers(e.onPointerMove, eN(e => {
                  let t = e.target;
                  let n = X.current !== e.clientX;
                  if (e.currentTarget.contains(t) && n) {
                    let t = e.clientX > X.current ? "right" : "left";
                    B.current = t;
                    X.current = e.clientX;
                  }
                }))
              })
            })
          })
        })
      })
    });
  });
  q.displayName = G;
  var et = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeMenu: n,
      ...r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.div, {
      role: "group",
      ...r,
      ref: t
    });
  });
  et.displayName = "MenuGroup";
  var en = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeMenu: n,
      ...r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.div, {
      ...r,
      ref: t
    });
  });
  en.displayName = "MenuLabel";
  var er = "MenuItem";
  var eo = "menu.itemSelect";
  var ei = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      disabled: n = false,
      onSelect: a,
      ...u
    } = e;
    let l = reactCoreLibraryReexport.useRef(null);
    let s = H(er, e.__scopeMenu);
    let d = X(er, e.__scopeMenu);
    let f = reactMergeRefs.useMergeRefs(t, l);
    let p = reactCoreLibraryReexport.useRef(false);
    return reactJsxRuntimeCoreReexport.jsx(ea, {
      ...u,
      ref: f,
      disabled: n,
      onClick: composeHandlers.composeHandlers(e.onClick, () => {
        let e = l.current;
        if (!n && e) {
          let t = new CustomEvent(eo, {
            bubbles: true,
            cancelable: true
          });
          e.addEventListener(eo, e => a == null ? undefined : a(e), {
            once: true
          });
          reactPrimitiveComponents.dispatchEventSync(e, t);
          if (t.defaultPrevented) {
            p.current = false;
          } else {
            s.onClose();
          }
        }
      }),
      onPointerDown: t => {
        var n;
        if ((n = e.onPointerDown) !== null && n !== undefined) {
          n.call(e, t);
        }
        p.current = true;
      },
      onPointerUp: composeHandlers.composeHandlers(e.onPointerUp, e => {
        var t;
        if (!p.current && (t = e.currentTarget) !== null && t !== undefined) {
          t.click();
        }
      }),
      onKeyDown: composeHandlers.composeHandlers(e.onKeyDown, e => {
        let t = d.searchRef.current !== "";
        if (!n && (!t || e.key !== " ") && E.includes(e.key)) {
          e.currentTarget.click();
          e.preventDefault();
        }
      })
    });
  });
  ei.displayName = er;
  var ea = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeMenu: n,
      disabled: a = false,
      textValue: u,
      ...l
    } = e;
    let s = X(er, n);
    let d = L(n);
    let f = reactCoreLibraryReexport.useRef(null);
    let p = reactMergeRefs.useMergeRefs(t, f);
    let [h, v] = reactCoreLibraryReexport.useState(false);
    let [m, g] = reactCoreLibraryReexport.useState("");
    reactCoreLibraryReexport.useEffect(() => {
      let e = f.current;
      if (e) {
        g((e.textContent ?? "").trim());
      }
    }, [l.children]);
    return reactJsxRuntimeCoreReexport.jsx(M.ItemSlot, {
      scope: n,
      disabled: a,
      textValue: u ?? m,
      children: reactJsxRuntimeCoreReexport.jsx(rovingFocusGroup.RovingFocusGroupItem, {
        asChild: true,
        ...d,
        focusable: !a,
        children: reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.div, {
          role: "menuitem",
          "data-highlighted": h ? "" : undefined,
          "aria-disabled": a || undefined,
          "data-disabled": a ? "" : undefined,
          ...l,
          ref: p,
          onPointerMove: composeHandlers.composeHandlers(e.onPointerMove, eN(e => {
            if (a) {
              s.onItemLeave(e);
            } else {
              s.onItemEnter(e);
              if (!e.defaultPrevented) {
                e.currentTarget.focus({
                  preventScroll: true
                });
              }
            }
          })),
          onPointerLeave: composeHandlers.composeHandlers(e.onPointerLeave, eN(e => s.onItemLeave(e))),
          onFocus: composeHandlers.composeHandlers(e.onFocus, () => v(true)),
          onBlur: composeHandlers.composeHandlers(e.onBlur, () => v(false))
        })
      })
    });
  });
  var eu = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      checked: n = false,
      onCheckedChange: r,
      ...i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(ev, {
      scope: e.__scopeMenu,
      checked: n,
      children: reactJsxRuntimeCoreReexport.jsx(ei, {
        role: "menuitemcheckbox",
        "aria-checked": eS(n) ? "mixed" : n,
        ...i,
        ref: t,
        "data-state": eM(n),
        onSelect: composeHandlers.composeHandlers(i.onSelect, () => r == null ? undefined : r(!!eS(n) || !n), {
          checkForDefaultPrevented: false
        })
      })
    });
  });
  eu.displayName = "MenuCheckboxItem";
  var ec = "MenuRadioGroup";
  var [el, es] = R(ec, {
    value: undefined,
    onValueChange: () => {}
  });
  var ed = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      value: n,
      onValueChange: r,
      ...o
    } = e;
    let i = reactUseLatestCallback.useLatestCallback(r);
    return reactJsxRuntimeCoreReexport.jsx(el, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: i,
      children: reactJsxRuntimeCoreReexport.jsx(et, {
        ...o,
        ref: t
      })
    });
  });
  ed.displayName = ec;
  var ef = "MenuRadioItem";
  var ep = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      value: n,
      ...r
    } = e;
    let i = es(ef, e.__scopeMenu);
    let a = n === i.value;
    return reactJsxRuntimeCoreReexport.jsx(ev, {
      scope: e.__scopeMenu,
      checked: a,
      children: reactJsxRuntimeCoreReexport.jsx(ei, {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": eM(a),
        onSelect: composeHandlers.composeHandlers(r.onSelect, () => {
          var e;
          if ((e = i.onValueChange) === null || e === undefined) {
            return undefined;
          } else {
            return e.call(i, n);
          }
        }, {
          checkForDefaultPrevented: false
        })
      })
    });
  });
  ep.displayName = ef;
  var eh = "MenuItemIndicator";
  var [ev, em] = R(eh, {
    checked: false
  });
  var eg = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeMenu: n,
      forceMount: r,
      ...o
    } = e;
    let i = em(eh, n);
    return reactJsxRuntimeCoreReexport.jsx(reactPresenceComponent.Presence, {
      present: r || eS(i.checked) || i.checked === true,
      children: reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.span, {
        ...o,
        ref: t,
        "data-state": eM(i.checked)
      })
    });
  });
  eg.displayName = eh;
  var ey = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeMenu: n,
      ...r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...r,
      ref: t
    });
  });
  ey.displayName = "MenuSeparator";
  var ex = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeMenu: n,
      ...r
    } = e;
    let o = D(n);
    return reactJsxRuntimeCoreReexport.jsx(radixPopperPrimitives.PopperArrow, {
      ...o,
      ...r,
      ref: t
    });
  });
  ex.displayName = "MenuArrow";
  var eb = "MenuSub";
  var [ew, eC] = R(eb);
  var e_ = e => {
    let {
      __scopeMenu: t,
      children: n,
      open: o = false,
      onOpenChange: i
    } = e;
    let a = F(eb, t);
    let u = D(t);
    let [c, l] = reactCoreLibraryReexport.useState(null);
    let [s, d] = reactCoreLibraryReexport.useState(null);
    let f = reactUseLatestCallback.useLatestCallback(i);
    reactCoreLibraryReexport.useEffect(() => {
      if (a.open === false) {
        f(false);
      }
      return () => f(false);
    }, [a.open, f]);
    return reactJsxRuntimeCoreReexport.jsx(radixPopperPrimitives.Popper, {
      ...u,
      children: reactJsxRuntimeCoreReexport.jsx(I, {
        scope: t,
        open: o,
        onOpenChange: f,
        content: s,
        onContentChange: d,
        children: reactJsxRuntimeCoreReexport.jsx(ew, {
          scope: t,
          contentId: useIdHook.useId(),
          triggerId: useIdHook.useId(),
          trigger: c,
          onTriggerChange: l,
          children: n
        })
      })
    });
  };
  e_.displayName = eb;
  var eE = "MenuSubTrigger";
  var ej = reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = F(eE, e.__scopeMenu);
    let a = H(eE, e.__scopeMenu);
    let u = eC(eE, e.__scopeMenu);
    let c = X(eE, e.__scopeMenu);
    let l = reactCoreLibraryReexport.useRef(null);
    let {
      pointerGraceTimerRef: s,
      onPointerGraceIntentChange: d
    } = c;
    let f = {
      __scopeMenu: e.__scopeMenu
    };
    let p = reactCoreLibraryReexport.useCallback(() => {
      if (l.current) {
        window.clearTimeout(l.current);
      }
      l.current = null;
    }, []);
    reactCoreLibraryReexport.useEffect(() => p, [p]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = s.current;
      return () => {
        window.clearTimeout(e);
        d(null);
      };
    }, [s, d]);
    return reactJsxRuntimeCoreReexport.jsx(V, {
      asChild: true,
      ...f,
      children: reactJsxRuntimeCoreReexport.jsx(ea, {
        id: u.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": u.contentId,
        "data-state": eA(n.open),
        ...e,
        ref: reactMergeRefs.mergeRefs(t, u.onTriggerChange),
        onClick: t => {
          var r;
          if ((r = e.onClick) !== null && r !== undefined) {
            r.call(e, t);
          }
          if (!e.disabled && !t.defaultPrevented) {
            t.currentTarget.focus();
            if (!n.open) {
              n.onOpenChange(true);
            }
          }
        },
        onPointerMove: composeHandlers.composeHandlers(e.onPointerMove, eN(t => {
          c.onItemEnter(t);
          if (!t.defaultPrevented && !e.disabled && !n.open && !l.current) {
            c.onPointerGraceIntentChange(null);
            l.current = window.setTimeout(() => {
              n.onOpenChange(true);
              p();
            }, 100);
          }
        })),
        onPointerLeave: composeHandlers.composeHandlers(e.onPointerLeave, eN(e => {
          var t;
          var r;
          p();
          let o = (t = n.content) === null || t === undefined ? undefined : t.getBoundingClientRect();
          if (o) {
            let t = (r = n.content) === null || r === undefined ? undefined : r.dataset.side;
            let i = t === "right";
            let a = o[i ? "left" : "right"];
            let u = o[i ? "right" : "left"];
            c.onPointerGraceIntentChange({
              area: [{
                x: e.clientX + (i ? -5 : 5),
                y: e.clientY
              }, {
                x: a,
                y: o.top
              }, {
                x: u,
                y: o.top
              }, {
                x: u,
                y: o.bottom
              }, {
                x: a,
                y: o.bottom
              }],
              side: t
            });
            window.clearTimeout(s.current);
            s.current = window.setTimeout(() => c.onPointerGraceIntentChange(null), 300);
          } else {
            c.onTriggerLeave(e);
            if (e.defaultPrevented) {
              return;
            }
            c.onPointerGraceIntentChange(null);
          }
        })),
        onKeyDown: composeHandlers.composeHandlers(e.onKeyDown, t => {
          let r = c.searchRef.current !== "";
          if (!e.disabled && (!r || t.key !== " ") && k[a.dir].includes(t.key)) {
            var o;
            n.onOpenChange(true);
            if ((o = n.content) !== null && o !== undefined) {
              o.focus();
            }
            t.preventDefault();
          }
        })
      })
    });
  });
  ej.displayName = eE;
  var eT = "MenuSubContent";
  var ek = reactCoreLibraryReexport.forwardRef((e, t) => {
    let n = Y(G, e.__scopeMenu);
    let {
      forceMount: a = n.forceMount,
      ...u
    } = e;
    let c = F(G, e.__scopeMenu);
    let l = H(G, e.__scopeMenu);
    let s = eC(eT, e.__scopeMenu);
    let d = reactCoreLibraryReexport.useRef(null);
    let f = reactMergeRefs.useMergeRefs(t, d);
    return reactJsxRuntimeCoreReexport.jsx(M.Provider, {
      scope: e.__scopeMenu,
      children: reactJsxRuntimeCoreReexport.jsx(reactPresenceComponent.Presence, {
        present: a || c.open,
        children: reactJsxRuntimeCoreReexport.jsx(M.Slot, {
          scope: e.__scopeMenu,
          children: reactJsxRuntimeCoreReexport.jsx(ee, {
            id: s.contentId,
            "aria-labelledby": s.triggerId,
            ...u,
            ref: f,
            align: "start",
            side: l.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: false,
            disableOutsideScroll: false,
            trapFocus: false,
            onOpenAutoFocus: e => {
              var t;
              if (l.isUsingKeyboardRef.current) {
                if ((t = d.current) !== null && t !== undefined) {
                  t.focus();
                }
              }
              e.preventDefault();
            },
            onCloseAutoFocus: e => e.preventDefault(),
            onFocusOutside: composeHandlers.composeHandlers(e.onFocusOutside, e => {
              if (e.target !== s.trigger) {
                c.onOpenChange(false);
              }
            }),
            onEscapeKeyDown: composeHandlers.composeHandlers(e.onEscapeKeyDown, e => {
              l.onClose();
              e.preventDefault();
            }),
            onKeyDown: composeHandlers.composeHandlers(e.onKeyDown, e => {
              let t = e.currentTarget.contains(e.target);
              let n = A[l.dir].includes(e.key);
              if (t && n) {
                var r;
                c.onOpenChange(false);
                if ((r = s.trigger) !== null && r !== undefined) {
                  r.focus();
                }
                e.preventDefault();
              }
            })
          })
        })
      })
    });
  });
  function eA(e) {
    if (e) {
      return "open";
    } else {
      return "closed";
    }
  }
  function eS(e) {
    return e === "indeterminate";
  }
  function eM(e) {
    if (eS(e)) {
      return "indeterminate";
    } else if (e) {
      return "checked";
    } else {
      return "unchecked";
    }
  }
  function eN(e) {
    return t => t.pointerType === "mouse" ? e(t) : undefined;
  }
  ek.displayName = eT;
  var eO = "DropdownMenu";
  var [eR, eP] = reactContextUtils.createContextScope(eO, [P]);
  var eD = P();
  var [eL, eI] = eR(eO);
  var eF = e => {
    let {
      __scopeDropdownMenu: t,
      children: n,
      dir: o,
      open: i,
      defaultOpen: a,
      onOpenChange: c,
      modal: l = true
    } = e;
    let s = eD(t);
    let d = reactCoreLibraryReexport.useRef(null);
    let [f, p] = useControllableState.useControllableState({
      prop: i,
      defaultProp: a != null && a,
      onChange: c,
      caller: eO
    });
    return reactJsxRuntimeCoreReexport.jsx(eL, {
      scope: t,
      triggerId: useIdHook.useId(),
      triggerRef: d,
      contentId: useIdHook.useId(),
      open: f,
      onOpenChange: p,
      onOpenToggle: reactCoreLibraryReexport.useCallback(() => p(e => !e), [p]),
      modal: l,
      children: reactJsxRuntimeCoreReexport.jsx(Z, {
        ...s,
        open: f,
        onOpenChange: p,
        dir: o,
        modal: l,
        children: n
      })
    });
  };
  eF.displayName = eO;
  var ez = "DropdownMenuTrigger";
  var eH = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDropdownMenu: n,
      disabled: r = false,
      ...a
    } = e;
    let u = eI(ez, n);
    let l = eD(n);
    return reactJsxRuntimeCoreReexport.jsx(V, {
      asChild: true,
      ...l,
      children: reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.button, {
        type: "button",
        id: u.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": u.open,
        "aria-controls": u.open ? u.contentId : undefined,
        "data-state": u.open ? "open" : "closed",
        "data-disabled": r ? "" : undefined,
        disabled: r,
        ...a,
        ref: reactMergeRefs.mergeRefs(t, u.triggerRef),
        onPointerDown: composeHandlers.composeHandlers(e.onPointerDown, e => {
          if (!r && e.button === 0 && e.ctrlKey === false) {
            u.onOpenToggle();
            if (!u.open) {
              e.preventDefault();
            }
          }
        }),
        onKeyDown: composeHandlers.composeHandlers(e.onKeyDown, e => {
          if (!r) {
            if (["Enter", " "].includes(e.key)) {
              u.onOpenToggle();
            }
            if (e.key === "ArrowDown") {
              u.onOpenChange(true);
            }
            if (["Enter", " ", "ArrowDown"].includes(e.key)) {
              e.preventDefault();
            }
          }
        })
      })
    });
  });
  eH.displayName = ez;
  var eZ = e => {
    let {
      __scopeDropdownMenu: t,
      ...n
    } = e;
    let r = eD(t);
    return reactJsxRuntimeCoreReexport.jsx(B, {
      ...r,
      ...n
    });
  };
  eZ.displayName = "DropdownMenuPortal";
  var eV = "DropdownMenuContent";
  var eW = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDropdownMenu: n,
      ...i
    } = e;
    let a = eI(eV, n);
    let u = eD(n);
    let c = reactCoreLibraryReexport.useRef(false);
    return reactJsxRuntimeCoreReexport.jsx(q, {
      id: a.contentId,
      "aria-labelledby": a.triggerId,
      ...u,
      ...i,
      ref: t,
      onCloseAutoFocus: composeHandlers.composeHandlers(e.onCloseAutoFocus, e => {
        var t;
        if (!c.current && (t = a.triggerRef.current) !== null && t !== undefined) {
          t.focus();
        }
        c.current = false;
        e.preventDefault();
      }),
      onInteractOutside: composeHandlers.composeHandlers(e.onInteractOutside, e => {
        let t = e.detail.originalEvent;
        let n = t.button === 0 && t.ctrlKey === true;
        let r = t.button === 2 || n;
        if (!a.modal || r) {
          c.current = true;
        }
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    });
  });
  eW.displayName = eV;
  var eU = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDropdownMenu: n,
      ...r
    } = e;
    let o = eD(n);
    return reactJsxRuntimeCoreReexport.jsx(et, {
      ...o,
      ...r,
      ref: t
    });
  });
  eU.displayName = "DropdownMenuGroup";
  var eY = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDropdownMenu: n,
      ...r
    } = e;
    let o = eD(n);
    return reactJsxRuntimeCoreReexport.jsx(en, {
      ...o,
      ...r,
      ref: t
    });
  });
  eY.displayName = "DropdownMenuLabel";
  var eB = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDropdownMenu: n,
      ...r
    } = e;
    let o = eD(n);
    return reactJsxRuntimeCoreReexport.jsx(ei, {
      ...o,
      ...r,
      ref: t
    });
  });
  eB.displayName = "DropdownMenuItem";
  var eG = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDropdownMenu: n,
      ...r
    } = e;
    let o = eD(n);
    return reactJsxRuntimeCoreReexport.jsx(eu, {
      ...o,
      ...r,
      ref: t
    });
  });
  eG.displayName = "DropdownMenuCheckboxItem";
  var eK = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDropdownMenu: n,
      ...r
    } = e;
    let o = eD(n);
    return reactJsxRuntimeCoreReexport.jsx(ed, {
      ...o,
      ...r,
      ref: t
    });
  });
  eK.displayName = "DropdownMenuRadioGroup";
  var eX = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDropdownMenu: n,
      ...r
    } = e;
    let o = eD(n);
    return reactJsxRuntimeCoreReexport.jsx(ep, {
      ...o,
      ...r,
      ref: t
    });
  });
  eX.displayName = "DropdownMenuRadioItem";
  var eq = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDropdownMenu: n,
      ...r
    } = e;
    let o = eD(n);
    return reactJsxRuntimeCoreReexport.jsx(eg, {
      ...o,
      ...r,
      ref: t
    });
  });
  eq.displayName = "DropdownMenuItemIndicator";
  var e$ = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDropdownMenu: n,
      ...r
    } = e;
    let o = eD(n);
    return reactJsxRuntimeCoreReexport.jsx(ey, {
      ...o,
      ...r,
      ref: t
    });
  });
  e$.displayName = "DropdownMenuSeparator";
  var eJ = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDropdownMenu: n,
      ...r
    } = e;
    let o = eD(n);
    return reactJsxRuntimeCoreReexport.jsx(ex, {
      ...o,
      ...r,
      ref: t
    });
  });
  eJ.displayName = "DropdownMenuArrow";
  var eQ = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDropdownMenu: n,
      ...r
    } = e;
    let o = eD(n);
    return reactJsxRuntimeCoreReexport.jsx(ej, {
      ...o,
      ...r,
      ref: t
    });
  });
  eQ.displayName = "DropdownMenuSubTrigger";
  var e0 = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeDropdownMenu: n,
      ...r
    } = e;
    let o = eD(n);
    return reactJsxRuntimeCoreReexport.jsx(ek, {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    });
  });
  e0.displayName = "DropdownMenuSubContent";
  var e1 = eF;
  var e2 = eH;
  var e4 = eZ;
  var e5 = eW;
  var e6 = eU;
  var e8 = eY;
  var e3 = eB;
  var e9 = eG;
  var e7 = eK;
  var te = eX;
  var tt = eq;
  var tn = e$;
  var tr = eJ;
  var to = e => {
    let {
      __scopeDropdownMenu: t,
      children: n,
      open: r,
      onOpenChange: o,
      defaultOpen: i
    } = e;
    let a = eD(t);
    let [c, l] = useControllableState.useControllableState({
      prop: r,
      defaultProp: i != null && i,
      onChange: o,
      caller: "DropdownMenuSub"
    });
    return reactJsxRuntimeCoreReexport.jsx(e_, {
      ...a,
      open: c,
      onOpenChange: l,
      children: n
    });
  };
  var ti = eQ;
  var ta = e0;
  require.d(exports, {
    DropdownMenuSubContent: function () {
      return ta;
    },
    DropdownMenuRadioGroup: function () {
      return e7;
    },
    DropdownMenu: function () {
      return e1;
    },
    DropdownMenuSub: function () {
      return to;
    },
    DropdownMenuCheckboxItem: function () {
      return e9;
    },
    DropdownMenuTrigger: function () {
      return e2;
    },
    DropdownMenuArrow: function () {
      return tr;
    },
    DropdownMenuItem: function () {
      return e3;
    },
    DropdownMenuSubTrigger: function () {
      return ti;
    },
    DropdownMenuGroup: function () {
      return e6;
    },
    DropdownMenuLabel: function () {
      return e8;
    },
    DropdownMenuItemIndicator: function () {
      return tt;
    },
    DropdownMenuRadioItem: function () {
      return te;
    },
    DropdownMenuContent: function () {
      return e5;
    },
    DropdownMenuSeparator: function () {
      return tn;
    },
    DropdownMenuPortal: function () {
      return e4;
    }
  });
}