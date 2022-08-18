import Link from "next/link";
import { Button } from "@components/ui/common";
import { useWeb3 } from "@components/providers";
import { useAccount } from "@components/web3/hooks/useAccount";

export default function NavBar() {
  const { connect, isWeb3Loaded } = useWeb3();
  const { account } = useAccount();

  return (
    <section>
      
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between lg:md-4">
            <div>
              <Link href="./">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </Link>

              <Link href="./creators">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Creators
                </a>
              </Link>

              <Link href="./person">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Person
                </a>
              </Link>
            </div>
            <div>
              {isWeb3Loaded ? (
                account.data ? (
                  <Button
                    hoverable={false}
                    className="cursor-default"
                    variant="red"
                  >
                    Hi There
                  </Button>
                ) : (
                  <Button onClick={connect}>Connect</Button>
                )
              ) : (
                <Button
                  onClick={() => window.open("https://metamask.io/", "_blank")}
                >
                  Install Metamask
                </Button>
              )}
            </div>
          </div>
        </nav>
      </div>
      { account.data && 
        <div className="flex justify-end pt-1 sm:px-6 lg:px-8">
          <div className="text-white bg-indigo-600 rounded-md p-2">
            {account.data}
          </div>
        </div>}
    </section>
  );
}

{
  /* {isLoading ? (
                <Button disabled={true} onClick={connect}>
                  Loading...
                </Button>
              ) : isWeb3Loaded ? (
                account.data ? (
                  <Button
                    hoverable={false}
                    className="cursor-default"
                    variant="red"
                  >
                    Hi There! { account.isAdmin && "Admin"}
                  </Button>
                ) : (
                  <Button onClick={connect}>Connect</Button>
                )
              ) : (
                <Button
                  onClick={() => window.open("https://metamask.io/", "_blank")}
                >
                  Install Metamask
                </Button>
              )} */
}
