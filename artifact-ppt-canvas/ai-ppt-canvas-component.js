// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'AiPptCanvasComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42552.606ee944.js
         * chunkId: 42552
         * moduleId: 867626
         */
module.exports = function (module, exports, require) {
  var n;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatFeedConversationUtil = require("chat-feed-conversation-util") /*id: 891416*/;
  var superTaskEventTracker = require("super-task-event-tracker") /*id: 368178*/;
  var samanthaCodeAssistantImageService = require("samantha-code-assistant-image-service") /*id: 954528*/;
  var aiPptImageConstants = require("ai-ppt-image-constants") /*id: 72143*/;
  var fileUploaderService = require("file-uploader-service") /*id: 566355*/;
  var aiSpaceAttachmentConstants = require("ai-space-attachment-constants") /*id: 241695*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  var layoutPptExporter = require("layout-ppt-exporter") /*id: 433821*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var y = classnamesUtils;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var skeletonComponent = require("skeleton-component") /*id: 619442*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var j = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 40 40",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M19.993 34.16q-2.905 0-5.469-1.11a14.3 14.3 0 0 1-4.523-3.058 14.6 14.6 0 0 1-3.057-4.523q-1.11-2.563-1.11-5.47 0-2.905 1.11-5.469A14.4 14.4 0 0 1 10 10.02a14.5 14.5 0 0 1 4.51-3.07q2.562-1.11 5.469-1.11 2.92 0 5.483 1.11a14.5 14.5 0 0 1 4.523 3.07 14.3 14.3 0 0 1 3.07 4.51q1.11 2.564 1.11 5.47t-1.11 5.469a14.5 14.5 0 0 1-3.07 4.523 14.3 14.3 0 0 1-4.523 3.057q-2.564 1.11-5.47 1.11m0-2.797q2.372 0 4.428-.877a11.4 11.4 0 0 0 3.619-2.44 11.4 11.4 0 0 0 2.44-3.619q.877-2.055.877-4.427 0-2.358-.877-4.414a11.35 11.35 0 0 0-6.073-6.073q-2.055-.876-4.427-.877-2.358 0-4.428.877a11.2 11.2 0 0 0-3.605 2.44 11.5 11.5 0 0 0-2.426 3.633Q8.644 17.64 8.644 20q0 2.37.877 4.427a11.5 11.5 0 0 0 2.426 3.619 11.4 11.4 0 0 0 3.619 2.44q2.07.877 4.427.877m0-9.088q-1.193 0-1.233-1.206l-.192-6.662q-.028-.603.37-.987t1.028-.384 1.042.398q.411.384.384.973l-.22 6.662q-.027 1.206-1.179 1.206m0 4.551q-.67 0-1.151-.425a1.43 1.43 0 0 1-.466-1.083q0-.645.466-1.069.48-.44 1.151-.439.659 0 1.124.425.48.426.48 1.083 0 .659-.48 1.083-.48.425-1.124.425"
    })
  }), {}));
  let k = e => /<body.*?>([\s\S]{100,})/.test(e);
  var resourceUrlSigner = require("resource-url-signer") /*id: 869102*/;
  let R = async e => {
    try {
      let t = e.filter(e => !e.streaming).map(e => e.source).join("\n");
      let i = await resourceUrlSigner.getSignedUrlMaps(t);
      return e.map(e => ({
        ...e,
        source: e.streaming ? e.source : function (e, t) {
          try {
            let i = e;
            if (t != null) {
              t.forEach(e => {
                i = i.replaceAll(e.oldUrl, e.newUrl);
              });
            }
            return i;
          } catch (t) {
            return e;
          }
        }(e.source, i)
      }));
    } catch (t) {
      return e;
    }
  };
  let N = () => ({
    isDarkMode: false
  });
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  let Z = (e, t) => e.source === t.contentWindow;
  let M = (e, t, i, n) => {
    var a;
    if ((a = e.contentWindow) !== null && a !== undefined) {
      a.postMessage({
        type: t,
        payload: i,
        context: n
      }, "*");
    }
  };
  function F(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class D {
    init() {
      window.addEventListener("message", this.handleMessage);
    }
    destroy() {
      this._listeners = [];
      this._requestPool.clear();
      window.removeEventListener("message", this.handleMessage);
    }
    constructor(e) {
      F(this, "$frame", undefined);
      F(this, "_listeners", []);
      F(this, "_requestPool", new Map());
      F(this, "handleMessage", e => {
        if (!Z(e, this.$frame)) {
          return;
        }
        let {
          type: t,
          payload: i,
          context: n
        } = e.data;
        let a = [];
        this._listeners.forEach(e => {
          if (e.type === t) {
            if (e.opts?.once) {
              a.push(e);
            }
            try {
              e.callback(i, n);
            } catch (e) {}
          }
        });
        a.forEach(e => {
          this._listeners = this._listeners.filter(t => t !== e);
        });
        if (n == null ? undefined : n._request_id_) {
          let e = this._requestPool.get(n._request_id_);
          if (e) {
            clearTimeout(e.timeoutId);
            e.resolve(i);
            this._requestPool.delete(n._request_id_);
          }
        }
      });
      F(this, "request", (e, t, i) => {
        let n = uuidGeneratorUtil.generateUuid();
        return new Promise((a, r) => {
          let o = setTimeout(() => {
            this._requestPool.delete(n);
            r(Error("request timeout"));
          }, (i == null ? undefined : i.timeout) ?? 3000);
          this._requestPool.set(n, {
            resolve: a,
            reject: r,
            timeoutId: o
          });
          M(this.$frame, e, t, {
            _request_id_: n
          });
        });
      });
      F(this, "sendCommand", (e, t) => {
        M(this.$frame, e, t);
      });
      F(this, "addEventListener", (e, t, i) => {
        this._listeners.push({
          type: e,
          callback: t,
          opts: i
        });
        return () => {
          this._listeners = this._listeners.filter(e => e.callback !== t);
        };
      });
      F(this, "removeEventListener", (e, t) => {
        this._listeners = this._listeners.filter(i => i.type !== e || i.callback !== t);
      });
      this.$frame = e;
      this.init();
    }
  }
  let I = "https://marscode-static.doubaocdn.com/super-task-slides-sandbox/";
  function z(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class O extends eventEmitterWrapper_1.eventEmitter {
    constructor(e) {
      super();
      z(this, "sources", []);
      z(this, "editorContainerWidth", undefined);
      z(this, "isCreatingLocalThumbnailQueueRunning", false);
      z(this, "creatingThumbnailList", new Map());
      z(this, "requestHTMLPreview", undefined);
      z(this, "createThumbnailPool", []);
      z(this, "createLocalThumbnailPool", []);
      z(this, "destroyed", false);
      z(this, "getSources", () => this.sources);
      z(this, "setSources", e => {
        e.forEach(e => {
          this.setSource(e);
        });
      });
      z(this, "setSource", e => {
        if (!this.sources.find(t => t.id === e.id)) {
          this.sources.push({
            ...e
          });
          this.sourceUpdate(e);
          return;
        }
        this.sources = this.sources.map(t => t.id === e.id ? ((t.source !== e.source || t.streaming !== e.streaming || t.version !== e.version) && this.sourceUpdate(e), {
          ...t,
          ...e
        }) : t);
      });
      z(this, "sourceUpdate", e => {
        requestAnimationFrame(() => {
          this.emit("sourceUpdate", e);
        });
        if (!e.streaming) {
          if (this.createThumbnailPool.find(t => t.id === e.id)) {
            this.createThumbnailPool = this.createThumbnailPool.map(t => t.id === e.id ? {
              id: e.id,
              source: e.source
            } : t);
          } else {
            this.createThumbnailPool.push({
              id: e.id,
              source: e.source
            });
          }
          requestAnimationFrame(() => {
            this.startCreateServerThumbnailQueue();
          });
        }
      });
      z(this, "createLocalThumbnail", async e => {
        try {
          let t = document.createElement("iframe");
          t.style.position = "absolute";
          t.style.left = "-9999px";
          t.style.top = "-9999px";
          t.style.width = `${this.editorContainerWidth}px`;
          document.body.append(t);
          let i = new D(t);
          t.src = xssContentSanitizer.sanitizeUrl(I, null, {
            logType: "js.href/src",
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb%16$m5k-$dFbDBaRWRHZW1*N%1-c*lSMnhy$2xNe*J*cEhiREJpTTBsMll6Tktha3d5$*5aamJW$jJZeko0-0ZwSFZ-%mpNamt4WTIxT2JFd3liSFZh%jFZMFRHN$Nlb*xZ%201a1dFMDk"
          });
          await new Promise(e => {
            i.addEventListener("sandbox-ready", e, {
              once: true
            });
          });
          i.sendCommand("set-html-source", {
            source: e,
            streaming: false
          });
          await new Promise(e => {
            i.addEventListener("content-loaded", e, {
              once: true
            });
          });
          let n = await i.request("screenshot", {
            scale: 0.2
          }, {
            timeout: 5000
          });
          if (!n) {
            throw Error("create thumbnail failed");
          }
          i.destroy();
          t.remove();
          return n;
        } catch (e) {}
      });
      z(this, "startCreateLocalThumbnailQueue", async () => {
        if (this.isCreatingLocalThumbnailQueueRunning || this.destroyed) {
          return;
        }
        if (!this.createLocalThumbnailPool.length) {
          this.isCreatingLocalThumbnailQueueRunning = false;
          return;
        }
        this.isCreatingLocalThumbnailQueueRunning = true;
        let e = this.createLocalThumbnailPool.shift();
        let t = await this.createLocalThumbnail(e.source);
        this.emit("thumbnailUpdate", [{
          id: e.id,
          previewUrl: t || ""
        }]);
        await new Promise(e => {
          setTimeout(e, 200);
        });
        this.isCreatingLocalThumbnailQueueRunning = false;
        this.startCreateLocalThumbnailQueue();
      });
      z(this, "addToLocalThumbnailQueue", e => {
        if (e.length !== 0) {
          for (let t of e) {
            if (!this.createLocalThumbnailPool.find(e => e.id === t.id)) {
              this.createLocalThumbnailPool.push({
                ...t
              });
              continue;
            }
            this.createLocalThumbnailPool = this.createLocalThumbnailPool.map(e => e.id === t.id ? {
              ...e,
              source: t.source
            } : e);
          }
          this.startCreateLocalThumbnailQueue();
        }
      });
      z(this, "startCreateServerThumbnailQueue", async () => {
        if (this.creatingThumbnailList.size >= 8 || this.destroyed || !this.createThumbnailPool.length) {
          return;
        }
        let e = this.createThumbnailPool.filter(e => !Array.from(this.creatingThumbnailList.values()).flat().includes(e.id)).slice(0, 1);
        if (!e.length) {
          return;
        }
        let t = e.map(e => e.id);
        this.createThumbnailPool = this.createThumbnailPool.filter(e => !t.includes(e.id));
        let i = uuidGeneratorUtil.generateUuid();
        this.creatingThumbnailList.set(i, e.map(e => e.id));
        try {
          let t = await this.requestHTMLPreview(e.map(e => e.source));
          if (t.length !== e.length) {
            throw Error("create thumbnail failed");
          }
          let i = e.map((e, i) => ({
            id: e.id,
            previewUrl: t[i]
          }));
          this.emit("thumbnailUpdate", i.filter(e => e.previewUrl));
          this.addToLocalThumbnailQueue(e.filter((e, i) => !t[i]));
        } catch (t) {
          this.addToLocalThumbnailQueue(e);
        } finally {
          this.creatingThumbnailList.delete(i);
        }
        await new Promise(e => {
          setTimeout(e, 200);
        });
        this.startCreateServerThumbnailQueue();
      });
      z(this, "destroy", () => {
        this.destroyed = true;
        this.removeAllListeners();
        this.sources = [];
        this.creatingThumbnailList.clear();
        this.createThumbnailPool = [];
        this.createLocalThumbnailPool = [];
      });
      this.editorContainerWidth = e.editorContainerWidth;
      this.requestHTMLPreview = e.requestHTMLPreview;
      this.setSources(e.sources);
      this.startCreateServerThumbnailQueue();
    }
  }
  let H = reactCoreLibraryReexport.createContext(undefined);
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var chevronUpIconSvg = require("chevron-up-icon-svg") /*id: 88060*/;
  var chevronDownIcon_1_1 = require("chevron-down-icon_1_1") /*id: 452133*/;
  var shareAiPptIcon = require("share-ai-ppt-icon") /*id: 777416*/;
  var plusCircleIcon = require("plus-circle-icon") /*id: 459597*/;
  function X(e, t, i, n) {
    let a;
    let r = Number(e.toPrecision(15));
    return parseFloat(Math.max(n, Math.min(t === "zoom-in" ? (Math.floor(r * 10) + 1) / 10 : (Math.ceil(r * 10) - 1) / 10, i)).toFixed(1));
  }
  let Q = [4, 2, 1, 0.66, 0.5, 0.33, 0.1];
  let K = e => {
    let {
      className: t,
      style: i,
      totalPages: n,
      currentPage: r,
      onPageChange: s,
      onScaleChange: o,
      isAutoFitScale: l,
      scale: c
    } = e;
    let [d, u] = reactCoreLibraryReexport.useState(false);
    let {
      translations: h
    } = reactCoreLibraryReexport.useContext(H);
    let m = e => {
      u(false);
      if (o != null) {
        o(e);
      }
    };
    let p = e => {
      if (e === "prev") {
        if (r - 1 > 0) {
          if (s != null) {
            s(Math.max(r - 1, 1));
          }
        }
      } else if (r + 1 <= n) {
        if (s != null) {
          s(Math.min(r + 1, n));
        }
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: y(t, "wrapper-VJMnkV"),
      style: i,
      children: [reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
        variant: "icon",
        size: "lg",
        disabled: r === 1,
        onClick: () => p("prev"),
        children: reactJsxRuntimeCoreReexport.jsx(chevronUpIconSvg.ChevronUpIcon, {})
      }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
        variant: "icon",
        size: "lg",
        disabled: r === n,
        onClick: () => p("next"),
        children: reactJsxRuntimeCoreReexport.jsx(chevronDownIcon_1_1.ChevronDownIcon, {})
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "page-wrapper-nsqE6c",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "current-page-P_Po2l",
          children: r
        }), reactJsxRuntimeCoreReexport.jsxs("span", {
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            style: {
              padding: "0 4px"
            },
            children: "/"
          }), n]
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "divider-owPFYK"
      }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
        variant: "icon",
        size: "lg",
        disabled: c <= 0.1,
        onClick: () => {
          m(X(c, "zoom-out", 4, 0.1));
        },
        children: reactJsxRuntimeCoreReexport.jsx(shareAiPptIcon.ShareAiPptIcon, {})
      }), reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
        onOpenChange: e => u(e),
        children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {
          asChild: true,
          children: reactJsxRuntimeCoreReexport.jsxs(buttonComponentExport.Button, {
            withTrailingCaret: true,
            variant: "text",
            color: "grey-filled",
            classNames: {
              trailingCaret: d ? "rotate-180" : ""
            },
            children: [(c * 100).toFixed(0), "%"]
          })
        }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
          children: reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
            side: "top",
            align: "center",
            sideOffset: 10,
            style: {
              zIndex: 2048
            },
            children: [Q.map(e => reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenuItem, {
              active: !l && c === e,
              onClick: () => m(e),
              children: [e * 100, "%"]
            }, e)), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuSeparator, {}), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuItem, {
              active: l,
              onClick: () => m("auto-fit"),
              children: h.agent_PPT_zoom_fit
            })]
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
        variant: "icon",
        size: "lg",
        disabled: c >= 4,
        onClick: () => {
          m(X(c, "zoom-in", 4, 0.1));
        },
        children: reactJsxRuntimeCoreReexport.jsx(plusCircleIcon.PlusCircleIcon, {})
      })]
    });
  };
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  function Y(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class ee extends eventEmitterWrapper_1.eventEmitter {
    setMode(e) {
      this.mode = e;
      this.communication.sendCommand("set-mode", e);
    }
    clearSelection() {
      this.communication.sendCommand("clear-selection");
    }
    bind() {
      this.communication.addEventListener("selection-change", this.handleSelectionChange);
      this.communication.addEventListener("sandbox-ready", this.handleSandboxReady);
      this.communication.addEventListener("content-loaded", this.handleContentLoaded);
      this.communication.addEventListener("size-change", this.handleSizeChange);
      this.communication.addEventListener("content-change", this.handleContentChange);
    }
    unbind() {
      this.communication.removeEventListener("selection-change", this.handleSelectionChange);
      this.communication.removeEventListener("sandbox-ready", this.handleSandboxReady);
      this.communication.removeEventListener("content-loaded", this.handleContentLoaded);
      this.communication.removeEventListener("size-change", this.handleSizeChange);
      this.communication.removeEventListener("content-change", this.handleContentChange);
    }
    destroy() {
      this.unbind();
      this.communication.destroy();
      this.removeAllListeners();
    }
    constructor(e) {
      super();
      Y(this, "$frame", undefined);
      Y(this, "htmlSource", undefined);
      Y(this, "mode", undefined);
      Y(this, "communication", undefined);
      Y(this, "isHtmlSourceReady", () => !this.htmlSource.streaming);
      Y(this, "getHTMLSource", async () => {
        let e = await this.communication.request("get-html-source");
        return {
          ...this.htmlSource,
          source: e
        };
      });
      Y(this, "waitForSandBoxReady", () => new Promise(e => {
        this.communication.addEventListener("sandbox-ready", e, {
          once: true
        });
      }));
      Y(this, "init", async () => {
        await this.waitForSandBoxReady();
        this.communication.sendCommand("set-mode", this.mode);
        this.communication.sendCommand("set-html-source", this.htmlSource);
        this.bind();
      });
      Y(this, "handleContentChange", () => {
        if (this.mode !== "readonly") {
          this.emit("contentchange");
        }
      });
      Y(this, "handleSelectionChange", e => {
        this.emit("selectionchange", e);
      });
      Y(this, "handleSandboxReady", () => {
        this.emit("sandbox-ready");
      });
      Y(this, "handleContentLoaded", () => {
        this.emit("content-loaded");
      });
      Y(this, "handleSizeChange", e => {
        this.emit("size-change", e);
      });
      Y(this, "_setFrameDocSource", (e, t) => {
        if (t) {
          this.communication.sendCommand("set-html-source", {
            source: e.slice(this.htmlSource.source.length),
            streaming: true
          });
        } else {
          this.communication.sendCommand("set-html-source-ready");
        }
        this.htmlSource = {
          ...this.htmlSource,
          streaming: t,
          source: e
        };
      });
      Y(this, "resetFrameDocSource", async e => {
        this.htmlSource = e;
        this.communication.sendCommand("reset-sandbox");
        await this.waitForSandBoxReady();
        this.communication.sendCommand("set-html-source", this.htmlSource);
        this.setMode(this.mode);
      });
      Y(this, "setFrameDocSource", (e, t) => {
        if (this.htmlSource.streaming) {
          this._setFrameDocSource(e, t);
        }
      });
      Y(this, "getSelectionStyle", async e => await this.communication.request("get-selection-style", {
        property: e
      }));
      Y(this, "setSelectionStyle", (e, t) => {
        this.communication.sendCommand("set-selection-style", {
          property: e,
          value: t
        });
      });
      Y(this, "getSelectionAttribute", async e => await this.communication.request("get-selection-attribute", {
        attribute: e
      }));
      Y(this, "setSelectionAttribute", (e, t) => {
        this.communication.sendCommand("set-selection-attribute", {
          attribute: e,
          value: t
        });
      });
      this.$frame = e.$frame;
      this.communication = new D(this.$frame);
      this.htmlSource = e.htmlSource;
      this.mode = e.mode ?? "readonly";
      this.init();
    }
  }
  let et = e => {
    let {
      className: t,
      htmlSources: i,
      index: n,
      switchPage: r
    } = e;
    let s = reactCoreLibraryReexport.useRef(null);
    let o = reactCoreLibraryReexport.useRef(null);
    let l = reactCoreLibraryReexport.useCallback(debounceUtilWrapper.createDebounce(e => {
      if (!o.current || !s.current) {
        return;
      }
      o.current.style.width = `${e.width}px`;
      o.current.style.height = `${e.height}px`;
      let t = Math.min(s.current.clientWidth / e.width, s.current.clientHeight / e.height);
      t = Math.max(t, 1);
      o.current.style.transform = `scale(${t})`;
    }, 200, {
      leading: true
    }), []);
    let c = e => {
      switch (e) {
        case "ArrowUp":
        case "ArrowLeft":
          r("prev");
          break;
        case "ArrowDown":
        case "ArrowRight":
        case "Enter":
          r("next");
          break;
        default:
          return;
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      let e = o.current;
      let t = i[n];
      if (!e) {
        return;
      }
      e.src = xssContentSanitizer.sanitizeUrl(I, null, {
        logType: "js.href/src",
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb%16$m5k-$dFbDBaRWRHZW1*N%1-c*lSMnhy$2xNe*J*cEhiREJpTTBsMll6Tktha3d5$*5aa$dFSjJZbTFXZFdSS$R-WlZTRXBzWXpK$2RX%khSakJo$npsM$RETkNhRm95$lhWa1NFNDBX$mhL-m1SW$R%MD0"
      });
      let a = new ee({
        htmlSource: {
          ...t,
          streaming: false
        },
        $frame: e,
        mode: "readonly"
      });
      a.addListener("size-change", e => {
        l(e);
      });
      a.communication.addEventListener("keydown", c);
      a.communication.addEventListener("click", () => r("next"));
      return () => {
        a.destroy();
      };
    }, []);
    if (i[n]) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: y("wrapper-TIY00J", t),
        ref: s,
        children: reactJsxRuntimeCoreReexport.jsx("iframe", {
          ref: o,
          frameBorder: "0",
          scrolling: "no"
        })
      });
    } else {
      return null;
    }
  };
  let ei = e => {
    let {
      htmlSources: t
    } = e;
    let [i, n] = reactCoreLibraryReexport.useState(0);
    let r = [i - 1, i, i + 1].filter(e => e >= 0 && e < t.length);
    let s = e => {
      if (e === "prev") {
        n(e => Math.max(0, e - 1));
        return;
      }
      if (e === "next") {
        n(e => Math.min(t.length - 1, e + 1));
        return;
      }
    };
    let o = e => {
      switch (e) {
        case "ArrowUp":
        case "ArrowLeft":
          s("prev");
          break;
        case "ArrowDown":
        case "ArrowRight":
        case "Enter":
          s("next");
          break;
        default:
          return;
      }
    };
    let l = e => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      o(e.key);
    };
    let c = () => {
      s("next");
    };
    reactCoreLibraryReexport.useEffect(() => {
      document.addEventListener("keydown", l, true);
      document.addEventListener("click", c, true);
      return () => {
        document.removeEventListener("keydown", l, true);
        document.removeEventListener("click", c, true);
      };
    }, []);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "virtual-wrapper-Lh4cna",
      children: r.map(e => reactJsxRuntimeCoreReexport.jsx(et, {
        className: y({
          "virtual-ZnPxzm": e !== i
        }),
        htmlSources: t,
        index: e,
        switchPage: s
      }, e))
    });
  };
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  (n = {}).INNER = "inner";
  n.SPLIT = "split";
  n.CUSTOM = "custom";
  let ea = n;
  let er = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.3125 2.23145C15.1274 2.23145 17.4092 4.5132 17.4092 7.32812C17.4092 8.87958 16.7146 10.2674 15.6211 11.2021C17.6556 11.9998 19.0967 13.9794 19.0967 16.2969C19.0967 19.3189 16.647 21.7686 13.625 21.7686H6.20312C5.48515 21.7686 4.90332 21.1867 4.90332 20.4688V3.53125C4.90332 2.81328 5.48515 2.23145 6.20312 2.23145H12.3125ZM6.50293 20.1689H13.625C15.7634 20.1689 17.4971 18.4353 17.4971 16.2969C17.4971 14.1585 15.7634 12.4248 13.625 12.4248H6.50293V20.1689ZM6.50293 10.8252H12.3125C14.2438 10.8252 15.8096 9.2594 15.8096 7.32812C15.8096 5.39685 14.2438 3.83105 12.3125 3.83105H6.50293V10.8252Z",
      fill: "currentColor"
    })
  });
  let es = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M19.2188 3.2002C19.6606 3.2002 20.0186 3.55817 20.0186 4C20.0186 4.44183 19.6606 4.7998 19.2188 4.7998H14.75L10.873 19.2002H15.5312L15.6133 19.2041C16.0166 19.2452 16.3311 19.5859 16.3311 20C16.3311 20.4141 16.0166 20.7548 15.6133 20.7959L15.5312 20.7998H4.875C4.43317 20.7998 4.0752 20.4418 4.0752 20C4.0752 19.5582 4.43317 19.2002 4.875 19.2002H9.21582L13.0928 4.7998H8.53125C8.08942 4.7998 7.73145 4.44183 7.73145 4C7.73145 3.55817 8.08942 3.2002 8.53125 3.2002H19.2188Z",
      fill: "currentColor"
    })
  });
  let eo = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M21.0312 19.7939C21.4731 19.7939 21.8311 20.1519 21.8311 20.5938C21.8311 21.0356 21.4731 21.3936 21.0312 21.3936H2.96875C2.52692 21.3936 2.16895 21.0356 2.16895 20.5938C2.16895 20.1519 2.52692 19.7939 2.96875 19.7939H21.0312Z",
      fill: "currentColor"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M18.3906 2.09375C18.8324 2.09375 19.1903 2.45184 19.1904 2.89355V10.2529C19.1904 14.2242 15.9713 17.4434 12 17.4434C8.02873 17.4434 4.80957 14.2242 4.80957 10.2529V2.89355C4.8097 2.45184 5.16763 2.09375 5.60938 2.09375C6.05112 2.09375 6.40905 2.45184 6.40918 2.89355V10.2529C6.40918 13.3405 8.91238 15.8438 12 15.8438C15.0876 15.8438 17.5908 13.3405 17.5908 10.2529V2.89355C17.591 2.45184 17.9489 2.09375 18.3906 2.09375Z",
      fill: "currentColor"
    })]
  });
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var dbxPopoverComponents = require("dbx-popover-components") /*id: 457187*/;
  let ed = [[{
    color: "rgba(255, 255, 255, 1)",
    hasBorder: true
  }, {
    color: "rgba(222, 224, 227, 1)"
  }, {
    color: "rgba(251, 191, 188, 1)"
  }, {
    color: "rgba(254, 212, 164, 1)"
  }, {
    color: "rgba(255, 246, 122, 1)"
  }, {
    color: "rgba(183, 237, 177, 1)"
  }, {
    color: "rgba(186, 206, 253, 1)"
  }, {
    color: "rgba(205, 178, 250, 1)"
  }], [{
    color: "rgba(239, 240, 241, 1)"
  }, {
    color: "rgba(187, 191, 196, 1)"
  }, {
    color: "rgba(247, 105, 100, 1)"
  }, {
    color: "rgba(255, 165, 61, 1)"
  }, {
    color: "rgba(255, 233, 40, 1)"
  }, {
    color: "rgba(98, 210, 86, 1)"
  }, {
    color: "rgba(78, 131, 253, 1)"
  }, {
    color: "rgba(147, 90, 246, 1)"
  }]];
  let eu = e => {
    let {
      translations: t
    } = reactCoreLibraryReexport.useContext(H);
    let {
      placement: i,
      htmlEditor: n,
      renderCount: r
    } = e;
    let [s, o] = reactCoreLibraryReexport.useState("");
    reactCoreLibraryReexport.useEffect(() => {
      n.getSelectionStyle("-webkit-text-fill-color").then(e => {
        o(function (e) {
          let t = e.replaceAll(/\s+/g, "").match(/^rgb\((\d+),(\d+),(\d+)\)$/);
          if (t) {
            return `rgba(${t[1]},${t[2]},${t[3]},1)`;
          } else {
            return e;
          }
        }(e));
      });
    }, [r]);
    let l = e => {
      n.setSelectionStyle("-webkit-text-fill-color", e);
    };
    return reactJsxRuntimeCoreReexport.jsx(dbxPopoverComponents.DbxPopover, {
      zIndex: 2048,
      trigger: "click",
      position: i === "top" ? "topLeft" : "bottomLeft",
      getPopupContainer: () => document.body,
      content: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "color-panel-fBxUB7",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "caption-aj0gUf",
          children: t.agent_PPT_toolbar_fontColor
        }), ed.map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
          className: "color-list-vC1Ydp",
          children: e.map(e => reactJsxRuntimeCoreReexport.jsx("div", {
            className: y("color-item-wrapper-LRryTh"),
            style: {
              marginTop: t === 0 ? 0 : -4
            },
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: y("color-item-EvJQE9", {
                "with-border-r56Dkp": e.hasBorder === true,
                "selected-dhLE2g": s === e.color.replaceAll(/\s+/g, "")
              }),
              onClick: () => l(e.color),
              style: {
                backgroundColor: e.color
              }
            }, e.color)
          }))
        }, t))]
      }),
      spacing: 10,
      className: "!min-w-[unset]",
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "relative h-fit w-fit",
        children: reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
          content: t.agent_PPT_toolbar_color,
          getPopupContainer: () => document.body,
          position: "top",
          children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            variant: "text",
            color: "grey-filled",
            size: "md2",
            className: "h-24",
            withTrailingCaret: true,
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: `
                size-16 rounded-[4px] border-[1px] border-solid
                border-dbx-line-10
              `,
              style: {
                backgroundColor: s
              }
            })
          })
        })
      })
    });
  };
  var closeIconComponent_1_1 = require("close-icon-component_1_1") /*id: 259726*/;
  var em = {};
  let ep = e => {
    let {
      htmlEditor: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
      variant: "icon",
      color: "grey-filled",
      className: em.wrapper,
      size: "md2",
      onClick: () => t == null ? undefined : t.clearSelection(),
      children: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1_1.CloseIcon, {})
    });
  };
  let eg = e => {
    let {
      translations: t
    } = e;
    return [{
      type: ea.CUSTOM,
      component: eu
    }, {
      type: ea.SPLIT
    }, {
      type: ea.INNER,
      props: {
        icon: reactJsxRuntimeCoreReexport.jsx(er, {}),
        tooltip: t.agent_PPT_toolbar_bold,
        isActive: async e => Number(await e.getSelectionStyle("font-weight")) >= 600,
        handleClick(e, t) {
          if (e) {
            t.setSelectionStyle("font-weight", "700");
          } else {
            t.setSelectionStyle("font-weight", "400");
          }
        }
      }
    }, {
      type: ea.INNER,
      props: {
        icon: reactJsxRuntimeCoreReexport.jsx(es, {}),
        tooltip: t.agent_PPT_toolbar_italic,
        isActive: async e => (await e.getSelectionStyle("font-style")) === "italic",
        handleClick(e, t) {
          if (e) {
            t.setSelectionStyle("font-style", "italic");
          } else {
            t.setSelectionStyle("font-style", "normal");
          }
        }
      }
    }, {
      type: ea.INNER,
      props: {
        icon: reactJsxRuntimeCoreReexport.jsx(eo, {}),
        tooltip: t.agent_PPT_toolbar_underline,
        isActive: async e => (await e.getSelectionStyle("text-decoration")).includes("underline"),
        handleClick(e, t) {
          if (e) {
            t.setSelectionStyle("text-decoration", "underline");
          } else {
            t.setSelectionStyle("text-decoration", "none");
          }
        }
      }
    }, {
      type: ea.SPLIT
    }, {
      type: ea.CUSTOM,
      component: ep
    }];
  };
  let e_ = e => {
    let {
      className: t,
      style: i,
      icon: n,
      tooltip: r,
      isActive: s,
      onClick: o,
      htmlEditor: l,
      selection: c,
      renderCount: d
    } = e;
    let [u, h] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      s(l, c).then(e => {
        h(e);
      });
    }, [l, c, s, d]);
    return reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
      content: r,
      getPopupContainer: () => document.body,
      children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
        variant: "icon",
        color: "grey-filled",
        className: y("wrapper-Om9fB4", t, {
          "active-n3Lazs": u
        }),
        style: i,
        size: "md2",
        onClick: () => o == null ? undefined : o(!u),
        children: n
      })
    });
  };
  var ev = {
    "text-menu-wrapper": "text-menu-wrapper-u0iSyw",
    split: "split-HBUzlL"
  };
  let ef = e => {
    let {
      className: t,
      style: i,
      selection: n,
      htmlEditor: r,
      placement: s,
      renderCount: o,
      getPopupContainer: l
    } = e;
    let {
      translations: c
    } = reactCoreLibraryReexport.useContext(H);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: y(t, ev["text-menu-wrapper"]),
      style: i,
      children: eg({
        translations: c
      }).map((e, t) => {
        if (e.type === ea.CUSTOM) {
          return reactCoreLibraryReexport.createElement(e.component, {
            key: t,
            htmlEditor: r,
            selection: n,
            placement: s,
            getPopupContainer: l,
            renderCount: o
          });
        }
        if (e.type === ea.SPLIT) {
          return reactJsxRuntimeCoreReexport.jsx("div", {
            className: ev.split
          }, t);
        }
        {
          let {
            props: i
          } = e;
          let a = {
            htmlEditor: r,
            icon: i.icon,
            tooltip: i.tooltip,
            placement: s,
            selection: n,
            renderCount: o,
            isActive: i.isActive,
            onClick: e => i.handleClick(e, r, n),
            getPopupContainer: l
          };
          return reactJsxRuntimeCoreReexport.jsx(e_, {
            ...a
          }, t);
        }
      })
    });
  };
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  var businessInputField = require("business-input-field") /*id: 324730*/;
  var downloadArrowIcon = require("download-arrow-icon") /*id: 259591*/;
  var semiProgressComponent = require("semi-progress-component") /*id: 821198*/;
  var semiUploadComponent = require("semi-upload-component") /*id: 159273*/;
  var eP = {
    wrapper: "wrapper-n6x450",
    "preview-area": "preview-area-Ufm9X6",
    progress: "progress-idb43G",
    mask: "mask-dn7SQW",
    "upload-area": "upload-area-GJArva",
    btns: "btns-ERiL4a"
  };
  let eS = e => {
    let {
      className: t,
      style: i,
      requestUploadImage: n,
      translations: r,
      handleReplace: s
    } = e;
    let [o, l] = reactCoreLibraryReexport.useState(null);
    let [c, d] = reactCoreLibraryReexport.useState(false);
    let [u, h] = reactCoreLibraryReexport.useState(0);
    let [, m] = reactCoreLibraryReexport.useState(0);
    let p = reactCoreLibraryReexport.useRef("");
    let g = reactCoreLibraryReexport.useRef("");
    let _ = async e => {
      if (e) {
        d(true);
        try {
          let t = await n(e, h);
          g.current = t;
          new Image().src = xssContentSanitizer.sanitizeUrl(t, null, {
            logType: "js.href/src",
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x1$m5waFZ6$nNZek5OZEZre%9-%mpSemwx$2xjM%1HTj$PWHBq-l%xMlkwaFdl$nB%T1hCa$-wWn$XbE14Z$ZwW$FuTlpWMD$z$EZoQ2RtTklWbmRNTWs1MllsaENkb%p0$m5Wa1NFMTJZ$mN4-%Zve$Z-%mtXR%p6WWpKR2EweFlRbWhp-lZaelRESnNk$nBI$mpSTWJsSjZa$WRHZ$ZvelZubz0"
          });
        } catch (e) {} finally {
          d(false);
          h(0);
        }
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (p.current) {
        URL.revokeObjectURL(p.current);
      }
      if (o) {
        p.current = URL.createObjectURL(o);
        m(e => e + 1);
      }
      return () => {
        if (p.current) {
          URL.revokeObjectURL(p.current);
        }
      };
    }, [o]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: y(eP.wrapper, t),
      style: i,
      children: [o ? reactJsxRuntimeCoreReexport.jsxs("div", {
        className: y(eP["preview-area"]),
        children: [reactJsxRuntimeCoreReexport.jsx("img", {
          className: y({
            [eP.mask]: c
          }),
          src: xssContentSanitizer.sanitizeUrl(p.current, null, {
            logType: "js.href/src",
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x1$m5waFZ6$nNZek5OZEZre%9-%mpSemwx$2xjM%1HTj$PWHBq-l%xMlkwaFdl$nB%T1hCa$-wWn$XbE14Z$ZwW$FuTlpWMD$z$EZoQ2RtTklWbmRNTWs1MllsaENkb%p0$m5Wa1NFMTJZ$mN4-%Zve$Z-%mtXR%p6WWpKR2EweFlRbWhp-lZaelRESnNk$nBI$mpSTWJsSjZa$WRHZ$ZvelZubz0"
          }),
          alt: ""
        }), c && reactJsxRuntimeCoreReexport.jsx(semiProgressComponent.Progress, {
          className: eP.progress,
          type: "circle",
          width: 40,
          strokeWidth: 3,
          stroke: "#fff",
          orbitStroke: "rgba(255,255,255,0.6)",
          percent: Math.ceil(u || 0)
        })]
      }) : reactJsxRuntimeCoreReexport.jsx(semiUploadComponent.UploadComponent, {
        action: "",
        accept: "image/png, image/jpeg, image/jpg, image/gif",
        onFileChange: e => {
          let t = e[0];
          l(t);
          _(t);
        },
        showUploadList: false,
        draggable: true,
        uploadTrigger: "custom",
        multiple: false,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: eP["upload-area"],
          children: r.agent_PPT_image_upload_clickDrag
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: eP.btns,
        children: [o && !c && reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          variant: "rectangle",
          color: "grey-filled",
          onClick: () => l(null),
          children: r.agent_PPT_image_upload_btn_reupload
        }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          variant: "rectangle",
          color: "brand-filled",
          onClick: () => {
            l(null);
            if (s != null) {
              s(g.current);
            }
          },
          disabled: !o || !!c,
          children: r.agent_PPT_image_btn_replace
        })]
      })]
    });
  };
  var aiPptImageModeDropdown = require("ai-ppt-image-mode-dropdown") /*id: 747913*/;
  var skeletonLoaderExport = require("skeleton-loader-export") /*id: 766114*/;
  var ek = {
    wrapper: "wrapper-PXAE0D",
    "unexpected-wrapper": "unexpected-wrapper-D0iLy8",
    "image-list-wrapper": "image-list-wrapper-tf1Ylh",
    "image-list": "image-list-f6uU0n",
    "image-item": "image-item-j86YIf",
    active: "active-KUAdgz",
    loading: "loading-vkJAjw",
    "actions-wrapper": "actions-wrapper-U7P7ph"
  };
  let eT = e => {
    let {
      className: t,
      style: i,
      state: n,
      mode: r,
      imageList: s,
      onCancel: o,
      onConfirm: l,
      translations: c,
      onClickImage: d
    } = e;
    let [u, h] = reactCoreLibraryReexport.useState("");
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: y(t, ek.wrapper),
      style: i,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: ek["image-list-wrapper"],
        children: n === "failed" ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: ek["unexpected-wrapper"],
          children: r === "ai-generation" ? c.agent_PPT_image_gen_fail_retry : c.agent_PPT_image_searchWeb_fail_retry
        }) : n === "searching" ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: ek["image-list"],
          children: Array.from({
            length: 6
          }).map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
            className: y(ek["image-item"], {
              [ek.loading]: true
            }),
            style: i,
            children: reactJsxRuntimeCoreReexport.jsx(skeletonLoaderExport.SkeletonLoader, {
              loading: true,
              active: true,
              className: "size-152 rounded-sm"
            })
          }, t))
        }) : s.length === 0 ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: ek["unexpected-wrapper"],
          children: r === "ai-generation" ? c.agent_PPT_image_gen_fail_retry : c.agent_PPT_image_searchWeb_noResult
        }) : reactJsxRuntimeCoreReexport.jsx("div", {
          className: ek["image-list"],
          children: s.map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
            className: y(ek["image-item"], {
              [ek.active]: e === u
            }),
            style: {
              backgroundImage: `url(${e})`
            },
            onClick: () => {
              if (d != null) {
                d(u, e);
              }
              h(e);
            }
          }, `${t}-${e}`))
        })
      }), s.length > 0 && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: ek["actions-wrapper"],
        children: [reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          variant: "rectangle",
          color: "grey-filled",
          onClick: o,
          children: c.agent_PPT_image_btn_cancel
        }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          variant: "rectangle",
          color: "brand-filled",
          onClick: () => l == null ? undefined : l(u),
          disabled: !u,
          children: c.agent_PPT_image_btn_replace
        })]
      })]
    });
  };
  var eR = {
    "image-menu-wrapper": "image-menu-wrapper-wCklDu",
    split: "split-T2hkru",
    "send-btn": "send-btn-BN5CzB",
    disabled: "disabled-zOjSJj"
  };
  let eN = e => {
    let {
      className: t,
      style: i,
      placement: n,
      getPopupContainer: r,
      getTooBarPopupContainer: s,
      requestSearchImage: o,
      requestUploadImage: l,
      translations: c,
      handleCloseMenu: d,
      handleReplaceImage: u,
      defaultMode: h,
      availableModeList: m = ["ai-generation", "search", "upload"],
      onPopupCancel: p,
      onPopupConfirm: g,
      onClickImage: _,
      onImageModeDropdownVisibleChange: v,
      onClickImageDropdownItem: f,
      disableCancelButton: w = false,
      imageModeSelectorClassName: b
    } = e;
    let [x, C] = reactCoreLibraryReexport.useState(h ?? "ai-generation");
    let [P, S] = reactCoreLibraryReexport.useState("");
    let [j, k] = reactCoreLibraryReexport.useState("idle");
    let [T, R] = reactCoreLibraryReexport.useState([]);
    let [N, E] = reactCoreLibraryReexport.useState(false);
    let L = reactCoreLibraryReexport.useRef(null);
    let W = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => () => {
      E(false);
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (x === "upload") {
        setTimeout(() => {
          E(true);
        }, 0);
      } else {
        setTimeout(() => {
          var e;
          if ((e = L.current) !== null && e !== undefined) {
            e.focus();
          }
        }, 0);
        E(false);
      }
    }, [x]);
    let Z = async () => {
      if (P && x !== "upload") {
        k("searching");
        E(true);
        try {
          let e = await o(P, x);
          R(e);
          k("idle");
        } catch {
          R([]);
          k("failed");
        }
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown, {
      showArrow: false,
      trigger: "custom",
      content: x === "upload" ? reactJsxRuntimeCoreReexport.jsx(eS, {
        requestUploadImage: l,
        translations: c,
        handleReplace: u
      }) : reactJsxRuntimeCoreReexport.jsx(eT, {
        mode: x,
        translations: c,
        imageList: T,
        state: j,
        onCancel: () => {
          E(false);
          if (p != null) {
            p(x);
          }
        },
        onConfirm: e => {
          E(false);
          if (u != null) {
            u(e);
          }
          if (g != null) {
            g(x);
          }
        },
        onClickImage: (e, t) => {
          if (_ != null) {
            _(x, e, t);
          }
        }
      }),
      position: n === "top" ? "topLeft" : "bottomLeft",
      getPopupContainer: r,
      visible: N,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: y(t, eR["image-menu-wrapper"]),
        style: {
          ...i
        },
        ref: W,
        children: [reactJsxRuntimeCoreReexport.jsx(aiPptImageModeDropdown.ImageModeDropdown, {
          className: b,
          mode: x,
          setMode: e => {
            C(e);
            if (f != null) {
              f(e, x);
            }
          },
          placement: n,
          getPopupContainer: s || r,
          translations: c,
          availableModeList: m,
          onImageModeDropdownVisibleChange: (e, t) => v == null ? undefined : v(e, t)
        }), x !== "upload" && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(businessInputField.BusinessInput, {
            classNames: {
              wrapper: "shrink-1 grow-0 basis-auto w-270 border-none !pl-2 !pr-2"
            },
            ref: L,
            placeholder: x === "ai-generation" ? c.agent_PPT_image_generate_placeholder : c.agent_PPT_image_searchWeb_desc,
            value: P,
            onChange: S,
            onEnterPress: Z,
            autoFocus: true
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: y(eR["send-btn"], {
              [eR.disabled]: !P
            }),
            onClick: Z,
            children: reactJsxRuntimeCoreReexport.jsx(downloadArrowIcon.DownloadArrowIcon, {
              className: `
                  size-16
                  ${P ? "text-dbx-text-static-white-primary" : "text-dbx-text-disable"}
                `
            })
          })]
        }), !w && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: eR.split
          }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            variant: "icon",
            color: "grey-filled",
            onClick: d,
            children: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1_1.CloseIcon, {})
          })]
        })]
      })
    });
  };
  let eE = e => {
    let {
      className: t,
      style: i,
      htmlEditor: n,
      placement: r,
      getPopupContainer: s
    } = e;
    let {
      requestSearchImage: o,
      translations: l,
      requestUploadImage: c
    } = reactCoreLibraryReexport.useContext(H);
    return reactJsxRuntimeCoreReexport.jsx(eN, {
      className: t,
      style: i,
      placement: r,
      translations: {
        ...l,
        agent_PPT_image_aiEdit: "",
        agent_PPT_image_aiEdit_placeholder: "",
        agent_PPT_image_aiEdit_fail: ""
      },
      requestSearchImage: o,
      requestUploadImage: c,
      getPopupContainer: s,
      getTooBarPopupContainer: () => document.body,
      handleCloseMenu: () => {
        n.clearSelection();
      },
      handleReplaceImage: e => {
        n.setSelectionAttribute("src", e);
      }
    });
  };
  let eL = e => {
    let {
      selection: t,
      ...i
    } = e;
    if (t.activeElement) {
      if (t.activeElement.tag === "IMG") {
        return reactJsxRuntimeCoreReexport.jsx(eE, {
          ...i,
          selection: t
        }, t.activeElement.identifier);
      } else {
        return reactJsxRuntimeCoreReexport.jsx(ef, {
          ...i,
          selection: t
        }, t.activeElement.identifier);
      }
    } else {
      return null;
    }
  };
  let eW = (e, t) => ({
    x: e.x * t,
    y: e.y * t
  });
  function eZ(e, t, i) {
    let [n, r] = reactCoreLibraryReexport.useState(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (!e) {
        r(null);
        return;
      }
      let {
        left: i,
        top: n,
        width: a,
        height: s
      } = e.bounds;
      let {
        x: o,
        y: l
      } = eW({
        x: i,
        y: n
      }, t);
      r({
        left: o,
        top: l,
        width: a * t,
        height: s * t
      });
    }, [e, t, i]);
    return {
      position: n
    };
  }
  var eM = {
    "measure-size-sentinel": "measure-size-sentinel-kc8o6A",
    wrapper: "wrapper-ypg7Tp",
    "scale-less-than-1": "scale-less-than-1-iWaIC1",
    "frame-wrapper": "frame-wrapper-Ijag3q",
    "menu-wrapper": "menu-wrapper-et3PmK",
    mask: "mask-PbDCkw"
  };
  let eF = e => {
    var t;
    let {
      className: r,
      style: s,
      htmlSource: o,
      mode: l = "readonly",
      containerSizePadding: c = 0,
      scale: d,
      onHTMLSourceChange: u,
      onAutoFitScaleValueChange: h,
      getPopupContainer: m,
      onSandboxKeyDown: p,
      onLoad: g
    } = e;
    let [_, v] = reactCoreLibraryReexport.useState(d === "auto-fit" ? 1 : d);
    let [f, w] = reactCoreLibraryReexport.useState(0);
    let [b, x] = reactCoreLibraryReexport.useState(undefined);
    let [C, P] = reactCoreLibraryReexport.useState(undefined);
    let [S, j] = reactCoreLibraryReexport.useState({
      hoverElement: null,
      activeElement: null
    });
    let k = reactCoreLibraryReexport.useRef(null);
    let T = reactCoreLibraryReexport.useRef();
    let R = reactCoreLibraryReexport.useRef(null);
    let N = reactCoreLibraryReexport.useRef(null);
    let L = reactCoreLibraryReexport.useRef(null);
    let {
      position: W,
      placement: Z
    } = function (e, t, i, n) {
      let [r, s] = reactCoreLibraryReexport.useState(null);
      let [o, l] = reactCoreLibraryReexport.useState(undefined);
      reactCoreLibraryReexport.useEffect(() => {
        if (!e || !t.activeElement || !n) {
          s(null);
          l(undefined);
          return;
        }
        let {
          width: a,
          height: r
        } = e.getBoundingClientRect();
        let {
          left: o,
          top: c,
          height: d
        } = t.activeElement.bounds;
        let {
          x: u,
          y: h
        } = eW({
          x: o,
          y: c
        }, i);
        let m = d * i;
        let p = "bottom";
        if (h + m + 4 > n.height * 0.6) {
          p = "top";
        }
        s({
          left: Math.min(u, n.width - a),
          top: p === "bottom" ? h + m + 4 : h - r - 4
        });
        l(p);
      }, [e, t.activeElement, i, n == null ? undefined : n.width, n == null ? undefined : n.height]);
      return {
        position: r,
        placement: o
      };
    }(L.current, S, _, (t = R.current) === null || t === undefined ? undefined : t.getBoundingClientRect());
    let {
      position: M
    } = eZ(S.hoverElement, _, f);
    let {
      position: F
    } = eZ(S.activeElement, _, f);
    reactCoreLibraryReexport.useEffect(() => {
      if (k.current) {
        P({
          width: k.current.clientWidth - c,
          height: k.current.clientHeight - c
        });
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (!b || !C) {
        return;
      }
      if (d !== "auto-fit") {
        v(d);
        return;
      }
      let e = Math.max(Math.min(C.width / b.width, C.height / b.height), 0.1);
      v(e);
      if (h != null) {
        h(e);
      }
    }, [d, b == null ? undefined : b.width, b == null ? undefined : b.height, C == null ? undefined : C.width, C == null ? undefined : C.height, h]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = N.current;
      if (!e) {
        return;
      }
      e.src = xssContentSanitizer.sanitizeUrl(I, null, {
        logType: "js.href/src",
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb%16$m5k-$dFbDBaRWRHZW1*N%1-c*lSMnhy$2xNe*J*cEhiREJpTTBsMll6Tktha3d5$*5aa$dFSjJZbTFXZFdSS$R-WlRSbEpP$k$W$2EyRll$blpq-$Rsd1ltM$NiR1ZETlRCak0ya*9ZMjFrT$dOM1B%MD0"
      });
      let t = new ee({
        htmlSource: o,
        $frame: e,
        mode: l
      });
      T.current = t;
      t.addListener("size-change", e => {
        x(e);
      });
      t.addListener("selectionchange", e => {
        j(e);
      });
      t.addListener("contentchange", async () => {
        w(e => e + 1);
        let e = await t.getHTMLSource();
        if (u != null) {
          u(e);
        }
      });
      return () => {
        t.destroy();
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      let t = () => {
        if (g != null) {
          g();
        }
      };
      if ((e = T.current) !== null && e !== undefined) {
        e.addListener("content-loaded", t);
      }
      return () => {
        var e;
        if ((e = T.current) !== null && e !== undefined) {
          e.removeListener("content-loaded", t);
        }
      };
    }, [g]);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      let t = e => {
        if (p != null) {
          p(e);
        }
      };
      if ((e = T.current) !== null && e !== undefined) {
        e.communication.addEventListener("keydown", t);
      }
      return () => {
        var e;
        if ((e = T.current) !== null && e !== undefined) {
          e.communication.removeEventListener("keydown", t);
        }
      };
    }, [p]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!k.current) {
        return;
      }
      let e = new ResizeObserver(e => {
        let t = e[e.length - 1];
        if (t) {
          P({
            width: t.contentRect.width - c,
            height: t.contentRect.height - c
          });
        }
      });
      e.observe(k.current);
      return () => {
        e.disconnect();
      };
    }, []);
    reactUseUpdateEffect.useUpdateEffect(() => {
      var e;
      if ((e = T.current) !== null && e !== undefined) {
        e.resetFrameDocSource(o);
      }
      j({
        hoverElement: null,
        activeElement: null
      });
    }, [o.id, o.version]);
    reactUseUpdateEffect.useUpdateEffect(() => {
      var e;
      if ((e = T.current) !== null && e !== undefined) {
        e.setMode(l);
      }
      j({
        hoverElement: null,
        activeElement: null
      });
    }, [l]);
    reactUseUpdateEffect.useUpdateEffect(() => {
      var e;
      if ((e = T.current) !== null && e !== undefined) {
        e.setFrameDocSource(o.source, o.streaming);
      }
    }, [o.source, o.streaming]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: eM["measure-size-sentinel"],
        ref: k
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: R,
        className: y(r, eM.wrapper, {
          [eM["scale-less-than-1"]]: _ < 1
        }),
        style: {
          ...s,
          ...(b ? {
            width: b.width * _,
            height: b.height * _
          } : {})
        },
        children: [reactJsxRuntimeCoreReexport.jsx("iframe", {
          ref: N,
          className: eM["frame-wrapper"],
          style: {
            ...b,
            transform: `scale(${_})`
          },
          frameBorder: "0",
          scrolling: "no"
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          ref: L,
          className: eM["menu-wrapper"],
          style: W ?? {
            top: -9999,
            left: -9999
          },
          children: l === "edit" && reactJsxRuntimeCoreReexport.jsx(eL, {
            renderCount: f,
            placement: Z ?? "bottom",
            htmlEditor: T.current,
            selection: S,
            getPopupContainer: m
          })
        }), M && l === "edit" && reactJsxRuntimeCoreReexport.jsx("div", {
          "data-tag": S.hoverElement?.tag,
          className: eM.mask,
          style: M
        }), F && l === "edit" && reactJsxRuntimeCoreReexport.jsx("div", {
          "data-tag": S.activeElement?.tag,
          className: eM.mask,
          style: F
        })]
      })]
    });
  };
  var codemirrorScrollEndHandler = require("codemirror-scroll-end-handler") /*id: 580557*/;
  var reactCodemirrorEditorComponent = require("react-codemirror-editor-component") /*id: 160872*/;
  let ez = e => {
    let {
      code: t,
      language: i,
      theme: n,
      isStreaming: r,
      onChange: s,
      editable: o
    } = e;
    let [l, c] = reactCoreLibraryReexport.useState(t);
    let d = reactCoreLibraryReexport.useRef(null);
    let u = reactCoreLibraryReexport.useRef(r);
    let h = reactCoreLibraryReexport.useCallback(debounceUtilWrapper.createDebounce(c, 200, {
      leading: true,
      trailing: true
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      h(t);
    }, [t]);
    let m = reactCoreLibraryReexport.useMemo(() => codemirrorScrollEndHandler.scrollEndHandler(e => {
      if (e) {
        if (r) {
          u.current = true;
        }
      } else {
        u.current = false;
      }
    }, {
      threshold: 12
    }), [r]);
    let p = reactCoreLibraryReexport.useMemo(() => [m], [m]);
    return reactJsxRuntimeCoreReexport.jsx(reactCodemirrorEditorComponent.CodeMirrorEditor, {
      ref: d,
      value: l,
      onChange: s,
      editable: !r && o,
      theme: n,
      language: i,
      extensions: p
    });
  };
  var eO = {
    wrapper: "wrapper-D3FAK2",
    "preview-container": "preview-container-WKQpZD",
    "preview-inner": "preview-inner-HRQh7I",
    "preview-card": "preview-card-d5UEqp",
    disabled: "disabled-LgGWQW",
    seq: "seq-Qj1u9Q",
    preview: "preview-eDCGPN",
    "preview-body": "preview-body-K76Q5a",
    ready: "ready-AnHaQN",
    failed: "failed-fUgNZB",
    active: "active-EJ6faJ",
    "code-container": "code-container-MnETuq",
    "filename-container": "filename-container-uzm76N",
    "code-editor-container": "code-editor-container-LXnxTo",
    "slide-page-loading-container": "slide-page-loading-container-e1KNyw",
    "slide-page-loading": "slide-page-loading-LIWIZg",
    "html-editor-container": "html-editor-container-JsgD_s",
    "presentation-container": "presentation-container-NEnVDj",
    "presentation-inner": "presentation-inner-YOnpkp",
    "toolbar-wrapper": "toolbar-wrapper-MrWsuj"
  };
  let eH = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      className: n,
      style: r,
      onSandboxKeyDown: s,
      htmlSources: o,
      onHtmlSourceChange: l,
      docMode: c = "readonly",
      viewMode: d,
      requestSearchImage: u,
      requestUploadImage: h,
      requestHTMLPreview: m,
      translations: p,
      enableSwitchSlide: g = true,
      page: _,
      onPageChange: v
    } = e;
    let [f, w] = reactCoreLibraryReexport.useState("auto-fit");
    let [b, x] = reactCoreLibraryReexport.useState(1);
    let [S, T] = reactCoreLibraryReexport.useState([]);
    let [E, L] = reactCoreLibraryReexport.useState({});
    let [W, Z] = reactCoreLibraryReexport.useState(false);
    let M = reactCoreLibraryReexport.useRef(null);
    let F = reactCoreLibraryReexport.useRef(null);
    let D = reactCoreLibraryReexport.useRef(null);
    let I = reactCoreLibraryReexport.useRef();
    let {
      isDarkMode: z
    } = N();
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      enterPresentation: () => Z(true)
    }));
    reactCoreLibraryReexport.useEffect(() => {
      let e = () => {
        if (!document.fullscreenElement) {
          Z(false);
        }
      };
      document.addEventListener("fullscreenchange", e);
      return () => {
        document.removeEventListener("fullscreenchange", e);
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      let e;
      (async () => {
        T((e = new O({
          sources: await R(o),
          editorContainerWidth: 1280,
          requestHTMLPreview: m
        })).getSources());
        I.current = e;
        e.addListener("sourceUpdate", () => {
          if (e) {
            T(e.getSources());
          }
        });
        e.addListener("thumbnailUpdate", e => {
          L(t => ({
            ...t,
            ...e.reduce((e, t) => {
              let {
                id: i,
                previewUrl: n
              } = t;
              e[i] = {
                previewUrl: n
              };
              return e;
            }, {})
          }));
        });
      })();
      return () => {
        if (e != null) {
          e.destroy();
        }
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (W) {
        var e;
        if ((e = D.current) !== null && e !== undefined) {
          e.requestFullscreen();
        }
      }
    }, [W]);
    reactCoreLibraryReexport.useEffect(() => {
      R(o).then(e => {
        var t;
        if ((t = I.current) !== null && t !== undefined) {
          t.setSources(e);
        }
      });
    }, [o]);
    let B = e => {
      if (g) {
        v(e);
      }
    };
    let A = () => F.current || document.body;
    let U = e => {
      var t;
      if ((t = I.current) !== null && t !== undefined) {
        t.setSource({
          ...e,
          streaming: false
        });
      }
      if (l != null) {
        l(e);
      }
    };
    let J = S.find(e => e.id === _) ?? lastElementHelper.getLastElement(S);
    return reactJsxRuntimeCoreReexport.jsx(H.Provider, {
      value: {
        requestSearchImage: u,
        requestUploadImage: h,
        requestHTMLPreview: m,
        translations: p
      },
      children: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: y(n, eO.wrapper),
          ref: M,
          style: r,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: eO["preview-container"],
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: eO["preview-inner"],
              children: S.map((e, t) => {
                let {
                  id: i,
                  streaming: n
                } = e;
                let a = t + 1;
                let r = E[i];
                if (!n && (r == null ? undefined : r.previewUrl)) {
                  return reactJsxRuntimeCoreReexport.jsxs("div", {
                    className: y(eO["preview-card"], {
                      [eO.disabled]: !g
                    }),
                    onClick: () => B(i),
                    children: [reactJsxRuntimeCoreReexport.jsx("div", {
                      className: eO.seq,
                      children: a
                    }), reactJsxRuntimeCoreReexport.jsx("div", {
                      className: y(eO.preview, {
                        [eO.active]: i === (J == null ? undefined : J.id)
                      }),
                      children: reactJsxRuntimeCoreReexport.jsx("div", {
                        className: y(eO["preview-body"], eO.ready),
                        style: {
                          backgroundImage: `url(${r.previewUrl})`
                        }
                      })
                    })]
                  }, i);
                } else {
                  return reactJsxRuntimeCoreReexport.jsxs("div", {
                    className: y(eO["preview-card"], {
                      [eO.disabled]: !g
                    }),
                    onClick: () => B(i),
                    children: [reactJsxRuntimeCoreReexport.jsx("div", {
                      className: eO.seq,
                      children: a
                    }), reactJsxRuntimeCoreReexport.jsx("div", {
                      className: y(eO.preview, {
                        [eO.active]: i === (J == null ? undefined : J.id)
                      }),
                      children: reactJsxRuntimeCoreReexport.jsx("div", {
                        className: eO["preview-body"],
                        children: (r == null ? undefined : r.previewUrl) === "" ? reactJsxRuntimeCoreReexport.jsx("div", {
                          className: eO.failed,
                          children: reactJsxRuntimeCoreReexport.jsx(j, {})
                        }) : reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton, {
                          placeholder: reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Image, {
                            style: {
                              width: 102,
                              height: 56
                            }
                          }),
                          loading: true,
                          active: true
                        })
                      })
                    })]
                  }, i);
                }
              })
            })
          }), J ? d === "preview" ? k(J.source) ? reactJsxRuntimeCoreReexport.jsx("div", {
            className: eO["html-editor-container"],
            ref: F,
            children: reactJsxRuntimeCoreReexport.jsx(eF, {
              mode: c,
              scale: f,
              containerSizePadding: 40,
              htmlSource: {
                ...J
              },
              onSandboxKeyDown: s,
              onHTMLSourceChange: U,
              onAutoFitScaleValueChange: x,
              getPopupContainer: A
            })
          }) : reactJsxRuntimeCoreReexport.jsx("div", {
            className: eO["slide-page-loading-container"],
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: eO["slide-page-loading"],
              children: reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton, {
                placeholder: reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Image, {
                  style: {
                    width: "100%",
                    aspectRatio: 16 / 9
                  }
                }),
                loading: true,
                active: true
              })
            })
          }) : reactJsxRuntimeCoreReexport.jsxs("div", {
            className: eO["code-container"],
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: eO["filename-container"],
              children: "index.html"
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: eO["code-editor-container"],
              children: reactJsxRuntimeCoreReexport.jsx(ez, {
                code: J.source,
                language: "html",
                editable: c === "edit",
                isStreaming: J.streaming,
                theme: z ? "dark" : "light",
                onChange: e => {
                  if (U != null) {
                    U({
                      id: J.id,
                      source: e
                    });
                  }
                }
              }, `${J.id}-${J.version}`)
            })]
          }) : null, d === "preview" && reactJsxRuntimeCoreReexport.jsx("div", {
            className: eO["toolbar-wrapper"],
            children: reactJsxRuntimeCoreReexport.jsx(K, {
              totalPages: S.length,
              currentPage: S.findIndex(e => e.id === (J == null ? undefined : J.id)) + 1,
              isAutoFitScale: f === "auto-fit",
              scale: f === "auto-fit" ? b : f,
              onPageChange: e => {
                let t = S[e - 1];
                if (t) {
                  B(t.id);
                }
              },
              onScaleChange: w,
              getPopupContainer: () => M.current || document.body
            })
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: eO["presentation-container"],
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: y(eO["presentation-inner"], "super-task-slides-presentation"),
            ref: D,
            children: W && reactJsxRuntimeCoreReexport.jsx(ei, {
              htmlSources: S
            })
          })
        })]
      })
    });
  });
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var spinnerLoadingExport = require("spinner-loading-export") /*id: 372882*/;
  var serviceRequestHelpers = require("service-request-helpers") /*id: 410370*/;
  let eq = e => serviceRequestHelpers.normalRequest({
    url: "/samantha/supertask/html_preview",
    method: "POST",
    data: {
      contents: e
    }
  }, {
    overrideConfig: {
      timeout: 10000
    }
  });
  var artifactDownloadHandler = require("artifact-download-handler") /*id: 82912*/;
  let eX = (e, t, i) => {
    let n = t === layoutPptExporter.ExportType.ExportPPT ? 15000 : t === layoutPptExporter.ExportType.ExportPDF ? 12000 : 500;
    let a = samanthaToastFactory.customToastFactory.create({
      getPopupContainer: i == null ? undefined : i.getPopupContainer
    });
    let r = a.info({
      className: "wrapper-nXD6LQ",
      icon: reactJsxRuntimeCoreReexport.jsx(artifactDownloadHandler.DownloadProgress, {
        estimateDuration: n
      }),
      content: e,
      duration: 0
    });
    return () => a.close(r);
  };
  var artifactExportExtension = require("artifact-export-extension") /*id: 364596*/;
  let eK = e => e.map(e => {
    return {
      ...e,
      version: [e.version ?? "", e.__version__ ?? 1].join("$$")
    };
  });
  let eG = e => {
    let [t, i] = reactCoreLibraryReexport.useState(e);
    reactCoreLibraryReexport.useEffect(() => {
      i(t => e.map(e => {
        let n = t.find(t => t.id === e.id);
        if (n && !n.streaming && n.version === e.version) {
          return {
            ...n
          };
        } else {
          return {
            ...e,
            __version__: (n == null ? undefined : n.__version__) ?? 1
          };
        }
      }));
    }, [e]);
    return {
      htmlSources: eK(t),
      increaseStableHtmlSourceVersion: e => {
        i(t => t.map(t => {
          if (t.id === e && !t.streaming) {
            return {
              ...t,
              __version__: (t.__version__ ?? 1) + 1
            };
          }
          return {
            ...t
          };
        }));
      },
      updateStableHtmlSource: (e, t) => {
        i(i => i.map(i => i.id !== e || i.streaming ? {
          ...i
        } : {
          ...i,
          source: t
        }));
      }
    };
  };
  let eY = e => {
    let t = t => {
      switch (t) {
        case "ArrowUp":
        case "ArrowLeft":
          e("prev");
          break;
        case "ArrowDown":
        case "ArrowRight":
        case "Enter":
          e("next");
          break;
        default:
          return;
      }
    };
    return {
      switchPageHandler: e => {
        e.stopPropagation();
        t(e.key);
      },
      switchPage: t
    };
  };
  var e0 = {
    wrapper: "wrapper-u5FHJm",
    inner: "inner-KoTlK2",
    page: "page-xUr4EG",
    "page-wrapper": "page-wrapper-mt4atQ",
    loading: "loading-9UiPVG",
    viewer: "viewer-U1KITP"
  };
  let e1 = e => {
    let {
      htmlSource: t
    } = e;
    let [i, n] = reactCoreLibraryReexport.useState(true);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: e0["page-wrapper"],
      children: [i && reactJsxRuntimeCoreReexport.jsx("div", {
        className: e0.loading,
        children: reactJsxRuntimeCoreReexport.jsx(spinnerLoadingExport.Spinner, {
          color: "brand"
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: y(e0.viewer, {
          [e0.loading]: i
        }),
        children: reactJsxRuntimeCoreReexport.jsx(eF, {
          htmlSource: t,
          scale: "auto-fit",
          onLoad: () => n(false),
          containerSizePadding: 32,
          getPopupContainer: () => document.body
        })
      })]
    });
  };
  let e2 = e => {
    let {
      htmlSources: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: e0.wrapper,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: e0.inner,
        children: t.map(e => reactJsxRuntimeCoreReexport.jsx("div", {
          className: e0.page,
          children: reactJsxRuntimeCoreReexport.jsx(e1, {
            htmlSource: e
          })
        }, e.id))
      })
    });
  };
  var svgIconComponent_3 = require("svg-icon-component_3") /*id: 640572*/;
  var notificationShieldIcon = require("notification-shield-icon") /*id: 166704*/;
  var shieldCheckIcon = require("shield-check-icon") /*id: 467235*/;
  var sendEditIcon = require("send-edit-icon") /*id: 702123*/;
  var moveSvgIcon = require("move-svg-icon") /*id: 114428*/;
  var sparkIconComponent = require("spark-icon-component") /*id: 379120*/;
  var reactDownloadIcon = require("react-download-icon") /*id: 391488*/;
  var commonStatusTypes = require("common-status-types") /*id: 928220*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var svgArrowIconComponent = require("svg-arrow-icon-component") /*id: 336478*/;
  var warningCircleIcon = require("warning-circle-icon") /*id: 501963*/;
  var svgEyeIcon = require("svg-eye-icon") /*id: 448005*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let ts = async e => {
    let {
      conversationId: t,
      artifactId: i
    } = e;
    try {
      return (await apiServicesCollection.SamanthaApiService.GetArtifactShare({
        conversation_id: t,
        artifact_id: i
      })).data;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "get_artifact_share_error",
        error: e
      });
      throw e;
    }
  };
  let to = async e => {
    let {
      conversationId: t,
      artifactId: i
    } = e;
    try {
      return (await apiServicesCollection.SamanthaApiService.CreateOrGetArtifactShare({
        conversation_id: t,
        artifact_id: i
      })).data;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "create_or_get_artifact_share_error",
        error: e
      });
      throw e;
    }
  };
  let tl = async e => {
    let {
      shareId: t,
      sharePermission: i
    } = e;
    try {
      let e = await apiServicesCollection.SamanthaApiService.UpdateArtifactSharePermission({
        share_id: t,
        share_permission: i
      });
      if (e == null) {
        return undefined;
      } else {
        return e.data;
      }
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "update_artifact_share_permission_error",
        error: e
      });
      throw e;
    }
  };
  let tc = async e => {
    let {
      shareId: t
    } = e;
    try {
      return await apiServicesCollection.SamanthaApiService.ReviewArtifactShareContent({
        share_id: t
      });
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "review_artifact_share_content_error",
        error: e
      });
      throw e;
    }
  };
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var tu = clipboardCopyHelper;
  var useDebounceCallbackHook_1_1 = require("use-debounce-callback-hook_1_1") /*id: 420834*/;
  var typographyWrapperModule = require("typography-wrapper-module") /*id: 954330*/;
  var swapIcon = require("swap-icon") /*id: 755459*/;
  var svgCheckIcon = require("svg-check-icon") /*id: 362340*/;
  var infoCircleIcon_1 = require("info-circle-icon_1") /*id: 895807*/;
  let tv = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M5.00683 9.80181C5.31917 9.48953 5.82625 9.49064 6.13867 9.80278C6.45075 10.1152 6.45092 10.6213 6.13867 10.9336L4.71484 12.3584C2.80169 14.2718 2.80164 17.3738 4.71484 19.2871C6.62815 21.2002 9.73029 21.2002 11.6435 19.2871L13.0674 17.8623C13.3798 17.55 13.8868 17.5501 14.1992 17.8623C14.5116 18.1747 14.5115 18.6818 14.1992 18.9942L12.7744 20.418C10.2363 22.956 6.12114 22.956 3.58301 20.418C1.04535 17.8798 1.04515 13.7647 3.58301 11.2266L5.00683 9.80181ZM2.43457 2.43463C2.74699 2.12225 3.25302 2.12224 3.56543 2.43463L21.3154 20.1846C21.6278 20.497 21.6278 21.003 21.3154 21.3155C21.003 21.6279 20.497 21.6279 20.1845 21.3155L2.43457 3.56548C2.12218 3.25306 2.12216 2.74704 2.43457 2.43463ZM10.7275 14.2627L9.75097 15.2403C9.4776 15.5135 9.03407 15.5136 8.76074 15.2403C8.48784 14.9669 8.48762 14.5233 8.76074 14.25L9.7373 13.2725L10.7275 14.2627ZM11.2266 3.58306C13.7647 1.04524 17.8799 1.04522 20.4179 3.58306C22.956 6.12114 22.9568 10.2372 20.4189 12.7754L18.9941 14.1993C18.6818 14.5116 18.1747 14.5114 17.8623 14.1993C17.5502 13.8868 17.55 13.3797 17.8623 13.0674L19.2871 11.6436C21.2 9.73036 21.1999 6.62817 19.2871 4.7149C17.3738 2.80179 14.2707 2.80182 12.3574 4.7149L10.9336 6.13872C10.6212 6.45114 10.1142 6.45114 9.80175 6.13872C9.48983 5.82632 9.48964 5.32015 9.80175 5.00787L11.2266 3.58306ZM14.25 8.76079C14.5232 8.48773 14.9669 8.48788 15.2402 8.76079C15.5135 9.0341 15.5134 9.47765 15.2402 9.75102L14.2627 10.7276L13.2724 9.73735L14.25 8.76079Z",
      fill: "currentColor"
    })
  });
  var tf = {
    container: "container-tSwap_",
    header: "header-EtN8Ir",
    sharedHeader: "sharedHeader-zdF4R9",
    sharedBox: "sharedBox-O4UzpC",
    link: "link-gOXKaz",
    copy: "copy-Yre29m",
    actions: "actions-_DZSNH",
    info: "info-msi07w",
    stopShare: "stopShare-eJ9ciD"
  };
  let tw = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      copyingTime: i,
      i18nConfig: n,
      link: r,
      top: s,
      bottom: o,
      onCopy: l,
      onBeforeCopy: c,
      onAfterCopy: d,
      onStop: u,
      classname: h,
      linkBoxClassname: m,
      disabled: p = false,
      copyIcon: g = reactJsxRuntimeCoreReexport.jsx(swapIcon.SwapIcon, {})
    } = e;
    let _ = !!p && !!n.copyWarning;
    let [v, f] = reactCoreLibraryReexport.useState(false);
    useDebounceCallbackHook_1_1.useDebounceCallback(() => {
      f(false);
    }, v ? i : 0);
    let w = async (e, t, n) => {
      let a = e || r;
      if (i) {
        f(true);
      }
      try {
        await navigator.clipboard.write([new ClipboardItem({
          "text/plain": new Blob([a], {
            type: "text/plain"
          })
        })]);
      } catch (e) {
        tu(a);
      }
      if (d != null) {
        d(a, t, n);
      }
    };
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      handleCopyLink: w
    }));
    let b = reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
      color: "brand-filled",
      disabled: p,
      className: tf.copy,
      onClick: () => {
        if (c != null) {
          c();
        }
        if (l) {
          l(r);
          return;
        }
        w();
      },
      leadingIcon: v ? reactJsxRuntimeCoreReexport.jsx(svgCheckIcon.CheckIcon, {}) : g,
      children: v ? n.copying : n.copy
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: y(tf.container, h),
      children: [s, (n == null ? undefined : n.header) && reactJsxRuntimeCoreReexport.jsx("div", {
        className: y(tf.header, tf.sharedHeader),
        children: n.header
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: y(tf.sharedBox, m),
        children: [reactJsxRuntimeCoreReexport.jsx(typographyWrapperModule.TypographyWrapper.Text, {
          className: tf.link,
          ellipsis: {
            showTooltip: false
          },
          children: r
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          children: _ ? reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
            trigger: "hover",
            content: n.copyWarning,
            position: "top",
            children: b
          }) : b
        })]
      }), u && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: tf.actions,
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: tf.info,
          children: [reactJsxRuntimeCoreReexport.jsx(infoCircleIcon_1.InfoCircleIcon, {
            className: "mr-4 size-12"
          }), n.desc]
        }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          variant: "text",
          color: "grey-filled",
          className: tf.stopShare,
          onClick: u,
          leadingIcon: reactJsxRuntimeCoreReexport.jsx(tv, {}),
          children: n.stop
        })]
      }), o]
    });
  });
  let tb = e => ({
    trackShareClick: t => {
      if (e) {
        superTaskEventTracker.trackShareButtonClick({
          ...throttledOmitPathStringify.omitPathStringify(e, ["section_id", "content_sec_type"]),
          button_name: t
        });
      }
    },
    trackShareClickStatus: t => {
      let {
        button_name: i,
        share_id: n,
        status: a
      } = t;
      if (e) {
        superTaskEventTracker.trackShareButtonClickStatus({
          ...throttledOmitPathStringify.omitPathStringify(e, ["section_id", "content_sec_type"]),
          button_name: i,
          share_id: n,
          status: a
        });
      }
    }
  });
  function tx(e) {
    let {
      share_id: t,
      share_status: i,
      share_permission: n
    } = e ?? {};
    return reactCoreLibraryReexport.useMemo(() => {
      let e = n === commonStatusTypes.ReadStatus.Read;
      let a = i === commonStatusTypes.AccountStatus.Reviewing;
      let r = i === commonStatusTypes.AccountStatus.Ban;
      let s = i === commonStatusTypes.AccountStatus.ForeverBan;
      return {
        isOpenShared: e,
        isSharedReviewing: a,
        isSharedBan: r,
        isSharedForeverBan: s,
        isCloseSharedMode: !t || !!s || !!t && !e
      };
    }, [n, i]);
  }
  var ty = {
    "popover-container": "popover-container-PNXkfc",
    hidden: "hidden-EOa8DH",
    content: "content-nrQyMj",
    header: "header-l2B0FH",
    title: "title-Lhsq_l",
    desc: "desc-PvuAsJ",
    bottom: "bottom-dtMsND",
    divide: "divide-TSopI2",
    warning: "warning-OzkDED",
    text: "text-Hm7Izg",
    icon: "icon-nJDn8h",
    action: "action-EopGx5"
  };
  function tC(e) {
    return `https://www.doubao.com/share/ppt/${e}`;
  }
  let tP = e => {
    let {
      disabled: i,
      getArtifactInfo: n,
      genShareUrl: r = tC,
      reportBtnClick: s,
      commonReportParams: o
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let [c, d] = reactCoreLibraryReexport.useState(false);
    let [u, h] = reactCoreLibraryReexport.useState({});
    let m = reactCoreLibraryReexport.useRef(null);
    let {
      artifactId: p = "",
      conversationId: g = ""
    } = (n == null ? undefined : n()) || {};
    let _ = reactCoreLibraryReexport.useCallback((e, t) => {
      let i = false;
      ts({
        conversationId: t,
        artifactId: e
      }).then(function (e = {}) {
        let {
          share_info: t
        } = e;
        if (t && !i) {
          h(t);
        }
      });
      return () => {
        i = true;
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (p && g && c) {
        return _(p, g);
      }
    }, [p, g, c]);
    let v = reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(t$, {
        shareInfo: u,
        artifactId: p,
        conversationId: g,
        genShareUrl: r,
        updateShareInfo: h,
        handleCopyLink: m.current?.handleCopyLink
      }), reactJsxRuntimeCoreReexport.jsx(tS, {
        shareInfo: u,
        sharedCard: m,
        genShareUrl: r,
        updateShareInfo: h,
        commonReportParams: o
      })]
    });
    return reactJsxRuntimeCoreReexport.jsx(dbxPopoverComponents.DbxPopover, {
      zIndex: 2048,
      className: ty["popover-container"],
      onClickOutSide: () => d(false),
      visible: c,
      trigger: "custom",
      content: v,
      getPopupContainer: () => document.body,
      position: "bottomRight",
      children: reactJsxRuntimeCoreReexport.jsx("span", {
        className: "relative",
        children: reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
          zIndex: 2048,
          content: c ? "" : l("writing_canvas_tooltip_share"),
          position: "bottom",
          getPopupContainer: () => document.body,
          children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            variant: "icon",
            disabled: i,
            onClick: () => {
              if (!c && s != null) {
                s();
              }
              d(e => !e);
            },
            children: reactJsxRuntimeCoreReexport.jsx(svgArrowIconComponent.getArrowIcon, {})
          })
        })
      })
    });
  };
  let tS = e => {
    let {
      shareInfo: t,
      sharedCard: i,
      updateShareInfo: n,
      genShareUrl: a,
      commonReportParams: r
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    let {
      share_id: o = ""
    } = t ?? {};
    let {
      isSharedReviewing: l,
      isSharedBan: c,
      isCloseSharedMode: d
    } = tx(t);
    let {
      trackShareClick: u,
      trackShareClickStatus: h
    } = tb(r);
    let m = function (e, t, i, n) {
      let a = i18nTranslationUtils.useTranslationWithFallback();
      let {
        run: r
      } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
        if (!e) {
          if (n != null) {
            n({
              button_name: "stop_share",
              status: "0"
            });
          }
          return;
        }
        tl({
          shareId: e,
          sharePermission: commonStatusTypes.ReadStatus.None
        }).then(r => {
          if (r == null ? undefined : r.share_info) {
            if (t != null) {
              t(r.share_info);
            }
          }
          samanthaToastFactory.defaultToast.success({
            content: a("writing_shared_toast_stopped"),
            showClose: false,
            theme: "light"
          });
          if (i != null) {
            i("stop_share");
          }
          if (n != null) {
            n({
              status: "1",
              button_name: "stop_share",
              share_id: e
            });
          }
        }).catch(e => {
          if (n != null) {
            n({
              status: "0",
              button_name: "stop_share"
            });
          }
        });
      }, {
        trailing: false,
        leading: true,
        wait: 1000
      });
      return r;
    }(o, n, u, h);
    let p = function (e, t) {
      let i = i18nTranslationUtils.useTranslationWithFallback();
      let {
        run: n
      } = useDebouncedCallbackHook_1.useDebouncedCallback(async () => {
        if (!e) {
          return;
        }
        let n = await tc({
          shareId: e
        });
        if (n.data) {
          if (n.data?.result === commonStatusTypes.ChangeType.Normal) {
            if (t != null) {
              t(n.data?.share_info);
            }
            samanthaToastFactory.defaultToast.success({
              content: i("writing_shared_toast_submitedReview"),
              showClose: false,
              theme: "light"
            });
            return;
          }
          if (n.data?.result === commonStatusTypes.ChangeType.ContentNoChange) {
            samanthaToastFactory.defaultToast.warning({
              content: i("writing_shared_toast_editResubmit"),
              showClose: false,
              theme: "light"
            });
            return;
          }
        }
      }, {
        trailing: false,
        leading: true,
        wait: 1000
      });
      return n;
    }(o, n);
    return reactJsxRuntimeCoreReexport.jsx(tw, {
      classname: y({
        [ty.hidden]: d
      }),
      ref: i,
      copyingTime: 3000,
      i18nConfig: {
        header: s("writing_shared_window_header"),
        copying: s("writing_shared_status_copiedLink"),
        copy: s("writing_shared_btn_copyLink"),
        desc: s("writing_shared_window_desc"),
        stop: s("writing_shared_window_btn_stopShare")
      },
      link: a(o || ""),
      bottom: c || l ? reactJsxRuntimeCoreReexport.jsxs("div", {
        className: ty.bottom,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: ty.divide
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: ty.warning,
          children: [c && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              className: ty.text,
              children: [reactJsxRuntimeCoreReexport.jsx(warningCircleIcon.WarningCircleIcon, {
                className: ty.icon
              }), s("writing_shared_status_needRevise")]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: ty.action,
              onClick: p,
              children: s("writing_shared_btn_submitReview")
            })]
          }), l && reactJsxRuntimeCoreReexport.jsxs("div", {
            className: ty.text,
            children: [reactJsxRuntimeCoreReexport.jsx(warningCircleIcon.WarningCircleIcon, {
              className: ty.icon
            }), s("writing_shared_window_status_reviewing")]
          })]
        })]
      }) : null,
      onAfterCopy: (e, t, i) => {
        samanthaToastFactory.defaultToast.success({
          content: s("writing_shared_toast_copied"),
          showClose: false,
          theme: "light"
        });
        let n = t || "copy_link";
        if (u != null) {
          u(n);
        }
        let a = o || i;
        if (a) {
          if (h != null) {
            h({
              status: "1",
              button_name: n,
              share_id: a
            });
          }
        } else if (h != null) {
          h({
            status: "0",
            button_name: n
          });
        }
      },
      onStop: m
    });
  };
  let t$ = e => {
    let {
      shareInfo: t,
      updateShareInfo: i,
      artifactId: n,
      conversationId: r,
      handleCopyLink: s,
      genShareUrl: o
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let [c, d] = reactCoreLibraryReexport.useState(false);
    let {
      share_id: u
    } = t ?? {};
    let {
      isSharedForeverBan: h,
      isCloseSharedMode: m
    } = tx(t);
    let {
      run: p
    } = useDebouncedCallbackHook_1.useDebouncedCallback(async () => {
      let e;
      if (n && r && !h) {
        d(true);
        if (u) {
          let t = await tl({
            shareId: u,
            sharePermission: commonStatusTypes.ReadStatus.Read
          });
          e = t == null ? undefined : t.share_info;
        } else {
          let t = await to({
            conversationId: r,
            artifactId: n
          });
          e = t == null ? undefined : t.share_info;
        }
        if (e) {
          let t = o(e.share_id || "");
          i(e);
          if (s != null) {
            s(t, "open_share", e.share_id);
          }
        }
        d(false);
      }
    }, {
      trailing: false,
      leading: true,
      wait: 1000
    });
    if (m) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: y(ty.content),
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: ty.header,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: ty.title,
            children: l("writing_share_window_header")
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: ty.desc,
            children: l("writing_share_window_desc")
          })]
        }), reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
          zIndex: 2048,
          trigger: h ? "hover" : "custom",
          visible: h,
          content: h && l("writing_share_window_tooltip_shareNA"),
          position: "top",
          getPopupContainer: () => document.body,
          children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            color: "brand-filled",
            size: "md",
            disabled: h,
            className: "!h-36 !w-full",
            loading: c,
            onClick: p,
            leadingIcon: reactJsxRuntimeCoreReexport.jsx(svgEyeIcon.EyeIcon, {}),
            children: l(h ? "writing_share_window_shareNA" : "writing_share_window_btn_share")
          })
        })]
      });
    } else {
      return null;
    }
  };
  let tj = e => {
    let {
      title: t,
      slidesReady: i,
      isFinish: n,
      disableActions: a = [],
      onVisualEditClick: r,
      onCodeEditClick: s,
      onCloseClick: o,
      onPresentationClick: l,
      onDownloadClick: c,
      trackCanvasClick: d,
      commonReportParams: u,
      getArtifactInfo: h
    } = e;
    let m = i18nTranslationUtils.useTranslationWithFallback();
    let p = e => {
      if (c != null) {
        c(e);
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "caption-wUG4pp",
        children: [reactJsxRuntimeCoreReexport.jsx(svgIconComponent_3.svgIcon, {}), reactJsxRuntimeCoreReexport.jsx("span", {
          className: "title-niwmn0",
          children: t
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "menus-r7iR8c",
        children: [!a.includes("VisualEdit") && reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
          zIndex: 2048,
          trigger: i ? "custom" : "hover",
          content: i ? undefined : m("agent_PPT_edit_tooltip_generating"),
          children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            variant: "text",
            color: "grey-filled",
            size: "md2",
            onClick: () => {
              if (n && i) {
                if (r != null) {
                  r();
                }
              }
            },
            disabled: !n || !i,
            leadingIcon: reactJsxRuntimeCoreReexport.jsx(sendEditIcon.SendEditIcon, {}),
            children: m("agent_PPT_entry_edit")
          })
        }), !a.includes("CodeEdit") && reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
          zIndex: 2048,
          content: m("agent_PPT_view_code"),
          getPopupContainer: () => document.body,
          children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            variant: "icon",
            disabled: !n,
            onClick: () => {
              if (n) {
                if (s != null) {
                  s();
                }
              }
            },
            children: reactJsxRuntimeCoreReexport.jsx(moveSvgIcon.MoveIcon, {})
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: y("actions-ZlUPo0", "super-task-slide-canvas-header-action"),
        children: [a.includes("Presentation") ? null : reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          variant: "text",
          color: "grey-filled",
          disabled: !i,
          size: "md2",
          leadingIcon: reactJsxRuntimeCoreReexport.jsx(sparkIconComponent.SparkIcon, {}),
          onClick: () => {
            if (i) {
              if (l != null) {
                l();
              }
            }
          },
          children: m("agent_PPT_entry_play")
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "divider-GnnCtP"
        }), a.includes("Share") ? null : reactJsxRuntimeCoreReexport.jsx(tP, {
          disabled: !i,
          commonReportParams: u,
          getArtifactInfo: h,
          reportBtnClick: () => d("share")
        }), i ? reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
          onOpenChange: e => {
            if (e) {
              d("download");
            }
          },
          children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {
            children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
              disabled: !i,
              variant: "icon",
              color: "grey-filled",
              children: reactJsxRuntimeCoreReexport.jsx(reactDownloadIcon.DownloadIcon, {})
            })
          }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
            children: reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
              side: "bottom",
              align: "end",
              style: {
                zIndex: 2048
              },
              children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuItemWithVariants, {
                icon: reactJsxRuntimeCoreReexport.jsx(svgIconComponent_3.svgIcon, {}),
                onClick: () => p(layoutPptExporter.ExportType.ExportPPT),
                children: m("agent_PPT_download_format_pptx")
              }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuItemWithVariants, {
                icon: reactJsxRuntimeCoreReexport.jsx(notificationShieldIcon.NotificationShieldIcon, {}),
                onClick: () => p(layoutPptExporter.ExportType.ExportPDF),
                children: m("agent_PPT_download_format_pdf")
              }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuItemWithVariants, {
                icon: reactJsxRuntimeCoreReexport.jsx(shieldCheckIcon.shieldCheckIcon, {}),
                onClick: () => p(layoutPptExporter.ExportType.ExportHTMLZIP),
                children: m("agent_PPT_download_format_html")
              })]
            })
          })]
        }) : null, !a.includes("CloseCanvas") && reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
          zIndex: 2048,
          content: m("agent_PPT_tooltip_close"),
          getPopupContainer: () => document.body,
          children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            variant: "icon",
            color: "grey-filled",
            onClick: o,
            children: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1_1.CloseIcon, {})
          })
        })]
      })]
    });
  };
  var infoOutlinedIcon = require("info-outlined-icon") /*id: 154400*/;
  var chevronRightIcon_1 = require("chevron-right-icon_1") /*id: 839336*/;
  let tR = e => {
    let {
      caption: t,
      onExitEditClick: i,
      onCloseClick: n,
      onSaveClick: r,
      hasUnsavedChange: s = false,
      onCloseExitEditBtnClick: o
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let [c, d] = reactCoreLibraryReexport.useState(false);
    let [u, h] = reactCoreLibraryReexport.useState(false);
    let [m, p] = reactCoreLibraryReexport.useState(false);
    let g = async () => {
      d(true);
      try {
        await (r == null ? undefined : r());
      } catch (e) {}
      d(false);
    };
    let _ = () => reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "box-border flex-column flex w-[248px]",
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex justify-between gap-8",
        children: [reactJsxRuntimeCoreReexport.jsx(infoOutlinedIcon.InfoOutlinedIcon, {
          className: "mt-3 size-16 shrink-0"
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex-1 text-14 leading-22 text-dbx-text-primary",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "mb-4 font-[500]",
            children: l("agent_PPT_saveConfirm_header")
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            children: l("agent_PPT_saveConfirm_desc")
          })]
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "mt-10 flex w-full justify-end gap-10",
        children: [reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          size: "sm",
          variant: "rectangle",
          color: "grey-filled",
          onClick: () => {
            h(false);
            p(false);
            if (m) {
              if (n != null) {
                n();
              }
            } else {
              if (o != null) {
                o();
              }
              if (i != null) {
                i();
              }
            }
          },
          children: l("agent_PPT_saveConfirm_btn_notSave")
        }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          size: "sm",
          variant: "rectangle",
          color: "brand-filled",
          onClick: async () => {
            h(false);
            p(false);
            await g();
            if (m) {
              setTimeout(() => {
                if (n != null) {
                  n();
                }
              }, 800);
            }
          },
          children: l("agent_PPT_saveConfirm_btn_save")
        })]
      })]
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(dbxPopoverComponents.DbxPopover, {
        zIndex: 2048,
        trigger: "custom",
        visible: u,
        onClickOutSide: () => {
          h(false);
        },
        position: "bottomLeft",
        content: _(),
        getPopupContainer: () => document.body,
        children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          variant: "text",
          leadingIcon: reactJsxRuntimeCoreReexport.jsx(chevronRightIcon_1.ChevronRightIcon, {}),
          onClick: () => {
            if (!s) {
              if (i != null) {
                i();
              }
              return;
            }
            p(false);
            h(true);
          },
          children: t
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex flex-1 shrink-0 items-center justify-end gap-10",
        children: [reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          size: "md2",
          variant: "rectangle",
          color: "brand-filled",
          leadingIcon: reactJsxRuntimeCoreReexport.jsx(svgCheckIcon.CheckIcon, {}),
          disabled: !s,
          loading: c,
          onClick: g,
          children: l("agent_PPT_saveConfirm_btn_save")
        }), reactJsxRuntimeCoreReexport.jsx(dbxPopoverComponents.DbxPopover, {
          zIndex: 2048,
          trigger: "custom",
          visible: m,
          onClickOutSide: () => {
            p(false);
          },
          position: "bottomRight",
          content: _(),
          getPopupContainer: () => document.body,
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            className: "relative",
            children: reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
              zIndex: 2048,
              content: m ? "" : l("agent_PPT_tooltip_close"),
              getPopupContainer: () => document.body,
              children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
                variant: "icon",
                onClick: () => {
                  if (!s) {
                    if (n != null) {
                      n();
                    }
                    return;
                  }
                  h(false);
                  p(true);
                },
                children: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1_1.CloseIcon, {})
              })
            })
          })
        })]
      })]
    });
  };
  var tN = {
    loading: "loading-uvdfym",
    wrapper: "wrapper-LRc2GS",
    mobile: "mobile-ktOnry",
    header: "header-_yeC9W",
    body: "body-zwL4Mr"
  };
  let tE = e => {
    let {
      className: t,
      style: i,
      title: n,
      htmlSources: r,
      defaultPage: o,
      slidesReady: l,
      isMobile: c = false,
      shareMode: d = false,
      isSharedConversation: u = false,
      commonReportParams: m,
      onCloseCanvas: p,
      onSaveChange: g,
      requestSearchImage: _,
      requestUploadImage: v,
      requestExportPPT: f,
      getArtifactInfo: w
    } = e;
    let b = reactCoreLibraryReexport.useRef(null);
    let [x, C] = reactCoreLibraryReexport.useState("preview");
    let [P, S] = reactCoreLibraryReexport.useState(false);
    let [j, k] = reactCoreLibraryReexport.useState(o ?? "");
    let [T, R] = reactCoreLibraryReexport.useState(!o && !l);
    let [N, E] = reactCoreLibraryReexport.useState(false);
    let L = reactCoreLibraryReexport.useRef(null);
    let W = reactCoreLibraryReexport.useRef(null);
    let Z = i18nTranslationUtils.useTranslationWithFallback();
    let M = {
      agent_PPT_image_searchWeb: Z("agent_PPT_image_searchWeb"),
      agent_PPT_image_searchWeb_desc: Z("agent_PPT_image_searchWeb_desc"),
      agent_PPT_image_btn_replace: Z("agent_PPT_image_btn_replace"),
      agent_PPT_image_btn_cancel: Z("agent_PPT_image_btn_cancel"),
      agent_PPT_toolbar_font: Z("agent_PPT_toolbar_font"),
      agent_PPT_toolbar_color: Z("agent_PPT_toolbar_color"),
      agent_PPT_toolbar_fontColor: Z("agent_PPT_toolbar_fontColor"),
      agent_PPT_toolbar_bold: Z("agent_PPT_toolbar_bold"),
      agent_PPT_toolbar_italic: Z("agent_PPT_toolbar_italic"),
      agent_PPT_toolbar_underline: Z("agent_PPT_toolbar_underline"),
      agent_PPT_image_generate: Z("agent_PPT_image_generate"),
      agent_PPT_image_generate_placeholder: Z("agent_PPT_image_generate_placeholder"),
      agent_PPT_image_localUpload: Z("agent_PPT_image_localUpload"),
      agent_PPT_image_upload_clickDrag: Z("agent_PPT_image_upload_clickDrag"),
      agent_PPT_image_upload_btn_reupload: Z("agent_PPT_image_upload_btn_reupload"),
      agent_PPT_image_gen_fail_retry: Z("agent_PPT_image_gen_fail_retry"),
      agent_PPT_image_searchWeb_fail_retry: Z("agent_PPT_image_searchWeb_fail_retry"),
      agent_PPT_image_searchWeb_noResult: Z("agent_PPT_image_searchWeb_noResult"),
      agent_PPT_zoom_fit: Z("agent_PPT_zoom_fit")
    };
    let F = () => b.current || document.body;
    let D = reactCoreLibraryReexport.useMemo(() => samanthaToastFactory.customToastFactory.create({
      getPopupContainer: F
    }), []);
    let I = !c && !d && !u && !!l && P;
    let {
      htmlSources: z,
      increaseStableHtmlSourceVersion: O,
      updateStableHtmlSource: H
    } = eG(r);
    let B = e => {
      if (m) {
        superTaskEventTracker.trackOutputPreviewClick({
          ...throttledOmitPathStringify.omitPathStringify(m, ["section_id"]),
          button_name: e
        });
      }
    };
    let A = !!j && z.some(e => e.id === j && !e.streaming);
    let {
      switchPageHandler: U,
      switchPage: J
    } = eY(e => {
      if (!I && x !== "code") {
        setTimeout(() => {
          var e;
          if ((e = b.current) !== null && e !== undefined) {
            e.focus();
          }
        }, 200);
        if (e === "prev") {
          k(e => {
            let i = Math.max(0, z.findIndex(t => t.id === e) - 1);
            return z[i]?.id || e;
          });
          return;
        }
        if (e === "next") {
          k(e => {
            let i = z.findIndex(t => t.id === e);
            let n = Math.min(z.length - 1, i + 1);
            return z[n]?.id || e;
          });
          return;
        }
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (z.length > 0) {
        if (T) {
          k(z[z.length - 1].id);
        } else {
          k(e => e || z[0].id);
        }
      }
    }, [z.length, T]);
    reactCoreLibraryReexport.useEffect(() => {
      if (j) {
        var e;
        if ((e = b.current) !== null && e !== undefined) {
          e.focus();
        }
      }
    }, [!!j]);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if ((e = b.current) !== null && e !== undefined) {
        e.focus();
      }
    }, [x, P]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        if (N) {
          e.preventDefault();
          e.returnValue = "";
        }
      };
      window.addEventListener("beforeunload", e);
      return () => {
        window.removeEventListener("beforeunload", e);
      };
    }, [N]);
    let q = async () => {
      if (!W.current) {
        E(false);
        C("preview");
        S(false);
        return;
      }
      try {
        await g(W.current.id, W.current.source);
        H(W.current.id, W.current.source);
        E(false);
        D.success(Z("agent_PPT_toast_saved"));
        C("preview");
        S(false);
      } catch (e) {
        D.error(Z("agent_PPT_toast_saveFail"));
      }
    };
    let V = async e => {
      let t = await eq(e);
      if (t.code === 0) {
        return t.page_urls;
      }
      throw Error("html preview failed");
    };
    if (j) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: y(tN.wrapper, t, {
          [tN.mobile]: c
        }),
        ref: b,
        onKeyDown: U,
        tabIndex: -1,
        style: i,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: tN.header,
          children: P ? reactJsxRuntimeCoreReexport.jsx(tR, {
            caption: x === "code" ? Z("agent_PPT_view_code") : Z("agent_PPT_entry_edit"),
            onExitEditClick: () => {
              if (N && A) {
                O(j);
                E(false);
              }
              C("preview");
              S(false);
            },
            onCloseExitEditBtnClick: () => B("aippt_edit_close"),
            onCloseClick: () => {
              if (p != null) {
                p();
              }
              B("close");
            },
            onSaveClick: async () => {
              await q();
              B("aippt_edit_save");
            },
            hasUnsavedChange: N
          }) : reactJsxRuntimeCoreReexport.jsx(tj, {
            title: n,
            slidesReady: l,
            getPopupContainer: F,
            disableActions: (() => {
              let e = new Set();
              if (d) {
                e.add("VisualEdit");
                e.add("CodeEdit");
                e.add("Share");
              }
              if (d && !c) {
                e.add("CloseCanvas");
              }
              if (c) {
                e.add("Presentation");
              }
              if (u) {
                e.add("VisualEdit");
                e.add("CodeEdit");
                e.add("Share");
              }
              return [...e];
            })(),
            isFinish: A,
            getArtifactInfo: w,
            onVisualEditClick: () => {
              C("preview");
              S(true);
              R(false);
              B("aippt_edit");
            },
            commonReportParams: m,
            trackCanvasClick: B,
            onDownloadClick: e => {
              if (m) {
                superTaskEventTracker.trackDownload({
                  ...m,
                  click_from: "canvas_function",
                  content_type: "ai_ppt",
                  content_sec_type: artifactExportExtension.getExportExtension(e)
                });
              }
              let t = eX(Z("agent_PPT_toast_exporting"), e, {
                getPopupContainer: F
              });
              f(e).catch(() => {
                D.error(Z("agent_PPT_toast_exportFail"));
              }).finally(t);
            },
            onCodeEditClick: () => {
              C("code");
              S(true);
              R(false);
              B("aippt_code_edit");
            },
            onPresentationClick: () => {
              var e;
              if ((e = L.current) !== null && e !== undefined) {
                e.enterPresentation();
              }
              B("play");
            },
            onCloseClick: () => {
              if (p != null) {
                p();
              }
              B("close");
            }
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: tN.body,
          children: c ? reactJsxRuntimeCoreReexport.jsx(e2, {
            htmlSources: z
          }) : reactJsxRuntimeCoreReexport.jsx(eH, {
            ref: L,
            translations: M,
            requestHTMLPreview: V,
            viewMode: x,
            docMode: I ? "edit" : "readonly",
            enableSwitchSlide: !N,
            htmlSources: z,
            page: j,
            onPageChange: k,
            onSandboxKeyDown: J,
            onHtmlSourceChange: e => {
              R(false);
              W.current = {
                id: e.id,
                source: e.source
              };
              E(true);
            },
            requestSearchImage: _,
            requestUploadImage: v
          })
        })]
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: tN.loading,
        children: reactJsxRuntimeCoreReexport.jsx(spinnerLoadingExport.Spinner, {
          color: "brand"
        })
      });
    }
  };
  let tL = e => {
    let {
      isMobile: t = false,
      shareMode: i = false,
      isSharedConversation: n = false,
      defaultPage: a,
      htmlSources: r,
      onCloseCanvas: s,
      isCompleted: o,
      resourceMeta: l,
      commonReportParams: c,
      getArtifactInfo: d
    } = e;
    let u = async e => {
      let t = await apiServicesCollection.SamanthaApiService.SearchCodeImages({
        artifact_id: l.resource_id,
        queries: [e],
        limit: 1
      });
      if (t.data.images) {
        return t.data.images.map(e => e.url).filter(Boolean);
      } else {
        return [];
      }
    };
    let h = async e => {
      let t = {
        image_generation_content: {
          content: e,
          scene: aiPptImageConstants.imageTypes.ImgRegen
        }
      };
      let i = await samanthaCodeAssistantImageService.generateImagesFromPrompt({
        mode: "samantha",
        text: e,
        scene: aiPptImageConstants.imageTypes.ImgRegen,
        ext: {
          reference_content: JSON.stringify([{
            type: "text",
            extra: {
              context_variables: JSON.stringify(t || {})
            }
          }])
        }
      });
      if (i) {
        return i.map(e => e.url).filter(Boolean);
      } else {
        return [];
      }
    };
    let x = async (e, t) => {
      let i = r.find(t => t.id === e);
      await apiServicesCollection.SamanthaApiService.UpdateCodeArtifact({
        code_id: l.resource_id,
        code_version: Number(l.resource_version),
        nodes: [{
          node_id: e,
          content: t,
          description: i == null ? undefined : i.description,
          language: i == null ? undefined : i.language,
          path: i == null ? undefined : i.path,
          review_status: i == null ? undefined : i.review_status
        }],
        artifact_meta: {}
      });
    };
    return reactJsxRuntimeCoreReexport.jsx(tE, {
      title: l.title || "",
      isMobile: t,
      shareMode: i,
      isSharedConversation: n,
      defaultPage: a,
      slidesReady: o,
      htmlSources: r,
      commonReportParams: c,
      onSaveChange: x,
      getArtifactInfo: d,
      onCloseCanvas: s,
      requestExportPPT: e => layoutPptExporter.exportPpt(l.resource_id, l.resource_version, e),
      requestSearchImage: (e, t) => t === "ai-generation" ? h(e) : u(e),
      requestUploadImage: (e, t) => {
        let i = new fileUploaderService.UploaderService({
          userId: chatUserInfoActions.getUserIdStr() || "",
          appId: uniParamsManager.uniParamsManager.getParam("aid"),
          type: aiSpaceAttachmentConstants.attachmentTypes.Image,
          scene: aiSpaceAttachmentConstants.spaceSceneIds.BOT_CHAT
        });
        return new Promise((n, a) => {
          i.upload(e, {
            progress: e => {
              t(e.percent);
            },
            complete: async t => {
              var r;
              var o;
              if (!t.uploadResult.Uri) {
                a(Error("upload failed"));
                return;
              }
              let l = t.uploadResult.Uri;
              let c = e.type.split("/")[1];
              let {
                data: d
              } = await apiServicesCollection.ResourceApiService.GetFileURL({
                uris: [l],
                type: "image",
                format: c,
                expire_second: 3600
              });
              let u = (d == null ? undefined : (r = d.file_urls) === null || r === undefined ? undefined : r[0]?.main_url) || (d == null ? undefined : (o = d.file_urls) === null || o === undefined ? undefined : o[0]?.back_url);
              if (!u) {
                a(Error("cdn url not found"));
                return;
              }
              n(u);
            },
            error: e => {
              a(e);
            }
          });
        });
      }
    });
  };
  var chatBlockManagerAndToolDataCache = require("chat-block-manager-and-tool-data-cache") /*id: 247150*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  function tM(e = [], t, i) {
    let n = [...e];
    if (i) {
      let e = new Set();
      n.forEach(t => e.add(t.id));
      i.map(e => ({
        id: `${e.node_id}` || "",
        source: e.source || "",
        description: e.description || "",
        language: e.language || "",
        path: e.path || "",
        review_status: 1,
        streaming: e.status === 1,
        version: e.version
      })).filter(e => e.version === t).filter(t => !e.has(t.id)).forEach(e => n.push(e));
    }
    return n;
  }
  let tF = e => {
    var n;
    let {
      content_obj: m,
      localPageData: p,
      onCloseCanvas: g,
      shareMode: _,
      isMobile: f = false,
      selectedPageNodeId: w,
      messageId: b,
      conversationId: x = ""
    } = e;
    let {
      resource_id: y = "",
      resource_version: C = 0,
      artifact_topic: P = ""
    } = m || {};
    let [S, j] = reactCoreLibraryReexport.useState((m == null ? undefined : m.version) || 0);
    let {
      status: k,
      data: T
    } = function (e, t) {
      let [i, n] = reactCoreLibraryReexport.useState(undefined);
      let [r, s] = reactCoreLibraryReexport.useState("pending");
      reactCoreLibraryReexport.useEffect(() => {
        let i = false;
        s("pending");
        if (!e || !t) {
          s("error");
          n(undefined);
          return;
        }
        apiServicesCollection.SamanthaApiService.GetCodeArtifact({
          code_id: e,
          version: t
        }).then(e => {
          if (!i) {
            n(e.data);
            s("done");
          }
        }).catch(e => {
          n(undefined);
          s("error");
        });
        return () => {
          i = true;
        };
      }, [e, t]);
      return {
        status: r,
        data: i
      };
    }(y, C);
    let [R, N] = reactCoreLibraryReexport.useState(w);
    let [E, L] = reactCoreLibraryReexport.useState([]);
    let [W, Z] = reactCoreLibraryReexport.useState(false);
    let [M, F] = reactCoreLibraryReexport.useState((m == null ? undefined : m.status) === 2);
    let D = reactCoreLibraryReexport.useMemo(() => {
      var e;
      return (T == null ? undefined : (e = T.nodes) === null || e === undefined ? undefined : e.map(e => ({
        id: `${e.node_id}` || "",
        source: e.content || "",
        description: e.description || "",
        language: e.language || "",
        path: e.path || "",
        review_status: e.review_status || 1,
        streaming: false,
        version: S
      }))) || [];
    }, [T]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!(m == null ? undefined : m.resource_id) || !W) {
        return;
      }
      let e = m.resource_id;
      let t = chatBlockManagerAndToolDataCache.chatPageDataManager;
      let i = t.onPageDataStreamDataUpdate(e, e => {
        L(tM(D, S, e));
      });
      let n = t.onPageSelectChange(e, e => {
        let {
          version: t,
          selectedPageNodeId: i,
          isFinish: n = false
        } = e || {};
        j(t);
        N(i);
        F(n);
      });
      return () => {
        i();
        n();
      };
    }, [m == null ? undefined : m.resource_id, W, S, D]);
    reactCoreLibraryReexport.useEffect(() => {
      if (k !== "pending") {
        Z(true);
        L(tM(D, S, p));
      }
    }, [D, k, p, m, S]);
    let I = conversationMessageUtils_1.getMessageById(chatMessageStoreFactory.createMessageStore.getState(), x || "", b || "");
    let z = {
      super_task_id: (I == null ? undefined : I.async_task?.id) || "",
      super_task_mode: (I == null ? undefined : (n = I.verbose) === null || n === undefined ? undefined : n.super_task?.supertask_task_type) === "0" ? "search_task" : "complex_task",
      content_sec_type: "ppt",
      bot_id: I == null ? undefined : I.bot_id,
      message_id: (I == null ? undefined : I.message_id) || b || "",
      section_id: (I == null ? undefined : I.section_id) || "",
      conversation_id: (I == null ? undefined : I.conversation_id) || x || "",
      canvas_type: "ai_ppt"
    };
    (function (e) {
      let {
        messageId: t,
        extraParams: i = {}
      } = e;
      let n = reactCoreLibraryReexport.useCallback(async () => {
        let e = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
        let t = (e == null ? undefined : e.getCanvasTeaParams()) || {};
        superTaskEventTracker.trackRightClickCopyPpt({
          ...t,
          ...i
        });
      }, [t]);
      let s = useLatestCallbackHook_1.useLatestCallback(e => {
        if (objectPathGetDefault.getObjectPathDefault(e, "data.type") === "ppt.event.copy") {
          n();
        }
      });
      reactCoreLibraryReexport.useEffect(() => {
        window.addEventListener("message", s);
        let e = document.querySelector("[data-testid=\"canvas_panel_container\"]");
        if (e != null) {
          e.addEventListener("copy", n, true);
        }
        return () => {
          window.removeEventListener("message", s);
          if (e != null) {
            e.removeEventListener("copy", n, true);
          }
        };
      }, [s, n]);
    })({
      messageId: b,
      message: I,
      extraParams: {
        ...z,
        artifact_type: objectPathGetDefault.getObjectPathDefault(m, "resource_content_type")
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!p) {
        superTaskEventTracker.trackOutputPreviewShow(throttledOmitPathStringify.omitPathStringify(z, ["section_id"]));
      }
    }, []);
    let O = reactCoreLibraryReexport.useCallback(() => {
      if (g != null) {
        g();
      }
      if (!_) {
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
      }
    }, [g, _]);
    let H = messageContentTypeAndStatusChecker.F3w(I);
    let B = !!(I == null ? undefined : I.conversation_id) && !!chatFeedConversationUtil.isLocalConversation(I.conversation_id);
    let A = reactCoreLibraryReexport.useCallback(() => ({
      artifactId: P,
      conversationId: x
    }), [x, P]);
    return reactJsxRuntimeCoreReexport.jsx(tL, {
      shareMode: !!_,
      isMobile: f,
      isSharedConversation: H || B,
      defaultPage: R !== undefined ? `${R}` : undefined,
      resourceMeta: m,
      htmlSources: E,
      isCompleted: M,
      onCloseCanvas: O,
      getArtifactInfo: A,
      commonReportParams: p ? undefined : z
    });
  };
  require.d(exports, {
    AiPptCanvasComponent: function () {
      return tF;
    }
  });
}