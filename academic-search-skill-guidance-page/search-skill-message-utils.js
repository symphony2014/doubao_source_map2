// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ap' to 'isAcademicGuidancePage'
// - Renamed export 'C2' to 'processSearchResultsWithCitations'
// - Renamed export 'DT' to 'areArraysEqual'
// - Renamed export 'JO' to 'isSearchGuidancePage'
// - Renamed export 'P1' to 'isWebAcademicPreview'
// - Renamed export 'SF' to 'isWebAcademicReference'
// - Renamed export 'aJ' to 'processSearchResults'
// - Renamed export 'ge' to 'determineSearchSkillType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: search-skill-guidance-page-v2.6f4bfe01.js
         * chunkId: 29927
         * moduleId: 67970
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var stringSliceLengthUtil = require("string-slice-length-util") /*id: 235558*/;
  var searchSkillTypes = require("search-skill-types") /*id: 248215*/;
  let s = () => typeof document != "undefined" && !!document.querySelector("[data-testid=\"search-guidance-page-show\"]");
  let l = () => typeof document != "undefined" && !!document.querySelector("[data-testid=\"academic-guidance-page-show\"]");
  let c = (e, t) => {
    let n = messageContentTypeAndStatusChecker.f9R(e) || messageContentTypeAndStatusChecker.lcM(e);
    let i = messageContentTypeAndStatusChecker.TjU(e) || t;
    let a = messageContentTypeAndStatusChecker.qZZ(e) || messageContentTypeAndStatusChecker.BPl(e);
    let s = messageContentTypeAndStatusChecker.$sc(e);
    if (n) {
      return searchSkillTypes.searchSkillTypes.DeepSearch;
    } else if (i) {
      return searchSkillTypes.searchSkillTypes.AcademicSearch;
    } else if (a) {
      return searchSkillTypes.searchSkillTypes.WritingOutlineSearch;
    } else if (s) {
      return searchSkillTypes.searchSkillTypes.ComplexSearch;
    } else {
      return searchSkillTypes.searchSkillTypes.AISearch;
    }
  };
  let d = e => e.type === chatMessageTypes.MetaType.WebAcademicReference;
  let u = e => e.type === chatMessageTypes.MetaType.WebAcademicPreview;
  let h = e => {
    var r;
    var i;
    if (e == null ? undefined : e.paper?.title) {
      return {
        ...e,
        paper: {
          ...e.paper,
          unique_id: e.paper.title.concat(((i = e.paper) === null || i === undefined ? undefined : (r = i.authors) === null || r === undefined ? undefined : r[0]?.name) ?? "")
        }
      };
    } else {
      return e;
    }
  };
  let p = (e, t, n) => t.map(t => {
    let o = h(t.data);
    return {
      ...t,
      data: {
        ...o,
        index: stringSliceLengthUtil.calcSliceLength(e, o.index),
        ...(n && n.length > 0 ? {
          paper: JSON.parse(n.find(e => e.index === o.citation_index)?.info ?? "{}")
        } : {})
      }
    };
  });
  let m = (e, t, n) => t.map(t => {
    let o = h(t.data);
    return {
      ...t,
      data: {
        ...o,
        index: stringSliceLengthUtil.calcSliceLength(e, o.index),
        ...(n && n.length > 0 ? {
          paper: JSON.parse(n.find(e => e.index === o.citation_index)?.info ?? "{}")
        } : {})
      }
    };
  });
  let f = (e, t) => e.length === 0 && t.length === 0 || e.length === t.length && (e.forEach(e => {
    let n = t.findIndex(t => t === e);
    if (n === -1) {
      return false;
    }
    t.splice(n, 1);
  }), t.length === 0);
  require.d(exports, {
    isAcademicGuidancePage: function () {
      return l;
    },
    processSearchResultsWithCitations: function () {
      return m;
    },
    areArraysEqual: function () {
      return f;
    },
    isSearchGuidancePage: function () {
      return s;
    },
    isWebAcademicPreview: function () {
      return u;
    },
    isWebAcademicReference: function () {
      return d;
    },
    processSearchResults: function () {
      return p;
    },
    determineSearchSkillType: function () {
      return c;
    }
  });
}