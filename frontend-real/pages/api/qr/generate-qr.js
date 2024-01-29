const Pinata = require("@pinata/sdk");
const qrImage = require("qr-image");
const streamifier = require("streamifier");

const pinata = new Pinata(process.env.KEY, process.env.SECRET);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { userName } = req.body;
      console.log(userName);
      // Generate QR code with user's name
      const qrCodeData = `User: ${userName}`;
      const qrCodeBuffer = qrImage.imageSync(qrCodeData, { type: 'png' });

      // Convert the buffer to a readable stream
      const qrCodeStream = streamifier.createReadStream(qrCodeBuffer);

      // Pin the QR code image to Pinata
      const pinFileOptions = {
        pinataMetadata: {
          name: 'qr-code.png', // Provide a name for the pinned file
        },
      };

      const pinFile = await pinata.pinFileToIPFS(qrCodeStream, pinFileOptions);
      const ipfsUrl = pinFile.IpfsHash;

      // Return the IPFS URL of the stored QR code
      console.log(ipfsUrl);
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
