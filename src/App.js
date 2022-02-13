import React from 'react';
import AppLayout from "./layout/app";
import Routes from "./routes/routes";
import Navbar from "./components/navbar";

const App = () => (
    <AppLayout>
        <Navbar />
        <Routes />
    </AppLayout>
);

export default App;
