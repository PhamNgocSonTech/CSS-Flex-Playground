const content = document.getElementById("content");
const buttons = document.querySelectorAll(".switcher button");
let currentVer = null;

async function loadVersion(ver) {
  if (ver === currentVer) return;
  content.style.opacity = 0; // hiệu ứng mờ dần khi chuyển

  // cập nhật trạng thái nút
  buttons.forEach((b) => b.classList.remove("active"));
  document.querySelector(`[data-ver="${ver}"]`).classList.add("active");

  // fetch HTML mới
  const html = await fetch(`flex-${ver}.html`).then((res) => res.text());

  // xóa CSS cũ
  const oldStyle = document.getElementById("version-style");
  if (oldStyle) oldStyle.remove();

  // thêm CSS mới
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = `./assets/css/styles-${ver}.css`;
  styleLink.id = "version-style";
  document.head.appendChild(styleLink);

  // thay nội dung
  content.innerHTML = html;

  // chuyển mượt
  setTimeout(() => {
    content.innerHTML = html;
    content.style.opacity = 1;

    // Tìm script trong html mới
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const scripts = tempDiv.querySelectorAll("script[src]");

    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      newScript.src = oldScript.src;
      newScript.defer = true;
      document.body.appendChild(newScript);
    });
  }, 300);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => loadVersion(btn.dataset.ver));
});

// load mặc định V1
loadVersion("v1");
