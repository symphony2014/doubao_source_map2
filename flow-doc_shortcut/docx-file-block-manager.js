// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocxFileBlockManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 617182
         */
module.exports = function (module, exports, require) {
  var r;
  var l;
  var o;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var resizeObserverPolyfill = require("resize-observer-polyfill") /*id: 412454*/;
  var arrayFilterExtractMatched = require("array-filter-extract-matched") /*id: 925046*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var videoPlayerWrapperComponent = require("video-player-wrapper-component") /*id: 232337*/;
  (r = {}).PRELOAD = "reload";
  r.RENDER = "render";
  r.MOVE_OUT = "move_out";
  let v = r;
  (l = {}).MANUAL = "MANUAL";
  l.REPLAY = "REPLAY";
  let m = l;
  (o = {}).Unmount = "unmount";
  o.VC = "vc";
  o.VC_NO_REGISTER = "vc_no_register";
  o.MANUAL = "manual";
  o.FORCE_CLOSE = "force_close";
  o.COMMENT = "comment";
  let g = o;
  function _(e, i) {
    if (e.isBlockInViewport(i)) {
      return v.RENDER;
    } else if (e.getBufferBlocks().includes(i)) {
      return v.PRELOAD;
    } else {
      return v.MOVE_OUT;
    }
  }
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function b() {
    return reactJsxRuntimeCoreReexport.jsx("svg", {
      className: "circular",
      viewBox: "25 25 50 50",
      children: reactJsxRuntimeCoreReexport.jsx("circle", {
        className: "path",
        cx: "50",
        cy: "50",
        r: "20",
        fill: "none",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      })
    });
  }
  var fileTypeIconMapper = require("file-type-icon-mapper") /*id: 70162*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var y = classnamesUtils;
  var dlpAttachmentForbiddenPlaceholders = require("dlp-attachment-forbidden-placeholders") /*id: 586433*/;
  var docFileUtilsSymbol = require("doc-file-utils-symbol") /*id: 696345*/;
  var useDiContainerHook = require("use-di-container-hook") /*id: 3542*/;
  var tooltipWrapperComponent_1 = require("tooltip-wrapper-component_1") /*id: 943532*/;
  var visibleOutlinedIcon = require("visible-outlined-icon") /*id: 698909*/;
  var playFilledIcon = require("play-filled-icon") /*id: 260366*/;
  var downloadIconComponent = require("download-icon-component") /*id: 593570*/;
  var fileUtilsAndViewHelpers = require("file-utils-and-view-helpers") /*id: 192103*/;
  var docxOfflineMenuHandler = require("docx-offline-menu-handler") /*id: 22232*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var presentationZoomHoc = require("presentation-zoom-hoc") /*id: 782308*/;
  function O(e) {
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "progress-circle",
      "data-progress": e.progress,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "circle",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "mask full",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "fill"
          })
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "mask half",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "fill"
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "fill fix"
          })]
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "inset"
      })]
    });
  }
  var A = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#AFAFAF",
      d: "M624.66 785.14A38.94 38.94 0 0 1 639 731.97a38.94 38.94 0 0 1 53.21 14.17l90.13 156.1A38.94 38.94 0 0 1 768 955.4a38.94 38.94 0 0 1-53.21-14.17l-90.13-156.1z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#D1D1D1",
      d: "M241.66 121.76A38.94 38.94 0 0 1 256 68.6a38.94 38.94 0 0 1 53.21 14.17l90.13 156.1A38.94 38.94 0 0 1 385 292.03a38.94 38.94 0 0 1-53.21-14.17z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#9D9D9D",
      d: "M238.86 624.66A38.94 38.94 0 0 1 292.03 639a38.94 38.94 0 0 1-14.17 53.21l-156.1 90.13A38.94 38.94 0 0 1 68.6 768a38.94 38.94 0 0 1 14.17-53.21l156.1-90.13z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#C2C2C2",
      d: "M902.24 241.66A38.94 38.94 0 0 1 955.4 256a38.94 38.94 0 0 1-14.16 53.21l-156.1 90.13A38.94 38.94 0 0 1 731.97 385a38.94 38.94 0 0 1 14.17-53.21z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#A3A3A3",
      d: "M331.79 746.14A38.94 38.94 0 0 1 385 731.97a38.94 38.94 0 0 1 14.34 53.17l-90.13 156.1A38.94 38.94 0 0 1 256 955.4a38.94 38.94 0 0 1-14.34-53.17l90.13-156.1z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#C8C8C8",
      d: "M714.79 82.76A38.94 38.94 0 0 1 768 68.6a38.94 38.94 0 0 1 14.34 53.17l-90.13 156.1A38.94 38.94 0 0 1 639 292.03a38.94 38.94 0 0 1-14.34-53.17z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#949494",
      d: "M277.86 331.79c18.6 10.73 24.94 34.56 14.17 53.21s-34.57 25.07-53.17 14.34L82.76 309.2A38.94 38.94 0 0 1 68.6 256a38.94 38.94 0 0 1 53.17-14.34l156.1 90.13z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#B6B6B6",
      d: "M941.24 714.79A38.94 38.94 0 0 1 955.4 768a38.94 38.94 0 0 1-53.16 14.34l-156.1-90.13A38.94 38.94 0 0 1 731.97 639a38.94 38.94 0 0 1 53.17-14.34z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#999",
      d: "M219.12 473c21.47 0 38.88 17.46 38.88 39s-17.4 39-38.88 39H38.88C17.4 551 0 533.54 0 512s17.4-39 38.88-39z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#BBB",
      d: "M985.12 473c21.47 0 38.88 17.46 38.88 39s-17.4 39-38.88 39H804.88C783.4 551 766 533.54 766 512s17.4-39 38.88-39z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#CDCDCD",
      d: "M551 219.12c0 21.47-17.46 38.88-39 38.88s-39-17.4-39-38.88V38.88C473 17.4 490.46 0 512 0s39 17.4 39 38.88z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#A9A9A9",
      d: "M551 985.12c0 21.47-17.46 38.88-39 38.88s-39-17.4-39-38.88V804.88c0-21.47 17.46-38.88 39-38.88s39 17.4 39 38.88z"
    })]
  });
  var L = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsxs("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "#EE5050",
        fillRule: "nonzero",
        d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16"
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "#FFF",
        d: "m7 4 .48 6H8.5L9 4s.277-1-1-1-1 1-1 1"
      }), reactJsxRuntimeCoreReexport.jsx("circle", {
        cx: 8,
        cy: 12,
        r: 1,
        fill: "#FFF"
      })]
    })
  });
  function D(e) {
    let {
      size: i,
      status: n,
      errorCode: r
    } = e;
    if (n === "failure") {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "save-tip",
        children: [reactJsxRuntimeCoreReexport.jsx(L, {
          className: "icon"
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: "desc",
          children: t("mention.saved_failure")
        })]
      });
    } else if (n === "saving") {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "save-tip saving",
        children: [reactJsxRuntimeCoreReexport.jsx(A, {
          className: "icon"
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: "desc",
          children: t("mention.saving")
        })]
      });
    } else if (r) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "file-desc-offline-not-cache",
        children: reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
          title: docxOfflineMenuHandler.getOfflineTooltip(r),
          offset: 6,
          children: fileUtilsAndViewHelpers.isUnknownFormatPreview(i, true)
        })
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        children: fileUtilsAndViewHelpers.isUnknownFormatPreview(i, true)
      });
    }
  }
  let H = presentationZoomHoc.withPresentationZoom(visibleOutlinedIcon.VisibleOutlinedIcon);
  let B = presentationZoomHoc.withPresentationZoom(playFilledIcon.PlayFilledIcon);
  let V = presentationZoomHoc.withPresentationZoom(downloadIconComponent.DownloadIcon);
  function Z(e) {
    let {
      onClick: i,
      isPresentationMode: n,
      usePlayIcon: r,
      errorCode: l,
      canPreview: o
    } = e;
    let s = H;
    let a = visibleOutlinedIcon.VisibleOutlinedIcon;
    let c = t("mention.preview");
    if (r) {
      s = B;
      a = playFilledIcon.PlayFilledIcon;
      c = t("LarkCCM_Docs_InsertVideo_Play_Tooltip");
    }
    if (!o) {
      s = V;
      a = downloadIconComponent.DownloadIcon;
      c = t("common.download_file");
    }
    let d = y({
      "media-preview-icon": !r,
      "media-preview-offline-disabled": !!l
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "btn-preview tooltip-host",
      onClick: i,
      children: browserEnvironmentDetectionUtils.browserDetector.isMobile ? reactJsxRuntimeCoreReexport.jsx(a, {
        className: d
      }) : reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
        title: l ? docxOfflineMenuHandler.getOfflineTooltip(l) : c,
        offset: 16,
        children: reactJsxRuntimeCoreReexport.jsx(s, {
          isPresentationMode: n,
          className: d
        })
      })
    });
  }
  function z() {
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "rotate-loading"
    });
  }
  function $(e) {
    let {
      progress: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "progress",
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "progress-text",
        children: [i, "%"]
      }), reactJsxRuntimeCoreReexport.jsx(O, {
        progress: i
      })]
    });
  }
  var docxViewConfigConstants = require("docx-view-config-constants") /*id: 725976*/;
  var docxDragDropConstants = require("docx-drag-drop-constants") /*id: 253882*/;
  var blockFlashEnhancementManager = require("block-flash-enhancement-manager") /*id: 710621*/;
  var docMultiGeoIdUtil = require("doc-multi-geo-id-util") /*id: 193223*/;
  var docxOfflineFileHandler = require("docx-offline-file-handler") /*id: 308697*/;
  var docxOfflineFeatureCheck = require("docx-offline-feature-check") /*id: 821237*/;
  var docMultiGeoConstants = require("doc-multi-geo-constants") /*id: 254280*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  function Q(e) {
    let {
      name: i,
      size: n,
      token: r,
      progress: l,
      fromSelf: o,
      isCopying: s,
      onPreviewClick: c,
      onClick: d,
      onMount: h,
      borderColor: u,
      display: p,
      attachmentPermissions: f,
      mimeType: v,
      blockManager: m,
      recordId: g,
      fileBtnSlot: _,
      canPreview: b
    } = e;
    let x = fileUtilsAndViewHelpers.formatFileSize(i);
    let P = offlineStatusSelectorsUtils.useSelectDocxOfflineDisabled();
    let T = reactCoreLibraryReexport.useMemo(() => docxOfflineFeatureCheck.isDocxOfflineFlag && P && !r && fileUtilsAndViewHelpers.isPreviewableMedia(v), [P, v]);
    let [k, N] = reactCoreLibraryReexport.useState(r);
    let j = fileTypeIconMapper.getFileIcon(x);
    let F = reactCoreLibraryReexport.useMemo(() => f.previewable === undefined || fileUtilsAndViewHelpers.isEmptyString(k), [f.previewable, k]);
    let M = F && (o && !s ? reactJsxRuntimeCoreReexport.jsx($, {
      progress: l
    }) : reactJsxRuntimeCoreReexport.jsx(z, {}));
    let O = y(docxViewConfigConstants.zoneTypeFileBlock, docxDragDropConstants.dragClassName, blockFlashEnhancementManager.flashBlockClassName, "file-card");
    let [A, L] = reactCoreLibraryReexport.useState();
    let H = reactCoreLibraryReexport.useCallback(async () => {
      let e;
      if (r && P) {
        e = await docxOfflineFileHandler.getFileErrorCode(v)(r);
      }
      L(e);
    }, [v, r, P]);
    reactCoreLibraryReexport.useEffect(h, [h]);
    reactCoreLibraryReexport.useEffect(() => {
      Promise.resolve().then(() => {
        var i;
        if ((i = e.renderFinishCb) !== null && i !== undefined) {
          i.call(e);
        }
      });
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (docxOfflineFeatureCheck.isDocxOfflineFlag) {
        H();
      }
    }, [H]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = true;
      let i = async () => {
        let i = m.getBlockModelsByRecordId(g)[0];
        if (i) {
          let n = await fileUtilsAndViewHelpers.getOfflineFileUuid(i);
          if (e) {
            N(n);
          }
        }
      };
      if (T) {
        i();
      } else {
        N(r);
      }
      return () => {
        e = false;
      };
    }, [T, r]);
    let B = useDiContainerHook.useDiContainer(docFileUtilsSymbol.docFileUtilsSymbol);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [!f.print && f.previewResultCode !== docMultiGeoConstants.multiGeoModeId && f.previewResultCode !== docMultiGeoConstants.multiGeoDocId && reactJsxRuntimeCoreReexport.jsx(dlpAttachmentForbiddenPlaceholders.attachPrintForbidden, {}), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: O,
        onClick: d,
        style: {
          borderColor: u,
          display: p
        },
        "data-printable": docMultiGeoIdUtil.resolveMultiGeoId(String(f.print), f.previewResultCode),
        "data-exportable": String(f.export),
        "data-copyable": String(f.copy),
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "layout-column file-icon",
          children: reactJsxRuntimeCoreReexport.jsx(j, {
            width: "48",
            height: "48"
          })
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "layout-column layout-main-center grow",
          style: {
            flex: "1"
          },
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "file-name",
            children: i
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "file-desc",
            children: reactJsxRuntimeCoreReexport.jsx(D, {
              size: n,
              status: "",
              errorCode: A
            })
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "layout-row file-btn",
          children: _ || reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [M, !F && reactJsxRuntimeCoreReexport.jsx(Z, {
              canPreview: b,
              onClick: c,
              errorCode: A,
              isPresentationMode: e.isPresentationMode,
              usePlayIcon: B.checkIsVideoByFileName(e.name)
            })]
          })
        })]
      })]
    });
  }
  var docFileMediaCheck = require("doc-file-media-check") /*id: 153933*/;
  var otterDocAttachmentFetcher = require("otter-doc-attachment-fetcher") /*id: 65767*/;
  function ei(e) {
    try {
      let i = document.pictureInPictureElement;
      if (i && (i === e || !e) && document.exitPictureInPicture) {
        document.exitPictureInPicture();
      }
    } catch (e) {}
  }
  var androidFullscreenScrollFix = require("android-fullscreen-scroll-fix") /*id: 859103*/;
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var docxRustFileOperations = require("docx-rust-file-operations") /*id: 966944*/;
  var docAttachmentDownloadHandler = require("doc-attachment-download-handler") /*id: 214182*/;
  function ea(e, i, n) {
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
  let ec = new class {
    getProps(e, i) {
      let n = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
      let {
        token: r,
        name: l,
        size: o,
        mimeType: s
      } = e.record.snapshot.file;
      let a = {
        name: l,
        size: o,
        driveKey: r,
        token: r,
        type: fileUtilsAndViewHelpers.formatFileSize(l),
        suiteType: fileTypeConstants.BasicFileType.DOCX.toString(),
        useDriveStorage: true,
        actionManager: e.getActionManager(),
        handleClickDownload: () => {
          docAttachmentDownloadHandler.downloadDocAttachment(e, i.previewResultCode);
        },
        onCancel: () => {
          var e;
          if ((e = this.latestCloseHandler) !== null && e !== undefined) {
            e.call(this);
          }
        },
        mediaConfig: {
          autoplay: n
        },
        srcObjToken: syncedReferenceBlockUtils.getBlockTokenWithFallback(e.editorAPI),
        srcObjType: syncedReferenceBlockUtils.getSyncedBlockFileType(e.editorAPI)
      };
      if (docxOfflineFeatureCheck.isDocxOfflineFlag) {
        a.CCMOfflineEnvConfig = docxOfflineFileHandler.createOfflineFileHandler(s || "", l, o);
      }
      return a;
    }
    async initPreviewHelper(e) {
      return new (await platformDocUtils.huW()).PreviewHelper(e);
    }
    constructor() {
      var e = this;
      ea(this, "previewHelper", undefined);
      ea(this, "currentToken", undefined);
      ea(this, "currentNestedRecordId", undefined);
      ea(this, "openSource", undefined);
      ea(this, "latestCloseHandler", undefined);
      ea(this, "bindFileExitEvent", e => {
        this.latestCloseHandler = () => {
          e();
          this.currentToken = undefined;
          this.openSource = undefined;
          this.currentNestedRecordId = undefined;
        };
      });
      ea(this, "previewFileFullScreenByNative", e => null);
      ea(this, "previewFileFullScreen", async function (i) {
        let {
          model: n,
          onClose: r,
          pdfPreviewPageScrollPositionInfo: l,
          attachmentPermissions: o
        } = i;
        let s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : m.MANUAL;
        let a = arguments.length > 2 ? arguments[2] : undefined;
        let {
          record: c
        } = n;
        let {
          token: d
        } = c.snapshot.file;
        let h = s === m.MANUAL;
        let u = {
          ...e.getProps(n, o, h)
        };
        if (d || docxOfflineFeatureCheck.isDocxOfflineFlag && offlineStatusSelectorsUtils.isDocxOfflineDisabled()) {
          if (e.currentToken === d) {
            return;
          }
          if (d) {
            if (docxOfflineFeatureCheck.isDocxOfflineFlag && offlineStatusSelectorsUtils.isDocxOfflineDisabled() && !(await docxRustFileOperations.isFileCacheExist(d, 1))) {
              return;
            }
          } else {
            let e = await fileUtilsAndViewHelpers.getOfflineFileUuid(n);
            if (e) {
              u.token = e;
              u.driveKey = e;
            }
          }
          e.bindFileExitEvent(r);
          e.currentToken = d;
          e.currentNestedRecordId = a;
          e.openSource = s;
          if (l) {
            u.pdfPreviewPageScrollPositionInfo = l;
          }
          if (e.previewHelper) {
            e.previewHelper.updateProps(u);
          } else {
            e.previewHelper = await e.initPreviewHelper(u);
          }
          e.previewHelper.handlePreview(true);
        } else {
          throw Error("no token");
        }
      });
      ea(this, "closeFilePreviewer", (e, i, n) => {
        let r = this.currentToken === e && this.currentNestedRecordId === n;
        let l = this.openSource === m.MANUAL;
        if (this.previewHelper && (l || r || i === g.VC_NO_REGISTER)) {
          var o;
          this.previewHelper.manualCloseModal();
          if ((o = this.latestCloseHandler) !== null && o !== undefined) {
            o.call(this);
          }
        }
        this.openSource = undefined;
      });
      ea(this, "checkPreviewStatus", e => e === this.currentToken && this.previewHelper.isPreviewing);
      ea(this, "destroy", () => {});
    }
  }();
  function ed() {
    platformDocUtils.vpe.emit("FILE_ENTER_FULL_SCREEN_MODE");
  }
  function eh() {
    platformDocUtils.vpe.emit("FILE_EXIT_FULL_SCREEN_MODE");
  }
  var observableStateManager = require("observable-state-manager") /*id: 910520*/;
  function ep(e, i, n) {
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
  class ef {
    push(e, i) {
      let {
        recordId: n,
        func: r
      } = e;
      this.updateQueus(n, i);
      this.recordIdToFunc.set(n, r);
      if (!this.isRunning) {
        setTimeout(() => {
          this.run();
        }, 100);
      }
    }
    delete(e) {
      let i = this.highQueues.findIndex(i => i === e);
      let n = this.normalQueues.findIndex(i => i === e);
      if (i > -1) {
        this.highQueues.splice(i, 1);
      }
      if (n > -1) {
        this.normalQueues.splice(n, 1);
      }
      this.jumpCurRender(e);
    }
    jumpCurRender(e) {
      if (e === this.curRecordId) {
        this.stopRender(false);
        this.run();
      }
    }
    reset() {
      this.isRunning = false;
    }
    reconciler() {
      if (!this.highQueues.length && !this.normalQueues.length) {
        this.stopRender(false);
        return;
      }
      if (this.highQueues.length) {
        this.curRecordId = this.highQueues.shift();
        this.curRecordIdFrom = "highQueues";
      } else {
        this.curRecordId = this.normalQueues.shift();
        this.curRecordIdFrom = "normalQueues";
      }
      this.timer = window.setTimeout(() => {
        this.render();
      }, ef.INTERVAL);
    }
    render() {
      let e = this.recordIdToFunc.get(this.curRecordId);
      if (e) {
        e(this.curRecordId);
        this.recordIdToFunc.delete(this.curRecordId);
      }
      this.reconciler();
    }
    updateQueus(e, i) {
      let n = this.highQueues.findIndex(i => i === e);
      let r = this.normalQueues.findIndex(i => i === e);
      if (i) {
        if (r > -1) {
          this.normalQueues.splice(r, 1);
        }
        if (n > -1) {
          return;
        }
        this.highQueues.push(e);
      } else {
        if (n > -1) {
          this.highQueues.splice(n, 1);
        }
        if (r > -1) {
          return;
        }
        this.normalQueues.push(e);
      }
    }
    constructor() {
      var e = this;
      ep(this, "recordIdToFunc", new Map());
      ep(this, "highQueues", []);
      ep(this, "normalQueues", []);
      ep(this, "isRunning", false);
      ep(this, "timer", undefined);
      ep(this, "curRecordId", "");
      ep(this, "curRecordIdFrom", "");
      ep(this, "run", () => {
        if (!this.isRunning) {
          this.isRunning = true;
          this.reconciler();
        }
      });
      ep(this, "stopRender", function () {
        let i = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        if (e.isRunning) {
          e.isRunning = false;
          if (e.timer) {
            window.clearTimeout(e.timer);
          }
          if (e.curRecordIdFrom && i) {
            e[e.curRecordIdFrom].unshift(e.curRecordId);
          }
          e.curRecordId = "";
        }
      });
    }
  }
  ep(ef, "INTERVAL", 200);
  let ev = new ef();
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var docUiServiceSymbols = require("doc-ui-service-symbols") /*id: 452862*/;
  var revisionExtensionServiceToken = require("revision-extension-service-token") /*id: 755911*/;
  var keyboardKeyCodes = require("keyboard-key-codes") /*id: 73916*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docxCommentConstants = require("docx-comment-constants") /*id: 580976*/;
  var mobileUiEventTokens = require("mobile-ui-event-tokens") /*id: 763596*/;
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  var fileUploaderService_1 = require("file-uploader-service_1") /*id: 571601*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var attachmentPermissionService = require("attachment-permission-service") /*id: 275142*/;
  var changeSourceConstants = require("change-source-constants") /*id: 363583*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  var iosEditorLeafTextWrapper = require("ios-editor-leaf-text-wrapper") /*id: 575135*/;
  var docxLayoutConstants_1 = require("docx-layout-constants_1") /*id: 700786*/;
  var docxBoolConfigGetters = require("docx-bool-config-getters") /*id: 475875*/;
  var blockMaskManagerBaseClass = require("block-mask-manager-base-class") /*id: 471875*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxAnchorServiceHelper = require("docx-anchor-service-helper") /*id: 574470*/;
  var hideBlockToolbarConsts = require("hide-block-toolbar-consts") /*id: 544027*/;
  var docBlockAnalyticsConstants = require("doc-block-analytics-constants") /*id: 337105*/;
  var blockLoadPerformanceTracker = require("block-load-performance-tracker") /*id: 446264*/;
  var uiEventTrackingConstants = require("ui-event-tracking-constants") /*id: 28205*/;
  var docContentPageClickCollector = require("doc-content-page-click-collector") /*id: 751641*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  let eV = e => false;
  var touchInteractionUtil = require("touch-interaction-util") /*id: 593236*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var mediaEnvironmentStubs = require("media-environment-stubs") /*id: 862836*/;
  var editorActionConstants_1 = require("editor-action-constants_1") /*id: 659752*/;
  let eU = 0;
  var embedInlineLinkComponent = require("embed-inline-link-component") /*id: 768824*/;
  function eY(e, i, n) {
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
  function eJ(e, i, n) {
    if (e.displaymode === viewTypeConstants.viewTypes.Inline) {
      return viewTypeConstants.viewTypes.Inline;
    } else if (n) {
      return i.ssrViewType || viewTypeConstants.viewTypes.Card;
    } else {
      return e.viewType;
    }
  }
  class eK extends blockMaskManagerBaseClass.BlockMaskManagerBase {
    static get fullScreenNestedRecordId() {
      return eK._fullScreenNestedRecordId;
    }
    static set fullScreenNestedRecordId(e) {
      eK._fullScreenNestedRecordId = e;
    }
    get encryptRecordId() {
      this._encryptRecordId ||= platformDocUtils.p5T(this.record.id);
      return this._encryptRecordId;
    }
    get isImage() {
      let {
        name: e
      } = this.snapshot.file;
      return diContainerInstance.diContainer.get(docFileUtilsSymbol.docFileUtilsSymbol).checkIsImageByFileName(e);
    }
    get isVideo() {
      let {
        name: e
      } = this.snapshot.file;
      return diContainerInstance.diContainer.get(docFileUtilsSymbol.docFileUtilsSymbol).checkIsVideoByFileName(e);
    }
    get isAudio() {
      let {
        name: e
      } = this.snapshot.file;
      return diContainerInstance.diContainer.get(docFileUtilsSymbol.docFileUtilsSymbol).checkIsAudioByFileName(e);
    }
    get containerElement() {
      let {
        hostElement: e
      } = this;
      if (e) {
        if (this.useVideoNewLayout) {
          return e.querySelector(".file-alignable-container .file-container");
        } else {
          return e.querySelector(".docx-file-block-inner-container");
        }
      } else {
        return null;
      }
    }
    get isBlockRendered() {
      return this.isRendered || this.shouldNativePreviewRender;
    }
    get contentElement() {
      return this.hostElement.querySelector(".docx-file-block-inner-container");
    }
    get isBlockSSR() {
      return this.editorAPI.config.get("isSSR");
    }
    get attachmentPermissionService() {
      return this.blockManager.editorAPI.getService(attachmentPermissionService.attachmentPermSvc, {
        optional: true
      });
    }
    blockViewDidMount() {
      super.blockViewDidMount();
      this.attachBlockView(true);
      Promise.resolve().then(() => {
        this.setContainerWidth();
      }).catch();
      if (this.hostElement) {
        this.hostResizeObserver.disconnect();
        this.hostResizeObserver.observe(this.hostElement);
        if (this.useAudioV2) {
          this.hostElement.classList.add("is-in-audio-v2");
        }
        if (this.useVideoV2) {
          this.hostElement.classList.add("is-in-video-v2");
        }
      }
      if (this.useVideoV2) {
        document.addEventListener("keydown", this.onKeyDown);
      }
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile && (mediaEnvironmentStubs.stubEventEmitter.on(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.ORIENTATION_CHANGED, this.updateOrientation), docxEditorEventConstantsAndManager.globalEventEmitter.on(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.START_TAKE_SCREENSHOT, this.handleStartTakeSnapshotInMobile), docxEditorEventConstantsAndManager.globalEventEmitter.on(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.FINISH_TAKE_SCREENSHOT, this.handleFinishTakeSnapshotInMobile), this.snapshot.file.token)) {
        var e;
        if ((e = this.attachmentPermissionService) !== null && e !== undefined) {
          e.setDLPUploadCheckCallback(this.snapshot.file.token, this.handleDlpMsgCallback);
        }
      }
      platformDocUtils.vpe.on(docxCommentConstants.exitFullscreenEvent, this.handleCommentExitFullscreen);
      let i = this.props.editorAPI.getService(lazyRecordStatusToken.lazyRecordStatus, {
        optional: true
      });
      if (i) {
        this.subs.push(i.allowEdit$.subscribe(this.handleCheckAttachmentPermission));
      } else {
        this.handleCheckAttachmentPermission();
      }
      if (this.getViewType() === viewTypeConstants.viewTypes.Inline && this.parentId) {
        this.blockManager.layoutManager.notifyNodeHeightChange(this.parentId);
      }
    }
    blockViewDidUpdate(e, i) {
      super.blockViewDidUpdate(e, i);
      let {
        token: n
      } = e.record.snapshot.file;
      let {
        token: r
      } = this.props.record.snapshot.file;
      let {
        blockManager: l
      } = this;
      if (!n && r && (this.handleCheckAttachmentPermission(), browserEnvironmentDetectionUtils.browserDetector.isMobile)) {
        var o;
        if ((o = this.attachmentPermissionService) !== null && o !== undefined) {
          o.setDLPUploadCheckCallback(r, this.handleDlpMsgCallback);
        }
      }
      if (this.getShouldRender() && this.isInPreviewType() && eJ(this.props, this.model) !== eJ(e, this.model)) {
        let e = _(l.layoutManager, this.id);
        if (e !== v.MOVE_OUT) {
          this.updateBufferStatus(e);
        }
      }
      if (this.isPreviewableVideo && this.isInFullscreenLocalState && e.viewType === viewTypeConstants.viewTypes.Preview && this.props.viewType === viewTypeConstants.viewTypes.Card) {
        eh();
      }
      if (this.props.viewType !== e.viewType) {
        ei();
      }
    }
    attachBlockView(e = false) {
      let {
        isPresentationMode: i,
        isHistory: n
      } = this.props.recursionProps;
      if (i || n) {
        ei();
      }
      this.globalStateChangeSub = observableStateManager.stateManager.onStateChangeOf(this.record.id).subscribe(e => {
        this.setState(e);
      });
      this.tryResumePausedTask();
      if (this.player && !e) {
        var r;
        if ((r = this.fixAndroidVideoFullscreenDestroy) !== null && r !== undefined) {
          r.call(this);
        }
        this.fixAndroidVideoFullscreenDestroy = androidFullscreenScrollFix.trackFullscreenScroll(this.player.root);
      }
      if (!e) {
        this.isRendered = true;
      }
    }
    detachBlockView() {
      var n;
      var r;
      ei(this.player?.video);
      this.isRendered = false;
      if (!this.vcController?.isFollow) {
        this.closeFilePreviewer(g.Unmount);
      }
      this.handleCloseVideoDialog();
      if ((n = this.state.vcFollowHelper) !== null && n !== undefined) {
        n.destroy();
      }
      this.globalStateChangeSub.unsubscribe();
      if ((r = this.fixAndroidVideoFullscreenDestroy) !== null && r !== undefined) {
        r.call(this);
      }
    }
    toggleRenderHiddenCardDom(e) {
      this.setState({
        isRenderHiddenCardDom: e
      });
    }
    get borderColor() {
      let {
        isSelected: e,
        syncCursorSelected: i,
        syncCursorBorderColor: n
      } = this.props;
      if (!e && i) {
        return n;
      } else {
        return undefined;
      }
    }
    getViewType() {
      return eJ(this.props, this.model, this.isBlockSSR) || viewTypeConstants.viewTypes.Card;
    }
    isInPreviewType() {
      return this.getViewType() === viewTypeConstants.viewTypes.Preview;
    }
    getViewTypeToolBarList() {
      var e;
      let {
        file: i
      } = this.record.snapshot;
      let {
        token: n
      } = i;
      let r = ((e = this.blockManager.editorAPI.getService(collabTriggersProvider.collabProvider, {
        optional: true
      })) === null || e === undefined ? undefined : e.getVersion(this.record.id)) || docxViewConfigConstants.defaultCount;
      if (fileUtilsAndViewHelpers.isEmptyString(n) || r <= docxViewConfigConstants.defaultCount) {
        return null;
      }
      let l = ["inline", viewTypeConstants.viewTypes.Card];
      if (this.canPreview && (this.isImage || this.isVideo)) {
        l.push(viewTypeConstants.viewTypes.Preview);
      }
      return l;
    }
    getInlineComponentData() {
      return fileUtilsAndViewHelpers.createFileUploadData(this.record.snapshot, this.blockManager, false, this.record.id);
    }
    previewFile() {
      this.previewFileFullScreen();
      this.blockManager.dispatch(hideBlockToolbarConsts.hideBlockToolbar);
    }
    shouldShowFullScreenIcon() {
      return !this.useAudioV2;
    }
    blockViewWillUnmount() {
      var i;
      let {
        isPresentationMode: n
      } = this.props.recursionProps;
      super.blockViewWillUnmount();
      this.hostResizeObserver.disconnect();
      this.subs.forEach(e => e.unsubscribe());
      if (!n) {
        arrayFilterExtractMatched.filterAndExtractMatched(eK.playerList, e => e === this.player);
      }
      this.isRendered = false;
      this.bindImmersivePlayEvent(false);
      this.tryPauseUploadingTask();
      if (!this.vcController?.isFollow) {
        this.closeFilePreviewer(g.Unmount);
      }
      this.handleCloseVideoDialog();
      this.globalStateChangeSub.unsubscribe();
      if ((i = this.fixAndroidVideoFullscreenDestroy) !== null && i !== undefined) {
        i.call(this);
      }
      if (this.useVideoV2) {
        document.removeEventListener("keydown", this.onKeyDown);
      }
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        mediaEnvironmentStubs.stubEventEmitter.off(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.ORIENTATION_CHANGED, this.updateOrientation);
        docxEditorEventConstantsAndManager.globalEventEmitter.off(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.START_TAKE_SCREENSHOT, this.handleStartTakeSnapshotInMobile);
        docxEditorEventConstantsAndManager.globalEventEmitter.off(docxEditorEventConstantsAndManager.eventConstants.MOBILE.COMMON.FINISH_TAKE_SCREENSHOT, this.handleFinishTakeSnapshotInMobile);
      }
      platformDocUtils.vpe.off(docxCommentConstants.exitFullscreenEvent, this.handleCommentExitFullscreen);
    }
    async tryPauseUploadingTask() {
      let {
        file: e
      } = this.record.snapshot;
      let {
        token: i
      } = e;
      if (fileUtilsAndViewHelpers.isEmptyString(i)) {
        var n;
        let e = await this.blockManager.editorAPI.getService(fileUploaderService_1.fileUploaderService, {
          dynamic: true
        });
        if (e != null && (n = e.instance) !== null && n !== undefined) {
          n.pause(this.record.id);
        }
      }
    }
    async tryResumePausedTask() {
      let {
        file: e
      } = this.record.snapshot;
      let {
        token: i
      } = e;
      if (fileUtilsAndViewHelpers.isEmptyString(i)) {
        var n;
        let e = await this.blockManager.editorAPI.getService(fileUploaderService_1.fileUploaderService, {
          dynamic: true
        });
        if (e != null && (n = e.instance) !== null && n !== undefined) {
          n.retry(this.record.id);
        }
      }
    }
    switchPlayerCssFullscreen() {
      if (this.player) {
        this.player.plugins.fullscreen.changeFullScreen();
      }
    }
    toggleBoxPreviewModule() {
      if (!this.useVideoV2 || browserEnvironmentDetectionUtils.browserDetector.isMobile && this.getShouldRender()) {
        return;
      }
    }
    supportNativePreviewRender() {
      this.shouldNativePreviewRender = this.isInPreviewType() && fileUtilsAndViewHelpers.isNativeComponentSupported();
      return this.shouldNativePreviewRender;
    }
    getShouldRender() {
      return this.supportNativePreviewRender();
    }
    onBufferEnter() {
      var e;
      var i;
      if ((i = this.viewer) !== null && i !== undefined && (e = i.resize) !== null && e !== undefined) {
        e.call(i);
      }
      if (this.getShouldRender()) {
        this.updateBufferStatus(v.PRELOAD);
        ev.push({
          recordId: this.getNestedRecordId(),
          func: this.updateToRenderStatus
        }, false);
      }
    }
    onBufferLeave() {
      if (this.getShouldRender()) {
        ev.delete(this.getNestedRecordId());
        this.updateBufferStatus(v.MOVE_OUT);
      }
    }
    onViewportEnter() {
      if (this.getShouldRender()) {
        ev.push({
          recordId: this.getNestedRecordId(),
          func: this.updateToRenderStatus
        }, true);
      }
    }
    onViewportLeave() {
      if (this.getShouldRender()) {
        ev.delete(this.getNestedRecordId());
      }
    }
    updateBufferStatus(e) {
      this.setState({
        bufferStatus: e
      });
    }
    getContainer() {
      return this.hostElement && this.hostElement.querySelector(".file-container");
    }
    get useAudioV2() {
      return this.isInPreviewType() && fileUtilsAndViewHelpers.isAudioType(this.record.snapshot.file.name) && this.props.previewable;
    }
    get canPreview() {
      return fileUtilsAndViewHelpers.isSupportedFormat(this.record.snapshot.file.name);
    }
    get isPreviewableVideo() {
      return fileUtilsAndViewHelpers.getFileNameWithoutExtension(this.record.snapshot.file.name) && this.props.previewable;
    }
    get useVideoV2() {
      return this.isInPreviewType() && this.isPreviewableVideo;
    }
    get previewResultCode() {
      return this.props.previewResultCode;
    }
    get useVideoNewLayout() {
      return this.useVideoV2 && !browserEnvironmentDetectionUtils.browserDetector.isH5 && !browserEnvironmentDetectionUtils.browserDetector.isMobile;
    }
    get useFileV2() {
      let e = this.record.snapshot.file.name;
      return this.isInPreviewType() && !fileUtilsAndViewHelpers.isAudioType(e) && !fileUtilsAndViewHelpers.getFileNameWithoutExtension(e) && (!!browserEnvironmentDetectionUtils.browserDetector.isPcTemplate || !!browserEnvironmentDetectionUtils.browserDetector.isH5);
    }
    get isEnterFullScreenDirectly() {
      return !!this.player && this.props.previewable && this.player.video?.tagName === "VIDEO";
    }
    get isIOSOpendocMedia() {
      let e = this.record.snapshot.file.name;
      let i = fileUtilsAndViewHelpers.getFileNameWithoutExtension(e);
      let n = fileUtilsAndViewHelpers.isAudioType(e);
      return browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isIOS && browserEnvironmentDetectionUtils.browserDetector.isOpendoc && (i || n);
    }
    get isNarrow() {
      let e = this.getFileSize();
      return !this.state.isInFullscreen && fileUtilsAndViewHelpers.shouldShowPlaceholder(e.width, e.height, this.snapshot.file);
    }
    render() {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [this.isVideo && this.renderVideoPlayerModal(), this.isImage && this.renderImageModal(), this.renderFileByViewType()]
      });
    }
    setImageModalProps(e) {
      this.setState(i => ({
        imageModalProps: {
          ...i.imageModalProps,
          ...e
        }
      }));
    }
    setVideoModalProps(e) {
      this.setState(i => ({
        videoModalProps: {
          ...i.videoModalProps,
          ...e
        }
      }));
    }
    renderImageModal() {
      let {
        visible: e,
        urls: i,
        currentIndex: n
      } = this.state.imageModalProps;
      let r = diContainerInstance.diContainer.get(docUiServiceSymbols.DocImageGallery);
      return reactJsxRuntimeCoreReexport.jsx(r, {
        visible: e,
        onVisibleChange: e => {
          this.setImageModalProps({
            visible: e
          });
        },
        src: xssContentSanitizer.sanitizeUrl(i, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWJXRlhlR3hNTTFwd1dsa*pkb%50$m1oWk0xRjJXbTFz-zFw$E1Xb*lSemxxW$hre*$WcFhSbXBr%XpFe$lWZFdNMHh1$W5wbFIwWj$Xak5XZWc9PQ"
        }),
        currentIndex: n,
        onChange: e => {
          this.setImageModalProps({
            currentIndex: e
          });
        },
        setDownloadName: () => this.snapshot.file.name
      });
    }
    renderVideoPlayerModal() {
      let {
        visible: e,
        url: i,
        definitions: n,
        posterUrl: r
      } = this.state.videoModalProps;
      let l = diContainerInstance.diContainer.get(docUiServiceSymbols.DocModalComponent);
      return reactJsxRuntimeCoreReexport.jsx(l, {
        className: "modal-wrapper-j2pLBq",
        visible: e,
        header: null,
        footer: null,
        zIndex: 1002,
        maskClosable: true,
        onCancel: () => {
          this.setVideoModalProps({
            visible: false
          });
        },
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "video-wrapper-R2XEQa",
          children: reactJsxRuntimeCoreReexport.jsx(videoPlayerWrapperComponent.VideoPlayerWrapper, {
            url: i,
            autoPlay: true,
            definitions: n,
            menuPopoverUseHoverTrigger: true,
            posterUrl: r,
            onClose: this.handleCloseVideoDialog,
            showClose: true
          })
        })
      });
    }
    renderFileByViewType() {
      switch (this.getViewType()) {
        case viewTypeConstants.viewTypes.Inline:
          return this.renderFileInline();
        case viewTypeConstants.viewTypes.Preview:
          return this.renderPreview();
        case viewTypeConstants.viewTypes.Card:
        default:
          return this.renderFileCard();
      }
    }
    getModelVideoSize(e) {
      let i = e == null ? undefined : e.width;
      let n = e == null ? undefined : e.height;
      if (!i || !n) {
        if (this.isBlockSSR && this.useVideoV2) {
          return {
            width: 0,
            height: 0
          };
        }
        i = this.state.width;
        n = this.state.height;
      }
      let r = fileUtilsAndViewHelpers.calculateAspectRatio((e == null ? undefined : e.originWidth) || i, (e == null ? undefined : e.originHeight) || n);
      let l = this.limitFileWidth(i + docxViewConfigConstants.flagEnabled * 2);
      let o = (l - docxViewConfigConstants.flagEnabled * 2) / r + docxViewConfigConstants.flagEnabled * 2;
      return {
        width: l,
        height: this.limitFileHeight(o)
      };
    }
    getVideoFileResizeSize() {
      let {
        containerWidth: e
      } = this.state;
      let {
        width: i,
        height: n
      } = this.getModelVideoSize(this.snapshot.file);
      if (!i || !n) {
        let i = Math.min(this.state.width, e);
        let n = i / (this.state.width / this.state.height);
        return {
          width: i,
          height: this.limitFileHeight(n)
        };
      }
      if (i > e && e && fileUtilsAndViewHelpers.isCellOrTableBlock(this) && i > docxViewConfigConstants.getDocxConfig()) {
        return {
          width: e,
          height: n
        };
      } else {
        return {
          width: i,
          height: n
        };
      }
    }
    getContainerWidth() {
      if (this.isBlockSSR) {
        return Infinity;
      } else {
        return this.hostElement?.clientWidth || docxViewConfigConstants.constant820;
      }
    }
    setContainerWidth() {
      let e = this.getContainerWidth();
      if (e !== this.state.containerWidth) {
        this.setState({
          containerWidth: e
        });
      }
    }
    limitFileWidth(e) {
      let i = this.state.containerWidth || this.getContainerWidth();
      return Math.max(docxViewConfigConstants.getDocxConfig(), Math.min(i, e));
    }
    limitFileHeight(e) {
      return Math.max(docxViewConfigConstants.getDocxConfigB(), e);
    }
    getFileSize() {
      let {
        file: e
      } = this.record.snapshot;
      if (fileUtilsAndViewHelpers.isEmptyString(e.token)) {
        return this.getModelVideoSize();
      } else if (this.state.resize) {
        return {
          ...this.state.resize
        };
      } else {
        return {
          ...this.getModelVideoSize(this.snapshot.file)
        };
      }
    }
    renderFileCard(e) {
      let {
        fileCardProps: i
      } = e || {};
      let {
        syncCursorBorderColor: n
      } = this.props;
      let r = this.getAttachmentPermissions();
      let {
        file: l
      } = this.record.snapshot;
      let {
        name: o,
        size: s,
        token: a,
        mimeType: c
      } = l;
      let {
        progress: d,
        fromSelf: h,
        isCopying: u,
        isRenderHiddenCardDom: p
      } = this.state;
      let f = {
        name: o,
        size: s,
        token: a,
        mimeType: c,
        viewType: "card",
        progress: d,
        fromSelf: h,
        isCopying: u,
        borderColor: n,
        canPreview: this.canPreview,
        onPreviewClick: this.handlePreviewClick,
        onClick: this.handleClick,
        onMount: this.handleFileCardMount,
        renderFinishCb: this.renderFinishCb,
        ...(p ? {
          display: "none"
        } : {}),
        attachmentPermissions: r,
        isPresentationMode: this.props.recursionProps.isPresentationMode,
        blockManager: this.blockManager,
        recordId: this.model.recordId,
        ...i
      };
      return reactJsxRuntimeCoreReexport.jsx(Q, {
        ...f
      });
    }
    renderFileInline() {
      let {
        file: e
      } = this.record.snapshot;
      let {
        shouldRenderPlainText: i
      } = this.props.recursionProps;
      let {
        name: n,
        token: r,
        need_copy_resource: l
      } = this.props.inlineComponentData || e;
      let o = docxBlockUtils_1.isCloneFailed(this.record.snapshot);
      let s = fileUtilsAndViewHelpers.formatFileSize(n);
      let a = fileTypeIconMapper.getFileIcon(s);
      let c = (r || o) && !l ? reactJsxRuntimeCoreReexport.jsx(a, {
        width: "48",
        height: "48"
      }) : reactJsxRuntimeCoreReexport.jsx(b, {});
      return reactJsxRuntimeCoreReexport.jsx(iosEditorLeafTextWrapper.IosLeafLinkWrapper, {
        selectionAPI: this.selectionAPI,
        contentEditable: false,
        href: "javascript:void(0);",
        children: reactJsxRuntimeCoreReexport.jsx(embedInlineLinkComponent.EmbedInlineLink, {
          className: docxViewConfigConstants.zoneTypeFileBlock,
          text: n,
          failHint: o ? t("CreationDoc_DocX_Copy_inline_failed_tag") : undefined,
          logo: c,
          onClick: this.handleTextPreviewClick,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTextTouch,
          onTouchEnd: this.handleTextTouch,
          onTouchMove: this.handleTextTouch,
          textStyle: {
            fontWeight: "inherit"
          },
          renderFinishCb: this.renderFinishCb,
          textType: this.model.getText(),
          shouldRenderPlainText: !!i,
          plainTextSuffixSpace: true
        })
      });
    }
    constructor(e) {
      var i;
      var n;
      var r;
      super(e);
      i = this;
      eY(this, "viewer", undefined);
      eY(this, "cacheFileInfo", null);
      eY(this, "globalStateChangeSub", undefined);
      eY(this, "shouldNativePreviewRender", undefined);
      eY(this, "_encryptRecordId", undefined);
      eY(this, "shouldPreventClick", false);
      eY(this, "player", undefined);
      eY(this, "fixAndroidVideoFullscreenDestroy", undefined);
      eY(this, "isRendered", false);
      eY(this, "autoHideControlsTitleTimer", undefined);
      eY(this, "isNotSupportFullscreen", false);
      eY(this, "isInFullscreenLocalState", false);
      eY(this, "retryFullscreenOptions", null);
      eY(this, "subs", []);
      eY(this, "isHovering", false);
      eY(this, "pdfPreviewPageScrollPositionInfo", undefined);
      eY(this, "state", {
        progress: docxViewConfigConstants.defaultIndex,
        fromSelf: false,
        isCopying: false,
        bufferStatus: _(this.blockManager.layoutManager, this.id),
        width: docxViewConfigConstants.constant820B,
        height: docxViewConfigConstants.constant410,
        originWidth: docxViewConfigConstants.constant820B,
        originHeight: docxViewConfigConstants.constant410,
        ...observableStateManager.stateManager.getState(this.record.id),
        isRenderHiddenCardDom: false,
        resize: null,
        oldSize: null,
        containerWidth: this.getContainerWidth(),
        isLoadingEnd: false,
        isPlaying: false,
        isPause: false,
        isSeek: false,
        duration: 0,
        isInFullscreen: false,
        shouldShowControlsAndTitle: !this.useVideoV2,
        isDocInLandscape: browserEnvironmentDetectionUtils.browserDetector.isMobile && mediaEnvironmentStubs.alwaysFalse(),
        shouldShowLoadingForVideo: false,
        actionManager: undefined,
        isMobileExporting: false,
        videoDialogStatus: {
          showDialog: undefined
        },
        imageModalProps: {
          visible: false,
          urls: [],
          currentIndex: 0
        },
        videoModalProps: {
          visible: false,
          url: ""
        }
      });
      eY(this, "isBlockReady", () => {
        let e = this.getViewType() || viewTypeConstants.viewTypes.Card;
        if ([viewTypeConstants.viewTypes.Inline, viewTypeConstants.viewTypes.Card].includes(e)) {
          return true;
        }
        let {
          previewable: i
        } = this.getAttachmentPermissions();
        return !i || !!this.state.isLoadingEnd;
      });
      eY(this, "removeSSRLayer", () => {
        if (this.props.isShowLoading) {
          var e;
          var i;
          if ((e = (i = this.props).onBlockReady) !== null && e !== undefined) {
            e.call(i);
          }
        }
      });
      eY(this, "renderFinishCb", () => {
        var e;
        this.isRendered = true;
        blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.TTV, {
          id: this.model.id,
          time: new Date().getTime()
        });
        if (this.isBlockReady()) {
          this.removeSSRLayer();
        }
        if ((e = this.blockManager.editorAPI.getService(revisionExtensionServiceToken.revisionExtSvcToken)) !== null && e !== undefined) {
          e.onBlockReady(this.id);
        }
      });
      eY(this, "onPreviewLoadingEnd", () => {
        this.setState({
          isLoadingEnd: true
        });
        this.removeSSRLayer();
        let i = Date.now();
        if (!this.props.blockSSRDom || !fileUtilsAndViewHelpers.isPreviewableFormat(this.record.snapshot.file?.name || "")) {
          blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.TTV, {
            id: this.model.id,
            time: i
          });
        }
        blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.TTU, {
          id: this.model.id,
          time: i
        });
      });
      eY(this, "handleCheckAttachmentPermission", () => {
        let {
          token: e
        } = this.snapshot.file;
        if (e) {
          var i;
          var n;
          if ((i = this.attachmentPermissionService) !== null && i !== undefined) {
            i.init();
          }
          if ((n = this.attachmentPermissionService) !== null && n !== undefined) {
            n.fetchBlockAuthStatus(e, this.record.id);
          }
        }
      });
      eY(this, "hostResizeObserver", new resizeObserverPolyfill.ResizeObserver(() => {
        this.debounceUpdateHostWidth();
      }));
      eY(this, "debounceUpdateHostWidth", debounceUtil_1_1.debounce(() => {
        let {
          clientWidth: e
        } = this.hostElement;
        if (e && e !== this.state.containerWidth) {
          this.setState({
            containerWidth: e
          });
        }
      }, 50));
      eY(this, "handleStartTakeSnapshotInMobile", () => {
        this.setState({
          isMobileExporting: true
        });
      });
      eY(this, "handleFinishTakeSnapshotInMobile", () => {
        this.setState({
          isMobileExporting: false
        });
      });
      eY(this, "onShareScreenStatusChange", e => {
        if (e && this.isInFullscreenLocalState) {
          var i;
          if ((i = this.state.vcFollowHelper) !== null && i !== undefined) {
            i.sendDocxFilePreviewState(this.isInFullscreenLocalState);
          }
        }
      });
      eY(this, "getAlignType", () => {
        let {
          align: e
        } = this.model.snapshot;
        if (e) {
          return e;
        }
        switch (this.getViewType()) {
          case viewTypeConstants.viewTypes.Preview:
            return docBlockTypeConstants.alignmentConstants.CENTER;
          case viewTypeConstants.viewTypes.Inline:
          case viewTypeConstants.viewTypes.Card:
          default:
            return docBlockTypeConstants.alignmentConstants.LEFT;
        }
      });
      eY(this, "bindImmersivePlayEvent", e => {
        let {
          player: i,
          hostElement: n
        } = this;
        if (!i) {
          return;
        }
        let r = e ? "on" : "off";
        if (this.useVideoV2) {
          i[r]("fullscreen_change", this.handlePlayerFullscreenChange);
          i[r]("cssFullscreen_change", this.handlePlayerCssFullscreenChange);
          i[r]("pause", this.handlePause);
          i[r]("seeked", this.handleSeeking);
          i[r]("durationchange", this.handleDurationChange);
        }
        i[r]("play", this.handlePlay);
        let l = n.querySelector(".preview-wrap");
        if (l && this.useVideoV2) {
          let n = e ? "addEventListener" : "removeEventListener";
          l[n]("mouseenter", this.handlePreviewWrapMouseenter);
          l[n]("mouseleave", this.handlePreviewWrapMouseleave);
          l[n]("mousemove", this.handlePreviewWrapMouseenter);
          if (i.root) {
            i.root[n]("fullscreenerror", this.handleFullScreenError);
          }
        }
      });
      eY(this, "handleFullScreenError", () => {
        if (!this.useCssFullscreen()) {
          this.isNotSupportFullscreen = true;
          this.setState({
            isInFullscreen: true
          });
          if (this.player && !this.player.isCssfullScreen) {
            this.switchPlayerCssFullscreen();
          }
          this.isInFullscreenLocalState = true;
        }
      });
      eY(this, "onKeyDown", e => {
        if (this.player && e.keyCode === keyboardKeyCodes.keyCodeMap.ESC) {
          if (this.player.fullscreen || this.player.isCssfullScreen) {
            this.closeFilePreviewer(g.MANUAL);
          }
          if (this.state.videoDialogStatus?.showDialog) {
            this.handleCloseVideoDialog();
          }
        }
      });
      eY(this, "handleBlockClick", e => {
        var i;
        var n;
        if ((n = this.props) !== null && n !== undefined && (i = n.onBlockClick) !== null && i !== undefined) {
          i.call(n, e);
        }
      });
      eY(this, "showVideoDialog", function () {
        var l;
        let o = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
        i.setHalfScreenStyle(true);
        let s = document.querySelector(`[data-record-id=${i.record.id}] .xgplayer-poster`);
        let a = "";
        if (s == null ? undefined : s.style?.backgroundImage) {
          a = /^url\(\"(.+)\"\)$/.exec(s.style.backgroundImage)?.[1] ?? "";
        }
        i.setState({
          videoDialogStatus: {
            ...i.state.videoDialogStatus,
            posterImage: a,
            showDialog: true
          }
        });
        if (o) {
          if ((l = i.player) !== null && l !== undefined) {
            l.play();
          }
        }
      });
      eY(this, "handleShowVideoDialog", e => {
        if (this.isPreviewableVideo && !browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          let i = Date.now();
          let {
            videoDialogStatus: n
          } = this.state;
          let {
            lastClickTime: r,
            timeoutId: l
          } = n;
          if (e && r && i - r < 300) {
            clearTimeout(l);
            return;
          }
          n.lastClickTime = i;
          n.timeoutId = setTimeout(() => {
            this.showVideoDialog(true);
          }, 300);
        }
      });
      eY(this, "handleCloseVideoDialog", () => {
        this.setVideoModalProps({
          visible: false
        });
      });
      eY(this, "updateVideoDialogStatus", e => {
        if (this.isPreviewableVideo && !browserEnvironmentDetectionUtils.browserDetector.isMobile && docxBoolConfigGetters.getTrueConstant()) {
          this.setHalfScreenStyle(!!e);
        }
        this.setState({
          videoDialogStatus: {
            ...this.state.videoDialogStatus,
            showDialog: e
          }
        });
      });
      eY(this, "handleClick", debounceUtil_1_1.debounce((e, i) => {
        var n;
        this.handleBlockClick(e);
        if ((n = e.target) === null || n === undefined ? undefined : n.closest(".viewer-toolbar")) {
          e.stopPropagation();
          return;
        }
        if (i && this.getViewType() === viewTypeConstants.viewTypes.Preview && !this.state.videoDialogStatus.showDialog) {
          this.handlePreviewClick(e);
          this.blockManager.dispatch(hideBlockToolbarConsts.hideBlockToolbar);
        }
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          this.handlePreviewClick(e);
        }
        if (!this.editable || this.props.isSelected || browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isLark) {
          if (this.state.isDocInLandscape && browserEnvironmentDetectionUtils.browserDetector.isAndroid && !fileUtilsAndViewHelpers.isNativeEmbedSupported()) {
            window.flow.biz.control.functions({
              landscape: false
            });
          }
          docContentPageClickCollector.collectDocContentPageClick(this.id, {
            actionType: uiEventTrackingConstants.uiClickEvents.CLICK_FILE
          }, {
            blockManager: this.blockManager
          });
          this.blockManager.dispatch(hideBlockToolbarConsts.hideBlockToolbar);
        }
      }, 500, {
        leading: true,
        trailing: false
      }));
      eY(this, "handleDoubleClick", e => {
        var i;
        var n;
        if (!this.isPreviewableVideo) {
          return;
        }
        let {
          target: r
        } = e;
        if (!((i = r.closest) === null || i === undefined ? undefined : i.call(r, "xg-icon")) && !((n = r.closest) === null || n === undefined ? undefined : n.call(r, ".drive-cover-dialog-mask"))) {
          if (this.isInFullscreenLocalState) {
            this.closeFilePreviewer(g.MANUAL);
          } else {
            this.previewFileFullScreen();
          }
          e.preventDefault();
          e.stopPropagation();
        }
      });
      eY(this, "handleMouseDown", e => {
        e.preventDefault();
        e.stopPropagation();
        if (browserEnvironmentDetectionUtils.browserDetector.isIPad) {
          this.shouldPreventClick = false;
          setTimeout(() => {
            this.shouldPreventClick = true;
          }, 300);
        }
      });
      eY(this, "onPdfPreviewPageScrollPositionChanged", e => {
        this.pdfPreviewPageScrollPositionInfo = e;
      });
      eY(this, "handlePreviewClick", e => {
        if (e != null) {
          e.preventDefault();
        }
        if (e != null) {
          e.stopPropagation();
        }
        if (this.canPreview || browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          this.doPreview();
        } else {
          this.doDownload();
        }
      });
      eY(this, "fetchFileInfo", async () => {
        var i;
        var n;
        if (this.cacheFileInfo) {
          return this.cacheFileInfo;
        }
        let {
          token: r
        } = this.snapshot.file;
        let l = this.blockManager.config.get("getAuthToken");
        let o = await (l == null ? undefined : l());
        let s = await otterDocAttachmentFetcher.fetchSingleAttachment({
          pageToken: docTokenHelperUtils.resolveDocToken(),
          resourceKey: r,
          authToken: o
        });
        let a = s == null ? undefined : s.attachments?.[0];
        if (a != null && (n = a.play_info) !== null && n !== undefined && (i = n.media_info) !== null && i !== undefined) {
          i.sort((e, i) => {
            return Number(e == null ? undefined : e.meta?.height) - Number(i == null ? undefined : i.meta?.height);
          });
        }
        if (!this.isVideo || docFileMediaCheck.isFilePlayable(a)) {
          this.cacheFileInfo = s;
          setTimeout(() => {
            this.cacheFileInfo = null;
          }, 60000);
        }
        return s;
      });
      eY(this, "doPreview", debounceUtil_1_1.debounce(() => {
        if (this.shouldPreventClick) {
          this.shouldPreventClick = false;
          return;
        }
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile && !browserEnvironmentDetectionUtils.browserDetector.isH5) {
          this.previewFileFullScreen();
        } else {
          this.fetchFileInfo().then(e => {
            var r;
            var l;
            var o;
            let s = e == null ? undefined : e.attachments?.[0];
            if (this.isVideo) {
              let e = s == null ? undefined : s.play_info;
              let i = e == null ? undefined : (o = e.media_info) === null || o === undefined ? undefined : o.map(e => {
                return {
                  label: (e == null ? undefined : e.meta?.definition) || "",
                  value: (e == null ? undefined : e.main_url) || ""
                };
              });
              if (!(i == null ? undefined : i.length) || !e) {
                return;
              }
              if (!docFileMediaCheck.isFilePlayable(s)) {
                diContainerInstance.diContainer.get(docUiServiceSymbols.DocToastService).info(t("doc_video_progressing_try_again"));
                return;
              }
              let n = i[i.length - 1].value;
              let r = e.poster_url;
              this.setVideoModalProps({
                visible: true,
                url: n,
                definitions: i,
                posterUrl: r
              });
              return;
            }
            let a = this.isAudio ? s == null ? undefined : (l = s.play_info) === null || l === undefined ? undefined : (r = l.media_info) === null || r === undefined ? undefined : r[0]?.main_url : s == null ? undefined : s.url;
            if (a) {
              if (this.isImage) {
                this.setImageModalProps({
                  visible: true,
                  urls: [a],
                  currentIndex: 0
                });
                return;
              }
              diContainerInstance.diContainer.get(docFileUtilsSymbol.docFileUtilsSymbol).openLinkInNewTab(a);
            }
          });
        }
        docContentPageClickCollector.collectDocContentPageClick(this.id, {
          actionType: uiEventTrackingConstants.uiClickEvents.CLICK_FILE_PREVIEW_BUTTON
        }, {
          blockManager: this.blockManager
        });
        this.blockManager.dispatch(hideBlockToolbarConsts.hideBlockToolbar);
      }, 200));
      eY(this, "doDownload", () => {
        docAttachmentDownloadHandler.downloadDocAttachment(this.model, this.props.previewResultCode);
      });
      eY(this, "handleLongPress", e => {
        e.preventDefault();
        e.stopPropagation();
      });
      eY(this, "handleTextTouch", touchInteractionUtil.createTouchHandler({
        onClick: this.handlePreviewClick,
        onLongPress: this.handleLongPress
      }));
      eY(this, "handleTextPreviewClick", e => {
        e.preventDefault();
        e.stopPropagation();
        if (!browserEnvironmentDetectionUtils.browserDetector.isH5) {
          this.handlePreviewClick(e);
        }
      });
      eY(this, "updateOrientation", e => {
        let {
          type: i
        } = e;
        this.setState({
          isDocInLandscape: eV(i)
        });
      });
      eY(this, "previewFileFullScreen", async function () {
        var e;
        var n;
        var l;
        var a;
        var c;
        let d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : m.MANUAL;
        let h = arguments.length > 1 ? arguments[1] : undefined;
        if (!browserEnvironmentDetectionUtils.browserDetector.isMobile || browserEnvironmentDetectionUtils.browserDetector.isH5) {
          i.doPreview();
          return;
        }
        if (docxAnchorServiceHelper.isImchatSyncedBlock()) {
          docxAnchorServiceHelper.getAndTrackAnchor(i.blockManager, i);
          return;
        }
        if (i.isInPreviewType() && fileUtilsAndViewHelpers.getFileNameWithoutExtension(i.record.snapshot.file.name) && browserEnvironmentDetectionUtils.browserDetector.isInVC && !i.player && !i.getShouldRender()) {
          i.retryFullscreenOptions = {
            openSource: d
          };
          return;
        }
        if ((browserEnvironmentDetectionUtils.browserDetector.isInVC || browserEnvironmentDetectionUtils.browserDetector.isLark) && browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          let e = i.blockManager.editorAPI.getService(mobileUiEventTokens.mobileMenuToken, {
            optional: true
          });
          if (e != null) {
            e.hide();
          }
          i.selectionAPI.removeAllSelection();
          if (browserEnvironmentDetectionUtils.browserDetector.isIOS) {
            setTimeout(() => {
              var e;
              if ((e = window.getSelection()) === null || e === undefined) {
                return undefined;
              } else {
                return e.removeAllRanges();
              }
            });
          }
        }
        if (!browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isInVC) {
          i.selectionAPI.removeAllSelection();
          if ((e = window.getSelection()) !== null && e !== undefined) {
            e.removeAllRanges();
          }
        }
        if (i.isEnterFullScreenDirectly && i.player) {
          if (!i.useCssFullscreen()) {
            try {
              await i.player.getFullscreen();
              i.setState({
                isInFullscreen: true
              });
            } catch (e) {
              i.isNotSupportFullscreen = true;
            }
          }
          if (i.useCssFullscreen()) {
            i.setState({
              isInFullscreen: true
            });
            if (!i.player.isCssfullScreen) {
              i.switchPlayerCssFullscreen();
            }
          }
          i.isInFullscreenLocalState = true;
        } else {
          if ((n = i.player) !== null && n !== undefined) {
            n.pause();
          }
          let e = (l = await i.fetchFileInfo()) === null || l === undefined ? undefined : l.attachments?.[0];
          await ec.previewFileFullScreen({
            src: xssContentSanitizer.sanitizeUrl((e == null ? undefined : e.url) || ((c = e.play_info) === null || c === undefined ? undefined : c.media_info[((a = e.play_info) === null || a === undefined ? undefined : a.media_info.length) - 1]?.main_url), null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWJXRlhlR3hNTTFwd1dsa*pkb%50$m1oWk0xRjJXbTFz-zFw$E1Xb*lSemxxW$hre*$WcFhSbXBr%XpFe$lWZFdNMHh1$W5wbFIwWj$Xak5XZWc9PQ"
            }),
            model: i.model,
            onClose: () => {
              i.handlePreviewerClose(h);
              i.isInFullscreenLocalState = false;
              if (changeSourceConstants.isH5Browser) {
                (function (e = eU) {
                  document.body.style.position = "";
                  document.body.style.top = "";
                  window.scrollTo(0, e);
                  docxEditorEventConstantsAndManager.globalEventConstants.emit(editorActionConstants_1.eventLockTitle, false);
                })();
              }
              eh();
              return false;
            },
            attachmentPermissions: i.getAttachmentPermissions(),
            blockManager: i.blockManager,
            extraProps: {
              actionManager: i.model.getActionManager()
            },
            pdfPreviewPageScrollPositionInfo: i.pdfPreviewPageScrollPositionInfo,
            useCssFullscreen: i.useCssFullscreen
          }, d, i.getNestedRecordId());
          i.isInFullscreenLocalState = true;
          if (changeSourceConstants.isH5Browser) {
            (function () {
              docxEditorEventConstantsAndManager.globalEventConstants.emit(editorActionConstants_1.eventLockTitle, true);
              let e = window.scrollY;
              setTimeout(() => {
                document.body.style.position = "fixed";
                document.body.style.top = `-${e}px`;
              }, 0);
              eU = e;
            })();
          }
          ed();
        }
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          i.deactivateComment();
        }
        if (browserEnvironmentDetectionUtils.browserDetector.isH5) {
          platformDocUtils.vpe.emit(docxEditorEventConstantsAndManager.eventConstants.MOBILE.FILE.DOC_FILE_FULL_SCREEN_CHANGE, true);
        }
      });
      eY(this, "deactivateComment", () => {
        var e;
        if ((e = this.props.recursionProps.commentModule) !== null && e !== undefined) {
          e.deactivateComment(docxCommentConstants.commentInteractionEvents.enterFullScreen);
        }
      });
      eY(this, "handlePlayerFullscreenChange", e => {
        if (e !== this.state.isInFullscreen) {
          this.setState({
            isInFullscreen: e
          });
          this.isInFullscreenLocalState = e;
        }
        if (e && browserEnvironmentDetectionUtils.browserDetector.isAndroid) {
          let e = this.blockManager.editorAPI.getService(mobileUiEventTokens.mobileToolbarToken, {
            optional: true
          });
          if (e != null) {
            e.hide();
          }
        }
        if (browserEnvironmentDetectionUtils.browserDetector.isH5) {
          platformDocUtils.vpe.emit(docxEditorEventConstantsAndManager.eventConstants.MOBILE.FILE.DOC_FILE_FULL_SCREEN_CHANGE, e);
        }
        if (e) {
          this.handleCloseVideoDialog();
          this.toggleBoxPreviewModule(e);
          eK.fullScreenNestedRecordId = this.model.recordId;
          ed();
        } else {
          this.toggleBoxPreviewModule(e);
          eK.fullScreenNestedRecordId = null;
          eh();
        }
      });
      eY(this, "setHalfScreenStyle", e => {
        var i;
        var n;
        var r;
        var l;
        var o;
        let s = document.querySelector("body");
        let a = this.getRootBlock();
        let c = this.getRootBlock(true);
        let d = (i = this.hostElement) === null || i === undefined ? undefined : i.closest(".block.docx-table-block");
        let h = (n = this.hostElement) === null || n === undefined ? undefined : n.closest("table");
        if (!a) {
          if (s != null && (r = s.classList) !== null && r !== undefined) {
            r.remove(docxLayoutConstants_1.hsBodyClass);
          }
          return;
        }
        let u = d == null ? undefined : d.querySelector(".content-scroller");
        if (e) {
          if (s != null && (l = s.classList) !== null && l !== undefined) {
            l.add(docxLayoutConstants_1.hsBodyClass);
          }
          a.classList.add(docxLayoutConstants_1.hsBlockClass);
          if (a !== c) {
            if (c != null) {
              c.classList.add(docxLayoutConstants_1.hsBlockClass);
            }
          }
          if (d != null) {
            d.classList.add(docxLayoutConstants_1.hsBlockClass);
          }
          if (h != null) {
            h.classList.add(docxLayoutConstants_1.hsDomClass);
          }
          if (u && (browserEnvironmentDetectionUtils.browserDetector.isSafari || browserEnvironmentDetectionUtils.browserDetector.isChrome && browserEnvironmentDetectionUtils.browserDetector.isIPad)) {
            u.style.overflow = "visible";
          }
        } else {
          if (s != null && (o = s.classList) !== null && o !== undefined) {
            o.remove(docxLayoutConstants_1.hsBodyClass);
          }
          a.classList.remove(docxLayoutConstants_1.hsBlockClass);
          if (a !== c) {
            if (c != null) {
              c.classList.remove(docxLayoutConstants_1.hsBlockClass);
            }
          }
          if (d != null) {
            d.classList.remove(docxLayoutConstants_1.hsBlockClass);
          }
          if (h != null) {
            h.classList.remove(docxLayoutConstants_1.hsDomClass);
          }
          if (u && (browserEnvironmentDetectionUtils.browserDetector.isSafari || browserEnvironmentDetectionUtils.browserDetector.isChrome && browserEnvironmentDetectionUtils.browserDetector.isIPad)) {
            u.style.overflow = "hidden";
          }
        }
      });
      eY(this, "getRootBlock", function () {
        var e;
        let n = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
        let r = n ? syncedReferenceBlockUtils.getMainDocxBlockManager(i.editorAPI) : i.blockManager;
        if (!r) {
          return null;
        }
        let l = r.getBlockViewByBlockIdNotCheck(r.rootBlockId);
        if (l) {
          if ((e = l.hostElement) === null || e === undefined) {
            return undefined;
          } else {
            return e.querySelector(".root-block");
          }
        } else {
          return null;
        }
      });
      eY(this, "setCssFullscreenStyle", e => {
        var i;
        var n;
        var r;
        var l;
        var o;
        let s = document.querySelector("body");
        let a = this.getRootBlock();
        let c = this.getRootBlock(true);
        let d = (i = this.hostElement) === null || i === undefined ? undefined : i.closest(".block.docx-table-block");
        let h = (n = this.hostElement) === null || n === undefined ? undefined : n.closest("table");
        if (!a) {
          if (s != null && (r = s.classList) !== null && r !== undefined) {
            r.remove(docxLayoutConstants_1.fsBodyClass);
          }
          return;
        }
        let u = d == null ? undefined : d.querySelector(".content-scroller");
        if (e) {
          if (s != null && (l = s.classList) !== null && l !== undefined) {
            l.add(docxLayoutConstants_1.fsBodyClass);
          }
          a.classList.add(docxLayoutConstants_1.fsBlockClass);
          if (a !== c) {
            if (c != null) {
              c.classList.add(docxLayoutConstants_1.fsBlockClass);
            }
          }
          if (d != null) {
            d.classList.add(docxLayoutConstants_1.fsBlockClass);
          }
          if (h != null) {
            h.classList.add(docxLayoutConstants_1.fsDomClass);
          }
          if (u && (browserEnvironmentDetectionUtils.browserDetector.isSafari || browserEnvironmentDetectionUtils.browserDetector.isChrome && browserEnvironmentDetectionUtils.browserDetector.isIPad)) {
            u.style.overflow = "visible";
          }
        } else {
          if (s != null && (o = s.classList) !== null && o !== undefined) {
            o.remove(docxLayoutConstants_1.fsBodyClass);
          }
          a.classList.remove(docxLayoutConstants_1.fsBlockClass);
          if (a !== c) {
            if (c != null) {
              c.classList.remove(docxLayoutConstants_1.fsBlockClass);
            }
          }
          if (d != null) {
            d.classList.remove(docxLayoutConstants_1.fsBlockClass);
          }
          if (h != null) {
            h.classList.remove(docxLayoutConstants_1.fsDomClass);
          }
          if (u && (browserEnvironmentDetectionUtils.browserDetector.isSafari || browserEnvironmentDetectionUtils.browserDetector.isChrome && browserEnvironmentDetectionUtils.browserDetector.isIPad)) {
            u.style.overflow = "hidden";
          }
        }
      });
      eY(this, "handlePlayerCssFullscreenChange", e => {
        if (e) {
          this.handleCloseVideoDialog();
          this.toggleBoxPreviewModule(e);
          this.setCssFullscreenStyle(e);
          eK.fullScreenNestedRecordId = this.model.recordId;
          ed();
        } else {
          this.toggleBoxPreviewModule(e);
          this.setCssFullscreenStyle(e);
          eK.fullScreenNestedRecordId = null;
          eh();
        }
      });
      eY(this, "closeFilePreviewer", async e => {
        if (this.isEnterFullScreenDirectly && this.player) {
          if (e === g.Unmount) {
            eh();
          }
          if (!this.useCssFullscreen() || !this.player.isCssfullScreen) {
            await this.player.exitFullscreen();
          }
          if (this.isInFullscreenLocalState) {
            this.switchPlayerCssFullscreen();
          }
        } else {
          ec.closeFilePreviewer(this.record.snapshot.file.token, e, this.getNestedRecordId());
          eK.fullScreenNestedRecordId = null;
        }
        this.isInFullscreenLocalState = false;
      });
      eY(this, "handleCommentExitFullscreen", e => {
        if (this.isInFullscreenLocalState && this.isPreviewableVideo && fileUtilsAndViewHelpers.isFullScreenInVC() && (e == null ? undefined : e.source) === "comment") {
          this.closeFilePreviewer(g.COMMENT);
        }
      });
      eY(this, "handlePreviewerClose", e => {
        emptyExportFunction.emptyFunction(e);
      });
      eY(this, "handleViewerRef", e => {
        this.viewer = e;
      });
      eY(this, "handleDlpMsgCallback", e => {
        e.result = e.result === platformDocUtils.SVk.SENSITIVE;
        window.flow.biz.util.notifyDlpUploadCheck(e);
      });
      eY(this, "updateToRenderStatus", () => {
        this.updateBufferStatus(v.RENDER);
      });
      eY(this, "useCssFullscreen", () => browserEnvironmentDetectionUtils.browserDetector.isFeishuRooms || this.isNotSupportFullscreen || browserEnvironmentDetectionUtils.browserDetector.isIPadBrowser || fileUtilsAndViewHelpers.isFullScreenInVC() || !!browserEnvironmentDetectionUtils.browserDetector.isH5 && !!browserEnvironmentDetectionUtils.browserDetector.isIOS);
      eY(this, "getAttachmentPermissions", () => {
        let {
          print: e,
          export: i,
          copy: n,
          printable: r,
          exportable: l,
          copyable: o,
          previewable: s,
          previewResultCode: a
        } = this.props;
        return {
          print: e,
          export: i,
          copy: n,
          printable: r,
          exportable: l,
          copyable: o,
          previewable: s,
          previewResultCode: a
        };
      });
      eY(this, "handleFileCardMount", () => {});
      eY(this, "handlePause", () => {
        this.setState({
          isPause: true,
          isPlaying: false
        });
        if (this.useVideoV2 && this.isHovering) {
          this.setState({
            shouldShowControlsAndTitle: true
          });
          if (this.autoHideControlsTitleTimer) {
            clearTimeout(this.autoHideControlsTitleTimer);
          }
        }
      });
      eY(this, "handlePlay", () => {
        eK.playerList.forEach(e => {
          if (e !== this.player && e && !e.paused) {
            var i;
            if ((i = e.pause) !== null && i !== undefined) {
              i.call(e);
            }
          }
        });
        this.setState({
          isPause: false,
          isPlaying: true
        });
        if (this.useVideoV2) {
          this.addAutoHideControlsTitleTimer();
        }
      });
      eY(this, "handleSeeking", () => {
        var e;
        var i;
        if (!this.state.isSeek) {
          this.setState({
            isSeek: !((i = this.player) === null || i === undefined ? undefined : (e = i.root) === null || e === undefined ? undefined : e.className.includes("xgplayer-nostart"))
          });
        }
      });
      eY(this, "handleDurationChange", e => {
        this.setState({
          duration: e.player.duration
        });
      });
      eY(this, "watchMouseleaveWhenHovered", e => {
        let i = e.matches(":hover");
        let n = () => {
          this.setState({
            shouldShowControlsAndTitle: false
          });
          e.removeEventListener("mouseleave", n);
        };
        if (i) {
          e.addEventListener("mouseleave", n);
        }
        return i;
      });
      eY(this, "addAutoHideControlsTitleTimer", () => {
        if (this.autoHideControlsTitleTimer) {
          clearTimeout(this.autoHideControlsTitleTimer);
        }
        this.autoHideControlsTitleTimer = setTimeout(() => {
          var e;
          var i;
          var n;
          let r = (i = this.player) === null || i === undefined ? undefined : (e = i.root) === null || e === undefined ? undefined : e.querySelector(".xgplayer-controls");
          let l = (n = this.hostElement) === null || n === undefined ? undefined : n.querySelector(".preview-card-header");
          if (!r || !l || !this.watchMouseleaveWhenHovered(r) && !this.watchMouseleaveWhenHovered(l)) {
            this.setState({
              shouldShowControlsAndTitle: false
            });
          }
        }, docxViewConfigConstants.constant4000);
      });
      eY(this, "handlePreviewWrapMouseenter", () => {
        if (!this.state.shouldShowControlsAndTitle) {
          this.isHovering = true;
          this.setState({
            shouldShowControlsAndTitle: true
          });
          if (this.player?.hasStart && !this.player?.paused) {
            this.addAutoHideControlsTitleTimer();
          }
        }
      });
      eY(this, "handlePreviewWrapMouseleave", () => {
        this.isHovering = false;
        if (this.player && this.player.hasStart && !this.player.paused) {
          this.addAutoHideControlsTitleTimer();
        } else {
          this.setState({
            shouldShowControlsAndTitle: false
          });
        }
      });
      let {
        id: l
      } = this.model;
      let {
        token: o,
        mimeType: a,
        size: d
      } = this.record.snapshot.file;
      let f = this.getViewType();
      let w = {
        block_file_type: f,
        mime_type: a,
        size: d
      };
      if (f === viewTypeConstants.viewTypes.Inline) {
        blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.INIT, {
          id: this.model.id,
          type: docBlockTypeConstants.blockTypeConstants.FILE,
          time: new Date().getTime(),
          viewType: viewTypeConstants.viewTypes.Inline,
          profile: w
        });
      } else {
        blockLoadPerformanceTracker.BlockLoadPerformanceTracker.recordBlockProfile(l, w);
      }
      if (fileUtilsAndViewHelpers.isEmptyString(o)) {
        if ((n = (r = this.props).onBlockReady) !== null && n !== undefined) {
          n.call(r);
        }
      }
    }
  }
  eY(eK, "type", docBlockTypeConstants.blockTypeConstants.FILE);
  eY(eK, "defaultViewType", docxViewConfigConstants.viewTypeCard);
  eY(eK, "playerList", []);
  eY(eK, "_fullScreenNestedRecordId", undefined);
  eY(eK, "halfScreenNestedRecordId", null);
  require.d(exports, {
    DocxFileBlockManager: function () {
      return eK;
    }
  });
}