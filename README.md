# Send Any Message

"Send Any Message" is a platform built with **Next.js**, **Prisma**, and **Auth.js** where users can sign in using Google, choose a username, and receive anonymous messages from anyone. This project allows users to interact with others without revealing their identity.

## Features

- **Sign In with Google**: Users can quickly sign in using their Google account.
- **Username Choice**: After signing in, users can select their username.
- **Anonymous Messaging**: Anyone can send anonymous messages to any user on the platform.
- **Secure Authentication**: Uses Auth.js for authentication with Google.
- **Database Integration**: Prisma is used to handle database operations efficiently.

## Tech Stack

- **Next.js**: Framework for building React applications.
- **Prisma**: ORM for database interaction.
- **Auth.js**: Authentication library for handling OAuth-based login.
- **SQLite** (or any database of choice): Stores user data and messages.

## Installation

### Prerequisites

- Node.js (>= 16.x)
- npm or yarn
- A Google Developer account for setting up OAuth credentials

### Step-by-Step Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sagarkarmoker/send-any-message.git
   cd send-any-message
   npm install
   # or
   yarn install

2. **Install dependencies and run:**

    Use npm or yarn to install the required dependencies.

    ```bash
    npm install
    npm run dev
