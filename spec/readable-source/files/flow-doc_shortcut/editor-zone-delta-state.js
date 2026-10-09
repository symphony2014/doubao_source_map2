// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'ZoneDeltaState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 800502
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  require("editor-kit-dom-patch") /*id: 218425*/;
  var editorZoneState = require("editor-zone-state") /*id: 962363*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var zoneDeltaClasses = require("zone-delta-classes") /*id: 240236*/;
  var editorLineModel = require("editor-line-model") /*id: 136973*/;
  var s = function () {
    function e(e) {
      this.ee = 0;
      this.te = e;
    }
    var n = e.prototype;
    n.insert = function (e, n) {
      var i = e;
      var e = (e = this.te.get(0)) || new editorLineModel.EditorLine(this.ne(), this.te.getParent());
      var n = this.ne().retain(this.ee).insert(i.id, n);
      var n = e.compose(n);
      this.te.splice(0, 1, [n]);
      this.ee += deltaSetCore.getOpLength({
        insert: i
      });
    };
    n.retain = function (e, n) {
      if (n) {
        n = this.ne().retain(this.ee).retain(e, n);
        n = this.te.get(0).compose(n);
        this.te.splice(0, 1, [n]);
      }
      this.ee += e;
    };
    n.delete = function (e) {
      var n = this.ne();
      var e = this.te.get(0).compose(n.retain(this.ee).delete(e));
      this.te.splice(0, 1, [e]);
    };
    n.ne = function () {
      var e = this.te.getZoneType();
      var n = this.te.getZoneId();
      return new (e === "R" ? zoneDeltaClasses.RowDelta : zoneDeltaClasses.ColumnDelta)({
        zoneId: n
      });
    };
    n.close = function () {};
    return e;
  }();
  var u = function (e) {
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers_1.extends(n, e);
    n.prototype.cloneEmptyState = function () {
      var e = this._content.create({
        zoneType: this.type,
        zoneId: this.zoneId
      });
      var e = new n(this.getZoneId(), e, this.schema);
      e.type = this.type;
      e.zoneId = this.zoneId;
      e._node = this._node;
      e.placeholder = this.placeholder;
      return e;
    };
    return n;
  }(editorZoneState.EditorZoneState);
  u.register("R", s);
  u.register("C", s);
  require.d(exports, {
    ZoneDeltaState: function () {
      return u;
    }
  });
}