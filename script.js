// Welcome to my js, there are a lot of comments bc without them i'd have no idea what i'm looking at. so enjoy them. theyre here to stay.
// Global variable chill space B)
const nav = document.querySelector(".navbar");
const navLinks = nav.querySelectorAll(".nav-link");
const ogContent = document.querySelector(".main-paper").innerHTML;
const marginNav = document.querySelector(".margin-list");
const marginNavLinks = marginNav.querySelectorAll(".subNav");
const mainTitle = `Monique 'Jelani' Miller`;
let paperBelowTitle = document.querySelector(".main-paper");
// this is where im storing all of my content for different pages. probably keep that colapsed?
const siteMapContent = [
  {
    title: "about me",
    h1: `${mainTitle}`,
    content: `${ogContent}`,
  },
  {
    title: "experience",
    h1: "Experiences",
    content: `<h2>Visual Arts and Design</h2>
        <p>I am no stranger to computers and logic. On public transportation, you can find me reading books and playing sudoku. I've been using computers as a platform for digital art and design since i found out about paint on windows Xp. Since then ive worked with numberous other platforms including adobe suite, clip studio pro, inkscape, gimp, and many more. I also dont take the ohysical world to granted and i'm often working on projects with my hands and physical tools.</p>
        <h2>Computer Logic and Development</h2>
        <p>I am currently enrolled in a class to keep my mind sharp. Previously i've logged hours on freecodecamp, scrimba, udemy and at the library, learning different coding languages and expanding my digital horizons. My mind is always open to learning!</p>
        <h2>Past Experiences</h2>
        <p>I am currently employed as a catering cook at Loyola University of MD. Be sure to connect with me on LinkedIn for more details!</p>`,
  },
  {
    title: "projects",
    h1: "Projects",
    // add github, picture of pants, pictures of food
    content: `<div class="col">
        <p>In this day and age, we have the world at our disposal, this means new hobbies are ever evolvong. Here are a few of mine:</p>
        <div class="col"> 
        <h2>Coding!</h2>
            <p>I bet you can tell from this website the extent of this hobby. I dream big when it comes to my virtual space. The digital sky is the limit! Currently this website is the project i'm working on. I'm still in the process of perfecting my HTML, CSS and Javascript so the next time you see my site, it will probably look realy different.Be sure to <a href="https://github.com/mjrmiller/mjrmiller" target="_blank">Check out my Github!</a></p>
        </div>
        <div class="col">
            <h2>Sewing!</h2>
            <p>In my adventures in Ghana i picked up a lot of cheap fabric. I decided to put it to good use and make a beautiful pair of pants. I was working from a pattern and it was definately harder than i thought. I persevered and finished them just for them not to fit :(. Well, better luck next time.</p><img class="img-thumbnail img-fluid align-self-center " src="./assets/pants.png" alt="Very cute brown and yellow homemade pants.">
        </div> 
        <div class="col">
            <h2>Cooking!</h2>
            <p>Did i really forget to mention that i love to cook? You can find me cooking all day at my day job, so much so, that i dont even cook at home.</p><img class="img-thumbnail img-fluid align-self-center " src="./assets/CHEFF2.png" alt="this is my chef logo. Im holding a knife.">
        </div>`,
  },
  {
    title: "travels",
    h1: "Geography Pop Quiz!",
    content: [
      {
        question: "What adventure are you looking to find?",
        choices: ["Past Trips", "Future Trips", "Bucket List"],
        nextQuestions: [
          [
            // Related to 'Past Trips'
            {
              question: "Here lays the memories of all past trips.",
              choices: [
                "Hilo, Hawaii 2022",
                "Atlanta, Georgia 2023",
                "São Miguel, Portugal 2023",
                "Takoradi, Ghana 2022",
                "Houston, Texas 2021",
                "New Orleans, Louisiana 2023",
                "New Orleans, Louisiana 2019",
              ],
            },
          ],
          [
            // Related to 'Future Trips'
            {
              question: "Welcome to the plans for future trips",
              choices: ["Cape Town, South Africa 2024"],
            },
          ],
          [
            // Related to 'Bucket List'
            {
              question: `<h2>Bucket List Destinations!</h2>
                            <p>Be sure to cast your vote for our next destination when the time comes. Choose from the ones provided or make your own!
                            Here are some of the choices we have for next year.</p> <ul>
                            <li>"Amman, Jordan"</li>
                            <li>"Dubai, UAE",</li>
                            <li>"Tokyo, Japan",</li>
                            <li>"Bali, Indonesia",</li>
                            <li>"Phuket, Thailand",</li>
                            <li>"Antalya, Turkey",</li>
                            </ul>`,
              choices: [
                "Amman, Jordan",
                "Dubai, UAE",
                "Tokyo, Japan",
                "Bali, Indonesia",
                "Phuket, Thailand",
                "Antalya, Turkey",
              ],
            },
          ],
        ],
      },
    ],
  },
  {
    title: "interests",
    h1: "Interests",
    content: `<p>In my spare time you can find me hiking,</p> <img class="img-thumbnail img-fluid align-self-center " src="./assets/mdheightshike.png" alt="This is me hiking with my friend. we're at a really cool lookout point">
        <p>Drawing, (here's a really cool cartoon i made for the sax player of my favorite band. You should check him out!)</p>
        <img class="img-thumbnail img-fluid align-self-center " src="./assets/ignacito.png" alt="drawing i made of a galgo dog playing a sax">`,
  },
  {
    title: "core values",
    h1: `${mainTitle}`,
    content: `<p>Respect, honesty, humor, adventure</p>`,
  },
  {
    title: "contact",
    h1: `${mainTitle}`,
    content: `<p><a href="https://github.com/mjrmiller/mjrmiller" target="_blank">Check out my Github!</a>, <a href="https://www.linkedin.com/in/moniquejrmiller/" target="_blank">Check out my linkedIn!</a></p>`,
  },
];
const travelDestinations = [
  {
    title: "Houston, Texas 2021",
    content: `<h2>Howdy Houston</h2> <img class="img-thumbnail d-block img-fluid" src="./assets/paper.png" alt="" />`,
  },
  {
    title: "Hilo, Hawaii 2022",
    content: `<h2>Mahalo Hawai'i</h2>
        <img class="img-thumbnail d-block img-fluid" src="./assets/hawaii.png" alt="" />`,
  },
  {
    title: "Atlanta, Georgia 2023",
    content: `<h2>ATL<h2>
        <img class="img-thumbnail d-block img-fluid" src="./assets/highmuseumofart.png" alt="" />`,
  },
  {
    title: "New Orleans, Louisiana 2023",
    content: `<h2>Merci Nola<h2>
        <img class="img-thumbnail d-block img-fluid" src="./assets/neworleans2023.png" alt="" />`,
  },
  {
    title: "New Orleans, Louisiana 2019",
    content: `<h2>Merci Beacoup Nola</h2>`,
  },
  {
    title: "São Miguel, Portugal 2023",
    content: `<h2>Obrigada Portugal</h2>
        <img class="img-thumbnail d-block img-fluid" src="./assets/portugal-waterfall.png" alt="" />`,
  },
  {
    title: "Takoradi, Ghana 2022",
    content: `<h2>Medaase Ghana</h2>
        <img class="img-thumbnail d-block img-fluid" src="./assets/ghana.png" alt="" />`,
  },
  {
    title: "Cape Town, South Africa 2024",
    content: `<h2>Timeline</h2>
    <p>This <a href="https://www.canva.com/design/DAFlSXukVC0/FDzj2LeQ58xTXn2_b4pzHw/edit" target="_blank">timeline</a><p>will make sure you're on track and have everything you need to be trip ready</p>
    <h2>Activities</h2>
    <p>This<a href="https://www.tripadvisor.com/Attractions-g1722390-Activities-Cape_Town_Western_Cape.html" target="_blank">List of attractive attractions</a>will make you just as excited as i am.</p>
    <h2>Lodging</h2>
    <p>These <a href="https://www.airbnb.com/wishlists/1321243200" target="_blank">stays</a> are what i call unique and beautiful. But they're what you'll be callin home for 2 weeks. So choose wisely</p>`,
  },
];
let index = 0;
let timeoutId;
let title;
// this function will spell out my h1 like a typewriter
const spellTitle = () => {
  let titleElement = document.getElementById("titleText");

  if (title === undefined) {
    title = titleElement.innerHTML;
    titleElement.innerHTML = "";
  }
  if (index < title.length) {
    titleElement.innerHTML += title.charAt(index);
    index++;
    timeoutId = setTimeout(spellTitle, 100);
  } else {
    clearTimeout(timeoutId);
  }
};
// this function will load on start & refresh
// try to figure out a way to run my typewriter everytime the h1 changes
window.onload = spellTitle;

// iterate through links of main nav section
for (let i = 0; i < navLinks.length; i++) {
  let h1Text = document.querySelector("#titleText").innerHTML;
  const marginText = document.querySelector(".margin-list");
  navLinks[i].addEventListener("click", function (event) {
    event.preventDefault(); // prevent the default action
    // changes title of page
    if (this.innerHTML === siteMapContent[i].title) {
      h1Text = siteMapContent[i].h1;
      document.querySelector("#titleText").innerHTML = h1Text;
    }
    if (siteMapContent[i].title !== "travels") {
      // change content of page
      paperBelowTitle.outerHTML = `<div class="col-10 col-md-10 main-paper media">
        ${siteMapContent[i].content}
        </div>`;
      paperBelowTitle = document.querySelector(".main-paper");
    }
    // remove margin links when its not about me :'(
    if (h1Text !== mainTitle) {
      marginText.setAttribute("hidden", "");
    }
    // put margins back cause its all about me! *maniacal laughter*
    if (h1Text === mainTitle) {
      marginText.removeAttribute("hidden");
    }
    // sends travelers on an all expenses paid trip to the very complicated but very luxurious travels section
    if (siteMapContent[i].title === "travels") {
<<<<<<< HEAD
        alert('Sorry! This Section is still under construction. Please explore another section for now. Thanks!');
    //   travelsSection();
=======
      travelsSection();
>>>>>>> 842d63172501c5bf03288c1320457902cf283600
    }
  });
}

// iterates through links in margins and changes content
for (let i = 0; i < marginNavLinks.length; i++) {
  let h1Text = document.querySelector("#titleText").innerHTML;
  marginNavLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    // changes title of page
    if (this.innerHTML === siteMapContent[i + navLinks.length].title) {
      h1Text = siteMapContent[i + navLinks.length].h1;
      document.querySelector("#titleText").innerHTML = h1Text;
      // change content of page
      paperBelowTitle.outerHTML = `<div class="col-10 col-md-10 main-paper media">
            ${siteMapContent[i + navLinks.length].content}
            </div>`;
      paperBelowTitle = document.querySelector(".main-paper");
      return;
    }

    return;
  });
}
// travel section UNDER CONSTRUCTION
<<<<<<< HEAD
function makeElementWithClassName(element, className){
    document.createElement(element);
    element.className(className);
    return element;
}
// function travelsSection() {
//   const mkContainer = document.createElement("div");
//   mkContainer.className = "mkContainer container-fluid";
//   const mkRow = document.createElement("div");
//   mkRow.className = "mkRow row";
//   const entireTravelSectionContainerDiv = document.createElement("div");
//   entireTravelSectionContainerDiv.className =
//     "row align-items-center entireTravelSectionContainerDiv d-flex justify-content-around";

//   paperBelowTitle.innerHTML = "";
//   document
//     .querySelector(".main-paper")
//     .appendChild(mkContainer)
//     .appendChild(mkRow)
//     .appendChild(entireTravelSectionContainerDiv);

//   let initialquestion = siteMapContent[3].content[0];

//   // append question
//   const firstQuestionPElement = document.createElement("p");
//   firstQuestionPElement.className = "firstQuestionPElement justify-content-center";
//   firstQuestionPElement.textContent = initialquestion.question;
//   entireTravelSectionContainerDiv.appendChild(firstQuestionPElement);

//   const choicesElement = document.createElement("div");
//   const responseElement = document.createElement("div");
//   choicesElement.className = "d-flex choicesElement justify-content-around";
//   for (let choice of initialquestion.choices) {
//     let button = document.createElement("button");
//     button.className = "btn btn-sm";
//     button.textContent = choice;
//     button.addEventListener("click", function () {

//       switch (choice) {
//         case "Past Trips":
//             secondQuestion = initialquestion.nextQuestions[0][0];
//         //   let destinationList = document.createElement('div');
//         //   destinationList.className = 'col destinationList';
//           const destinationDiv = document.createElement("div");
//           chosenDestinationDiv = document.createElement("div");
//           destinationDiv.className = "d-flex destinationDiv justify-content-around";
//         //   if (!document.getElementById())
//           for (let choice of secondQuestion.choices) {
//             let button = document.createElement("button");
//             button.className = "btn btn-sm";
//             button.textContent = choice;
//             button.addEventListener("click", function () {

//               switch (choice) {
//                 case "Hilo, Hawaii 2022":
//                     chosenDestination = travelDestinations[1].content;
//                     break;
//                 case "Atlanta, Georgia 2023":
//                     chosenDestination = travelDestinations[2].content;
//                     break;
//                 case "São Miguel, Portugal 2023":
//                     chosenDestination = travelDestinations[5].content;
//                     break;
//                 case "Takoradi, Ghana 2022":
//                     chosenDestination = travelDestinations[6].content;
//                     break;
//                 case "Houston, Texas 2021":
//                     chosenDestination = travelDestinations[0].content;
//                     break;
//                 case "New Orleans, Louisiana 2023":
//                     chosenDestination = travelDestinations[3].content;
//                     break;
//                 case "New Orleans, Louisiana 2019":
//                     chosenDestination = travelDestinations[4].content;
//                     break;
//               }
              
//               chosenDestinationDiv.innerHTML = `<p>${chosenDestination}</p>`;
//             });

//             entireTravelSectionContainerDiv.appendChild(choicesElement.appendChild(button));
//           }
//           entireTravelSectionContainerDiv.appendChild(chosenDestinationDiv);
        
//           break;
//         case "Future Trips":
//           secondQuestion = initialquestion.nextQuestions[1][0];
//           let futureDestination = document.createElement('div');
//           futureDestination.className = 'col futureDestination';
//           for (let choice of secondQuestion.choices) {
//             let button = document.createElement("button");
//             button.className = "btn btn-sm";
//             button.textContent = choice;
//             button.addEventListener("click", function () {
//             //   if (!document.
//                 switch (choice) {
//                 case "Cape Town, South Africa 2024":
//                     chosenDestination = travelDestinations[7].content;
//                     break;
//               }
//              futureDestination.innerHTML = `<p>${chosenDestination}</p>`;
//             });
//             futureDestination.appendChild(button);

//         }
//         entireTravelSectionContainerDiv.appendChild(futureDestination);
          
//           break;
//         case "Bucket List":
//           secondQuestion = initialquestion.nextQuestions[2][0];
//       }
//       responseElement.innerHTML = `<p>${secondQuestion.question}</p>`;
//     });
//     choicesElement.appendChild(button);
//   }
//   entireTravelSectionContainerDiv.appendChild(choicesElement);
//   entireTravelSectionContainerDiv.appendChild(responseElement);
// }
=======
function travelsSection() {
  const mkContainer = document.createElement("div");
  mkContainer.className = "mkContainer container-fluid";
  const mkRow = document.createElement("div");
  mkRow.className = "mkRow row";
  const entireTravelSectionContainerDiv = document.createElement("div");
  entireTravelSectionContainerDiv.className =
    "row align-items-center entireTravelSectionContainerDiv d-flex justify-content-around";

  paperBelowTitle.innerHTML = "";
  document
    .querySelector(".main-paper")
    .appendChild(mkContainer)
    .appendChild(mkRow)
    .appendChild(entireTravelSectionContainerDiv);

  let initialquestion = siteMapContent[3].content[0];

  // append question
  const firstQuestionPElement = document.createElement("p");
  firstQuestionPElement.className = "firstQuestionPElement justify-content-center";
  firstQuestionPElement.textContent = initialquestion.question;
  entireTravelSectionContainerDiv.appendChild(firstQuestionPElement);

  const choicesElement = document.createElement("div");
  const responseElement = document.createElement("div");
  choicesElement.className = "d-flex choicesElement justify-content-around";
  for (let choice of initialquestion.choices) {
    let button = document.createElement("button");
    button.className = "btn btn-sm";
    button.textContent = choice;
    button.addEventListener("click", function () {

      switch (choice) {
        case "Past Trips":
            secondQuestion = initialquestion.nextQuestions[0][0];
        //   let destinationList = document.createElement('div');
        //   destinationList.className = 'col destinationList';
          const destinationDiv = document.createElement("div");
          chosenDestinationDiv = document.createElement("div");
          destinationDiv.className = "d-flex destinationDiv justify-content-around";
        //   if (!document.getElementById())
          for (let choice of secondQuestion.choices) {
            let button = document.createElement("button");
            button.className = "btn btn-sm";
            button.textContent = choice;
            button.addEventListener("click", function () {

              switch (choice) {
                case "Hilo, Hawaii 2022":
                    chosenDestination = travelDestinations[1].content;
                    break;
                case "Atlanta, Georgia 2023":
                    chosenDestination = travelDestinations[2].content;
                    break;
                case "São Miguel, Portugal 2023":
                    chosenDestination = travelDestinations[5].content;
                    break;
                case "Takoradi, Ghana 2022":
                    chosenDestination = travelDestinations[6].content;
                    break;
                case "Houston, Texas 2021":
                    chosenDestination = travelDestinations[0].content;
                    break;
                case "New Orleans, Louisiana 2023":
                    chosenDestination = travelDestinations[3].content;
                    break;
                case "New Orleans, Louisiana 2019":
                    chosenDestination = travelDestinations[4].content;
                    break;
              }
              
              chosenDestinationDiv.innerHTML = `<p>${chosenDestination}</p>`;
            });

            entireTravelSectionContainerDiv.appendChild(choicesElement.appendChild(button));
          }
          entireTravelSectionContainerDiv.appendChild(chosenDestinationDiv);
        
          break;
        case "Future Trips":
          secondQuestion = initialquestion.nextQuestions[1][0];
          let futureDestination = document.createElement('div');
          futureDestination.className = 'col futureDestination';
          for (let choice of secondQuestion.choices) {
            let button = document.createElement("button");
            button.className = "btn btn-sm";
            button.textContent = choice;
            button.addEventListener("click", function () {
            //   if (!document.
                switch (choice) {
                case "Cape Town, South Africa 2024":
                    chosenDestination = travelDestinations[7].content;
                    break;
              }
             futureDestination.innerHTML = `<p>${chosenDestination}</p>`;
            });
            futureDestination.appendChild(button);

        }
        entireTravelSectionContainerDiv.appendChild(futureDestination);
          
          break;
        case "Bucket List":
          secondQuestion = initialquestion.nextQuestions[2][0];
      }
      responseElement.innerHTML = `<p>${secondQuestion.question}</p>`;
    });
    choicesElement.appendChild(button);
  }
  entireTravelSectionContainerDiv.appendChild(choicesElement);
  entireTravelSectionContainerDiv.appendChild(responseElement);
}
>>>>>>> 842d63172501c5bf03288c1320457902cf283600

// TO DO
// finish travel section
// add content to bare sections
// maybe put past travel questions in the margin so people can go back to them
// see how it looks on xl screen
// get paper bg to stretch to edges
// get titile to sit at flex end
// get typewriter effect to work multiple times
