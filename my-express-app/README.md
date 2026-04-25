# My Express App

A simple Express.js application demonstrating basic routing and static file serving.

## Features

- **GET /items**: Retrieve a list of items (Apple, Banana, Orange)
- **POST /items**: Add a new item to the list
- **POST /submit**: Submit data and receive a response
- **GET /about**: Display an "About Us" page
- Serves static files from the `public/` directory

## Installation

1. Clone the repository or download the files.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

## Running the Application

Start the server with:

```
node index.js
```

The server will run on `http://localhost:3000`.

Open your browser and navigate to `http://localhost:3000` to view the static index.html page.

## API Endpoints

- `GET /items`: Returns JSON array of items
- `POST /items`: Expects JSON body with `{"item": "newItem"}`, adds to list
- `POST /submit`: Accepts JSON data and echoes it back
- `GET /about`: Returns "About Us" text

## Dependencies

- Express.js

## License

ISC