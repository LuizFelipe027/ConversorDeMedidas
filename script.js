function converter() {
    const valorDe = document.getElementById("valorDe").value;
    
    const de = document.getElementById("de").value;
    const para = document.getElementById("para").value;
    let resultado;
  
    if (de === "mm") {
      if (para === "mm") {
        resultado = valorDe;
      } else if (para === "cm") {
        resultado = valorDe / 10;
      } else if (para === "m") {
        resultado = valorDe / 1000;
      } else if (para === "km") {
        resultado = valorDe / 1000000;
      }
    } else if (de === "cm") {
      if (para === "mm") {
        resultado = valorDe * 10;
      } else if (para === "cm") {
        resultado = valorDe;
      } else if (para === "m") {
        resultado = valorDe / 100;
      } else if (para === "km") {
        resultado = valorDe / 100000;
      }
    } else if (de === "m") {
      if (para === "mm") {
        resultado = valorDe * 1000;
      } else if (para === "cm") {
        resultado = valorDe * 100;
      } else if (para === "m") {
        resultado = valorDe;
      } else if (para === "km") {
        resultado = valorDe / 1000;
      }
    } else if (de === "km") {
      if (para === "mm") {
        resultado = valorDe * 1000000;
      } else if (para === "cm") {
        resultado = valorDe * 100000;
      } else if (para === "m") {
        resultado = valorDe * 1000;
      } else if (para === "km") {
        resultado = valorDe;
      }
    }
  
    document.getElementById("valorPara").value = resultado;
  }
  