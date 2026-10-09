// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'scaleModes'
// - Renamed export 'e' to 'anchorPoints'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 773631
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  (o = {}).Free = "free";
  o.Proportional = "proportional";
  o.Horizontal = "horizontal";
  o.Vertical = "vertical";
  o.None = "none";
  let l = o;
  (i = {}).Left = "left-horizontal";
  i.Right = "right-horizontal";
  i.Top = "top-vertical";
  i.Bottom = "bottom-vertical";
  i.LeftTop = "left-top";
  i.LeftBottom = "left-bottom";
  i.RightTop = "right-top";
  i.RightBottom = "right-bottom";
  let c = i;
  require.d(exports, {
    scaleModes: function () {
      return l;
    },
    anchorPoints: function () {
      return c;
    }
  });
}