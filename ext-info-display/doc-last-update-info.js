// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'localeContextHocWrappers'
// - Resolved require(945449) to 'locale-context-hoc-wrappers'
// - Renamed variable 'i' to 'optionalFunctionCall'
// - Resolved require(698252) to 'optional-function-call'
// - Renamed variable 'u' to 'designTokenColorValueResolver'
// - Resolved require(598953) to 'design-token-color-value-resolver'
// - Renamed variable 'r' to 'dateTimeUtils'
// - Resolved require(224725) to 'date-time-utils'
// - Renamed variable 'a' to 'docxUrlPreviewManager'
// - Resolved require(334000) to 'docx-url-preview-manager'
// - Updated imported property 'Rh' to 'withLocaleConfig' (module 945449)
// - Updated imported property 'Ic' to 'getUserTimeFormat' (module 334000)
// - Updated imported property '_o' to 'formatDateTime' (module 224725)
// - Updated imported property 'Z' to 'callIfFunction' (module 698252)
// - Updated imported property 'Ef' to 'resolveColorValue' (module 598953)
// - Updated imported property 'Yh' to 'identityResolver' (module 598953)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55333.112eb434.js
         * chunkId: 55333
         * moduleId: 965717
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var localeContextHocWrappers = require("locale-context-hoc-wrappers") /*id: 945449*/;
  var optionalFunctionCall = require("optional-function-call") /*id: 698252*/;
  var designTokenColorValueResolver = require("design-token-color-value-resolver") /*id: 598953*/;
  var dateTimeUtils = require("date-time-utils") /*id: 224725*/;
  var docxUrlPreviewManager = require("docx-url-preview-manager") /*id: 334000*/;
  let d = localeContextHocWrappers.withLocaleConfig(function (t) {
    let {
      extInfo: f
    } = t;
    let [_, c] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      (async () => {
        c(await docxUrlPreviewManager.getUserTimeFormat());
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
    let L = optionalFunctionCall.callIfFunction(E, {
      timeDate: D
    });
    return reactCoreLibraryReexport.createElement("span", {
      style: {
        color: designTokenColorValueResolver.resolveColorValue(designTokenColorValueResolver.identityResolver((f == null ? undefined : f.lastUpdateInfo)?.textColor || {
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