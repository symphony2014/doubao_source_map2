// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'withLocaleConfig'
// - Resolved require(466930) to 'with-locale-config'
// - Renamed variable 'i' to 'docxPreviewResolver'
// - Resolved require(413984) to 'docx-preview-resolver'
// - Renamed variable 'u' to 'designTokenColorUtils'
// - Resolved require(470236) to 'design-token-color-utils'
// - Renamed variable 'r' to 'dateTimeUtils'
// - Resolved require(224725) to 'date-time-utils'
// - Renamed variable 'a' to 'docxUrlPreviewManager_1'
// - Resolved require(829826) to 'docx-url-preview-manager_1'
// - Updated imported property 'Rh' to 'withLocaleConfig' (module 466930)
// - Updated imported property 'Ic' to 'getUserTimeFormat' (module 829826)
// - Updated imported property '_o' to 'formatDateTime' (module 224725)
// - Updated imported property 'Z' to 'resolvePreview' (module 413984)
// - Updated imported property 'Ef' to 'resolveColorValue' (module 470236)
// - Updated imported property 'Yh' to 'identityFunction' (module 470236)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 61208.aabdad9c.js
         * chunkId: 61208
         * moduleId: 113515
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var withLocaleConfig = require("with-locale-config") /*id: 466930*/;
  var docxPreviewResolver = require("docx-preview-resolver") /*id: 413984*/;
  var designTokenColorUtils = require("design-token-color-utils") /*id: 470236*/;
  var dateTimeUtils = require("date-time-utils") /*id: 224725*/;
  var docxUrlPreviewManager_1 = require("docx-url-preview-manager_1") /*id: 829826*/;
  let d = withLocaleConfig.withLocaleConfig(function (t) {
    let {
      extInfo: f
    } = t;
    let [_, c] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      (async () => {
        c(await docxUrlPreviewManager_1.getUserTimeFormat());
      })();
    }, []);
    if (!(f == null ? undefined : f.lastUpdateInfo)?.visible) {
      return null;
    }
    let p = Number((f == null ? undefined : f.lastUpdateInfo)?.lastUpdateTimestamp);
    if (Number.isNaN(p)) {
      return null;
    }
    let D = function (t, e, l, n) {
      let o = new Date(t);
      return dateTimeUtils.formatDateTime(o, {
        preciseness: e,
        type: l,
        is12Hour: n === 1
      });
    }(Number(p) * 1000, "minute", "short", _);
    let E = (t == null ? undefined : t.config)?.lang?.UrlPreview?.Lark_IM_GroupDocsLastUpdated_Text;
    let L = docxPreviewResolver.resolvePreview(E, {
      timeDate: D
    });
    return reactCoreLibraryReexport.createElement("span", {
      style: {
        color: designTokenColorUtils.resolveColorValue(designTokenColorUtils.identityFunction((f == null ? undefined : f.lastUpdateInfo)?.textColor || {
          token: "text-caption"
        })),
        fontSize: "12px"
      }
    }, L);
  });
  var s = d;
  require.r(exports);
  require.d(exports, {
    ExtInfo: function () {
      return d;
    },
    default: function () {
      return s;
    }
  });
}