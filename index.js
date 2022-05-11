const emailFormCollector = document.getElementById("email-collector");
const container = document.querySelector(".container");
const registerBtn = document.querySelector(".btn-hero");

registerBtn.addEventListener("click", function () {
  container.classList.toggle("transition");
});

emailFormCollector.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailFormData = new FormData(event.target);
  const userFirstName = emailFormData.get("firstName");
  const email = emailFormData.get("email");

  const updateHtmlContent = `<h2>Congratulations ${userFirstName} </h2>
  <p class="cta-subtitle">You are on your way to becoming a BBQ Master</p>
  <p class="privacy-info">Further information will be sent to ${email}</p>
`;
  const ctaSection = document.getElementById("cta-section");
  ctaSection.innerHTML = updateHtmlContent;
});
