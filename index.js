let ol = document.querySelector("ol");
let amount = document.getElementById("amount");
let type = document.getElementById("type");

document.getElementById("submit").addEventListener(
  "click",
  (getData = async () => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${amount.value}&type=${type.value}`
    );
    const data = await response.json();
    if (data) {
      ol.innerHTML = "";
      data.results.map((result) => {
        const { category, question, correct_answer } = result;
        li = document.createElement("li");
        ol.appendChild(li);
        li.innerHTML += `<p class="category">${category}:</p> ${question} <p class="p-top">${correct_answer}</p>`;
      });
    }
  })
);

getData()
