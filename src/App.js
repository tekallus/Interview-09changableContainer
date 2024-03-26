import React, { useState } from "react";

//bu sorunun cozumu icin belirli bir oranda büyüyüp küçülen bir buton bileşeninin container ve button için bir degiskenden stiller tanımlayalim.
//buyuyup kuculen bir container icin  stilinin display özelliği flex olarak ayarlanır, bu da içeriğin yatay olarak ortalanmasını sağlar.
// button stilinin arka plan rengi, kenarlık yarıçapı, rengi ve geçiş efekti gibi özellikleri kafamiza gore tanimlayalim.


const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: 30
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    transition: "width 0.5s, height 0.5s"
  }
};

// su an ekranin ortasind boton rengi beyaz arkaplan rengi mavi olan bir container olusturduk.


const GrowingButton = () => {
  const [index, setIndex] = useState(0);// (0) baslangic index icin 100 ve buyut yazacak.
  const sizes = [100,200, 400, 800, 1600,800,400,200,100]; // Farklı boyutlar için bir dizi tanımlayalım
  const texts = ["Büyüt","Biraz Daha Büyüt", "Daha da Büyüt", "En Büyük", "Küçült", "Biraz Daha Küçült", "Daha da Küçült","En Küçük", "Büyüt"]; // Her boyut için farklı metinler

  //Bu kod bloğu, GrowingButton adında bir bileşen tanımladik.
  // Bileşen, useState hook'u ile index adında bir değişken ve setIndex adında bir fonksiyon oluşturur. 
  //index değişkeni, boyut dizisindeki mevcut indeksi takip eder. 
  //sizes dizisi, butonun alabileceği farklı boyutları içerecek sekilde ayarladik. burada daha farkli ayarlamalar yapilabilir
  //texts dizisi ise her boyut için farklı metinler tanimlamak icin.

  const handleClick = () => {
    setIndex((index + 1) % sizes.length); // en can alici nokta Dizi boyutuna göre indeksi güncelleyelim. index değeri 5 ise, 6 eklenir ve 0 olur (dizinin sonuna ulaştığından, modül işlemi 0'ı döndürür).
  };

  const buttonText = texts[index]; // Mevcut indekse göre metni seçelim

  return (
    <button
      style={{
        ...styles.button,
        width: `${sizes[index]}px`,
        height: `${sizes[index]}px`,
      }}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

function App() {
  return (
    <div style={styles.container}>
      <GrowingButton />
    </div>
  );
}

export default App;
