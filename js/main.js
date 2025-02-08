const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true, // Center the active slide
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000, // Delay between transitions in milliseconds (3000ms = 3 seconds)
    disableOnInteraction: false, // Autoplay will not be disabled after interactions
},
  breakpoints: {
      320: {
          slidesPerView: 1,
      },
      577: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      }
  }
});
// SideBar Toggle
$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".left").show();
  });
  $(".hidesidebar").click(function () {
    $(".left").hide();
  });
});

document.querySelector(".chat-name").addEventListener("click", function () {
  document.querySelector(".chats").style.display = "none";
  document.querySelector(".chats-box").style.display = "block";
});
document.querySelector(".fa-xmark").addEventListener("click", function () {
  document.querySelector(".chats-box").style.display = "none";
  document.querySelector(".chats").style.display = "block";
});




document.getElementById('pay-monthly-radio').addEventListener('change', function() {
  const monthlyDiv = document.getElementById('pay-monthly-div');
  const annuallyDiv = document.getElementById('pay-annually-div');

  if (this.checked) {
      monthlyDiv.classList.add('border-highlight');
      annuallyDiv.classList.remove('border-highlight');
  }
});

document.getElementById('pay-annually-radio').addEventListener('change', function() {
  const monthlyDiv = document.getElementById('pay-monthly-div');
  const annuallyDiv = document.getElementById('pay-annually-div');

  if (this.checked) {
      annuallyDiv.classList.add('border-highlight');
      monthlyDiv.classList.remove('border-highlight');
  }
});



function handleImageUpload(event, type) {
  const input = event.target;
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
      const preview = document.getElementById(`${type}-preview`);
      const label = document.getElementById(`${type}-label`);
      const positionDrop = document.getElementById(`${type}-position-drop`);
      preview.src = e.target.result;
      preview.classList.remove('d-none');
      label.style.display = 'none';
      positionDrop.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function removeImage(type) {
  const preview = document.getElementById(`${type}-preview`);
  const label = document.getElementById(`${type}-label`);
  const positionDrop = document.getElementById(`${type}-position-drop`);
  preview.src = '';
  preview.classList.add('d-none');
  label.style.display = 'block';
  positionDrop.style.display = 'none';
}