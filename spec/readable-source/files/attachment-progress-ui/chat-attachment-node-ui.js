// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'isNullishCheck'
// - Resolved require(282109) to 'is-nullish-check'
// - Renamed variable 'l' to 'isNumberUtil'
// - Resolved require(897814) to 'is-number-util'
// - Renamed variable 's' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'd' to 'infraUtilFunctions'
// - Resolved require(385226) to 'infra-util-functions'
// - Renamed variable 'u' to 'fileTypeDetectionUtils'
// - Resolved require(393072) to 'file-type-detection-utils'
// - Renamed variable 'c' to 'getFileExtension'
// - Resolved require(256745) to 'get-file-extension'
// - Renamed variable 'f' to 'urlParamUtils'
// - Resolved require(919916) to 'url-param-utils'
// - Renamed variable 'h' to 'closeIconButton'
// - Resolved require(195712) to 'close-icon-button'
// - Renamed variable 'p' to 'tooltipComponentExports'
// - Resolved require(341865) to 'tooltip-component-exports'
// - Renamed variable 'x' to 'progressIndicators'
// - Resolved require(875397) to 'progress-indicators'
// - Renamed variable 'g' to 'buttonComponentExport'
// - Resolved require(576887) to 'button-component-export'
// - Renamed variable '_' to 'imChatIcon'
// - Resolved require(794033) to 'im-chat-icon'
// - Renamed variable 'v' to 'lazyFileIconWrapper'
// - Resolved require(312448) to 'lazy-file-icon-wrapper'
// - Renamed variable 'm' to 'statusConstants'
// - Resolved require(356183) to 'status-constants'
// - Renamed variable 'b' to 'stringUtilities'
// - Resolved require(612303) to 'string-utilities'
// - Renamed variable 'k' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'l' to 'statusTypes' (module 356183)
// - Updated imported property 'x' to 'processStatus' (module 356183)
// - Updated imported property 'kT' to 'createFormatter' (module 612303)
// - Updated imported property 'Z' to 'isNil' (module 282109)
// - Updated imported property 'bc' to 'formatBytesSize' (module 385226)
// - Updated imported property 'aP' to 'getDisplayCategory' (module 393072)
// - Updated imported property 'JB' to 'getFileCategory' (module 393072)
// - Updated imported property 'l' to 'getFileExtension' (module 256745)
// - Updated imported property 'Z' to 'isNumber' (module 897814)
// - Updated imported property 'jv' to 'validateUrl' (module 919916)
// - Updated imported property 'aA' to 'lazyFileIcon' (module 312448)
// - Updated imported property 'm' to 'CircularProgress' (module 875397)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'Z' to 'Button' (module 576887)
// - Updated imported property 'G' to 'ChatIcon' (module 794033)
// - Updated imported property 'l' to 'CloseIconButton' (module 195712)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27145.66d944df.js
         * chunkId: 27145
         * moduleId: 866890
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var closeIconButton = require("close-icon-button") /*id: 195712*/;
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var progressIndicators = require("progress-indicators") /*id: 875397*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var imChatIcon = require("im-chat-icon") /*id: 794033*/;
  var lazyFileIconWrapper = require("lazy-file-icon-wrapper") /*id: 312448*/;
  var statusConstants = require("status-constants") /*id: 356183*/;
  var stringUtilities = require("string-utilities") /*id: 612303*/;
  var w = {
    wrapper: "wrapper-OGyKLS",
    delete: "delete-jTD4ZA",
    ref: "ref-gGtQ2L"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let $ = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: r,
      fileName: a,
      viewOnly: $,
      bytes: j,
      i18nConfig: N,
      charCount: y,
      showRef: C = true,
      uploadStatus: A = statusConstants.statusTypes.Success,
      parseStatus: L = statusConstants.processStatus.Success,
      uploadPercent: S = 0,
      parsePercent: D = 0,
      isRepo: I,
      showDelete: M = false,
      showDeleteAlways: R = false,
      renderIcon: z,
      onClickFile: E,
      onClickLink: P,
      onClickRef: H,
      onClickReParse: O,
      onClickReUpload: T,
      onClickDelete: F,
      customSubTitle: Z,
      zh: q
    } = e;
    let B = stringUtilities.createFormatter(N);
    let G = "link" in e && !I;
    let U = G ? e.link : "";
    let K = A === statusConstants.statusTypes.Processing;
    let V = A === statusConstants.statusTypes.Failed;
    let W = L === statusConstants.processStatus.Processing;
    let Q = L === statusConstants.processStatus.Failed;
    let J = isNullishCheck.isNil(j) || j === 0 ? "" : infraUtilFunctions.formatBytesSize(j);
    let X = a ? fileTypeDetectionUtils.getDisplayCategory(fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(a))) : undefined;
    let Y = isNumberUtil.isNumber(y) && y > 0 ? y < 1000 ? B("label_token_count_smallnumber", {
      sprintf: [y.toString()]
    }) : B("label_token_count_largenumber", {
      sprintf: [(q ? Math.round(y / 1000) / 10 : Math.round(y / 1000)).toString()]
    }) : undefined;
    let ee = reactCoreLibraryReexport.useMemo(() => {
      if (G) {
        return B("chat_list_subtitle_link");
      }
      let e = [];
      e = K ? [X, J] : W ? [B("skill_read_parsing_file"), J] : [X, Y];
      return reactJsxRuntimeCoreReexport.jsx("span", {
        className: "inline-flex gap-6",
        children: e.map((e, t) => e ? reactJsxRuntimeCoreReexport.jsx("span", {
          children: e
        }, t) : undefined)
      });
    }, [K, S, W, G, a, Z, D]);
    let et = reactCoreLibraryReexport.useMemo(() => V ? B("file_upload_error") : Q ? B("file_parse_error") : undefined, [V, Q]);
    let er = U && urlParamUtils.validateUrl(U, {
      allowedProtocols: ["https:"]
    });
    let en = V || !$ && !K && !W && (!G && "fileKey" in e && e.fileKey || er);
    let ei = () => {
      let t = {
        className: o("shrink-0 w-28 h-28", {
          "opacity-30": W || V
        })
      };
      if (G) {
        return reactJsxRuntimeCoreReexport.jsx(lazyFileIconWrapper.lazyFileIcon, {
          ext: e.linkExt,
          link: true,
          ...t
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx(lazyFileIconWrapper.lazyFileIcon, {
          ext: getFileExtension.getFileExtension(a || ""),
          link: G,
          ...t
        });
      }
    };
    let el = a || B("skill_read_pic_untitled");
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "attachment_file_item",
      "data-available": !K && !W,
      onClick: en ? e => {
        if (V) {
          if (T != null) {
            T();
          }
          return;
        }
        if (Q) {
          if (O != null) {
            O();
          }
          return;
        }
        if (G) {
          if (P != null) {
            P(e);
          }
          return;
        }
        if (E != null) {
          E(e);
        }
      } : undefined,
      className: o("relative  w-200 h-54", w.wrapper, r),
      ref: t,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: o(`
          flex h-54 items-center gap-8 overflow-hidden rounded-dbx-2xl bg-dbx-fill-trans-20
          px-13 whitespace-normal select-none
        `, {
          "cursor-pointer hover:bg-dbx-fill-trans-20-hover": en
        }),
        children: [(() => {
          if (K) {
            return reactJsxRuntimeCoreReexport.jsx("span", {
              className: "flex h-28 w-28 shrink-0 items-center justify-center",
              children: reactJsxRuntimeCoreReexport.jsx(progressIndicators.CircularProgress, {
                width: 20,
                strokeWidth: 2,
                value: S
              })
            });
          }
          let e = ei();
          if (z) {
            return z(e);
          } else {
            return e;
          }
        })(), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "w-auto shrink grow overflow-hidden",
          children: [reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
            trigger: "hover",
            position: "topRight",
            content: el,
            className: o("z-101", {
              "!hidden": isUndefinedCheck.isUndefined(el)
            }),
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: "truncate text-sm/22 text-dbx-text-primary",
              "data-testid": "message_nested_content_file_name",
              children: el
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "mt-1 truncate text-12/18 text-dbx-text-tertiary",
            "data-testid": "message_nested_content_file_subtitle",
            children: et ? reactJsxRuntimeCoreReexport.jsx("span", {
              className: "text-dbx-function-danger",
              children: B("files_parse_click_retry")
            }) : Z || ee
          })]
        }), C && reactJsxRuntimeCoreReexport.jsx("div", {
          className: o(`
              hidden
            `, w.ref),
          children: C && reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
            content: B("skill_read_quote"),
            className: "s-font-xxs",
            trigger: "hover",
            children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
              variant: "icon",
              size: "md",
              onClick: e => {
                e.stopPropagation();
                if (H != null) {
                  H();
                }
              },
              children: reactJsxRuntimeCoreReexport.jsx(imChatIcon.ChatIcon, {
                className: "text-dbx-text-tertiary"
              })
            })
          })
        })]
      }), (M || R) && reactJsxRuntimeCoreReexport.jsx(closeIconButton.CloseIconButton, {
        className: o("absolute top-[-3px] right-[-3px]", w.delete, R ? "!flex" : "!hidden"),
        onClick: e => {
          e.stopPropagation();
          if (F != null) {
            F();
          }
        },
        "data-testid": "message_nested_content_file_delete"
      })]
    });
  });
  require.r(exports);
  require.d(exports, {
    AttachmentNodeUploadStatus: function () {
      return statusConstants.statusTypes;
    },
    AttachmentNodeUI: function () {
      return $;
    },
    AttachmentNodeParseStatus: function () {
      return statusConstants.processStatus;
    }
  });
}