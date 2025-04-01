import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: "/Image-1-Regular.jpeg",   // ✅ no need for PUBLIC_URL
  username: "Joe Example",
  profile: "/profile-1.jpg",
};

const App = () => (
  <div className="App">
    <PhotoListItem
      id={sampleDataForPhotoListItem.id}
      imageSource={sampleDataForPhotoListItem.imageSource}
      profile={sampleDataForPhotoListItem.profile}
      username={sampleDataForPhotoListItem.username}
      location={sampleDataForPhotoListItem.location}
    />
  </div>
);

export default App;
