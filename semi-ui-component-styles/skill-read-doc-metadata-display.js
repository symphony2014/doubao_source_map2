// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'SkillReadDocMetadataDisplay'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 745753
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var dateFormatUtils_1 = require("date-format-utils_1") /*id: 179094*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var stringUtilities = require("string-utilities") /*id: 612303*/;
  var tokenReadRatioDisplay = require("token-read-ratio-display") /*id: 681168*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = e => {
    let {
      date: t,
      bytes: a,
      isMulti: i,
      link: m,
      assetNum: v,
      fileType: h,
      charCount: _,
      readRatio: g,
      zh: f,
      i18nConfig: w,
      Tooltip: k,
      tooltipProps: b
    } = e;
    let x = stringUtilities.createFormatter(w);
    let C = h ? fileTypeDetectionUtils.getDisplayCategory(h) : undefined;
    let y = i && v ? x("skill_read_doc_count", {
      sprintf: [v.toString()]
    }) : m ? x("chat_list_subtitle_link") : C;
    let S = [t && t.getTime() < Date.now() ? reactJsxRuntimeCoreReexport.jsx("p", {
      className: "m-0 p-0 break-keep",
      children: (() => {
        if (!t) {
          return "";
        }
        let e = t.getTime();
        if (dateFormatUtils_1.getYearsDiff(e) > 0) {
          return x("skill_read_period_years_earlier", {
            sprintf: [dateFormatUtils_1.getYearsDiff(e).toString()]
          });
        }
        if (dateFormatUtils_1.getMonthsDiff(e) > 0) {
          return x("skill_read_period_months_earlier", {
            sprintf: [dateFormatUtils_1.getMonthsDiff(e).toString()]
          });
        }
        if (dateFormatUtils_1.getWeeksDiff(e) > 0) {
          return x("skill_read_period_weeks_earlier", {
            sprintf: [dateFormatUtils_1.getWeeksDiff(e).toString()]
          });
        }
        if (dateFormatUtils_1.getDaysDiff(e) > 1) {
          return x("skill_read_period_days_earlier", {
            sprintf: [dateFormatUtils_1.getDaysDiff(e).toString()]
          });
        }
        if (dateFormatUtils_1.isYesterday(e) || dateFormatUtils_1.getDaysDiff(e) === 1) {
          return x("skill_read_period_yesterday");
        } else if (dateFormatUtils_1.isToday(e)) {
          return x("skill_read_period_today");
        }
      })()
    }) : undefined, y || isNumberUtil.isNumber(a) && a > 0 ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [y && reactJsxRuntimeCoreReexport.jsx("p", {
        className: "m-0 truncate p-0 break-words",
        children: y
      }), isNumberUtil.isNumber(a) && a > 0 && reactJsxRuntimeCoreReexport.jsx("p", {
        className: l("p-0 m-0", y && "ml-4"),
        children: infraUtilFunctions.formatBytesSize(a)
      })]
    }) : undefined, isNumberUtil.isNumber(_) && _ > 0 || isNumberUtil.isNumber(g) ? reactJsxRuntimeCoreReexport.jsx(tokenReadRatioDisplay.TokenReadRatio, {
      charCount: _,
      readRatio: g,
      zh: f,
      i18nConfig: w,
      className: "truncate",
      Tooltip: k,
      tooltipProps: b
    }) : undefined].filter(Boolean);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: S.map((e, t) => reactJsxRuntimeCoreReexport.jsxs(reactCoreLibraryReexport.Fragment, {
        children: [e, t !== S.length - 1 && reactJsxRuntimeCoreReexport.jsx("p", {
          className: "mx-4 select-none",
          children: "·"
        })]
      }, t))
    });
  };
  require.d(exports, {
    SkillReadDocMetadataDisplay: function () {
      return m;
    }
  });
}