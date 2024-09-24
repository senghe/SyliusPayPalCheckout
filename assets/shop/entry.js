// In this file you can import assets like images or stylesheets

function togglePayPal(form, gateway) {
  let payPalContainer = document.getElementById('paypal-button-submit');
  let payPalButton = document.getElementById('paypal-button-container');
  let nextStepContainer = document.getElementById('next-step');

  if (gateway === 'sylius.pay_pal') {
    payPalContainer.style.removeProperty('display');
    payPalButton.style.display = 'inline-block';
    nextStepContainer.style.display = 'none';
  } else {
    payPalContainer.style.display = 'none';
    nextStepContainer.style.removeProperty('display');
  }
}

document.addEventListener("DOMContentLoaded", function(e) {
  let form = document.getElementsByName('sylius_checkout_select_payment')[0];
  form.querySelectorAll('input[type=radio]').forEach(function (element) {
    element.addEventListener('change', function(event) {
      togglePayPal(form, element.parentElement.getAttribute('data-gateway'));
    });
  });

  let checkedRadio = form.querySelector('input[type=radio]:checked');
  togglePayPal(form, checkedRadio.parentElement.getAttribute('data-gateway'));
});
