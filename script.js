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
    function startCountdown() {
        const countdown = setInterval(() => {
            let days = parseInt(document.querySelector('.count-date').textContent);
            let hours = parseInt(document.querySelector('.count-hours').textContent);
            let minutes = parseInt(document.querySelector('.count-minutes').textContent);
            let seconds = parseInt(document.querySelector('.count-seconds').textContent);
    
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                seconds = 59;
                minutes--;
            } else if (hours > 0) {
                seconds = 59;
                minutes = 59;
                hours--;
            } else if (days > 0) {
                seconds = 59;
                minutes = 59;
                hours = 23;
                days--;
            } else {
                clearInterval(countdown);
                return;
            }
    
            document.querySelector('.count-date').textContent = days.toString().padStart(2, '0');
            document.querySelector('.count-hours').textContent = hours.toString().padStart(2, '0');
            document.querySelector('.count-minutes').textContent = minutes.toString().padStart(2, '0');
            document.querySelector('.count-seconds').textContent = seconds.toString().padStart(2, '0');
        }, 1000);
    }
    
    // Start the countdown when the page loads
    window.onload = startCountdown;

    // Header: Thông báo khi menu đã tải xong
    console.log("Menu đã tải xong!");

    function toggleMenu() {
        document.querySelector('.main-nav__menu').classList.toggle('active');
      }
      

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
    const infoContents = document.querySelectorAll('.info-box .info-content span'); // Sửa để chọn span thay vì toàn bộ .info-content

    listItems.forEach(item => {
        item.addEventListener('click', function() {
            // Xóa class active khỏi tất cả các mục
            listItems.forEach(li => li.classList.remove('active'));
            infoNumbers.forEach(num => num.classList.remove('active'));
            infoContents.forEach(content => content.classList.remove('active'));

            // Thêm class active cho mục được click
            this.classList.add('active');

            // Lấy data-index của mục được click
            const index = this.getAttribute('data-index');

            // Hiển thị số và nội dung tương ứng với data-bundle và data-content
            const targetNumber = document.querySelector(`.info-number[data-bundle="${index}"]`);
            const targetContent = document.querySelector(`.info-content span[data-content="${index}"]`);
            if (targetNumber) targetNumber.classList.add('active');
            if (targetContent) targetContent.classList.add('active');
        });
    });

    // Ẩn nội dung khi click ra ngoài
    document.addEventListener('click', function(event) {
        const clickedInsideRoadmap = event.target.closest('.clickable-list');
        if (!clickedInsideRoadmap) {
            listItems.forEach(li => li.classList.remove('active'));
            infoNumbers.forEach(num => num.classList.remove('active'));
            infoContents.forEach(content => content.classList.remove('active'));
        }
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
$(document).ready(function(){
    $('.owl-carousel-curved').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });
});