// Social media profile

//user information
const userName = 'ural';
const fullName = 'Jhon Doe';
const age = 25;
const isStudent = true;

//address
const address = {
    street: '123 Abeca road',
    city: 'Techville',
    state: 'Codeland',
    zipCode: 5030
}

//hobbies
const hobbies = ['Coding', 'Reading', 'Gaming']

// generating personalized bio
const personalizedBio = `Hi, I'm ${fullName}.
I'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(', ')}
Follow me for coding adventures`

// print user profile
console.log(personalizedBio);