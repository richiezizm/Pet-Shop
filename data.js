// database of pets, pets breed, pet age, owners name , telephone numbers, and appointments
const pets = [
    {
        id: 1,
        name: 'Fido',
        breed: 'Labrador',
        age: 3,
        owner: 'John',
        telephone: '555-555-5555',
        appointments: [

            {
                date: '01/01/2020',
                time: '10:00',
                reason: 'checkup'
            },
        ]
    },
    {
        id: 2,
        name: 'Spot',
        breed: 'Poodle',
        age: 2,
        owner: 'Jane',
        telephone: '555-555-5555',
        appointments: [
            {
                date: '01/01/2020',
                time: '10:00',
                reason: 'checkup'
            },

        ]
    },
    {
        id: 3,
        name: 'Rover',
        breed: 'Pitbull',
        age: 1,
        owner: 'John',
        telephone: '555-555-5555',
        appointments: [
            {
                date: '01/01/2020',
                time: '10:00',
                reason: 'checkup'
            },
            {
                date: '01/01/2020',
                time: '10:00',
                reason: 'checkup'
            }
        ]
    }
];

module.exports = pets;

// Let's create GET commands which retrieve different sets of data from our pet shop
// First we'll define a way to get all of our pets
app.get('/api/v1/pets', (req, res) => {
   

});

//Next, we'll create a way to retieve a pet from the database using the name parameter
app.get('/api/v1/pets/:name', (req, res) => {

    const pet = pets.find(pet => pet.name === name);

});

//Finally, we'll retrieve a single pet from our database list by entering their owner's name
app.get('/api/v1/pets/owner', (req, res) => {

    const pet = pets.find(pet => pet.owner === owner);

});

//Serve our index.html for demonstrative purposes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${5500}`);
});