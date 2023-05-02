import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address, latitude, longitude } = JSON.parse(req.body);
  console.log(address);
}
