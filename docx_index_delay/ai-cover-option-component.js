// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'n' to 'documentAiFeatureFlags'
// - Resolved require(842304) to 'document-ai-feature-flags'
// - Updated imported property 'si' to 'isAICoverEnabled' (module 842304)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_index_delay.3c55e6b1.js
         * chunkId: 82165
         * moduleId: 746541
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var a = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 17,
    height: 17,
    fill: "none",
    viewBox: "0 0 17 17",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#image-ai_svg__a)",
      d: "m3.717 13.484 3.094.007a.2.2 0 0 0 .06.009h5.412c.12 0 .217-.1.217-.225V7.849c0-.08-.03-.156-.085-.212a.28.28 0 0 0-.41 0l-3.66 3.793L6.965 10a.28.28 0 0 0-.41 0l-2.991 3.1a.23.23 0 0 0-.064.158c0 .124.097.225.217.226"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#image-ai_svg__b)",
      d: "M5.985 4.5H3.814v2.25h2.171z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#image-ai_svg__c)",
      d: "M13.404.897a.24.24 0 0 1 .442 0l.633 1.497a.24.24 0 0 0 .127.127l1.497.633a.24.24 0 0 1 0 .442l-1.497.633a.24.24 0 0 0-.127.127l-.633 1.497a.24.24 0 0 1-.442 0l-.633-1.497a.24.24 0 0 0-.127-.127l-1.497-.633a.24.24 0 0 1 0-.442l1.497-.633a.24.24 0 0 0 .127-.127z"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "url(#image-ai_svg__d)",
      d: "M.5 3A1.5 1.5 0 0 1 2 1.5h6.75a.75.75 0 0 1 0 1.5H2v12h12V8.25a.75.75 0 0 1 1.5 0V15a1.5 1.5 0 0 1-1.5 1.5H2A1.5 1.5 0 0 1 .5 15z"
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "image-ai_svg__a",
        x1: 0.5,
        x2: 16.25,
        y1: 8.625,
        y2: 8.625,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#4752E6"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#9F6FF1"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "image-ai_svg__b",
        x1: 0.5,
        x2: 16.25,
        y1: 8.625,
        y2: 8.625,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#4752E6"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#9F6FF1"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "image-ai_svg__c",
        x1: 0.5,
        x2: 16.25,
        y1: 8.625,
        y2: 8.625,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#4752E6"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#9F6FF1"
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "image-ai_svg__d",
        x1: 0.5,
        x2: 16.25,
        y1: 8.625,
        y2: 8.625,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#4752E6"
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#9F6FF1"
        })]
      })]
    })]
  });
  var documentAiFeatureFlags = require("document-ai-feature-flags") /*id: 842304*/;
  var s = e => documentAiFeatureFlags.isAICoverEnabled() && e.aiUsable && reactJsxRuntimeCoreReexport.jsxs("li", {
    className: "cover-panel-popover-options-item",
    onClick: e.onclick,
    children: [reactJsxRuntimeCoreReexport.jsx("i", {
      children: reactJsxRuntimeCoreReexport.jsx(a, {})
    }), reactJsxRuntimeCoreReexport.jsx("span", {
      className: "image-ai-choose-text",
      children: t("LarkCCM_Docs_Cover_AiGenerate_Tab")
    })]
  });
  require.r(exports);
  require.d(exports, {
    default: function () {
      return s;
    }
  });
}