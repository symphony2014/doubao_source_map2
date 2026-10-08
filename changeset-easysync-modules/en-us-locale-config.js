// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'localeConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 743929
         */
module.exports = function (module, exports, require) {
  var r = {
    global: {
      placeholder: "Please select...",
      notFoundContent: "No results found",
      noOptions: "No options available",
      selectAll: "Select all",
      okText: "Done",
      cancelText: "Cancel",
      more: "More",
      search: "Search"
    },
    components: {
      modal: {
        okText: "Done",
        cancelText: "Cancel"
      },
      popconfirm: {
        okText: "Done",
        cancelText: "Cancel"
      },
      colorPicker: {
        moreColor: "More colors"
      },
      rate: {
        descriptions: ["Rate your experience", "Very dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very satisfied"]
      },
      pagination: {
        items_per_page: "/ page",
        jump_to: "Go to",
        jump_to_confirm: "Confirm",
        page: "page",
        prev_page: "Previous page",
        next_page: "Next page",
        prev_5: "Previous 5 pages",
        next_5: "Next 5 pages",
        prev_3: "Previous 3 pages",
        next_3: "Next 3 pages"
      },
      table: {
        filterTitle: "Filter menu",
        filterConfirm: "Done",
        filterReset: "Reset",
        filterEmptyText: "No filters",
        emptyText: "No data",
        selectAll: "Select current page",
        selectInvert: "Invert select this page",
        selectionAll: "Select all pages",
        sortTitle: "Sort",
        expand: "Expand row",
        collapse: "Collapse row",
        triggerDesc: "High to low",
        triggerAsc: "Low to high",
        cancelSort: "Clear sorting"
      },
      tabs: {
        more: "More"
      },
      datePicker: {
        placeholder: "Select date",
        yearPlaceholder: "Select year",
        quarterPlaceholder: "Select quarter",
        monthPlaceholder: "Select month",
        ok: "Done",
        rangePlaceholder: ["Start date", "End date"],
        rangeYearPlaceholder: ["Start year", "End year"],
        rangeMonthPlaceholder: ["Start month", "End month"],
        today: "Today",
        month: "",
        year: "",
        yesterday: "Yesterday",
        thisWeek: "This week",
        thisMonth: "This month",
        thisBimonthly: "These two months",
        weekdaysMin: ["S", "M", "T", "W", "T", "F", "S"],
        monthsMin: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        currentTime: "Current Time",
        monthYearSelector: {
          f: function (t) {
            return [t.month("MMMM"), " ", t.year("YYYY")];
          }
        },
        longMonthFormat: "MM/YYYY",
        longDateFormat: "MM/DD/YYYY"
      },
      picker: {
        morning: "AM",
        afternoon: "PM",
        timePlaceholder: "Select time",
        hour: "hr",
        minute: "min",
        second: "sec"
      },
      empty: {
        description: "No data"
      },
      form: {
        defaultValidateMessage: {
          default: {
            f: function (t) {
              return "Field validation error for " + t.label;
            }
          },
          required: {
            f: function (t) {
              return "Please enter " + t.label;
            }
          },
          enum: {
            f: function (t) {
              return t.label + " must be one of [" + t.enum + "]";
            }
          },
          whitespace: {
            f: function (t) {
              return t.label + " cannot be a blank character";
            }
          },
          date: {
            format: {
              f: function (t) {
                return t.label + " date format is invalid";
              }
            },
            parse: {
              f: function (t) {
                return t.label + " cannot be converted to a date";
              }
            },
            invalid: {
              f: function (t) {
                return t.label + " is an invalid date";
              }
            }
          },
          types: {
            string: {
              f: function (t) {
                return t.label + " is not a valid " + t.type;
              }
            },
            method: {
              f: function (t) {
                return t.label + " is not a valid " + t.type;
              }
            },
            array: {
              f: function (t) {
                return t.label + " is not a valid " + t.type;
              }
            },
            object: {
              f: function (t) {
                return t.label + " is not a valid " + t.type;
              }
            },
            number: {
              f: function (t) {
                return t.label + " is not a valid " + t.type;
              }
            },
            date: {
              f: function (t) {
                return t.label + " is not a valid " + t.type;
              }
            },
            boolean: {
              f: function (t) {
                return t.label + " is not a valid " + t.type;
              }
            },
            integer: {
              f: function (t) {
                return t.label + " is not a valid " + t.type;
              }
            },
            float: {
              f: function (t) {
                return t.label + " is not a valid " + t.type;
              }
            },
            regexp: {
              f: function (t) {
                return t.label + " is not a valid " + t.type;
              }
            },
            email: {
              f: function (t) {
                return t.label + " is not a valid " + t.type;
              }
            },
            url: {
              f: function (t) {
                return t.label + " is not a valid " + t.type;
              }
            },
            hex: {
              f: function (t) {
                return t.label + " is not a valid " + t.type;
              }
            }
          },
          string: {
            len: {
              f: function (t) {
                return t.label + " must be " + t.len + " characters";
              }
            },
            min: {
              f: function (t) {
                return t.label + " must be at least " + t.min + " characters";
              }
            },
            max: {
              f: function (t) {
                return t.label + " must be at most " + t.max + " characters";
              }
            },
            range: {
              f: function (t) {
                return t.label + " must be between " + t.min + "-" + t.max + " characters";
              }
            }
          },
          number: {
            len: {
              f: function (t) {
                return t.label + " must be equal to " + t.len;
              }
            },
            min: {
              f: function (t) {
                return t.label + " must be minimum " + t.min;
              }
            },
            max: {
              f: function (t) {
                return t.label + " must be maximum " + t.max;
              }
            },
            range: {
              f: function (t) {
                return t.label + " must be between " + t.min + "-" + t.max;
              }
            }
          },
          array: {
            len: {
              f: function (t) {
                return "Must be " + t.len + " " + t.label;
              }
            },
            min: {
              f: function (t) {
                return "At least " + t.min + " " + t.label;
              }
            },
            max: {
              f: function (t) {
                return "At most " + t.max + " " + t.label;
              }
            },
            range: {
              f: function (t) {
                return "The amount of " + t.label + " must be between " + t.min + "-" + t.max;
              }
            }
          },
          pattern: {
            mismatch: {
              f: function (t) {
                return t.label + " does not match the pattern " + t.pattern;
              }
            }
          }
        }
      },
      upload: {
        unknownSize: "Unknown size",
        waiting: "To be uploaded",
        download: "Download",
        delete: "Delete",
        preview: "Preview",
        uploadAgain: "Upload again",
        failed: "Unable to upload",
        downloading: "Downloading",
        downloadFailed: "Unable to download"
      },
      transfer: {
        noOptions: "No options",
        noSearchResult: "No results found",
        noOptionsSelected: "No options selected",
        selected: {
          f: function (t) {
            return "Selected (" + t.selected + ")";
          }
        },
        selectAll: {
          f: function (t) {
            return "All (" + t.selected + "/" + t.total + ")";
          }
        },
        clear: "Clear"
      },
      expandableText: {
        show: "Show",
        fold: "Hide"
      },
      imageViewer: {
        prevArrow: "Previous",
        nextArrow: "Next",
        zoomOut: "Zoom out",
        zoomIn: "Zoom in",
        originSize: "Original size",
        bestFit: "Fit to window",
        rotate: "Rotate",
        download: "Download"
      }
    },
    locale: "en-US"
  };
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var o = {
    rootPrefixCls: "ud",
    locale: r,
    direction: "ltr",
    getPopupContainer: function () {
      if (reactRefEffectUtils.canUseDom()) {
        return document.body;
      } else {
        return {};
      }
    },
    getTargetContainer: function () {
      if (reactRefEffectUtils.canUseDom()) {
        return window;
      } else {
        return {};
      }
    },
    toast: {
      top: 32
    },
    theme: "light",
    componentSize: "medium"
  };
  require.d(exports, {
    localeConfig: function () {
      return o;
    }
  });
}