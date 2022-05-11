const emailFormCollector = document.getElementById("email-collector");
const container = document.querySelector(".container");
const ctaSection = document.getElementById("cta-section");
const registerBtn = document.querySelector(".btn-hero");
const exitBtn = document.querySelector(".exit-btn");
const exitIcon = document.querySelector(".exit-icon");

const toggleLayout = function () {
  container.classList.toggle("transition");
};
registerBtn.addEventListener("click", toggleLayout);
exitBtn.addEventListener("click", toggleLayout);

emailFormCollector.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailFormData = new FormData(event.target);
  const userFirstName = emailFormData.get("firstName");
  const email = emailFormData.get("email");

  const updateHtmlContent = `<h2>Congratulations ${userFirstName} </h2>
  <p class="cta-subtitle">You are on your way to becoming<br>a BBQ Master!</p>
  <p class="privacy-info">Further information will be sent to ${email}</p>
`;
  ctaSection.innerHTML = updateHtmlContent;
  setTimeout(toggleLayout, 4000);
});
