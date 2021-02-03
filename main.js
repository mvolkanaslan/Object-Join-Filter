const table = document.getElementById("table");
const btn = document.getElementById("btn");
var carList = [
  { Id: 1, BrandID: 1, ColorID: 2, DailyPrice: 500, ModelYear: 2015, Description: "FOCUS 1.5 TDCI 120 BG" },
  { Id: 2, BrandID: 3, ColorID: 1, DailyPrice: 600, ModelYear: 2018, Description: "Clio 1.5 DCi Touch EDC" },
  { Id: 3, BrandID: 2, ColorID: 3, DailyPrice: 900, ModelYear: 2020, Description: "CLA AMG 200" },
  { Id: 4, BrandID: 1, ColorID: 1, DailyPrice: 700, ModelYear: 2019, Description: "A200 1.4 Style DCT" },
  { Id: 5, BrandID: 2, ColorID: 2, DailyPrice: 500, ModelYear: 2017, Description: "FIORINO 1.3 MultiJet 95 HP" },
];

var colors = [
  { ColorID: 1, colorName: "Red" },
  { ColorID: 2, colorName: "White" },
  { ColorID: 3, colorName: "Black" },
];

btn.addEventListener("click", () => {
  //create a new joined table by colorID property
  let joinedTable = carList.map((carObject) =>
    Object.assign(
      carObject,
      colors.find((color) => color.ColorID == carObject.ColorID)
    )
  );

  // ------ Total Table after Joined and ony some properties -----
  joinedTable.map((car) =>
    table.insertAdjacentHTML(
      "afterbegin",
      `Car Name : ${car.Description} - ModelYear : ${car.ModelYear} - Color : ${car.colorName} - Price : ${car.DailyPrice} <br>`
    )
  );

  //---------- Array Filter ----------------
  var tempList = carList
    .filter((c) => c.ModelYear >= 2018)
    .filter((_c) => _c.DailyPrice > 500)
    .filter((cc) => cc.BrandID == 3)
    .filter((__c) => {
      return __c.ColorID == 1 || __c.ColorID == 3;
    });
  tempList.map((car) =>
    table.insertAdjacentHTML(
      "afterend",
      "------- Filtered Table -------- <br>" +
        `Car Name : ${car.Description} - ModelYear : ${car.ModelYear} - Color : ${car.colorName} - Price : ${car.DailyPrice} <br>`
    )
  );
});
