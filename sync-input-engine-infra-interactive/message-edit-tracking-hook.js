// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'useMessageEditTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: deep-search-skill-chat-input.cf9a238f.js
         * chunkId: 20853
         * moduleId: 174008
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let o = (e, t) => {
    let n = reactCoreLibraryReexport.useRef(false);
    let o = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      n.current = false;
    }, [e, t == null ? undefined : t.skill_type]);
    return reactCoreLibraryReexport.useMemo(() => ({
      onBlur: () => {
        n.current = false;
        o.current = false;
      },
      onFocus: () => {
        o.current = true;
      },
      onUpdateValue: (e, r) => {
        if (!!o.current && !deepEqualUtil_1.deepEqual(e, r) && (!deepEqualUtil_1.deepEqual(e, {
          data: [{
            type: "Text",
            text: ""
          }]
        }) || !deepEqualUtil_1.deepEqual(r, {
          data: []
        }) && r !== undefined) && !n.current) {
          n.current = true;
          teaAnalyticsEventTracker.trackEvent("message_editing", {
            edit_method: "text",
            skill_id: (t == null ? undefined : t.skill_type) ?? null,
            skill_name: skillTypeMappings.getSkillName(t == null ? undefined : t.skill_type)
          });
        }
      }
    }), [t]);
  };
  require.d(exports, {
    useMessageEditTracker: function () {
      return o;
    }
  });
}