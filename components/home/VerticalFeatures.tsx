import { VerticalFeatureRow } from '../features/VerticalFeatureRow';
import { Section } from '../layout/Section';

export default function VerticalFeatures() {

  return (
    <div>
      <br></br>
      <br></br>

      <Section
        title="How It Works"
        // description="tldr: NFTs compete in 1v1 battles (gulags) with the winner being determined solely by popular vote. Submit your own NFT to a gulag or vote/wager on existing NFTs in battle. Winning participants get rewards and GULAG tokens, with the goal of adding validity to the sea of trash that is the NFT space right now. Continue reading for a step-by-step of how the game works."
      >
  <VerticalFeatureRow
    title="1. Create or Join a Gulag"
    description="Think your NFT has what it takes? Create a new gulag or join an existing gulag without a challenger. As soon as the second contender joins a gulag, the timer starts and the wager period begins!"
    image="/assets/images/fight.svg"
    imageAlt='Zero feature alt text'
    reverse
    />
    <VerticalFeatureRow
      title="2. Wager on the Best"
      description="Which NFT do you think will win the popular vote? Click the wager button to bet on your favorite NFT for a chance to win your portion of the pot. The wager period begins as soon as the gulag fills up and lasts 24 hours!"
      image="/assets/images/coins.svg"
      imageAlt="First feature alt text"
      />
    <VerticalFeatureRow
      title="3. Vote on Your Favorite"
      description="After the wager period finishes, voting opens up for the next 24 hours. Send the gulag to your friends, teachers, and coworkers so they can vote on their favorite one! Remember - you're only allowed to vote once per gulag."
      image="/assets/images/positive-vote.svg"
      imageAlt="Second feature alt text"
      reverse
      />
    <VerticalFeatureRow
      title="4. Retrieve Your Winnings"
      description="After the voting period finishes, come back to the gulag and click the `retrieve` button to get your prizes! Prizes are dispersed to those who wagered on the NFT that racked up the most votes. Prizes are calculated as your initial wager + your portion of the losing pot based on how much you wagered in comparison to all the other winners."
      image="/assets/images/success.svg"
      imageAlt="Third feature alt text"
      />
  </Section>
      </div>
)
  };

export { VerticalFeatures };
