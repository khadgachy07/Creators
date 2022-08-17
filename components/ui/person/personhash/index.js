import { Button } from "@components/ui/common";

export default function PersonHash(){
    return (
        <div className="w-full max-w-lg">
        <div>
          <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">Get Person by Hash</h3>
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
            />
          </div>
        </div>
        <div>
        <Button>Find</Button>
        </div>
       
      </div>
    )
}