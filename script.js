// Đảm bảo DOM đã tải xong trước khi thực thi các sự kiện
document.addEventListener("DOMContentLoaded", function() {
    // Sale: Ẩn top-header khi click vào nút close
    const closeBtn = document.querySelector(".close-btn");
    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
            const topHeader = document.querySelector(".top-header");
            if (topHeader) {
                topHeader.style.display = "none";
            }
        });
    }

    // Header: Thông báo khi menu đã tải xong
    console.log("Menu đã tải xong!");

    // Thêm hiệu ứng hover cho ảnh trong card, feature, feature-item, aside-bottom và image-gallery
    const images = document.querySelectorAll('.card img, .feature-image img, .feature-item img, .aside-bottom .card img, .image-item img');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.3s ease';
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Thêm hiệu ứng click cho các mục trong roadmap-left
    const listItems = document.querySelectorAll('.clickable-list li');
    const infoNumbers = document.querySelectorAll('.info-box .info-number');
    const infoContents = document.querySelectorAll('.info-box .info-content');

    listItems.forEach(item => {
        item.addEventListener('click', function() {
            // Xóa class active khỏi tất cả các mục
            listItems.forEach(li => li.classList.remove('active'));
            // Thêm class active cho mục được click
            this.classList.add('active');

            // Lấy data-index của mục được click
            const index = this.getAttribute('data-index');

            // Ẩn tất cả các số và nội dung
            infoNumbers.forEach(num => num.style.display = 'none');
            infoContents.forEach(content => content.style.display = 'none');

            // Hiển thị số và nội dung tương ứng với data-bundle
            const targetNumber = document.querySelector(`.info-number[data-bundle="${index}"]`);
            const targetContent = document.querySelector(`.info-content[data-content="${index}"]`);
            if (targetNumber) targetNumber.style.display = 'block';
            if (targetContent) targetContent.style.display = 'block';
        });
    });
});

// Chức năng lướt slider
function scrollSlider(direction) {
    const slider = document.querySelector('.slider');
    if (slider) {
        const scrollAmount = 220; // Độ rộng của mỗi feature-item + margin-right
        slider.scrollLeft += direction * scrollAmount;
    }
}