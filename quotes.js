document.addEventListener('DOMContentLoaded', function() {
  const quotes = [
    "Cinta bukan tentang bertemu di tempat yang tepat, tapi tentang hati yang saling memahami.",
    "Meskipun terpisah oleh jarak, cinta kita tetap dekat.",
    "Cinta itu seperti angin, kamu tidak bisa melihatnya, tetapi kamu bisa merasakannya."
  ];

  const quoteContainer = document.getElementById('quotes-container');
  quotes.forEach(quote => {
    const p = document.createElement('p');
    p.textContent = `"${quote}"`;
    quoteContainer.appendChild(p);
  });
});