// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'i18nProviderWrapper'
// - Resolved require(277347) to 'i18n-provider-wrapper'
// - Renamed variable 'l' to 'i18nTranslationHook'
// - Resolved require(411320) to 'i18n-translation-hook'
// - Renamed variable 'r' to 'themeAwareIconWrapper_1'
// - Resolved require(602057) to 'theme-aware-icon-wrapper_1'
// - Renamed variable 'i' to 'illustrationThemeIcon'
// - Resolved require(183258) to 'illustration-theme-icon'
// - Renamed variable 'o' to 'themeAwareIconRenderer'
// - Resolved require(240962) to 'theme-aware-icon-renderer'
// - Renamed variable 'f' to 'resizeObserverPolyfill_1'
// - Resolved require(767395) to 'resize-observer-polyfill_1'
// - Resolved require(939285) to 'gpf-biz-attachment-dlp-styles'
// - Updated imported property 'Z' to 'ResizeObserver' (module 767395)
// - Updated imported property 'tq' to 'createThemeAwareIcon' (module 602057)
// - Updated imported property 'ec' to 'createI18nWrapper' (module 277347)
// - Updated imported property 'Q' to 'useTranslation' (module 411320)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89490.4bb32914.js
         * chunkId: 89490
         * moduleId: 129962
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i18nProviderWrapper = require("i18n-provider-wrapper") /*id: 277347*/;
  var i18nTranslationHook = require("i18n-translation-hook") /*id: 411320*/;
  var themeAwareIconWrapper_1 = require("theme-aware-icon-wrapper_1") /*id: 602057*/;
  var illustrationThemeIcon = require("illustration-theme-icon") /*id: 183258*/;
  var themeAwareIconRenderer = require("theme-aware-icon-renderer") /*id: 240962*/;
  var s = {
    LarkCCM_Docs_DLP_FilesDeleted_Desc: "Docs deleted",
    LarkCCM_Docs_DLP_OrgSecurityDetection_Desc: "Security detecting"
  };
  var u = {
    "zh-TW": {
      LarkCCM_Docs_DLP_FilesDeleted_Desc: "檔案已刪除",
      LarkCCM_Docs_DLP_OrgSecurityDetection_Desc: "企業安全性偵測中"
    },
    "pt-BR": {
      LarkCCM_Docs_DLP_FilesDeleted_Desc: "Docs excluído",
      LarkCCM_Docs_DLP_OrgSecurityDetection_Desc: "Detecção de segurança"
    },
    "fr-FR": {
      LarkCCM_Docs_DLP_FilesDeleted_Desc: "Docs supprimés",
      LarkCCM_Docs_DLP_OrgSecurityDetection_Desc: "Détection de la sécurité"
    },
    "zh-CN": {
      LarkCCM_Docs_DLP_FilesDeleted_Desc: "文件已删除",
      LarkCCM_Docs_DLP_OrgSecurityDetection_Desc: "企业安全检测中"
    },
    "ko-KR": {
      LarkCCM_Docs_DLP_FilesDeleted_Desc: "Docs 삭제됨",
      LarkCCM_Docs_DLP_OrgSecurityDetection_Desc: "보안 탐지"
    },
    "vi-VN": {
      LarkCCM_Docs_DLP_FilesDeleted_Desc: "Đã xóa Docs",
      LarkCCM_Docs_DLP_OrgSecurityDetection_Desc: "Dò tìm bảo mật"
    },
    "it-IT": {
      LarkCCM_Docs_DLP_FilesDeleted_Desc: "Docs eliminato/i",
      LarkCCM_Docs_DLP_OrgSecurityDetection_Desc: "Rilevazione di sicurezza"
    },
    "de-DE": {
      LarkCCM_Docs_DLP_FilesDeleted_Desc: "Docs gelöscht",
      LarkCCM_Docs_DLP_OrgSecurityDetection_Desc: "Sicherheit wird überprüft"
    },
    "id-ID": {
      LarkCCM_Docs_DLP_FilesDeleted_Desc: "Docs dihapus",
      LarkCCM_Docs_DLP_OrgSecurityDetection_Desc: "Keamanan mendeteksi"
    },
    "ru-RU": {
      LarkCCM_Docs_DLP_FilesDeleted_Desc: "Документ Docs удален",
      LarkCCM_Docs_DLP_OrgSecurityDetection_Desc: "Проверка безопасности"
    },
    "zh-HK": {
      LarkCCM_Docs_DLP_FilesDeleted_Desc: "檔案已刪除",
      LarkCCM_Docs_DLP_OrgSecurityDetection_Desc: "企業安全偵測中"
    },
    "ja-JP": {
      LarkCCM_Docs_DLP_FilesDeleted_Desc: "Docs は削除されました",
      LarkCCM_Docs_DLP_OrgSecurityDetection_Desc: "セキュリティ検知を実施しています..."
    },
    "th-TH": {
      LarkCCM_Docs_DLP_FilesDeleted_Desc: "ลบ Docs แล้ว",
      LarkCCM_Docs_DLP_OrgSecurityDetection_Desc: "กำลังตรวจสอบความปลอดภัย"
    },
    "hi-IN": {},
    "en-US": s,
    "es-ES": {
      LarkCCM_Docs_DLP_FilesDeleted_Desc: "Documentos de Docs eliminados",
      LarkCCM_Docs_DLP_OrgSecurityDetection_Desc: "Detección de seguridad"
    },
    "": s
  };
  var resizeObserverPolyfill_1 = require("resize-observer-polyfill_1") /*id: 767395*/;
  require("gpf-biz-attachment-dlp-styles") /*id: 939285*/;
  let d = "gpf-biz-attachment-permission-manager-dlp-placeholder";
  function m(e) {
    let t = reactCoreLibraryReexport.useRef(null);
    let [c, a] = reactCoreLibraryReexport.useState({
      width: 0,
      height: 0
    });
    let l = () => {
      let e = t.current;
      if (e) {
        let {
          width: t,
          height: c
        } = e.getBoundingClientRect();
        a({
          width: t,
          height: c
        });
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      let e = new resizeObserverPolyfill_1.ResizeObserver(l);
      if (t.current) {
        e.observe(t.current);
      }
      return () => {
        e.disconnect();
      };
    }, []);
    let {
      icon: r,
      desc: i,
      type: o
    } = e;
    let s = `${o}-forbidden-placeholder`;
    let u = c.width >= 180 && c.height >= 180;
    return reactCoreLibraryReexport.createElement("div", {
      className: `${d}`,
      "data-type": s,
      ref: t
    }, u && r ? reactCoreLibraryReexport.createElement(r, {
      className: `${d}-img`
    }) : null, reactCoreLibraryReexport.createElement("div", {
      className: `${d}-desc`
    }, i));
  }
  let D = themeAwareIconWrapper_1.createThemeAwareIcon(illustrationThemeIcon.default);
  let h = themeAwareIconWrapper_1.createThemeAwareIcon(themeAwareIconRenderer.default);
  let _ = i18nProviderWrapper.createI18nWrapper(() => {
    let e = i18nTranslationHook.useTranslation();
    return reactCoreLibraryReexport.createElement(m, {
      type: "preview",
      icon: D,
      desc: e("LarkCCM_Docs_DLP_OrgSecurityDetection_Desc")
    });
  }, {
    localesMaps: u
  });
  let p = i18nProviderWrapper.createI18nWrapper(() => {
    let e = i18nTranslationHook.useTranslation();
    return reactCoreLibraryReexport.createElement(m, {
      type: "delete",
      icon: h,
      desc: e("LarkCCM_Docs_DLP_FilesDeleted_Desc")
    });
  }, {
    localesMaps: u
  });
  require.r(exports);
  require.d(exports, {
    AttachDLPPreviewForbiddenComp: function () {
      return _;
    },
    AttachDLPDeleteComp: function () {
      return p;
    }
  });
}