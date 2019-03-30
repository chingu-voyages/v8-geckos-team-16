

# Pages

- landing (only logged out); path: '/'
  - What is meetup?
  - links to log in and register
  - link to discover
- discover (logged in and logged out?); path: '/discover'
  - search box (events or groups, where?, what?)
  - results are shown below
- group detail page (logged in and logged out?); path: '/groups/[hash]'
  - shows the name of the group, an image, description, members, admin, events,
  - buttons to join and to leave the group (when logged in)
  - create new events (as an admin)
- event detail page (logged in and logged out?); path: ?
  - shows the hosting group, description, members that are willing to come
  - buttons to show whether user will come to event or not (when logged in)
- dashboard (only logged in); path: '/dashboard'
  - shows upcoming events, new groups/events in city, (messages, trendy stuff, groups/events the user might like)
- profile (only logged in); path: 'profile'
  - shows personal information (user name, short description, groups, groups with admin status)
  - (feature to edit username and description later)
- new group (only logged in); path: ?
  - enter name, description
  - upload image
- new event (only logged in); path: ?
  - enter description
  - set date
