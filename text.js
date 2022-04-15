//Js for  mobile menu
const mobileMenu = document.getElementById('mobileMenu');
const openHamburger = document.getElementById('bars');
const closeHamburger = document.getElementById('closeBtn');
const link = document.querySelectorAll('.link');

function openModal() {
  mobileMenu.style.display = 'block';
}
function closeModal() {
  mobileMenu.style.display = 'none';
}
openHamburger.addEventListener('click', openModal);
closeHamburger.addEventListener('click', closeModal);
link.forEach((link) => {
  link.addEventListener('click', closeModal);
});

// Js for Star musicians
const musicStars = [
  {
    id: '1',
    name: 'Jackson',
    title: 'Pop Music USA',
    details: 'Five times grammy award winner and the best perfoming artiste of 2022',
    image: './images/gerard.png',
  },
  {
    id: '2',
    name: 'Abiodun',
    title: 'Gosple Music Nigeria',
    details: 'Five times grammy award winner and the best perfoming artiste of 2022',
    image: './images/abiodun.jpeg',
  },
  {
    id: '3',
    name: 'Simeon',
    title: 'Samba Music, Brazil',
    details: 'Five times grammy award winner and the best perfoming artiste of 2022',
    image: './images/megan.png',
  },
  {
    id: '4',
    name: 'Camron',
    title: 'Hip Hop Music USA',
    details: 'Five times grammy award winner and the best perfoming artiste of 2022',
    image: './images/Jack.png',
  },
  {
    id: '5',
    name: 'Megan',
    title: 'Pop star, Australia',
    details: 'Five times grammy award winner and the best perfoming artiste of 2022',
    image: './images/cameron.png',
  },
  {
    id: '6',
    name: 'Jackson',
    title: 'Stitch Fix USA',
    details: 'Five times grammy award winner and the best perfoming artiste of 2022',
    image: './images/simon.png',
  },
];

const featureMusicians = document.querySelector('.stars');
function loopdiv() {
  featureMusicians.innerHTML = '';
  for (let i = 0; i < musicStars.length; i += 1) {
    featureMusicians.innerHTML = `${featureMusicians.innerHTML}  
    <li class="musicians">
      <img src=${musicStars[i].image} alt="Jack image">
      <div class="musician-about">
          <h5>${musicStars[i].name}</h5>
          <p class="musician-para">
              ${musicStars[i].title}, 
          </p>
          <hr>
          <p>
              ${musicStars[i].details},
          </p>
      </div>
    </li>`;
  }
}
loopdiv();
