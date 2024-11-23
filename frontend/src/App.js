// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 


import BucketListPage from './pages/BucketListPage';

// If your schema requires SHORT data input, then use the TABLE design.
import EditItemPageTable from './pages/EditItemPageTable';
import AddItemPageTable from './pages/AddItemPageTable';

import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';

// Define the function that renders the content in Routes, using State.
function App() {

  const [listItem, setListItemToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1> ssonpatki </h1>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    <Route path="/bucketList" element={<BucketListPage setListItem={setListItemToEdit}/>} />
                    <Route path="/topics" element={<TopicsPage />} />
                    <Route path="/" element={<HomePage />} />
                 
                    {/* Use these if your schema requires LONG data input: */}
                    <Route path="/create" element={<AddItemPageTable />} /> 
                    <Route path="/update" element={<EditItemPageTable listItemToEdit={listItem} />} />

                    
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 ssonpatki </p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;