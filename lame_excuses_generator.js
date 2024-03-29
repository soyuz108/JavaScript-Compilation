// Stores random data in an object
const randomData = {
  intro: [
    "Sorry I can't come",
    "Please forgive my absence",
    "This is going to sound crazy",
    "Get this:",
    "I can't go because",
    "I know you're going to hate me but",
    "I was minding my own business and boom!",
    "I feel terrible but",
    "I regretfully cannot attend,",
    "This is going to sound like an excuse but",
  ],
  scapegoat: [
    "my nephew",
    "the ghost of Hitler",
    "the Pope",
    "my ex",
    "a high school marching band",
    "Taylor Swift",
    "a sad clown",
    "the kid from Disney",
    "a professional cricket team",
    "my Tinder date",
  ],
  delay: [
    "just shit the bed",
    "died in front of me",
    "won't stop telling me knock knock jokes",
    "is having a nervous breakdown",
    "gave me syphilis",
    "poured lemonade in my tank",
    "stabbed me",
    "found my box of human teeth",
    "stole my bicycle",
    "posted my Instagram",
  ],
};

// Generates a random number/choice
const randomNumber = Math.floor(Math.random() * 10);

// Creates a random excuse message
const getRandomExcuse = () => {
  console.log(`${randomData.intro[randomNumber]} ${randomData.scapegoat[randomNumber]} ${randomData.delay[randomNumber]}.`);
};
getRandomExcuse(); // Test result: I regretfully cannot attend, a professional cricket team stole my bicycle.
