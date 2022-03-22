// pages/random-chuk.tsx
import { GetServerSideProps } from 'next'

const RandomChuckNorrisJokeCategory: React.FC<{joke: string;}> = ({ joke }) => {
  return (
    <div>
      {joke}
    </div>
  )
}
export default RandomChuckNorrisJokeCategory;

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  // Fetch data from external API
  const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${context.params.category}`);
  const joke = await response.json();

  // Pass data to the page via props
  return {
    props: {
      joke: joke.value,
    }
  };
}
