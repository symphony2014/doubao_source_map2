// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'useAiReaderSkill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: read-pdf-skill-guidance-page-v2.2be10363.js
         * chunkId: 92219
         * moduleId: 806870
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var chatConversationProcessor = require("chat-conversation-processor") /*id: 118650*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var dateTimestampParser = require("date-timestamp-parser") /*id: 37495*/;
  let d = e => e.map(e => {
    var n;
    return {
      title: e.title || "",
      prompt: e.prompt || "",
      bytes: e.files ? e.files.reduce((e, t) => e + (dateTimestampParser.parseTimestampInt(t.size) || 0), 0) : undefined,
      charCount: dateTimestampParser.parseTimestampInt(e.char_count),
      tag: e.tags?.[0],
      assets: ((n = e.files) === null || n === undefined ? undefined : n.map((t, n) => {
        return {
          ...(t.url ? {
            link: t.url
          } : {
            fileKey: t.key ?? "",
            fileName: t.file_name ?? t.key ?? ""
          }),
          size: dateTimestampParser.parseTimestampInt(t.size),
          cover: e.preview_urls?.[n]
        };
      })) ?? [],
      ext: {
        ...(isUndefinedCheck.isUndefined(e.guide_resource_id) ? {} : {
          guide_resource_id: e.guide_resource_id
        }),
        ...(isUndefinedCheck.isUndefined(e.use_cache_answer) ? {} : {
          guidance_use_cache_answer: "1"
        })
      }
    };
  });
  let u = () => {
    let {
      data: e,
      loading: t
    } = useRequestHook.useRequest(async () => {
      let {
        data: e
      } = await apiServicesCollection.SamanthaApiService.SkillPack({
        skill_type: chatAppEnums.SkillType.ReadPDF,
        condition: {}
      });
      if (e == null ? undefined : e.ai_reader) {
        let {
          example_items: t = [],
          latest_items: n = []
        } = e.ai_reader;
        return {
          latestReadingList: chatConversationProcessor.processConversations(n),
          exampleList: d(t)
        };
      }
    }, {
      retryCount: 1
    });
    return reactCoreLibraryReexport.useMemo(() => {
      return {
        latestReadingList: (e == null ? undefined : e.latestReadingList) ?? [],
        exampleList: (e == null ? undefined : e.exampleList) ?? [],
        loading: t
      };
    }, [e, t]);
  };
  require.d(exports, {
    useAiReaderSkill: function () {
      return u;
    }
  });
}