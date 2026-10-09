// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ei' to 'getTransformValues'
// - Renamed export 'lw' to 'transformCalculators'
// - Renamed export 'mP' to 'isTransformType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 271813
         */
module.exports = function (module, exports, require) {
  var parseTransformMatrixValues = require("parse-transform-matrix-values") /*id: 704219*/;
  var cssTransformProps = require("css-transform-props") /*id: 641552*/;
  var numberTypeTransformers = require("number-type-transformers") /*id: 397219*/;
  var cssUnitValueParserTransformers = require("css-unit-value-parser-transformers") /*id: 20534*/;
  let a = t => t === numberTypeTransformers.numberTransformer || t === cssUnitValueParserTransformers.pixelUnit;
  let l = new Set(["x", "y", "z"]);
  let u = cssTransformProps.transformPropList.filter(t => !l.has(t));
  function h(t) {
    let e = [];
    u.forEach(i => {
      let n = t.getValue(i);
      if (n !== undefined) {
        e.push([i, n.get()]);
        n.set(+!!i.startsWith("scale"));
      }
    });
    return e;
  }
  let c = {
    width: (t, e) => {
      let {
        x: i
      } = t;
      let {
        paddingLeft: n = "0",
        paddingRight: r = "0"
      } = e;
      return i.max - i.min - parseFloat(n) - parseFloat(r);
    },
    height: (t, e) => {
      let {
        y: i
      } = t;
      let {
        paddingTop: n = "0",
        paddingBottom: r = "0"
      } = e;
      return i.max - i.min - parseFloat(n) - parseFloat(r);
    },
    top: (t, e) => {
      let {
        top: i
      } = e;
      return parseFloat(i);
    },
    left: (t, e) => {
      let {
        left: i
      } = e;
      return parseFloat(i);
    },
    bottom: (t, e) => {
      let {
        y: i
      } = t;
      let {
        top: n
      } = e;
      return parseFloat(n) + (i.max - i.min);
    },
    right: (t, e) => {
      let {
        x: i
      } = t;
      let {
        left: n
      } = e;
      return parseFloat(n) + (i.max - i.min);
    },
    x: (t, e) => {
      let {
        transform: i
      } = e;
      return parseTransformMatrixValues.parseTransformValue(i, "x");
    },
    y: (t, e) => {
      let {
        transform: i
      } = e;
      return parseTransformMatrixValues.parseTransformValue(i, "y");
    }
  };
  c.translateX = c.x;
  c.translateY = c.y;
  require.d(exports, {
    getTransformValues: function () {
      return h;
    },
    transformCalculators: function () {
      return c;
    },
    isTransformType: function () {
      return a;
    }
  });
}