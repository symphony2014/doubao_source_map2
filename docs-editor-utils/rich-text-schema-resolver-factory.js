// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'richTextSchemaResolver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 873026
         */
module.exports = function (module, exports, require) {
  var schemaResolver = require("schema-resolver") /*id: 289076*/;
  var inlineCodeRenderer_1 = require("inline-code-renderer_1") /*id: 919823*/;
  var todoLineThroughRenderer = require("todo-line-through-renderer") /*id: 544876*/;
  var textHighlightConstant = require("text-highlight-constant") /*id: 103599*/;
  var textHighlightThemeRenderer = require("text-highlight-theme-renderer") /*id: 853585*/;
  var clientsideLinkConstants_1 = require("clientside-link-constants_1") /*id: 306134*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var aiSuggestionConstants = require("ai-suggestion-constants") /*id: 72959*/;
  let h = {
    author: {
      tailInherit: false
    },
    enter: {
      displayEnter: true
    },
    textHighlight: {
      mark: true
    },
    textHightlightBackground: {
      mark: true
    },
    [todoLineThroughRenderer.TODO_LINE_THROUGH_KEY]: {
      mark: true
    },
    trigger: {
      mark: true,
      tailInherit: true
    },
    bold: {
      mark: true,
      lineStartInherit: false
    },
    fontcolor: {
      mark: true
    },
    fontweight: {
      mark: true
    },
    italic: {
      mark: true
    },
    fontfamily: {
      mark: true
    },
    fontsize: {
      mark: true
    },
    underline: {
      mark: true
    },
    strikethrough: {
      mark: true
    },
    "comment-.*": {
      mark: true
    },
    "revision-id-.*": {
      tailInherit: false
    },
    "clientside-comment-hl": {
      mark: true
    },
    backcolor: {
      mark: true
    },
    backgroundcolor: {
      mark: true
    },
    "at-holder": {
      mark: true
    },
    "at-uuid_.*": {
      mark: true
    },
    "clientside-mention-placeholder": {
      mark: true
    },
    inlineCode: {
      mark: true,
      tailInherit: false
    },
    "url-.*": {
      mark: true,
      tailInherit: false,
      refresh: true
    },
    link: {
      mark: true,
      tailInherit: false,
      refresh: true,
      lineStartInherit: false
    },
    "link-id": {
      mark: true,
      tailInherit: false,
      refresh: true,
      lineStartInherit: false
    },
    [clientsideLinkConstants_1.linkUnderline]: {
      mark: true,
      tailInherit: false,
      lineStartInherit: false
    },
    textcolor: {
      mark: true
    },
    equation: {
      tailInherit: false,
      attributes: e => ![textHighlightThemeRenderer.TextHighlightRenderer.KEY, textHighlightConstant.textHighlightBg, inlineCodeRenderer_1.InlineCodeRenderer.KEY, clientsideLinkConstants_1.linkType].includes(e)
    },
    [inlineComponentConstants.componentType]: {
      tailInherit: false,
      attributes: e => clientsideLinkConstants_1.linkType !== e
    },
    [displayTypeConstants.displayInlineBlock]: {
      tailInherit: false,
      attributes: e => clientsideLinkConstants_1.linkType !== e
    },
    objectID: {
      tailInherit: false
    },
    "abbreviation-data": {
      mark: true,
      tailInherit: false,
      lineStartInherit: false
    },
    "clientside-abbreviation-data": {
      mark: true,
      tailInherit: false,
      lineStartInherit: false
    },
    "clientside-mineword-data": {
      mark: true,
      tailInherit: false,
      lineStartInherit: false
    },
    "clientside-grammarly-data": {
      mark: true,
      tailInherit: false
    },
    [aiSuggestionConstants.suggestionType]: aiSuggestionConstants.suggestionConfig,
    [aiSuggestionConstants.activeSuggestion]: aiSuggestionConstants.suggestionConfig,
    "clientside-highlight": {
      mark: true
    },
    "ai-extra": {
      tailInherit: false
    }
  };
  var _ = new schemaResolver.SchemaResolver(h);
  require.d(exports, {
    richTextSchemaResolver: function () {
      return _;
    }
  });
}