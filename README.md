# Project Details Section


### Project Title



 EventBooking DApp

### Project abstract




_The EventBooking DApp is a decentralized application (DApp) that facilitates the seamless hosting and booking of events using cryptocurrencies such as Ethereum (ETH) and Matic. The core functionality involves users being able to host events and interested participants being able to book tickets using supported cryptocurrencies. Each booked ticket is represented as a unique non-fungible token (NFT) containing a QR code for easy verification by event organizers._

### Project breakdown

The EventBooking DApp offers a user-friendly and secure platform for event organizers and attendees to interact with the decentralized world of event hosting and ticket booking. Here's a breakdown of its key features and functionalities:

Event Hosting:

Users can create and host events through the DApp.
Essential details such as event name, date, time, venue, and ticket prices can be specified during the event creation process.
Ticket Booking:

Interested participants can browse through the list of events and book tickets using supported cryptocurrencies.
The booking process involves a secure and straightforward payment system integrated with Ethereum and Matic.
NFT Ticket Generation:

Upon successful booking, users receive a unique NFT as their event ticket.
The NFT contains relevant details about the event and a QR code that serves as a digital ticket.
QR Code Verification:

Event organizers can scan the QR code on the NFT to verify the authenticity of the ticket.
This ensures a secure and efficient entry process at the event venue.
Real-time Event Updates:

Users can receive real-time updates about their booked events, including any changes in schedule or venue.
User Wallet Integration:

The DApp integrates with users' cryptocurrency wallets (such as MetaMask) for secure transactions and ticket management.

### Technology Stack

The EventBooking DApp leverages a variety of technologies to ensure its functionality, security, and user experience. The technology stack includes:

Smart Contracts:

Solidity is used to develop smart contracts that handle the logic of event creation, ticket booking, and NFT generation.
Front-end Development:

Next.js is employed to build the web application's front end, providing a fast and responsive user interface.
Blockchain Integration:

Ethereum and Matic are integrated to support cryptocurrency transactions and interact with smart contracts on the respective blockchains.
Styling:

Tailwind CSS is utilized for efficient styling and design, ensuring a visually appealing and user-friendly interface.
### Work Flow Diagram



### Application Workflow Storyboard

![Blank diagram](https://github.com/codesters-r2w3/Project-proposal/assets/79699023/93c5e4f7-c458-4315-aa79-1474b0a14864)

## Event Hosting

1. **User creates a new event:** 
   - User enters event details through the frontend.

2. **Frontend triggers a transaction:**
   - Frontend initiates a transaction to the smart contract on the Ethereum/Matic blockchain to record event data.

3. **Smart contract verification:**
   - Smart contract verifies the entered data and adds the event to the blockchain.

## Ticket Booking

1. **User browses and selects an event:** 
   - User browses available events and selects an event to book.

2. **Frontend initiates a transaction:**
   - Frontend triggers a cryptocurrency transaction to the smart contract for ticket purchase.

3. **Smart contract verification and NFT generation:**
   - Smart contract verifies the transaction, generates a unique NFT as a digital ticket, and records ownership on the blockchain.
   - NFT details and QR code are sent to the user's wallet.

## QR Code Verification

1. **Event organizer scans the QR code:** 
   - Event organizer scans the QR code on the user's NFT using the frontend.

2. **Frontend verification request:**
   - Frontend sends a verification request to the smart contract on the blockchain.

3. **Smart contract validates the NFT:**
   - Smart contract validates the NFT and confirms ticket authenticity.

4. **Event organizer confirmation:**
   - Event organizer receives confirmation, granting entry to the event.

## Real-time Event Updates

1. **Event details recorded on the blockchain:**
   - Event details and updates are recorded on the blockchain by the smart contract.

2. **Frontend checks for updates:**
   - Frontend regularly checks for updates and displays real-time information to users.

## User Wallet Integration

1. **Frontend integrates with users' wallets:**
   - Frontend integrates with users' cryptocurrency wallets (e.g., MetaMask) for secure transactions.

2. **Smart contracts interact with the wallet:**
   - Smart contracts interact with the user's wallet for payment processing and NFT ownership.

## Scaling and Load Balancing

1. **Load balancing mechanisms:**
   - In case of increased user activity, load balancing mechanisms distribute incoming requests among multiple servers.

2. **Horizontal scaling:**
   - Horizontal scaling involves deploying additional nodes to handle increased traffic.

3. **Database optimization:**
   - Optimized database queries ensure efficient data retrieval and storage.

## Touchpoints

1. **Frontend communication with blockchain:**
   - Frontend communicates with the Ethereum/Matic blockchain through Web3.js for smart contract interactions.

2. **Smart contract management:**
   - Smart contracts manage the creation of events, ticket bookings, and verification.

3. **Blockchain as a decentralized ledger:**
   - Blockchain serves as a decentralized ledger ensuring transparency and security.

4. **External APIs for real-time updates:**
   - External APIs may be utilized for real-time event updates or market information.

5. **User wallet interaction:**
   - User wallets interact with the frontend and smart contracts for cryptocurrency transactions and NFT ownership.


### Milestone Breakdown

Outline the key milestones for your project and the associated timelines.

**_Sample_:**

1. **_Project Kick-off (Days 1-2)_:** _Team formation and project ideation_.
2. **_Design Phase (Days 3-4)_:** _Create wireframes and finalize design concepts_.
3. **_Smart Contract development (Days 1-2)_:** _Design and implement smart contracts for event creation, ticket booking, and NFT generation._.
4. 3. **_Frontend development (Days 2-3)_:** _Design and implement frontend components for user registration, event creation, and ticket booking and wallet integration.._.

---

# Team Details section

### Teammates

Please ensure to add the names of each member of your team along with their respective GitHub profiles to this list.

**_Sample:_**

- NIkhil Taneja ([GitHub Profile](https://github.com/nikhil075))
- Revand S ([GitHub Profile](https://github.com/revand5467))
- Sidharth ([GitHub Profile](https://github.com/SIDHARTH20K4))
- Vignesh Murugan ([GitHub Profile](https://github.com/webdev-vignesh))

### Individual Contribution Breakdown



**_Sample:_**

- _NIkhil Taneja: Smart Contract Development(Event creation)_
- _Vignesh Murugan: Frontend Design and Implementation (Home page and booking)_
- _Revand S: Frontend and implementation (Qr code scanning and verifying
)_
- _Sidharth : Smart Contract Development(NFT creation)_

---

# Future Prospects and Conclusion

**Answer the following questions regarding the future prospects and scaling of your project.**

1. What are the potential future features or enhancements you envision for your project?
   - We envision implementing a community engagement feature, allowing event attendees to interact, share experiences, and rate events within the DApp.
2. How do you plan to scale the project if there's an increase in user activity or data volume?
   - In the event of increased user activity, we plan to implement horizontal scaling by deploying additional nodes and utilizing blockchain scaling solutions like layer 2 solutions for Ethereum (e.g., Optimistic Rollups) to enhance transaction throughput.
3. Provide a concise one-line summary of your proposal and its objectives.
   - Our project, EventBooking DApp, aims to transform event management by providing a decentralized platform for hosting and booking events, with secure NFT-based tickets and seamless cryptocurrency transactions.
