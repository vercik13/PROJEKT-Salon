/* EmailJS */

function SendMail() {
  const params = {
    from_name : document.getElementById("name").value,
    email: document.getElementById("email").value,
    message : document.getElementById("message").value,
  }
  emailjs.send("service_rs9s7m6", "template_0w6dn5m", params)
  .then((res) => {

    from_name : document.getElementById("name").value = "";
    email: document.getElementById("email").value = "";
    message : document.getElementById("message").value = "";

    alert("Zpráva odeslána :-) ");
  })
}