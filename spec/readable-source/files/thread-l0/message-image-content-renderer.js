// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'MessageImageContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 284556
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var imageListGridView = require("image-list-grid-view") /*id: 332524*/;
  var imageActionUtils = require("image-action-utils") /*id: 323276*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var imageStatusEnum = require("image-status-enum") /*id: 923272*/;
  var imagePreviewEventHandlerHook = require("image-preview-event-handler-hook") /*id: 810587*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      imageList: t,
      message: i
    } = e;
    let {
      imageEventCallbacks: d,
      renderImagePreview: u
    } = imagePreviewEventHandlerHook.useImagePreviewEvents({
      messageId: i == null ? undefined : i.message_id
    }, t, chatCoreConstants.MessageActions.Other);
    let h = reactCoreLibraryReexport.useMemo(() => ({
      onImageClick: (e, t) => {
        let {
          src: i
        } = t;
        if (i) {
          d.onImageClick(e, i);
        }
      },
      onImageRender: e => {
        let {
          src: t
        } = e;
        if (t) {
          d.onImageRender(t);
        }
      }
    }), [t]);
    let p = t.map(e => {
      let {
        status: t,
        placeholder: i
      } = e;
      if (t === imageStatusEnum.imageStatusEnum.ImageStatusGenerating) {
        return {
          ...e,
          image_thumb: {
            width: (i == null ? undefined : i.width) || 1024,
            height: (i == null ? undefined : i.height) || 1024,
            url: "",
            format: "png",
            url_formats: {}
          },
          isThinking: true
        };
      } else {
        return e;
      }
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(imageListGridView.ImageListGrid, {
        data: {
          image_list: p || []
        },
        eventCallbacks: h,
        "data-testid": "message_image_content",
        message: i,
        overideContextMenuEvent: true,
        getImageThumbUrl: e => {
          return imageActionUtils.processImageData(e).thumbImage?.url || "";
        },
        getOtherFormatSrc: e => imageActionUtils.processImageData(e).otherFormat
      }), u()]
    });
  };
  let u = e => {
    var i;
    var n;
    var a;
    var o;
    var s;
    var u;
    var p;
    var m;
    var _;
    var y;
    var x;
    var C;
    var R;
    var E;
    var I;
    var Z;
    let {
      creationsImageList: O,
      message: W,
      className: B
    } = e;
    let A = [];
    let L = [O[0]];
    let D = {
      width: ((n = O[0]) === null || n === undefined ? undefined : (i = n.image) === null || i === undefined ? undefined : i.image_ori?.width) ?? ((o = O[0]) === null || o === undefined ? undefined : (a = o.image) === null || a === undefined ? undefined : a.placeholder?.width),
      height: ((u = O[0]) === null || u === undefined ? undefined : (s = u.image) === null || s === undefined ? undefined : s.image_ori?.height) ?? ((m = O[0]) === null || m === undefined ? undefined : (p = m.image) === null || p === undefined ? undefined : p.placeholder?.height)
    };
    for (let e = 1; e < O.length; e++) {
      let t = O[e];
      if (((t == null ? undefined : (_ = t.image) === null || _ === undefined ? undefined : _.image_ori?.width) ?? (t == null ? undefined : (y = t.image) === null || y === undefined ? undefined : y.placeholder?.width)) === D.width && ((t == null ? undefined : (x = t.image) === null || x === undefined ? undefined : x.image_ori?.height) ?? (t == null ? undefined : (C = t.image) === null || C === undefined ? undefined : C.placeholder?.height)) === D.height) {
        L.push(t);
      } else {
        A.push(L);
        L = [t];
        D = {
          width: (t == null ? undefined : (R = t.image) === null || R === undefined ? undefined : R.image_ori?.width) ?? (t == null ? undefined : (E = t.image) === null || E === undefined ? undefined : E.placeholder?.width),
          height: (t == null ? undefined : (I = t.image) === null || I === undefined ? undefined : I.image_ori?.height) ?? (t == null ? undefined : (Z = t.image) === null || Z === undefined ? undefined : Z.placeholder?.height)
        };
      }
    }
    A.push(L);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: A.map((e, t) => {
        let i = e.reduce((e, t) => {
          if (t.image) {
            e.push(t.image);
          }
          return e;
        }, []);
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: B,
          children: reactJsxRuntimeCoreReexport.jsx(d, {
            imageList: i,
            message: W
          })
        }, t);
      })
    });
  };
  require.d(exports, {
    MessageImageContent: function () {
      return u;
    }
  });
}