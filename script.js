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

  const ex3Element = document.getElementById("ex3_element");
  const ex3One = document.getElementById("ex3_one");
  const ex3Two = document.getElementById("ex3_two");

  ex3Element.setAttribute('draggable', 'true');

  ex3Element.addEventListener('dragstart',
    function(e) {
      e.dataTransfer.setData("text/plain", e.target.id);
    }
  );

  ex3Two.addEventListener("dragover",
    function(e) {
      e.preventDefault();
    }
  );

  ex3Two.addEventListener("drop",
    function(e) {
      e.preventDefault();
      const id = e.dataTransfer.getData("text/plain");
      const element = document.getElementById(id);
      ex3Two.appendChild(element);
    }
  );

  ex3One.addEventListener("dragover",
    function(e) {
      e.preventDefault();
    }
  )

  ex3One.addEventListener("drop",
    function(e) {
      e.preventDefault();
      const id = e.dataTransfer.getData("text/plain");
      const element = document.getElementById(id);
      ex3One.appendChild(element);
    }
  );

})();