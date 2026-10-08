// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'skillBarComponent'
// - Resolved require(215451) to 'skill-bar-component'
// - Renamed variable 'l' to 'eventTrackerInstance'
// - Resolved require(176600) to 'event-tracker-instance'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 's' to 'SkillBar' (module 215451)
// - Updated imported property 'd' to 'eventTracker' (module 176600)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-skill-bar.7a9e54ce.js
         * chunkId: 84200
         * moduleId: 44296
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var skillBarComponent = require("skill-bar-component") /*id: 215451*/;
  var eventTrackerInstance = require("event-tracker-instance") /*id: 176600*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      skillList: t,
      visibleCount: n,
      setVisible: o,
      onMouseEnter: u,
      onMouseLeave: s,
      openFromRef: d,
      handleClickSkillItem: f
    } = e;
    let p = reactCoreLibraryReexport.useMemo(() => t.slice(n), [t, n]);
    return reactJsxRuntimeCoreReexport.jsx(skillBarComponent.SkillBar, {
      className: i("max-h-[min(480px,60vh)]", "overflow-auto flow-scrollbar pr-[calc(7px-var(--scrollbar-width))]"),
      onMouseEnter: u,
      onMouseLeave: s,
      items: p,
      onSkillShow: e => {
        if (e) {
          eventTrackerInstance.eventTracker.track("show", {
            skillType: e.skill_type,
            openFrom: d.current
          });
        }
      },
      onSelectSkill: (e, t, n) => {
        if (e) {
          eventTrackerInstance.eventTracker.track("click", {
            skillType: e,
            openFrom: d.current
          });
          if (!(n == null ? undefined : n.keepMorePopover)) {
            o(false);
          }
          setTimeout(() => !(n == null ? undefined : n.onlyReportEvent) && f({
            skillType: e,
            skillFrom: t
          }));
        }
      }
    });
  };
  require.r(exports);
  require.d(exports, {
    MoreSkillContent: function () {
      return u;
    }
  });
}