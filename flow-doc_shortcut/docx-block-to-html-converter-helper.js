// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getInlineMentionTypeAttr'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 260169
         */
module.exports = function (module, exports, require) {
  var r;
  var l;
  var o;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var arrayFilterExtractMatched = require("array-filter-extract-matched") /*id: 925046*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docBlockZoomUtils = require("doc-block-zoom-utils") /*id: 735944*/;
  var androidFullscreenScrollFix = require("android-fullscreen-scroll-fix") /*id: 859103*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var v = classnamesUtils;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var videoPlayerWrapperComponent = require("video-player-wrapper-component") /*id: 232337*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var fileUtilsAndViewHelpers = require("file-utils-and-view-helpers") /*id: 192103*/;
  var fileVideoNormalIcon = require("file-video-normal-icon") /*id: 690252*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function x(e) {
    let {
      name: i,
      className: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: v("container-JvNLNM", n),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mask-K0o5Y2"
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "content-wrapper-QROEPC",
        children: [reactJsxRuntimeCoreReexport.jsx(fileVideoNormalIcon.FileVideoIcon, {
          width: "18",
          height: "18"
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: "title-iJsFkG",
          children: fileUtilsAndViewHelpers.getFileExtension(i)
        })]
      })]
    });
  }
  var progressComponent = require("progress-component") /*id: 222624*/;
  var loadingWrapperComponent = require("loading-wrapper-component") /*id: 376931*/;
  function C(e) {
    let {
      fileSize: i,
      fromSelf: n,
      isCopying: r,
      progress: l,
      isUploading: o
    } = e;
    let s = o ? `${t("box.uploader.header.uploading")}  ${l}%` : t("doc_video_progressing");
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: v("container-E_Mmlg"),
      style: {
        width: i.width - 2,
        height: i.height - 2
      },
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "content-wrapper-zLYWIr",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "tips-D2tJ6o",
          children: reactJsxRuntimeCoreReexport.jsx("span", {
            children: s
          })
        }), o && n && !r ? reactJsxRuntimeCoreReexport.jsx(progressComponent.ProgressComponent, {
          percent: l,
          strokeWidth: 8,
          showInfo: false
        }) : reactJsxRuntimeCoreReexport.jsx(loadingWrapperComponent.LoadingWrapper, {})]
      })
    });
  }
  var docFileMediaCheck = require("doc-file-media-check") /*id: 153933*/;
  var otterDocAttachmentFetcher = require("otter-doc-attachment-fetcher") /*id: 65767*/;
  var docxViewConfigConstants = require("docx-view-config-constants") /*id: 725976*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var N = {
    container: "container-byQ3N_",
    header: "header-ulPDrS",
    "should-show-controls-title": "should-show-controls-title-BEN8uV",
    "video-wrapper": "video-wrapper-gmj72e",
    "preview-selected": "preview-selected-w7L_zt",
    "short-cut-image": "short-cut-image-gMfY7N",
    "container-mobile": "container-mobile-Y7k7F6"
  };
  function I(e) {
    let {
      fileName: i,
      fileWrapperSize: n,
      resourceKey: r,
      isShortCut: l,
      progress: o,
      fromSelf: a,
      isCopying: c,
      shouldShowControlsAndTitle: d,
      onPreviewLoadingEnd: h,
      onMouseEnter: u,
      onClick: f,
      isSelected: b = false,
      isShowModal: y = false,
      getAuthToken: S,
      onClosePreviewModal: I,
      setPlayerRef: j,
      onSelectVideo: F
    } = e;
    let {
      width: M,
      height: O
    } = n;
    let {
      data: A
    } = function (e, i) {
      let {
        data: n,
        loading: r,
        cancel: l
      } = useRequestHook.useRequest(async () => {
        if (!e) {
          return;
        }
        let n = await (i == null ? undefined : i());
        return otterDocAttachmentFetcher.fetchSingleAttachment({
          resourceKey: e,
          pageToken: docTokenHelperUtils.resolveDocToken(),
          authToken: n
        }).then(e => {
          var n;
          var r;
          let o = e == null ? undefined : e.attachments?.[0];
          let s = o == null ? undefined : o.play_info;
          if (s != null && (n = s.media_info) !== null && n !== undefined) {
            n.sort((e, i) => {
              return Number(e == null ? undefined : e.meta?.height) - Number(i == null ? undefined : i.meta?.height);
            });
          }
          let a = s == null ? undefined : (r = s.media_info) === null || r === undefined ? undefined : r.map(e => {
            return {
              label: (e == null ? undefined : e.meta?.definition) || "",
              value: (e == null ? undefined : e.main_url) || ""
            };
          });
          if (!(a == null ? undefined : a.length) || !s) {
            return;
          }
          let c = a[a.length - 1].value;
          let d = s.poster_url;
          let h = docFileMediaCheck.isFilePlayable(o);
          if (h) {
            setTimeout(() => {
              l();
            }, 60);
          }
          return {
            url: c,
            definitions: a,
            posterUrl: d,
            playable: h
          };
        });
      }, {
        pollingInterval: 5000
      });
      return {
        data: n,
        loading: r
      };
    }(r, S);
    reactCoreLibraryReexport.useEffect(() => {
      if (A) {
        if (h != null) {
          h();
        }
      }
    }, [A]);
    if (!(A == null ? undefined : A.playable)) {
      return reactJsxRuntimeCoreReexport.jsx(C, {
        fileSize: n,
        progress: o,
        fromSelf: a,
        isCopying: c,
        isUploading: fileUtilsAndViewHelpers.isEmptyString(r)
      });
    }
    let {
      url: L,
      definitions: D,
      posterUrl: H
    } = A;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: v(docxViewConfigConstants.zoneTypeFileBlock, N.container, "file-container", "preview-wrap", {
        [N["should-show-controls-title"]]: d,
        [N["container-mobile"]]: browserEnvironmentDetectionUtils.browserDetector.isMobile
      }),
      style: {
        width: M,
        height: O
      },
      onMouseEnter: u,
      onClick: f,
      onMouseDown: F,
      children: [reactJsxRuntimeCoreReexport.jsx(x, {
        name: i,
        className: N.header
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: v(N["video-wrapper"], {
          [N["preview-selected"]]: b
        }),
        children: l ? reactJsxRuntimeCoreReexport.jsx("img", {
          className: N["short-cut-image"],
          src: xssContentSanitizer.sanitizeUrl(H, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWJXRlhlR3hNTTFwd1dsa*pkb%50$m1oWk0xRjJZM*hL-kdSd*JHe*tl$*t5W$Zk%2JHSj$PWEJp-lZKc1p$TTFNR016-%doamJX%XhZM2M5%FE9PQ"
          }),
          alt: ""
        }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(videoPlayerWrapperComponent.VideoPlayerWrapper, {
            url: L,
            definitions: D,
            posterUrl: H,
            onClose: I,
            menuPopoverUseHoverTrigger: true,
            useCssFullscreen: false,
            controlsConfig: {
              autoHide: false,
              initShow: true
            },
            setPlayerRef: j
          }), y ? reactJsxRuntimeCoreReexport.jsx("div", {
            style: {
              width: M,
              height: O,
              position: "absolute",
              top: 0,
              zIndex: 6
            }
          }) : null]
        })
      })]
    });
  }
  var useDiContainerHook = require("use-di-container-hook") /*id: 3542*/;
  var docUiServiceSymbols = require("doc-ui-service-symbols") /*id: 452862*/;
  function M(e) {
    let {
      resourceKey: i,
      fileWrapperSize: n,
      getAuthToken: r,
      onPreviewLoadingEnd: l,
      onMouseEnter: o,
      onClick: s,
      isSelected: a = false,
      renderImmediately: c
    } = e;
    let {
      width: d,
      height: h
    } = n;
    let {
      data: u
    } = function (e, i) {
      let {
        data: n,
        loading: r
      } = useRequestHook.useRequest(async () => {
        let n = await (i == null ? undefined : i());
        return otterDocAttachmentFetcher.fetchSingleAttachment({
          resourceKey: e,
          pageToken: docTokenHelperUtils.resolveDocToken(),
          authToken: n
        }).then(e => {
          var n;
          if (e == null) {
            return undefined;
          } else if ((n = e.attachments) === null || n === undefined) {
            return undefined;
          } else {
            return n[0]?.url;
          }
        });
      }, {
        refreshDeps: [e],
        cacheKey: e,
        staleTime: 300000
      });
      return {
        data: n,
        loading: r
      };
    }(i, r);
    let f = useDiContainerHook.useDiContainer(docUiServiceSymbols.MdBoxImageComponent);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: v(docxViewConfigConstants.zoneTypeFileBlock, "file-container", "image", "container-PEjsia"),
      onMouseEnter: o,
      onClick: s,
      children: reactJsxRuntimeCoreReexport.jsx(f, {
        wrapperClassName: v("image-wrapper-K9kj4G", {
          "preview-selected-Cd43hb": a
        }),
        imageOptions: {
          width: d,
          height: h,
          objectFit: "cover",
          loading: c ? "eager" : "lazy"
        },
        src: xssContentSanitizer.sanitizeUrl(u, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWJXRlhlR3hNTTFwd1dsa*pkb%50$m1oWk0xRjJZM*hL-kdSd*JHe*tl$*x3WWxkR2JscFRPWEJp-lZKc1p$TTFNR016-%doamJX%XhZM2M5%FE9PQ"
        }),
        onImageLoadComplete: () => {
          if (l != null) {
            l();
          }
        }
      })
    });
  }
  var docxFileBlockManager = require("docx-file-block-manager") /*id: 617182*/;
  var filePreviewClassnamesAndEventUtils = require("file-preview-classnames-and-event-utils") /*id: 547228*/;
  var vcMutedProviderName = require("vc-muted-provider-name") /*id: 120758*/;
  var observableStateManager = require("observable-state-manager") /*id: 910520*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var docxEditorHoverManager = require("docx-editor-hover-manager") /*id: 803365*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var loadableBlockFetcherProvider = require("loadable-block-fetcher-provider") /*id: 289910*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var blockLoadPerformanceTracker = require("block-load-performance-tracker") /*id: 446264*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var layoutConstants = require("layout-constants") /*id: 773631*/;
  var resizableDraggableWrapper_1 = require("resizable-draggable-wrapper_1") /*id: 218659*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  function Q(e, i, n, r) {
    if (n) {
      Object.defineProperty(e, i, {
        enumerable: n.enumerable,
        configurable: n.configurable,
        writable: n.writable,
        value: n.initializer ? n.initializer.call(r) : undefined
      });
    }
  }
  function ee(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  function et(e, i, n, r, l) {
    var o = {};
    Object.keys(r).forEach(function (e) {
      o[e] = r[e];
    });
    o.enumerable = !!o.enumerable;
    o.configurable = !!o.configurable;
    if ("value" in o || o.initializer) {
      o.writable = true;
    }
    o = n.slice().reverse().reduce(function (n, r) {
      return r(e, i, n) || n;
    }, o);
    if (l && o.initializer !== undefined) {
      o.value = o.initializer ? o.initializer.call(l) : undefined;
      o.initializer = undefined;
    }
    if (o.initializer === undefined) {
      Object.defineProperty(e, i, o);
      return null;
    } else {
      return o;
    }
  }
  let ei = docxShortcutFeatureDetection.isShortcutEnabled();
  l = et((r = class extends docxFileBlockManager.DocxFileBlockManager {
    renderPreview() {
      if (this.state.isDocInLandscape && browserEnvironmentDetectionUtils.browserDetector.isAndroid && !fileUtilsAndViewHelpers.isNativeEmbedSupported() || this.isIOSOpendocMedia) {
        return this.renderFileCard();
      } else if (this.isVideo || this.isImage) {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: `file-alignable-container ${this.getAlignType()}`,
          children: this.renderPreviewCard()
        });
      } else {
        return this.renderFileCard();
      }
    }
    calcScaleByDragDiff(e) {
      let {
        width: i,
        height: n
      } = this.getVideoFileResizeSize();
      let {
        align: r,
        file: {
          originHeight: l,
          originWidth: o
        }
      } = this.snapshot;
      let s = r && r !== docBlockTypeConstants.alignmentConstants.CENTER ? 1 : 2;
      let a = this.limitFileWidth(i + e.diffX * s);
      let c = fileUtilsAndViewHelpers.calculateAspectRatio(o || i, l || n);
      let d = a / c;
      if (d < docxViewConfigConstants.getDocxConfigB()) {
        a = (d = this.limitFileHeight(d)) * c;
      }
      return {
        width: a,
        height: d
      };
    }
    UNSAFE_BlockViewLoadTimeout() {
      if (!this.model.snapshot.file.token) {
        return {
          errorMessage: `file loading timeout\u{FF0C}block-record-id: ${platformDocUtils.p5T(this.model.recordId)}`,
          errorType: "file_empty_token"
        };
      }
    }
    renderPreviewCard() {
      if (this.isImage) {
        return this.renderImagePreviewCard();
      } else if (this.isVideo) {
        return this.renderVideoPreviewCard();
      } else {
        return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: "error"
        });
      }
    }
    renderImagePreviewCard() {
      let {
        isLoadingEnd: e,
        shouldShowLoadingForVideo: i
      } = this.state;
      let {
        model: n
      } = this;
      let r = this.getFileSize();
      let l = e && !i ? layoutConstants.scaleModes.Proportional : layoutConstants.scaleModes.None;
      return reactJsxRuntimeCoreReexport.jsx(resizableDraggableWrapper_1.ResizableDraggable, {
        type: l,
        sensitivity: 1,
        onResizeStart: this.handleResizeStart,
        onResizeUpdate: this.handleResizeUpdate,
        onResizeEnd: this.handleResizeEnd,
        editable: this.config.editable,
        blockId: this.id,
        selectionAPI: this.selectionAPI,
        hiddenIconDirection: [layoutConstants.anchorPoints.LeftBottom, layoutConstants.anchorPoints.LeftTop, layoutConstants.anchorPoints.RightTop],
        contentFirst: true,
        children: reactJsxRuntimeCoreReexport.jsx(M, {
          fileWrapperSize: r,
          resourceKey: this.snapshot.file.token,
          isSelected: this.props.isSelected,
          getAuthToken: this.blockManager.config.get("getAuthToken"),
          onClick: e => {
            this.handleClick(e);
            if (this.props.isSelected || browserEnvironmentDetectionUtils.browserDetector.isMobile) {
              this.doPreview();
            }
          },
          onPreviewLoadingEnd: () => {
            this.blockManager.layoutManager.notifyNodeHeightChange(this.props.blockId);
            this.renderFinishCb();
            this.onPreviewLoadingEnd();
            if (ei) {
              filePreviewClassnamesAndEventUtils.triggerFilePreviewEvent(n.id);
            }
          },
          onMouseEnter: this.handleMouseEnter,
          renderImmediately: ei
        })
      });
    }
    renderVideoPreviewCard() {
      let {
        isLoadingEnd: e,
        shouldShowLoadingForVideo: i,
        shouldShowControlsAndTitle: n
      } = this.state;
      let {
        model: r,
        isNarrow: l
      } = this;
      let o = this.getFileSize();
      let s = e && !i ? layoutConstants.scaleModes.Proportional : layoutConstants.scaleModes.None;
      let a = o.width < 400;
      return reactJsxRuntimeCoreReexport.jsx(resizableDraggableWrapper_1.ResizableDraggable, {
        type: s,
        sensitivity: 1,
        onResizeStart: this.handleResizeStart,
        onResizeUpdate: this.handleResizeUpdate,
        onResizeEnd: this.handleResizeEnd,
        editable: this.config.editable,
        blockId: this.id,
        selectionAPI: this.selectionAPI,
        hiddenIconDirection: [layoutConstants.anchorPoints.LeftBottom, layoutConstants.anchorPoints.LeftTop, layoutConstants.anchorPoints.RightTop],
        contentFirst: true,
        children: reactJsxRuntimeCoreReexport.jsx(I, {
          fileName: this.snapshot.file.name,
          shouldShowControlsAndTitle: n && !i && !l,
          progress: this.state.progress,
          fromSelf: this.state.fromSelf,
          isCopying: this.state.isCopying,
          fileWrapperSize: o,
          resourceKey: this.snapshot.file.token,
          isSelected: this.props.isSelected,
          getAuthToken: this.blockManager.config.get("getAuthToken"),
          isShowModal: a,
          onClick: e => {
            this.handleClick(e, a);
            if (a) {
              var i;
              if ((i = this.player) !== null && i !== undefined) {
                i.videoPause();
              }
            }
          },
          onPreviewLoadingEnd: () => {
            this.blockManager.layoutManager.notifyNodeHeightChange(this.props.blockId);
            this.renderFinishCb();
            this.onPreviewLoadingEnd();
            if (ei) {
              filePreviewClassnamesAndEventUtils.triggerFilePreviewEvent(r.id);
            }
          },
          isShortCut: ei,
          onMouseEnter: this.handleMouseEnter,
          onClosePreviewModal: this.handleCloseVideoDialog,
          setPlayerRef: e => {
            this.setPlayerRef(e || undefined);
          },
          onSelectVideo: () => {
            this.selectionAPI.setSelection([{
              id: this.id,
              type: docxBlockSelectionHandler_1.blockTypes.BLOCK
            }]);
          }
        })
      });
    }
    constructor(...e) {
      super(...e);
      Q(this, "fetcher", l, this);
      Q(this, "vcMuted", o, this);
      ee(this, "handleMouseEnter", e => {
        let i = e.target;
        let n = i == null ? undefined : i.closest(".preview-wrap");
        if (n == null ? undefined : n.querySelector("iframe")) {
          this.blockManager.dispatch(docxEditorHoverManager.HoverManager, this);
        }
        let r = new Event("mousemove", {
          bubbles: true
        });
        i.dispatchEvent(r);
      });
      ee(this, "handleResizeStart", () => {
        docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorConstantsConfig.openBlockMenu);
        this.state.oldSize = this.getVideoFileResizeSize();
        this.setState({
          resize: this.getVideoFileResizeSize()
        });
      });
      ee(this, "handleResizeUpdate", e => {
        let i = this.calcScaleByDragDiff(e);
        this.setState({
          resize: i
        });
      });
      ee(this, "handleResizeEnd", e => {
        docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorConstantsConfig.hideBlockMenu);
        let o = this.calcScaleByDragDiff(e);
        this.model.applyTransaction("handleFileResizeEnd", e => {
          e.replace(this.record.id, ["file", "width"], o.width);
          e.replace(this.record.id, ["file", "height"], o.height);
          if (!this.snapshot.file.originHeight || !this.snapshot.file.originWidth) {
            e.replace(this.record.id, ["file", "originWidth"], this.state.originWidth);
            e.replace(this.record.id, ["file", "originHeight"], this.state.originHeight);
          }
        });
        if (observableStateManager.stateManager.getState(this.record.id)) {
          observableStateManager.stateManager.deleteState(this.record.id);
        }
        this.setState({
          resize: null
        });
        let {
          width: s,
          height: a
        } = o;
        let c = this.state.oldSize?.width ?? 0;
        let h = this.state.oldSize?.height ?? 0;
        let {
          blockManager: u
        } = this;
        let p = docxEditorBlockMetadataUtils.getBlockStructureInfo(this.id, u);
        u.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_content_page_click", docxEditorBlockMetadataUtils.getThrottledBlockPath(this.parentId, this.blockManager), {
          click: "block_resize",
          object_block_data: [{
            object_block_id: platformDocUtils.p5T(p.record_id),
            object_block_type: p.block_type,
            object_sub_block_type: p.sub_block_type,
            block_content_size: p.block_content_size
          }],
          before_size: `${Math.round(c)}x${Math.round(h)}`,
          after_size: `${Math.round(s)}x${Math.round(a)}`
        });
      });
      ee(this, "onPreviewError", () => {
        let {
          id: e,
          type: i
        } = this.model;
        this.removeSSRLayer();
        blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadError({
          id: e,
          type: i
        });
      });
      ee(this, "getSrcObjToken", () => syncedReferenceBlockUtils.getBlockTokenWithFallback(this.editorAPI, true) || "");
      ee(this, "setLoadingForVideo", e => {
        this.setState({
          shouldShowLoadingForVideo: e
        });
      });
      ee(this, "setPlayerRef", e => {
        if (!e) {
          arrayFilterExtractMatched.filterAndExtractMatched(docxFileBlockManager.DocxFileBlockManager.playerList, e => e === this.player);
          this.player = undefined;
          return;
        }
        this.player = e;
        if (!collectionIncludesUtil.includes(docxFileBlockManager.DocxFileBlockManager.playerList, e)) {
          docxFileBlockManager.DocxFileBlockManager.playerList.push(e);
        }
        if (this.useVideoV2 || this.useAudioV2) {
          this.bindImmersivePlayEvent(true);
        }
        if (!this.useAudioV2 && e && (browserEnvironmentDetectionUtils.browserDetector.isAndroid || browserEnvironmentDetectionUtils.browserDetector.isSafari)) {
          var i;
          this.blockManager.dispatch(renderEventConstants.activeNodeActions.ADD, this.id);
          if ((i = this.fixAndroidVideoFullscreenDestroy) !== null && i !== undefined) {
            i.call(this);
          }
          this.fixAndroidVideoFullscreenDestroy = androidFullscreenScrollFix.trackFullscreenScroll(e.root);
        }
        if (browserEnvironmentDetectionUtils.browserDetector.isInVC && new URLSearchParams(location.search).has("RoomMuteAudioAndVideo") || this.vcMuted.isMuted) {
          e.muted = true;
          e.defaultMuted = true;
        }
        if (this.props.recursionProps.isPresentationMode && this.hostElement) {
          (function (e) {
            let i = e.querySelector(".xgplayer-progress");
            if (i) {
              let e = i.getBoundingClientRect.bind(i);
              i.getBoundingClientRect = () => {
                let i = e();
                let n = docBlockZoomUtils.getDefaultLineHeight();
                return new DOMRect(n * i.x, n * i.y, n * i.width, n * i.height);
              };
            }
          })(this.hostElement);
        }
        if (this.retryFullscreenOptions) {
          this.previewFileFullScreen(this.retryFullscreenOptions.openSource);
          this.retryFullscreenOptions = null;
        }
      });
    }
  }).prototype, "fetcher", [loadableBlockFetcherProvider.loadableBlockToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  o = et(r.prototype, "vcMuted", [vcMutedProviderName.vcMutedProviderName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let en = r;
  require.d(exports, {
    getInlineMentionTypeAttr: function () {
      return en;
    }
  });
}