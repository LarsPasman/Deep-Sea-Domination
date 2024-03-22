function SharkLevels(draggedAnimal) {
  for (let k = 0; k < sharks.length; i++) {
    if (sharks[k] === draggedAnimal) {
      if (sharks[k].level === 2) {
        sharks[k].img = vis1;
        sharks[k].width = 85;
        sharks[k].height = 75;
        coinsPerSecond += 1;
      } else if (sharks[k].level === 3) {
        sharks[k].img = zeepaard;
        sharks[k].width = 65;
        sharks[k].height = 90;
        coinsPerSecond += 2;
      } else if (sharks[k].level === 4) {
        sharks[k].img = kogelvis;
        sharks[k].width = 100;
        sharks[k].height = 85;
        coinsPerSecond += 4;
      } else if (sharks[k].level === 5) {
        sharks[k].img = rog;
        sharks[k].width = 110;
        sharks[k].height = 130;
        coinsPerSecond += 8;
      } else if (sharks[k].level === 6) {
        sharks[k].img = tonijn;
        sharks[k].width = 160;
        sharks[k].height = 120;
        coinsPerSecond += 16;
      } else if (sharks[k].level === 7) {
        sharks[k].img = dolfijn;
        sharks[k].width = 135;
        sharks[k].height = 180;
        coinsPerSecond += 32;

      } else if (sharks[k].level === 8) {
        sharks[k].img = haai;
        sharks[k].width = 200;
        sharks[k].height = 200;
        coinsPerSecond += 64;
      }
    }
  }
}