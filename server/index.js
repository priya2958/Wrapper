// server/index.js
const express = require("express");
const ResponseBuilder = require("./responseBuilder");
const errorCodes = require("./errorCodes");
const app = express();
app.use(express.json());

// Example success route
app.get("/api/user/:id", (req, res) => {
  const user = { id: req.params.id, name: "John Doe" };
  const response = new ResponseBuilder()
    .setStatus("success")
    .setMessage("User fetched successfully")
    .setData(user)
    .build();
  res.json(response);
});

// Example paginated route
app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  const response = new ResponseBuilder()
    .setStatus("success")
    .setMessage("Users fetched successfully")
    .setData(users)
    .setPagination({ page: 1, pageSize: 2, total: 10 })
    .build();
  res.json(response);
});

// Example error route
app.get("/api/error", (req, res) => {
  const response = new ResponseBuilder()
    .setStatus("error")
    .setMessage("Something went wrong")
    .setErrorCode(errorCodes.UNKNOWN_ERROR)
    .build();
  res.status(500).json(response);
});

// 404 handler
app.use((req, res) => {
  const response = new ResponseBuilder()
    .setStatus("error")
    .setMessage("Not found")
    .setErrorCode(errorCodes.NOT_FOUND)
    .build();
  res.status(404).json(response);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
