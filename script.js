// script.js

const resorts = [
  {
    name: 'Tropical Paradise Resort',
    description: 'Enjoy the best beachside experience.',
    price: 199,
    image: 'https://source.unsplash.com/400x300/?beach,resort'
  },
  {
    name: 'Mountain Escape Lodge',
    description: 'A peaceful retreat in the mountains.',
    price: 149,
    image: 'https://source.unsplash.com/400x300/?mountain,resort'
  },
  {
    name: 'City Luxury Suites',
    description: 'Luxury meets convenience in the heart of the city.',
    price: 250,
    image: 'https://source.unsplash.com/400x300/?city,resort'
  }
];

const resortList = document.getElementById('resortList');
const resortSelect = document.getElementById('resortSelect');

resorts.forEach((resort, index) => {
  const card = document.createElement('div');
  card.className = 'resort-card';
  card.innerHTML = `
    <img src="${resort.image}" alt="${resort.name}">
    <h3>${resort.name}</h3>
    <p>${resort.description}</p>
    <p><strong>$${resort.price}/night</strong></p>
    <button onclick="bookNow(${index})">Book Now</button>
  `;
  resortList.appendChild(card);

  const option = document.createElement('option');
  option.value = index;
  option.textContent = resort.name;
  resortSelect.appendChild(option);
});

function bookNow(index) {
  resortSelect.value = index;
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  alert('Redirecting to Stripe checkout...');
  window.location.href = 'https://buy.stripe.com/test_4gw8zj0Xn5TkgPu288';
});
