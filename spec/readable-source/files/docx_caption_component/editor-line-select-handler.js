// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'LineSelectHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 229365
         */
module.exports = function (module, exports, require) {
  var r = ["image"];
  var o = function () {
    function e(e) {
      var n = this;
      this.handleClick = function (e) {
        if (e.detail < 3) {
          return;
        }
        var i;
        var r = n.editor;
        var o = r.getContentState().getActiveZone();
        var a = r.selection.getSelection();
        var l = a.start;
        var c = a.end;
        if (r.pluginManager.isPluginInZone(n, l.zoneId)) {
          var s = l.line;
          var u = o.getLine(s);
          if (u && ((i = u._node) === null || i === undefined ? undefined : i.contains(e.target))) {
            if (l.line + 1 === c.line) {
              var d = o.getLine(c.line);
              if (!d || +!!d.hasLineMarker() !== c.offset) {
                return;
              }
            } else if (l.line !== c.line) {
              return;
            }
            var f = u.getAttributes().toMap();
            if (n.blackAttrKeyList.every(function (e) {
              return !f[e];
            })) {
              r.selection.setSelection({
                start: {
                  line: l.line,
                  offset: 0,
                  zoneId: l.zoneId
                },
                end: {
                  line: l.line,
                  offset: u.length(),
                  zoneId: l.zoneId
                }
              }, true);
            }
          }
        }
      };
      this.editor = e.editor;
      this.blackAttrKeyList = e.blackAttrKeyList || r;
      this.editor.on("click", this.handleClick);
    }
    e.prototype.destroy = function () {
      this.editor.off("click", this.handleClick);
    };
    return e;
  }();
  require.d(exports, {
    LineSelectHandler: function () {
      return o;
    }
  });
}