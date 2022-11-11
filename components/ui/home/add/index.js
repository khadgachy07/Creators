import { useWeb3 } from "@components/providers";
import { Button } from "@components/ui/common";
import { useAccount } from "@components/web3/hooks/useAccount";
import { useRef } from "react";

export default function AddCreators(e) {
  const { account } = useAccount();
  const { contract } = useWeb3();

  const AgeRef = useRef();
  const NameRef = useRef();
  const EmailRef = useRef();

  const handleAddCreator = async (e) => {
    let creator = {
      age: AgeRef.current.value,
      name: NameRef.current.value,
      email: EmailRef.current.value,
    };

    if (creator.age && creator.name && creator.email) {
      try {
        e.preventDefault();
        if (account.data && contract) {
          const result = await contract.methods
            .addCreator(creator.age, creator.name, creator.email)
            .send({ from: account.data });
          console.log(result);
          alert("Successfully Added");
          
        } else {
          alert("Please Connect to metamask");
        }
      } catch {
        alert("Function failed");
      }
    }else{
      alert ('Please fill all fields')
    }
  };

  return (
    <>
      <form className="w-full max-w-lg">
        <div>
          <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
            Adding Creators
          </h3>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-age"
            >
              Age
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-age"
              type="number"
              ref={AgeRef}
              placeholder="25"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-name"
              type="text"
              ref={NameRef}
              placeholder="Kurt Cobain"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-contact-address"
            >
              Contact Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-contact-address"
              type="email"
              ref={EmailRef}
              placeholder="xyz@gmail.com"
              required
            />
          </div>
        </div>
        <div>
          <Button onClick={handleAddCreator}>
            Add Creator
          </Button>
        </div>
      </form>
    </>
  );
}
