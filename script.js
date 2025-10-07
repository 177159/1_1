(function() {
  document.getElementById("ex1_button").addEventListener("click",
    function() {
      const numbers = Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
      document.getElementById("ex1_content").textContent = numbers;
    }
  );
})();