import { useState, useEffect } from 'react';
import ContentContainer from './ContentContainer';
import Spinner from './Spinner';

function LalaWebsite() {
    const [tiles, setTiles] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTiles = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL);
            const data = await response.json();
            setTiles(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching tiles:', error);
        }
    }

    const loadImages = async () => {
        const images = [];
        const imageModules = import.meta.glob('/src/assets/modal-images/*', { eager: true });
        for (const path in imageModules) {
            const image = imageModules[path].default;
            images.push(image);
        }
        setImages(images);
    }

    useEffect(() => {
        fetchTiles();
        loadImages();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <ContentContainer tiles={tiles} images={images} />
    );
}

export default LalaWebsite;
