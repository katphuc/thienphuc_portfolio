// Lắng nghe sự kiện nhấp vào từng mốc thời gian
document.querySelectorAll(".timeline-item-content").forEach((item, index) => {
  item.addEventListener("click", () => {
    // Ẩn tất cả các pop-up khác trước khi mở pop-up hiện tại
    document.querySelectorAll(".popup-detail").forEach((popup) => {
      popup.style.display = "none";
    });
    // Hiển thị pop-up tương ứng với mốc thời gian được nhấp
    document.querySelectorAll(".popup-detail")[index].style.display = "block";
  });
});

// Đóng pop-up khi nhấp bên ngoài nội dung
window.addEventListener("click", (event) => {
  // Kiểm tra xem mục được nhấp không phải là nội dung của pop-up
  if (
    !event.target.closest(".popup-detail") &&
    !event.target.closest(".timeline-item-content")
  ) {
    document.querySelectorAll(".popup-detail").forEach((popup) => {
      popup.style.display = "none";
    });
  }
});
// Hàm đóng pop-up
function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}
