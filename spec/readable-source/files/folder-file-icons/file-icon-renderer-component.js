// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$6' to 'FileIconRenderer'
// - Renamed export 'jU' to 'FileRowItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 41522.84972134.js
         * chunkId: 41522
         * moduleId: 744632
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var useHoverStateHook = require("use-hover-state-hook") /*id: 105691*/;
  var radioComponentExport = require("radio-component-export") /*id: 423497*/;
  var mdBoxLazyComponentsModule = require("md-box-lazy-components-module") /*id: 857296*/;
  var lazyFileIconLoader = require("lazy-file-icon-loader") /*id: 525556*/;
  var samanthaCheckboxComponents = require("samantha-checkbox-components") /*id: 739837*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var samanthaPopoverWrapperComponent = require("samantha-popover-wrapper-component") /*id: 137563*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var v = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_morefolder_small_svg__a)",
      d: "m1.149 6.356 19.406-2.04 1.23 11.711c.11 1.035-.671 1.965-1.743 2.078L4.517 19.737c-1.071.112-2.028-.635-2.137-1.67z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_morefolder_small_svg__b)",
      d: "M.945 4.416a1.95 1.95 0 0 1 1.737-2.145l4.633-.486a3.9 3.9 0 0 1 1.388.103l2.665.692c.453.118.923.153 1.388.104l5.604-.589a1.95 1.95 0 0 1 2.144 1.737l.051.485L1.15 6.357z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_morefolder_small_svg__c)",
      d: "M3.487 8.755H23V20.53c0 1.04-.874 1.884-1.951 1.884H5.439c-1.078 0-1.952-.843-1.952-1.884z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_morefolder_small_svg__d)",
      d: "M3.487 6.804c0-1.077.874-1.951 1.952-1.951h4.658c.468 0 .932.084 1.37.248l2.577.967c.439.164.903.248 1.37.248h5.635c1.078 0 1.951.874 1.951 1.952v.487H3.487z"
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_morefolder_small_svg__a",
        x1: 10.852,
        x2: 12.28,
        y1: 5.337,
        y2: 18.921,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#FFF3CB"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#FFD296"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_morefolder_small_svg__b",
        x1: 10.929,
        x2: 11.337,
        y1: 1.405,
        y2: 5.286,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#FFE2CA"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#FFD7B6"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_morefolder_small_svg__c",
        x1: 13.243,
        x2: 13.243,
        y1: 8.755,
        y2: 22.414,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#FFC60A"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#FFB14C"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_morefolder_small_svg__d",
        x1: 13.732,
        x2: 13.732,
        y1: 4.853,
        y2: 8.755,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#FF9F4F"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#FD8521"
        })]
      })]
    })]
  }), {}));
  var y = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_folderandfile_small_svg__a)",
      d: "M1 5.946h19.733v11.908c0 1.052-.884 1.905-1.974 1.905H2.973C1.883 19.76 1 18.906 1 17.854z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_folderandfile_small_svg__b)",
      d: "M1 3.973C1 2.883 1.883 2 2.973 2h4.711c.473 0 .943.085 1.386.251l2.606.978c.443.166.913.251 1.386.251h5.697c1.09 0 1.974.883 1.974 1.973v.494H1z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_folderandfile_small_svg__c)",
      d: "M12.221 9.216c-.176.345-.176.797-.176 1.702v8.498c0 .904 0 1.357.176 1.702.155.304.402.551.706.706.345.176.798.176 1.702.176h6.013c.905 0 1.357 0 1.703-.176.303-.155.55-.402.705-.706.176-.345.176-.798.176-1.702V12.06L19.5 8.334h-4.87c-.904 0-1.357 0-1.702.176a1.6 1.6 0 0 0-.706.706"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#fff",
      fillOpacity: 0.55,
      d: "m19.499 8.334 3.727 3.727h-1.143c-.904 0-1.357 0-1.702-.176a1.6 1.6 0 0 1-.706-.706c-.176-.345-.176-.798-.176-1.702z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#9F9F9F",
      d: "M13.909 15.644c0-.264.233-.477.521-.477h6.411c.288 0 .522.213.522.477s-.234.477-.522.477h-6.41c-.289 0-.522-.213-.522-.477M13.909 17.341c0-.264.233-.477.521-.477h6.411c.288 0 .522.213.522.477s-.234.477-.522.477h-6.41c-.289 0-.522-.213-.522-.477M13.909 19.038c0-.264.233-.477.521-.477h3.43c.288 0 .521.213.521.477s-.233.477-.521.477h-3.43c-.288 0-.521-.213-.521-.477"
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_folderandfile_small_svg__a",
        x1: 10.866,
        x2: 10.866,
        y1: 5.946,
        y2: 19.759,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#FFC60A"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#FFB14C"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_folderandfile_small_svg__b",
        x1: 11.36,
        x2: 11.36,
        y1: 2,
        y2: 5.947,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#FF9F4F"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#FD8521"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_folderandfile_small_svg__c",
        x1: 18.713,
        x2: 7.231,
        y1: 23.678,
        y2: 17.9,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#D1D1D1"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#E6E6E7"
        })]
      })]
    })]
  }), {}));
  var fileFolderRtlIcon = require("file-folder-rtl-icon") /*id: 543040*/;
  var F = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsxs("g", {
      clipPath: "url(#icon_filetype_multiple_txt_small_nonumber_svg__a)",
      children: [reactJsxRuntimeCoreReexport.jsxs("g", {
        opacity: 0.2,
        children: [reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "url(#icon_filetype_multiple_txt_small_nonumber_svg__b)",
          d: "M.302 3.784c-.155.603-.01 1.315.28 2.74l2.726 13.38c.29 1.425.435 2.137.811 2.622.332.427.784.733 1.292.875.578.162 1.26.01 2.625-.292l9.074-2.013c1.365-.303 2.048-.454 2.512-.847.41-.345.703-.817.84-1.348.154-.602.009-1.315-.281-2.739L17.82 4.581l-6.82-4.622-7.348 1.63c-1.365.303-2.048.454-2.513.847a2.6 2.6 0 0 0-.838 1.348"
        }), reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "#fff",
          fillOpacity: 0.55,
          d: "m11.002-.04 6.82 4.62-1.725.383c-1.365.303-2.048.454-2.626.293a2.5 2.5 0 0 1-1.291-.875c-.377-.485-.521-1.198-.812-2.622z"
        }), reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "#2A3B55",
          d: "M4.91 13.342c-.084-.415.2-.83.634-.927l9.674-2.145c.435-.097.856.162.94.577.085.415-.199.83-.634.926l-9.673 2.146c-.435.096-.856-.162-.94-.577M5.454 16.014c-.084-.415.2-.83.635-.926l9.674-2.146c.435-.097.856.162.94.577.085.415-.2.83-.634.926L6.395 16.59c-.435.097-.856-.161-.94-.576M5.999 18.686c-.085-.415.2-.83.634-.927l5.174-1.147c.435-.097.856.162.941.577s-.2.83-.634.926l-5.175 1.148c-.435.096-.856-.162-.94-.577"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("g", {
        opacity: 0.6,
        children: [reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "url(#icon_filetype_multiple_txt_small_nonumber_svg__c)",
          d: "M3.191 3.163c-.214.583-.141 1.307.005 2.755l1.37 13.605c.146 1.448.219 2.172.545 2.696.286.46.705.814 1.196 1.011.559.224 1.253.148 2.64-.005l9.226-1.011c1.388-.153 2.082-.229 2.584-.569a2.58 2.58 0 0 0 .969-1.248c.214-.583.141-1.307-.005-2.755L20.535 5.866l-6.32-5.34-7.471.82c-1.388.152-2.082.228-2.584.568-.441.3-.78.736-.969 1.249"
        }), reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "#fff",
          fillOpacity: 0.55,
          d: "m14.216.526 6.32 5.34-1.754.193c-1.388.152-2.082.228-2.64.004a2.5 2.5 0 0 1-1.197-1.01c-.326-.524-.399-1.248-.545-2.697z"
        }), reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "#2A3B55",
          d: "M6.817 13.171c-.043-.422.281-.803.724-.852l9.835-1.079c.443-.048.835.255.878.677s-.282.803-.724.852l-9.836 1.078c-.442.049-.835-.254-.877-.676M7.09 15.888c-.042-.422.282-.804.724-.852l9.836-1.079c.442-.048.835.254.878.676.042.422-.282.804-.724.852l-9.836 1.08c-.442.048-.835-.255-.877-.677M7.364 18.605c-.042-.422.282-.804.724-.852l5.26-.577c.443-.049.836.254.878.676s-.281.803-.723.852l-5.261.577c-.442.048-.835-.255-.878-.676"
        })]
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "url(#icon_filetype_multiple_txt_small_nonumber_svg__d)",
        d: "M6.347 2.633c-.29.546-.314 1.273-.363 2.728l-.457 13.672c-.05 1.455-.073 2.183.18 2.749.222.497.59.909 1.05 1.175.523.302 1.22.328 2.615.379l9.27.338c1.395.05 2.093.076 2.635-.188a2.54 2.54 0 0 0 1.126-1.096c.29-.546.314-1.274.363-2.729l.396-11.833-5.546-6.205-7.508-.274c-1.395-.05-2.092-.076-2.635.188a2.54 2.54 0 0 0-1.126 1.096"
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "#fff",
        fillOpacity: 0.55,
        d: "m17.616 1.623 5.546 6.205-1.762-.064c-1.395-.05-2.092-.076-2.615-.379a2.56 2.56 0 0 1-1.05-1.175c-.253-.566-.229-1.293-.18-2.748z"
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "#2A3B55",
        d: "M8.603 13.07c.014-.424.386-.755.83-.739l9.884.36c.445.017.793.373.779.798-.014.424-.386.754-.83.738l-9.884-.36c-.445-.016-.793-.373-.779-.797M8.512 15.8c.014-.424.385-.755.83-.739l9.884.36c.444.017.793.373.779.798-.015.424-.386.754-.83.738l-9.885-.36c-.444-.016-.793-.373-.778-.797M8.42 18.53c.014-.424.386-.755.83-.739l5.287.193c.444.016.793.373.779.797s-.386.755-.83.739l-5.287-.193c-.444-.016-.793-.373-.779-.797"
      })]
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_multiple_txt_small_nonumber_svg__b",
        x1: 21.01,
        x2: 0.084,
        y1: 20.231,
        y2: 20.613,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#9DACBB"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#ABB0CA"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_multiple_txt_small_nonumber_svg__c",
        x1: 22.138,
        x2: 1.274,
        y1: 21.779,
        y2: 20.061,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#9DACBB"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#ABB0CA"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_multiple_txt_small_nonumber_svg__d",
        x1: 22.627,
        x2: 2.144,
        y1: 23.819,
        y2: 19.319,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#9DACBB"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#ABB0CA"
        })]
      }), reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "icon_filetype_multiple_txt_small_nonumber_svg__a",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "#fff",
          d: "M0 0h24v24H0z"
        })
      })]
    })]
  }), {}));
  var C = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 25",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsxs("g", {
      filter: "url(#icon_filetype_meetingnotes_small_svg__a)",
      children: [reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "#fff",
        d: "M2.571 3.896c0-1.678 1.407-3.039 3.143-3.039h12.572c1.735 0 3.142 1.36 3.142 3.04v16.207c0 1.678-1.407 3.039-3.142 3.039H5.714c-1.736 0-3.143-1.36-3.143-3.04z"
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "url(#icon_filetype_meetingnotes_small_svg__b)",
        d: "M2.571 3.896c0-1.678 1.407-3.039 3.143-3.039h12.572c1.735 0 3.142 1.36 3.142 3.04v16.207c0 1.678-1.407 3.039-3.142 3.039H5.714c-1.736 0-3.143-1.36-3.143-3.04z"
      })]
    }), reactJsxRuntimeCoreReexport.jsx("g", {
      fill: "#2FBC52",
      clipPath: "url(#icon_filetype_meetingnotes_small_svg__c)",
      children: reactJsxRuntimeCoreReexport.jsx("path", {
        d: "M10.429 6.5a.786.786 0 0 0-.786.786v9.428a.786.786 0 0 0 1.571 0V7.286a.786.786 0 0 0-.785-.786M7.286 9.643a.786.786 0 0 0-.786.786v3.142a.786.786 0 1 0 1.571 0V10.43a.786.786 0 0 0-.785-.786M12.786 8.857a.786.786 0 0 1 1.571 0v6.286a.786.786 0 1 1-1.571 0zM16.714 9.643a.786.786 0 0 0-.785.786v3.142a.786.786 0 1 0 1.571 0V10.43a.786.786 0 0 0-.786-.786"
      })
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_meetingnotes_small_svg__b",
        x1: 12,
        x2: 12,
        y1: 0.857,
        y2: 23.143,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#CAF8D6",
          stopOpacity: 0.8
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#DAF4E1",
          stopOpacity: 0.3
        })]
      }), reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "icon_filetype_meetingnotes_small_svg__c",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "#fff",
          d: "M6 6h12v12H6z"
        })
      }), reactJsxRuntimeCoreReexport.jsxs("filter", {
        id: "icon_filetype_meetingnotes_small_svg__a",
        width: 20.228,
        height: 23.657,
        x: 1.886,
        y: 0.429,
        colorInterpolationFilters: "sRGB",
        filterUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("feFlood", {
          floodOpacity: 0,
          result: "BackgroundImageFix"
        }), reactJsxRuntimeCoreReexport.jsx("feColorMatrix", {
          in: "SourceAlpha",
          result: "hardAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        }), reactJsxRuntimeCoreReexport.jsx("feOffset", {
          dy: 0.257
        }), reactJsxRuntimeCoreReexport.jsx("feGaussianBlur", {
          stdDeviation: 0.343
        }), reactJsxRuntimeCoreReexport.jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), reactJsxRuntimeCoreReexport.jsx("feColorMatrix", {
          values: "0 0 0 0 0.182222 0 0 0 0 0.361122 0 0 0 0 0.185204 0 0 0 0.25 0"
        }), reactJsxRuntimeCoreReexport.jsx("feBlend", {
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_18968_1896"
        }), reactJsxRuntimeCoreReexport.jsx("feBlend", {
          in: "SourceGraphic",
          in2: "effect1_dropShadow_18968_1896",
          result: "shape"
        })]
      })]
    })]
  }), {}));
  var b = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 25",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsxs("g", {
      filter: "url(#icon_filetype_doubao_code_svg__a)",
      children: [reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "#fff",
        d: "M2.571 3.896c0-1.678 1.407-3.039 3.143-3.039h12.572c1.735 0 3.142 1.36 3.142 3.04v16.207c0 1.678-1.407 3.039-3.142 3.039H5.714c-1.736 0-3.143-1.36-3.143-3.04z"
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        fill: "url(#icon_filetype_doubao_code_svg__b)",
        d: "M2.571 3.896c0-1.678 1.407-3.039 3.143-3.039h12.572c1.735 0 3.142 1.36 3.142 3.04v16.207c0 1.678-1.407 3.039-3.142 3.039H5.714c-1.736 0-3.143-1.36-3.143-3.04z"
      })]
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#9952E1",
      d: "M12.68 6.57a.64.64 0 0 1 .56.649l-.005.066-1.198 9.59a.64.64 0 0 1-1.27-.16l1.2-9.59.01-.063a.64.64 0 0 1 .703-.492M15.797 12c.146 0 .252.105.273.244.128.762.24 1.154.483 1.397.242.242.632.355 1.39.484.142.015.25.128.25.274 0 .145-.11.257-.248.273-.76.128-1.15.24-1.392.482-.242.243-.355.636-.483 1.399a.274.274 0 0 1-.273.242.28.28 0 0 1-.274-.241c-.128-.77-.24-1.162-.483-1.403-.241-.242-.632-.35-1.391-.479a.28.28 0 0 1-.25-.274c0-.146.11-.258.252-.273.757-.129 1.147-.242 1.389-.484.242-.243.355-.635.483-1.398a.28.28 0 0 1 .274-.243M8.192 9.15a.64.64 0 0 1 .904.904l-1.945 1.945 1.945 1.946.044.048a.64.64 0 0 1-.9.9l-.048-.044-2.398-2.398a.64.64 0 0 1 0-.903zm6.714.001a.64.64 0 0 1 .855-.043l.048.043 2.397 2.398a.64.64 0 0 1 0 .903l-.096.096a2.6 2.6 0 0 0-.654-.572c-.285-.168-.644-.27-.959-.33l-1.591-1.591-.044-.048a.64.64 0 0 1 .044-.856"
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_doubao_code_svg__b",
        x1: 12,
        x2: 12,
        y1: 0.857,
        y2: 23.143,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#E1D1FF",
          stopOpacity: 0.8
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#E9DDFF",
          stopOpacity: 0.3
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("filter", {
        id: "icon_filetype_doubao_code_svg__a",
        width: 20.228,
        height: 23.657,
        x: 1.886,
        y: 0.429,
        colorInterpolationFilters: "sRGB",
        filterUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("feFlood", {
          floodOpacity: 0,
          result: "BackgroundImageFix"
        }), reactJsxRuntimeCoreReexport.jsx("feColorMatrix", {
          in: "SourceAlpha",
          result: "hardAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        }), reactJsxRuntimeCoreReexport.jsx("feOffset", {
          dy: 0.257
        }), reactJsxRuntimeCoreReexport.jsx("feGaussianBlur", {
          stdDeviation: 0.343
        }), reactJsxRuntimeCoreReexport.jsx("feComposite", {
          in2: "hardAlpha",
          operator: "out"
        }), reactJsxRuntimeCoreReexport.jsx("feColorMatrix", {
          values: "0 0 0 0 0.35814 0 0 0 0 0.182222 0 0 0 0 0.361122 0 0 0 0.25 0"
        }), reactJsxRuntimeCoreReexport.jsx("feBlend", {
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_25564_902"
        }), reactJsxRuntimeCoreReexport.jsx("feBlend", {
          in: "SourceGraphic",
          in2: "effect1_dropShadow_25564_902",
          result: "shape"
        })]
      })]
    })]
  }), {}));
  var M = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_folder_writing_small_svg__a)",
      d: "M2 6.5h20v12.069c0 1.066-.896 1.93-2 1.93H4c-1.105 0-2-.864-2-1.93z"
    }), reactJsxRuntimeCoreReexport.jsxs("g", {
      fill: "#105FD5",
      opacity: 0.8,
      children: [reactJsxRuntimeCoreReexport.jsx("path", {
        d: "M15.046 11.622a.194.194 0 0 1-.193.17.2.2 0 0 1-.194-.17c-.09-.544-.17-.822-.341-.992s-.447-.25-.985-.34a.196.196 0 0 1-.177-.193c0-.103.078-.183.179-.193.536-.091.811-.171.982-.343.172-.172.251-.45.342-.99a.2.2 0 0 1 .194-.171c.103 0 .179.074.193.173.091.539.17.816.342.988.171.172.447.252.984.343.1.01.177.09.177.193a.195.195 0 0 1-.176.193c-.538.09-.814.17-.985.342s-.251.45-.342.99"
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        fillRule: "evenodd",
        d: "M14.853 12.641c.206 0 .38-.079.509-.201v4.018c0 .469-.38.848-.849.848H9.848A.85.85 0 0 1 9 16.458v-5.937c0-.469.38-.849.848-.849h2.593a.744.744 0 0 0 .51 1.16c.671.114.828.193.9.264.07.071.153.231.267.915.056.334.338.63.735.63m-4.284.424a.297.297 0 0 0 0 .594h1.103a.297.297 0 0 0 0-.594zm-.297 1.994c0-.164.133-.297.297-.297h2.8a.297.297 0 1 1 0 .593h-2.8a.297.297 0 0 1-.297-.296",
        clipRule: "evenodd"
      })]
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_folder_writing_small_svg__b)",
      d: "M2 4.5a2 2 0 0 1 2-2h4.774a4 4 0 0 1 1.405.255l2.642.99A4 4 0 0 0 14.225 4H20a2 2 0 0 1 2 2v.5H2z"
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_folder_writing_small_svg__a",
        x1: 12,
        x2: 12,
        y1: 6.5,
        y2: 20.5,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#8FD2FF"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#63BEFF"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_folder_writing_small_svg__b",
        x1: 12.5,
        x2: 12.5,
        y1: 2.5,
        y2: 6.5,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#5C95FF"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#0568D9"
        })]
      })]
    })]
  }), {}));
  var B = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_folder_chatfile_small_svg__a)",
      d: "M2 6.5h20v12.069c0 1.066-.896 1.93-2 1.93H4c-1.105 0-2-.864-2-1.93z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#105FD5",
      fillRule: "evenodd",
      d: "M9.4 16.46a.43.43 0 0 0 .301.098q.221 0 .571-.13.354-.13.743-.34.39-.209.73-.455.688.014 1.294-.13.606-.142 1.1-.412.495-.271.853-.648.36-.38.554-.84a2.5 2.5 0 0 0 .195-.983q0-.626-.289-1.174a3 3 0 0 0-.804-.964 3.9 3.9 0 0 0-1.2-.648 4.5 4.5 0 0 0-1.463-.234 4.5 4.5 0 0 0-1.466.234 3.9 3.9 0 0 0-1.197.648q-.513.412-.805.964a2.5 2.5 0 0 0-.288 1.174q0 .532.207 1.012.208.48.584.866.38.386.889.632a6.124 6.124 0 0 1-.529.814.42.42 0 0 0-.097.28.33.33 0 0 0 .117.236m2.584-3.332a.514.514 0 1 0 0-1.028.514.514 0 0 0 0 1.028m2.058-.514a.514.514 0 1 1-1.028 0 .514.514 0 0 1 1.028 0m-3.6.514a.514.514 0 1 0 0-1.029.514.514 0 0 0 0 1.029",
      clipRule: "evenodd",
      opacity: 0.8
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_folder_chatfile_small_svg__b)",
      d: "M2 4.5a2 2 0 0 1 2-2h4.774a4 4 0 0 1 1.405.255l2.642.99A4 4 0 0 0 14.225 4H20a2 2 0 0 1 2 2v.5H2z"
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_folder_chatfile_small_svg__a",
        x1: 12,
        x2: 12,
        y1: 6.5,
        y2: 20.5,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#8FD2FF"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#63BEFF"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_folder_chatfile_small_svg__b",
        x1: 12.5,
        x2: 12.5,
        y1: 2.5,
        y2: 6.5,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#5C95FF"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#0568D9"
        })]
      })]
    })]
  }), {}));
  var U = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_folder_meetingnote_small_svg__a)",
      d: "M2 6.5h20v12.069c0 1.066-.896 1.93-2 1.93H4c-1.105 0-2-.864-2-1.93z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#105FD5",
      d: "M14.357 15.027v-.629l.97.652a.643.643 0 0 0 .959-.56v-2.944a.643.643 0 0 0-.959-.56l-.97.651v-.628c0-.4-.288-.723-.643-.723h-4.5c-.355 0-.643.324-.643.723v4.018c0 .4.288.723.643.723h4.5c.355 0 .643-.324.643-.723",
      opacity: 0.8
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_folder_meetingnote_small_svg__b)",
      d: "M2 4.5a2 2 0 0 1 2-2h4.774a4 4 0 0 1 1.405.255l2.641.99A4 4 0 0 0 14.225 4H20a2 2 0 0 1 2 2v.5H2z"
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_folder_meetingnote_small_svg__a",
        x1: 11.999,
        x2: 11.999,
        y1: 6.5,
        y2: 20.5,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#8FD2FF"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#63BEFF"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_folder_meetingnote_small_svg__b",
        x1: 12.499,
        x2: 12.499,
        y1: 2.5,
        y2: 6.5,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#5C95FF"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#0568D9"
        })]
      })]
    })]
  }), {}));
  var S = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_folder_artifacts_svg__a)",
      d: "M2 7h20v12.069c0 1.066-.895 1.93-2 1.93H4c-1.105 0-2-.864-2-1.93z"
    }), reactJsxRuntimeCoreReexport.jsx("g", {
      fill: "#105FD5",
      fillRule: "evenodd",
      clipRule: "evenodd",
      opacity: 0.8,
      children: reactJsxRuntimeCoreReexport.jsx("path", {
        d: "M12.703 11.014H8.927a.784.784 0 0 0-.784.784v4.203c0 .434.35.785.784.785h5.302a.784.784 0 0 0 .785-.785v-2.313a.774.774 0 0 1-.835-.534l-.13-.396a.78.78 0 0 0-.5-.5l-.396-.13a.785.785 0 0 1-.45-1.114M10.1 12.756a.327.327 0 0 0-.457 0 .315.315 0 0 0 0 .45l.741.73-.741.73a.315.315 0 0 0 0 .45.327.327 0 0 0 .457 0l.968-.952a.32.32 0 0 0 0-.455zm1.47 2.135a.32.32 0 0 1 .323-.318h1.455a.32.32 0 0 1 .323.318.32.32 0 0 1-.323.319h-1.455a.32.32 0 0 1-.324-.319M14.835 13.066a.18.18 0 0 0 .181-.158c.086-.5.16-.756.322-.915.16-.159.42-.233.925-.316a.18.18 0 0 0 .165-.18.18.18 0 0 0-.166-.178c-.504-.084-.763-.158-.924-.317s-.236-.415-.321-.914a.184.184 0 0 0-.364 0c-.085.499-.16.755-.321.914s-.42.233-.924.317a.18.18 0 0 0-.167.179c0 .097.075.167.166.179.505.083.764.155.925.313.16.158.236.415.32.918.016.09.088.158.183.158"
      })
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_folder_artifacts_svg__b)",
      d: "M2 5a2 2 0 0 1 2-2h4.775a4 4 0 0 1 1.404.255l2.642.99a4 4 0 0 0 1.404.255H20a2 2 0 0 1 2 2V7H2z"
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_folder_artifacts_svg__a",
        x1: 12,
        x2: 12,
        y1: 7,
        y2: 21,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#8FD2FF"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#63BEFF"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_folder_artifacts_svg__b",
        x1: 12.5,
        x2: 12.5,
        y1: 3,
        y2: 7,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#5C95FF"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#0568D9"
        })]
      })]
    })]
  }), {}));
  var k = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_folder_image_small_svg__a)",
      d: "M2 6.5h20v12.069c0 1.066-.896 1.93-2 1.93H4c-1.105 0-2-.864-2-1.93z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_folder_image_small_svg__b)",
      d: "M2 4.5a2 2 0 0 1 2-2h4.774a4 4 0 0 1 1.405.255l2.641.99A4 4 0 0 0 14.225 4H20a2 2 0 0 1 2 2v.5H2z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#105FD5",
      fillRule: "evenodd",
      d: "M14.47 12.482c.1 0 .174-.073.188-.17.088-.54.166-.817.332-.989.166-.171.434-.25.956-.34a.193.193 0 0 0 .171-.194.19.19 0 0 0-.172-.193c-.52-.091-.789-.17-.955-.342s-.244-.449-.332-.987c-.014-.098-.087-.173-.187-.173-.099 0-.173.075-.188.172-.089.54-.166.816-.332.988-.167.171-.434.25-.955.342a.19.19 0 0 0-.173.193c0 .105.078.18.172.193.522.09.79.168.956.339.166.17.243.447.332.991.015.097.09.17.188.17m-5.855-2.54h3.476v.752H8.616v4.171l.57-.509a1.075 1.075 0 0 1 1.423-.014l.388.332 1.316-1.107c.404-.34.985-.34 1.39 0l1.134.953v-1.285h.732v2.918a.743.743 0 0 1-.732.753H8.615a.743.743 0 0 1-.732-.753v-5.459c0-.416.328-.753.732-.753m2.562 2.24a.743.743 0 0 1-.732.752.743.743 0 0 1-.732-.753c0-.415.327-.752.732-.752s.732.336.732.752",
      clipRule: "evenodd"
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_folder_image_small_svg__a",
        x1: 11.999,
        x2: 11.999,
        y1: 6.5,
        y2: 20.5,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#8FD2FF"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#63BEFF"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_folder_image_small_svg__b",
        x1: 12.499,
        x2: 12.499,
        y1: 2.5,
        y2: 6.5,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#5C95FF"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#0568D9"
        })]
      })]
    })]
  }), {}));
  var rtlWritingFiletypeIcon = require("rtl-writing-filetype-icon") /*id: 645397*/;
  var O = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_code_project_svg__a)",
      d: "M2 6.5h20v12.069c0 1.066-.895 1.931-2 1.931H4c-1.105 0-2-.865-2-1.931z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#icon_filetype_code_project_svg__b)",
      d: "M2 4.5a2 2 0 0 1 2-2h4.775a4 4 0 0 1 1.404.255l2.642.99A4 4 0 0 0 14.225 4H20a2 2 0 0 1 2 2v.5H2z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#C70",
      d: "M15 11.143c.473 0 .857.384.857.857v3.429a.857.857 0 0 1-.857.857H9a.86.86 0 0 1-.857-.857v-3.43c0-.473.384-.857.857-.857zM9.98 12.52a.327.327 0 0 0-.456 0 .315.315 0 0 0 0 .45l.74.731-.74.73a.315.315 0 0 0 0 .45c.126.124.33.124.457 0l.967-.953a.32.32 0 0 0 0-.454zm1.793 1.818a.32.32 0 0 0-.323.318.32.32 0 0 0 .323.318h1.455a.32.32 0 0 0 .323-.318.32.32 0 0 0-.323-.318zm2.713-4.053c.284 0 .514.23.514.514H9c0-.284.23-.514.514-.514zm-.858-.857c.284 0 .515.23.515.514H9.857c0-.284.23-.514.514-.514z",
      opacity: 0.8
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_code_project_svg__a",
        x1: 12,
        x2: 12,
        y1: 6.5,
        y2: 20.5,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#FFC60A"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#FFB14C"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "icon_filetype_code_project_svg__b",
        x1: 12.5,
        x2: 12.5,
        y1: 2.5,
        y2: 6.5,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#FF9F4F"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#FD8521"
        })]
      })]
    })]
  }), {}));
  var contentTypeEnum = require("content-type-enum") /*id: 921355*/;
  var fileRowLayoutComponent = require("file-row-layout-component") /*id: 569650*/;
  var fileEntityTypeConstants = require("file-entity-type-constants") /*id: 567257*/;
  var G = {
    container: "container-BHqpKf",
    "action-btn-wrapper": "action-btn-wrapper-LmSdHf",
    highlight: "highlight-SVLzht",
    "check-box-wrapper": "check-box-wrapper-Pv8cI3",
    left: "left-LzGGo2",
    "file-box-wrapper": "file-box-wrapper-_hBkT3",
    icon: "icon-yOuy5x",
    title: "title-YevCtv",
    "update-time": "update-time-PdEXcM",
    disabled: "disabled-Pi0hhm",
    notallowed: "notallowed-ovFVAo"
  };
  let A = ["dng", "arw", "nef", "ar2", "ar3"];
  let R = typeof window != "undefined" && window.document !== undefined && !!window.document.documentElement && "ontouchstart" in window.document.documentElement;
  let E = e => {
    let {
      className: l,
      file: {
        type: t,
        name: o,
        ext: a,
        disabled: n = false,
        directoryType: r,
        cover: _
      },
      dataTestId: p,
      shareType: h,
      onClick: m
    } = e;
    if (h) {
      if (h === "multipleFolder") {
        return reactJsxRuntimeCoreReexport.jsx(v, {
          "data-testid": p,
          className: c(G.icon, l)
        });
      }
      if (h === "folerAndFile") {
        return reactJsxRuntimeCoreReexport.jsx(y, {
          "data-testid": p,
          className: c(G.icon, l)
        });
      }
      if (h === "folder") {
        return reactJsxRuntimeCoreReexport.jsx(fileFolderRtlIcon.FileFolderRtlIcon, {
          "data-testid": p,
          className: c(G.icon, l)
        });
      }
      if (h === "multiFile") {
        return reactJsxRuntimeCoreReexport.jsx(F, {
          "data-testid": p,
          className: c(G.icon, l)
        });
      }
      if (h === "metting_minutes") {
        return reactJsxRuntimeCoreReexport.jsx(C, {
          "data-testid": p,
          className: c(G.icon, l)
        });
      }
      if (h === "code_artifact") {
        return reactJsxRuntimeCoreReexport.jsx(b, {
          "data-testid": p,
          className: c(G.icon, l)
        });
      }
      if (h === "file") {
        return reactJsxRuntimeCoreReexport.jsx(lazyFileIconLoader.FileIcon, {
          "data-testid": p,
          ext: a || getFileExtension.getFileExtension(o),
          link: t === fileEntityTypeConstants.fileEntityTypes.Link,
          className: c(G.icon, l),
          style: n ? "greyCompact" : "compact",
          name: o
        });
      }
    }
    if (t === fileEntityTypeConstants.fileEntityTypes.Directory) {
      if (r === contentTypeEnum.ContentType.Documents) {
        return reactJsxRuntimeCoreReexport.jsx(M, {
          "data-testid": p,
          className: c(G.icon, l)
        });
      } else if (r === contentTypeEnum.ContentType.ConversationFiles) {
        return reactJsxRuntimeCoreReexport.jsx(B, {
          "data-testid": p,
          className: c(G.icon, l)
        });
      } else if (r === contentTypeEnum.ContentType.MeetingMinutes) {
        return reactJsxRuntimeCoreReexport.jsx(U, {
          "data-testid": p,
          className: c(G.icon, l)
        });
      } else if (r === contentTypeEnum.ContentType.CodeArtifact) {
        return reactJsxRuntimeCoreReexport.jsx(S, {
          "data-testid": p,
          className: c(G.icon, l)
        });
      } else if (r === contentTypeEnum.ContentType.Creation) {
        return reactJsxRuntimeCoreReexport.jsx(k, {
          "data-testid": p,
          className: c(G.icon, l)
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx(fileFolderRtlIcon.FileFolderRtlIcon, {
          "data-testid": p,
          className: c(G.icon, l)
        });
      }
    } else if (t === fileEntityTypeConstants.fileEntityTypes.WritingDoc) {
      return reactJsxRuntimeCoreReexport.jsx(rtlWritingFiletypeIcon.WritingFiletypeIcon, {
        "data-testid": p,
        className: c(G.icon, l)
      });
    } else if (t === fileEntityTypeConstants.fileEntityTypes.MeetingMinutes) {
      return reactJsxRuntimeCoreReexport.jsx(C, {
        "data-testid": p,
        className: c(G.icon, l)
      });
    } else if (t === fileEntityTypeConstants.fileEntityTypes.CodeProject) {
      return reactJsxRuntimeCoreReexport.jsx(O, {
        "data-testid": p,
        className: c(G.icon, l)
      });
    } else if (t === fileEntityTypeConstants.fileEntityTypes.CodeArtifact) {
      return reactJsxRuntimeCoreReexport.jsx(b, {
        "data-testid": p,
        className: c(G.icon, l)
      });
    } else if ((_ == null ? undefined : _.smallPic?.url) && !A.includes(getFileExtension.getFileExtension(o))) {
      return reactJsxRuntimeCoreReexport.jsx(mdBoxLazyComponentsModule.lazyImageComponent, {
        src: xssContentSanitizer.sanitizeUrl(_.smallPic.url, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x--TNSak0wSm9X$EpWZEZre%9-b*F$emw2WTIxTmRsa3lPWFJq%npsM$ds-zFNR041T1cxaF-zaHN%RmRzT%ZwWE1IWmhWelZy$2xobmRX%kl%alJa$0$wd$p*aE5Q%T09"
        }),
        imageOptions: {
          height: 28,
          width: 28,
          onClick: m,
          objectFit: "cover"
        },
        style: {
          cursor: "pointer",
          borderRadius: "2px"
        }
      }, _.smallPic.url);
    } else {
      return reactJsxRuntimeCoreReexport.jsx(lazyFileIconLoader.FileIcon, {
        "data-testid": p,
        ext: a || getFileExtension.getFileExtension(o),
        link: t === fileEntityTypeConstants.fileEntityTypes.Link,
        className: c(G.icon, l),
        style: n ? "greyCompact" : "compact"
      });
    }
  };
  function $(e) {
    let {
      rowHeight: s = 54,
      file: l,
      highlight: i,
      enableCheckBox: r = false,
      checked: d,
      singleSelect: f = false,
      onClickFileTitle: x,
      onClickContainer: u,
      onDoubleClickContainer: v,
      onContextMenu: y,
      onCheckedChange: w,
      renderActionButtons: F,
      renderFileLabel: C,
      renderPreviewContent: b,
      popoverProps: M,
      className: B,
      getFileLabelTooltipContent: U,
      fileStatusComp: S,
      getFileLabelDisable: k,
      renderRightArea: H,
      timeColumnDisplayText: O
    } = e;
    let {
      showCheckBox: z = true,
      enableCheck: N = true,
      disabled: A = false,
      enablePreview: $ = true
    } = l;
    let [Z, L] = reactCoreLibraryReexport.useState(false);
    let W = isUndefinedCheck.isUndefined(d) ? Z : d;
    let T = reactCoreLibraryReexport.useRef(null);
    let [I, V] = reactCoreLibraryReexport.useState(false);
    useHoverStateHook.useHoverState(T, {
      onChange: V
    });
    let K = F == null ? undefined : F(l);
    let q = !!K && !!I;
    let J = !R && typeof b == "function" && !!$;
    let X = f ? radioComponentExport.RadioComponent : samanthaCheckboxComponents.CheckboxWrapper;
    let Q = {
      position: "right",
      showArrow: true,
      arrowPointAtCenter: true,
      content: J && b(l),
      trigger: "hover",
      mouseEnterDelay: 1000,
      zIndex: 2000,
      ...throttledOmitPathStringify.omitPathStringify(M, "popoverPosition")
    };
    let Y = (k == null ? undefined : k(l)) || false;
    let ee = reactJsxRuntimeCoreReexport.jsx("div", {
      className: c([G.title, Y && G.notallowed]),
      onClick: e => {
        if (x != null) {
          x(e);
        }
      },
      "data-testid": "ai_space_file_item_label",
      children: l.name
    });
    let es = (U == null ? undefined : U(l)) ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
      content: U == null ? undefined : U(l),
      trigger: "hover",
      clickToHide: true,
      children: ee
    }) : ee;
    let el = reactJsxRuntimeCoreReexport.jsxs("div", {
      className: G["file-box-wrapper"],
      children: [reactJsxRuntimeCoreReexport.jsx(E, {
        file: l,
        onClick: x
      }), (M == null ? undefined : M.popoverPosition) === "label-right" && J ? reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
        ...Q,
        children: es
      }) : es]
    });
    let ei = isFunctionUtil_1.isFunction(C) ? C({
      file: l,
      className: G["file-box-wrapper"],
      icon: reactJsxRuntimeCoreReexport.jsx(E, {
        file: l,
        onClick: x
      }),
      titleClassName: G.title,
      testId: "ai_space_file_item_label",
      originComp: el,
      disabled: A
    }) : el;
    let et = H == null ? undefined : H(l);
    reactCoreLibraryReexport.useEffect(() => {
      if (i && T.current) {
        T.current.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    }, [i]);
    let eo = reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "ai_space_file_item",
      className: c(G.container, {
        [G.highlight]: i,
        [G.disabled]: A
      }, B),
      ref: T,
      "data-ai-space-file-item": `row_${l.id}`,
      onContextMenu: y,
      onClick: u,
      onDoubleClick: v,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: G["check-box-wrapper"],
        onClick: e => {
          e.stopPropagation();
        },
        children: (r || I) && z && reactJsxRuntimeCoreReexport.jsx(X, {
          mode: "advanced",
          "data-testid": "ai_space_file_item_checkbox",
          onChange: e => {
            let s = !!e.target.checked;
            L(s);
            if (w != null) {
              w(s);
            }
          },
          checked: W,
          disabled: !N
        })
      }), reactJsxRuntimeCoreReexport.jsx(fileRowLayoutComponent.FileRowLayout, {
        wrapperStyle: {
          height: s,
          flexGrow: 1,
          borderBottom: "0.5px solid var(--s-color-border-tertiary, rgba(0, 0, 0, 0.08))"
        },
        leftClassName: "flex justify-stretch gap-24",
        left: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: G.left,
            children: ei
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex items-center gap-16",
            children: [S == null ? undefined : S(l), reactJsxRuntimeCoreReexport.jsx(P, {
              visible: q,
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: c(G["action-btn-wrapper"], {
                  "!hidden": !q
                }),
                onClick: e => e.stopPropagation(),
                onDoubleClick: e => e.stopPropagation(),
                children: K
              })
            })]
          })]
        }),
        rightClassName: "flex items-center",
        right: et || reactJsxRuntimeCoreReexport.jsx("div", {
          className: G["update-time"],
          "data-testid": "ai_space_file_item_update_time",
          children: typeof O == "function" ? O(l) : null
        })
      })]
    });
    if (J && (M == null ? undefined : M.popoverPosition) && (M == null ? undefined : M.popoverPosition) !== "label-right") {
      return reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
        ...Q,
        children: eo
      });
    } else {
      return eo;
    }
  }
  function P(e) {
    let {
      visible: s,
      delayTime: l = 300,
      children: i
    } = e;
    let [o, a] = reactCoreLibraryReexport.useState(s);
    let n = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (n.current) {
        clearTimeout(n.current);
        n.current = null;
      }
      if (s) {
        a(true);
      } else {
        n.current = window.setTimeout(() => {
          a(false);
        }, l);
      }
    }, [s, l]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: o && i
    });
  }
  require.d(exports, {
    FileIconRenderer: function () {
      return E;
    },
    FileRowItem: function () {
      return $;
    }
  });
}