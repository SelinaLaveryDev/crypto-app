interface CoinPageProps {
  params: Promise<{ coinId: string }>;
}

export default async function Coin({ params }: CoinPageProps) {
  const { coinId } = await params;
  return (
    <main>
      <h1>Coin: {coinId}</h1>
    </main>
  );
}
