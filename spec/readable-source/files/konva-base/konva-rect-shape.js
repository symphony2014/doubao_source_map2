// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaPropertyFactory'
// - Resolved require(637238) to 'konva-property-factory'
// - Renamed variable 'a' to 'konvaShapeBase'
// - Resolved require(790913) to 'konva-shape-base'
// - Renamed variable 'n' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// - Renamed variable 's' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// - Renamed variable 'o' to 'konvaPropertyValidators'
// - Resolved require(525858) to 'konva-property-validators'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 268160
         */
module.exports = function (module, exports, require) {
  exports.Rect = undefined;
  let konvaPropertyFactory = require("konva-property-factory") /*id: 637238*/;
  let konvaShapeBase = require("konva-shape-base") /*id: 790913*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaPropertyValidators = require("konva-property-validators") /*id: 525858*/;
  class h extends konvaShapeBase.Shape {
    _sceneFunc(t) {
      var e = this.cornerRadius();
      var i = this.width();
      var r = this.height();
      t.beginPath();
      if (e) {
        konvaTransformUtil.Util.drawRoundedRectPath(t, i, r, e);
      } else {
        t.rect(0, 0, i, r);
      }
      t.closePath();
      t.fillStrokeShape(this);
    }
  }
  exports.Rect = h;
  h.prototype.className = "Rect";
  konvaCoreConfig._registerNode(h);
  konvaPropertyFactory.Factory.addGetterSetter(h, "cornerRadius", 0, konvaPropertyValidators.getNumberOrArrayOfNumbersValidator(4));
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}