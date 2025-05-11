// Yorum formunu localStorage'a kaydeder
document.addEventListener("DOMContentLoaded", function () {
  const yorumForm = document.getElementById("yorumForm");
  if (yorumForm) {
    yorumForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const ad = document.getElementById("ad").value;
      const email = document.getElementById("email").value;
      const yorum = document.getElementById("yorum").value;

      const yeniYorum = { ad, email, yorum };

      let yorumlar = JSON.parse(localStorage.getItem("yorumlar")) || [];
      yorumlar.push(yeniYorum);
      localStorage.setItem("yorumlar", JSON.stringify(yorumlar));

      alert("Yorumunuz başarıyla kaydedildi!");
      yorumForm.reset();
    });
  }
});
// Yorumları tabloya yazdırır
document.addEventListener("DOMContentLoaded", function () {
  const yorumTablosu = document.getElementById("yorumTablosu");
  if (yorumTablosu) {
    const tbody = yorumTablosu.querySelector("tbody");
    const yorumlar = JSON.parse(localStorage.getItem("yorumlar")) || [];

    yorumlar.forEach(function (yorum) {
      const satir = document.createElement("tr");

      const adTd = document.createElement("td");
      adTd.textContent = yorum.ad;

      const emailTd = document.createElement("td");
      emailTd.textContent = yorum.email;

      const yorumTd = document.createElement("td");
      yorumTd.textContent = yorum.yorum;

      satir.appendChild(adTd);
      satir.appendChild(emailTd);
      satir.appendChild(yorumTd);

      tbody.appendChild(satir);
    });
  }
});
// Kayıt formunu localStorage'a kaydeder
document.addEventListener("DOMContentLoaded", function () {
  const kayitForm = document.getElementById("kayitForm");
  if (kayitForm) {
    kayitForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const ad = document.getElementById("ad").value;
      const soyad = document.getElementById("soyad").value;
      const dogum = document.getElementById("dogum").value;
      const cinsiyet = document.getElementById("cinsiyet").value;

      const yeniKayit = { ad, soyad, dogum, cinsiyet };

      let kayitlar = JSON.parse(localStorage.getItem("kayitlar")) || [];
      kayitlar.push(yeniKayit);
      localStorage.setItem("kayitlar", JSON.stringify(kayitlar));

      alert("Kayıt başarıyla tamamlandı!");
      kayitForm.reset();
    });
  }
});
// Kayıtları tabloya yazdırır
document.addEventListener("DOMContentLoaded", function () {
  const kayitTablosu = document.getElementById("kayitTablosu");
  if (kayitTablosu) {
    const tbody = kayitTablosu.querySelector("tbody");
    const kayitlar = JSON.parse(localStorage.getItem("kayitlar")) || [];

    kayitlar.forEach(function (k) {
      const satir = document.createElement("tr");

      const adTd = document.createElement("td");
      adTd.textContent = k.ad;

      const soyadTd = document.createElement("td");
      soyadTd.textContent = k.soyad;

      const dogumTd = document.createElement("td");
      dogumTd.textContent = k.dogum;

      const cinsiyetTd = document.createElement("td");
      cinsiyetTd.textContent = k.cinsiyet;

      satir.appendChild(adTd);
      satir.appendChild(soyadTd);
      satir.appendChild(dogumTd);
      satir.appendChild(cinsiyetTd);

      tbody.appendChild(satir);
    });
  }
});
// Sipariş formunu localStorage'a kaydeder
document.addEventListener("DOMContentLoaded", function () {
  const siparisForm = document.getElementById("siparisForm");
  if (siparisForm) {
    siparisForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const isim = document.getElementById("isim").value;
      const urun = document.getElementById("urun").value;
      const adet = document.getElementById("adet").value;

      const yeniSiparis = { isim, urun, adet };

      let siparisler = JSON.parse(localStorage.getItem("siparisler")) || [];
      siparisler.push(yeniSiparis);
      localStorage.setItem("siparisler", JSON.stringify(siparisler));

      alert("Sipariş başarıyla kaydedildi!");
      siparisForm.reset();
    });
  }
});
// Siparişleri tabloya yazdırır
document.addEventListener("DOMContentLoaded", function () {
  const siparisTablosu = document.getElementById("siparisTablosu");
  if (siparisTablosu) {
    const tbody = siparisTablosu.querySelector("tbody");
    const siparisler = JSON.parse(localStorage.getItem("siparisler")) || [];

    siparisler.forEach(function (s) {
      const satir = document.createElement("tr");

      const isimTd = document.createElement("td");
      isimTd.textContent = s.isim;

      const urunTd = document.createElement("td");
      urunTd.textContent = s.urun;

      const adetTd = document.createElement("td");
      adetTd.textContent = s.adet;

      satir.appendChild(isimTd);
      satir.appendChild(urunTd);
      satir.appendChild(adetTd);

      tbody.appendChild(satir);
    });
  }
});
// İletişim formunu kaydeder ve teşekkür mesajı gösterir
document.addEventListener("DOMContentLoaded", function () {
  const iletisimForm = document.getElementById("iletisimForm");
  if (iletisimForm) {
    iletisimForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const isim = document.getElementById("isim").value;
      const email = document.getElementById("email").value;
      const mesaj = document.getElementById("mesaj").value;

      // İletişim form verilerini kaydetme (localStorage'da örnek olarak saklanabilir)
      const iletisimVerisi = { isim, email, mesaj };
      localStorage.setItem("iletisimVerisi", JSON.stringify(iletisimVerisi));

      alert("Mesajınız başarıyla gönderildi. Teşekkür ederiz!");

      // Formu sıfırlama
      iletisimForm.reset();
    });
  }
});
