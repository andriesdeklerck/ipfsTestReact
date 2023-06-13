import React from 'react';
import { IpfsImage } from 'react-ipfs-image';

const IPFSGallery = () => {
  return (
    <div>
      <div>
        <IpfsImage hash='QmWx4R1jtp7gYbHdMkTLYVdSjwNCyWawsfKK5Hb7asXz8P' gatewayUrl='https://tomato-shaky-beaver-192.mypinata.cloud/ipfs' />
      </div>
      <div>
        <IpfsImage hash='Qmcr3EcFKyGwYYcS1Use4CvF1n1hUcTMqpc2p7MaDmV44t' gatewayUrl='https://tomato-shaky-beaver-192.mypinata.cloud/ipfs' />
      </div>
      <div>
        <IpfsImage hash='QmNQw9ieGVttUXWTRQFEmsuFqmLuaAoq51jmp7zBvvju6J' gatewayUrl='https://tomato-shaky-beaver-192.mypinata.cloud/ipfs' />
      </div>
      <div>
        <IpfsImage hash='QmNUxNHE63R5pskkcmRbfnotg6qLiUQPHVkacyaC9odRUK' gatewayUrl='https://tomato-shaky-beaver-192.mypinata.cloud/ipfs' />
      </div>
      <div>
        <IpfsImage hash='QmPNzRaPevZiwPHsJeiJzjheX5ETAJCvzsf2ynvCzoFcpB' gatewayUrl='https://tomato-shaky-beaver-192.mypinata.cloud/ipfs' />
      </div>
    </div>
  );
};

export default IPFSGallery;

{/* import React, { useEffect, useState } from 'react';
import { ipfsClient }  from 'ipfs-http-client';

const IPFSGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 443, protocol: 'https' });
        const response = await ipfs.get('Qmes6QwntJ2kkP5pVGTPtu1yuV4CsYuNLYqAQFCX5hYu52');
        const imageFiles = response.map(file => URL.createObjectURL(file.content));
        setImages(imageFiles);
      } catch (error) {
        console.error('Error fetching images from IPFS:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default IPFSGallery; */}
