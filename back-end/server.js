import "dotenv/config";
import app from "./src/app.js";
import cors from "cors";

const PORT = process.env.PORT || 3000;
app.use(cors());

app.listen(PORT, () => {
  console.log("Servidor escutando!");
});

