// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'BotVisibilityInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.a5b16934.js
         * chunkId: 88491
         * moduleId: 485788
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var chatEnumConstants = require("chat-enum-constants") /*id: 180943*/;
  var chatLayoutConstants = require("chat-layout-constants") /*id: 680824*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 17,
    height: 16,
    fill: "none",
    viewBox: "0 0 17 16",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#999",
      d: "M5.84 14c-.915 0-1.391-.488-1.391-1.476V8.253c0-.867.38-1.355 1.102-1.452V5.373C5.551 3.151 7.021 2 8.666 2c1.644 0 3.114 1.15 3.114 3.373v1.434c.723.097 1.097.579 1.097 1.446v4.271c0 .988-.476 1.476-1.392 1.476zm.838-8.735v1.518h3.976V5.265c0-1.416-.916-2.187-1.988-2.187-1.079 0-1.988.771-1.988 2.187"
    })
  });
  let c = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#999",
      d: "M7.66 14q-1.314 0-2.296-.471-.977-.473-1.52-1.32-.544-.85-.544-1.987 0-.6.094-1.065a6 6 0 0 1 .239-.838q.144-.377.288-.71t.239-.66.094-.7q0-.181-.022-.399a5 5 0 0 1-.017-.327.43.43 0 0 1 .106-.3.36.36 0 0 1 .277-.116q.294 0 .594.177.305.178.543.494.245.311.372.721l-.277.056q.133-.233.166-.41.039-.185.039-.372A2.8 2.8 0 0 0 5.83 4.73a4.7 4.7 0 0 0-.5-.938q-.3-.444-.627-.838a.8.8 0 0 1-.133-.205.5.5 0 0 1-.044-.21q0-.267.227-.4.234-.14.627-.139.732 0 1.543.178a7.5 7.5 0 0 1 1.614.543 7.4 7.4 0 0 1 1.526.938q.72.566 1.276 1.348.56.777.882 1.781t.322 2.247q0 1.115-.35 2.03-.344.915-.993 1.57a4.5 4.5 0 0 1-1.548 1.01Q8.76 14 7.66 14m.128-1.559q.66 0 1.093-.288.438-.29.655-.76.216-.472.216-1.021 0-.544-.21-1.093a3.3 3.3 0 0 0-.617-1.015 3.1 3.1 0 0 0-1.02-.755q-.04-.016-.062.006-.021.016-.016.055.072.683-.022 1.27-.095.583-.317.883a3 3 0 0 0-.238-.444 1.7 1.7 0 0 0-.322-.383q-.027-.022-.055-.011-.022.006-.028.044a1.1 1.1 0 0 1-.155.439q-.122.195-.267.41-.144.21-.255.477-.105.261-.105.627 0 .7.471 1.132.477.427 1.254.427"
    })
  });
  let d = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 17,
    height: 16,
    fill: "none",
    viewBox: "0 0 17 16",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#999",
      d: "m12.495 12.832-8.23-8.224a.386.386 0 1 1 .549-.544l8.23 8.22c.15.15.16.383 0 .548a.38.38 0 0 1-.55 0m.456-1.477L11.134 9.52c.132-.296.204-.631.204-.971a2.656 2.656 0 0 0-2.671-2.663c-.345 0-.676.073-.972.195L6.37 4.754c.7-.234 1.472-.37 2.298-.37 3.935 0 6.606 3.177 6.606 4.159 0 .573-.903 1.86-2.322 2.813m-4.284 1.351c-3.887 0-6.607-3.177-6.607-4.163 0-.573.928-1.905 2.444-2.876L6.248 7.42c-.16.34-.253.719-.253 1.127A2.676 2.676 0 0 0 8.667 11.2c.398 0 .777-.087 1.107-.252l1.336 1.33a7.1 7.1 0 0 1-2.443.428m1.559-4.26c0 .053-.01.107-.015.155L8.526 6.915a1.541 1.541 0 0 1 1.7 1.53m-3.124.014q.001-.087.01-.175l1.71 1.705q-.085.009-.17.01c-.845 0-1.55-.69-1.55-1.54"
    })
  });
  var u = e => {
    let {
      botInfo: t,
      isSelf: n,
      fromPage: r,
      t: u
    } = e;
    if (!t) {
      return null;
    }
    let {
      bot_stats: p,
      private_status: h
    } = t;
    let f = h === chatEnumConstants.VisibilityType.Public;
    let m = r === chatLayoutConstants.UserSections.Profile && n && h !== undefined && !f;
    let g = h === chatEnumConstants.VisibilityType.Private;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: i("flex-row-start", "hotInfo-qDcjXK"),
      children: [m ? g ? reactJsxRuntimeCoreReexport.jsx(l, {}) : reactJsxRuntimeCoreReexport.jsx(d, {}) : reactJsxRuntimeCoreReexport.jsx(c, {}), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "content-yYsFxV",
        children: m ? u(g ? "visibility_double_check_private" : "Bot_visibility_unlisted") : p == null ? undefined : p.display_heat_score
      })]
    });
  };
  require.d(exports, {
    BotVisibilityInfo: function () {
      return u;
    }
  });
}