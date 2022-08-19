import { useWeb3 } from "@components/providers";
import { AddCreators, RemoveCreators } from "@components/ui/home";


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
