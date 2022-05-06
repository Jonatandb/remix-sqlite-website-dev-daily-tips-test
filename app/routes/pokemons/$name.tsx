import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getPokemon } from "~/models/pokemon.server";

type LoaderData = {
  pokemon: Awaited<ReturnType<typeof getPokemon>>;
};

export const loader: LoaderFunction = async ({ params }) => {
  console.log('PokemonPage -> loader');

  return json({
    pokemon: await getPokemon(params.name),
  });
}

export const meta: MetaFunction = ({
  data,
}: {
  data: LoaderData | undefined,
}) => {
  console.log('PokemonPage -> meta');

  if (!data) {
    return {
      title: 'Pokémon not found',
      description: 'We could not find this Pokémon',
    };
  }

  const name = data.pokemon.name;
  return {
    title: `This is the amazing ${name}`,
    description: `We caught the Pokémon with the name: ${name}`,
  };
};

export default function PokemonPage() {
  console.log('PokemonPage');

  const { pokemon } = useLoaderData() as LoaderData;

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        You caught: {pokemon.name}
      </h1>
      <img
        src={pokemon.img}
        alt={pokemon.name}
        className="mx-auto"
      />
    </main>
  )
}