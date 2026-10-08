// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'VB' to 'beforeDataApplyHooks'
// - Renamed export 'Z7' to 'dataTransformOps'
// - Renamed export 'rd' to 'pasteLifecycleHooks'
// - Renamed export 'vg' to 'pasteHandlerMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 324971
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var a;
  var s;
  (o = {}).preprocessData = "preprocessData";
  o.beforeBlockDataApply = "beforeBlockDataApply";
  o.onDataApply = "onDataApply";
  o.onDataAccept = "onDataAccept";
  o.afterRecordIdCreated = "afterRecordIdCreated";
  let c = o;
  (i = {})[i.changeSelectionForUnselectBlock = 10] = "changeSelectionForUnselectBlock";
  i[i.removeRevisionData = 11] = "removeRevisionData";
  i[i.transformPartialOkr = 20] = "transformPartialOkr";
  i[i.transformAgenda = 30] = "transformAgenda";
  i[i.removeClientvarsByBenefit = 31] = "removeClientvarsByBenefit";
  i[i.removeClientvarsByAnonymous = 40] = "removeClientvarsByAnonymous";
  i[i.removeClientvarsByAnnouncement = 50] = "removeClientvarsByAnnouncement";
  i[i.transformIntoQuoteContainer = 60] = "transformIntoQuoteContainer";
  i[i.docxAtSheetFilter = 70] = "docxAtSheetFilter";
  i[i.docxSyncedBlockFilter = 80] = "docxSyncedBlockFilter";
  i[i.baseReferBlockFilter = 90] = "baseReferBlockFilter";
  i[i.transformTableLikeBlock = 100] = "transformTableLikeBlock";
  i[i.transformCodeContentToText = 110] = "transformCodeContentToText";
  i[i.transformLoadingBlockToText = 120] = "transformLoadingBlockToText";
  i[i.transformPageBlockToText = 130] = "transformPageBlockToText";
  i[i.transformSeparateSyncedBlockToText = 140] = "transformSeparateSyncedBlockToText";
  i[i.pasteTextIntoTitle = 150] = "pasteTextIntoTitle";
  i[i.removeNestedTable = 160] = "removeNestedTable";
  i[i.removeClientVarsInvalidContainer = 170] = "removeClientVarsInvalidContainer";
  i[i.transformISVToMermaid = 171] = "transformISVToMermaid";
  i[i.removeClientVarsInvalidData = 180] = "removeClientVarsInvalidData";
  i[i.transformIsvOldBlock = 190] = "transformIsvOldBlock";
  i[i.transformCodeChildrenToPlainText = 200] = "transformCodeChildrenToPlainText";
  i[i.correctDataWhenPaste = 210] = "correctDataWhenPaste";
  i[i.addInlineFileRecord = 220] = "addInlineFileRecord";
  i[i.transformAuthorId = 230] = "transformAuthorId";
  i[i.transformNoSupport = 235] = "transformNoSupport";
  i[i.transformInlineComponentId = 240] = "transformInlineComponentId";
  i[i.transformControlChar = 250] = "transformControlChar";
  i[i.setJiraIssueCreatorToCurrentUser = 260] = "setJiraIssueCreatorToCurrentUser";
  i[i.setFilterCreatorToCurrentUser = 270] = "setFilterCreatorToCurrentUser";
  i[i.callProcessDataForTable = 280] = "callProcessDataForTable";
  i[i.removeObjectiveProgressChild = 290] = "removeObjectiveProgressChild";
  i[i.transformLarkMentionDoc = 300] = "transformLarkMentionDoc";
  let d = i;
  (l = {})[l.callBeforeDataApplyForGrid = 10] = "callBeforeDataApplyForGrid";
  l[l.callBeforeDataApplyForTable = 20] = "callBeforeDataApplyForTable";
  l[l.callBeforeDataApplyForEmptyText = 30] = "callBeforeDataApplyForEmptyText";
  l[l.callBeforeDataApplyForSyncedBlock = 40] = "callBeforeDataApplyForSyncedBlock";
  l[l.callBeforeDataApplyForRevision = 50] = "callBeforeDataApplyForRevision";
  let u = l;
  (a = {})[a.hideInlineTriggerIfNecessary = 10] = "hideInlineTriggerIfNecessary";
  a[a.sendPasteTracker = 20] = "sendPasteTracker";
  a[a.sendPasteTrackerForJira = 30] = "sendPasteTrackerForJira";
  a[a.tryTransformLink = 40] = "tryTransformLink";
  a[a.tryTransformUrlPreviewOrMessage = 50] = "tryTransformUrlPreviewOrMessage";
  a[a.tryTransformUrlPreviewByInlineBlock = 60] = "tryTransformUrlPreviewByInlineBlock";
  a[a.tryTransformSyncedBlock = 70] = "tryTransformSyncedBlock";
  a[a.transformEquationId = 80] = "transformEquationId";
  a[a.tryChartOnDataApply = 90] = "tryChartOnDataApply";
  a[a.setLingoPastePayloadToBlock = 100] = "setLingoPastePayloadToBlock";
  let h = a;
  (s = {})[s.jiraFilterAfterAcceptHookImp = 10] = "jiraFilterAfterAcceptHookImp";
  let p = s;
  let f = {
    [c.preprocessData]: d,
    [c.beforeBlockDataApply]: u,
    [c.onDataApply]: h,
    [c.onDataAccept]: p,
    [c.afterRecordIdCreated]: {}
  };
  require.d(exports, {
    beforeDataApplyHooks: function () {
      return u;
    },
    dataTransformOps: function () {
      return d;
    },
    pasteLifecycleHooks: function () {
      return c;
    },
    pasteHandlerMap: function () {
      return f;
    }
  });
}