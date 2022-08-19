import { useWeb3 } from "@components/providers";
import { Button } from "@components/ui/common";
import { useAccount } from "@components/web3/hooks/useAccount";
import { useRef } from "react";

export default function RemoveCreators() {
  const { account } = useAccount();
  const { contract } = useWeb3();
  const IndexRef = useRef();

  const handleRemove = async () => {
    const index = IndexRef.current.value;

    if (index) {
      try {
        
        if (account.data && contract) {
          const result = await contract.methods
            .removePerson(index)
            .send({ from: account.data });
          console.log(result);
          alert('Successfully removed')
        } else {
          alert("Please Connect to metamask");
        }
      } catch (error) {
        alert("Function failed");
      }
    } else {
      alert("Please input the index");
    }
  };

  return (
    <div className="w-full max-w-lg">
      <div>
        <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
          Removing Creators
        </h3>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-index"
          >
            Index
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-index"
            type="number"
            ref={IndexRef}
            placeholder="0"
            required
          />
        </div>
      </div>
      <div>
        <Button onClick={handleRemove}>Remove</Button>
      </div>
    </div>
  );
}
