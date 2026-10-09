// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Am' to 'toastManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 117371
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var a;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var assertThisInitialized = require("assert-this-initialized") /*id: 876127*/;
  var setPrototypeInheritance = require("set-prototype-inheritance") /*id: 805158*/;
  var wrapNativeSuperHelper = require("wrap-native-super-helper") /*id: 694678*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var localeContextProvider = require("locale-context-provider") /*id: 577211*/;
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var udTypographyHeadlineStyle = require("ud-typography-headline-style") /*id: 109181*/;
  var noticeComponent_1 = require("notice-component_1") /*id: 854613*/;
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var cssTransitionComponent = require("css-transition-component") /*id: 160074*/;
  var reactContextSelector = require("react-context-selector") /*id: 65860*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var enUsLocaleContext = require("en-us-locale-context") /*id: 812811*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var reactContextDefinition_4 = require("react-context-definition_4") /*id: 208719*/;
  var transitionGroupChildUtils = require("transition-group-child-utils") /*id: 661201*/;
  var G = ["component", "childFactory"];
  function I(e, t) {
    return e && e[`.\$${t}`];
  }
  var F = {
    component: "div",
    childFactory: function (e) {
      return e;
    }
  };
  var D = function (e) {
    setPrototypeInheritance.setInheritance(r, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(r);
    function r(e) {
      var n;
      classCallCheckUtil.classCallCheck(this, r);
      n = t.call(this, e);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(n), "mounted", false);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(n), "handleExited", function (e, t) {
        var r = n.props.children;
        var o = transitionGroupChildUtils.indexChildrenByKey(r);
        if (!e.key || !(e.key in o)) {
          if (e.props.onExited) {
            e.props.onExited(t);
          }
          if (n.mounted) {
            n.setState(function (t) {
              var r = objectPropertyAssign.assignObject({}, t.children);
              if (e.key) {
                delete r[e.key];
              }
              return {
                children: r
              };
            });
          }
        }
      });
      n.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: n.handleExited,
        firstRender: true,
        childrenSort: [],
        children: {}
      };
      return n;
    }
    classPropertyUtil.defineClassProps(r, [{
      key: "componentDidMount",
      value: function () {
        this.mounted = true;
        this.setState({
          contextValue: {
            isMounting: false
          }
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        this.mounted = false;
      }
    }, {
      key: "render",
      value: function () {
        var e = this.props;
        var t = e.component;
        var r = t === undefined ? F.component : t;
        var n = e.childFactory;
        var o = n === undefined ? F.childFactory : n;
        var a = objectOmitHelper_1.omitWithSymbols(e, G);
        var i = this.state;
        var c = i.contextValue;
        var s = i.childrenSort;
        var l = i.children;
        var u = s.map(function (e) {
          return o(I(l, e));
        });
        delete a.appear;
        delete a.enter;
        delete a.exit;
        if (r === null) {
          return reactCoreLibraryReexport.createElement(reactContextDefinition_4.reactContext.Provider, {
            value: c
          }, u);
        } else {
          return reactCoreLibraryReexport.createElement(reactContextDefinition_4.reactContext.Provider, {
            value: c
          }, reactCoreLibraryReexport.createElement(r, a, u));
        }
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var r = t.children;
        var n = t.handleExited;
        var o = t.firstRender;
        return {
          childrenSort: function (e, t, r) {
            var n = r instanceof Array ? r : [r];
            var o = (e || []).filter(function (e) {
              var r;
              return (r = I(t, e)) && r.props && r.props.in;
            });
            var a = o[0];
            var i = !!n.find(function (e) {
              return !!reactCoreLibraryReexport.isValidElement(e) && e.key !== a;
            });
            var c = 0;
            for (; c < n.length; c++) {
              if (function () {
                var e = n[c];
                if (e && reactCoreLibraryReexport.isValidElement(e) && e.key) {
                  if (o.find(function (t) {
                    return t === e.key;
                  })) {
                    if (a === e.key) {
                      i = true;
                    }
                    return "continue";
                  } else {
                    if (i) {
                      o.push(e.key);
                    } else {
                      o.unshift(e.key);
                    }
                    return;
                  }
                } else {
                  return "continue";
                }
              }() === "continue") {
                continue;
              }
            }
            return o;
          }(t.childrenSort, r, e.children),
          children: o ? transitionGroupChildUtils.cloneTransitionItems(e, n) : transitionGroupChildUtils.mergeTransitionMaps(e, r, n),
          firstRender: false
        };
      }
    }]);
    return r;
  }(reactCoreLibraryReexport.Component);
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var P = 0;
  function H(e) {
    var t = reactContextUtilsHooks.useRootPrefixCls();
    var r = reactContextSelector.useContextSelector(enUsLocaleContext.EnUsLocaleContext, function (e) {
      return e.toast;
    });
    return e.children({
      managerGlobalRootPrefixCls: t,
      managerGlobalToast: r
    });
  }
  function M(e) {
    return e === null || e === 0;
  }
  function j() {
    return {
      topRight: [],
      topLeft: [],
      bottomRight: [],
      bottomLeft: [],
      top: []
    };
  }
  function W(e) {
    var t = e.prefixCls;
    var r = e.duration;
    var n = e.startTimer;
    var o = e.stopTimer;
    var a = e.children;
    var i = reactCoreLibraryReexport.useRef(null);
    var c = reactRefEffectUtils.useEventCallback(n);
    reactCoreLibraryReexport.useEffect(function () {
      if (i.current && !M(r)) {
        c(r);
      }
    }, [r, c]);
    return reactCoreLibraryReexport.createElement("div", {
      ref: i,
      className: `${t}-item`,
      onMouseEnter: o,
      onMouseLeave: function () {
        return c();
      }
    }, a);
  }
  var U = function (e) {
    setPrototypeInheritance.setInheritance(r, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(r);
    function r(e) {
      var n;
      classCallCheckUtil.classCallCheck(this, r);
      n = t.call(this, e);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(n), "timers", {});
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(n), "containerRef", reactCoreLibraryReexport.createRef());
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(n), "classPrefix", "");
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(n), "startTimer", function (e, t) {
        if (!M(t)) {
          var r = n.timers[e];
          if (r) {
            window.clearTimeout(r);
          }
          n.timers[e] = window.setTimeout(function () {
            return n.remove(e);
          }, t ?? 3000);
          return r;
        }
      });
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(n), "stopTimer", function (e) {
        var t = n.timers[e];
        if (t) {
          window.clearTimeout(t);
        }
        delete n.timers[e];
      });
      n.state = {
        destroied: false,
        messages: j()
      };
      return n;
    }
    classPropertyUtil.defineClassProps(r, [{
      key: "config",
      get: function () {
        return Object.assign({}, r.config, this.props);
      }
    }, {
      key: "getMessageConfig",
      value: function (e, t, r) {
        var n;
        var o = e.key || (P += 1, `ud-msg-manager-${P}`);
        var a = e.placement || r;
        var i = this.config;
        var c = i.transitionProps;
        var s = i.duration;
        var l = this.state.messages[a][t];
        return {
          key: o,
          duration: e.duration !== undefined ? e.duration : (l == null ? undefined : l.duration) !== undefined ? l.duration : s,
          placement: r,
          transitionProps: e.transitionProps || (l == null ? undefined : l.transitionProps) || c,
          onClose: e.onClose || (l == null ? undefined : l.onClose),
          renderMessage: e.renderMessage || (l == null ? undefined : l.renderMessage)
        };
      }
    }, {
      key: "updateTimers",
      value: function (e) {
        var t = this;
        var r = this.config.maxCount;
        if (e) {
          e.map(function (e, n) {
            if (r) {
              if (r > n) {
                if (!t.timers[e.key]) {
                  t.startTimer(e.key, e.duration);
                }
              } else {
                t.stopTimer(e.key);
              }
            } else if (!t.timers[e.key]) {
              t.startTimer(e.key, e.duration);
            }
            return null;
          });
        }
      }
    }, {
      key: "add",
      value: function (e) {
        var t = this;
        var r = this.state.messages;
        var n = this.config;
        var o = n.placement;
        var a = n.maxCount;
        var i = e.placement || (o === undefined ? "topRight" : o);
        var c = -1;
        if (e.key) {
          c = r[i].findIndex(function (t) {
            return t.key === e.key;
          });
        }
        var s = this.getMessageConfig(e, c, i);
        var l = s.key;
        var u = r[i].concat();
        if (c > -1) {
          this.stopTimer(s.key);
          u[c] = s;
        } else {
          u.push(s);
          if (a && u.length > a) {
            u.shift();
          }
        }
        r[i] = u;
        this.setState({
          messages: r
        }, function () {
          return t.updateTimers(u);
        });
        return l;
      }
    }, {
      key: "remove",
      value: function (e) {
        var t = this;
        var r = this.state.messages;
        var n = null;
        var o = j();
        var a = Object.keys(r);
        var i = 0;
        for (; i < a.length; i++) {
          var c = a[i];
          var s = r[c];
          var l = s == null ? undefined : s.find(function (t) {
            return t.key === e;
          });
          if (l) {
            n = l;
            o[c] = s.filter(function (t) {
              return t.key !== e;
            });
          } else {
            o[c] = s;
          }
        }
        if (n) {
          var u = n.placement;
          this.stopTimer(e);
          this.setState({
            messages: o
          }, function () {
            return u && t.updateTimers(o[u]);
          });
        }
      }
    }, {
      key: "destroy",
      value: function () {
        var e = this;
        Object.keys(this.timers).forEach(function (t) {
          return e.stopTimer(t);
        });
        this.setState({
          messages: j(),
          destroied: true
        });
      }
    }, {
      key: "handleClose",
      value: function (e) {
        if (e.key) {
          this.remove(e.key);
        }
      }
    }, {
      key: "renderMessage",
      value: function (e, t) {
        var r = this;
        var n = e.key;
        var o = e.duration;
        var a = e.renderMessage;
        var c = e.onClose;
        var s = e.transitionProps;
        var l = this.config;
        var u = l.transitionProps;
        var d = l.className;
        var f = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({
          timeout: 300
        }, u), s);
        function b(e) {
          return r.startTimer(n, e || o);
        }
        function p() {
          return r.stopTimer(n);
        }
        return reactCoreLibraryReexport.createElement(cssTransitionComponent.CssTransition, objectAssignUtil.objectAssign({}, f, {
          key: function (e) {
            if (typeof e != "string") {
              return e;
            }
            var t = new Uint16Array(e.length);
            var r = 0;
            for (; r < t.length; r++) {
              t[r] = e.charCodeAt(r);
            }
            return btoa(String.fromCharCode.apply(String, arrayIterableSliceUtil.sliceArrayIterable(new Uint8Array(t.buffer)))).replace(/=/g, "-");
          }(n),
          onEnter: function (e) {
            e.style.height = "";
          },
          onExit: function (e) {
            e.style.height = `${e.scrollHeight}px`;
          },
          onExiting: function (e) {
            e.style.height = "0";
          },
          onExited: function () {
            if (c) {
              c();
            }
          }
        }), function (n) {
          return reactCoreLibraryReexport.createElement(W, {
            prefixCls: r.classPrefix,
            stopTimer: p,
            startTimer: b,
            duration: o
          }, a({
            close: function () {
              return r.handleClose(e);
            },
            transitionStatus: n,
            startTimer: b,
            stopTimer: p,
            rootPrefixCls: t,
            toastConfigCls: d
          }));
        });
      }
    }, {
      key: "renderManager",
      value: function (e) {
        var t = this;
        var r = this.state.messages[e];
        var n = this.config;
        var o = n.className;
        var a = n.style;
        var i = n.top;
        var c = n.bottom;
        var s = n.prefixCls;
        var l = n.getContainer;
        var u = l == null ? undefined : l();
        var d = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, a), {}, {
          top: i,
          bottom: c
        });
        return reactCoreLibraryReexport.createElement(H, {
          key: e
        }, function (n) {
          var a = n.managerGlobalToast;
          var i = n.managerGlobalRootPrefixCls;
          t.classPrefix ||= reactContextUtilsHooks.useComponentClassBuilder(i, "msg-manager", s)();
          var c = conditionalClassnames.default(o, t.classPrefix, `${t.classPrefix}--${e}`, objectPropertySetter.setObjectProperty({}, `${t.classPrefix}--sticky`, !u));
          return reactCoreLibraryReexport.createElement("div", {
            ref: t.containerRef,
            className: c,
            style: `${e}` === "top" ? throttledDeepCloneUtil.throttledDeepClone({
              top: a == null ? undefined : a.top
            }, d) : d
          }, reactCoreLibraryReexport.createElement(D, null, r.map(function (e) {
            return t.renderMessage(e, i);
          })));
        });
      }
    }, {
      key: "render",
      value: function () {
        var e = this;
        var t = this.state.messages;
        var r = this.config.getContainer;
        var n = r == null ? undefined : r();
        var o = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, Object.keys(t === undefined ? [] : t).map(function (t) {
          return e.renderManager(t);
        }));
        if (n) {
          return reactDomEntryWrapper.createPortal(o, n);
        } else {
          return o;
        }
      }
    }]);
    return r;
  }(reactCoreLibraryReexport.Component);
  objectPropertySetter.setObjectProperty(U, "config", {});
  require("module-no-op") /*id: 116324*/;
  require("no-operation-module") /*id: 556570*/;
  require("no-operation-module-wrapper") /*id: 438358*/;
  var Z = ["content", "key", "duration", "onClose", "className", "type", "showCloseIcon", "newStyle"];
  var X = ["className", "prefixCls", "duration", "transitionProps", "maxCount", "getContainer", "top"];
  var K = function (e) {
    setPrototypeInheritance.setInheritance(r, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(r);
    function r() {
      var e;
      classCallCheckUtil.classCallCheck(this, r);
      var n = arguments.length;
      var o = Array(n);
      var a = 0;
      for (; a < n; a++) {
        o[a] = arguments[a];
      }
      e = t.call.apply(t, [this].concat(o));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "managerRef", reactCoreLibraryReexport.createRef());
      return e;
    }
    classPropertyUtil.defineClassProps(r, [{
      key: "_config",
      get: function () {
        return Object.assign({}, r.globalConfig, this.props);
      }
    }, {
      key: "open",
      value: function (e) {
        var t = this;
        return new Promise(function (r) {
          var n;
          var o = e.onClose;
          e.onClose = function () {
            if (o) {
              o();
            }
            r(undefined);
          };
          if ((n = t.managerRef.current) !== null && n !== undefined) {
            n.add(t._getManagerConfig(e));
          }
        });
      }
    }, {
      key: "info",
      value: function (e, t, r) {
        return this._open("info", e, t, r);
      }
    }, {
      key: "success",
      value: function (e, t, r) {
        return this._open("success", e, t, r);
      }
    }, {
      key: "warning",
      value: function (e, t, r) {
        return this._open("warning", e, t, r);
      }
    }, {
      key: "warn",
      value: function (e, t, r) {
        return this.warning(e, t, r);
      }
    }, {
      key: "error",
      value: function (e, t, r) {
        return this._open("error", e, t, r);
      }
    }, {
      key: "loading",
      value: function (e, t, r) {
        return this._open("loading", e, t, r);
      }
    }, {
      key: "config",
      value: function (e) {
        r.globalConfig = Object.assign(r.globalConfig, e);
        this.forceUpdate();
      }
    }, {
      key: "destroy",
      value: function (e) {
        var t;
        var r;
        if (e) {
          if ((t = this.managerRef.current) !== null && t !== undefined) {
            t.remove(e);
          }
        } else if ((r = this.managerRef.current) !== null && r !== undefined) {
          r.destroy();
        }
      }
    }, {
      key: "render",
      value: function () {
        return reactCoreLibraryReexport.createElement(U, objectAssignUtil.objectAssign({
          ref: this.managerRef,
          placement: "top",
          transitionProps: {
            timeout: 300,
            classNames: "toast--animation"
          },
          duration: 3000
        }, throttledPathFilterStringify.throttledPathStr(this._config, X)));
      }
    }, {
      key: "_getManagerConfig",
      value: function (e) {
        var t;
        var r;
        var n;
        var o;
        var a;
        var c;
        var s;
        var l;
        var u;
        var d;
        var f;
        var b;
        var p;
        var h = Object.assign({}, throttledOmitPathStringify.omitPathStringify(this._config, X));
        r = (t = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, h), e)).content;
        n = t.key;
        o = t.duration;
        a = t.onClose;
        c = t.className;
        s = t.type;
        l = t.showCloseIcon;
        d = (u = t.newStyle) === undefined || u;
        f = objectOmitHelper_1.omitWithSymbols(t, Z);
        b = l !== undefined ? l : M(o);
        return {
          key: n,
          duration: (p = f.action, o !== undefined ? o : p ? 6000 : undefined),
          renderMessage: function (e) {
            var t = e.close;
            var n = e.rootPrefixCls;
            var o = e.toastConfigCls;
            return reactCoreLibraryReexport.createElement(noticeComponent_1.NoticeComponent, objectAssignUtil.objectAssign({}, f, {
              closable: b,
              visible: true,
              className: conditionalClassnames.default(`${n}__toast`, c, o || ""),
              theme: d ? "outlined" : "plain",
              message: reactCoreLibraryReexport.createElement("div", {
                className: composeClassNamesUtil.composeClassNames(udTypographyHeadlineStyle.udTypographyHeadline)
              }, r),
              type: s,
              onClose: t,
              banner: false
            }));
          },
          onClose: a
        };
      }
    }, {
      key: "_open",
      value: function (e, t, r, n) {
        if (t && typeofHelper.getType(t) === "object" && "content" in t) {
          return this.open(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, t), {}, {
            type: e
          }));
        }
        var o = typeof r == "function" ? r() : r;
        return this.open({
          type: e,
          content: t,
          duration: o,
          onClose: n
        });
      }
    }]);
    return r;
  }(reactCoreLibraryReexport.PureComponent);
  function z() {
    var e = document.createElement("div");
    document.body.appendChild(e);
    return e;
  }
  function Y(e) {
    if (e) {
      o = e;
    }
  }
  objectPropertySetter.setObjectProperty(K, "globalConfig", {});
  var V = function (e) {
    setPrototypeInheritance.setInheritance(r, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(r);
    function r() {
      var e;
      classCallCheckUtil.classCallCheck(this, r);
      var n = arguments.length;
      var o = Array(n);
      var a = 0;
      for (; a < n; a++) {
        o[a] = arguments[a];
      }
      e = t.call.apply(t, [this].concat(o));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "div", undefined);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "isDefaultContainer", true);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "getContainer", function () {
        var t = e.props.getContainer;
        if (!e.div) {
          var r = t == null ? undefined : t();
          e.div = r || z();
          if (r) {
            e.isDefaultContainer = false;
          }
        }
        return e.div;
      });
      return e;
    }
    classPropertyUtil.defineClassProps(r, [{
      key: "componentWillUnmount",
      value: function () {
        o = undefined;
        if (this.isDefaultContainer && this.div) {
          this.div.remove();
          this.div = undefined;
        }
      }
    }, {
      key: "render",
      value: function () {
        return reactCoreLibraryReexport.createElement(K, objectAssignUtil.objectAssign({}, this.props, {
          ref: Y,
          getContainer: this.getContainer
        }));
      }
    }]);
    return r;
  }(reactCoreLibraryReexport.Component);
  n = function () {
    if (o) {
      return Promise.resolve(o);
    } else {
      return a ||= new Promise(function (e) {
        var t = z();
        reactDomEntryWrapper.render(reactCoreLibraryReexport.createElement(localeContextProvider.localeProvider, null, reactCoreLibraryReexport.createElement(V, {
          ref: function () {
            if (o) {
              a = undefined;
              e(o);
            }
          },
          getContainer: function () {
            return t;
          }
        })), t);
      });
    }
  };
  var q = {
    open: function (e) {
      return n().then(function (t) {
        return t.open(e) || "";
      });
    },
    info: function (e, t, r) {
      return n().then(function (n) {
        return n.info(e, t, r);
      });
    },
    success: function (e, t, r) {
      return n().then(function (n) {
        return n.success(e, t, r);
      });
    },
    warning: function (e, t, r) {
      return n().then(function (n) {
        return n.warning(e, t, r);
      });
    },
    warn: function (e, t, r) {
      return n().then(function (n) {
        return n.warn(e, t, r);
      });
    },
    error: function (e, t, r) {
      return n().then(function (n) {
        return n.error(e, t, r);
      });
    },
    loading: function (e, t, r) {
      return n().then(function (n) {
        return n.loading(e, t, r);
      });
    },
    config: function (e) {
      K.globalConfig = e;
    },
    destroy: function (e) {
      n().then(function (t) {
        return t.destroy(e);
      });
    }
  };
  require.d(exports, {
    toastManager: function () {
      return q;
    }
  });
}