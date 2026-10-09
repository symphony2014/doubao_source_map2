// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'OB' to 'getUserUnit'
// - Renamed export 'PO' to 'isTenantOne'
// - Renamed export 'TG' to 'isFeishuProduct'
// - Renamed export 'UL' to 'isLarkProduct'
// - Renamed export '_c' to 'isAnonymousAccess'
// - Renamed export 'kv' to 'productConstants'
// - Renamed export 'o9' to 'isChinaRegion'
// - Renamed export 'tF' to 'getUserInfo'
// - Renamed export 'wv' to 'getProduct'
// - Renamed export 'yR' to 'regionConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 107339
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var chatUserInfoService = require("chat-user-info-service") /*id: 152763*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  (o = {}).FEISHU = "feishu";
  o.LARK = "lark";
  let a = o;
  (i = {}).CN = "eu_nc";
  i.SG = "larksgaws";
  i.VA = "eu_ea";
  i.JP = "larkjpaws";
  i.MY = "larkmy";
  i.BOE_CN = "boecn";
  i.BOE_VA = "boeva";
  let s = i;
  function d() {
    return objectPathGetDefault.getObjectPathDefault(window, "User.tenantId") === "1";
  }
  function f() {
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      return objectPathGetDefault.getObjectPathDefault(window, "anonymousAccess.isAnonymousAccess") === "True";
    } else {
      return objectPathGetDefault.getObjectPathDefault(window, "anonymousAccess.isAnonymousAccess", false);
    }
  }
  function h() {
    return {
      userId: chatUserInfoService.userInfoService.getCurrentUser().get("id") || objectPathGetDefault.getObjectPathDefault(window, "User.id"),
      tenantId: chatUserInfoService.userInfoService.getCurrentUser().get("tenant_id") || objectPathGetDefault.getObjectPathDefault(window, "User.tenantId")
    };
  }
  let _ = e => objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common.product", e);
  let p = () => _() === a.FEISHU;
  let g = () => _() === a.LARK;
  let E = e => browserEnvironmentDetectionUtils.browserDetector.isH5 || !browserEnvironmentDetectionUtils.browserDetector.isMobile ? objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.ccm_platform_tea_config.user_unit", e) : objectPathGetDefault.getObjectPathDefault(window, "User.appConfig.ccm_platform_tea_config.user_unit", e);
  let m = () => /^ka.+/.test(E());
  let b = () => E() === s.CN || E() === s.BOE_CN || m();
  require.d(exports, {
    getUserUnit: function () {
      return E;
    },
    isTenantOne: function () {
      return d;
    },
    isFeishuProduct: function () {
      return p;
    },
    isLarkProduct: function () {
      return g;
    },
    isAnonymousAccess: function () {
      return f;
    },
    productConstants: function () {
      return a;
    },
    isChinaRegion: function () {
      return b;
    },
    getUserInfo: function () {
      return h;
    },
    getProduct: function () {
      return _;
    },
    regionConstants: function () {
      return s;
    }
  });
}