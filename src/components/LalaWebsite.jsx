import { useState, useEffect } from 'react';
import ContentContainer from './ContentContainer';
import Spinner from './Spinner';

function LalaWebsite() {
    const [tiles, setTiles] = useState([]);
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

    useEffect(() => {
        fetchTiles();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <>
        <ContentContainer tiles={tiles} />
        </>
    );
}

export default LalaWebsite;
