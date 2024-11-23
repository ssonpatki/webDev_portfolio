import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav className="App-navigation">
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">Home</Link>
        <Link to="../bucketList">Bucket List</Link>
        <Link to="../topics">Topics</Link>
        

    </nav>
  );
}

export default Navigation;
