// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'ToastManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 116233
         */
module.exports = function (module, exports, require) {
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var assertThisInitialized = require("assert-this-initialized") /*id: 876127*/;
  var setPrototypeInheritance = require("set-prototype-inheritance") /*id: 805158*/;
  var wrapNativeSuperHelper = require("wrap-native-super-helper") /*id: 694678*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var composeClassNamesUtil = require("compose-class-names-util") /*id: 606502*/;
  var composeTypographyHeadlineClass = require("compose-typography-headline-class") /*id: 932304*/;
  var noticeComponent = require("notice-component") /*id: 271060*/;
  var arrayIterableSliceUtil = require("array-iterable-slice-util") /*id: 802480*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var cssTransitionComponent = require("css-transition-component") /*id: 160074*/;
  var reactContextSelector = require("react-context-selector") /*id: 65860*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var uiGlobalConfigContext = require("ui-global-config-context") /*id: 698735*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var reactContextDefinition_4 = require("react-context-definition_4") /*id: 208719*/;
  var transitionGroupChildUtils = require("transition-group-child-utils") /*id: 661201*/;
  var C = ["component", "childFactory"];
  function N(e, n) {
    return e && e[`.\$${n}`];
  }
  var M = {
    component: "div",
    childFactory: function (e) {
      return e;
    }
  };
  var j = function (e) {
    setPrototypeInheritance.setInheritance(r, e);
    var n = wrapNativeSuperHelper.wrapNativeSuper(r);
    function r(e) {
      var i;
      classCallCheckUtil.classCallCheck(this, r);
      i = n.call(this, e);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(i), "mounted", false);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(i), "handleExited", function (e, n) {
        var r = i.props.children;
        var a = transitionGroupChildUtils.indexChildrenByKey(r);
        if (!e.key || !(e.key in a)) {
          if (e.props.onExited) {
            e.props.onExited(n);
          }
          if (i.mounted) {
            i.setState(function (n) {
              var r = objectPropertyAssign.assignObject({}, n.children);
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
      i.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: i.handleExited,
        firstRender: true,
        childrenSort: [],
        children: {}
      };
      return i;
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
        var n = e.component;
        var r = n === undefined ? M.component : n;
        var i = e.childFactory;
        var o = i === undefined ? M.childFactory : i;
        var a = objectOmitHelper_1.omitWithSymbols(e, C);
        var l = this.state;
        var s = l.contextValue;
        var c = l.childrenSort;
        var u = l.children;
        var d = c.map(function (e) {
          return o(N(u, e));
        });
        delete a.appear;
        delete a.enter;
        delete a.exit;
        if (r === null) {
          return reactCoreLibraryReexport.createElement(reactContextDefinition_4.reactContext.Provider, {
            value: s
          }, d);
        } else {
          return reactCoreLibraryReexport.createElement(reactContextDefinition_4.reactContext.Provider, {
            value: s
          }, reactCoreLibraryReexport.createElement(r, a, d));
        }
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, n) {
        var r = n.children;
        var i = n.handleExited;
        var o = n.firstRender;
        return {
          childrenSort: function (e, n, r) {
            var i = r instanceof Array ? r : [r];
            var o = (e || []).filter(function (e) {
              var r;
              return (r = N(n, e)) && r.props && r.props.in;
            });
            var a = o[0];
            var l = !!i.find(function (e) {
              return !!reactCoreLibraryReexport.isValidElement(e) && e.key !== a;
            });
            var s = 0;
            for (; s < i.length; s++) {
              if (function () {
                var e = i[s];
                if (e && reactCoreLibraryReexport.isValidElement(e) && e.key) {
                  if (o.find(function (n) {
                    return n === e.key;
                  })) {
                    if (a === e.key) {
                      l = true;
                    }
                    return "continue";
                  } else {
                    if (l) {
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
          }(n.childrenSort, r, e.children),
          children: o ? transitionGroupChildUtils.cloneTransitionItems(e, i) : transitionGroupChildUtils.mergeTransitionMaps(e, r, i),
          firstRender: false
        };
      }
    }]);
    return r;
  }(reactCoreLibraryReexport.Component);
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var W = 0;
  function O(e) {
    var n = uiConfigContextHooks.usePrefixCls();
    var r = reactContextSelector.useContextSelector(uiGlobalConfigContext.UiGlobalConfigContext, function (e) {
      return e.toast;
    });
    return e.children({
      managerGlobalRootPrefixCls: n,
      managerGlobalToast: r
    });
  }
  function F(e) {
    return e === null || e === 0;
  }
  function I() {
    return {
      topRight: [],
      topLeft: [],
      bottomRight: [],
      bottomLeft: [],
      top: []
    };
  }
  function D(e) {
    var n = e.prefixCls;
    var r = e.duration;
    var i = e.startTimer;
    var o = e.stopTimer;
    var a = e.children;
    var l = reactCoreLibraryReexport.useRef(null);
    var s = reactRefEffectUtils.useEventCallback(i);
    reactCoreLibraryReexport.useEffect(function () {
      if (l.current && !F(r)) {
        s(r);
      }
    }, [r, s]);
    return reactCoreLibraryReexport.createElement("div", {
      ref: l,
      className: `${n}-item`,
      onMouseEnter: o,
      onMouseLeave: function () {
        return s();
      }
    }, a);
  }
  var B = function (e) {
    setPrototypeInheritance.setInheritance(r, e);
    var n = wrapNativeSuperHelper.wrapNativeSuper(r);
    function r(e) {
      var i;
      classCallCheckUtil.classCallCheck(this, r);
      i = n.call(this, e);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(i), "timers", {});
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(i), "containerRef", reactCoreLibraryReexport.createRef());
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(i), "classPrefix", "");
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(i), "startTimer", function (e, n) {
        if (!F(n)) {
          var r = i.timers[e];
          if (r) {
            window.clearTimeout(r);
          }
          i.timers[e] = window.setTimeout(function () {
            return i.remove(e);
          }, n ?? 3000);
          return r;
        }
      });
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(i), "stopTimer", function (e) {
        var n = i.timers[e];
        if (n) {
          window.clearTimeout(n);
        }
        delete i.timers[e];
      });
      i.state = {
        destroied: false,
        messages: I()
      };
      return i;
    }
    classPropertyUtil.defineClassProps(r, [{
      key: "config",
      get: function () {
        return Object.assign({}, r.config, this.props);
      }
    }, {
      key: "getMessageConfig",
      value: function (e, n, r) {
        var i;
        var o = e.key || (W += 1, `ud-msg-manager-${W}`);
        var a = e.placement || r;
        var l = this.config;
        var s = l.transitionProps;
        var c = l.duration;
        var u = this.state.messages[a][n];
        return {
          key: o,
          duration: e.duration !== undefined ? e.duration : (u == null ? undefined : u.duration) !== undefined ? u.duration : c,
          placement: r,
          transitionProps: e.transitionProps || (u == null ? undefined : u.transitionProps) || s,
          onClose: e.onClose || (u == null ? undefined : u.onClose),
          renderMessage: e.renderMessage || (u == null ? undefined : u.renderMessage)
        };
      }
    }, {
      key: "updateTimers",
      value: function (e) {
        var n = this;
        var r = this.config.maxCount;
        if (e) {
          e.map(function (e, i) {
            if (r) {
              if (r > i) {
                if (!n.timers[e.key]) {
                  n.startTimer(e.key, e.duration);
                }
              } else {
                n.stopTimer(e.key);
              }
            } else if (!n.timers[e.key]) {
              n.startTimer(e.key, e.duration);
            }
            return null;
          });
        }
      }
    }, {
      key: "add",
      value: function (e) {
        var n = this;
        var r = this.state.messages;
        var i = this.config;
        var o = i.placement;
        var a = i.maxCount;
        var l = e.placement || (o === undefined ? "topRight" : o);
        var s = -1;
        if (e.key) {
          s = r[l].findIndex(function (n) {
            return n.key === e.key;
          });
        }
        var c = this.getMessageConfig(e, s, l);
        var u = c.key;
        var d = r[l].concat();
        if (s > -1) {
          this.stopTimer(c.key);
          d[s] = c;
        } else {
          d.push(c);
          if (a && d.length > a) {
            d.shift();
          }
        }
        r[l] = d;
        this.setState({
          messages: r
        }, function () {
          return n.updateTimers(d);
        });
        return u;
      }
    }, {
      key: "remove",
      value: function (e) {
        var n = this;
        var r = this.state.messages;
        var i = null;
        var o = I();
        var a = Object.keys(r);
        var l = 0;
        for (; l < a.length; l++) {
          var s = a[l];
          var c = r[s];
          var u = c == null ? undefined : c.find(function (n) {
            return n.key === e;
          });
          if (u) {
            i = u;
            o[s] = c.filter(function (n) {
              return n.key !== e;
            });
          } else {
            o[s] = c;
          }
        }
        if (i) {
          var d = i.placement;
          this.stopTimer(e);
          this.setState({
            messages: o
          }, function () {
            return d && n.updateTimers(o[d]);
          });
        }
      }
    }, {
      key: "destroy",
      value: function () {
        var e = this;
        Object.keys(this.timers).forEach(function (n) {
          return e.stopTimer(n);
        });
        this.setState({
          messages: I(),
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
      value: function (e, n) {
        var r = this;
        var i = e.key;
        var a = e.duration;
        var l = e.renderMessage;
        var s = e.onClose;
        var c = e.transitionProps;
        var u = this.config;
        var d = u.transitionProps;
        var m = u.className;
        var p = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({
          timeout: 300
        }, d), c);
        function v(e) {
          return r.startTimer(i, e || a);
        }
        function g() {
          return r.stopTimer(i);
        }
        return reactCoreLibraryReexport.createElement(cssTransitionComponent.CssTransition, objectAssignUtil.objectAssign({}, p, {
          key: function (e) {
            if (typeof e != "string") {
              return e;
            }
            var n = new Uint16Array(e.length);
            var r = 0;
            for (; r < n.length; r++) {
              n[r] = e.charCodeAt(r);
            }
            return btoa(String.fromCharCode.apply(String, arrayIterableSliceUtil.sliceArrayIterable(new Uint8Array(n.buffer)))).replace(/=/g, "-");
          }(i),
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
            if (s) {
              s();
            }
          }
        }), function (i) {
          return reactCoreLibraryReexport.createElement(D, {
            prefixCls: r.classPrefix,
            stopTimer: g,
            startTimer: v,
            duration: a
          }, l({
            close: function () {
              return r.handleClose(e);
            },
            transitionStatus: i,
            startTimer: v,
            stopTimer: g,
            rootPrefixCls: n,
            toastConfigCls: m
          }));
        });
      }
    }, {
      key: "renderManager",
      value: function (e) {
        var n = this;
        var r = this.state.messages[e];
        var i = this.config;
        var a = i.className;
        var l = i.style;
        var s = i.top;
        var c = i.bottom;
        var u = i.prefixCls;
        var f = i.getContainer;
        var m = f == null ? undefined : f();
        var v = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, l), {}, {
          top: s,
          bottom: c
        });
        return reactCoreLibraryReexport.createElement(O, {
          key: e
        }, function (i) {
          var o = i.managerGlobalToast;
          var l = i.managerGlobalRootPrefixCls;
          n.classPrefix ||= uiConfigContextHooks.generateClassName(l, "msg-manager", u)();
          var s = conditionalClassnames.default(a, n.classPrefix, `${n.classPrefix}--${e}`, objectPropertySetter.setObjectProperty({}, `${n.classPrefix}--sticky`, !m));
          return reactCoreLibraryReexport.createElement("div", {
            ref: n.containerRef,
            className: s,
            style: `${e}` === "top" ? throttledDeepCloneUtil.throttledDeepClone({
              top: o == null ? undefined : o.top
            }, v) : v
          }, reactCoreLibraryReexport.createElement(j, null, r.map(function (e) {
            return n.renderMessage(e, l);
          })));
        });
      }
    }, {
      key: "render",
      value: function () {
        var e = this;
        var n = this.state.messages;
        var r = this.config.getContainer;
        var i = r == null ? undefined : r();
        var o = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, Object.keys(n === undefined ? [] : n).map(function (n) {
          return e.renderManager(n);
        }));
        if (i) {
          return reactDomEntryWrapper.createPortal(o, i);
        } else {
          return o;
        }
      }
    }]);
    return r;
  }(reactCoreLibraryReexport.Component);
  objectPropertySetter.setObjectProperty(B, "config", {});
  require("empty-module-export-shims") /*id: 967454*/;
  var z = ["content", "key", "duration", "onClose", "className", "type", "showCloseIcon", "newStyle"];
  var L = ["className", "prefixCls", "duration", "transitionProps", "maxCount", "getContainer", "top"];
  var A = function (e) {
    setPrototypeInheritance.setInheritance(r, e);
    var n = wrapNativeSuperHelper.wrapNativeSuper(r);
    function r() {
      var e;
      classCallCheckUtil.classCallCheck(this, r);
      var i = arguments.length;
      var o = Array(i);
      var l = 0;
      for (; l < i; l++) {
        o[l] = arguments[l];
      }
      e = n.call.apply(n, [this].concat(o));
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
        var n = this;
        return new Promise(function (r) {
          var i;
          var o = e.onClose;
          e.onClose = function () {
            if (o) {
              o();
            }
            r(undefined);
          };
          if ((i = n.managerRef.current) !== null && i !== undefined) {
            i.add(n._getManagerConfig(e));
          }
        });
      }
    }, {
      key: "info",
      value: function (e, n, r) {
        return this._open("info", e, n, r);
      }
    }, {
      key: "success",
      value: function (e, n, r) {
        return this._open("success", e, n, r);
      }
    }, {
      key: "warning",
      value: function (e, n, r) {
        return this._open("warning", e, n, r);
      }
    }, {
      key: "warn",
      value: function (e, n, r) {
        return this.warning(e, n, r);
      }
    }, {
      key: "error",
      value: function (e, n, r) {
        return this._open("error", e, n, r);
      }
    }, {
      key: "loading",
      value: function (e, n, r) {
        return this._open("loading", e, n, r);
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
        var n;
        var r;
        if (e) {
          if ((n = this.managerRef.current) !== null && n !== undefined) {
            n.remove(e);
          }
        } else if ((r = this.managerRef.current) !== null && r !== undefined) {
          r.destroy();
        }
      }
    }, {
      key: "render",
      value: function () {
        return reactCoreLibraryReexport.createElement(B, objectAssignUtil.objectAssign({
          ref: this.managerRef,
          placement: "top",
          transitionProps: {
            timeout: 300,
            classNames: "toast--animation"
          },
          duration: 3000
        }, throttledPathFilterStringify.throttledPathStr(this._config, L)));
      }
    }, {
      key: "_getManagerConfig",
      value: function (e) {
        var n;
        var r;
        var i;
        var a;
        var l;
        var s;
        var c;
        var u;
        var d;
        var g;
        var w;
        var x;
        var k;
        var $ = Object.assign({}, throttledOmitPathStringify.omitPathStringify(this._config, L));
        r = (n = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, $), e)).content;
        i = n.key;
        a = n.duration;
        l = n.onClose;
        s = n.className;
        c = n.type;
        u = n.showCloseIcon;
        g = (d = n.newStyle) === undefined || d;
        w = objectOmitHelper_1.omitWithSymbols(n, z);
        x = u !== undefined ? u : F(a);
        return {
          key: i,
          duration: (k = w.action, a !== undefined ? a : k ? 6000 : undefined),
          renderMessage: function (e) {
            var n = e.close;
            var i = e.rootPrefixCls;
            var o = e.toastConfigCls;
            return reactCoreLibraryReexport.createElement(noticeComponent.Notice, objectAssignUtil.objectAssign({}, w, {
              closable: x,
              visible: true,
              className: conditionalClassnames.default(`${i}__toast`, s, o || ""),
              theme: g ? "outlined" : "plain",
              message: reactCoreLibraryReexport.createElement("div", {
                className: composeClassNamesUtil.composeClassNames(composeTypographyHeadlineClass.typographyHeadlineClass)
              }, r),
              type: c,
              onClose: n,
              banner: false
            }));
          },
          onClose: l
        };
      }
    }, {
      key: "_open",
      value: function (e, n, r, a) {
        if (n && typeofHelper.getType(n) === "object" && "content" in n) {
          return this.open(objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, n), {}, {
            type: e
          }));
        }
        var l = typeof r == "function" ? r() : r;
        return this.open({
          type: e,
          content: n,
          duration: l,
          onClose: a
        });
      }
    }]);
    return r;
  }(reactCoreLibraryReexport.PureComponent);
  objectPropertySetter.setObjectProperty(A, "globalConfig", {});
  require.d(exports, {
    ToastManager: function () {
      return A;
    }
  });
}