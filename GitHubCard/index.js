/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// const axiosPromises = axios.get('https://api.github.com/users/JaredBrown1');
// console.log(axiosPromises);

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'https://api.github.com/users/mtlovelace/followers',
  'https://api.github.com/users/heart8reak/followers',
  'https://api.github.com/users/bkoehler2016/followers',
  'https://api.github.com/users/tetondan/followers',
  'https://api.github.com/users/dustinmyers/followers'

];


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const cardCreator = (info) => {
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  image.src = info.avatar_url;
  name.textContent = info.name;
  userName.textContent = info.login;
  location.textContent = `Location: ${info.location}`;
  profile.textContent = `Profile: `;
  address.textContent = info.html_url;
  address.href = info.html_url;
  followers.textContent = `Followers: ${info.followers}`;
  following.textContent = `Following: ${info.following}`;
  bio.textContent = `Bio: ${info.bio}`;
  
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
  
  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}

const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/JaredBrown1').then(response => {
 console.log(response.data);
 cards.appendChild(cardCreator(response.data));
});

// followersArray.forEach(() => {
//   axios.get(followersArray).then(response => {
//     console.log(response.followersArray)
//     cards.appendChild(cardCreator(response.followersArray));
//   }) 
  
// })
  

