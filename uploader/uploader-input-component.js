// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'throttledPathFilterStringify'
// - Resolved require(245841) to 'throttled-path-filter-stringify'
// - Renamed variable 'i' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'a' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Renamed variable 's' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'p' to 'imageTransformUtils'
// - Resolved require(478010) to 'image-transform-utils'
// - Renamed variable 'h' to 'aiSpaceAttachmentConstants'
// - Resolved require(241695) to 'ai-space-attachment-constants'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(76646) to 'uploader-croper'
// - Resolved require.bind(566664) to 'image-crop-modal'
// - Resolved require.e(85028) to 'uploader-compressor'
// - Resolved require.bind(532036) to 'image-compression-utils_1'
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'kZ' to 'attachmentTypes' (module 241695)
// - Updated imported property 'Z' to 'throttledPathStr' (module 245841)
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// - Updated imported property 'w' to 'fileToBase64' (module 478010)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: uploader.6107bcd1.js
         * chunkId: 27461
         * moduleId: 830214
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  let c = e => {
    let {
      file: t,
      maxWidth: o,
      maxHeight: r,
      minWidth: n,
      minHeight: i
    } = e;
    return new Promise((e, a) => {
      let c = new FileReader();
      c.readAsDataURL(t);
      c.onload = function (t) {
        let p = new Image();
        p.src = xssContentSanitizer.sanitizeUrl(t.target?.result, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$N$05IZ%haWl-xSnNZMms1ZW1OdFR-WmhWel-zWkZo%mRt%ll$bkJp%0%xM$pFaE9hR050WkR*amR6MDk"
        });
        p.onload = function () {
          let {
            width: t,
            height: s
          } = p;
          if (o && t > o || n && t < n || r && s > r || i && s < i) {
            a(Error("image over measurement"));
          } else {
            e(true);
          }
        };
        p.onerror = function () {
          e(true);
        };
      };
    });
  };
  var imageTransformUtils = require("image-transform-utils") /*id: 478010*/;
  var aiSpaceAttachmentConstants = require("ai-space-attachment-constants") /*id: 241695*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        ImageCrop: e
      } = await require.e("uploader-croper") /*id: 76646*/.then(require.bind(require, "image-crop-modal") /*id: 566664*/);
      return {
        default: e
      };
    }
  }));
  let l = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      type: s,
      children: l,
      crop: m,
      compress: f,
      limit: v = {},
      onChangeStart: g,
      onChange: w,
      onError: C,
      disabled: S
    } = e;
    let R = s === aiSpaceAttachmentConstants.attachmentTypes.Image;
    let y = reactCoreLibraryReexport.useRef(null);
    let z = reactCoreLibraryReexport.useRef();
    let x = reactCoreLibraryReexport.useRef();
    let [b, D] = reactCoreLibraryReexport.useState();
    let E = async e => {
      var t;
      var r;
      var a;
      var s;
      if (R) {
        try {
          await c({
            file: e,
            ...throttledPathFilterStringify.throttledPathStr(v, ["maxWidth", "maxHeight", "minWidth", "minHeight"])
          });
        } catch (e) {
          if (C != null) {
            C(Error(e.message || "image over measurement"));
          }
          if ((t = z.current) !== null && t !== undefined) {
            t.error({
              reason: "image over measurement",
              error: e
            });
          }
          return;
        }
      }
      try {
        let t = await asyncRetryUtils.retryWithFallback({
          fn: async () => {
            let {
              compressor: e
            } = await require.e("uploader-compressor") /*id: 85028*/.then(require.bind(require, "image-compression-utils_1") /*id: 532036*/);
            return e;
          }
        });
        let n = f && R ? await t(e, typeof f == "object" ? f : undefined) : e;
        if ((v == null ? undefined : v.size) && n.size > v.size) {
          if (C != null) {
            C(Error("oversize"));
          }
          if ((a = z.current) !== null && a !== undefined) {
            a.error({
              reason: "image over size",
              meta: {
                limitSize: v.size,
                fileSize: n.size
              }
            });
          }
          return;
        }
        if (w != null) {
          w(n);
        }
        if ((r = z.current) !== null && r !== undefined) {
          r.success();
        }
        D(undefined);
      } catch (e) {
        if ((s = z.current) !== null && s !== undefined) {
          s.error({
            reason: "compress fail",
            error: e
          });
        }
      }
    };
    let M = async e => {
      var t;
      var o;
      z.current = eventReportingService.createEventReporter({
        eventName: "uploader_input_select",
        meta: {
          type: s,
          crop: !!m,
          compress: !!f,
          limit: v,
          disabled: S
        }
      });
      let r = "dataTransfer" in e ? e.dataTransfer.files : e.target.files;
      if (!r || r.length === 0) {
        if ((t = z.current) !== null && t !== undefined) {
          t.error({
            reason: "no file"
          });
        }
        return;
      }
      let n = r[0];
      x.current = n;
      if ((await (g == null ? undefined : g(n))) === false) {
        if (C != null) {
          C(Error("uploader file onChangeStart failed"));
        }
        if ((o = z.current) !== null && o !== undefined) {
          o.error({
            reason: "onChangeStart return false"
          });
        }
        return;
      }
      if (R && m) {
        D(await imageTransformUtils.fileToBase64(n));
        return;
      }
      E(n);
    };
    reactCoreLibraryReexport.useEffect(() => {
      eventReportingService.createEventReporter({
        eventName: "uploader_input_show",
        meta: {
          type: s,
          crop: !!m,
          compress: !!f,
          limit: v,
          disabled: S
        }
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "uploader-input-container",
      children: [reactJsxRuntimeCoreReexport.jsx("input", {
        className: "uploader-input",
        onChange: M,
        ref: y,
        accept: v.accept,
        style: {
          display: "none"
        },
        type: "file"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "uploader-input-btn",
        onClick: e => {
          if (!S) {
            if (y.current) {
              y.current.value = "";
              y.current.click();
              z.current = undefined;
            }
            if (e != null) {
              e.stopPropagation();
            }
          }
        },
        ref: t,
        children: l
      }), b ? reactJsxRuntimeCoreReexport.jsx(d, {
        visible: true,
        image: b,
        onCancel: () => {
          D(undefined);
        },
        onComplete: e => {
          let t = e.fileType;
          if (e.blob) {
            E(new File([e.blob], "croped", {
              type: t,
              lastModified: Date.now()
            }));
          } else {
            var o;
            if (C != null) {
              C(Error("crop failed"));
            }
            if ((o = z.current) !== null && o !== undefined) {
              o.error({
                reason: "crop failed"
              });
            }
          }
        },
        ...(typeof m == "object" ? m : {})
      }) : null]
    });
  });
  require.d(exports, {
    UploaderInput: function () {
      return l;
    }
  });
}