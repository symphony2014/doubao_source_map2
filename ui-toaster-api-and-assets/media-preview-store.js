// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'mediaPreviewStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 28049
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  let r = {
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
  let o = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(e => ({
    ...r,
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
    openVideo: i => {
      let {
        url: t,
        definitions: n,
        posterUrl: a,
        nodeId: r
      } = i;
      e(() => ({
        video: {
          url: t,
          show: true,
          definitions: n,
          posterUrl: a,
          nodeId: r
        }
      }));
    },
    openAudio: i => {
      let {
        url: t,
        title: n,
        duration: a,
        nodeId: r
      } = i;
      e(() => ({
        audio: {
          url: t,
          show: true,
          title: n,
          duration: a,
          nodeId: r
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
    openImagePreview: (i, t) => {
      e(() => ({
        imagePreview: {
          show: true,
          imageList: i,
          defaultIndex: t
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
    openFilePreview: (i, t) => {
      e(() => ({
        filePreview: {
          show: true,
          fileList: i,
          defaultIndex: t
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
    mediaPreviewStore: function () {
      return o;
    }
  });
}