import Creators from "@pages/creators";



export default function Card({}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl w-3/6">
      <div className="flex h-full w-12 before:m-2 p-4">
        <ul className="w-48 text-sm font-medium text-gray-900   dark:bg-gray-700  dark:text-white">
          <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
            Age :
          </li>
          <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
            Name
          </li>
          <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
            Contact Address
          </li>
        </ul>
      </div>
    </div>
  );
}
