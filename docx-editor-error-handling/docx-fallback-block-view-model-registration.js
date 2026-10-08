// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerFallbackBlockViewModel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 547277
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var u;
  var h;
  var f;
  var g;
  var p;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var layoutNodeConfig = require("layout-node-config") /*id: 266509*/;
  var layoutNodeBuilderReexport = require("layout-node-builder-reexport") /*id: 893890*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockModelClass = require("doc-block-model-class") /*id: 672640*/;
  var fallbackServiceName = require("fallback-service-name") /*id: 947937*/;
  function C(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function _(e, i, r, n, o) {
    var l = {};
    Object.keys(n).forEach(function (e) {
      l[e] = n[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = r.slice().reverse().reduce(function (r, n) {
      return n(e, i, r) || r;
    }, l);
    if (o && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(o) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, i, l);
      return null;
    } else {
      return l;
    }
  }
  o = d = class extends docBlockModelClass.DocBlockModel {
    onInit() {
      super.onInit();
      if (!browserEnvironmentDetectionUtils.browserDetector.isMobile && !this.config.get("isSSR")) {
        this.fallback.prefetchResource(this);
      }
    }
    constructor(...e) {
      super(...e);
      C(this, "fallback", a, this);
      C(this, "config", c, this);
    }
  };
  l = "type";
  s = docBlockTypeConstants.blockTypeConstants.FALLBACK;
  if ((l = typeof (n = function (e, i) {
    if (typeof e != "object" || !e) {
      return e;
    }
    var r = e[Symbol.toPrimitive];
    if (r !== undefined) {
      var n = r.call(e, i || "default");
      if (typeof n != "object") {
        return n;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (i === "string" ? String : Number)(e);
  }(l, "string")) == "symbol" ? n : n + "") in o) {
    Object.defineProperty(o, l, {
      value: s,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    o[l] = s;
  }
  a = _(d.prototype, "fallback", [fallbackServiceName.fallbackServiceName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  c = _(d.prototype, "config", [docxEditorCore.CONFIG_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let R = d;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var schedulerProvidersAccessor = require("scheduler-providers-accessor") /*id: 102884*/;
  var fallbackConfigKey = require("fallback-config-key") /*id: 24347*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var L = classnamesUtils;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var docxBlockLoading = require("docx-block-loading") /*id: 973751*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function D(e) {
    let i = throttledOmitPathStringify.omitPathStringify(e, ["wrapperClassname"]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: L(["loading", e.wrapperClassname]),
      children: reactJsxRuntimeCoreReexport.jsx(docxBlockLoading.DocxBlockLoading, {
        ...i
      })
    });
  }
  let x = D({
    wrapperClassname: "docx-block-loading-container-block-loading"
  });
  let F = D({
    displayMode: docBlockTypeConstants.blockDisplayConstants.INLINE
  });
  function j(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  let $ = dependencyInjectionContainer.Provide(fallbackServiceName.fallbackServiceName)(u = class {
    onServiceInit() {
      let e = this._dataset.get(fallbackConfigKey.fallbackConfigKey);
      this._configMap = e || new Map();
      this._dataset.delete(fallbackConfigKey.fallbackConfigKey);
    }
    shouldCollectSSRContent(e) {
      var i;
      let r = (i = this._configMap) === null || i === undefined ? undefined : i.get(e);
      return !!(r == null ? undefined : r.collectSSRContent);
    }
    prefetchResource(e) {
      var i;
      var r;
      let {
        type: n
      } = e.snapshot;
      let o = (i = this._configMap) === null || i === undefined ? undefined : i.get(n);
      if (o == null) {
        return undefined;
      } else if ((r = o.prefetchResource) === null || r === undefined) {
        return undefined;
      } else {
        return r.call(o, e);
      }
    }
    getFallbackView(e, i, r) {
      let {
        model: o
      } = e;
      let l = o.record.snapshot.type;
      if (!this._module.isBlockModuleExisted(l) || this._module.isBlockModuleReady(l) && !this._modelService.getBlockModelCreator(l)) {
        return null;
      }
      let s = this._ssr.getSSRContent(o.struct);
      if (s == null ? undefined : s.ssrData) {
        if (s == null ? undefined : s.isCollectFromSSR) {
          return reactJsxRuntimeCoreReexport.jsx("div", {
            dangerouslySetInnerHTML: {
              __html: xssContentSanitizer.sanitizeHtml(s.ssrData, null, {
                logType: "react.dangerouslySetInnerHTML",
                reportOnly: "false",
                blackConfig: "{}",
                configMode: "merge",
                isCloseSSRReport: false,
                bid: "flow_web",
                region: "cn",
                urlLimit: "-1",
                htmlLimit: "-1",
                isSaveValidUrl: false,
                isRuntimeLog: false,
                isDOMParser: true,
                escapeRule: "escape-report",
                reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                scmVersion: "1.0.4.168",
                webpackPluginVersion: "3.4.5",
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWJWbFhlSE5a-l$ac$l-az$lbHBZ%2pKaF-wNXN%REpL-zJJe$RuSk1WMXBvWWtkN*FWbFh%bkpN$0%1c1kyNWFjRmt5$lhSaFZ6RjNZa00xT%dNemFHa*pi$1F4WTNjO$BRPT0"
              })
            }
          });
        } else {
          return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [x, reactJsxRuntimeCoreReexport.jsx("div", {
              ref: r,
              style: {
                position: "fixed",
                top: -9999
              },
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: "ssr-wrapper",
                dangerouslySetInnerHTML: {
                  __html: xssContentSanitizer.sanitizeHtml(s.ssrData, null, {
                    logType: "react.dangerouslySetInnerHTML",
                    reportOnly: "false",
                    blackConfig: "{}",
                    configMode: "merge",
                    isCloseSSRReport: false,
                    bid: "flow_web",
                    region: "cn",
                    urlLimit: "-1",
                    htmlLimit: "-1",
                    isSaveValidUrl: false,
                    isRuntimeLog: false,
                    isDOMParser: true,
                    escapeRule: "escape-report",
                    reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                    scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                    scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                    scmVersion: "1.0.4.168",
                    webpackPluginVersion: "3.4.5",
                    filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWJWbFhlSE5a-l$ac$l-az$lbHBZ%2pKaF-wNXN%REpL-zJJe$RuSk1WMXBvWWtkN*FWbFh%bkpN$0%1c1kyNWFjRmt5$lhSaFZ6RjNZa00xT%dNemFHa*pi$1F4WTNjO$BRPT0"
                  })
                }
              })
            })]
          });
        }
      }
      if (i) {
        return F;
      }
      let a = this._configMap.get(l)?.loading;
      if (typeof a == "function") {
        return a(e);
      } else {
        return a || x;
      }
    }
    constructor() {
      j(this, "_configMap", undefined);
      j(this, "_ssr", dependencyInjectionContainer.get(schedulerProvidersAccessor.blockSchedulerProv));
      j(this, "_module", dependencyInjectionContainer.get(docxEditorCore.MODULE_MGR_TOKEN));
      j(this, "_modelService", dependencyInjectionContainer.get(docxEditorCore.MODEL_TOKEN));
      j(this, "_dataset", dependencyInjectionContainer.get(docxEditorCore.DATASET_TOKEN));
    }
  }) || u;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  var W = reactLoadableComponent;
  var docxBlockLoadingRetry = require("docx-block-loading-retry") /*id: 607364*/;
  var blockMaskManagerBaseClass = require("block-mask-manager-base-class") /*id: 471875*/;
  var adjustBlockSsrLayoutProvider = require("adjust-block-ssr-layout-provider") /*id: 523731*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var layoutManagerToken = require("layout-manager-token") /*id: 709939*/;
  var G = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 72,
    height: 72,
    viewBox: "0 0 72 72",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsxs("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "#DEE0E3",
        d: "M57.407 8.114 6.539 17.083l8.263 46.86 50.867-8.97z"
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "#F5F6F7",
        d: "M21.913 19.722H61.67v38.191H21.913z"
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "#C3C6CB",
        fillRule: "nonzero",
        d: "M28.174 28.033h27.235v-1.125H28.174zm0 5.009h27.235v-1.125H28.174zm0 5.1h27.235v-1.125H28.174zm0 5.009h17.374v-1.125H28.174z"
      }), reactJsxRuntimeCoreReexport.jsxs("g", {
        transform: "translate(46 46)",
        children: [reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "#FFC60A",
          d: "M0 9a9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9"
        }), reactJsxRuntimeCoreReexport.jsx("rect", {
          width: 1.688,
          height: 1.688,
          x: 8.156,
          y: 11.813,
          fill: "#FFF",
          rx: 0.5
        }), reactJsxRuntimeCoreReexport.jsx("rect", {
          width: 1.688,
          height: 5.625,
          x: 8.156,
          y: 4.5,
          fill: "#FFF",
          rx: 0.5
        })]
      })]
    })
  });
  function q(e) {
    let {
      isInline: i
    } = e;
    if (i) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "fallback-block inline",
        children: ["[", t("block.placeholder.new_app"), "]"]
      });
    }
    let r = "fallback-block";
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: r,
      contentEditable: "false",
      suppressContentEditableWarning: true,
      style: {
        flexWrap: "wrap",
        flexDirection: "column",
        overflow: "hidden"
      },
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "fallback-block-content",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: `${r}--left`,
          children: reactJsxRuntimeCoreReexport.jsx(G, {})
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: `${r}--right`,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: `${r}--title`,
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              children: t("block.placeholder.new_app")
            })
          })
        })]
      })
    });
  }
  function J(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function Y(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  function Q(e, i, r, n, o) {
    var l = {};
    Object.keys(n).forEach(function (e) {
      l[e] = n[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = r.slice().reverse().reduce(function (r, n) {
      return n(e, i, r) || r;
    }, l);
    if (o && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(o) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, i, l);
      return null;
    } else {
      return l;
    }
  }
  require("empty-module_6") /*id: 693252*/;
  let ee = W({
    loading: () => null,
    loader: () => require.e("document-block-icons") /*id: 2621*/.then(require.bind(require, "fallback-share-anchor-block-view") /*id: 845867*/),
    render(e, i) {
      let r = e.default;
      return reactJsxRuntimeCoreReexport.jsx(r, {
        ...i
      });
    }
  });
  h = dependencyInjectionContainer.Optional();
  g = Q((f = class extends blockMaskManagerBaseClass.BlockMaskManagerBase {
    fallbackViewProcessed(e) {
      if (!this.isProcessed) {
        if (e !== docBlockTypeConstants.blockTypeConstants.SHEET) {
          this.isProcessed = true;
          return;
        }
        if (e === docBlockTypeConstants.blockTypeConstants.SHEET && this.fallbackRef.current) {
          var i;
          if ((i = this.adjustBlockSSRLayout) !== null && i !== undefined) {
            i.observeSheet(this.fallbackRef, this.model.recordId, "ssr-wrapper", () => {
              this.isProcessed = true;
            });
          }
        }
      }
    }
    onBufferEnter() {
      this.load(true);
    }
    blockViewDidMount() {
      var e;
      var i;
      let {
        type: n,
        align: o = "left"
      } = this.model.record.snapshot;
      if (n !== docBlockTypeConstants.blockTypeConstants.FALLBACK) {
        if ((i = this.props.hostElementRef) !== null && i !== undefined && (e = i.current) !== null && e !== undefined) {
          e.classList.add(`fallback-async-${n}`, `fallback-async-align-${o}`);
        }
      }
      this.fallbackViewProcessed(n);
      this.load();
      if (ei(this.props)) {
        let e = this.model.parent?.id;
        let i = this.getService(layoutManagerToken.layoutManagerToken);
        if (e && i.isBlockActive(e)) {
          this.load(true);
        } else {
          this.eventEmitter.addListenerOnce(renderEventConstants.enterBuffer, this.handleHostEnterBuffer, e);
        }
      }
    }
    blockViewDidUpdate() {
      let {
        type: e
      } = this.model.record.snapshot;
      this.fallbackViewProcessed(e);
    }
    blockViewWillUnmount() {
      clearTimeout(this.loadResourceTimer);
      if (ei(this.props)) {
        let i = this.model.parent?.id;
        if (i) {
          this.eventEmitter.removeListener(renderEventConstants.enterBuffer, this.handleHostEnterBuffer, i);
        }
      }
    }
    render() {
      let {
        shareAnchor: e
      } = this.snapshot;
      let i = ei(this.props);
      if (e) {
        let i = objectPathGetDefault.getObjectPathDefault(this.snapshot, "iframe.component.type") || "";
        return this.renderWordSharingData(e, i);
      }
      if (this.state.errorInfo) {
        if (docxEditorCore.isUnsupportedError(this.state.errorInfo.error)) {
          return this.renderNotSupported(i);
        } else {
          return reactJsxRuntimeCoreReexport.jsx("div", {
            style: {
              width: "100%",
              height: i ? undefined : "220px"
            },
            children: reactJsxRuntimeCoreReexport.jsx(docxBlockLoadingRetry.DocxBlockLoadRetry, {
              displayMode: i ? docBlockTypeConstants.blockDisplayConstants.INLINE : docBlockTypeConstants.blockDisplayConstants.BLOCK,
              onClickRetry: this.onRetry,
              blockError: this.state.errorInfo
            })
          });
        }
      }
      let r = this.fallbackService.getFallbackView(this, i, this.fallbackRef);
      return r || this.renderNotSupported(i);
    }
    renderWordSharingData(e, i) {
      return reactJsxRuntimeCoreReexport.jsx(ee, {
        ...e,
        iframeType: i
      });
    }
    renderNotSupported(e) {
      return reactJsxRuntimeCoreReexport.jsx(q, {
        isInline: e
      });
    }
    load(e) {
      let {
        type: i
      } = this.snapshot;
      if (this.editorAPI.moduleService.isBlockModuleExisted(i)) {
        this.editorAPI.moduleService.loadBlockModuleByBlockId(this.id, {
          timeout: 30000,
          immediately: e
        }).catch(e => {
          if (!this.state.errorInfo) {
            this.setState({
              errorInfo: {
                id: this.id,
                type: i,
                error: e
              }
            });
          }
        });
      }
    }
    constructor(...e) {
      super(...e);
      Y(this, "loadResourceTimer", undefined);
      Y(this, "isProcessed", false);
      Y(this, "fallbackRef", reactCoreLibraryReexport.createRef());
      Y(this, "state", {
        errorInfo: null
      });
      J(this, "fallbackService", g, this);
      J(this, "adjustBlockSSRLayout", p, this);
      Y(this, "handleHostEnterBuffer", () => {
        this.load(true);
      });
      Y(this, "onRetry", () => {
        this.load(true);
        this.setState({
          errorInfo: null
        });
      });
    }
  }).prototype, "fallbackService", [fallbackServiceName.fallbackServiceName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  p = Q(f.prototype, "adjustBlockSSRLayout", [h, adjustBlockSsrLayoutProvider.adjustBlockSsrName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let et = f;
  function ei(e) {
    return e.displaymode === "inline";
  }
  function er(e) {
    docxEditorCore.registerProviders([$, {
      provide: layoutNodeBuilderReexport.layoutNodeBuilder,
      useClass: layoutNodeConfig.LayoutNodeConfig,
      args: [R.type, {
        defaultHeight: 220
      }]
    }]);
    docxEditorCore.registerViewModel(R, {
      viewCreator: et,
      extensions: e
    });
  }
  require.d(exports, {
    registerFallbackBlockViewModel: function () {
      return er;
    }
  });
}