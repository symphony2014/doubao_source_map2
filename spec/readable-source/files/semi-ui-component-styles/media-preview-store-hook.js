// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'usePreviewStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 911987
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration = require("redux-devtools-persist-integration") /*id: 383133*/;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  let i = {
    video: {
      show: false,
      url: "",
      definitions: [],
      posterUrl: "",
      nodeId: ""
    },
    audio: {
      show: false,
      nodeId: ""
    },
    imagePreview: {
      show: false,
      imageList: [],
      defaultIndex: 0
    },
    filePreview: {
      show: false,
      fileList: [],
      defaultIndex: 0
    }
  };
  let l = reactStoreHookFactory.createStoreHook()(reduxDevtoolsPersistIntegration.enhanceSubscribe(e => ({
    ...i,
    closeVideo: () => {
      e(() => ({
        video: {
          url: "",
          show: false,
          definitions: [],
          posterUrl: "",
          nodeId: ""
        }
      }));
    },
    openVideo: t => {
      let {
        url: a,
        definitions: n,
        posterUrl: r,
        nodeId: i
      } = t;
      e(() => ({
        video: {
          url: a,
          show: true,
          definitions: n,
          posterUrl: r,
          nodeId: i
        }
      }));
    },
    openAudio: t => {
      let {
        url: a,
        title: n,
        duration: r,
        nodeId: i
      } = t;
      e(() => ({
        audio: {
          url: a,
          show: true,
          title: n,
          duration: r,
          nodeId: i
        }
      }));
    },
    closeAudio: () => {
      e(() => ({
        audio: {
          url: "",
          show: false,
          nodeId: ""
        }
      }));
    },
    openImagePreview: (t, a) => {
      e(() => ({
        imagePreview: {
          show: true,
          imageList: t,
          defaultIndex: a
        }
      }));
    },
    closeImagePreview: () => {
      e(() => ({
        imagePreview: {
          show: false,
          imageList: [],
          defaultIndex: 0
        }
      }));
    },
    openFilePreview: (t, a) => {
      e(() => ({
        filePreview: {
          show: true,
          fileList: t,
          defaultIndex: a
        }
      }));
    },
    closeFilePreview: () => {
      e(() => ({
        filePreview: {
          show: false,
          fileList: []
        }
      }));
    }
  })));
  require.d(exports, {
    usePreviewStore: function () {
      return l;
    }
  });
}