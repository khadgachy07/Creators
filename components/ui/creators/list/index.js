import { useWeb3 } from "@components/providers";
import { Button } from "@components/ui/common";
import Card from "@components/ui/common/cards";
import { useAccount } from "@components/web3/hooks/useAccount";

export default function List() {
  const { account } = useAccount();
  const { contract } = useWeb3();

  const handleGetCreator = async() => {
    try {
      if (account.data && contract) {
        const result = await contract.methods
          .getCretors()
          .call({ from: account.data });
        console.log(result);
        alert('Successfully got creators ')
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
        <div className= "flex flex-wrap -mx-3 my-6">
            <ul>
              <li>result[1].age</li>
            </ul>
        </div>
    </div>
  );
}
