const ORDER_EMAIL = "orders@examplewebsite142.com";

document.addEventListener("DOMContentLoaded", () => {
  const orderContainer = document.getElementById("shirtOrder");
  if (!orderContainer) return;

  const shirtName = orderContainer.dataset.shirtName || "Don't Be Late Tee";
  const shirtPrice = Number(orderContainer.dataset.shirtPrice || 499);
  const sizeButtons = orderContainer.querySelectorAll(".sizes");
  const minusBtn = orderContainer.querySelector(".qty-minus");
  const plusBtn = orderContainer.querySelector(".qty-plus");
  const qtyText = orderContainer.querySelector(".qty-count");
  const orderLink = document.getElementById("orderLink");

  let qty = 1;

  sizeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      sizeButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      updateOrderLink();
    });
  });

  if (minusBtn) {
    minusBtn.addEventListener("click", () => {
      if (qty > 1) {
        qty -= 1;
        qtyText.textContent = String(qty);
        updateOrderLink();
      }
    });
  }

  if (plusBtn) {
    plusBtn.addEventListener("click", () => {
      qty += 1;
      qtyText.textContent = String(qty);
      updateOrderLink();
    });
  }

  function updateOrderLink() {
    const activeSize = orderContainer.querySelector(".sizes.active");
    const size = activeSize ? activeSize.textContent.trim() : "2XL";
    const total = shirtPrice * qty;

    const subject = encodeURIComponent(`Order: ${shirtName} (${size} x${qty})`);
    const body = encodeURIComponent(
      `Shirt: ${shirtName}\nSize: ${size}\nQuantity: ${qty}\nTotal: Php ${total.toFixed(2)}`
    );

    if (orderLink) {
      orderLink.href = `mailto:${ORDER_EMAIL}?subject=${subject}&body=${body}`;
    }
  }

  updateOrderLink();
});