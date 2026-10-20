const a = document.getElementById("email");
const addr = ["ping", "vitalii.io"].join("@");
a.href = "mailto:" + addr;
a.textContent = addr;
