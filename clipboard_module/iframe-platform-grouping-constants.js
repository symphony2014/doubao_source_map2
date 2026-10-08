// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BC' to 'iframePlatformGrouping'
// - Renamed export 'VQ' to 'domesticPlatforms'
// - Renamed export 'p4' to 'internationalPlatforms'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 148183
         */
module.exports = function (module, exports, require) {
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var docBlockTypeAliasesMapping = require("doc-block-type-aliases-mapping") /*id: 322889*/;
  var iframeLayoutConstants = require("iframe-layout-constants") /*id: 147199*/;
  let s = [iframeLayoutConstants.IframeTypes.youtube, iframeLayoutConstants.IframeTypes.gmaps, iframeLayoutConstants.IframeTypes.tiktok, iframeLayoutConstants.IframeTypes.vimeo, iframeLayoutConstants.IframeTypes.instagram, iframeLayoutConstants.IframeTypes.facebook, iframeLayoutConstants.IframeTypes.googleDrive, iframeLayoutConstants.IframeTypes.datastudio, iframeLayoutConstants.IframeTypes.oneDrive, iframeLayoutConstants.IframeTypes.imgur, iframeLayoutConstants.IframeTypes.soundcloud, iframeLayoutConstants.IframeTypes.slideshare, iframeLayoutConstants.IframeTypes.speakerdeck, iframeLayoutConstants.IframeTypes.lark_survey];
  let l = [iframeLayoutConstants.IframeTypes.youku, iframeLayoutConstants.IframeTypes.bilibili, iframeLayoutConstants.IframeTypes.autonavi, iframeLayoutConstants.IframeTypes.baidumap, iframeLayoutConstants.IframeTypes.xigua, iframeLayoutConstants.IframeTypes.modao, iframeLayoutConstants.IframeTypes.canva, iframeLayoutConstants.IframeTypes.jcode, iframeLayoutConstants.IframeTypes.douyin, iframeLayoutConstants.IframeTypes.iqiyi, iframeLayoutConstants.IframeTypes.ByteJimeng, iframeLayoutConstants.IframeTypes.feishu_survey, iframeLayoutConstants.IframeTypes.jinshuju];
  editorUiComponentConstants.uiComponentConstants.Video;
  t("block.iframe_video");
  editorUiComponentConstants.uiComponentConstants.Design;
  t("CreationDoc_DocX_Design_Title");
  editorUiComponentConstants.uiComponentConstants.Code;
  t("CreationDoc_DocX_ProductDevelopment_Title");
  editorUiComponentConstants.uiComponentConstants.Form;
  t("CreationDoc_DocX_Forums_Title");
  editorUiComponentConstants.uiComponentConstants.ProjectManage;
  t("CreationDoc_DocX_ProjectManagement_Title");
  editorUiComponentConstants.uiComponentConstants.Map;
  t("CreationDoc_DocX_Map_Title");
  let c = [{
    name: iframeLayoutConstants.IframeTypes.xigua,
    text: t("block.iframe_xigua"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.xigua],
    groupType: editorUiComponentConstants.uiComponentConstants.Video
  }, {
    name: iframeLayoutConstants.IframeTypes.douyin,
    text: t("LarkCCM_Docs_Menu_Embeds_Douyin"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.douyin],
    groupType: editorUiComponentConstants.uiComponentConstants.Video
  }, {
    name: iframeLayoutConstants.IframeTypes.tiktok,
    text: "TikTok",
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.tiktok],
    groupType: editorUiComponentConstants.uiComponentConstants.Video
  }, {
    name: iframeLayoutConstants.IframeTypes.youtube,
    text: t("common.YouTube"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.youtube],
    groupType: editorUiComponentConstants.uiComponentConstants.Video
  }, {
    name: iframeLayoutConstants.IframeTypes.bilibili,
    text: t("common.bilibili"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.bilibili],
    groupType: editorUiComponentConstants.uiComponentConstants.Video
  }, {
    name: iframeLayoutConstants.IframeTypes.youku,
    text: t("common.youku"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.youku],
    groupType: editorUiComponentConstants.uiComponentConstants.Video
  }, {
    name: iframeLayoutConstants.IframeTypes.iqiyi,
    text: t("LarkCCM_Docs_Embeds_iQiyi_Menu"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.iqiyi],
    groupType: editorUiComponentConstants.uiComponentConstants.Video
  }, {
    name: iframeLayoutConstants.IframeTypes.ByteJimeng,
    text: t("LarkCCM_Docs_Embeds_Jimeng_Menu"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.ByteJimeng],
    groupType: editorUiComponentConstants.uiComponentConstants.Design
  }, {
    name: iframeLayoutConstants.IframeTypes.figma,
    text: t("common.figma"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.figma],
    groupType: editorUiComponentConstants.uiComponentConstants.Design
  }, {
    name: iframeLayoutConstants.IframeTypes.modao,
    text: t("common.modao"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.modao],
    groupType: editorUiComponentConstants.uiComponentConstants.Design
  }, {
    name: iframeLayoutConstants.IframeTypes.canva,
    text: t("common.canva"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.canva],
    groupType: editorUiComponentConstants.uiComponentConstants.Design
  }, {
    name: iframeLayoutConstants.IframeTypes.jcode,
    text: t("LarkCCM_Docx_BlockName_Jcode"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.jcode],
    groupType: editorUiComponentConstants.uiComponentConstants.Code
  }, {
    name: iframeLayoutConstants.IframeTypes.codepen,
    text: t("common.codepen"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.codepen],
    groupType: editorUiComponentConstants.uiComponentConstants.Code
  }, {
    name: iframeLayoutConstants.IframeTypes.feishu_survey,
    text: t("common.feishu_survey"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.feishu_survey],
    groupType: editorUiComponentConstants.uiComponentConstants.Form
  }, {
    name: iframeLayoutConstants.IframeTypes.lark_survey,
    text: t("common.lark_survey"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.feishu_survey],
    groupType: editorUiComponentConstants.uiComponentConstants.Form
  }, {
    name: iframeLayoutConstants.IframeTypes.jinshuju,
    text: t("common.jinshuju"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.jinshuju],
    groupType: editorUiComponentConstants.uiComponentConstants.Form
  }, {
    name: iframeLayoutConstants.IframeTypes.airtable,
    text: t("common.Airtable"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.airtable],
    groupType: editorUiComponentConstants.uiComponentConstants.ProjectManage
  }, {
    name: iframeLayoutConstants.IframeTypes.baidumap,
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.baidumap],
    text: t("block.iframe_map_baidu"),
    groupType: editorUiComponentConstants.uiComponentConstants.Map
  }, {
    name: iframeLayoutConstants.IframeTypes.autonavi,
    text: t("block.iframe_map_autonavi"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.autonavi],
    groupType: editorUiComponentConstants.uiComponentConstants.Map
  }, {
    name: iframeLayoutConstants.IframeTypes.gmaps,
    text: t("block.iframe_map_gmaps"),
    keywords: docBlockTypeAliasesMapping.blockTypeKeywords[iframeLayoutConstants.IframeTypes.gmaps],
    groupType: editorUiComponentConstants.uiComponentConstants.Map
  }];
  require.d(exports, {
    iframePlatformGrouping: function () {
      return c;
    },
    domesticPlatforms: function () {
      return l;
    },
    internationalPlatforms: function () {
      return s;
    }
  });
}