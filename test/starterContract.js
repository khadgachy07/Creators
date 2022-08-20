
const StarterContract = artifacts.require('StarterContract');

contract('StarterContract', () => { 
    let starterContract = null;
    before(async () => {
        starterContract = await StarterContract.deployed();
    });

    it('Should add the person in CreatorsArray', async () => {
        await starterContract.addCreator(22,'Khadga Chy','khadga@gmail.com');
        const person = await starterContract.Creators(0);
        
        assert(person[0].toNumber() === 22);
        assert(person[1] === 'Khadga Chy');
        assert(person[2] === 'khadga@gmail.com');
    })

    it('Should get all the person in CreatorsArray', async() => {
        await starterContract.addCreator(24,'Bruce Wayne','bruce@gmail.com');
        const creators =  await starterContract.getCreators();

        assert(creators.length === 2);
        
    })

    it('Should remove a preson from CreatorsArray', async () => { 
        await starterContract.removePerson(0);
        const creators = await starterContract.getCreators();

        assert(creators.length === 1);

        const person = await starterContract.Creators(0);
        assert(person[0].toNumber() === 24);
        assert(person[1] === 'Bruce Wayne');
        assert(person[2] === 'bruce@gmail.com');
    })

    it('Should get a preson by name', async () => {
        await starterContract.addCreator(22,'Khadga Chy','khadga@gmail.com');
        const person = await starterContract.getPerson('Bruce Wayne');

        assert(person[0] === '24');
        assert(person[1] === 'Bruce Wayne');
        assert(person[2] === 'bruce@gmail.com');
    })

    it('Should get a hash key of a person', async () => { 
        const hash = await starterContract.hashPerson(1);
        
        const person = await starterContract.personsHash(hash);
        assert(person[0].toNumber() === 22);
        assert(person[1] === 'Khadga Chy');
        assert(person[2] === 'khadga@gmail.com');
    })
})