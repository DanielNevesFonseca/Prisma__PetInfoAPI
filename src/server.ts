import { app } from "."

const PORT = 3333

app.listen(PORT, () => {
  console.log(`Server Running at port ${PORT}`)
  console.log(`To access the documentation go to https://pet-info-api-5kzz.onrender.com/api-documentation`)
})