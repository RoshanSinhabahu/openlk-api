import app from "./app.js";
import { db } from "./config/db.js";


const PORT = process.env.PORT || 5000;


db.connect()
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log("Database connection failed");
        console.log(err.message);
    });


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});