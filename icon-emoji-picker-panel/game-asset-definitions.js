// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Hh' to 'gameTypes'
// - Renamed export 'Om' to 'colors'
// - Renamed export 'Tf' to 'formatAssetName'
// - Renamed export 'hv' to 'isValidAsset'
// - Renamed export 'q' to 'icons'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47996.8a642cb0.js
         * chunkId: 47996
         * moduleId: 250704
         */
module.exports = function (module, exports, require) {
  let o = {
    base: "base",
    form: "form",
    solitaire: "solitaire",
    baseV2: "baseV2"
  };
  let r = {
    buzz: "buzz",
    arrange: "arrange",
    cloud: "cloud",
    game: "game",
    home: "home",
    laptop: "laptop",
    tag: "tag",
    calendar: "calendar",
    checkboxChecked: "checkboxChecked",
    time: "time",
    cube: "cube",
    code: "code",
    chartPie: "chartPie",
    meterAlt: "meterAlt",
    radar: "radar",
    chartAverage: "chartAverage",
    growth: "growth",
    ordinal: "ordinal",
    barcode: "barcode",
    wikis: "wikis",
    aperture: "aperture",
    bareMetalServer: "bareMetalServer",
    devices: "devices",
    camera: "camera",
    microphone: "microphone",
    departure: "departure",
    globe: "globe",
    dataEnrichment: "dataEnrichment",
    cafe: "cafe",
    email: "email",
    explore: "explore",
    industry: "industry",
    favorite: "favorite",
    notification: "notification",
    colorPalette: "colorPalette",
    trophy: "trophy",
    grid: "grid",
    whiteboard: "whiteboard",
    diagram: "diagram"
  };
  let i = {
    orange: "orange",
    pink: "pink",
    rose: "rose",
    purple: "purple",
    indigo: "indigo",
    blue: "blue",
    wathet: "wathet",
    green: "green"
  };
  let a = (() => {
    let e = [];
    Object.keys(i).map(t => {
      [...Object.keys(o), ...Object.keys(r)].map(n => e.push(`${t}_${n}.png`));
    });
    return e;
  })();
  let c = e => a.includes(e);
  function u(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  let s = e => {
    try {
      let t = e.split(".")[0].split("_");
      return `${u(t[0])}${u(t[1])}`;
    } catch (t) {
      return e;
    }
  };
  require.d(exports, {
    gameTypes: function () {
      return o;
    },
    colors: function () {
      return i;
    },
    formatAssetName: function () {
      return s;
    },
    isValidAsset: function () {
      return c;
    },
    icons: function () {
      return r;
    }
  });
}