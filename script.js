(function() {
  document.getElementById("ex1_button").addEventListener("click",
    function() {
      const numbers = Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
      document.getElementById("ex1_content").textContent = numbers;
    }
  );

  const content = document.getElementById("ex2_content");
  const input = document.getElementById("ex2_text")
  input.addEventListener("input",
    function() {
      const value = input.value;
      if (value.length != 9) {
        content.textContent = "Dlugosc musi byc rowna 9";
      } else if (/[a-zA-Z]/.test(value)) {
        content.textContent = "Nie moze zawierac liter";
      } else if (/[^0-9]/.test(value)) {
        content.textContent = "Nie moze zawierac znakow specjalnych";
      } else {
        content.textContent = "git";
      }
    }
  );

})();