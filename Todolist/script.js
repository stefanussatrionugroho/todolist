function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}