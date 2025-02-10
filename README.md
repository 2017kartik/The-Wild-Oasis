# The Wild Oasis

![The Wild Oasis Logo](public/logo-light.png)

## Overview
The Wild Oasis is a modern and efficient hotel management system designed to streamline bookings, check-ins, check-outs, and guest management. This project leverages **React (Vite)**, **Tailwind CSS**, and **custom hooks** to provide a seamless user experience. The platform is structured to ensure optimal performance, maintainability, and scalability.

## Features
- **Authentication & Authorization**
  - Secure login and signup
  - Role-based access control (Admin, Staff, Guest)
  
- **Bookings Management**
  - Create, update, and delete bookings
  - View real-time booking statuses
  - Assign cabins to guests dynamically

- **Check-in & Check-out System**
  - Efficient guest check-in with optional breakfast selection
  - Streamlined check-out process with automated invoicing
  
- **Dashboard & Analytics**
  - Track current-day stays and upcoming reservations
  - Generate insights into occupancy trends
  
- **Notification System**
  - Real-time status updates
  - Alerts for upcoming and pending check-ins/check-outs

- **Custom Hooks & API Services**
  - Modular and reusable codebase
  - Optimized data fetching with React Query

## Tech Stack
- **Frontend:** React (Vite), JavaScript, Tailwind CSS
- **Backend:** Supabase
- **State Management:** React Context API
- **Routing:** React Router
- **API Handling:** Axios, React Query
- **Hosting:** Netlify
- **Linting & Formatting:** ESLint, Prettier

## Installation
Follow these steps to set up and run the project locally:

```sh
# Clone the repository
git clone https://github.com/2017kartik/The-Wild-Oasis.git

# Navigate to the project directory
cd The-Wild-Oasis

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Project Structure
```plaintext
The-Wild-Oasis/
├── public/               # Static assets
├── src/
│   ├── assets/          # Images and icons
│   ├── context/         # Global state management
│   ├── features/        # Core functionalities
│   │   ├── authentication/
│   │   ├── bookings/
│   │   ├── check-in-out/
│   │   ├── dashboard/
│   │   ├── settings/
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Application pages
│   ├── services/        # API calls
│   ├── styles/          # Global styles
│   ├── ui/              # Reusable UI components
│   ├── utils/           # Helper functions
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Entry point
├── .eslintrc.cjs        # ESLint configuration
├── .gitignore           # Git ignore file
├── package.json         # Project metadata and dependencies
├── vite.config.js       # Vite configuration
├── netlify.toml         # Deployment settings for Netlify
├── README.md            # Project documentation
```

## Deployment
The project is deployed on **Netlify** for fast and reliable performance. To deploy your own version:
1. Fork the repository on GitHub.
2. Push changes to the `main` branch.
3. Connect the repository to Netlify and configure automatic deployments.

## Contributing
We welcome contributions to enhance **The Wild Oasis**. To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make necessary improvements and commit changes.
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request for review.

## License
This project is licensed under the **MIT License**.

## Contact
For queries or collaboration opportunities, reach out via:
- **GitHub:** [@2017kartik](https://github.com/2017kartik)
- **Email:** kartik@example.com
- **LinkedIn:** [Kartik Agrawal](https://www.linkedin.com/in/kartik-agrawal)

---
_The Wild Oasis - Efficient & Scalable Hotel Management System_

