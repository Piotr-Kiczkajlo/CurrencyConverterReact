const Result = ({ result }) => {
  return (
    !!result && (
      <strong>
        {result.finalyAmout.toFixed(2)}&nbsp;{result.currency}
      </strong>
    )
  );
};

export default Result;
