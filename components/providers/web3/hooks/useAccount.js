/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import useSWR from "swr";


export const handler = (web3, provider) => () => {

    const { data,mutate, ...rest } = useSWR(() => 
    web3 ? "web3/accounts" : null,
      async () => {
        const accounts = await web3.eth.getAccounts();
        return accounts[0];
      }
  );

    useEffect(() => {
        provider &&
        provider.on("accountsChanged",
        (accounts) => mutate(accounts[0] ?? null));
      }, [provider])

    return { account: {
        data,
        mutate,
        ...rest
    } }
}

