import { useState, useEffect } from 'react';
import ContentContainer from './ContentContainer';

function LalaWebsite() {
    const [tiles, setTiles] = useState([]);

    const fetchTiles = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL);
            const data = await response.json();
            setTiles(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchTiles();
    }, []);

    return (
        <>
        <ContentContainer tiles={tiles} />
        </>
    );
}

export default LalaWebsite;
