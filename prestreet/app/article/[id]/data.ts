interface Article {
  title: string;
  originalSource: string;
  category: string;
  image: string;
  summary: string;
  content: string;
}

interface Articles {
  [key: number]: Article;
}

export const articles: Articles = {
  1: {
    title: "OpenAI at the Superbowl",
    originalSource: "Wall Street Journal",
    category: "Technology",
    image: "/openai_super_bowl.avif",
    summary: "OpenAI will be on a commercial at the upcoming Super Bowl",
    content: `
      
      What is happening:

      OpenAI, the company behind ChatGPT, is planning to air its first TV commercial during the Super Bowl this Sunday. Even though OpenAI became super popular after launching ChatGPT in 2022, it hasn’t spent much money on ads until now. The Super Bowl ad is a big deal because it’s part of a race to get more people to use their AI technology. Other big companies like Google, Microsoft, and Amazon are also trying to win over users with their own AI tools, 
      like Google’s Gemini and Microsoft’s Copilot.
      

      Selling AI to everyone isn’t easy because some people are scared of it. 
      They worry AI might be dangerous or take over the world. But as people learn 
      more about how AI can help, like curing diseases or making life easier, they’re 
      starting to feel better about it. OpenAI is trying to get more people excited 
      about AI by hiring a marketing expert, Kate Rouch, who helped make Coinbase 
      (a cryptocurrency company) famous with cool ads. Now, OpenAI is stepping up 
      its game to show everyone how awesome AI can be!

    `
  },
  2: {
    title: "How Electric Cars Are Changing the World",
    originalSource: "Bloomberg",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7",
    summary: "More people are buying cars that run on electricity instead of gas. This helps keep our air clean and saves money!",
    content: `
      Did you know that cars can run without gas? Electric cars are becoming more popular because they're better for our planet and can be fun to drive!

      Why Electric Cars are Cool:
      • They don't make smoke or pollution
      • They're very quiet when driving
      • You can charge them at home, like a phone
      • Many have cool computer screens and features

      How They Work:
      Instead of putting gas in the car, you plug it in to charge a big battery. It's just like charging your tablet or phone, but bigger!

      Good for the Earth:
      • No harmful smoke from the car
      • Uses clean electricity instead of gas
      • Helps fight climate change
      • Saves trees and animals

      Fun Facts:
      • Some electric cars can go really fast
      • They have fewer parts than regular cars
      • Many have special apps to control them
      • You never have to visit a gas station

      Words to Learn:
      • Battery: Stores electricity for the car to use
      • Charging: Adding electricity to the battery
      • Renewable: Energy that doesn't run out

      Think About:
      • Would you want to ride in an electric car?
      • How could we make more people want electric cars?
      • What other things could we make electric?
    `
  },
  3: {
    title: "Space Company Makes History",
    originalSource: "Business Insider",
    category: "Science",
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7",
    summary: "A new rocket company just sent their biggest spacecraft to space! This could mean more exciting space adventures in the future.",
    content: `
      Exciting news from space! A company called SpaceX just launched their biggest rocket ever. This is like sending a really tall building into space!

      What Happened:
      • The rocket is called Starship
      • It's the biggest rocket ever built
      • It can carry lots of people and supplies
      • It might help us go to Mars one day

      Why This is Important:
      Space travel used to be something only governments could do. Now, companies are making it possible for more people to explore space!

      What's Next:
      • More test flights
      • Planning trips around the Moon
      • Getting ready for Mars missions
      • Making space travel cheaper

      Fun Facts:
      • The rocket is taller than a 30-story building
      • It can carry as much as 100 elephants
      • It can land back on Earth to be used again
      • It's made of special metal that can handle extreme heat

      Words to Learn:
      • Spacecraft: A vehicle that travels in space
      • Launch: When a rocket takes off into space
      • Orbit: The path something takes around Earth or another planet

      Think About:
      • Would you want to travel to space?
      • What would you pack for a trip to Mars?
      • How could space travel help Earth?
    `
  }
};