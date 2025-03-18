window.onload = function () {
  function updateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach((item) => {
      const price = parseInt(item.getAttribute('data-price'));
      const amount = parseInt(item.querySelector('.amount').value);
      total += price * amount;
    });
    document.querySelector('#total_price').innerText = total.toLocaleString();
  }

  document.querySelectorAll('.amount').forEach((amount) => {
    amount.addEventListener('input', updateTotal);
  });
};
