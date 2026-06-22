import app from "./src/app";
import connectDb from "./src/db/db";
import config from "./src/config/config";

const PORT = config.PORT;

connectDb();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
