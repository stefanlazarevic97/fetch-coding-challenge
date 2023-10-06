## Fetch Coding Challenge
This project is a simple server application for processing and calculating points from receipts.

### Pre-requisites

- Docker: while this project is written in JavaScript and utilizes Node.js, you don't need Node or npm installed on your machine. We'll be using Docker to ensure the project runs smoothly regardless of your local setup.

### Running the Application

To run the application, follow these steps:

1. Clone the Repository:

```
git clone https://github.com/stefanlazarevic97/fetch-coding-challenge.git
cd fetch-coding-challenge
```

2. Build the Docker Image:

```
docker build -t fetch-coding-challenge .
```

3. Run the Application:

```
docker run -p 8080:8080 fetch-coding-challenge
```

After running the command above, the server should be running and accessible at http://localhost:8080.

### Endpoints

- ```POST /receipts/process```: Processes the receipt and calculates the points.
- ```GET /receipts/:id/points```: Retrieves the points for a given receipt ID.

### Troubleshooting

If you face any issues running the application, ensure you have Docker properly installed and running on your machine. If problems persist, feel free to raise an issue in the GitHub repository.