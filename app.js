// Elementleri seçiyoruz
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Görev ekleme olayı
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Yeni li öğesi oluştur
    const li = document.createElement("li");
    li.textContent = taskText;

    // Tamamlama (üstü çizme) özelliği
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });
  
      // Silme butonu oluştur
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.style.border = "none";
      deleteBtn.style.background = "transparent";
      deleteBtn.style.cursor = "pointer";
  
      // Silme olayını ekle
      deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // li'ye tıklanmış sayılmasın
        li.remove();
      });
  
      // li'ye butonu ekle
      li.appendChild(deleteBtn);

    // Listeye ekle
    taskList.appendChild(li);

    // Input'u temizle
    taskInput.value = "";
  }
});

