// contact form: opens the email app with the message already written

var form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  // stop the normal submit, we make the email ourselves
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // the email app can't use the sender's name, so we put it inside the message
  var body = "Name: " + name + "\n" + "Email: " + email + "\n\n" + message;

  window.location.href = "mailto:hello@examplewebsite142.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);
});
