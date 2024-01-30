const Pinata = require("@pinata/sdk");
const qrImage = require("qr-image");
const streamifier = require("streamifier");

const pinata = new Pinata(process.env.KEY, process.env.SECRET);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { userName, email, eventName } = req.body;
      
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
      const qrCodeIpfsUrl = pinFile.IpfsHash;

      // Generate metadata JSON
      const metadata = {
        name: userName,
        description: `Event: ${eventName}, Email: ${email}`,
        image: `https://gateway.pinata.cloud/ipfs/${qrCodeIpfsUrl}`,
        attributes: [
          {
            trait_type: "Event Name",
            value: eventName,
          },
          {
            trait_type: "Email",
            value: email,
          },
        ],
      };

      // Convert the metadata JSON to a buffer
      const metadataBuffer = Buffer.from(JSON.stringify(metadata));

      // Convert the metadata buffer to a readable stream
      const metadataStream = streamifier.createReadStream(metadataBuffer);

      // Pin the metadata JSON to Pinata
      const pinMetadataFile = await pinata.pinFileToIPFS(metadataStream, { pinataMetadata: { name: 'metadata.json' } });
      const metadataIpfsUrl = pinMetadataFile.IpfsHash;

      // Return the IPFS URL of the stored QR code and metadata JSON
      console.log("QR Code IPFS URL:", qrCodeIpfsUrl);
      console.log("Metadata IPFS URL:", metadataIpfsUrl);
      res.status(200).json({ qrCodeIpfsUrl, metadataIpfsUrl });
    } catch (error) {
      console.error('Error generating QR code:', error);
      res.status(500).json({ error: 'Failed to generate QR code' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
