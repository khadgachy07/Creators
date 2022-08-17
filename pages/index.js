import { useWeb3 } from "@components/providers";
import { AddCreators, RemoveCreators } from "@components/ui/home";
import Web3 from "web3";

export default function Home() {
 
  return (
    <div> 
      <div className="my-4">
      <AddCreators />
      </div>
      
      <div className="my-4">
        <RemoveCreators />
      </div>
    </div>
  );
}
