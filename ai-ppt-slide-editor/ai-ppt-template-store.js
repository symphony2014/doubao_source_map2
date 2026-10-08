// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AP' to 'isAutoRecCard'
// - Renamed export 'UO' to 'autoRecCardItem'
// - Renamed export 'YP' to 'autoRecCardId'
// - Renamed export 'k8' to 'customUploadCard'
// - Renamed export 'kW' to 'createPptStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 603769
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var immerProduceCore = require("immer-produce-core") /*id: 949322*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let r = "$INNER_AUTO_RECOMMEND_CARD_ID";
  let s = {
    id: r
  };
  let c = {
    id: "$INNER_CUSTOM_TEMPLATE_UPLOAD_CARD_ID"
  };
  function d(e) {
    return e.id === r;
  }
  let u = {
    cardList: [],
    pageConfigs: [],
    recommandTemplateItems: [],
    templateCategories: [],
    loading: false,
    enableTemplate: false,
    pptPreviewModalVisible: false,
    showModule: false,
    chatType: chatConversationTypes.ConversationTypes.NewThread,
    selectedTemplateItem: s,
    showCustomUploadCard: false,
    showAutoRecommendCard: false,
    inputFocusFlag: false
  };
  let m = (e, t) => ({
    ...u,
    fetchCardList: async l => {
      e({
        loading: true
      });
      try {
        if (l === t().category_id && t().cardList?.length) {
          return;
        }
        let o = await apiServicesCollection.AiPptTemplateFacadeApiService.AGWPPTTemplateList({
          size: 50,
          category_id: l
        });
        e(immerProduceCore.produce(e => {
          if (o) {
            var a;
            var r;
            var s;
            var c;
            var d;
            e.next_cursor = o == null ? undefined : o.data?.next_cursor;
            e.has_more = o == null ? undefined : o.data?.has_more;
            e.category_id = l;
            e.selectedCategoryId = l;
            if (!e.templateCategories?.length) {
              e.templateCategories = (o == null ? undefined : (d = o.data) === null || d === undefined ? undefined : (c = d.category_list) === null || c === undefined ? undefined : (s = c.filter(e => e.category_id)) === null || s === undefined ? undefined : s.map(e => ({
                id: e.category_id || "",
                name: e.category_name || ""
              }))) || [];
            }
            e.cardList = (o == null ? undefined : (r = o.data) === null || r === undefined ? undefined : (a = r.templates) === null || a === undefined ? undefined : a.map(e => {
              var r;
              return {
                id: e.id || "",
                title: e.name || "",
                cover_url: e.cover_image?.url || "",
                pageDetails: {
                  rowCount: e.page_detail?.row_cnt || 0,
                  columnCount: e.page_detail?.column_cnt || 0,
                  pageCount: e.page_detail?.total || 0,
                  url: ((r = e.page_detail) === null || r === undefined ? undefined : r.page_image?.url) || ""
                },
                category_id: l
              };
            })) || [];
          }
        }));
      } finally {
        e({
          loading: false
        });
      }
    },
    loadMore: async () => {
      if (t().has_more !== true || !t().next_cursor) {
        return;
      }
      let l = await apiServicesCollection.AiPptTemplateFacadeApiService.AGWPPTTemplateList({
        cursor: t().next_cursor,
        size: 50,
        category_id: t().category_id
      });
      e(immerProduceCore.produce(e => {
        if (l) {
          let a = ((l == null ? undefined : l.data?.templates) || []).map(e => {
            var r;
            return {
              id: e.id || "",
              title: e.name || "",
              cover_url: e.cover_image?.url || "",
              pageDetails: {
                rowCount: e.page_detail?.row_cnt || 0,
                columnCount: e.page_detail?.column_cnt || 0,
                pageCount: e.page_detail?.total || 0,
                url: ((r = e.page_detail) === null || r === undefined ? undefined : r.page_image?.url) || ""
              },
              category_id: t().category_id
            };
          });
          e.cardList = [...e.cardList, ...a];
          e.next_cursor = l == null ? undefined : l.data?.next_cursor;
          e.has_more = l == null ? undefined : l.data?.has_more;
        }
      }));
    },
    loadActionBarConfig: async () => {
      if (t().pageConfigs.length || t().recommandTemplateItems.length) {
        return;
      }
      let l = await apiServicesCollection.AiPptTemplateFacadeApiService.AGWPPTActionbarConfig();
      e(immerProduceCore.produce(e => {
        var n;
        var o;
        var a;
        var r;
        var d;
        var u;
        var m;
        if (l) {
          e.enableTemplate = l.data?.template_can_display || false;
          e.pageConfigs = ((a = l.data) === null || a === undefined ? undefined : (o = a.page_sizes) === null || o === undefined ? undefined : (n = o.filter(e => e.id && e.name)) === null || n === undefined ? undefined : n.map(e => ({
            id: e.id || "",
            name: e.name || "",
            starling_key: e.starling_key || ""
          }))) || [];
          e.recommandTemplateItems = ((d = l.data) === null || d === undefined ? undefined : (r = d.recommend_templates) === null || r === undefined ? undefined : r.map(e => {
            var i;
            return {
              id: e.id || "",
              title: e.name || "",
              cover_url: e.cover_image?.url || "",
              pageDetails: {
                url: ((i = e.page_detail) === null || i === undefined ? undefined : i.page_image?.url) || "",
                rowCount: e.page_detail?.row_cnt || 0,
                columnCount: e.page_detail?.column_cnt || 0,
                pageCount: e.page_detail?.total || 0
              }
            };
          })) || [];
          if ((m = l.data) !== null && m !== undefined && (u = m.template_actionbar_items) !== null && u !== undefined) {
            u.forEach(t => {
              let l = objectPathGetDefault.getObjectPathDefault(t, "type");
              if (l === 1) {
                e.showAutoRecommendCard = true;
                s.title = t.name || "";
              }
              if (l === 2) {
                e.showCustomUploadCard = true;
                c.title = t.name || "";
              }
            });
          }
        }
      }));
    },
    updateSelectedFromMoreItem: t => {
      e({
        selectedFromMoreItem: t || null
      });
    },
    selectTemplateItem: t => {
      e({
        selectedTemplateItem: t || null
      });
    },
    selectCategoryId: t => {
      e({
        selectedCategoryId: t
      });
    },
    showPPTPreviewModal: t => {
      e({
        pptPreviewModalVisible: true,
        productModalInfo: t
      });
    },
    hidePPTPreviewModal: () => {
      e({
        pptPreviewModalVisible: false,
        productModalInfo: undefined,
        templatePreviewModalInfo: undefined
      });
    },
    updateAutoViewCanvasResourceId: t => {
      e({
        autoViewCanvasResourceId: t || ""
      });
    },
    setShowModule: t => {
      e({
        showModule: t
      });
    },
    setChatType: t => {
      e({
        chatType: t
      });
    },
    setCustomTemplateUploadId: t => {
      e({
        customTemplateUploadId: t
      });
    },
    setCustomTemplateFile: t => {
      e({
        customTempateFile: t
      });
    },
    setShowCustomUploadCard: t => {
      e({
        showCustomUploadCard: t
      });
    },
    setAutoRecommendCard: t => {
      e({
        showAutoRecommendCard: t
      });
    },
    focusInput: () => {
      e({
        inputFocusFlag: !t().inputFocusFlag
      });
    }
  });
  require.d(exports, {
    isAutoRecCard: function () {
      return d;
    },
    autoRecCardItem: function () {
      return s;
    },
    autoRecCardId: function () {
      return r;
    },
    customUploadCard: function () {
      return c;
    },
    createPptStore: function () {
      return m;
    }
  });
}