// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$Y' to 'isFeatureEnabled'
// - Renamed export 'BD' to 'isDlpUploadEnabled'
// - Renamed export 'BQ' to 'isEqualOptEnabled'
// - Renamed export 'C4' to 'isAlwaysTrue'
// - Renamed export 'EC' to 'isCoreEnabled'
// - Renamed export 'GY' to 'isAlwaysFalse'
// - Renamed export 'Hq' to 'isHqEnabled'
// - Renamed export 'IK' to 'isIkEnabled'
// - Renamed export 'JX' to 'isMobileMemoryOpt'
// - Renamed export 'Jj' to 'isPresetPanelEnabled'
// - Renamed export 'Jp' to 'isJpEnabled'
// - Renamed export 'K7' to 'isK7Enabled'
// - Renamed export 'LY' to 'isLyEnabled'
// - Renamed export 'Li' to 'isLiEnabled'
// - Renamed export 'Ls' to 'isLsEnabled'
// - Renamed export 'MF' to 'isMfEnabled'
// - Renamed export 'Mm' to 'isMmEnabled'
// - Renamed export 'Mv' to 'isMvEnabled'
// - Renamed export 'N6' to 'isNotMobile'
// - Renamed export 'ND' to 'isDocsMoreEvents'
// - Renamed export 'NR' to 'isNotMobileNr'
// - Renamed export 'NX' to 'isNxEnabled'
// - Renamed export 'P7' to 'isP7Enabled'
// - Renamed export 'Pp' to 'isPpEnabled'
// - Renamed export 'Py' to 'isWikiV3Enabled'
// - Renamed export 'R0' to 'isR0Enabled'
// - Renamed export 'R7' to 'isR7Enabled'
// - Renamed export 'Sz' to 'isSzEnabled'
// - Renamed export 'T$' to 'isTEnabled'
// - Renamed export 'TB' to 'isTbEnabled'
// - Renamed export 'UP' to 'isUpEnabled'
// - Renamed export 'US' to 'isNotMobileH5'
// - Renamed export 'XV' to 'isMobileDisableIdleWorker'
// - Renamed export 'Y0' to 'isY0Enabled'
// - Renamed export 'YC' to 'isYcEnabled'
// - Renamed export 'Z0' to 'isMobileMemoryLeakFixV3'
// - Renamed export '_P' to 'isErAndEn'
// - Renamed export 'aY' to 'isAyEnabled'
// - Renamed export 'bA' to 'isBaEnabled'
// - Renamed export 'bv' to 'isBvEnabled'
// - Renamed export 'cN' to 'isCnEnabled'
// - Renamed export 'dB' to 'isMobileMemoryLeakFix'
// - Renamed export 'dS' to 'isDsEnabled'
// - Renamed export 'e2' to 'isE2Enabled'
// - Renamed export 'eM' to 'isNotMobileEs'
// - Renamed export 'g7' to 'isZAndK'
// - Renamed export 'g_' to 'isMobileLargeDocIdle'
// - Renamed export 'gi' to 'isGiEnabled'
// - Renamed export 'gx' to 'isGxEnabled'
// - Renamed export 'kb' to 'isDefaultReadMode'
// - Renamed export 'mZ' to 'isMzEnabled'
// - Renamed export 'nP' to 'isNpEnabled'
// - Renamed export 'o5' to 'isO5Enabled'
// - Renamed export 'o6' to 'isO6Enabled'
// - Renamed export 'oJ' to 'isOjEnabled'
// - Renamed export 'oZ' to 'isOzEnabled'
// - Renamed export 'pI' to 'isPiEnabled'
// - Renamed export 'qq' to 'isQqEnabled'
// - Renamed export 'qx' to 'isStopUncommittedUnload'
// - Renamed export 'rB' to 'isMobileSplitFirstSlice'
// - Renamed export 's8' to 'isNotMobileOrL'
// - Renamed export 't8' to 'isNotEmbedDocx'
// - Renamed export 'u$' to 'isAlwaysFalseU'
// - Renamed export 'w$' to 'isWEnabled'
// - Renamed export 'xU' to 'isAlwaysFalseX'
// - Renamed export 'yW' to 'isSyncedBlockDisableEdit'
// - Renamed export 'z9' to 'isMobileApplyClientvar'
// - Renamed export 'zq' to 'isZqEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 939543
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docComponentStubConfig = require("doc-component-stub-config") /*id: 436674*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxConfigManager = require("docx-config-manager") /*id: 981333*/;
  let _ = () => true;
  let l = () => false;
  let s = () => true;
  let E = () => true;
  let d = () => true;
  let T = () => true;
  let p = () => !docxConfigManager.docxConfigManager.isEmbedDocx;
  let S = () => boolDefaultGetterUtil.getDefaultBool("ccm.doc.web.default_read_mode", false);
  let f = () => true;
  let A = () => true;
  let m = () => !browserEnvironmentDetectionUtils.browserDetector.isMobile;
  let I = () => true;
  let O = () => true;
  let R = () => m();
  let h = () => true;
  let N = () => true;
  let C = () => boolDefaultGetterUtil.getDefaultBool("ccm.workspace.wiki_v3", false);
  let D = () => true;
  let L = () => docComponentStubConfig.checkClientFeature("ccm.docx.mobile.split_first_slice_clientvar", false) || browserEnvironmentDetectionUtils.browserDetector.isIPadApp && docComponentStubConfig.checkClientFeature("ccm.docx.mobile_ipad_split_clientvar", false);
  let b = () => browserEnvironmentDetectionUtils.browserDetector.isMobile && docComponentStubConfig.checkClientFeature("ccm.docx.apply_clientvar_on_demand", false) && browserEnvironmentDetectionUtils.browserDetector.isInVC;
  let g = () => browserEnvironmentDetectionUtils.browserDetector.isMobile && docComponentStubConfig.checkClientFeature("ccm.docx.large_doc_idle_apply", false);
  let P = () => !browserEnvironmentDetectionUtils.browserDetector.isMobile || L();
  let M = true;
  let v = () => true;
  let y = () => !!v() && !browserEnvironmentDetectionUtils.browserDetector.isMobile && !browserEnvironmentDetectionUtils.browserDetector.isH5;
  let w = () => true;
  let U = () => true;
  let k = () => true;
  let B = () => true;
  let H = () => true;
  let F = () => true;
  let G = () => true;
  let W = () => true;
  let $ = () => true;
  let x = () => true;
  let Z = () => true;
  let X = () => true;
  let V = () => true;
  let K = () => true;
  let z = () => true;
  let j = () => true;
  let Y = () => z() && K();
  let J = () => true;
  let Q = () => true;
  let q = () => true;
  let ee = () => false;
  let et = () => ee();
  let en = () => false;
  let er = () => et() && en();
  let ei = () => true;
  let eo = () => boolDefaultGetterUtil.getDefaultBool("ccm.docx.web.preset_panel_enable", false);
  let ea = () => boolDefaultGetterUtil.getDefaultBool("ccm.docx.web.synced_block_separate_page_disable_edit", false);
  let eu = () => browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp ? docComponentStubConfig.checkClientFeature("ccm.security.dlp_upload", false, browserEnvironmentDetectionUtils.browserDetector.isH5) : boolDefaultGetterUtil.getDefaultBool("ccm.security.dlp_upload", false);
  let ec = () => true;
  let e_ = () => true;
  let el = () => browserEnvironmentDetectionUtils.browserDetector.isMobile && docComponentStubConfig.checkClientFeature("ccm.docx.mobile.disable_idle_worker", false);
  let es = () => true;
  let eE = () => !browserEnvironmentDetectionUtils.browserDetector.isMobile && es();
  let ed = () => browserEnvironmentDetectionUtils.browserDetector.isMobile && docComponentStubConfig.checkClientFeature("ccm.docx.memory_leak_fix", false);
  let eT = () => browserEnvironmentDetectionUtils.browserDetector.isMobile && docComponentStubConfig.checkClientFeature("ccm.docx.memory_leak_fix_v3", false);
  let ep = () => boolDefaultGetterUtil.getDefaultBool("ccm.docx.stop_uncommited_unload", false);
  let eS = () => true;
  let ef = () => browserEnvironmentDetectionUtils.browserDetector.isMobile && docComponentStubConfig.checkClientFeature("is_equal_opt_enable", false);
  let eA = () => true;
  let em = () => {
    if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      return;
    }
    let e = platformDocUtils.H8b().docs_more_events;
    return e === "true" || e === "1";
  };
  let eI = () => true;
  let eO = () => true;
  let eR = function (e = false) {
    if (!browserEnvironmentDetectionUtils.browserDetector.isMobile || e && browserEnvironmentDetectionUtils.browserDetector.isH5) {
      return false;
    }
    if (browserEnvironmentDetectionUtils.browserDetector.isH5) {
      return true;
    }
    let n = platformDocUtils.H8b().docs_mobile_memory_opt;
    return n === "true" || n === "1";
  };
  let eh = () => true;
  let eN = () => !browserEnvironmentDetectionUtils.browserDetector.isMobile;
  require.d(exports, {
    isFeatureEnabled: function () {
      return f;
    },
    isDlpUploadEnabled: function () {
      return eu;
    },
    isEqualOptEnabled: function () {
      return ef;
    },
    isAlwaysTrue: function () {
      return I;
    },
    isCoreEnabled: function () {
      return j;
    },
    isAlwaysFalse: function () {
      return l;
    },
    isHqEnabled: function () {
      return V;
    },
    isIkEnabled: function () {
      return N;
    },
    isMobileMemoryOpt: function () {
      return eR;
    },
    isPresetPanelEnabled: function () {
      return eo;
    },
    isJpEnabled: function () {
      return k;
    },
    isK7Enabled: function () {
      return H;
    },
    isLyEnabled: function () {
      return ei;
    },
    isLiEnabled: function () {
      return F;
    },
    isLsEnabled: function () {
      return eS;
    },
    isMfEnabled: function () {
      return U;
    },
    isMmEnabled: function () {
      return X;
    },
    isMvEnabled: function () {
      return h;
    },
    isNotMobile: function () {
      return m;
    },
    isDocsMoreEvents: function () {
      return em;
    },
    isNotMobileNr: function () {
      return eN;
    },
    isNxEnabled: function () {
      return E;
    },
    isP7Enabled: function () {
      return es;
    },
    isPpEnabled: function () {
      return x;
    },
    isWikiV3Enabled: function () {
      return C;
    },
    isR0Enabled: function () {
      return $;
    },
    isR7Enabled: function () {
      return O;
    },
    isSzEnabled: function () {
      return eA;
    },
    isTEnabled: function () {
      return v;
    },
    isTbEnabled: function () {
      return T;
    },
    isUpEnabled: function () {
      return R;
    },
    isNotMobileH5: function () {
      return y;
    },
    isMobileDisableIdleWorker: function () {
      return el;
    },
    isY0Enabled: function () {
      return J;
    },
    isYcEnabled: function () {
      return eI;
    },
    isMobileMemoryLeakFixV3: function () {
      return eT;
    },
    isErAndEn: function () {
      return er;
    },
    isAyEnabled: function () {
      return eh;
    },
    isBaEnabled: function () {
      return Z;
    },
    isBvEnabled: function () {
      return M;
    },
    isCnEnabled: function () {
      return e_;
    },
    isMobileMemoryLeakFix: function () {
      return ed;
    },
    isDsEnabled: function () {
      return ec;
    },
    isE2Enabled: function () {
      return q;
    },
    isNotMobileEs: function () {
      return eE;
    },
    isZAndK: function () {
      return Y;
    },
    isMobileLargeDocIdle: function () {
      return g;
    },
    isGiEnabled: function () {
      return eO;
    },
    isGxEnabled: function () {
      return B;
    },
    isDefaultReadMode: function () {
      return S;
    },
    isMzEnabled: function () {
      return d;
    },
    isNpEnabled: function () {
      return D;
    },
    isO5Enabled: function () {
      return s;
    },
    isO6Enabled: function () {
      return w;
    },
    isOjEnabled: function () {
      return Q;
    },
    isOzEnabled: function () {
      return A;
    },
    isPiEnabled: function () {
      return _;
    },
    isQqEnabled: function () {
      return G;
    },
    isStopUncommittedUnload: function () {
      return ep;
    },
    isMobileSplitFirstSlice: function () {
      return L;
    },
    isNotMobileOrL: function () {
      return P;
    },
    isNotEmbedDocx: function () {
      return p;
    },
    isAlwaysFalseU: function () {
      return en;
    },
    isWEnabled: function () {
      return et;
    },
    isAlwaysFalseX: function () {
      return ee;
    },
    isSyncedBlockDisableEdit: function () {
      return ea;
    },
    isMobileApplyClientvar: function () {
      return b;
    },
    isZqEnabled: function () {
      return W;
    }
  });
}