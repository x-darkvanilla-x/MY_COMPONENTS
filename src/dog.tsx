import React, { useEffect, useState } from 'react';

interface DogImage {
  fileSizeBytes: number;
  url: string;
}

export const Dog: React.FC = () => {
  const [dogImage, setDogImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://random.dog/woof.json');
        const data: DogImage = await response.json();
        setDogImage(data.url);
      } catch (error) {
        console.error('Error fetching dog image:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div>
      <h1>Hello World Dog</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="Random Dog" style={{ maxWidth: '100%', height: 'auto' }} />
      )}
    </div>
  );
};
