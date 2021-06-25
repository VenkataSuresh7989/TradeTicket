const express = require("express");
const app = express();
const PORT = 9090;

app.get("/", (request, response) => {
  response.send({
    message: "API Works fine",
  });
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
