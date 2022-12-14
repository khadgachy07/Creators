
## Creator Dapp on Goerli Network
Creator is a decentralized web application that allows user to store a person along with their 
details like Age, Name, Email in a Array that is present in blockchain. 

This dapp is currently depolyed on Rinkeby Network. Truffle and Ganache was used to develop this
application.

Truffle is a world class development environment, testing framework and asset pipeline for 
blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier.

Ganache is a personal blockchain for rapid Ethereum and Corda distributed application development. 
You can use Ganache across the entire development cycle; enabling you to develop, deploy, and test 
your dApps in a safe and deterministic environment.

![Screenshot from 2022-08-21 22-59-25](https://user-images.githubusercontent.com/55689890/185802941-adde8655-8287-4a2f-a07b-2a47dad769a0.png)

User needs to connect to Metamask to perform.
Incase of metamask is not installed, 'Install Metamask' button will appeared instead of 'Connect' button.

![Screenshot from 2022-08-21 23-42-45](https://user-images.githubusercontent.com/55689890/185804531-419a6e55-b0ef-4b94-a13b-369b91c0e6dd.png)


## Functionalities

1. Add Creator : This function allows user to Add a creator with age, name and email into a Array.

2. Remove Creator(Only Owner) : This function allows user to remove a certain person using index value.

3. Get Creator : This function allows contract owner to get all creator stored in a Array.

![Screenshot from 2022-08-21 23-00-34](https://user-images.githubusercontent.com/55689890/185805475-802fce32-17ee-4329-bab6-a3677edff8c4.png)

4. Find By Name(Only Owner) : This function allow contract owner to find a Creator using a Name of a Creator.

5. Get Hash : This function allow user to find a Hash(keccak256) of a Creator.

6. Find by Hash : This function allow user to find a Creator using a Hash key.

![Screenshot from 2022-08-21 23-00-42](https://user-images.githubusercontent.com/55689890/185805723-c9979d56-5e80-4155-8bb5-be20ccbfed1f.png)

## Try on Local Machine

If you want to try this dapp in your loacl machine. (Assuming, you are familier with Truffle and Ganache)
1. Clone this Repostiory in your machine.
2. Open terminal inside a root folder of project.
3. Run 'yarn' to install all dependencies required to run project in your machine.
4. Run 'yarn dev' to run a project in LocalHost.
5. Change the Network ID in .env.development to Ganache's network id.
6. Change the network to LocalHost in your metamask also which should be connected to Ganache.

## Deployment 

This decentralized web application is deployed using a Vercel.
Here is link: https://creators-ebon.vercel.app/


