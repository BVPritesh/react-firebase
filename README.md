# React Firebase Realtime Users Demo

## Project Description

This project is a demonstration of real-time data synchronization using React.js and Firebase Firestore. It showcases how changes in the Firebase database automatically update the user interface without manual refreshes. The application displays a table of users (ID, Name, Email) that updates in real-time as data changes in the Firestore database.

## Technologies Used

- **Node.js**: Version 24
- **React**: Version 19.2.5
- **Tailwind CSS**: Version 4.2.2
- **Firebase**: Version 12.12.0
- **TypeScript**: ~6.0.2
- **Vite**: ^8.0.9

## Features

- **Realtime Data Updates**: User data is fetched from Firebase Firestore and updates automatically in the UI when changes occur in the database.
- **Responsive Design**: Built with Tailwind CSS for a clean, responsive user interface.
- **TypeScript Support**: Full TypeScript integration for type safety and better development experience.
- **Modular Architecture**: Organized code structure with separate components, services, and types.

## Project Structure

```
src/
├── components/
│   └── DataTable.tsx          # Component for displaying user data in a table
├── firebase/
│   └── config.ts              # Firebase configuration and initialization
├── services/
│   └── firestore.ts           # Firestore service for real-time data subscription
├── types/
│   └── index.ts               # TypeScript type definitions
├── App.tsx                    # Main application component
├── App.css                    # Application styles
├── index.css                  # Global styles with Tailwind imports
└── main.tsx                   # Application entry point
```

## Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BVPritesh/react-firebase.git
   cd react-firebase
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Firebase** (see Firebase Setup section below).

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

6. **Preview the production build**:
   ```bash
   npm run preview
   ```

## Firebase Database Setup Steps

1. **Create a Firebase Project**:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click "Create a project" or select an existing one.
   - Follow the setup wizard to create your project.

2. **Enable Firestore Database**:
   - In your Firebase project, navigate to "Firestore Database".
   - Click "Create database".
   - Choose "Start in test mode" for development (you can change rules later for production).

3. **Add Sample Data**:
   - In the Firestore console, create a collection called `users`.
   - Add documents with fields: `name` (string) and `email` (string).
   - Example document:
     ```json
     {
       "name": "John Doe",
       "email": "john@example.com"
     }
     ```

## Firebase Web App Configuration Setup Steps

1. **Register Your Web App**:
   - In the Firebase Console, click the gear icon → "Project settings".
   - Scroll down to "Your apps" section and click the web icon (`</>`) to add a web app.
   - Enter an app nickname and click "Register app".

2. **Get Firebase Configuration**:
   - After registering, you'll see a config object with keys like `apiKey`, `authDomain`, etc.
   - Copy this configuration; you'll need it for the next step.

3. **Create Environment Variables**:
   - In your project root, create a `.env` file (make sure it's in `.gitignore`).
   - Add the following variables using the values from your Firebase config:
     ```
     VITE_FIREBASE_API_KEY=your_api_key_here
     VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
     ```

## Firebase Setup with React.js Steps

1. **Install Firebase SDK**:
   - The Firebase SDK is already included in `package.json`. If not, install it:
     ```bash
     npm install firebase
     ```

2. **Configure Firebase in Your App**:
   - The configuration is handled in `src/firebase/config.ts`.
   - It initializes the Firebase app and exports the Firestore database instance.

3. **Create Firestore Service**:
   - `src/services/firestore.ts` contains the `subscribeToUsers` function.
   - This function sets up a real-time listener on the `users` collection.
   - It uses `onSnapshot` to listen for changes and calls a callback with updated data.

4. **Use the Service in Components**:
   - In `src/App.tsx`, the `useEffect` hook subscribes to user data changes.
   - When data changes, the state is updated, causing the UI to re-render automatically.

5. **Handle Real-time Updates**:
   - The `DataTable` component receives the user data as props.
   - Any changes in Firestore (add, update, delete users) will immediately reflect in the table.

## Usage

- Start the development server with `npm run dev`.
- Open your browser to `http://localhost:5173` (or the port shown in the terminal).
- The table will display users from your Firestore `users` collection.
- Make changes to the data in Firebase Console, and watch the table update in real-time.

## Development

- **Linting**: Run `npm run lint` to check for code issues.
- **Type Checking**: TypeScript is configured for strict type checking.
- **Hot Module Replacement**: Vite provides fast HMR for development.

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Run tests and linting.
5. Submit a pull request.

## License

This project is for educational purposes. Feel free to use and modify as needed.
