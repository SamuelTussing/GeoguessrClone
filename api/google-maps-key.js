export default function handler(req, res) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    res.status(500).json({ error: 'La clé API Google Maps est manquante.' });
    return;
  }

  res.status(200).json({ key: apiKey });
}
