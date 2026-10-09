// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'cookieManagementUtils'
// - Resolved require(688115) to 'cookie-management-utils'
// - Renamed variable 'o' to 'edenxSearchParamsHook'
// - Resolved require(471794) to 'edenx-search-params-hook'
// - Renamed variable 's' to 'reactHelmetWrapper'
// - Resolved require(941380) to 'react-helmet-wrapper'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'l' to 'resolveSearchParams' (module 471794)
// - Updated imported property 'Z' to 'CookieManager' (module 688115)
// - Updated imported property 'q' to 'createHelmetWrapper' (module 941380)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 911163
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var cookieManagementUtils = require("cookie-management-utils") /*id: 688115*/;
  var edenxSearchParamsHook = require("edenx-search-params-hook") /*id: 471794*/;
  var reactHelmetWrapper = require("react-helmet-wrapper") /*id: 941380*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = ["bing_sem", "bing_xxl"];
  (r = {})[r.WEB_REGISTER = 97129288] = "WEB_REGISTER";
  r[r.DOWNLOAD = 97142679] = "DOWNLOAD";
  let d = r;
  let u = e => `(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"${e}", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq")`;
  let f = e => {
    let {
      uetTiNumber: t
    } = e;
    let [n] = edenxSearchParamsHook.resolveSearchParams();
    let r = n.get("channel") || "";
    let d = cookieManagementUtils.CookieManager.get("is_microsoft_channel") === "1";
    let f = c.includes(r) || d;
    reactCoreLibraryReexport.useEffect(() => {
      if (f && !d) {
        cookieManagementUtils.CookieManager.set("is_microsoft_channel", "1", {
          expires: 7
        });
      }
    }, [f, d]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsx(reactHelmetWrapper.createHelmetWrapper, {
        children: f && reactJsxRuntimeCoreReexport.jsx("script", {
          children: u(t)
        })
      })
    });
  };
  let m = () => reactJsxRuntimeCoreReexport.jsx(f, {
    uetTiNumber: d.WEB_REGISTER
  });
  require.r(exports);
  require.d(exports, {
    DynamicGAScript: function () {
      return m;
    }
  });
}