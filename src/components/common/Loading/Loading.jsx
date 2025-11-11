import { DNA } from "react-loader-spinner";

export const Loading = () => {
  return (
    <DNA
      visible={true}
      height="80"
      width="80"
      dnaColorOne="#00630A"
      dnaColorTwo="#16AB3B"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};
