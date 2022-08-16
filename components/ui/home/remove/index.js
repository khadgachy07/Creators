import { Button } from "@components/ui/common";

export default function RemoveCreators() {
  return (
    <div className="w-full max-w-lg">
      <div>
        <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">Removing Creators</h3>
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
            placeholder="0"
          />
        </div>
        
      </div>
      <div>
      <Button>Remove</Button>
      </div>
     
    </div>
  );
}
