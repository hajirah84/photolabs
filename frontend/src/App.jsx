import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const samplePhotos = [
  {
    id: "1",
    imageSource: "/Image-1-Regular.jpeg",
    profile: "/profile-1.jpg",
    username: "Joe Example",
    location: { city: "Montreal", country: "Canada" }
  },
  {
    id: "2",
    imageSource: "/Image-2-Regular.jpeg",
    profile: "/profile-2.jpg",
    username: "Jane Snapshot",
    location: { city: "Toronto", country: "Canada" }
  },
  {
    id: "3",
    imageSource: "/Image-3-Regular.jpeg",
    profile: "/profile-3.jpg",
    username: "Alex Lens",
    location: { city: "Vancouver", country: "Canada" }
  }
];

const App = () => {
  return (
    <div className="App">
      {samplePhotos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default App;


