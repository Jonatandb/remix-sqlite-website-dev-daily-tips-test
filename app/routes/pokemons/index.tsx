import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/react/routeModules";
import { getPokemons } from "~/models/pokemon.server";

type LoaderData = {
  data: Awaited<ReturnType<typeof getPokemons>>;
};

export const loader = async () => {
  console.log('Pokemons -> loader');

  return json<LoaderData>({
    data: await getPokemons(),
  });
};

export const meta: MetaFunction = () => {
  console.log('Pokemons -> meta');

  return {
    title: 'The complete Pokémon list',
    description: 'This is the list with all existing Pokémon.',
  }
};

export default function Pokemons() {
  console.log('Pokemons');

  const { data } = useLoaderData() as LoaderData;
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        Which Pokémon do you want to catch?</h1>
      <ul className='mx-auto text-center'>
        {data.map((pokemon) => (
          <li key={pokemon.name}>
            <Link
              to={pokemon.name}
              className="text-blue-600 underline"
            >
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}