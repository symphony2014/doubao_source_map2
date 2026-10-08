// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CF' to 'blockDeltaTypes'
// - Renamed export 'JO' to 'layoutCellTypes'
// - Renamed export 'Jd' to 'gridColumnClasses'
// - Renamed export 'P6' to 'blockTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 507565
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var a;
  (o = {})[o.Default = 6] = "Default";
  o[o.NarrowScreenDefault = 4] = "NarrowScreenDefault";
  o[o.TableCell = 13] = "TableCell";
  o[o.Foldable = 20] = "Foldable";
  o[o.TableFirstColCell = 25] = "TableFirstColCell";
  o[o.NarrowScreenTableFirstColCell = 10] = "NarrowScreenTableFirstColCell";
  let c = o;
  (i = {})[i.Default = 0] = "Default";
  i[i.OKRBlock = -6] = "OKRBlock";
  let u = i;
  (l = {})[l.AgendaItemContentDelta = 12] = "AgendaItemContentDelta";
  l[l.AIBlockDelta = 10] = "AIBlockDelta";
  l[l.AIBlockXDelta = -5] = "AIBlockXDelta";
  l[l.AIBlockYDelta = 26] = "AIBlockYDelta";
  l[l.TextualBlockDelta = -2] = "TextualBlockDelta";
  l[l.GridColumnTableDelta = -8] = "GridColumnTableDelta";
  l[l.QuoteContainerDelta = 14] = "QuoteContainerDelta";
  l[l.FirstGridColumnDelta = 12] = "FirstGridColumnDelta";
  l[l.NarrowScreenFirstGridColumnDelta = -3] = "NarrowScreenFirstGridColumnDelta";
  l[l.OKRProgressDelta = 12] = "OKRProgressDelta";
  l[l.SyncedNewUIDelta = 10] = "SyncedNewUIDelta";
  l[l.SyncedBlockYDelta = 26] = "SyncedBlockYDelta";
  l[l.SyncedBlockXDelta = -5] = "SyncedBlockXDelta";
  l[l.SyncedBlockNarrowScreenXDelta = -8] = "SyncedBlockNarrowScreenXDelta";
  let s = l;
  (a = {}).FirstGridColumn = "first-grid-column";
  a.NormalGridColumn = "normal-grid-column";
  a.None = "";
  let d = a;
  require.d(exports, {
    blockDeltaTypes: function () {
      return s;
    },
    layoutCellTypes: function () {
      return c;
    },
    gridColumnClasses: function () {
      return d;
    },
    blockTypes: function () {
      return u;
    }
  });
}