import { useWeb3 } from "@components/providers";
import { AddCreators, RemoveCreators } from "@components/ui/home";
import Web3 from "web3";

export default function Home() {
  const {web3, isLoading} = useWeb3()
  console.log(web3)
  return (
    <div> 
      {isLoading ? "Is Loading" : web3 ? "web3 ready" : "Install Metamask"}
      <div className="my-4">
      <AddCreators />
      </div>
      
      <div className="my-4">
        <RemoveCreators />
      </div>
    </div>
  );
}
