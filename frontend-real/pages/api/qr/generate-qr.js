import Pinata from 'pinata';
import QRCode from 'react-qr-code';

const pinata = new Pinata(process.env.KEY, process.env.SECRET);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { userName } = req.body;

      // Generate QR code with user's name
      const qrCodeData = `User: ${userName}`;
      const qrCodeUrl = await QRCode.toDataURL(qrCodeData);

      // Pin the QR code image to Pinata
      const pinFile = await pinata.pinFileToIPFS(qrCodeUrl);
      const ipfsUrl = pinFile.IpfsHash;

      // Return the IPFS URL of the stored QR code
      res.status(200).json({ ipfsUrl });
    } catch (error) {
      console.error('Error generating QR code:', error);
      res.status(500).json({ error: 'Failed to generate QR code' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}