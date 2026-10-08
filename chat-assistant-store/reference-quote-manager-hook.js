// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'useReferenceQuoteManage'
// - Renamed export 'z' to 'createReferenceQuoteTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 95317.6173849c.js
         * chunkId: 95317
         * moduleId: 335918
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function n(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class o {
    getReferenceIndex(e) {
      return e;
    }
    getReferenceDetail(e) {
      let r = this.referenceList?.[Number(e) - 1];
      if (r) {
        return {
          title: r.title,
          url: r.url,
          logo: r.logoUrl
        };
      } else {
        return null;
      }
    }
    setReferenceList(e) {
      this.referenceList = e;
    }
    setReferenceQuoteList(e) {
      this.referenceQuoteList = e;
    }
    setEditor(e) {
      this.editor = e;
    }
    getReferenceQuoteList() {
      return this.referenceQuoteList;
    }
    getReferenceList() {
      return this.referenceList;
    }
    reset() {
      this.editor = undefined;
      this.referenceList = [];
      this.referenceQuoteList = [];
    }
    constructor() {
      n(this, "referenceList", undefined);
      n(this, "referenceQuoteList", undefined);
      n(this, "editor", undefined);
      this.referenceList = [];
      this.referenceQuoteList = [];
    }
  }
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  let d = e => {
    let {
      resourceId: t,
      resourceVersion: r
    } = e;
    let n = reactCoreLibraryReexport.useRef(new o());
    let {
      referenceList: l,
      referenceQuoteList: d
    } = writingSkillStore.writingSkillStore(e => {
      var n;
      var o;
      var a;
      var d;
      return {
        referenceList: t && r !== undefined ? (o = e.referenceAndQuoteMap) === null || o === undefined ? undefined : (n = o[t]) === null || n === undefined ? undefined : n[r]?.referenceList : [],
        referenceQuoteList: t && r !== undefined ? (d = e.referenceAndQuoteMap) === null || d === undefined ? undefined : (a = d[t]) === null || a === undefined ? undefined : a[r]?.referenceQuoteList : []
      };
    });
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      var t;
      if (l) {
        if ((e = n.current) !== null && e !== undefined) {
          e.setReferenceList(l);
        }
      }
      if (d) {
        if ((t = n.current) !== null && t !== undefined) {
          t.setReferenceQuoteList(d);
        }
      }
    }, [l, d]);
    return {
      referenceQuoteManage: n.current
    };
  };
  let s = e => {
    let {
      conversationId: t,
      messageId: r,
      deepResearchId: i
    } = e;
    return {
      trackReferenceQuoteShow: e => {
        let {
          showFrom: n
        } = e;
        teaAnalyticsEventTracker.trackEvent("search_reference_show", {
          conversation_id: t,
          message_id: r,
          skill_id: 25,
          deep_research_id: i,
          show_from: n
        });
      },
      trackReferenceQuoteClick: e => {
        let {
          clickFrom: n
        } = e;
        teaAnalyticsEventTracker.trackEvent("search_reference_click", {
          conversation_id: t,
          message_id: r,
          skill_id: 25,
          deep_research_id: i,
          click_from: n
        });
      }
    };
  };
  require.d(exports, {
    useReferenceQuoteManage: function () {
      return d;
    },
    createReferenceQuoteTracker: function () {
      return s;
    }
  });
}