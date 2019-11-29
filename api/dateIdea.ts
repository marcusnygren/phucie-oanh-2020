import { NowRequest, NowResponse } from '@now/node';

export default (_req: NowRequest, res: NowResponse) => {
  const dateIdeas = ["A Night in Italy; Make a pizza together, A bottle of Chianti, Gelato, and a Italian movie, i.e. the Italian Job.",
  "At Home Movie Night (Her Choice)",
  "At Home Movie Night (His Choice)",
  "Attend an Outdoor Concert",
  "Attend the Opera",
  "Attend Trivia Night at a Local Bar",
  "Batting Cages",
  "Buy Take Out Chinese & Have a Candlelight Dinner",
  "Catch Some #Views",
  "Check Out a Jazz Club",
  "Check out a local film festival",
  "Check out a new band",
  "DIY Facials (Each pick out a facial to make and try it on each other)",
  "Dollar Store Gift Exchange (Limit $5.00 at Dollar Store, wrap up the gifts and give them to each other)",
  "Explore a New Coffee Shop",
  "Fashion Show",
  "Get a Massage",
  "Go apple picking",
  "Go ax throwing together",
  "Go kayaking",
  "Go Take a Run Around Town",
  "Go to a Brewery",
  "Go to an open mic night",
  "Go to see a play",
  "Go to the Beach",
  "Golfing (Driving Range)",
  "Happy 100 List",
  "Have a Late Night Breakfast",
  "Have a Photo shoot Together",
  "Have a Technology Free Date",
  "Have cocktails at a nice restaurant",
  "Head to a convention",
  "Hit up a protest together",
  "Jazz Club",
  "Laser Tag",
  "Make Dessert Together",
  "Make Fireplace S'Mores",
  "Margarita & Chips/ Salsa Night",
  "Pack a Picnic",
  "Paint each other",
  "Painting at Home (Grab some canvases and paint from the craft store and have fun)",
  "Paris Night (French Bread, French Wine, French Movie)",
  "Play Mini Golf",
  "Play Some Arcade Games",
  "Play Video Games Together",
  "Reenact your First Date",
  "Resolution Binge",
  "Restaurant Hop",
  "Ride Bikes",
  "Share Your Favorite Spot",
  "Spend an hour planning out future dates",
  "Tackle a DIY project",
  "Take a Ferry Ride",
  "Take a paddleboat ride",
  "Take a Wine-Tasting Tour",
  "Take an Art Class",
  "Take Dancing Lessons",
  "Take public transit to the end of the line",
  "Thriftstore Gift Exchange ( $5.00 at Gift Store, wrap up the gifts and give them to each other)",
  "Tour a Botanical Garden",
  "Trilogy Movie Marathon (i.e. Twilight, Lord of the Rings, etc. )",
  "Try a new restaurant",
  "Try the '36 Questions to Fall in Love' (google it!)",
  "Unearth your childhood/teen photos",
  "Video record each other on how you fell in love and watch!",
  "Visit a Flea Market",
  "Visit a Free Museum",
  "Volunteer at an animal shelter",
  "Volunteer Locally",
  "Walk along the beach at night",
  "Watch the Sunset Together",
  "Write out a bucket list"];

  const dateIdea = dateIdeas[Math.floor(Math.random() * dateIdeas.length)];

  res.status(200).send(dateIdea);
};
