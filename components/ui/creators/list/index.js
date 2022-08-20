import { useWeb3 } from "@components/providers";
import { Button } from "@components/ui/common";

import { useAccount } from "@components/web3/hooks/useAccount";
import {  useState } from "react";

export default function List() {
  const { account } = useAccount();
  const { contract } = useWeb3();

  const [results, setResults] = useState();

  const handleGetCreator = async () => {
    try {
      if (account.data && contract) {
        const result = await contract.methods
          .getCreators()
          .call({ from: account.data });
          setResults(result);
        return result;
      } else {
        alert("Please Connect to metamask");
      }
    } catch (error) {
      alert("Function failed");
    }
  };

  

  return (
    <div>
      <div>
        <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
          Getting Creators
        </h3>
      </div>
      <div>
        <Button onClick={handleGetCreator}>Get Creator</Button>
      </div>
      {results}
    </div>
  );
}
