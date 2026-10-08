// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'o' to 'urlValidationUtils_1'
// - Resolved require(233855) to 'url-validation-utils_1'
// - Renamed variable 'a' to 'iframePlatformGroupingConstants'
// - Resolved require(148183) to 'iframe-platform-grouping-constants'
// - Renamed variable 's' to 'iframeLayoutConfigProvider'
// - Resolved require(464732) to 'iframe-layout-config-provider'
// - Renamed variable 'l' to 'iframeLayoutConstants'
// - Resolved require(147199) to 'iframe-layout-constants'
// - Renamed variable 'c' to 'userEnvironmentUtils'
// - Resolved require(107339) to 'user-environment-utils'
// - Updated imported property 'Z' to 'iframeConfigMap' (module 464732)
// - Updated imported property 'PO' to 'isTenantOne' (module 107339)
// - Updated imported property 'o9' to 'isChinaRegion' (module 107339)
// - Updated imported property 'p4' to 'internationalPlatforms' (module 148183)
// - Updated imported property 'VQ' to 'domesticPlatforms' (module 148183)
// - Updated imported property 'YN' to 'isValidUrl' (module 233855)
// - Updated imported property 'cA' to 'IframeTypes' (module 147199)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 473081
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var urlValidationUtils_1 = require("url-validation-utils_1") /*id: 233855*/;
  var iframePlatformGroupingConstants = require("iframe-platform-grouping-constants") /*id: 148183*/;
  var iframeLayoutConfigProvider = require("iframe-layout-config-provider") /*id: 464732*/;
  var iframeLayoutConstants = require("iframe-layout-constants") /*id: 147199*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  let u = Object.values(iframeLayoutConfigProvider.iframeConfigMap).map(e => ({
    type: e.type,
    patterns: e.patterns,
    disable: e.disable || false
  }));
  let d = e => {
    if (userEnvironmentUtils.isTenantOne()) {
      return true;
    }
    let n = e == null ? undefined : e.replace(/Code$/, "");
    let i = userEnvironmentUtils.isChinaRegion();
    let r = i && iframePlatformGroupingConstants.internationalPlatforms.includes(n);
    let o = !i && iframePlatformGroupingConstants.domesticPlatforms.includes(n);
    return !r && !o;
  };
  function h(e) {
    if (!urlValidationUtils_1.isValidUrl(e)) {
      return;
    }
    let n = u.find(n => {
      let {
        patterns: i
      } = n;
      return i.find(n => n.test(e));
    });
    if (n) {
      return n.type;
    } else {
      return iframeLayoutConstants.IframeTypes.defaulIframe;
    }
  }
  let p = e => {
    if (e.type !== docBlockTypeConstants.blockTypeConstants.IFRAME) {
      return;
    }
    let {
      original_text: n
    } = e;
    return h(n);
  };
  require.r(exports);
  require.d(exports, {
    canShowInCurrentRegion: function () {
      return d;
    },
    checkPathNodeDataIsIframe: function () {
      return p;
    },
    getIframeConfigType: function () {
      return h;
    }
  });
}