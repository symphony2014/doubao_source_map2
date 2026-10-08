// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'userConfigManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 155242
         */
module.exports = function (module, exports, require) {
  var o;
  var i18nStringHelper = require("i18n-string-helper") /*id: 739898*/;
  var themeDesignTokensProvider = require("theme-design-tokens-provider") /*id: 408160*/;
  var colorUtils = require("color-utils") /*id: 845364*/;
  var a = colorUtils;
  (o = c || {})[o.BACKGROUND_ALPHA = 0.12] = "BACKGROUND_ALPHA";
  o[o.COVER_ALPHA = 0.3] = "COVER_ALPHA";
  var c = o;
  let d = [{
    labelColor: themeDesignTokensProvider.getTokenValue("P400"),
    textColor: themeDesignTokensProvider.getTokenValue("P500")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("C500"),
    textColor: themeDesignTokensProvider.getTokenValue("C600")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("O600"),
    textColor: themeDesignTokensProvider.getTokenValue("O700")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("L600"),
    textColor: themeDesignTokensProvider.getTokenValue("L700")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("T600"),
    textColor: themeDesignTokensProvider.getTokenValue("T700")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("B400"),
    textColor: themeDesignTokensProvider.getTokenValue("text-link-hover")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("V400"),
    textColor: themeDesignTokensProvider.getTokenValue("V500")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("R500"),
    textColor: themeDesignTokensProvider.getTokenValue("R600")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("Y600"),
    textColor: themeDesignTokensProvider.getTokenValue("Y700")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("G600"),
    textColor: themeDesignTokensProvider.getTokenValue("G700")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("W600"),
    textColor: themeDesignTokensProvider.getTokenValue("W700")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("I400"),
    textColor: themeDesignTokensProvider.getTokenValue("I500")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("V500"),
    textColor: themeDesignTokensProvider.getTokenValue("V600")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("R600"),
    textColor: themeDesignTokensProvider.getTokenValue("R700")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("Y700"),
    textColor: themeDesignTokensProvider.getTokenValue("Y800")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("G700"),
    textColor: themeDesignTokensProvider.getTokenValue("G800")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("W700"),
    textColor: themeDesignTokensProvider.getTokenValue("W800")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("I500"),
    textColor: themeDesignTokensProvider.getTokenValue("I600")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("C600"),
    textColor: themeDesignTokensProvider.getTokenValue("C700")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("O700"),
    textColor: themeDesignTokensProvider.getTokenValue("O800")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("L700"),
    textColor: themeDesignTokensProvider.getTokenValue("L800")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("T700"),
    textColor: themeDesignTokensProvider.getTokenValue("T800")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("text-link-hover"),
    textColor: themeDesignTokensProvider.getTokenValue("text-link-normal")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("P500"),
    textColor: themeDesignTokensProvider.getTokenValue("P600")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("C700"),
    textColor: themeDesignTokensProvider.getTokenValue("C800")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("text-link-normal"),
    textColor: themeDesignTokensProvider.getTokenValue("text-link-pressed")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("P600"),
    textColor: themeDesignTokensProvider.getTokenValue("P700")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("R700"),
    textColor: themeDesignTokensProvider.getTokenValue("R800")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("I600"),
    textColor: themeDesignTokensProvider.getTokenValue("I700")
  }, {
    labelColor: themeDesignTokensProvider.getTokenValue("V600"),
    textColor: themeDesignTokensProvider.getTokenValue("V700")
  }].map(e => h(e));
  let u = h({
    labelColor: themeDesignTokensProvider.getTokenValue("text-caption"),
    textColor: themeDesignTokensProvider.getTokenValue("N700")
  });
  function h(e) {
    let r = a(e.labelColor).setAlpha(c.BACKGROUND_ALPHA).toRgbString();
    let i = a(e.labelColor).setAlpha(c.COVER_ALPHA).toRgbString();
    e.backgroundColor = r;
    e.coverColor = i;
    return e;
  }
  let f = t("history.user.anonymity_user");
  let g = t("LarkCCM_Docs_EditHistory_System_Text");
  let m = function () {
    var e;
    var r;
    if (((r = window.User) === null || r === undefined ? undefined : (e = r.language) === null || e === undefined ? undefined : e.indexOf("zh")) > -1) {
      return "cn";
    } else {
      return "en";
    }
  };
  let p = function (e, r = 1) {
    let i = e.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (i) {
      let e = i[1];
      let o = i[2];
      let n = i[3];
      return `rgba(${e}, ${o}, ${n}, ${r})`;
    }
    return e;
  };
  let y = function (e, r) {
    let i = Object.keys(d).length;
    let o = d[r % i];
    if (o) {
      return o[e];
    } else {
      return u[e];
    }
  };
  let b = function (e) {
    let r = e ? f : "";
    let i = y("textColor", -1);
    let o = y("backgroundColor", -1);
    return {
      name: r,
      textColor: i,
      id: "unknow_user_id",
      anonymity: true,
      backgroundColor: o,
      labelColor: y("labelColor", -1),
      coverColor: y("coverColor", -1)
    };
  };
  let v = function (e, r = m(), i) {
    if (!e || e.anonymity) {
      return b(i);
    }
    let {
      display_name: o,
      name: l
    } = e;
    let s = e[`${r}_name`] || l || f;
    return {
      name: o ? i18nStringHelper.getTranslatedValue(o, s) : s,
      textColor: e.textColor,
      id: e.id,
      anonymity: e.anonymity,
      backgroundColor: e.backgroundColor,
      labelColor: e.labelColor,
      coverColor: e.coverColor
    };
  };
  let _ = {
    usersConfig: {},
    maxColorId: -1,
    isShowName: true,
    displaySystemName: false,
    setShowName(e) {
      this.isShowName = e;
    },
    setDisplaySystemName(e) {
      this.displaySystemName = e;
    },
    getSystemDisplayName: () => g,
    setMobileUsersConfig(e) {
      Object.keys(e).forEach(r => {
        if (_.usersConfig[r]) {
          return;
        }
        let i = e[r];
        let o = {
          name: i.cn_name,
          textColor: i.color,
          labelColor: i.color,
          backgroundColor: p(i.color, 0.12),
          coverColor: p(i.color, 0.3),
          ...i
        };
        _.usersConfig[r] = o;
      });
    },
    setUsersConfig(e) {
      Object.keys(e).forEach(r => {
        let i;
        if (_.usersConfig[r]) {
          return;
        }
        let o = e[r];
        i = o.anonymity ? -1 : ++_.maxColorId;
        let n = {
          ...o,
          textColor: y("textColor", i),
          backgroundColor: y("backgroundColor", i),
          labelColor: y("labelColor", i),
          coverColor: y("coverColor", i)
        };
        _.usersConfig[r] = n;
      });
    },
    resetUsersConfig() {
      _.usersConfig = {};
      _.maxColorId = -1;
    },
    getUserInfoById(e) {
      return v(_.usersConfig[e], undefined, this.isShowName);
    }
  };
  require.d(exports, {
    userConfigManager: function () {
      return _;
    }
  });
}