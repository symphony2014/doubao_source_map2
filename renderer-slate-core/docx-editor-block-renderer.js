// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G2' to 'useInjector'
// - Renamed export 'M_' to 'BlockRenderer'
// - Renamed export 'Z8' to 'createSlot'
// - Renamed export 'wZ' to 'ErrorBoundary'
// - Renamed export 'y1' to 'BlockViewBase'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18653.6c0138b3.js
         * chunkId: 18653
         * moduleId: 211843
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  function s(t, e) {
    return (s = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  }
  function c(t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function n() {
      this.constructor = t;
    }
    s(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function u() {
    return (u = Object.assign || function (t) {
      var e;
      var n = 1;
      var r = arguments.length;
      for (; n < r; n++) {
        for (var o in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  function a(t, e) {
    var n = {};
    for (var r in t) {
      if (Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0) {
        n[r] = t[r];
      }
    }
    if (t != null && typeof Object.getOwnPropertySymbols == "function") {
      var o = 0;
      var r = Object.getOwnPropertySymbols(t);
      for (; o < r.length; o++) {
        if (e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o])) {
          n[r[o]] = t[r[o]];
        }
      }
    }
    return n;
  }
  function l(t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var n = e && t[e];
    var r = 0;
    if (n) {
      return n.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function p(t, e) {
    var n = typeof Symbol == "function" && t[Symbol.iterator];
    if (!n) {
      return t;
    }
    var r;
    var o;
    var i = n.call(t);
    var s = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = i.next()).done) {
        s.push(r.value);
      }
    } catch (t) {
      o = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (n = i.return)) {
          n.call(i);
        }
      } finally {
        if (o) {
          throw o.error;
        }
      }
    }
    return s;
  }
  function h(t) {
    t.effect(t.effectProps);
    return null;
  }
  function f(t) {
    var e = t.slotType;
    var n = t.slotName;
    var i = t.slotOptions;
    var s = t.slotCacheKey;
    var c = a(t, ["slotType", "slotName", "slotOptions", "slotCacheKey"]);
    var u = c.viewContext;
    var l = c.editorAPI.viewService;
    var f = u.extensionCache;
    var d = reactCoreLibraryReexport.useRef();
    if (!d.current) {
      var v = f.getSlot(s, e) || f.cacheSlot(s, e, n, i);
      d.current = v;
    }
    var y = d.current.component;
    var m = p(reactCoreLibraryReexport.useState(!!y), 2);
    var b = m[0];
    var _ = m[1];
    reactCoreLibraryReexport.useEffect(function () {
      if (!b) {
        l.loadViewExtension(n).then(function () {
          d.current = f.updateSlot(s, e, n, i);
          _(true);
        }).catch(function (t) {});
      }
    }, []);
    if (y) {
      if (e === docxEditorCore.SlotType.EFFECT) {
        if (y) {
          return reactCoreLibraryReexport.createElement(h, {
            effect: y,
            effectProps: c
          });
        } else {
          return null;
        }
      } else if (y) {
        return reactCoreLibraryReexport.createElement(y, c);
      } else {
        return null;
      }
    } else {
      return c.children || null;
    }
  }
  var d = reactCoreLibraryReexport.createContext(null);
  var v = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.state = {
        error: null
      };
      return e;
    }
    c(e, t);
    e.getDerivedStateFromError = function (t) {
      return {
        error: t
      };
    };
    e.prototype.render = function () {
      var t = this.state.error;
      if (t) {
        return reactCoreLibraryReexport.createElement("span", null, t.message);
      } else {
        return this.props.children;
      }
    };
    return e;
  }(reactCoreLibraryReexport.Component);
  var y = function (t) {
    function e(e) {
      var n = t.call(this, e) || this;
      n.state = {
        renderVersion: 0
      };
      n.view = null;
      n.prevMountKey = 0;
      n.mountKey = 1;
      n.config = null;
      n.callbacks = null;
      n.addBlockDataUpdateListener = function (t) {
        n.callbacks ||= [];
        n.callbacks.push(t);
        return function () {
          var e;
          var r;
          var o = n.callbacks;
          if (o) {
            var i = [];
            try {
              var s = l(o);
              var c = s.next();
              for (; !c.done; c = s.next()) {
                var u = c.value;
                if (u !== t) {
                  i.push(u);
                }
              }
            } catch (t) {
              e = {
                error: t
              };
            } finally {
              try {
                if (c && !c.done && (r = s.return)) {
                  r.call(s);
                }
              } finally {
                if (e) {
                  throw e.error;
                }
              }
            }
            n.callbacks = i.length ? i : null;
          }
        };
      };
      n.renderer.onElementCreate(n);
      return n;
    }
    c(e, t);
    Object.defineProperty(e.prototype, "struct", {
      get: function () {
        return this.props.struct;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "editorAPI", {
      get: function () {
        return this.struct.editorAPI;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "injectionService", {
      get: function () {
        return this.editorAPI.injectionService;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "renderer", {
      get: function () {
        return this.props.renderer;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "id", {
      get: function () {
        return this.struct.id;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "extensionCache", {
      get: function () {
        return this.renderer.extensionCache;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.requestRender = function (t) {
      if (t) {
        ++this.mountKey;
      }
      if (this.struct.active) {
        this.setState(function (t) {
          return {
            renderVersion: t.renderVersion + 1
          };
        });
      }
    };
    e.prototype.componentWillUnmount = function () {
      this.renderer.onElementDestroy(this);
      this.disposeInjector();
      this.callbacks = null;
    };
    e.prototype.shouldComponentUpdate = function (t, e) {
      return this.state.renderVersion !== e.renderVersion;
    };
    e.prototype.render = function () {
      var t = this.struct;
      var e = this.config;
      var n = this.renderer.getBlockRenderConfig(t.type, t.isRoot());
      if (e && e.view !== n.view) {
        ++this.mountKey;
      }
      this.config = n;
      var r = this.prevMountKey !== this.mountKey;
      if (r) {
        this.prevMountKey = this.mountKey;
        this.disposeInjector();
        this.injector = this.injectionService.createBlockViewInjector(this.struct);
      }
      return this.renderImpl(n, r);
    };
    e.prototype.onBlockUpdate = function (t, e) {
      var n;
      var r;
      var o = this.callbacks;
      var i = t.ops;
      var s = this.struct.record;
      var c = e && e.options;
      if (o && i && c) {
        var u = {
          record: s,
          ops: i,
          options: c
        };
        try {
          var a = l(o);
          var p = a.next();
          for (; !p.done; p = a.next()) {
            var h = p.value;
            try {
              h(u);
            } catch (t) {}
          }
        } catch (t) {
          n = {
            error: t
          };
        } finally {
          try {
            if (p && !p.done && (r = a.return)) {
              r.call(a);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
      }
    };
    e.prototype.blockViewDidMount = function (t, e) {
      if (this.view) {
        this.blockViewWillUnmount(this.view);
      }
      this.view = t;
      this.renderer.onBlockViewMount(t.id, t, e);
    };
    e.prototype.blockViewDidUpdate = function (t, e, n) {
      if (this.view === t) {
        this.renderer.onBlockViewUpdate(t.id, t, e, n);
      }
    };
    e.prototype.blockViewWillUnmount = function (t) {
      var e = this.view;
      if (e === t) {
        this.view = null;
        this.renderer.onBlockViewUnmount(t.id, t, e && e.props);
      }
    };
    e.prototype.renderImpl = function (t, e) {
      var n = this.props.ErrorBoundary;
      var r = this.getBlockProps(t);
      return reactCoreLibraryReexport.createElement(n === undefined ? v : n, Object.assign({
        key: this.mountKey
      }, r), reactCoreLibraryReexport.createElement(d.Provider, {
        value: {
          injector: r.injector,
          renderProps: r
        }
      }, this.renderSlots(t.beforeSlots, r), this.renderSlots(t.effects, r), reactCoreLibraryReexport.createElement(t.view, r), this.renderSlots(t.afterSlots, r)));
    };
    e.prototype.disposeInjector = function () {
      if (this.injector) {
        this.injectionService.disposeBlockViewInjector(this.injector);
        this.injector = undefined;
      }
    };
    e.prototype.getBlockProps = function (t) {
      var e = this.props;
      var n = e.struct;
      return Object.assign({}, e.renderProps, {
        key: this.mountKey,
        type: t.type,
        struct: n,
        editorAPI: n.editorAPI,
        injector: this.injector || this.injectionService.rootInjector,
        viewContext: this,
        renderVersion: this.state.renderVersion,
        onBlockDataUpdate: this.addBlockDataUpdateListener
      });
    };
    e.prototype.renderSlots = function (t, e) {
      var n = this;
      if (t.length) {
        return t.map(function (t) {
          var i = n.mountKey * 1000000 + t.id;
          if (t.async) {
            return reactCoreLibraryReexport.createElement(f, Object.assign({}, e, {
              key: i,
              slotName: t.name,
              slotOptions: t.options,
              slotType: t.type,
              slotCacheKey: t.cacheKey
            }));
          } else if (t.type === docxEditorCore.SlotType.EFFECT) {
            return reactCoreLibraryReexport.createElement(h, {
              key: i,
              effect: t.component,
              effectProps: e
            });
          } else {
            return reactCoreLibraryReexport.createElement(t.component, Object.assign({}, e, {
              key: i
            }));
          }
        });
      } else {
        return null;
      }
    };
    return e;
  }(reactCoreLibraryReexport.Component);
  var m = function (t) {
    function e(e) {
      var n = t.call(this, e) || this;
      n.isMoved = false;
      n.render = n.renderWithInjection;
      return n;
    }
    c(e, t);
    Object.defineProperty(e.prototype, "type", {
      get: function () {
        return this.props.type;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "editorAPI", {
      get: function () {
        return this.struct.editorAPI;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "id", {
      get: function () {
        return this.struct.id;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isRoot", {
      get: function () {
        return this.struct.isRoot();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "struct", {
      get: function () {
        return this.props.struct;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.getService = function (t, e) {
      return this.editorAPI.getService(t, e);
    };
    e.prototype.onServiceReady = function (t, e) {
      return this.editorAPI.onServiceReady(t, e);
    };
    e.prototype.blockViewDidMount = function () {};
    e.prototype.blockViewDidMove = function () {};
    e.prototype.blockViewDidUpdate = function (t, e) {};
    e.prototype.blockViewWillUnmount = function () {};
    e.prototype.componentDidMount = function () {
      this.blockViewDidMount();
      this.props.viewContext.blockViewDidMount(this, this.props);
    };
    e.prototype.componentDidUpdate = function (t, e) {
      this.blockViewDidUpdate(t, e);
      var n = this.isMoved;
      if (n) {
        this.isMoved = false;
        this.blockViewDidMove();
      }
      this.props.viewContext.blockViewDidUpdate(this, this.props, n);
    };
    e.prototype.componentWillUnmount = function () {
      try {
        this.blockViewWillUnmount();
      } catch (t) {} finally {
        this.props.viewContext.blockViewWillUnmount(this);
      }
    };
    e.prototype.renderWithInjection = function () {
      this.props.injector.resolveInstanceInjectableProps(this);
      var t = Reflect.getPrototypeOf(this).render;
      this.render = t;
      return this.render();
    };
    return e;
  }(reactCoreLibraryReexport.Component);
  function b(t) {
    var e = t.name;
    var n = a(t, ["name"]);
    var i = (reactCoreLibraryReexport.useContext(d) || {}).renderProps;
    if (i) {
      return reactCoreLibraryReexport.createElement(f, u({
        slotType: docxEditorCore.SlotType.NAMED_SLOT,
        slotCacheKey: e,
        slotName: e,
        slotOptions: null
      }, i, n));
    } else {
      return null;
    }
  }
  function _(t) {
    return function (e) {
      return reactCoreLibraryReexport.createElement(b, u({
        name: t
      }, e || {}));
    };
  }
  function g(t, e) {
    var n = (reactCoreLibraryReexport.useContext(d) || {}).injector;
    if (!n) {
      throw Error("No available injector found");
    }
    return n.get(t, e);
  }
  function E(t) {
    var e = t.delegate;
    var n = p(reactCoreLibraryReexport.useState(0), 2)[1];
    reactCoreLibraryReexport.useLayoutEffect(function () {
      e.setRequestRenderRoot(function () {
        n(function (t) {
          return t + 1;
        });
      });
      e.onMount();
    }, [e]);
    return e.renderRootBlock();
  }
  var w = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.requestRenderRoot = docxEditorCore.debounce(function () {
        ++e.rootVersion;
        if (e.isMounted()) {
          e.requestRenderRootImpl();
        }
      });
      e.rootVersion = 0;
      e.elements = new Map();
      e.requestRenderRootImpl = emptyExportFunction.emptyFunction;
      e.mounted = false;
      return e;
    }
    c(e, t);
    e.prototype.destroy = function () {
      t.prototype.destroy.call(this);
      this.elements.clear();
      this.requestRenderRoot.cancel();
    };
    e.prototype.getAllBlockViews = function () {
      return Array.from(this.elements.values()).map(function (t) {
        return t.view;
      }).filter(function (t) {
        return t && t.struct.active;
      });
    };
    e.prototype.getBlockViewByBlockId = function (t) {
      var e = this.elements.get(t);
      if (e) {
        var n = e.view;
        if (n && n.struct.active) {
          return n;
        }
      }
    };
    e.prototype.getBlockViewType = function (t) {
      return this.getBlockViewByBlockId(t)?.type;
    };
    e.prototype.isMounted = function () {
      return this.mounted;
    };
    e.prototype.requestBlockViewRender = function (t, e) {
      this.requestBlockElementRender(t, e && e.remount);
    };
    e.prototype.requestAllBlockViewsRender = function () {
      var t = this;
      this.startTransaction(function () {
        t.elements.forEach(function (t) {
          return t.requestRender();
        });
      });
    };
    e.prototype.renderRoot = function () {
      return reactCoreLibraryReexport.createElement(E, {
        delegate: this
      });
    };
    e.prototype.render = function (t, e) {
      var n = this.structService.getBlockStructByBlockId(t);
      if (n) {
        return this.createRenderElement({
          key: n.id,
          struct: n,
          renderProps: this.getBlockProps(n, e),
          renderer: this,
          ErrorBoundary: this.options.ErrorBoundary
        });
      } else {
        return null;
      }
    };
    e.prototype.renderChildren = function (t, e) {
      var n = this.structService.getBlockStructByBlockId(t);
      if (n) {
        return this.createRenderChildrenElement({
          struct: n,
          renderProps: e
        });
      } else {
        return null;
      }
    };
    e.prototype.renderRootBlock = function () {
      return this.render(this.structService.root.id);
    };
    e.prototype.setRequestRenderRoot = function (t) {
      this.requestRenderRootImpl = t;
    };
    e.prototype.onElementCreate = function (t) {
      this.elements.set(t.id, t);
    };
    e.prototype.onElementDestroy = function (t) {
      if (this.elements.get(t.id) === t) {
        this.elements.delete(t.id);
      }
    };
    e.prototype.requestBlockElementRender = function (t, e) {
      var n = this.elements.get(t);
      if (n) {
        n.requestRender(e);
      }
    };
    e.prototype.onMutation = function (t) {
      var e = this;
      this.startTransaction(function () {
        e.handleMutations(t.mutations, t);
      });
    };
    e.prototype.onInlineMutation = function (t) {
      var e = this;
      this.startTransaction(function () {
        var n;
        var o;
        try {
          var i = l(t);
          var s = i.next();
          for (; !s.done; s = i.next()) {
            var c = s.value;
            if (c.action === docxEditorCore.MutationAction.UPDATE) {
              e.handleBlockUpdate(c, undefined);
            }
          }
        } catch (t) {
          n = {
            error: t
          };
        } finally {
          try {
            if (s && !s.done && (o = i.return)) {
              o.call(i);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
      });
    };
    e.prototype.handleMutations = function (t, e) {
      var n;
      var o;
      var i;
      var s;
      try {
        var c = l(t.removed);
        var u = c.next();
        for (; !u.done; u = c.next()) {
          var a = u.value;
          if (docxEditorCore.isMoveMutation(a)) {
            this.handleBlockMove(a);
          }
        }
      } catch (t) {
        n = {
          error: t
        };
      } finally {
        try {
          if (u && !u.done && (o = c.return)) {
            o.call(c);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      try {
        var p = l(t.updated);
        var h = p.next();
        for (; !h.done; h = p.next()) {
          var a = h.value;
          this.handleBlockUpdate(a, e);
        }
      } catch (t) {
        i = {
          error: t
        };
      } finally {
        try {
          if (h && !h.done && (s = p.return)) {
            s.call(p);
          }
        } finally {
          if (i) {
            throw i.error;
          }
        }
      }
    };
    e.prototype.handleBlockMove = function (t) {
      var e = t.block;
      var n = this.getBlockViewByBlockId(e.id);
      if (n) {
        n.isMoved = true;
        this.requestBlockElementRender(e.id);
      }
      return n;
    };
    e.prototype.handleBlockUpdate = function (t, e) {
      var n = t.block;
      var r = t.originalType;
      var o = this.elements.get(n.id);
      if (o) {
        o.onBlockUpdate(t, e);
        this.requestBlockElementRender(n.id, !!r);
      }
    };
    e.prototype.onMountImpl = function () {
      if (this.mounted) {
        throw Error("[renderer] Failed to mount again");
      }
      this.mounted = true;
      t.prototype.onMountImpl.call(this);
    };
    e.prototype.onUnmountImpl = function () {
      this.mounted = false;
    };
    e.prototype.getBlockProps = function (t, e) {
      if (e) {
        return Object.assign({}, e);
      } else {
        return {};
      }
    };
    e.prototype.createRenderElement = function (t) {
      return reactCoreLibraryReexport.createElement(y, t);
    };
    e.prototype.createRenderChildrenElement = function (t) {
      var e = this;
      var n = t.struct;
      var r = t.renderProps;
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, n.children.map(function (t) {
        return e.render(t.id, r);
      }));
    };
    return e;
  }(docxEditorCore.Renderer);
  require.d(exports, {
    useInjector: function () {
      return g;
    },
    BlockRenderer: function () {
      return w;
    },
    createSlot: function () {
      return _;
    },
    ErrorBoundary: function () {
      return y;
    },
    BlockViewBase: function () {
      return m;
    }
  });
}