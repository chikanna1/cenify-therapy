import { insuranceOptionsByState } from "./data";

export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(insuranceOptionsByState);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed ` });
  }
  res.status(200).json(therapists);
};
