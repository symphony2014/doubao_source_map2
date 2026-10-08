// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BQ' to 'defaultEndTime'
// - Renamed export 'G' to 'calculateTimeDifference'
// - Renamed export 'Gj' to 'popoverCloseDelay'
// - Renamed export 'Ki' to 'defaultStartTime'
// - Renamed export 'Vq' to 'popoverOpenDelay'
// - Renamed export 'wj' to 'reminderActions'
// - Renamed export 'wz' to 'endOfDayTime'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 719964
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  let o = {
    OPEN_POPOVER: "openReminderPopover",
    UPDATE_POPOVER: "updateReminderPopover",
    CLOSE_POPOVER: "closeReminderPopover",
    POPOVER_MOUSE_ENTER: "popoverMouseEnter",
    POPOVER_MOUSE_LEAVE: "popoverMouseLeave"
  };
  let s = {
    hour: 23,
    minute: 59,
    second: 59,
    millisecond: 0
  };
  let l = 300;
  let u = 600;
  let a = e => t("LarkCCM_Docs_Reminder_DueAlert_MinBefore_Option", {
    num: e
  });
  let c = e => t("LarkCCM_Docs_Reminder_DueAlert_HourBefore_Option", {
    num: e
  });
  let d = e => t("LarkCCM_Docs_Reminder_DueAlert_DayBefore_Option", {
    num: e
  });
  t("reminder.popover.currentTime");
  a(5);
  a(15);
  a(30);
  c(1);
  c(2);
  d(1);
  d(2);
  t("LarkCCM_Docs_Reminder_DueAlert_WeekBefore_Option", {
    num: 1
  });
  let f = (e, n, r) => {
    let i = e.split(":").map(e => Number(e));
    let o = n.split(":").map(e => Number(e));
    return ((o[0] - i[0] + r * 24) * 3600 + (o[1] - i[1]) * 60 + (o[2] - i[2])) * 1000;
  };
  let h = "23:59:59";
  let p = "09:00:00";
  let v = platformDocUtils.umw.en ? "9" : "09";
  f(h, p, 0);
  t("reminder.popover.currentDayTime", {}, "", v);
  f(h, p, -1);
  t("reminder.popover.beforeDayTime", {}, "", v);
  f(h, p, -2);
  t("reminder.popover.twoBeforeDayTime", {}, "", v);
  f(h, p, -7);
  t("reminder.popover.beforeWeekTime", {}, "", v);
  f(h, "18:00:00", 0);
  t("reminder.popover.currentDayTime", {}, "", "18");
  require.d(exports, {
    defaultEndTime: function () {
      return h;
    },
    calculateTimeDifference: function () {
      return f;
    },
    popoverCloseDelay: function () {
      return u;
    },
    defaultStartTime: function () {
      return p;
    },
    popoverOpenDelay: function () {
      return l;
    },
    reminderActions: function () {
      return o;
    },
    endOfDayTime: function () {
      return s;
    }
  });
}