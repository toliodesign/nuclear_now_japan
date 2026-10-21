import { put } from '@vercel/blob';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST only' });
  }

  try {
    const result = await put(
      'test/connection-check.txt',
      'Blob connection works',
      {
        access: 'private',
        addRandomSuffix: false,
        allowOverwrite: true,
      }
    );

    return res.status(200).json({
      status: 'ok',
      message: 'Blob write succeeded',
      pathname: result.pathname,
    });
  } catch (error) {
    console.error('Blob test failed:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Blob write failed',
    });
  }
}
