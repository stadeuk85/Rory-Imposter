const PACKS = {
  "animals": {
    "name": "Animals",
    "emoji": "🐾",
    "words": [["Dog","A pet that lots of families have"],["Cat","A pet that lives in the house"],["Lion","A big wild animal"],["Tiger","A stripy wild animal"],["Shark","Something that lives in the sea"],["Spider","A tiny creature with lots of legs"],["Horse","A big animal you'd see in a field"],["Penguin","A bird from somewhere very cold"],["Snake","A long animal with no legs"],["Elephant","A huge grey animal at the zoo"],["Hamster","A small pet kept in a cage"],["Bee","A tiny insect that buzzes"],["Cow","An animal on a farm"],["Dinosaur","An animal from millions of years ago"],["Monkey","A cheeky animal at the zoo"],["Giraffe","A very tall zoo animal"]]
  },
  "food": {
    "name": "Food",
    "emoji": "🍟",
    "words": [["Fish and chips","A hot takeaway meal"],["Pizza","A hot meal you share out"],["Chicken nuggets","Something you'd eat with chips"],["Beans on toast","A quick meal made at home"],["Ice lolly","Something cold and sweet"],["Chocolate biscuit","A sweet little snack"],["Sausage roll","Something you buy in a bakery"],["Crisps","A crunchy snack from a bag"],["Jelly","A wobbly pudding at parties"],["Roast dinner","A big Sunday meal"],["Spaghetti","A long stringy dinner"],["Birthday cake","Something sweet with candles on"],["Burger","Something you eat with your hands"],["Hot dog","Food you'd get at a fair"],["Ice cream","A cold treat in the summer"],["Chocolate bar","A sweet treat from a shop"]]
  },
  "school": {
    "name": "School",
    "emoji": "🎒",
    "words": [["Whiteboard","Something at the front of the classroom"],["Playground","A place at school for break time"],["Lunchbox","Something you take to school"],["PE kit","Clothes you need for school"],["Teacher","A grown-up at school"],["Homework","Something you do after school"],["School bus","How some children get to school"],["Rubber","A small thing in your pencil case"],["Assembly","Something the whole school does together"],["Reading book","Something you take home from school"],["School dinner","Something in the middle of the school day"],["Glue stick","Something you use in art"],["Pencil case","Something you keep on your desk"],["Ruler","Something straight you use in maths"],["Felt tips","Something you draw with"],["Sharpener","A tiny thing on your desk"]]
  },
  "sport": {
    "name": "Football & sport",
    "emoji": "⚽",
    "words": [["Goalkeeper","A player on a football pitch"],["Penalty","Something that happens in a football match"],["Referee","The person in charge of a match"],["Red card","Something a referee can give you"],["Football boots","Something you wear to play sport"],["Swimming pool","A place you go to do sport"],["Trampoline","Something you bounce on"],["Cricket bat","Something you hold in a sport"],["Gold medal","Something you win"],["Bike ride","Something you do outside to keep fit"],["Free kick","Something that stops the game for a moment"],["Yellow card","A warning in a match"],["Corner","Something taken from the side of the pitch"],["Half time","A break in the middle of a match"],["Goal net","Part of a football pitch"],["Shin pads","Something you wear under your socks"]]
  },
  "home": {
    "name": "At home",
    "emoji": "🏠",
    "words": [["Sofa","Something in the living room"],["Telly","Something you stare at for ages"],["Fridge","Something big in the kitchen"],["Freezer","Something very cold at home"],["Bunk bed","Something in a bedroom"],["Bath","Something in the bathroom"],["Shower","Something you stand in"],["Toothbrush","Something small you use every day"],["Toothpaste","Something in the bathroom cupboard"],["Washing machine","A noisy machine at home"],["Dishwasher","A machine that saves you a job"],["Microwave","Something that goes ping"],["Oven","Something very hot in the kitchen"],["Kettle","Something grown-ups use all day long"],["Toaster","A small machine in the kitchen"],["Garden shed","Something outside the house"]]
  },
  "out": {
    "name": "Out and about",
    "emoji": "🚌",
    "words": [["Park","A place you go to play"],["Supermarket","A place grown-ups take you shopping"],["Seaside","Somewhere you go on a sunny day out"],["Library","A very quiet place you can visit"],["Cinema","A place you go for a treat"],["Zoo","A day out where you look at things"],["Castle","An old place you can visit"],["Farm","A place with big fields"],["Chip shop","A place you buy food from"],["Bus stop","A place where you wait about"],["Soft play","An indoor place for playing"],["Camping","Something you do in the holidays"],["Museum","A place full of old things"],["Swimming baths","Somewhere you go on a Saturday"],["Pier","Something long at the seaside"],["Arcade","A noisy place full of machines"]]
  },
  "nature": {
    "name": "Space & nature",
    "emoji": "🚀",
    "words": [["Rocket","Something to do with space"],["The Moon","Something up in the night sky"],["Rainbow","Something that appears in the sky"],["Volcano","Something big and dangerous in nature"],["Thunderstorm","A type of weather"],["Snowman","Something you make outside in winter"],["Tree house","Something built outdoors"],["Beach","A place out in nature"],["River","Water out in nature"],["Star","Something very, very far away"],["Puddle","Something outside after it rains"],["Sunset","Something you see in the evening sky"],["Astronaut","Someone with a very unusual job"],["Space station","Somewhere people live, but not on Earth"],["Planet","Something enormous and far away"],["Mars","Something in space with a name"]]
  },
  "heroes": {
    "name": "Heroes & adventure",
    "emoji": "🦸",
    "words": [["Superhero cape","Something a hero wears"],["Secret hideout","A place a hero might have"],["Pirate ship","Something from an adventure story"],["Treasure map","Something you follow on an adventure"],["Dragon","A creature from a story"],["Wizard","A magic person in stories"],["Robot","A machine you see in films"],["Ninja","A sneaky person in stories"],["Knight","Someone from long, long ago"],["Monster","Something scary from a story"],["Spy","Someone who hides and watches"],["Magic wand","Something used for doing magic"],["Superpower","Something a hero has"],["Invisibility","Something you'd love to be able to do"],["Sidekick","Someone who helps the hero out"],["Villain","The one you're not meant to like"]]
  },
  "vehicles": {
    "name": "Things that go",
    "emoji": "🚗",
    "words": [["Fire engine","A big red vehicle"],["Tractor","A vehicle used on a farm"],["Aeroplane","Something that goes up in the sky"],["Submarine","Something that goes underwater"],["Skateboard","Something with wheels you stand on"],["Double-decker bus","Something you ride in with lots of people"],["Police car","A vehicle with flashing lights"],["Digger","A machine on a building site"],["Train","Something that takes you a long way"],["Helicopter","Something noisy that flies"],["Scooter","Something you ride to school"],["Lorry","A massive vehicle on the motorway"],["Ambulance","A vehicle in a real hurry"],["Bin lorry","A vehicle that comes down your street"],["Ice cream van","A vehicle that plays a tune"],["Taxi","A vehicle you pay to sit in"]]
  },
  "toys": {
    "name": "Toys & games",
    "emoji": "🎮",
    "words": [["Building bricks","A toy you build things with"],["Games console","Something you play games on"],["Football stickers","Something children collect"],["Board game","Something you play with the family"],["Water pistol","A toy for the summer"],["Remote control car","A toy that needs batteries"],["Jigsaw puzzle","Something you do at a table"],["Teddy","Something soft you keep in your room"],["Bouncy castle","Something you'd find at a party"],["Yo-yo","A small toy on a string"],["Kite","A toy for a windy day"],["Hide and seek","A game you play with friends"],["Tag","A game you play in the playground"],["Marbles","Tiny things you play with"],["Playing cards","Something you shuffle"],["Dominoes","Little things you knock over"]]
  }
};
