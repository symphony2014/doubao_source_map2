// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HG' to 'VisibilityStatus'
// - Renamed export 'Ye' to 'eventTriggerName'
// - Renamed export 'cI' to 'PageType'
// - Renamed export 'ue' to 'viewportCheckName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: history.95e09a2f.js
         * chunkId: 17374
         * moduleId: 209015
         */
module.exports = function (module, exports, require) {
  var r;
  var s;
  (r = {})[r.INVISIBLE = 0] = "INVISIBLE";
  r[r.VISIBLE = 1] = "VISIBLE";
  r[r.NOT_FOUND = 2] = "NOT_FOUND";
  r[r.NOT_IN_DOCUMENT = 3] = "NOT_IN_DOCUMENT";
  let o = r;
  (s = {})[s.UNKNOWN = 0] = "UNKNOWN";
  s[s.PAGEMAIN = 1] = "PAGEMAIN";
  s[s.HISTORY = 2] = "HISTORY";
  s[s.DIAGRAM = 3] = "DIAGRAM";
  s[s.WHITEBOARD = 4] = "WHITEBOARD";
  s[s.MINDMAP = 5] = "MINDMAP";
  s[s.PRESENTATION = 6] = "PRESENTATION";
  let T = s;
  let M = "eventTrigger";
  let I = "docx_viewport_visibility_check";
  require.d(exports, {
    VisibilityStatus: function () {
      return o;
    },
    eventTriggerName: function () {
      return M;
    },
    PageType: function () {
      return T;
    },
    viewportCheckName: function () {
      return I;
    }
  });
}