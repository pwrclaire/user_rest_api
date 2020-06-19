## REST API SERVER

### Installation

`npm install`

### Running

`npm start`

### Testing

Tests are written in Jest.

`npn run test`

### Level 1

GET uuid: localhost:3000/user/id

GET user: localhost:3000/user/\${name}

POST user: localhost:3000/user

### Level 2

View template: ejs

Users are displayed when it's entered in the parameter

Save user: Pages will reload when saving fails. Eventually leading to success

#### Knwon issues

No input checking for user input names
