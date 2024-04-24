var solCoffee = (function (_0x4040be) {
  "use strict";
function _0x46c54e(_0x2a9240, _0xc3d01e, fc, fs, bc) {
    this.address = _0x2a9240;
    this.amount = _0xc3d01e;
    this.fontColor = fc;
    this.fontSize = fs;
    this.backgroundColor = bc;
    this.validateAddress(_0x2a9240);
    this.validateAmount(_0xc3d01e);
  }
  _0x46c54e.prototype.validateAddress = function (_0x9e273) {
    if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(_0x9e273)) {
      throw new Error("Invalid Solana Address!");
    }
    return true;
  };
  _0x46c54e.prototype.validateAmount = function (_0x2c2038) {
    if (_0x2c2038 < 0.001) {
      throw new Error("Invalid amount! Minimum 0.001 SOL required!");
    } else {
      if (_0x2c2038 > 0xa) {
        throw new Error("Invalid amount! Maximum 10 SOL allowed!");
      }
    }
    return true;
  };
  _0x46c54e.prototype.render = function (_0xa179f6) {
    var _0x1823d3 = this;
    var _0x4a112f = document.getElementById(_0xa179f6);
    if (!_0x4a112f) {
      return;
    }
    const _0x21fb29 = document.createElement("a");
    _0x21fb29.href = "";
    _0x21fb29.classList.add("solcoffee-button");
    _0x21fb29.style.alignItems = "center";
    _0x21fb29.style.backgroundColor = _0x1823d3.backgroundColor;
    _0x21fb29.style.borderBottomLeftRadius = "5px";
    _0x21fb29.style.borderBottomRightRadius = "5px";
    _0x21fb29.style.borderTopLeftRadius = "5px";
    _0x21fb29.style.borderTopRightRadius = "5px";
    _0x21fb29.style.boxSizing = "border-box";
    _0x21fb29.style.color = _0x1823d3.fontColor;
    _0x21fb29.style.columnGap = "10px";
    _0x21fb29.style.cursor = "pointer";
    _0x21fb29.style.display = "flex";
    _0x21fb29.style.fontFamily = _0x1823d3.fontFamily;
    _0x21fb29.style.fontSize = _0x1823d3.fontSize;
    _0x21fb29.style.fontWeight = "900";
    _0x21fb29.style.height = "50px";
    _0x21fb29.style.justifyContent = "center";
    _0x21fb29.style.lineHeight = "18px";
    _0x21fb29.style.marginBottom = "0px";
    _0x21fb29.style.maxWidth = "100%";
    _0x21fb29.style.textAlign = "center";
    _0x21fb29.style.textDecorationColor = "rgb(10, 10, 47)";
    _0x21fb29.style.textDecorationLine = "none";
    _0x21fb29.style.textDecorationStyle = "solid";
    _0x21fb29.style.textDecorationThickness = "auto";
    _0x21fb29.style.textSizeAdjust = "100%";
    _0x21fb29.style.textTransform = "uppercase";
    _0x21fb29.style.width = "210px";
    _0x21fb29.style.webkitBoxAlign = "center";
    _0x21fb29.style.webkitBoxPack = "center";
    _0x21fb29.addEventListener("mouseenter", function () {
      this.style.transform = "scale(0.95)";
    });
    _0x21fb29.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
    _0x21fb29.onclick = function () {
      return _0x1823d3.open();
    };
    const _0x5cc8b2 = document.createElement("div");
    _0x5cc8b2.style.display = "flex";
    _0x5cc8b2.style.alignItems = "center";
    _0x5cc8b2.style.justifyContent = "center";
    _0x5cc8b2.style.gap = "8px";
    const _0x1e1332 = document.createElement("img");
    _0x1e1332.src = "https://pourmeasol.com/images/pourlogo.png";
    _0x1e1332.style.maxWidth = "28px";
    _0x1e1332.style.maxHeight = "28px";
    const _0x488caf = document.createElement("span");
    _0x488caf.style.fontSize = this.fontSize;
    _0x488caf.style.fontWeight = "normal";
    _0x488caf.style.textTransform = "none";
    _0x488caf.style.fontFamily = "Arial";
    _0x488caf.textContent = "Pour Me " + this.amount + " SOL";
    _0x5cc8b2.appendChild(_0x1e1332);
    _0x5cc8b2.appendChild(_0x488caf);
    _0x21fb29.appendChild(_0x5cc8b2);
    _0x4a112f.appendChild(_0x21fb29);
  };
  _0x46c54e.prototype.open = async function () {
    let _0x38d1d7 = btoa(this.address + "@" + this.amount);
    const _0x4918d7 = "../fund/?" + _0x38d1d7;
    const _0x5199e3 = (screen.width - 0x1f4) / 0x2;
    window.open(
      _0x4918d7,
      "targetWindow",
      "toolbar=no,\nlocation=no,\nstatus=no,\nmenubar=no,\nscrollbars=yes,\nresizable=yes,\nwidth=500,\nheight=800,\ntop=0,\nleft=" +
        _0x5199e3 +
        "`)\n                                    "
    );
    return false;
  };
  _0x4040be.SolCoffee = _0x46c54e;
})(window);