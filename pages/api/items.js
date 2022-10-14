// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "./product.json"

//ya por defecto viene con este manejador que nos regresa un json
export default function handler(req, res) {
  res.status(200).json(db)
}
