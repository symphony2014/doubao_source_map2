// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'QrCodeDisplay'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 940232
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var n = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var qrcodeWithLogoComponent = require("qrcode-with-logo-component") /*id: 840161*/;
  var reactContextUtils_1 = require("react-context-utils_1") /*id: 351634*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      url: t,
      exportQRHeadTitle: a,
      exportQRHeadIcon: r,
      exportRef: d,
      className: c,
      logoSize: u = 34,
      needCenterLogo: h
    } = e;
    let p = i18nTranslationUtils.useTranslationWithFallback();
    let {
      exportQRScanDesc: f
    } = reactContextUtils_1.useContextValue();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: d,
      className: n(`
          flex-column flex items-center rounded-s-radius-xl bg-[#fff] pt-24
          pr-44 pb-24 pl-44
        `, c),
      children: [(!!r || !!a) && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "mb-24 flex h-20 items-center gap-8",
        children: [r, reactJsxRuntimeCoreReexport.jsx("span", {
          className: "text-14 font-medium tracking-[2%] text-[#000000]",
          children: a
        })]
      }), reactJsxRuntimeCoreReexport.jsx(qrcodeWithLogoComponent.qrcodeWithLogo, {
        text: t,
        size: 180,
        logoSize: u,
        needCenterLogo: h
      }), reactJsxRuntimeCoreReexport.jsx("span", {
        className: `
          mt-20 align-middle text-14 leading-17 font-normal tracking-[2%]
          text-[#666666]
        `,
        children: f || p("slides_share_QRCode_scanView")
      })]
    });
  };
  require.d(exports, {
    QrCodeDisplay: function () {
      return d;
    }
  });
}