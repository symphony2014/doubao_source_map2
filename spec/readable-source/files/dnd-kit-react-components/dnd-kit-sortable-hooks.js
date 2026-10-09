// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fo' to 'SortableContext'
// - Renamed export 'Rp' to 'arrayMove'
// - Renamed export 'U2' to 'verticalSortStrategy'
// - Renamed export 'is' to 'keyboardCoords'
// - Renamed export 'nB' to 'useSortable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27079.aa80b040.js
         * chunkId: 27079
         * moduleId: 508725
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var dndKitCoreModule = require("dnd-kit-core-module") /*id: 743382*/;
  var reactDomUtils = require("react-dom-utils") /*id: 92997*/;
  function l(e, t, n) {
    let r = e.slice();
    r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]);
    return r;
  }
  function o(e) {
    return e !== null && e >= 0;
  }
  let s = e => {
    let {
      rects: t,
      activeIndex: n,
      overIndex: r,
      index: i
    } = e;
    let a = l(t, r, n);
    let o = t[i];
    let s = a[i];
    if (s && o) {
      return {
        x: s.left - o.left,
        y: s.top - o.top,
        scaleX: s.width / o.width,
        scaleY: s.height / o.height
      };
    } else {
      return null;
    }
  };
  let u = "Sortable";
  let d = reactCoreLibraryReexport.createContext({
    activeIndex: -1,
    containerId: u,
    disableTransforms: false,
    items: [],
    overIndex: -1,
    useDragOverlay: false,
    sortedRects: [],
    strategy: s,
    disabled: {
      draggable: false,
      droppable: false
    }
  });
  function c(e) {
    let {
      children: t,
      id: n,
      items: l,
      strategy: o = s,
      disabled: c = false
    } = e;
    let {
      active: h,
      dragOverlay: p,
      droppableRects: f,
      over: g,
      measureDroppableContainers: v
    } = dndKitCoreModule.useDndContext();
    let b = reactDomUtils.useId(u, n);
    let m = p.rect !== null;
    let y = reactCoreLibraryReexport.useMemo(() => l.map(e => typeof e == "object" && "id" in e ? e.id : e), [l]);
    let x = h != null;
    let E = h ? y.indexOf(h.id) : -1;
    let w = g ? y.indexOf(g.id) : -1;
    let C = reactCoreLibraryReexport.useRef(y);
    let D = !function (e, t) {
      if (e === t) {
        return true;
      }
      if (e.length !== t.length) {
        return false;
      }
      for (let n = 0; n < e.length; n++) {
        if (e[n] !== t[n]) {
          return false;
        }
      }
      return true;
    }(y, C.current);
    let k = w !== -1 && E === -1 || D;
    let S = typeof c == "boolean" ? {
      draggable: c,
      droppable: c
    } : c;
    reactDomUtils.useIsomorphicLayoutEffect(() => {
      if (D && x) {
        v(y);
      }
    }, [D, y, x, v]);
    reactCoreLibraryReexport.useEffect(() => {
      C.current = y;
    }, [y]);
    let T = reactCoreLibraryReexport.useMemo(() => ({
      activeIndex: E,
      containerId: b,
      disabled: S,
      disableTransforms: k,
      items: y,
      overIndex: w,
      useDragOverlay: m,
      sortedRects: y.reduce((e, t, n) => {
        let r = f.get(t);
        if (r) {
          e[n] = r;
        }
        return e;
      }, Array(y.length)),
      strategy: o
    }), [E, b, S.draggable, S.droppable, k, y, w, f, m, o]);
    return reactCoreLibraryReexport.createElement(d.Provider, {
      value: T
    }, t);
  }
  let h = e => {
    let {
      id: t,
      items: n,
      activeIndex: r,
      overIndex: i
    } = e;
    return l(n, r, i).indexOf(t);
  };
  let p = e => {
    let {
      containerId: t,
      isSorting: n,
      wasDragging: r,
      index: i,
      items: a,
      newIndex: l,
      previousItems: o,
      previousContainerId: s,
      transition: u
    } = e;
    return !!u && !!r && (o === a || i !== l) && (!!n || l !== i && t === s);
  };
  let f = {
    duration: 200,
    easing: "ease"
  };
  let g = "transform";
  let v = reactDomUtils.TransformUtils.Transition.toString({
    property: g,
    duration: 0,
    easing: "linear"
  });
  let b = {
    roleDescription: "sortable"
  };
  function m(e) {
    var t;
    var n;
    let {
      animateLayoutChanges: u = p,
      attributes: c,
      disabled: m,
      data: y,
      getNewIndex: x = h,
      id: E,
      strategy: w,
      resizeObserverConfig: C,
      transition: D = f
    } = e;
    let {
      items: k,
      containerId: S,
      activeIndex: T,
      disabled: _,
      disableTransforms: M,
      sortedRects: P,
      overIndex: A,
      useDragOverlay: R,
      strategy: I
    } = reactCoreLibraryReexport.useContext(d);
    t = m;
    n = _;
    let L = typeof t == "boolean" ? {
      draggable: t,
      droppable: false
    } : {
      draggable: (t == null ? undefined : t.draggable) ?? n.draggable,
      droppable: (t == null ? undefined : t.droppable) ?? n.droppable
    };
    let O = k.indexOf(E);
    let H = reactCoreLibraryReexport.useMemo(() => ({
      sortable: {
        containerId: S,
        index: O,
        items: k
      },
      ...y
    }), [S, y, O, k]);
    let V = reactCoreLibraryReexport.useMemo(() => k.slice(k.indexOf(E)), [k, E]);
    let {
      rect: N,
      node: j,
      isOver: $,
      setNodeRef: U
    } = dndKitCoreModule.useDroppable({
      id: E,
      data: H,
      disabled: L.droppable,
      resizeObserverConfig: {
        updateMeasurementsFor: V,
        ...C
      }
    });
    let {
      active: F,
      activatorEvent: B,
      activeNodeRect: G,
      attributes: K,
      setNodeRef: X,
      listeners: z,
      isDragging: Z,
      over: W,
      setActivatorNodeRef: Y,
      transform: J
    } = dndKitCoreModule.useDraggable({
      id: E,
      data: H,
      attributes: {
        ...b,
        ...c
      },
      disabled: L.draggable
    });
    let q = reactDomUtils.useComposedRef(U, X);
    let Q = !!F;
    let ee = Q && !M && o(T) && o(A);
    let et = !R && Z;
    let en = et && ee ? J : null;
    let er = ee ? en ?? (w ?? I)({
      rects: P,
      activeNodeRect: G,
      activeIndex: T,
      overIndex: A,
      index: O
    }) : null;
    let ei = o(T) && o(A) ? x({
      id: E,
      items: k,
      activeIndex: T,
      overIndex: A
    }) : O;
    let ea = F == null ? undefined : F.id;
    let el = reactCoreLibraryReexport.useRef({
      activeId: ea,
      items: k,
      newIndex: ei,
      containerId: S
    });
    let eo = k !== el.current.items;
    let es = u({
      active: F,
      containerId: S,
      isDragging: Z,
      isSorting: Q,
      id: E,
      index: O,
      items: k,
      newIndex: el.current.newIndex,
      previousItems: el.current.items,
      previousContainerId: el.current.containerId,
      transition: D,
      wasDragging: el.current.activeId != null
    });
    let eu = function (e) {
      let {
        disabled: t,
        index: n,
        node: l,
        rect: o
      } = e;
      let [s, u] = reactCoreLibraryReexport.useState(null);
      let d = reactCoreLibraryReexport.useRef(n);
      reactDomUtils.useIsomorphicLayoutEffect(() => {
        if (!t && n !== d.current && l.current) {
          let e = o.current;
          if (e) {
            let t = dndKitCoreModule.getBoundingRect(l.current, {
              ignoreTransform: true
            });
            let n = {
              x: e.left - t.left,
              y: e.top - t.top,
              scaleX: e.width / t.width,
              scaleY: e.height / t.height
            };
            if (n.x || n.y) {
              u(n);
            }
          }
        }
        if (n !== d.current) {
          d.current = n;
        }
      }, [t, n, l, o]);
      reactCoreLibraryReexport.useEffect(() => {
        if (s) {
          u(null);
        }
      }, [s]);
      return s;
    }({
      disabled: !es,
      index: O,
      node: j,
      rect: N
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (Q && el.current.newIndex !== ei) {
        el.current.newIndex = ei;
      }
      if (S !== el.current.containerId) {
        el.current.containerId = S;
      }
      if (k !== el.current.items) {
        el.current.items = k;
      }
    }, [Q, ei, S, k]);
    reactCoreLibraryReexport.useEffect(() => {
      if (ea === el.current.activeId) {
        return;
      }
      if (ea && !el.current.activeId) {
        el.current.activeId = ea;
        return;
      }
      let e = setTimeout(() => {
        el.current.activeId = ea;
      }, 50);
      return () => clearTimeout(e);
    }, [ea]);
    return {
      active: F,
      activeIndex: T,
      attributes: K,
      data: H,
      rect: N,
      index: O,
      newIndex: ei,
      items: k,
      isOver: $,
      isSorting: Q,
      isDragging: Z,
      listeners: z,
      node: j,
      overIndex: A,
      over: W,
      setNodeRef: q,
      setActivatorNodeRef: Y,
      setDroppableNodeRef: U,
      setDraggableNodeRef: X,
      transform: eu ?? er,
      transition: eu || eo && el.current.newIndex === O ? v : (!et || reactDomUtils.isKeyboardEvent(B)) && D && (Q || es) ? reactDomUtils.TransformUtils.Transition.toString({
        ...D,
        property: g
      }) : undefined
    };
  }
  function y(e) {
    if (!e) {
      return false;
    }
    let t = e.data.current;
    return !!t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable;
  }
  let x = [dndKitCoreModule.KeyboardCode.Down, dndKitCoreModule.KeyboardCode.Right, dndKitCoreModule.KeyboardCode.Up, dndKitCoreModule.KeyboardCode.Left];
  let E = (e, t) => {
    let {
      context: {
        active: n,
        collisionRect: r,
        droppableRects: l,
        droppableContainers: o,
        over: s,
        scrollableAncestors: u
      }
    } = t;
    if (x.includes(e.code)) {
      e.preventDefault();
      if (!n || !r) {
        return;
      }
      let t = [];
      o.getEnabled().forEach(n => {
        if (!n || n != null && n.disabled) {
          return;
        }
        let a = l.get(n.id);
        if (a) {
          switch (e.code) {
            case dndKitCoreModule.KeyboardCode.Down:
              if (r.top < a.top) {
                t.push(n);
              }
              break;
            case dndKitCoreModule.KeyboardCode.Up:
              if (r.top > a.top) {
                t.push(n);
              }
              break;
            case dndKitCoreModule.KeyboardCode.Left:
              if (r.left > a.left) {
                t.push(n);
              }
              break;
            case dndKitCoreModule.KeyboardCode.Right:
              if (r.left < a.left) {
                t.push(n);
              }
          }
        }
      });
      let h = dndKitCoreModule.closestCenter({
        active: n,
        collisionRect: r,
        droppableRects: l,
        droppableContainers: t,
        pointerCoordinates: null
      });
      let p = dndKitCoreModule.getFirstCollision(h, "id");
      if (p === (s == null ? undefined : s.id) && h.length > 1) {
        p = h[1].id;
      }
      if (p != null) {
        let e = o.get(n.id);
        let t = o.get(p);
        let s = t ? l.get(t.id) : null;
        let h = t == null ? undefined : t.node.current;
        if (h && s && e && t) {
          var d;
          var c;
          let n = dndKitCoreModule.getScrollAncestors(h).some((e, t) => u[t] !== e);
          let l = w(e, t);
          d = e;
          c = t;
          let o = !!y(d) && !!y(c) && !!w(d, c) && d.data.current.sortable.index < c.data.current.sortable.index;
          let p = n || !l ? {
            x: 0,
            y: 0
          } : {
            x: o ? r.width - s.width : 0,
            y: o ? r.height - s.height : 0
          };
          let f = {
            x: s.left,
            y: s.top
          };
          if (p.x && p.y) {
            return f;
          } else {
            return reactDomUtils.scaleDown(f, p);
          }
        }
      }
    }
  };
  function w(e, t) {
    return !!y(e) && !!y(t) && e.data.current.sortable.containerId === t.data.current.sortable.containerId;
  }
  require.d(exports, {
    SortableContext: function () {
      return c;
    },
    arrayMove: function () {
      return l;
    },
    verticalSortStrategy: function () {
      return s;
    },
    keyboardCoords: function () {
      return E;
    },
    useSortable: function () {
      return m;
    }
  });
}