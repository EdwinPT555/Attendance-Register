const express = require("express");
const app = express();

// app.set("/",()=>{
//   console.log("working...");
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`☢️☢️☢️☢️☢️  Server Running at ${PORT} ☢️☢️☢️☢️☢️`);
});
