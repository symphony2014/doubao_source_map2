// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$I' to 'appShareHelpUrl'
// - Renamed export 'Ah' to 'stickupHelpUrl'
// - Renamed export 'Bn' to 'termsOfServiceUrl'
// - Renamed export 'CJ' to 'spaceContainerUrl'
// - Renamed export 'D0' to 'brandDocsHomeUrl'
// - Renamed export 'FL' to 'helpcenterArtUrl'
// - Renamed export 'Ft' to 'baseDomainUrl'
// - Renamed export 'GC' to 'helpArticleUrlAlt'
// - Renamed export 'Ko' to 'singleDocsHomeUrl'
// - Renamed export 'Lf' to 'contactsDeptUserUrl'
// - Renamed export 'ML' to 'helpcenterImportUrl'
// - Renamed export 'Mc' to 'helpArticleUrlFixed'
// - Renamed export 'Ph' to 'incompatibleExtUrl'
// - Renamed export 'Q3' to 'helpArticleUrlAlt2'
// - Renamed export 'SX' to 'adminBaseUrl'
// - Renamed export 'T_' to 'helpArticleUrlAlt3'
// - Renamed export 'W5' to 'anonymityReportUrl'
// - Renamed export 'Wn' to 'helpcenterPermUrl'
// - Renamed export 'Y3' to 'storageSecretKey'
// - Renamed export 'ZE' to 'loginPageUrl'
// - Renamed export 'aR' to 'loginPageUrlAlias'
// - Renamed export 'bR' to 'supportedBrowserUrl'
// - Renamed export 'bS' to 'supportTicketNewUrl'
// - Renamed export 'ek' to 'passportDomain'
// - Renamed export 'gq' to 'helpArticleUrlRef'
// - Renamed export 'jx' to 'adminDriveWikiUrl'
// - Renamed export 'mL' to 'helpArticleUrlAlt4'
// - Renamed export 'pW' to 'messengerBaseUrl'
// - Renamed export 'pz' to 'driveHomeUrl'
// - Renamed export 'qY' to 'baseHelpcenterUrl'
// - Renamed export 'sR' to 'privacyPolicyUrl'
// - Renamed export 'vO' to 'docsReportUrl'
// - Renamed export 'wc' to 'customerServiceUrl'
// - Renamed export 'wg' to 'frontierTicketUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 322721
         */
module.exports = function (module, exports, require) {
  var globalConfigHelper = require("global-config-helper") /*id: 96848*/;
  var localeManagementUtils = require("locale-management-utils") /*id: 3969*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  let i = globalConfigHelper.getCommonConfig();
  let c = globalConfigHelper.getParamsConfig();
  let u = globalConfigHelper.getUrlMapper();
  let l = globalConfigHelper.isLarkProduct();
  let {
    domain: s,
    helpcenter_article: f
  } = i;
  let d = localeManagementUtils.getCurrentLocale();
  let g = localeManagementUtils.getShortLocale();
  let b = localeManagementUtils.getSnakeLocale();
  let h = "https://";
  let p = typeof window == "undefined" ? require.g : window;
  let w = objectPathGetDefault.getObjectPathDefault(s, "helpcenter", "feishu.cn");
  let _ = objectPathGetDefault.getObjectPathDefault(s, "official", "www.feishu.cn");
  let E = objectPathGetDefault.getObjectPathDefault(s, "helpdesk", "helpdesk.feishu.cn");
  let m = `${h}${w}/hc/${d}`;
  let T = objectPathGetDefault.getObjectPathDefault(window, "materialConfig.brand_docs_helpcenter_home", m);
  let k = `${m}/articles/${objectPathGetDefault.getObjectPathDefault(f, "incompatible_extension", "")}`;
  let x = `${m}/articles/${objectPathGetDefault.getObjectPathDefault(f, "app_share_help", "")}`;
  let I = objectPathGetDefault.getObjectPathDefault(window, "materialConfig.brand_docs_helpcenter_permission", `${m}/articles/${objectPathGetDefault.getObjectPathDefault(f, "authorized_help", "")}`);
  let O = `${m}/articles/${objectPathGetDefault.getObjectPathDefault(f, "supported_browser", "")}`;
  let A = objectPathGetDefault.getObjectPathDefault(window, "materialConfig.brand_docs_helpcenter_import", `${m}/articles/${objectPathGetDefault.getObjectPathDefault(f, "importing_help", "")}`);
  let R = `${m}/articles/${objectPathGetDefault.getObjectPathDefault(f, "stickup_help", "")}`;
  let S = `${m}/articles/${objectPathGetDefault.getObjectPathDefault(f, "space_single_container", "")}`;
  let N = l ? `${b}/privacy-policy` : `${g}/privacy`;
  let y = `${h}${_}/${N}`;
  let B = l ? `${b}/customer-terms-of-service` : `${g}/terms`;
  let D = `${h}${_}/${B}`;
  let L = `${h}${E}/api/lark-customer-service/link`;
  let G = `${h}${E}/suite-help/ticket/new`;
  let C = objectPathGetDefault.getObjectPathDefault(s, "passport", "passport.feishu.cn");
  let v = `${h}${C}/suite/passport/page/login/`;
  let P = v;
  let F = `${h}${C}/suite/passport/frontier_ticket/`;
  let M = `${h}${_}`;
  let U = u.singleDocsHome;
  let H = `${M}/drive/home/`;
  let W = `${M}/report/?type=docs`;
  let Z = `${M}/anonymity/report/?type=docs`;
  let Y = `${h}${objectPathGetDefault.getObjectPathDefault(p, "location.host", _)}/admin/`;
  let V = `${h}${objectPathGetDefault.getObjectPathDefault(p, "location.host", _)}/admin/drive/wiki`;
  let z = `${Y}#/contacts/departmentanduser`;
  let K = `${M}/messenger/`;
  let $ = c.storageNullSecretKey;
  let j = l ? `${T}/articles/360048487850` : `${T}/articles/360049067502`;
  let X = l ? `${T}/articles/360048487978` : `${T}/articles/360049067727`;
  let q = `${T}/articles/360049067490`;
  let J = l ? `${T}/articles/360048487834` : `${T}/articles/360049067483`;
  let Q = l ? `${T}/articles/360048487756` : `${T}/articles/360049067395`;
  let tt = l ? `${T}/articles/360048488019` : `${T}/articles/360049067832`;
  let te = `${T}/articles/360049067736`;
  require.d(exports, {
    appShareHelpUrl: function () {
      return x;
    },
    stickupHelpUrl: function () {
      return R;
    },
    termsOfServiceUrl: function () {
      return D;
    },
    spaceContainerUrl: function () {
      return S;
    },
    brandDocsHomeUrl: function () {
      return T;
    },
    helpcenterArtUrl: function () {
      return j;
    },
    baseDomainUrl: function () {
      return M;
    },
    helpArticleUrlAlt: function () {
      return X;
    },
    singleDocsHomeUrl: function () {
      return U;
    },
    contactsDeptUserUrl: function () {
      return z;
    },
    helpcenterImportUrl: function () {
      return A;
    },
    helpArticleUrlFixed: function () {
      return te;
    },
    incompatibleExtUrl: function () {
      return k;
    },
    helpArticleUrlAlt2: function () {
      return tt;
    },
    adminBaseUrl: function () {
      return Y;
    },
    helpArticleUrlAlt3: function () {
      return J;
    },
    anonymityReportUrl: function () {
      return Z;
    },
    helpcenterPermUrl: function () {
      return I;
    },
    storageSecretKey: function () {
      return $;
    },
    loginPageUrl: function () {
      return v;
    },
    loginPageUrlAlias: function () {
      return P;
    },
    supportedBrowserUrl: function () {
      return O;
    },
    supportTicketNewUrl: function () {
      return G;
    },
    passportDomain: function () {
      return C;
    },
    helpArticleUrlRef: function () {
      return q;
    },
    adminDriveWikiUrl: function () {
      return V;
    },
    helpArticleUrlAlt4: function () {
      return Q;
    },
    messengerBaseUrl: function () {
      return K;
    },
    driveHomeUrl: function () {
      return H;
    },
    baseHelpcenterUrl: function () {
      return m;
    },
    privacyPolicyUrl: function () {
      return y;
    },
    docsReportUrl: function () {
      return W;
    },
    customerServiceUrl: function () {
      return L;
    },
    frontierTicketUrl: function () {
      return F;
    }
  });
}