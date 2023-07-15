import express from "express";
import mailRoutes from "./routes/mail.js";

const PORT = 5001 || process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mailRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running`);
});
