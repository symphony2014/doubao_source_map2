// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'useReferenceImages'
// - Renamed export 'l' to 'ReferenceImageTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 177182
         */
module.exports = function (module, exports, require) {
  var i;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var codeRouteUtils = require("code-route-utils") /*id: 983618*/;
  var skillMessageTypes = require("skill-message-types") /*id: 824454*/;
  let s = () => {
    let e = codeRouteUtils.isCodePage();
    let t = reactCoreLibraryReexport.useMemo(() => e, [e]);
    let n = reactCoreLibraryReexport.useMemo(() => t ? {
      code_assistant_source: skillMessageTypes.skillModes.DevMode
    } : null, [t]);
    return {
      isDevMode: t,
      contextVariables: n
    };
  };
  (i = {})[i.Function = 1] = "Function";
  i[i.Layout = 2] = "Layout";
  i[i.Color = 3] = "Color";
  let c = i;
  let d = e => {
    let {
      attachmentStates: t,
      clearAttachments: n,
      handleAddImages: i,
      setExtraContents: l,
      extraContextVariable: a
    } = e;
    let [c, d] = reactCoreLibraryReexport.useState([]);
    let [u, p] = reactCoreLibraryReexport.useState(false);
    let {
      isDevMode: h,
      contextVariables: m
    } = s();
    reactCoreLibraryReexport.useEffect(() => {
      if (t.length === 0) {
        d([]);
        p(false);
      }
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (u) {
        d(e => t.map(t => {
          var i;
          var r;
          let l = (r = t.imageList) === null || r === undefined ? undefined : (i = r[0]) === null || i === undefined ? undefined : i.image_ori?.url;
          return {
            name: t.fileName,
            types: e.find(e => e.url === l)?.types || [],
            uri: t.fileKey,
            url: l,
            status: t.status,
            localKey: t.localKey
          };
        }));
      } else {
        d([]);
      }
    }, [u, t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!h) {
        if (l != null) {
          l(undefined);
        }
        return;
      }
      if (u) {
        if (l != null) {
          l({
            useSamanthaChat: "true",
            reference_content: JSON.stringify([{
              type: "text",
              text: "",
              extra: {
                context_variables: JSON.stringify({
                  code_assistant_image_references: c.map(e => ({
                    name: e.name,
                    types: e.types,
                    uri: e.uri
                  })),
                  ...m,
                  ...a
                })
              }
            }]),
            send_from_skill_guidance_or_suggestion: "1"
          });
        }
      }
    }, [u, c, h, l, m, a]);
    let f = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (c.length === 0) {
        n({});
      }
      if (e == null ? undefined : e.length) {
        setTimeout(() => {
          p(true);
          i({
            type: "change",
            target: {
              files: e
            }
          });
        }, 0);
      }
    });
    let g = reactFunctionMemoHook.useMemoizedCallback((e, t) => {
      d(n => n.map(n => n.url === e ? {
        ...n,
        types: t
      } : n));
    });
    return {
      referenceImageList: c,
      setReferenceImageList: d,
      setReferenceImageByUrl: g,
      setIsReferenceImage: p,
      addReferenceImage: f
    };
  };
  require.d(exports, {
    useReferenceImages: function () {
      return d;
    },
    ReferenceImageTypes: function () {
      return c;
    }
  });
}