// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'pI' to 'getBlockSetting'
// - Renamed export 'xH' to 'getAbstractSetting'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 272995
         */
module.exports = function (module, exports, require) {
  var moduleSettingProviderToken = require("module-setting-provider-token") /*id: 609239*/;
  function i(e, n = 6) {
    let r = Object.getPrototypeOf(e);
    if (!r) {
      return {};
    }
    let {
      abstractType: o
    } = r;
    if (o) {
      return {
        abstractType: o,
        parentClass: r
      };
    } else if (n <= 0) {
      return {};
    } else {
      return i(r, n - 1);
    }
  }
  function l(e, n, r, c) {
    let u = n.editorAPI.getService(moduleSettingProviderToken.moduleSettingToken).getBlockSetting(e);
    if (u) {
      let e = u[r];
      if (e) {
        return e;
      }
    }
    if (!c && !(c = n.getBlockModelCreatorByBlockType(e))) {
      return;
    }
    let {
      abstractType: a,
      parentClass: s
    } = i(c);
    if (a && s) {
      return l(a, n, r, s);
    }
  }
  function c(e, n, r) {
    let o = n.getBlockModelCreatorByBlockType(e);
    if (!o) {
      return;
    }
    let {
      abstractType: c,
      parentClass: u
    } = i(o);
    if (c) {
      return l(c, n, r, u);
    }
  }
  require.d(exports, {
    getBlockSetting: function () {
      return l;
    },
    getAbstractSetting: function () {
      return c;
    }
  });
}