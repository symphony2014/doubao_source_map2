// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'LoadingIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: step-canvas-panel.5a261512.js
         * chunkId: 58536
         * moduleId: 628320
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  require("react-core-library-reexport") /*id: 634663*/;
  let s = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 17,
    height: 16,
    fill: "none",
    viewBox: "0 0 17 16",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("g", {
      clipPath: "url(#loading-icon_svg__a)",
      "data-figma-skip-parse": "true",
      children: reactJsxRuntimeCoreReexport.jsx("foreignObject", {
        width: 3020.56,
        height: 3020.56,
        x: -1510.28,
        y: -1510.28,
        transform: "matrix(.00491 0 0 .00492 8.5 7.947)",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          xmlns: "http://www.w3.org/1999/xhtml",
          style: {
            background: "conic-gradient(from 90deg,#0057ff 0deg,rgba(0,87,255,0) 108.453deg,rgba(0,87,255,0) 168.031deg,#0057ff 360deg)",
            height: "100%",
            width: "100%",
            opacity: 1
          }
        })
      })
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M8.5 3.551a4.395 4.395 0 0 0-2.857 7.736.776.776 0 0 1-1.009 1.178 5.947 5.947 0 1 1 9.812-4.519.776.776 0 0 1-1.55 0A4.395 4.395 0 0 0 8.5 3.552",
      clipRule: "evenodd",
      "data-figma-gradient-fill": "{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.0,\"g\":0.34117648005485535,\"b\":1.0,\"a\":1.0},\"position\":0.0},{\"color\":{\"r\":0.0,\"g\":0.34117648005485535,\"b\":1.0,\"a\":0.0},\"position\":0.30125698447227478},{\"color\":{\"r\":0.0,\"g\":0.34117648005485535,\"b\":1.0,\"a\":0.0},\"position\":0.46675261855125427}],\"stopsVar\":[{\"color\":{\"r\":0.0,\"g\":0.34117648005485535,\"b\":1.0,\"a\":1.0},\"position\":0.0},{\"color\":{\"r\":0.0,\"g\":0.34117648005485535,\"b\":1.0,\"a\":0.0},\"position\":0.30125698447227478},{\"color\":{\"r\":0.0,\"g\":0.34117648005485535,\"b\":1.0,\"a\":0.0},\"position\":0.46675261855125427}],\"transform\":{\"m00\":9.8247575759887695,\"m01\":3.1910863640405296e-07,\"m02\":3.5875337123870850,\"m10\":-2.6020839527518547e-07,\"m11\":9.8436307907104492,\"m12\":3.0247445106506348},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}"
    }), reactJsxRuntimeCoreReexport.jsx("defs", {
      children: reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "loading-icon_svg__a",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          fillRule: "evenodd",
          d: "M8.5 3.551a4.395 4.395 0 0 0-2.857 7.736.776.776 0 0 1-1.009 1.178 5.947 5.947 0 1 1 9.812-4.519.776.776 0 0 1-1.55 0A4.395 4.395 0 0 0 8.5 3.552",
          clipRule: "evenodd"
        })
      })
    })]
  });
  let l = e => {
    let {
      className: t,
      style: n
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a("container-DetKAq", t),
      style: n,
      children: [reactJsxRuntimeCoreReexport.jsx(s, {
        className: "loading-s2lJD1"
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "text-l4Ht5A",
        children: i("doc_msg_updatingNew")
      })]
    });
  };
  require.d(exports, {
    LoadingIcon: function () {
      return l;
    }
  });
}