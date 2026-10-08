// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'r' to 'modalDialogComponent'
// - Resolved require(903195) to 'modal-dialog-component'
// - Renamed variable 'a' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Renamed variable '_' to 'imageTransformUtils'
// - Resolved require(478010) to 'image-transform-utils'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(27461) to 'uploader'
// - Resolved require.bind(914264) to 'react-image-crop-component'
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'm' to 'processImage' (module 478010)
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// - Updated imported property 'Z' to 'Modal' (module 903195)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: uploader-croper.b881877a.js
         * chunkId: 76646
         * moduleId: 566664
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var imageTransformUtils = require("image-transform-utils") /*id: 478010*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("uploader") /*id: 27461*/.then(require.bind(require, "react-image-crop-component") /*id: 914264*/)
  }));
  let c = e => {
    let {
      visible: n,
      title: o = "图片裁剪",
      image: i,
      loading: c,
      okText: s,
      cancelText: d,
      onCancel: w,
      onCropComplete: f,
      onComplete: p,
      cropShape: m
    } = e;
    let b = reactCoreLibraryReexport.useRef();
    let [h, v] = reactCoreLibraryReexport.useState(null);
    let [C, S] = reactCoreLibraryReexport.useState(null);
    let [g, y] = reactCoreLibraryReexport.useState(null);
    let [A, D] = reactCoreLibraryReexport.useState({
      x: 0,
      y: 0
    });
    let [L, j] = reactCoreLibraryReexport.useState(1);
    let x = async (e, n) => {
      try {
        let e = await imageTransformUtils.processImage(i, n);
        if (e) {
          v(e.base64);
          S(e.blob);
          y(e.fileType);
          if (f != null) {
            f(e);
          }
        }
      } catch (e) {
        var o;
        if ((o = b.current) !== null && o !== undefined) {
          o.error({
            reason: "error",
            error: e
          });
        }
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (i) {
        b.current = eventReportingService.createEventReporter({
          eventName: "uploader_crop",
          meta: {}
        });
      }
    }, [i]);
    return reactJsxRuntimeCoreReexport.jsx(modalDialogComponent.Modal, {
      visible: n,
      centered: true,
      motion: false,
      title: o,
      width: 450,
      onCancel: () => {
        var e;
        v("");
        if (w != null) {
          w();
        }
        if ((e = b.current) !== null && e !== undefined) {
          e.error({
            reason: "cancel"
          });
        }
      },
      confirmLoading: c,
      onOk: () => {
        if (h && g) {
          var e;
          if (p != null) {
            p({
              blob: C,
              base64: h,
              fileType: g
            });
          }
          if ((e = b.current) !== null && e !== undefined) {
            e.success();
          }
        }
      },
      okButtonProps: {
        disabled: !h || !g
      },
      className: "modal-jdkeUU",
      okText: s,
      cancelText: d,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "crop-container-aEIyXg",
        children: reactJsxRuntimeCoreReexport.jsx(u, {
          image: i,
          objectFit: "contain",
          crop: A,
          zoom: L,
          aspect: 1,
          cropShape: m,
          onCropChange: D,
          onZoomChange: j,
          onCropComplete: x
        })
      })
    });
  };
  require.d(exports, {
    ImageCrop: function () {
      return c;
    }
  });
}