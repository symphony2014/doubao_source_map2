// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'SlidesToolbar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 99448.e1905545.js
         * chunkId: 99448
         * moduleId: 356709
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var titlePaddingResizeHook = require("title-padding-resize-hook") /*id: 588998*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var dbxPopoverComponents = require("dbx-popover-components") /*id: 457187*/;
  var documentShareConstants = require("document-share-constants") /*id: 271884*/;
  let u = {
    [documentShareConstants.VisibilityTypes.Public]: "public_share",
    [documentShareConstants.VisibilityTypes.Private]: "only_me",
    [documentShareConstants.VisibilityTypes.Encryption]: "encryption_share"
  };
  var reactContextUtils_1 = require("react-context-utils_1") /*id: 351634*/;
  var qrcodeWithLogoComponent = require("qrcode-with-logo-component") /*id: 840161*/;
  var qrCodeDisplayComponent = require("qr-code-display-component") /*id: 940232*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var reactDownloadIcon = require("react-download-icon") /*id: 391488*/;
  var svgCheckIcon = require("svg-check-icon") /*id: 362340*/;
  var ringOutlinedIcon = require("ring-outlined-icon") /*id: 112124*/;
  var copyButtonLogic = require("copy-button-logic") /*id: 418998*/;
  var domToCanvasClipboardDownload = require("dom-to-canvas-clipboard-download") /*id: 83906*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = e => {
    let {
      exportRef: t,
      setPublicOnShareQRCode: s,
      setPermissionType: n
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let {
      onCopyClick: a,
      onMouseEnter: l,
      onMouseLeave: o,
      checked: d
    } = copyButtonLogic.useCopyButton({
      handle: () => {
        if (t.current) {
          domToCanvasClipboardDownload.copyElementToClipboard(t.current);
        }
      },
      toastContent: i("slides_share_toast_linkCopied")
    });
    let u = [{
      Icon: reactDownloadIcon.DownloadIcon,
      label: i("slides_share_QRCode_btn_save"),
      onClick: () => {
        if (t.current) {
          domToCanvasClipboardDownload.downloadElementAsImage(t.current, "doubao-ppt");
        }
      }
    }, {
      Icon: d ? svgCheckIcon.CheckIcon : ringOutlinedIcon.RingOutlinedIcon,
      label: i("slides_share_QRCode_btn_copy"),
      onClick: a,
      onMouseEnter: l,
      onMouseLeave: o
    }];
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "flex items-center justify-center gap-12",
      children: u.map((e, t) => {
        let {
          Icon: i,
          label: r,
          onClick: a
        } = e;
        return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [t > 0 ? reactJsxRuntimeCoreReexport.jsx("div", {
            className: "h-10 w-1 bg-dbx-line-10"
          }) : null, reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            className: "h-26!",
            leadingIcon: reactJsxRuntimeCoreReexport.jsx(i, {}),
            size: "lg",
            variant: "text",
            color: "grey-filled",
            onClick: () => {
              a();
              if (s) {
                n(documentShareConstants.VisibilityTypes.Public);
              }
            },
            onMouseEnter: l,
            onMouseLeave: o,
            children: r
          }, t)]
        });
      })
    });
  };
  let y = e => {
    let {
      url: t,
      needCenterLogo: s,
      exportQRHeadIcon: n,
      exportQRHeadTitle: i,
      setPublicOnShareQRCode: r,
      setPermissionType: a
    } = e;
    let o = reactCoreLibraryReexport.useRef(null);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "relative flex-column flex items-center gap-16 pt-12 pb-16",
      children: [reactJsxRuntimeCoreReexport.jsx(qrcodeWithLogoComponent.qrcodeWithLogo, {
        text: t,
        needCenterLogo: s
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
          pointer-events-none absolute top-[-1000px] opacity-0 select-none
        `,
        children: reactJsxRuntimeCoreReexport.jsx(qrCodeDisplayComponent.QrCodeDisplay, {
          url: t,
          exportQRHeadTitle: i,
          exportQRHeadIcon: n,
          exportRef: o,
          needCenterLogo: s
        })
      }), reactJsxRuntimeCoreReexport.jsx(b, {
        exportRef: o,
        setPublicOnShareQRCode: r,
        setPermissionType: a
      })]
    });
  };
  var downloadableSwitchComponent = require("downloadable-switch-component") /*id: 570618*/;
  var slidesSharePasswordInputPanel = require("slides-share-password-input-panel") /*id: 109592*/;
  var rightArrowIcon = require("right-arrow-icon") /*id: 738442*/;
  let N = e => {
    let {
      title: t,
      panelType: s,
      setPanelType: n
    } = e;
    let i = reactCoreLibraryReexport.useRef(null);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: `
        mb-8 flex items-center gap-4 pr-16 pl-16 text-s-color-text-secondary
        ${s !== documentShareConstants.ShareSectionTypes.Home ? "h-48" : "h-46"}
      `,
      ref: i,
      children: s !== documentShareConstants.ShareSectionTypes.Home ? reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
        leadingIcon: reactJsxRuntimeCoreReexport.jsx(rightArrowIcon.RightArrowIcon, {}),
        onClick: () => n(documentShareConstants.ShareSectionTypes.Home),
        size: "md",
        variant: "text",
        color: "grey-filled",
        className: "-ml-6",
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          className: "text-14 leading-22 font-medium",
          children: t
        })
      }) : reactJsxRuntimeCoreReexport.jsx("span", {
        className: "text-14 leading-22 font-medium",
        children: t
      })
    });
  };
  var businessInputField = require("business-input-field") /*id: 324730*/;
  let L = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M6.75 12.7002C7.63735 12.7002 8.44164 12.7791 9.05762 12.8662C10.1417 13.0195 10.9803 13.8584 11.1338 14.9424C11.2209 15.5583 11.2998 16.3628 11.2998 17.25C11.2998 18.1372 11.2209 18.9417 11.1338 19.5576C10.9805 20.6418 10.1418 21.4805 9.05762 21.6338C8.44163 21.7209 7.63738 21.7998 6.75 21.7998C5.86262 21.7998 5.05837 21.7209 4.44238 21.6338C3.35818 21.4805 2.51952 20.6418 2.36621 19.5576C2.27914 18.9417 2.2002 18.1372 2.2002 17.25C2.20022 16.3628 2.27913 15.5583 2.36621 14.9424C2.5197 13.8584 3.3583 13.0195 4.44238 12.8662C5.05836 12.7791 5.86265 12.7002 6.75 12.7002ZM14.248 17.3086C14.6897 17.3087 15.0476 17.6119 15.0479 17.9854V20.0156C15.0476 20.3891 14.6896 20.6923 14.248 20.6924C13.8065 20.6923 13.4485 20.3891 13.4482 20.0156V17.9854C13.4484 17.6119 13.8065 17.3087 14.248 17.3086ZM20.2334 17.3086C20.6749 17.3088 21.033 17.612 21.0332 17.9854V20.0156C21.033 20.389 20.6748 20.6921 20.2334 20.6924C19.7917 20.6924 19.4338 20.3891 19.4336 20.0156V17.9854C19.4338 17.6118 19.7917 17.3086 20.2334 17.3086ZM6.75 14.2998C5.95498 14.2998 5.22733 14.3718 4.66602 14.4512C4.28803 14.5048 4.00497 14.7881 3.95117 15.166C3.87182 15.7272 3.79983 16.4551 3.7998 17.25C3.7998 18.0448 3.87183 18.7727 3.95117 19.334C4.0048 19.7121 4.2879 19.9952 4.66602 20.0488C5.22734 20.1282 5.95495 20.2002 6.75 20.2002C7.54505 20.2002 8.27266 20.1282 8.83398 20.0488C9.2121 19.9952 9.4952 19.7121 9.54883 19.334C9.62817 18.7727 9.7002 18.0448 9.7002 17.25C9.70017 16.4551 9.62818 15.7272 9.54883 15.166C9.49503 14.7881 9.21197 14.5048 8.83398 14.4512C8.27267 14.3718 7.54502 14.2998 6.75 14.2998ZM17.2412 18.1055C17.6829 18.1056 18.041 18.4636 18.041 18.9053C18.0409 19.3469 17.6828 19.7049 17.2412 19.7051C16.7996 19.705 16.4415 19.3469 16.4414 18.9053C16.4414 18.4635 16.7995 18.1056 17.2412 18.1055ZM6.7334 15.835C7.00678 15.835 7.25931 15.8559 7.46582 15.8818C7.80051 15.924 8.05755 16.1809 8.09961 16.5156C8.12556 16.7222 8.14648 16.9746 8.14648 17.248C8.14648 17.5215 8.12556 17.7739 8.09961 17.9805C8.05755 18.3152 7.80051 18.5721 7.46582 18.6143C7.25931 18.6402 7.00678 18.6621 6.7334 18.6621C6.45985 18.6621 6.20661 18.6402 6 18.6143C5.66537 18.572 5.40826 18.3152 5.36621 17.9805C5.34026 17.7739 5.31934 17.5215 5.31934 17.248C5.31934 16.9746 5.34026 16.7222 5.36621 16.5156C5.40826 16.1809 5.66536 15.9241 6 15.8818C6.20661 15.8559 6.45985 15.835 6.7334 15.835ZM17.2412 13.5605C17.6828 13.5607 18.0408 13.8639 18.041 14.2373V16.2676C18.0408 16.641 17.6828 16.9442 17.2412 16.9443C16.7996 16.9442 16.4416 16.641 16.4414 16.2676V14.2373C16.4416 13.8638 16.7996 13.5606 17.2412 13.5605ZM14.248 14.5479C14.6897 14.548 15.0477 14.906 15.0479 15.3477C15.0478 15.7894 14.6898 16.1474 14.248 16.1475C13.8064 16.1473 13.4483 15.7894 13.4482 15.3477C13.4484 14.906 13.8064 14.548 14.248 14.5479ZM20.2334 14.5479C20.6749 14.5481 21.0331 14.9061 21.0332 15.3477C21.0332 15.7893 20.675 16.1472 20.2334 16.1475C19.7916 16.1475 19.4336 15.7895 19.4336 15.3477C19.4337 14.9059 19.7917 14.5479 20.2334 14.5479ZM6.75 2.2002C7.63735 2.2002 8.44164 2.27912 9.05762 2.36621C10.1417 2.5195 10.9803 3.35837 11.1338 4.44238C11.2209 5.05826 11.2998 5.86281 11.2998 6.75C11.2998 7.63715 11.2209 8.44169 11.1338 9.05762C10.9805 10.1418 10.1418 10.9805 9.05762 11.1338C8.44163 11.2209 7.63738 11.2998 6.75 11.2998C5.86262 11.2998 5.05837 11.2209 4.44238 11.1338C3.35818 10.9805 2.51952 10.1418 2.36621 9.05762C2.27914 8.44169 2.2002 7.63715 2.2002 6.75C2.20022 5.86281 2.27913 5.05826 2.36621 4.44238C2.5197 3.35837 3.3583 2.5195 4.44238 2.36621C5.05836 2.27912 5.86265 2.2002 6.75 2.2002ZM17.25 2.2002C18.1374 2.2002 18.9416 2.27912 19.5576 2.36621C20.6417 2.5195 21.4803 3.35837 21.6338 4.44238C21.7209 5.05826 21.7998 5.86281 21.7998 6.75C21.7998 7.63715 21.7209 8.44169 21.6338 9.05762C21.4805 10.1418 20.6418 10.9805 19.5576 11.1338C18.9416 11.2209 18.1374 11.2998 17.25 11.2998C16.3626 11.2998 15.5584 11.2209 14.9424 11.1338C13.8582 10.9805 13.0195 10.1418 12.8662 9.05762C12.7791 8.44169 12.7002 7.63715 12.7002 6.75C12.7002 5.86281 12.7791 5.05826 12.8662 4.44238C13.0197 3.35837 13.8583 2.5195 14.9424 2.36621C15.5584 2.27912 16.3626 2.2002 17.25 2.2002ZM6.75 3.7998C5.95498 3.7998 5.22733 3.8718 4.66602 3.95117C4.28803 4.00478 4.00497 4.28811 3.95117 4.66602C3.87182 5.22723 3.79983 5.95514 3.7998 6.75C3.7998 7.54482 3.87183 8.27272 3.95117 8.83398C4.0048 9.21211 4.2879 9.49517 4.66602 9.54883C5.22734 9.6282 5.95495 9.7002 6.75 9.7002C7.54505 9.7002 8.27266 9.6282 8.83398 9.54883C9.2121 9.49517 9.4952 9.21211 9.54883 8.83398C9.62817 8.27272 9.7002 7.54482 9.7002 6.75C9.70017 5.95514 9.62818 5.22723 9.54883 4.66602C9.49503 4.28811 9.21197 4.00478 8.83398 3.95117C8.27267 3.8718 7.54502 3.7998 6.75 3.7998ZM17.25 3.7998C16.455 3.7998 15.7273 3.8718 15.166 3.95117C14.788 4.00478 14.505 4.28811 14.4512 4.66602C14.3718 5.22723 14.2998 5.95514 14.2998 6.75C14.2998 7.54482 14.3718 8.27272 14.4512 8.83398C14.5048 9.21211 14.7879 9.49517 15.166 9.54883C15.7273 9.6282 16.455 9.7002 17.25 9.7002C18.045 9.7002 18.7727 9.6282 19.334 9.54883C19.7121 9.49517 19.9952 9.21211 20.0488 8.83398C20.1282 8.27272 20.2002 7.54482 20.2002 6.75C20.2002 5.95514 20.1282 5.22723 20.0488 4.66602C19.995 4.28811 19.712 4.00478 19.334 3.95117C18.7727 3.8718 18.045 3.7998 17.25 3.7998ZM6.7334 5.33496C7.00678 5.33498 7.25931 5.35687 7.46582 5.38281C7.8005 5.42502 8.05755 5.68186 8.09961 6.0166C8.12555 6.22316 8.14648 6.4756 8.14648 6.74902C8.14648 7.02251 8.12556 7.27487 8.09961 7.48145C8.05755 7.81619 7.80052 8.07304 7.46582 8.11523C7.25931 8.14118 7.00678 8.16209 6.7334 8.16211C6.45985 8.16211 6.20661 8.14119 6 8.11523C5.66536 8.073 5.40826 7.81616 5.36621 7.48145C5.34026 7.27487 5.31934 7.02251 5.31934 6.74902C5.31934 6.47561 5.34027 6.22316 5.36621 6.0166C5.40826 5.6819 5.66538 5.42506 6 5.38281C6.20661 5.35685 6.45985 5.33496 6.7334 5.33496ZM17.3828 5.33496C17.6563 5.33497 17.9087 5.35686 18.1152 5.38281C18.4501 5.4249 18.707 5.68176 18.749 6.0166C18.775 6.22317 18.7959 6.47559 18.7959 6.74902C18.7959 7.02251 18.775 7.27487 18.749 7.48145C18.7069 7.81627 18.4501 8.07316 18.1152 8.11523C17.9087 8.14119 17.6563 8.1621 17.3828 8.16211C17.1094 8.16211 16.857 8.14118 16.6504 8.11523C16.3156 8.07317 16.0587 7.81626 16.0166 7.48145C15.9906 7.27487 15.9688 7.02251 15.9688 6.74902C15.9688 6.47557 15.9907 6.22318 16.0166 6.0166C16.0587 5.68175 16.3155 5.42488 16.6504 5.38281C16.857 5.35686 17.1093 5.33496 17.3828 5.33496Z",
      fill: "currentColor"
    })
  });
  var doubaoClipboardUtil = require("doubao-clipboard-util") /*id: 376593*/;
  let $ = e => {
    let {
      password: t,
      shareUrl: s,
      onCopyBtnClick: n,
      onShareQRCodeClick: i,
      title: a
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let {
      onCopyClick: d,
      onMouseEnter: u,
      onMouseLeave: p,
      checked: C
    } = copyButtonLogic.useCopyButton({
      handle: () => doubaoClipboardUtil.copyDoubaoPptInfo({
        link: s,
        password: t,
        title: a
      }),
      toastContent: l("slides_share_toast_linkCopied")
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex w-[100%] justify-between",
      children: [reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
        leadingIcon: reactJsxRuntimeCoreReexport.jsx(L, {}),
        className: "w-158",
        color: "grey-outline",
        size: "md",
        onClick: () => i(documentShareConstants.ShareSectionTypes.QRExport),
        children: l("slides_share_btn_getQRCode")
      }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
        leadingIcon: C ? reactJsxRuntimeCoreReexport.jsx(svgCheckIcon.CheckIcon, {}) : reactJsxRuntimeCoreReexport.jsx(ringOutlinedIcon.RingOutlinedIcon, {}),
        className: "w-158",
        color: "brand-filled",
        size: "md",
        onClick: () => {
          d();
          if (n != null) {
            n(!isUndefinedCheck.isUndefined(t));
          }
        },
        onMouseEnter: u,
        onMouseLeave: p,
        children: l(isUndefinedCheck.isUndefined(t) ? "slides_share_btn_copyLink" : "slides_share_btn_copyLinkPassword")
      })]
    });
  };
  var switchLoadingComponent = require("switch-loading-component") /*id: 403106*/;
  var svgEyeIcon = require("svg-eye-icon") /*id: 448005*/;
  var asyncMessageNodeIcon = require("async-message-node-icon") /*id: 693871*/;
  let T = e => {
    let {
      permissionType: t,
      onPermissionChange: s
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let i = t === documentShareConstants.VisibilityTypes.Public;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "mb-16 flex items-center justify-between",
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex items-start gap-12",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            flex h-48 w-48 shrink-0 items-center justify-center rounded-12
            border border-dbx-line-10
          `,
          children: i ? reactJsxRuntimeCoreReexport.jsx(svgEyeIcon.EyeIcon, {
            className: "text-dbx-brand-default"
          }) : reactJsxRuntimeCoreReexport.jsx(asyncMessageNodeIcon.messageNodeIcon, {
            className: "text-dbx-text-tertiary"
          })
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex h-48 flex-col justify-center",
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            className: "text-14 leading-22 font-medium text-dbx-text-primary",
            children: n("slides_share_linkAccess_switch")
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            className: "mt-2 text-14 leading-22 text-dbx-text-secondary",
            children: n(i ? "slides_share_linkAccess_switch_on_desc" : "slides_share_linkAccess_switch_off_desc")
          })]
        })]
      }), reactJsxRuntimeCoreReexport.jsx(switchLoadingComponent.LoadingSwitch, {
        checked: i,
        onCheckedChange: e => {
          s(e ? documentShareConstants.VisibilityTypes.Public : documentShareConstants.VisibilityTypes.Private);
        }
      })]
    });
  };
  let I = e => {
    let {
      setPanelType: t,
      permissionType: s,
      shareUrl: n,
      onSharePanelFooterBtnClick: i,
      setPermissionType: r,
      title: a,
      setPublicOnShareLink: l
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `
          px-16
          ${s === documentShareConstants.VisibilityTypes.Public ? "pb-16" : "pb-0"}
        `,
        children: [reactJsxRuntimeCoreReexport.jsx(T, {
          permissionType: s,
          onPermissionChange: r
        }), s === documentShareConstants.VisibilityTypes.Public ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(businessInputField.BusinessInput, {
            value: n,
            disabled: true,
            classNames: {
              input: "text-ellipsis pointer-events-none",
              wrapper: "border-none mb-8 bg-dbx-fill-trans-20!"
            }
          }), reactJsxRuntimeCoreReexport.jsx($, {
            onShareQRCodeClick: e => {
              t(e);
              if (i != null) {
                i("qr_code");
              }
            },
            shareUrl: n,
            onCopyBtnClick: e => {
              if (i != null) {
                i(e ? "copy_link_password" : "copy_link");
              }
              if (l) {
                r(documentShareConstants.VisibilityTypes.Public);
              }
            },
            title: a
          })]
        }) : null]
      })
    });
  };
  let D = e => {
    let {
      shareUrl: t,
      permissionType: s,
      setPermissionType: n,
      downloadable: i,
      setDownloadable: a,
      password: o,
      setPassword: d,
      exportQRHeadIcon: u,
      exportQRHeadTitle: C,
      needQRCenterLogo: h,
      onSharePanelBtnClick: m,
      disabledPermissionTypes: x,
      setPublicOnShareLink: f,
      setPublicOnShareQRCode: _
    } = e;
    let v = i18nTranslationUtils.useTranslationWithFallback();
    let [w, b] = reactCoreLibraryReexport.useState(documentShareConstants.ShareSectionTypes.Home);
    let {
      homePanelTitle: k
    } = reactContextUtils_1.useContextValue();
    let {
      title: S,
      panel: L
    } = reactCoreLibraryReexport.useMemo(() => {
      switch (w) {
        case documentShareConstants.ShareSectionTypes.QRExport:
          return {
            title: v("slides_share_btn_QRCode"),
            panel: reactJsxRuntimeCoreReexport.jsx(y, {
              url: t,
              exportQRHeadIcon: u,
              exportQRHeadTitle: C,
              needCenterLogo: h,
              setPublicOnShareQRCode: _,
              setPermissionType: n
            })
          };
        case documentShareConstants.ShareSectionTypes.PermissionSetting:
          return {
            title: "权限设置",
            panel: reactJsxRuntimeCoreReexport.jsx(downloadableSwitchComponent.DownloadableSwitch, {
              downloadable: i,
              setDownloadable: a
            })
          };
        case documentShareConstants.ShareSectionTypes.PasswordSetting:
          return {
            title: v("slides_share_password_header"),
            panel: reactJsxRuntimeCoreReexport.jsx(slidesSharePasswordInputPanel.SlidesSharePasswordPanel, {
              password: o,
              setPassword: d,
              setPanelType: b
            })
          };
        default:
          return {
            title: k || v("slides_share_header"),
            panel: reactJsxRuntimeCoreReexport.jsx(I, {
              setPanelType: b,
              permissionType: s,
              password: o,
              shareUrl: t,
              onSharePanelFooterBtnClick: m,
              setPermissionType: n,
              title: C,
              setPublicOnShareLink: f
            })
          };
      }
    }, [w, s, i, o, t, u, C, h, k, m, f, _]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "w-360 overflow-hidden rounded-s-radius-s",
      children: [reactJsxRuntimeCoreReexport.jsx(N, {
        title: S,
        permissionType: s,
        setPermissionType: n,
        panelType: w,
        setPanelType: b,
        disabledPermissionTypes: x
      }), L]
    });
  };
  let z = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      children: s,
      shareUrl: n,
      permissionType: r,
      onPermissionChange: a,
      downloadable: c = true,
      onDownloadableChange: C,
      password: h,
      onPasswordChange: m,
      exportQRHeadTitle: x,
      exportQRHeadIcon: f,
      needQRCenterLogo: _ = false,
      i18nConfig: v = {},
      onVisibleChange: w,
      onSharePanelBtnClick: b,
      disabledPermissionTypes: y,
      setPublicOnShareLink: j,
      setPublicOnShareQRCode: P,
      onShareBtnClick: k,
      clickTriggerClassName: N,
      modal: S = true
    } = e;
    let [L, R] = reactCoreLibraryReexport.useState(false);
    let [$, E] = reactCoreLibraryReexport.useState(r);
    let M = e => {
      E(e);
      if (a != null) {
        a(e);
      }
      if (e !== $) {
        if (b != null) {
          b(u[e]);
        }
      }
    };
    let [Z, T] = reactCoreLibraryReexport.useState(c);
    let [I, z] = reactCoreLibraryReexport.useState(h);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      setPermissionType: M
    }));
    reactCoreLibraryReexport.useEffect(() => {
      if (!isUndefinedCheck.isUndefined(r)) {
        E(r);
      }
    }, [r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!isUndefinedCheck.isUndefined(c)) {
        T(c);
      }
    }, [c]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!isUndefinedCheck.isUndefined(h)) {
        z(h);
      }
    }, [h]);
    return reactJsxRuntimeCoreReexport.jsx(reactContextUtils_1.ContextProvider, {
      ...v,
      children: reactJsxRuntimeCoreReexport.jsx(dbxPopoverComponents.DbxPopover, {
        zIndex: 2048,
        modal: S,
        trigger: "click",
        content: reactJsxRuntimeCoreReexport.jsx(D, {
          shareUrl: n,
          permissionType: $,
          setPermissionType: M,
          downloadable: Z,
          setDownloadable: e => {
            T(e);
            if (C != null) {
              C(e);
            }
          },
          password: I,
          setPassword: e => {
            z(e);
            if (m != null) {
              m(e);
            }
          },
          exportQRHeadTitle: x,
          exportQRHeadIcon: f,
          needQRCenterLogo: _,
          onSharePanelBtnClick: b,
          disabledPermissionTypes: y,
          setPublicOnShareLink: j,
          setPublicOnShareQRCode: P
        }),
        className: "p-0!",
        position: "bottomRight",
        onVisibleChange: e => {
          R(e);
          if (w != null) {
            w(e);
          }
        },
        getPopupContainer: () => document.body,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: i("h-fit w-fit", N),
          onClick: () => {
            R(!L);
            if (k != null) {
              k(L);
            }
          },
          children: s
        })
      })
    });
  });
  var svgIconComponent_3 = require("svg-icon-component_3") /*id: 640572*/;
  var svgArrowIconComponent = require("svg-arrow-icon-component") /*id: 336478*/;
  var feishuSlidePermissionService = require("feishu-slide-permission-service") /*id: 831253*/;
  let V = e => {
    let {
      docToken: t,
      panelRef: s
    } = e;
    let [n, i] = reactCoreLibraryReexport.useState(documentShareConstants.VisibilityTypes.Private);
    let [r, a] = reactCoreLibraryReexport.useState("www.doubao.com");
    let [o, d] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      (async () => {
        let {
          linkShareEntity: e,
          hasModifiedLinkShare: s
        } = (await feishuSlidePermissionService.getSlideSharePermission({
          docToken: t
        })) || {};
        if (e === feishuSlidePermissionService.SlidePermissionType.PublicEdit || e === feishuSlidePermissionService.SlidePermissionType.PublicRead) {
          i(documentShareConstants.VisibilityTypes.Public);
        } else {
          i(documentShareConstants.VisibilityTypes.Private);
        }
        d(s || false);
      })();
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      (async () => {
        a(await feishuSlidePermissionService.getShareDomains());
      })();
    }, []);
    return {
      onPermissionChange: e => {
        d(true);
        if (e === documentShareConstants.VisibilityTypes.Public) {
          feishuSlidePermissionService.setSlideSharePermission({
            docToken: t,
            permission: feishuSlidePermissionService.SlidePermissionType.PublicRead
          });
        } else {
          feishuSlidePermissionService.setSlideSharePermission({
            docToken: t,
            permission: feishuSlidePermissionService.SlidePermissionType.Close
          });
        }
        i(e);
      },
      initialPermissionType: n,
      onShareBtnClick: () => {
        var e;
        if (!o && n !== documentShareConstants.VisibilityTypes.Public) {
          if ((e = s.current) !== null && e !== undefined) {
            e.setPermissionType(documentShareConstants.VisibilityTypes.Public);
          }
          d(true);
        }
      },
      shareUrl: `https://${r}/slides/${t}`
    };
  };
  let A = e => {
    let t = i18nTranslationUtils.useTranslationWithFallback();
    let {
      docToken: s,
      disabled: n
    } = e;
    let i = reactCoreLibraryReexport.useRef(null);
    let {
      initialPermissionType: a,
      onPermissionChange: d,
      onShareBtnClick: u,
      shareUrl: p
    } = V({
      docToken: s,
      panelRef: i
    });
    if (isUndefinedCheck.isUndefined(a)) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(z, {
        ...e,
        ref: i,
        shareUrl: p,
        permissionType: a,
        exportQRHeadIcon: reactJsxRuntimeCoreReexport.jsx(svgIconComponent_3.svgIcon, {
          className: "size-20"
        }),
        disabledPermissionTypes: [documentShareConstants.VisibilityTypes.Encryption],
        onPermissionChange: t => {
          var s;
          d(t);
          if ((s = e.onPermissionChange) !== null && s !== undefined) {
            s.call(e, t);
          }
        },
        onShareBtnClick: t => {
          var s;
          u();
          if ((s = e.onShareBtnClick) !== null && s !== undefined) {
            s.call(e, t);
          }
        },
        clickTriggerClassName: n ? "pointer-events-none" : undefined,
        children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          variant: "text",
          color: "grey-filled",
          disabled: n,
          leadingIcon: reactJsxRuntimeCoreReexport.jsx(svgArrowIconComponent.getArrowIcon, {}),
          children: t("slides_btn_share", "分享")
        })
      });
    }
  };
  var splitButtonComponents = require("split-button-components") /*id: 920112*/;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var sparkIconComponent = require("spark-icon-component") /*id: 379120*/;
  var chevronDownIcon_1_1 = require("chevron-down-icon_1_1") /*id: 452133*/;
  let X = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M10.4912 6.73535C10.8913 6.62815 11.3859 6.91332 12.375 7.48438C13.3641 8.05542 13.8586 8.34115 13.9658 8.74121C14.0112 8.91074 14.0112 9.08926 13.9658 9.25879C13.8586 9.65889 13.3641 9.94454 12.375 10.5156C11.3859 11.0867 10.8913 11.3719 10.4912 11.2646C10.3217 11.2192 10.1671 11.13 10.043 11.0059C9.75022 10.7129 9.75 10.142 9.75 9C9.75 7.85797 9.75015 7.28705 10.043 6.99414C10.1671 6.87003 10.3217 6.78079 10.4912 6.73535Z",
      fill: "currentColor"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.1123 2.00391C15.5524 2.02207 17.7325 2.09936 19.3857 2.17871L19.5605 2.19141C21.3588 2.35947 22.7825 3.76387 22.8936 5.58398L22.9355 6.36426C22.9741 7.17331 23 8.06746 23 9.00977L22.9922 9.93066C22.9817 10.5325 22.9611 11.1077 22.9355 11.6455L22.8936 12.4219C22.7827 14.2482 21.3516 15.6554 19.5469 15.8193L19.3711 15.8311C18.4347 15.8735 17.3302 15.9139 16.1055 15.9453L18.4102 20.7871C18.6 21.186 18.4442 21.6895 18.0615 21.9102C17.6789 22.1308 17.2144 21.9856 17.0244 21.5869L14.3555 15.9814C14.2848 15.9825 14.2138 15.9844 14.1426 15.9854L12.0596 16C11.1283 16 10.2251 15.9895 9.36426 15.9746L6.69336 21.5869C6.5035 21.9858 6.03899 22.1307 5.65625 21.9102C5.27353 21.6895 5.11688 21.187 5.30664 20.7881L7.61621 15.9355C7.12163 15.9218 6.64746 15.9078 6.19727 15.8916L4.63379 15.8281C2.74865 15.7429 1.22519 14.3093 1.1084 12.4258C1.04668 11.4301 1 10.2624 1 9.00977L1.00879 8.08398C1.02497 7.17633 1.06275 6.32922 1.10938 5.58008C1.22626 3.70307 2.74068 2.27155 4.61914 2.18164C6.5362 2.09009 9.15717 2 12.0508 2L13.1123 2.00391ZM12.0508 3.59961C9.18911 3.59961 6.59505 3.68863 4.69629 3.7793C3.59634 3.83182 2.77 4.65219 2.70605 5.67969C2.64556 6.65175 2.59961 7.7905 2.59961 9.00977C2.59961 10.2235 2.645 11.358 2.70508 12.3271C2.76916 13.3575 3.60001 14.1805 4.70605 14.2305C6.60698 14.3162 9.20111 14.4004 12.0596 14.4004C14.8879 14.4004 17.4308 14.3181 19.2988 14.2334C20.4035 14.1832 21.2341 13.3589 21.2969 12.3252C21.3557 11.3563 21.4004 10.2227 21.4004 9.00977C21.4004 7.79141 21.3551 6.65335 21.2959 5.68164C21.2331 4.65088 20.4073 3.83008 19.3086 3.77734C17.4378 3.68755 14.8868 3.59961 12.0508 3.59961Z",
      fill: "currentColor"
    })]
  });
  let J = e => {
    let {
      onPlayClick: t,
      className: s = "",
      disabled: n = false
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let [a, o] = reactCoreLibraryReexport.useState(false);
    return reactJsxRuntimeCoreReexport.jsxs(splitButtonComponents.SplitButtonRoot, {
      color: "grey-filled",
      size: "md",
      variant: "text",
      disabled: n,
      className: s,
      "data-state": a ? "open" : "closed",
      children: [reactJsxRuntimeCoreReexport.jsxs(splitButtonComponents.SplitButtonItem, {
        onClick: () => t(true),
        "data-testid": "ai-ppt-play-from-current-btn",
        children: [reactJsxRuntimeCoreReexport.jsx(splitButtonComponents.SplitButtonLoading, {
          children: reactJsxRuntimeCoreReexport.jsx(sparkIconComponent.SparkIcon, {})
        }), i("slides_btn_play")]
      }), reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
        onOpenChange: e => o(e),
        children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {
          asChild: true,
          children: reactJsxRuntimeCoreReexport.jsx(splitButtonComponents.SplitButtonTrigger, {
            "data-testid": "ai-ppt-play-from-start-dropdown",
            children: reactJsxRuntimeCoreReexport.jsx(chevronDownIcon_1_1.ChevronDownIcon, {
              className: `
                text-14! transition-[rotate] duration-200 ease-in-out
                ${a ? "rotate-180" : ""}
              `
            })
          })
        }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
          children: reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
            side: "bottom",
            align: "end",
            style: {
              zIndex: 2048
            },
            children: reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuItemWithVariants, {
              icon: reactJsxRuntimeCoreReexport.jsx(X, {}),
              onClick: () => t(),
              "data-testid": "ai-ppt-play-from-start-btn",
              children: i("slides_btn_play_fromStart", "从头开始")
            })
          })
        })]
      })]
    });
  };
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var notificationShieldIcon = require("notification-shield-icon") /*id: 166704*/;
  var exportFileTypes = require("export-file-types") /*id: 709576*/;
  let Y = e => {
    let {
      onDownloadClick: t,
      onlyIcon: s = false,
      className: n = "",
      disabled: a = false,
      onDownloadDropdownVisible: o
    } = e;
    let d = userAgentDeviceDetector.isMobileCached();
    let c = i18nTranslationUtils.useTranslationWithFallback();
    let [u, p] = reactCoreLibraryReexport.useState(false);
    let C = {
      items: [{
        icon: reactJsxRuntimeCoreReexport.jsx(svgIconComponent_3.svgIcon, {}),
        label: "slides_download_format_PPTX",
        onClick: () => t == null ? undefined : t(exportFileTypes.fileFormats.PPTX),
        testId: "ai-ppt-download-pptx"
      }, {
        icon: reactJsxRuntimeCoreReexport.jsx(notificationShieldIcon.NotificationShieldIcon, {}),
        label: "slides_download_format_PDF",
        onClick: () => t == null ? undefined : t(exportFileTypes.fileFormats.PDF),
        testId: "ai-ppt-download-pdf"
      }]
    };
    let h = d || s;
    return reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
      onOpenChange: e => {
        if (e) {
          if (o != null) {
            o(e);
          }
        }
        p(e);
      },
      children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {
        disabled: a,
        asChild: true,
        children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          "data-testid": "ai-ppt-download",
          disabled: a,
          variant: h ? "icon" : "text",
          color: "grey-filled",
          size: d ? "sm" : "md",
          className: i(n, u ? "!bg-dbx-fill-trans-20-hover" : "", d ? "size-44!" : ""),
          leadingIcon: reactJsxRuntimeCoreReexport.jsx(reactDownloadIcon.DownloadIcon, {}),
          children: h ? reactJsxRuntimeCoreReexport.jsx(reactDownloadIcon.DownloadIcon, {
            className: d ? "size-24!" : ""
          }) : c("slides_tooltip_download")
        })
      }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
        children: reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
          side: "bottom",
          align: "end",
          style: {
            zIndex: 2048
          },
          children: C.items.map(e => {
            let {
              icon: t,
              label: s,
              onClick: n,
              testId: i
            } = e;
            return reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuItemWithVariants, {
              icon: t,
              onClick: n,
              "data-testid": i,
              children: c(s)
            }, s);
          })
        })
      })]
    });
  };
  let ee = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M12 2C14.0587 2 15.9478 2.16969 17.458 2.36914C19.6548 2.65927 21.3407 4.3452 21.6309 6.54199C21.8303 8.05221 22 9.94133 22 12C22 14.0587 21.8303 15.9478 21.6309 17.458C21.3407 19.6548 19.6548 21.3407 17.458 21.6309C15.9478 21.8303 14.0587 22 12 22C10.1988 22 8.52738 21.8701 7.12598 21.7041L6.54199 21.6309C4.4137 21.3498 2.76498 19.7587 2.40039 17.6621L2.36914 17.458C2.16969 15.9478 2 14.0587 2 12C2 10.1988 2.12985 8.52738 2.2959 7.12598L2.36914 6.54199C2.65023 4.4137 4.2413 2.76498 6.33789 2.40039L6.54199 2.36914C8.05221 2.16969 9.94133 2 12 2ZM12 3.59961C10.0265 3.59961 8.20859 3.76257 6.75098 3.95508C5.27191 4.15057 4.15057 5.27191 3.95508 6.75098C3.76257 8.20859 3.59961 10.0265 3.59961 12C3.59961 13.9735 3.76257 15.7914 3.95508 17.249C4.15057 18.7281 5.27191 19.8494 6.75098 20.0449C8.20859 20.2374 10.0265 20.4004 12 20.4004C13.9735 20.4004 15.7914 20.2374 17.249 20.0449C18.7281 19.8494 19.8494 18.7281 20.0449 17.249C20.2374 15.7914 20.4004 13.9735 20.4004 12C20.4004 10.0265 20.2374 8.20859 20.0449 6.75098C19.8494 5.27191 18.7281 4.15057 17.249 3.95508C15.7914 3.76257 13.9735 3.59961 12 3.59961ZM16 6.98145C16.4418 6.98145 16.7998 7.33942 16.7998 7.78125C16.7998 8.22308 16.4418 8.58105 16 8.58105H12.8047V17.1562C12.8047 17.5981 12.4467 17.9561 12.0049 17.9561C11.5631 17.956 11.2051 17.598 11.2051 17.1562V8.58105H8C7.55817 8.58105 7.2002 8.22308 7.2002 7.78125C7.2002 7.33942 7.55817 6.98145 8 6.98145H16Z",
      fill: "currentColor"
    })
  });
  var reactPlusCircleIcon = require("react-plus-circle-icon") /*id: 705322*/;
  var horizontalDotsIcon = require("horizontal-dots-icon") /*id: 743464*/;
  let en = e => {
    let {
      onFontReplaceClick: t,
      onHistoryClick: s,
      disabled: n = false
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let [a, o] = reactCoreLibraryReexport.useState(false);
    let d = {
      items: [{
        icon: reactJsxRuntimeCoreReexport.jsx(ee, {}),
        label: i("slides_btn_replaceFonts"),
        onClick: () => t == null ? undefined : t()
      }, {
        icon: reactJsxRuntimeCoreReexport.jsx(reactPlusCircleIcon.PlusCircleIcon, {}),
        label: i("doc_base_history_records"),
        onClick: () => s == null ? undefined : s()
      }]
    };
    return reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
      onOpenChange: e => o(e),
      children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {
        disabled: n,
        asChild: true,
        children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          disabled: n,
          variant: "icon",
          color: "grey-filled",
          className: a ? "!bg-dbx-fill-trans-20-hover" : "",
          children: reactJsxRuntimeCoreReexport.jsx(horizontalDotsIcon.HorizontalDotsIcon, {})
        })
      }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
        children: reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
          side: "bottom",
          align: "end",
          style: {
            zIndex: 2048
          },
          children: d.items.map(e => {
            let {
              icon: t,
              label: s,
              onClick: n
            } = e;
            return reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuItemWithVariants, {
              icon: t,
              onClick: n,
              children: s
            }, s);
          })
        })
      })]
    });
  };
  let ei = e => {
    let {
      className: t,
      getPopupContainer: s,
      docToken: n,
      docTitle: l,
      disableActions: o = [],
      removeActions: d = [],
      onDownloadClick: c,
      onPlay: u,
      onHistoryClick: p,
      onFontReplaceClick: C,
      onSharePanelVisibleChange: h,
      onSharePanelBtnClick: m,
      onShareBtnClick: x,
      afterActionSlot: f,
      onDownloadDropdownVisible: _
    } = e;
    let v = i18nTranslationUtils.useTranslationWithFallback();
    let {
      titlePadding: w,
      wrapperRef: b
    } = titlePaddingResizeHook.useTitlePadding();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: i("wrapper-myudUH", t),
      ref: b,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        style: {
          paddingLeft: w
        },
        className: "caption-k3BHTn",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "max-w-[100px] overflow-visible",
          children: l || v("slides_artifact_status_generating")
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "actions-b1RkDb",
        children: [!d.includes("presentation") && reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: reactJsxRuntimeCoreReexport.jsx(J, {
            onPlayClick: e => u == null ? undefined : u(e ? "currentPage" : "beginning"),
            getPopupContainer: s,
            disabled: o.includes("presentation")
          })
        }), !d.includes("share") && reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: reactJsxRuntimeCoreReexport.jsx(A, {
            onVisibleChange: h,
            onSharePanelBtnClick: m,
            exportQRHeadTitle: l,
            onShareBtnClick: x,
            docToken: n,
            disabled: o.includes("share")
          })
        }), !d.includes("export") && reactJsxRuntimeCoreReexport.jsx(Y, {
          onDownloadClick: c,
          onDownloadDropdownVisible: _,
          disabled: o.includes("export"),
          getPopupContainer: s
        }), !d.includes("extra") && reactJsxRuntimeCoreReexport.jsx(en, {
          onFontReplaceClick: C,
          onHistoryClick: p,
          disabled: o.includes("extra"),
          getPopupContainer: s
        }), f]
      })]
    });
  };
  require.d(exports, {
    SlidesToolbar: function () {
      return ei;
    }
  });
}