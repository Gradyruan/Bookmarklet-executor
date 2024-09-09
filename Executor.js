/**
* @license MIT
* Copyright (c) Gradyruan 2024
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/Gradyruan/Blooket-Cheats/blob/main/LICENSE
*/

javascript:(function(){
  function executeScript() {
    try {
      const scriptCode = document.getElementById("xe-script-input").value;
      const result = eval(scriptCode);
      console.log("Script executed successfully!");
      console.log("Execution result:", result);
    } catch (error) {
      console.log("Error executing script: " + error.message);
    }
  }

  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "20px";
  container.style.right = "20px";
  container.style.backgroundColor = "black";
  container.style.color = "green";
  container.style.border = "2px solid green";
  container.style.padding = "10px";
  container.style.borderRadius = "10px";
  container.style.zIndex = "9999";

  const input = document.createElement("textarea");
  input.id = "xe-script-input";
  input.style.width = "200px";
  input.style.height = "100px";
  input.placeholder = "Enter your script here...";

  const executeButton = document.createElement("button");
  executeButton.textContent = "Execute";
  executeButton.style.backgroundColor = "green";
  executeButton.style.color = "black";
  executeButton.style.border = "none";
  executeButton.style.padding = "5px 10px";
  executeButton.style.marginTop = "5px";
  executeButton.style.cursor = "pointer";

  executeButton.addEventListener("click", executeScript);

  container.appendChild(input);
  container.appendChild(executeButton);

  document.body.appendChild(container);
})();
