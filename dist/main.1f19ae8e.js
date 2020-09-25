// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LineConcat = /*#__PURE__*/function () {
  function LineConcat(attr) {
    _classCallCheck(this, LineConcat);

    this.attr = attr;
  }

  _createClass(LineConcat, [{
    key: "concatenate",
    value: function concatenate() {
      if (!Array.isArray(this.attr)) throw new Error('Not An Array');
      this.saveLinesByAttr();
      if (this.lines.length === 1) return {
        type: 'LineString',
        coordinates: this.lines[0]
      };
      return this.getResult();
    }
  }, {
    key: "saveLinesByAttr",
    value: function saveLinesByAttr() {
      var _this = this;

      this.lines = this.attr.reduce(function (target, geo) {
        var coords = _this.getGeoCoords(geo);

        if (!coords) return target;

        switch (geo.type) {
          case 'LineString':
            target.push(coords);
            break;

          case 'MultiLineString':
            target = [].concat(_toConsumableArray(target), _toConsumableArray(coords));
            break;

          default:
            break;
        }

        return target;
      }, []);
    }
  }, {
    key: "getGeoCoords",
    value: function getGeoCoords(geo) {
      var _geo;

      if (geo.type === 'Feature') geo = geo.geometry;
      return (_geo = geo) === null || _geo === void 0 ? void 0 : _geo.coordinates;
    }
  }, {
    key: "getResult",
    value: function getResult() {
      this.doConcatenate();
      return this.result.length === 1 ? {
        type: 'LineString',
        coordinates: this.result[0].coords
      } : {
        type: 'MultiLineString',
        coordinates: this.result.map(function (_ref) {
          var coords = _ref.coords;
          return coords;
        })
      };
    }
  }, {
    key: "doConcatenate",
    value: function doConcatenate() {
      this.data = this.lines.map(this.setDataStartEnd);
      this.result = [this.data.shift()];
      this.recursion();
    }
  }, {
    key: "setDataStartEnd",
    value: function setDataStartEnd(coords) {
      var start = coords[0];
      var end = coords[coords.length - 1];

      var _start = _slicedToArray(start, 2),
          startX = _start[0],
          startY = _start[1];

      var _end = _slicedToArray(end, 2),
          endX = _end[0],
          endY = _end[1];

      return {
        coords: coords,
        startX: startX,
        startY: startY,
        endX: endX,
        endY: endY
      };
    }
  }, {
    key: "recursion",
    value: function recursion() {
      if (this.data.length === 0) return;
      var _this$data$ = this.data[0],
          coords = _this$data$.coords,
          startX = _this$data$.startX,
          startY = _this$data$.startY,
          endX = _this$data$.endX,
          endY = _this$data$.endY;
      var concatenated = false;

      for (var i = 0; i < this.result.length; i++) {
        var resItem = this.result[i];

        if (resItem.endX === startX && resItem.endY === startY) {
          concatenated = true;
          coords.shift();
          coords = resItem.coords.concat(coords);
        } else if (resItem.startX === endX && resItem.startY === endY) {
          concatenated = true;
          coords.pop();
          coords = coords.concat(resItem.coords).reverse();
        } else if (resItem.startX === startX && resItem.startY === startY) {
          concatenated = true;
          coords.reverse().pop();
          coords = coords.concat(resItem.coords).reverse();
        } else if (resItem.endX === endX && resItem.endY === endY) {
          concatenated = true;
          coords.reverse().shift();
          coords = resItem.coords.concat(coords);
        }

        if (concatenated) {
          var _this$concatenateResu = this.concatenateResult(coords),
              _this$concatenateResu2 = _slicedToArray(_this$concatenateResu, 2),
              result = _this$concatenateResu2[0],
              index = _this$concatenateResu2[1];

          coords = result;
          this.result[i] = this.setDataStartEnd(coords);
          if (index >= 0) this.result.splice(index, 1);
          break;
        }
      }

      if (!concatenated) this.result.push(this.data[0]);
      this.data.shift();
      this.recursion();
    }
  }, {
    key: "concatenateResult",
    value: function concatenateResult(coords) {
      var _coords = _slicedToArray(coords[coords.length - 1], 2),
          checkX = _coords[0],
          checkY = _coords[1];

      var index = this.result.findIndex(function (_ref2) {
        var startX = _ref2.startX,
            startY = _ref2.startY;
        return startX === checkX && startY === checkY;
      });

      if (index >= 0) {
        var target = this.result[index];
        coords.pop();
        coords = coords.concat(target.coords);
        return [coords, index];
      }

      index = this.result.findIndex(function (_ref3) {
        var endX = _ref3.endX,
            endY = _ref3.endY;
        return endX === checkX && endY === checkY;
      });

      if (index >= 0) {
        var _target = this.result[index];
        coords.reverse().shift();
        coords = _target.coords.concat(coords);
      }

      return [coords, index];
    }
  }]);

  return LineConcat;
}();

var _default = function _default(attr) {
  var lineConcat = new LineConcat(attr);
  return lineConcat.concatenate();
};

exports.default = _default;
},{}],"mock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  type: 'LineString',
  coordinates: [[121.33111530312412, 31.225766709646685], [121.331992724368, 31.225847999364266], [121.33359746832481, 31.22593554203128], [121.33440756367555, 31.22596818661004], [121.33488339895167, 31.22596430813401], [121.33587514134295, 31.22592965544532], [121.33716165254688, 31.22587385756736]]
}, {
  type: 'LineString',
  coordinates: [[121.30210112411555, 31.21959251196456], [121.30211836819414, 31.2195904729035], [121.30251223475001, 31.219561589437664], [121.30291124674707, 31.21954380920364], [121.30312997552664, 31.21954179610477], [121.30328967812179, 31.219541795222188], [121.3033080891991, 31.219541762830964], [121.30363671299757, 31.219546871101496], [121.30380778935256, 31.219555244903155], [121.3039683076813, 31.219563367074812], [121.30415806270663, 31.219579033450945], [121.30436460096702, 31.219599267320433], [121.30467074430462, 31.219636415257103], [121.30504375169104, 31.21968753583041], [121.30535557819739, 31.219740123301612], [121.30564006176988, 31.21979600692395], [121.30582006076988, 31.21983527511946], [121.30602632182753, 31.219883711275646], [121.30630620087699, 31.219958311746606], [121.30648538885059, 31.220009234280777], [121.30663668737476, 31.22005343000094], [121.30675741236335, 31.22009198341784], [121.30695825077134, 31.220159127999597], [121.30721944517481, 31.22025166051895], [121.30750094302346, 31.22036014771277], [121.30800762986797, 31.22056230898183], [121.30870811093267, 31.220849242082316], [121.30934146614834, 31.221107566677848], [121.31003002230717, 31.221391532811907], [121.31097868669251, 31.22177967207441], [121.31165694344494, 31.222062566611502], [121.31211083531686, 31.22224582325308], [121.31237309020807, 31.222353522278798], [121.3126288595934, 31.22245390630432], [121.31289626232355, 31.22255426797908], [121.31320508066293, 31.222664856501712], [121.31342972028487, 31.22273899964097], [121.31361592732048, 31.222795582937536], [121.31378509302023, 31.22284461159593]]
}, {
  type: 'LineString',
  coordinates: [[121.33725455835666, 31.225771204142916], [121.33714883893256, 31.225777126518558]]
}, {
  type: 'LineString',
  coordinates: [[121.30199412596971, 31.219499052454076], [121.3015894161826, 31.219552619681348]]
}, {
  type: 'LineString',
  coordinates: [[121.3138137880111, 31.222734209584193], [121.31368496054789, 31.22269892861493], [121.31359212143276, 31.222671716047603], [121.31329576511813, 31.22257330934772], [121.31300426742108, 31.222471904248668], [121.3128180605421, 31.222402036304825], [121.31270410935788, 31.222358860164267], [121.31241992490824, 31.22224415622558], [121.31184154634633, 31.222011246578273], [121.31118899240573, 31.221743768177607], [121.31042465562703, 31.22143066433807], [121.31002353725495, 31.22126790317787], [121.30902236014174, 31.220854363021868], [121.3084837413223, 31.22063654365634], [121.30789477075938, 31.2203957636398], [121.30744573573287, 31.22021518669134], [121.30708655847288, 31.220084060944362], [121.3067214214899, 31.219962709724854], [121.3065132779155, 31.21989909606028], [121.30636007305627, 31.21985708250657], [121.30617898861769, 31.2198088718139], [121.30599817274347, 31.21976499814726], [121.30581249659741, 31.219724121353934], [121.30560813033233, 31.219681108634717], [121.30533581978456, 31.21963332926205], [121.30504673392136, 31.219586938160322], [121.30486780935153, 31.21956068994166], [121.30450238431771, 31.21951443264188], [121.30407849085341, 31.219476143251136], [121.30384894018549, 31.219459467522025], [121.30366460230138, 31.219448398522964], [121.30354386865848, 31.219442924194073], [121.30343559827635, 31.219438777051145], [121.30334653679412, 31.21943784438277], [121.30330214074006, 31.21943711289135], [121.30327290259345, 31.21943661458639], [121.30306799533187, 31.219436974678793], [121.30288933186623, 31.219439457089514], [121.30271365165777, 31.219440854288564], [121.3024570199789, 31.219453237259586], [121.30223180071168, 31.219472601113498], [121.30199412596971, 31.219499052454076]]
}, {
  type: 'LineString',
  coordinates: [[121.31619390913558, 31.223176821426208], [121.31590268161756, 31.22313887185018], [121.31558358703553, 31.22309554709013], [121.31533593960279, 31.223061582056644], [121.31520223345484, 31.22303987531432], [121.3150065580872, 31.223006081326993], [121.31470450432037, 31.222949168922568], [121.31447417771882, 31.22289916729533], [121.31427687600258, 31.22285345100395], [121.31408444322076, 31.222805546286764], [121.31405602777403, 31.22279828324532], [121.3138137880111, 31.222734209584193]]
}, {
  type: 'LineString',
  coordinates: [[121.32011073480385, 31.22373847544358], [121.31996810219147, 31.223714070031797], [121.31959136623976, 31.223654599085304], [121.31920839399764, 31.223596219105815], [121.31887062761055, 31.223546438193484], [121.31875803537919, 31.223530111011492], [121.31869551848827, 31.223521014724994], [121.31847250888528, 31.223488356009813], [121.3181304015462, 31.223437492929143], [121.31780156311777, 31.22339176163506], [121.31742969247028, 31.22333986472291], [121.31708732369738, 31.223293878218], [121.31670191210085, 31.22324580392966], [121.31619390913558, 31.223176821426208]]
}, {
  type: 'LineString',
  coordinates: [[121.33714883893256, 31.225777126518558], [121.33588245246128, 31.225846130953773], [121.33536168011229, 31.22585957435082], [121.33465388686888, 31.225856287873963], [121.33200193244883, 31.225746849311058], [121.33101430933587, 31.22566412932178]]
}, {
  type: 'LineString',
  coordinates: [[121.33101430933587, 31.22566412932178], [121.33026648324551, 31.225570913793657]]
}, {
  type: 'LineString',
  coordinates: [[121.31378509302023, 31.22284461159593], [121.31400080271901, 31.22290629641542], [121.31405601733528, 31.222920025937324], [121.31427361293196, 31.22297466008641], [121.31447038572712, 31.22302173674507], [121.3146308811209, 31.223055867725368], [121.31475754343336, 31.22308056688197], [121.315034155157, 31.22312994084335], [121.3152292917034, 31.2231637358176], [121.31550318935949, 31.22320496788801], [121.31617035284329, 31.223288843426545]]
}, {
  type: 'LineString',
  coordinates: [[121.31617035284329, 31.223288843426545], [121.31647429093178, 31.22332866752419], [121.31716715175565, 31.223418997418168], [121.31870363026957, 31.223634335939103], [121.31876777345603, 31.223643429118823], [121.31892501352662, 31.223665368332522], [121.31940596153765, 31.22373900411517], [121.32008988323055, 31.22384452552393]]
}, {
  type: 'LineString',
  coordinates: [[121.30210112411555, 31.21959251196456], [121.30159536614792, 31.219641817112677]]
}, {
  type: 'LineString',
  coordinates: [[121.33111530312412, 31.225766709646685], [121.33031817754787, 31.2256754765]]
}, {
  type: 'LineString',
  coordinates: [[121.33725455835666, 31.225771204142916], [121.33810849370798, 31.22569831651912]]
}, {
  type: 'LineString',
  coordinates: [[121.3410462688866, 31.225418307690386], [121.34015948650637, 31.225481188461686], [121.33948492925553, 31.22554830123222], [121.33890160133416, 31.225620940487577], [121.33810849370798, 31.22569831651912]]
}, {
  type: 'LineString',
  coordinates: [[121.3377632538259, 31.225825781294333], [121.33811336390312, 31.225804867681884]]
}, {
  type: 'LineString',
  coordinates: [[121.32008988323055, 31.22384452552393], [121.32040004135368, 31.223895447523365], [121.32091833127409, 31.223981223967783], [121.3214655741458, 31.224072901547682], [121.32194985086963, 31.22415993163309], [121.3226743943313, 31.22429782637348]]
}, {
  type: 'LineString',
  coordinates: [[121.32265885985407, 31.224181240946855], [121.32129237187256, 31.223930070838232], [121.32094811273876, 31.22387162837998], [121.3204985649447, 31.223798194472426], [121.32011073480385, 31.22373847544358]]
}, {
  type: 'LineString',
  coordinates: [[121.33031817754787, 31.2256754765], [121.32983208090877, 31.225611061704836], [121.32946399790552, 31.22555698827921], [121.32895679357168, 31.22547173554105], [121.32827773375163, 31.225350479145742], [121.32724250292591, 31.22514937360549], [121.32620890266536, 31.22495124670485], [121.32514039621442, 31.224745062833332], [121.32438372467706, 31.224606919876045], [121.32408869273657, 31.22455360124957], [121.32343640229261, 31.22443506913512], [121.32291657756929, 31.22434035152321], [121.3226743943313, 31.22429782637348]]
}, {
  type: 'LineString',
  coordinates: [[121.33026648324551, 31.225570913793657], [121.32984643682424, 31.22551423972692], [121.32890077945984, 31.225367721179673], [121.32848804136485, 31.225295573064482], [121.32641514710264, 31.224902594191406], [121.32559102953057, 31.224733893526675], [121.32414226893327, 31.224454954707653], [121.32319148474348, 31.224282440984982], [121.32265885985407, 31.224181240946855]]
}, {
  type: 'LineString',
  coordinates: [[121.30159536614792, 31.219641817112677], [121.30074344378104, 31.219767737593145], [121.3004150774021, 31.219817917159645], [121.30024777019061, 31.219839083438675], [121.29972664449683, 31.219903421576287], [121.2991692381493, 31.219957231174014], [121.29885683202501, 31.219972401192035], [121.2986952094425, 31.219977011047128]]
}, {
  type: 'LineString',
  coordinates: [[121.3015894161826, 31.219552619681348], [121.30124345194817, 31.219599316019238], [121.3008644630591, 31.2196550129015], [121.3004337573889, 31.219718652176713], [121.29992211395106, 31.219785414716796], [121.29953173938662, 31.21983135679946], [121.29923205847308, 31.219860330826688], [121.29891396344837, 31.219885546038064], [121.29867951768588, 31.21990166310758]]
}, {
  type: 'LineString',
  coordinates: [[121.2986952094425, 31.219977011047128], [121.2985636455642, 31.21998076035668], [121.29848946543714, 31.219983053783064]]
}, {
  type: 'LineString',
  coordinates: [[121.29867951768588, 31.21990166310758], [121.29856499890195, 31.219909721717958], [121.29848622794452, 31.21991337220601]]
}, {
  type: 'LineString',
  coordinates: [[121.29515414580783, 31.219194644845984], [121.29586377083805, 31.219509486798238], [121.29606721351556, 31.21959398549231], [121.29627198291932, 31.219675042810998], [121.29646070448177, 31.21974008316773], [121.2966106036402, 31.219787984665608], [121.29677790794435, 31.219833558194676], [121.29699874464066, 31.21988478024212], [121.29710849435469, 31.21990523944827], [121.29727044905037, 31.219932478864166], [121.297472542797, 31.21996081069966], [121.29760906812955, 31.219976626619662], [121.29773888719632, 31.219984437125547], [121.29783513407311, 31.219983607318827], [121.29807986127881, 31.219991335520238], [121.29834761169828, 31.21998762943206], [121.29836114441832, 31.219987067027304], [121.29848946543714, 31.219983053783064]]
}, {
  type: 'LineString',
  coordinates: [[121.29519719692136, 31.219136283120054], [121.29577357831204, 31.219387781064878], [121.29606623203698, 31.21951690361374], [121.29626954439466, 31.219597103718737], [121.29644659924953, 31.219659714343685], [121.29661932276466, 31.21971311581345], [121.29678798438972, 31.219758127343937], [121.29693064807694, 31.219791506663636], [121.29711718347714, 31.21982997074117], [121.29724495662276, 31.219854168113805], [121.29740495505445, 31.219877762063398], [121.29753733897529, 31.21989245556639], [121.29771276604757, 31.219908976299912], [121.29781699619778, 31.2199169390866], [121.29795344158153, 31.219922129263246], [121.29810071496922, 31.21992486216054], [121.29825448515945, 31.21992325582834], [121.29836250748708, 31.21991900696672], [121.29836873493383, 31.219918726665437], [121.29848622794452, 31.21991337220601]]
}, {
  type: 'LineString',
  coordinates: [[121.3372595592249, 31.225866030514073], [121.3377632538259, 31.225825781294333]]
}, {
  type: 'LineString',
  coordinates: [[121.33716165254688, 31.22587385756736], [121.3372595592249, 31.225866030514073]]
}];
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _index = _interopRequireDefault(require("../index"));

var _mock = _interopRequireDefault(require("./mock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _index.default)(_mock.default));
var data = [{
  type: 'LineString',
  coordinates: [[0.0, 0.0], [1.0, 1.0], [2.0, 2.0]]
}, {
  type: 'LineString',
  coordinates: [[2.0, 2.0], [3.0, 3.0]]
}];
var result = (0, _index.default)(data);
console.log(result);
},{"../index":"../index.js","./mock":"mock.js"}],"../../../../../../Program Files/nodejs/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50388" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../Program Files/nodejs/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map