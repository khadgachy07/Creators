import { useWeb3 } from "@components/providers";
import { Button } from "@components/ui/common";

import { useAccount } from "@components/web3/hooks/useAccount";
import { useState } from "react";

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
          if (result.length == 0) {
            alert('No any Creators found');
          }
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
      {results && results.map(
        (creator,index) => {
          return (
            <div key={index} className="bg-stone-200 h-auto min-h-min w-72 min-w-max m-1 p-1 rounded-tl-xl rounded-br-xl border-2 border-zinc-500 border-dashed">
              <ul>
                <li>Age: {creator.age}</li>
                <li>Name: {creator.name}</li>
                <li>Email: {creator.contact_address}</li>
              </ul>
            </div>
          )
        }
      )}
    </div>
  );
}
