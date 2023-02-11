const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible alert-fixed" role="alert" id="tempAlert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");
  alertPlaceholder.innerHTML = "";
  alertPlaceholder.append(wrapper);
  setTimeout(function () {
    document.getElementById("tempAlert").remove();
  }, 7000);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    alert("Your project ordered successfully!", "primary");
  });
}

$(document).ready(function () {
  $("#success-alert").hide();
  $("#myWish").click(function showAlert() {
    $("#success-alert")
      .fadeTo(2000, 500)
      .slideUp(500, function () {
        $("#success-alert").slideUp(500);
      });
  });
});
