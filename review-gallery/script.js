const userAvatar = document.querySelector('.user-avatar');
const userName = document.querySelector('.name');
const userTitle = document.querySelector('.title');
const userReview = document.querySelector('.review');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const btn = document.querySelector('.random-btn');

// store persons in an array
const person = [
  {
    avatar: 'assets/avatar-11.jpg',
    name: 'John Doe',
    title: 'CEO & Founder',
    review: 'Nam et vulputate tortor. Etiam quis commodo diam, a dapibus dui. Cras pretium elementum tellus ac tincidunt. In ac magna nulla.'
  },
  {
    avatar: 'assets/avatar-17.jpg',
    name: 'Peter Jones',
    title: 'Frontend Developer',
    review: 'Curabitur eu porta libero. Sed iaculis, odio non consectetur convallis, diam nulla suscipit augue, non mollis dui lectus nec dolor.'
  },
  {
    avatar: 'assets/avatar-2.jpg',
    name: 'Jane Smith',
    title: 'Marketing Strategist',
    review: 'Nunc varius orci in nulla pulvinar semper. Phasellus bibendum blandit tellus, vel iaculis erat vestibulum tristique.'
  },
  {
    avatar: 'assets/avatar-6.jpg',
    name: 'Melissa Jones',
    title: 'Intern',
    review: 'Praesent condimentum ligula ut nulla varius, in accumsan eros elementum. Cras ac lacus a elit aliquet eleifend mollis eget leo.'
  }
];

let currentPersonIndex = 0;

function displayPerson(index) {
  userAvatar.src = person[index].avatar;
  userName.textContent = person[index].name;
  userTitle.textContent = person[index].title;
  userReview.textContent = person[index].review;
}

// click button to randomize reviews
btn.addEventListener('click', () => {
  const randomPerson = Math.floor(Math.random() * person.length);
  currentPersonIndex = randomPerson;
  displayPerson(currentPersonIndex);
});

// click prev to go back to the previous review
prev.addEventListener('click', () => {
  currentPersonIndex--;
  if (currentPersonIndex < 0) {
    currentPersonIndex = person.length - 1;
  }
  displayPerson(currentPersonIndex);
});

// click next to go to the next review
next.addEventListener('click', () => {
  currentPersonIndex++;
  if (currentPersonIndex === person.length) {
    currentPersonIndex = 0;
  }
  displayPerson(currentPersonIndex);
});