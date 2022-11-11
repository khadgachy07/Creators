import { useWeb3 } from "@components/providers";
import { Button } from "@components/ui/common";
import { useAccount } from "@components/web3/hooks/useAccount";
import { useRef, useState } from "react";

export default function Name() {
  const [person, setPerson] = useState();

  const NameRef = useRef();
  const { account } = useAccount();
  const { contract } = useWeb3();

  const handleFind = async (e) => {
    let name = NameRef.current.value;

    if (name) {
      console.log(name);
      try {
        if (account.data && contract) {
          const result = await contract.methods
            .getPerson(name)
            .call({ from: account.data });
          alert("Successfully Got");
          console.log(result);
          setPerson(result);
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
          Get Person by Name
        </h3>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-name"
            type="text"
            placeholder="John"
            ref={NameRef}
            required
          />
        </div>
      </div>
      <div>
        <Button onClick={handleFind}>Find</Button>
      </div>
      {person && (
        <div className="bg-stone-200 h-auto min-h-min w-72 min-w-max m-1 p-1 rounded-tl-xl rounded-br-xl border-2 border-zinc-500 border-dashed">
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
