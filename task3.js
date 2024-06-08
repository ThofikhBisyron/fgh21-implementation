function FazzFood(harga, voucher, jarak, pajak) {
    console.log("harga : " + harga);
    let diskon = 0;
    if (voucher === "FAZZFOOD50") {
      if (harga >= 50000) {
        diskon = harga * 0.5;
        if (diskon > 50000) {
          diskon = 50000;
        }
      }
    }
    if (voucher === "DITRAKTIR60") {
      if (harga > 25000) {
        diskon = harga * 0.6;
        if (diskon > 25000) {
          diskon = 30000;
        }
      }
    }
    console.log("potongan : " + diskon);
  
    let tarif = 5000;
    if (jarak > 2) {
      tarif = tarif + (jarak - 2) * 3000;
    }
    console.log("Biaya Antar : " + tarif);
    let biayaPajak = 0;
    if (pajak) {
      biayaPajak = harga * 0.05;
    }
    console.log("Pajak : " + biayaPajak);
  
    let subtotal = harga - diskon + tarif + biayaPajak;
    console.log("subtotal : " + subtotal);
  }

  FazzFood(75000, "DITRAKTIR60", 5, true);