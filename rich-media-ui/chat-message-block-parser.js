// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'pk' to 'parseSpecialBlocks'
// - Renamed export 'u5' to 'mapSpecialIndices'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 39249.e41cfe55.js
         * chunkId: 39249
         * moduleId: 452214
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var collectionArrayGrouper = require("collection-array-grouper") /*id: 177883*/;
  var toEntriesUtil = require("to-entries-util") /*id: 537539*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var lazyMindMapLoader = require("lazy-mind-map-loader") /*id: 124791*/;
  var utf8EncodingUtils_1 = require("utf8-encoding-utils_1") /*id: 858081*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var chatMessageUtils = require("chat-message-utils") /*id: 898330*/;
  var contentGroupConstants = require("content-group-constants") /*id: 844215*/;
  var videoCarouselContainer = require("video-carousel-container") /*id: 240649*/;
  var videoBoxComponent_1 = require("video-box-component_1") /*id: 428732*/;
  var chatImageGalleryBox = require("chat-image-gallery-box") /*id: 345989*/;
  var chatImageGroupComponents = require("chat-image-group-components") /*id: 976339*/;
  var aladdinCardPureWrapper = require("aladdin-card-pure-wrapper") /*id: 417178*/;
  var aladdinCardWrapperComponent = require("aladdin-card-wrapper-component") /*id: 578957*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = (e, i, t) => t.map(t => {
    let {
      data: s
    } = t;
    if (e === "" && s) {
      return {
        ...t,
        data: {
          ...s,
          index: i[s.pos ?? 0] ?? -1
        }
      };
    } else {
      return {
        ...t,
        data: {
          ...s,
          index: s.pos === -1 ? s.pos : isUndefinedCheck.isUndefined(i[s.pos ?? 0]) || i[s.pos ?? 0] > e.length ? e.length : i[s.pos ?? 0]
        }
      };
    }
  });
  let $ = e => {
    let {
      message: i,
      metaInfos: t,
      messageText: n,
      viewOnly: $,
      renderHocMap: k,
      options: y
    } = e;
    let R = t.filter(chatMessageUtils.isSpecialMessage);
    let T = R.map(e => [e.data.pos, e.data.pos]).flat(2).filter(e => e !== undefined && e !== -1).map(e => Number(e));
    let S = utf8EncodingUtils_1.Utf8Utils.posCalcRange(n, T);
    let j = b(n, S, R);
    let N = collectionArrayGrouper.groupValuesToArray(j, e => e.data.index);
    let W = [];
    let {
      isFinishedMessage: E = true,
      hideVideoGroupHeader: Z = false
    } = y ?? {};
    let F = [];
    for (let [e, t] of toEntriesUtil.toEntries(N)) {
      let r = Number(e);
      if (r < 0) {
        if (!E) {
          continue;
        }
        r = n.length;
      }
      for (let l of objectValuesHelper.getObjectValues(t)) {
        let {
          data: {
            insert_text: t = ""
          }
        } = l;
        let a = new DOMParser().parseFromString(t, "text/html");
        let c = a.querySelector("data-block") || a.querySelector("data-inline");
        let m = c == null ? undefined : c.getAttribute("type");
        if (m === contentGroupConstants.contentGroupTypes.ImageGroup) {
          let {
            images: e = [],
            is_placeholder: t,
            is_empty_search: n
          } = safeJsonUtils.safeParse(c == null ? undefined : c.getAttribute("value"), {});
          if (t) {
            continue;
          }
          let l = !!t && !n;
          let a = !!n;
          let o = e || l || a;
          if (o || $) {
            F = [...F, ...(e ?? [])];
          }
          W.push({
            range: r,
            render: () => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
              children: $ ? reactJsxRuntimeCoreReexport.jsx(chatImageGalleryBox.ImageBoxPure, {
                images: e,
                imagesList: F,
                imagesOptions: {
                  isPosIndexZero: r === 0
                }
              }) : o && reactJsxRuntimeCoreReexport.jsx(chatImageGroupComponents.ImageBox, {
                images: e,
                imagesList: F,
                message: i,
                imagesOptions: {
                  isSearchingImage: l,
                  isEmptySearch: a,
                  isPosIndexZero: r === 0
                }
              })
            })
          });
        }
        if (m === contentGroupConstants.contentGroupTypes.VideoGroup || m === contentGroupConstants.contentGroupTypes.VideoGroupScrollable) {
          let {
            videos: t
          } = safeJsonUtils.safeParse(c == null ? undefined : c.getAttribute("value"), {});
          let n = !!t;
          W.push({
            range: r,
            ...(Number(e) === -1 ? {
              type: "block"
            } : {}),
            render: () => {
              let e = () => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
                children: $ ? reactJsxRuntimeCoreReexport.jsx(videoCarouselContainer.VideoPureBox, {
                  videos: t
                }) : n && reactJsxRuntimeCoreReexport.jsx(videoBoxComponent_1.VideoBox, {
                  hideHeader: Z,
                  videos: t,
                  message: i
                })
              });
              let r = k == null ? undefined : k.get(m);
              if (r) {
                return r(e());
              } else {
                return e();
              }
            }
          });
        }
        if (m === contentGroupConstants.contentGroupTypes.MindMap) {
          let i = c == null ? undefined : c.getAttribute("value");
          if (!i) {
            continue;
          }
          let t = JSON.parse(unescape(i));
          W.push({
            range: Number(e),
            type: "block",
            render: () => {
              let e = () => {
                let e = i18nTranslationUtils.useTranslationWithFallback();
                return reactJsxRuntimeCoreReexport.jsx(lazyMindMapLoader.lazyMindMapLoader, {
                  value: t.markdown_text,
                  isDone: true,
                  t: (e, i) => i ?? "",
                  handleRetry: () => {},
                  iconUrl: "",
                  extName: e("brandName_doubao"),
                  hideAction: true,
                  style: {
                    pointerEvents: "none"
                  },
                  markmapOptions: {
                    maxWidth: "100%"
                  }
                });
              };
              let i = k == null ? undefined : k.get(m);
              if (i) {
                return i(e());
              } else {
                return e();
              }
            }
          });
        }
        if (m === contentGroupConstants.contentGroupTypes.LynxRuyi) {
          let {
            data: e,
            ruyi_card_type: t
          } = safeJsonUtils.safeParse(c == null ? undefined : c.getAttribute("value"), {});
          let l = {};
          if (isStringTypeCheck.isString(e)) {
            l = safeJsonUtils.safeParse(e, {});
          }
          let {
            card_data: a,
            doc_id: d,
            ala_src: s
          } = l ?? {};
          let m = i && !!a;
          W.push({
            range: r,
            type: "block",
            render: () => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
              children: $ ? reactJsxRuntimeCoreReexport.jsx(aladdinCardPureWrapper.AladdinCardPureWrapper, {
                data: a,
                cardType: t,
                isOnlyAladdinCard: n === "" || n === "\n"
              }) : m && reactJsxRuntimeCoreReexport.jsx(aladdinCardWrapperComponent.AladdinCardWrapper, {
                data: a,
                cardType: t,
                message: i,
                docId: d,
                alaSrc: s
              })
            })
          });
        }
      }
    }
    return W;
  };
  require.d(exports, {
    parseSpecialBlocks: function () {
      return $;
    },
    mapSpecialIndices: function () {
      return b;
    }
  });
}