export default function handler(req, res) {
    // For demonstration purposes, let's send a sample JSON response
    const data = {
      message: 'Hello from the Next.js API!',
      timestamp: new Date().toISOString(),
    };
  
    // Sending a JSON response
    res.status(200).json(data);
  }