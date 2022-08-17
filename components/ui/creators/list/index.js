import { Button } from "@components/ui/common";
import Card from "@components/ui/common/cards";

export default function List() {
  return (
    <div>
      <div>
        <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
          Getting Creators
        </h3>
      </div>
      <div>
            <Button>Get Creator</Button>
        </div>
        <div className= "flex flex-wrap -mx-3 my-6">
            <Card/>
        </div>
    </div>
  );
}
