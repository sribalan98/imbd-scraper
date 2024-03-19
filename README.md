
# IMDb API Scrapper

This project is a simple IMDb API wrapper built with Express.js, Axios, and Cheerio. It allows users to retrieve movie or TV show information by either IMDb ID or IMDb URL.

## Features

- Get by ID: Endpoint to fetch movie or TV show details by IMDb ID.
- Get by URL: Endpoint to fetch movie or TV show details by IMDb URL.
## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
## Installation

1. Clone the repository:

```bash
  git clone https://github.com/sribalan98/imbd-scrapper.git
```

2. Install dependencies:
```bash
  npm install
```

3. Start the server:
```bash
  npm start
```



## Usage 

#### Get by ID
Send a POST request to /getByID with the IMDb ID in the request body.

- Example:
```bash
  POST /getByID
  Content-Type: application/json

{
  "id": "tt1234567"
}
```

#### Get by URL
Send a POST request to /getByURL with the IMDb URL in the request body.

- Example:
```bash
  POST /getByURL
  Content-Type: application/json

{
  "url": "https://www.imdb.com/title/tt1234567/"
}
```

## Dependencies

- Express
- Axios
- Cheerio
## Project Structure
- main.js -> imdb.min.js
## License

[MIT](https://choosealicense.com/licenses/mit/)

