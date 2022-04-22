# This is a repository containing files for zjadlem.pl website.

## That is the biggest project I have created, which I am constantly working on. You can see it by entering [zjadlem.pl](zjadlem.pl) website.

### The website is built with vue.js, and is using:
- Vue (Core)
- Vuex (State manager)
- Vue router (For routing)
- Firebase/Firestore (As main database for restaurants)
- Vuexfire (connecting vue state with firebase database)
- Auth0 (Users, authentication)
- Vue bootstrap
- Custom css
- Custom javascript

The website allows users to:
- browse through restaurants
- see their menus
- other people's ratings and comments
- create account
- add friends
- see friends' ratings.
- rate restaurants and each dish
- remove their own ratings
- add anonymous rate/comment
- change website language to one of **10 languages**
- filter restaurants, by its cuisine or city
- report ratings

*There is also a moderator role, which I can give out to someone. The moderator can do all of the above, and additionally can remove each rate/comment, if he finds it inappropriate.*
The application is using rules on auth0 to verify users and return their user/app properties stored on auth0, which allows us to safely detect if a user is a moderator or not.

The project is being build in agile methodology and using Jira software for development tracking.

