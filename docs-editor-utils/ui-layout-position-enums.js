// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J_' to 'toolbarIconTypes'
// - Renamed export 'Nm' to 'positionAlignTypes'
// - Renamed export 'S8' to 'verticalPosition'
// - Renamed export 'We' to 'animationSlideTypes'
// - Renamed export 'dz' to 'animationEffectTypes'
// - Renamed export 'pY' to 'positionModeTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 463752
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var c;
  var u;
  var a;
  (o = {}).LeftTextCenter = "leftTextCenter";
  o.RightTextCenter = "rightTextCenter";
  o.LeftCenter = "leftCenter";
  o.RightCenter = "rightCenter";
  o.BottomLeft = "bottomLeft";
  o.TopLeft = "topLeft";
  o.BottomRight = "bottomRight";
  o.TopRight = "topRight";
  o.BottomCenter = "bottomCenter";
  o.TopCenter = "topCenter";
  o.IPadTopLeft = "iPadTopLeft";
  o.IPadBottomLeft = "iPadBottomLeft";
  o.None = "none";
  let s = o;
  (i = {}).BlockIcon = "BlockIcon";
  i.Toolbar = "Toolbar";
  let d = i;
  (l = {})[l.Top = 0] = "Top";
  l[l.Middle = 1] = "Middle";
  l[l.Bottom = 2] = "Bottom";
  let f = l;
  (c = {}).Slide = "slide";
  c.Fade = "fade";
  c.None = "none";
  let h = c;
  (u = {}).SlideTop = "slide-top";
  u.SlideBottom = "slide-bottom";
  u.SlideLeft = "slide-left";
  u.SlideRight = "slide-right";
  u.Fade = "delay-show";
  u.None = "no-animation";
  let _ = u;
  (a = {}).None = "none";
  a.StickTop = "stickyTop";
  a.Fixed = "fixed";
  a.StickBottom = "stickBottom";
  a.OutBox = "outBox";
  let p = a;
  require.d(exports, {
    toolbarIconTypes: function () {
      return d;
    },
    positionAlignTypes: function () {
      return s;
    },
    verticalPosition: function () {
      return f;
    },
    animationSlideTypes: function () {
      return _;
    },
    animationEffectTypes: function () {
      return h;
    },
    positionModeTypes: function () {
      return p;
    }
  });
}