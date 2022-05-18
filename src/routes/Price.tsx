interface PriceParams {
  price: string | undefined;
}

function Price({ price }: PriceParams) {
  return <h1>{price}</h1>;
}

export default Price;
