// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'renderMarkAreas'
// - Renamed export 'u' to 'getMarkAreaConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 926134
         */
module.exports = function (module, exports, require) {
  var svgGroupElement = require("svg-group-element") /*id: 249968*/;
  var svgRectElement = require("svg-rect-element") /*id: 345343*/;
  var richTextRendererUtils = require("rich-text-renderer-utils") /*id: 809271*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var numberClampUtil = require("number-clamp-util") /*id: 317214*/;
  var labelPositionUtils = require("label-position-utils") /*id: 230732*/;
  function l() {
    return (l = Object.assign || function (t) {
      var e;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            t[r] = e[r];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  function u(t) {
    var e = t.getOption().markAreas;
    var n = t.shortType;
    var u = t.scale;
    if (!e || !e.length) {
      return null;
    }
    var c = new svgGroupElement.SvgGroupElement({
      key: t.getKey("markarea")
    });
    e.forEach(function (e) {
      var i;
      var p;
      var d;
      var f;
      var g = e.start;
      var y = e.end;
      var v = e.label;
      var m = e.areaStyle;
      if (isNumberUtil.isNumber(g) || isNumberUtil.isNumber(y)) {
        var x = u.scale(g);
        var _ = u.scale(y);
        var b = t.parentModel.getState();
        var w = b.top;
        var S = b.left;
        var A = b.right;
        var E = b.bottom;
        var k = b.width;
        var M = b.height;
        if (n === "x") {
          x = numberClampUtil.clampNumber(x, S, A);
          _ = numberClampUtil.clampNumber(_, S, A);
          i = x;
          p = w;
          d = _ - x;
          f = M;
        } else if (n === "y") {
          x = numberClampUtil.clampNumber(x, w, E);
          _ = numberClampUtil.clampNumber(_, w, E);
          i = S;
          p = x;
          d = k;
          f = _ - x;
        }
        if (x !== _ && (c.add(new svgRectElement.SvgRectElement(l({
          x: i,
          y: p,
          width: d,
          height: f,
          data: {
            dataType: "markArea",
            markArea: e
          }
        }, t.getShapeStyle(m)))), v.text)) {
          var P = labelPositionUtils.getRectLabelCoords({
            x: i,
            y: p,
            width: d,
            height: f
          }, v.position, v.distance, n === "x" ? "top" : "right");
          c.add(richTextRendererUtils.createRichNode(l(l({
            text: v.text
          }, t.getTextStyle(v)), P)));
        }
      }
    });
    return c;
  }
  function c() {
    return {
      label: {
        text: "",
        distance: 6,
        position: "outside",
        color: "#878EA8",
        fontSize: 12
      },
      areaStyle: {
        lineWidth: 0,
        stroke: "none",
        fill: "#F0F2F6",
        opacity: 0.7
      }
    };
  }
  require.d(exports, {
    renderMarkAreas: function () {
      return u;
    },
    getMarkAreaConfig: function () {
      return c;
    }
  });
}