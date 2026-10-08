// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$q' to 'loadingState'
// - Renamed export 'BY' to 'spaceChar'
// - Renamed export 'DG' to 'anchorError'
// - Renamed export 'I_' to 'anchorScene'
// - Renamed export 'Q$' to 'docxInit'
// - Renamed export 'R9' to 'ttsMode'
// - Renamed export 'SS' to 'anchorType'
// - Renamed export 'TA' to 'anchorPrefix'
// - Renamed export 'bJ' to 'positionList'
// - Renamed export 'ie' to 'emptyString'
// - Renamed export 'j1' to 'anchorHlClass'
// - Renamed export 'l_' to 'anchorStatus'
// - Renamed export 'n5' to 'maxCount'
// - Renamed export 'yG' to 'anchorMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 302634
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var c;
  var u;
  var a;
  var s;
  var d;
  var f;
  let h = " ";
  let _ = "";
  let p = 50;
  let g = "anchor-hl";
  (o = {}).RANGE_ANCHOR_KEY_PREFIX = "part";
  o.TEXT_CARD_ANCHOR_KEY_PREFIX = "share";
  o.STANDARD_ANCHOR_KEY_PREFIX = "anchor";
  let E = o;
  (i = {}).normalAnchor = "normal";
  i.textCardAnchor = "textCard";
  let m = i;
  (l = {})[l.SCENE_COMMENT = 1] = "SCENE_COMMENT";
  l[l.SCENE_ANCHOR_CONTENT = 2] = "SCENE_ANCHOR_CONTENT";
  l[l.SCENE_BLOCK = 3] = "SCENE_BLOCK";
  l[l.SCENE_HIGHLIGHT = 4] = "SCENE_HIGHLIGHT";
  let b = l;
  (c = {}).DocxInit = "DocxInit";
  let v = c;
  (u = {}).normal = "normal";
  u.textRange = "textRange";
  u.standard = "standard";
  let T = u;
  (a = {}).tts = "tts";
  let C = a;
  (s = {})[s.Init = 0] = "Init";
  s[s.DataReady = 1] = "DataReady";
  s[s.Finish = 2] = "Finish";
  s[s.Finish_300 = 3] = "Finish_300";
  s[s.Finish_600 = 4] = "Finish_600";
  s[s.Finish_900 = 5] = "Finish_900";
  s[s.Error = 6] = "Error";
  let k = s;
  (d = {}).ANCHOR_NOT_EXIST = "anchor_not_exist";
  d.ANCHOR_NETWORK_ERROR = "anchor_network_error";
  let I = d;
  let R = ["top_top", "top_middle", "top_bottom", "middle_top", "middle_middle", "middle_bottom", "bottom_top", "bottom_middle", "bottom_bottom"];
  (f = {}).LOADING = "anchor_loading";
  f.ERROR = "anchor_error";
  let y = f;
  require.d(exports, {
    loadingState: function () {
      return k;
    },
    spaceChar: function () {
      return h;
    },
    anchorError: function () {
      return I;
    },
    anchorScene: function () {
      return b;
    },
    docxInit: function () {
      return v;
    },
    ttsMode: function () {
      return C;
    },
    anchorType: function () {
      return m;
    },
    anchorPrefix: function () {
      return E;
    },
    positionList: function () {
      return R;
    },
    emptyString: function () {
      return _;
    },
    anchorHlClass: function () {
      return g;
    },
    anchorStatus: function () {
      return y;
    },
    maxCount: function () {
      return p;
    },
    anchorMode: function () {
      return T;
    }
  });
}