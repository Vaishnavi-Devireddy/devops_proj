function sendMessage() {
  const input = document.getElementById("messageInput");
  const chatBox = document.getElementById("chatBox");

  if (input.value.trim() === "") return;

  const message = document.createElement("div");
  message.className = "message";
  message.innerText = input.value;

  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;

  input.value = "";
}
