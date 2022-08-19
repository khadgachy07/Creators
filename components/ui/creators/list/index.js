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

        alert("Successfully got creators ");
      } else {
        alert("Please Connect to metamask");
      }
    } catch (error) {
      alert("Function failed");
    }
  };
  return (
    <div>
      { results}
      <div>
        <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
          Getting Creators
        </h3>
      </div>
      <div>
        <Button onClick={handleGetCreator}>Get Creator</Button>
      </div>
      <div className="flex flex-wrap -mx-3 my-6">
        { results && 
          results.map((result,index) => { 
            <ul key={index}>
              <li>Age : {result.age} </li>
              <li>Name : {result.name} </li>
              <li>Email : {result.contact_address} </li>
            </ul>
          })
        }
      </div>
    </div>
  );
}
