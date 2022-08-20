import { useWeb3 } from "@components/providers";
import { Button } from "@components/ui/common";
import { useAccount } from "@components/web3/hooks/useAccount";
import { useRef, useState } from "react";

export default function PersonHash() {
  const HashRef = useRef();
  const { account } = useAccount();
  const { contract } = useWeb3();

  const [person, setPerson] = useState();

  const handleFindByHash = async () => {
    const hash = HashRef.current.value;

    if (hash) {
      try {
        if (account.data && contract) {
          const result = await contract.methods
            .personsHash(hash)
            .call({ from: account.data })
          setPerson(result)
          alert('Successfully Got')
        }
        else {
          alert("Please Connect to metamask");
        }
      } catch {
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
          Get Person by Hash
        </h3>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-contact-address"
          >
            Hash Key
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-contact-address"
            type="text"
            placeholder="0xa3fa....."
            ref={HashRef}
            required
          />
        </div>
      </div>
      <div>
        <Button onClick={handleFindByHash}>Find</Button>
      </div>
      {person && (
        <div>
          <ul>
            <li>Age: {person.age}</li>
            <li>Name: {person.name}</li>
            <li>Email: {person.contact_address}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
