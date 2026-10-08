// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FB' to 'useTranslation'
// - Renamed export 'Fo' to 'i18nGuardWrapper'
// - Renamed export 'Hf' to 'initI18next'
// - Renamed export 'Kn' to 'initStarling'
// - Renamed export 'Wo' to 'i18nextInstance'
// - Renamed export 'tv' to 'changeLanguage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 728471
         */
module.exports = function (module, exports, require) {
  let i;
  let r;
  let o;
  let a = false;
  let l = false;
  let s = e => {
    let {
      i18next: t,
      useTranslation: n
    } = e;
    i = t;
    r = n;
    a = true;
  };
  let u = e => {
    let {
      changeLanguage: t
    } = e;
    o = t;
    l = true;
  };
  let c = (e, t) => function () {
    var n = arguments.length;
    var i = Array(n);
    var r = 0;
    for (; r < n; r++) {
      i[r] = arguments[r];
    }
    if (t === "i18next" && !a) {
      throw Error("@flow-web/l1-arch-business-i18n i18next not initialized.");
    }
    if (t === "starling" && !l) {
      throw Error("@flow-web/l1-arch-business-i18n starling not initialized.");
    }
    return e(...i);
  };
  require.d(exports, {
    useTranslation: function () {
      return r;
    },
    i18nGuardWrapper: function () {
      return c;
    },
    initI18next: function () {
      return s;
    },
    initStarling: function () {
      return u;
    },
    i18nextInstance: function () {
      return i;
    },
    changeLanguage: function () {
      return o;
    }
  });
}