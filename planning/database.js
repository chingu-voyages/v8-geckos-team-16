
// ## groups
export const groups = [
  {
    name: 'Standup Comedy Sydney',
    description: 'Meetup group located in Sydney. We wanna have fun and improve our self-confidence and public speaking skills.',
    members: [ 1234123, 439948, 928, 90293840, 98348234, 1293, 91 ],
    image: '/api/groups/images/293pf98n2p9fnlk.jpg',
    upcomingEvents: [
      { 
        date: '2019-04-23T18:25:43.511Z',
        location: {
          street: 'Mainstreet',
          number: '23',
          ZIP: '123456',
          city: 'Denver',
          country: 'USA',
        },
        description: 'We meet next to the statue of bla bla bla. Please bring a towel.',
        members: [ 928, 1293, 91 ]
      }
    ]
  }
]      


// ## users
export const users = [
  {
    userId: 1234123,
    email: 'test@test.com',
    username: 'test',
    pwhash: '98we9f8p9328p9cahdsohafskldfja',
    salt: 'woi8wnwr89vn',
    description: 'Hi I\'m very passionate about playing the tromp. Furthermore I like carving egg shells and time travelling.'
    image: '/api/users/images/pw8e8p8jp3wejfsdfj.jpg'     // not sure about that
    groups: [ 'Stand Up Comedy Sydney', '05am Workout', 'It\'s Tea Time' ],
    nationality: 'Australia',
    signupDate: '2012-04-23T18:25:43.511Z'
  }
]
