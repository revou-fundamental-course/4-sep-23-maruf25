// Mendapatkan ID untuk button
const btnKeliling = document.getElementById("btnKeliling");
const btnLuas = document.getElementById("btnLuas");
const hitung = document.getElementById("calculate");
const reset = document.getElementById("reset");

// Mendapatkan ID untuk perubahan text Component
const titleContent = document.getElementById("title-content");
const rumus = document.getElementById("rumus");
const keterangan = document.getElementById("keterangan");
const label = document.querySelector("label");
const errorText = document.getElementById("errorText");
const result = document.getElementById("result");

let selected = "keliling";
const rumusKeliling = "K = 4 x S";
const rumusLuas = "L = S x S";
const errorMessage = "Sisi tidak boleh kosong atau bernilai kurang dari sama dengan 0!";

// Fungsi update komponen
function updateView() {
  reset.click();
  if (selected === "keliling") {
    btnKeliling.classList.add("active"); // Merubah btn keliling menjadi tidak active
    btnLuas.classList.remove("active"); //Merubah btn luas menjadi active
    titleContent.textContent = "Keliling Persegi"; // Merubah title content
    rumus.textContent = rumusKeliling; // Merubah rumus di content
    keterangan.textContent = "K = Keliling"; // Merubah keterangan di content
    label.textContent = "Hitung Keliling Persegi"; // Merubah tulisan label
  } else if (selected === "luas") {
    btnLuas.classList.add("active"); //Merubah btn luas menjadi active
    btnKeliling.classList.remove("active"); // Merubah btn keliling menjadi tidak active
    titleContent.textContent = "Luas Persegi"; // Merubah title content
    rumus.textContent = rumusLuas; // Merubah rumus di content
    keterangan.textContent = "L = Luas"; // Merubah keterangan di content
    label.textContent = "Hitung Luas Persegi"; // Merubah tulisan label
  }
}

// Fungsi fungsi pada button

btnKeliling.addEventListener("click", () => {
  selected = "keliling";
  updateView();
});

btnLuas.addEventListener("click", () => {
  selected = "luas";
  updateView();
});

// Hitung
hitung.addEventListener("click", () => {
  if (selected === "keliling") {
    const sisi = parseInt(document.getElementById("sisi").value);
    if (isNaN(sisi) || sisi <= 0) {
      document.getElementById("sisi").classList.add("error");
      errorText.textContent = errorMessage;
      result.textContent = "";
    } else {
      const keliling = 4 * sisi;
      result.innerHTML = "";
      const paragraph1 = document.createElement("p");
      paragraph1.textContent = rumusKeliling;

      const paragraph2 = document.createElement("p");
      paragraph2.textContent = `K = 4 x ${sisi}`;

      const paragraph3 = document.createElement("p");
      paragraph3.textContent = `K = ${keliling}`;

      result.appendChild(paragraph1);
      result.appendChild(paragraph2);
      result.appendChild(paragraph3);

      errorText.textContent = "";
      document.getElementById("sisi").classList.remove("error");
    }
  } else if (selected === "luas") {
    const sisi = parseInt(document.getElementById("sisi").value);
    if (isNaN(sisi) || sisi <= 0) {
      document.getElementById("sisi").classList.add("error");
      errorText.textContent = errorMessage;
      result.textContent = "";
    } else {
      const luas = sisi * sisi;
      result.innerHTML = "";
      const paragraph1 = document.createElement("p");
      paragraph1.textContent = "L = S X S";

      const paragraph2 = document.createElement("p");
      paragraph2.textContent = `L = ${sisi} x ${sisi}`;

      const paragraph3 = document.createElement("p");
      paragraph3.textContent = `L = ${luas}`;

      result.appendChild(paragraph1);
      result.appendChild(paragraph2);
      result.appendChild(paragraph3);

      errorText.textContent = "";
      document.getElementById("sisi").classList.remove("error");
    }
  }
});

// Reset
reset.addEventListener("click", () => {
  document.getElementById("sisi").value = "";
  errorText.textContent = "";
  result.textContent = "";
  document.getElementById("sisi").classList.remove("error");
});
