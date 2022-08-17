import { List } from "@components/ui/creators";
import { Hash, Name, PersonHash } from "@components/ui/person";

export default function Creators() {
  return (
    <div>
      <div className="my-4">
        <Name/>
      </div>
      <Hash/>
      <PersonHash/>
    </div>
  );
}