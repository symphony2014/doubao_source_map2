// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(433991) to 'doc-block-type-constants'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_draggable.bce4732d.js
         * chunkId: 87721
         * moduleId: 61136
         */
module.exports = function (module, exports, require) {
  let l = {
    blockType: require("doc-block-type-constants") /*id: 433991*/.blockTypeConstants.CODE,
    getViewSnapshot: function (e) {
      var t;
      let {
        blockView: A
      } = e;
      let l = A.props.hostElementRef.current;
      let {
        editor: r
      } = A;
      let {
        zoneId: i,
        zoneState: o
      } = A.model;
      let n = (t = r.virtualListManager) === null || t === undefined ? undefined : t.getVirtualListModuleOfZone(i);
      if (n == null ? undefined : n.isEnabled) {
        let e = l.cloneNode(true);
        let t = e.querySelector(".code-block-zone-container");
        if (!t) {
          return l;
        }
        t.innerHTML = "";
        t.textContent = o.getModelText();
        let A = l.getBoundingClientRect();
        e.style.width = `${A.width}px`;
        e.style.height = `${A.height}px`;
        e.style.display = "block";
        return e;
      }
      return l;
    }
  };
  exports.default = [l];
  require.r(exports);
}