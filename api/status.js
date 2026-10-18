
export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    message: "Nuclear Now Japan API is working",
    updatedAt: new Date().toISOString()
  });
}
