// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Zk' to 'hideLoading'
// - Renamed export 'hg' to 'isLoadingVisible'
// - Renamed export 'QP' to 'showLoading'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 809257
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  require("browser-environment-detection-utils") /*id: 744607*/;
  var emptyLoadingIllustration = require("empty-loading-illustration") /*id: 701444*/;
  var reactThemeProviderWrapper = require("react-theme-provider-wrapper") /*id: 805172*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactThemeProviderWrapper.withThemeProvider(emptyLoadingIllustration.LoadingIllustration);
  class d extends reactCoreLibraryReexport.Component {
    render() {
      let e = this.props.size || 130;
      let i = {
        width: `${e}px`,
        height: `${e}px`
      };
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "loading-container",
        style: i,
        children: reactJsxRuntimeCoreReexport.jsx(c, {})
      });
    }
  }
  let u = {
    size: 130
  };
  let h = {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    backgroundColor: "var(--bg-body)",
    zIndex: 100
  };
  let f = {};
  let g = {};
  function p(e, i, r) {
    if (!e || (g[i] = true, f[i])) {
      return;
    }
    f[i] = document.createElement("div");
    let n = f[i];
    n.className = "css-loading-container";
    Object.assign(n.style, h, (r == null ? undefined : r.containerStyle) || {});
    e.appendChild(n);
    let {
      size: l
    } = Object.assign({}, u, r);
    reactDomEntryWrapper.render(reactJsxRuntimeCoreReexport.jsx(d, {
      size: l
    }), n);
  }
  function m(e) {
    g[e] = false;
    let i = f[e];
    if (i) {
      reactDomEntryWrapper.unmountComponentAtNode(i);
      delete f[e];
      i.parentElement.removeChild(i);
    }
  }
  function v(e) {
    return g[e];
  }
  require.d(exports, {
    hideLoading: function () {
      return m;
    },
    isLoadingVisible: function () {
      return v;
    },
    showLoading: function () {
      return p;
    }
  });
}