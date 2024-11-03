import React from "react";
import Modal from 'react-modal';
import { useState } from "react";

function TileTitle({titlePrefix, title, titleSuffix}) {
    const subtitleAlignment = titlePrefix ? "align-left" : "align-right";

    return (
        <div className="heading-container">
            <h2>
                {titleSuffix && title}
                <span className={"subheading " + subtitleAlignment}>
                    {titlePrefix || titleSuffix}
                </span>
                {titlePrefix && title}
            </h2>
        </div>
    );
}

function Tile({titlePrefix, title, titleSuffix, buttonText, color, openModal}) {
    return (
        <div
            id={title.toLowerCase()}
            className={"tile " + color}
            onClick={openModal}
        >
            <TileTitle titlePrefix={titlePrefix} title={title} titleSuffix={titleSuffix} />
            <button>{buttonText}</button>
        </div>
    );
}

function LogoTile() {
    return (
        <div id="logo" className="tile">
            <img className="logo" src="images/logo.svg" alt="Lala Logo"/>
            <p>A personal brand experiment<br/>
            by<br/>
            Alexander Summa</p>
            <p><a href="https://www.linkedin.com/in/alexander-summa" target="_blank"><img src="images/linkedin-logo.svg" alt="LinkedIn Logo"/></a><a href="https://github.com/dideldumthecat/lala-website" target="_blank"><img src="images/github-mark.svg" /></a></p>
        </div>
    );
}

function TileContainer({tiles, openModal}) {
    return (
        <div className="grid-container">
            {tiles.map((tile, index) => (
                <React.Fragment key={tile.id}>
                    <Tile
                        titlePrefix={tile.acf.title_prefix}
                        title={tile.title}
                        titleSuffix={tile.acf.title_suffix}
                        buttonText={tile.acf.button_text}
                        color={tile.acf.tile_color}
                        openModal={() => openModal(tile.id)}
                    />
                    {/* Render the logo tile after the 4th tile */}
                    {tile.id === 4 && <LogoTile key={`logo-${index}`} />}
                </React.Fragment>
            ))}
        </div>
    );
}

function ModalControls({previousTile, nextTile, setActiveTileId}) {
    const handleClick = (tile) => () => {
        setActiveTileId(tile.id);
    };

    return (
        <>
            {previousTile && (<div className="modal__control modal__control--prev" onClick={handleClick(previousTile)} >&#x2329;</div>)}
            {nextTile && (<div className="modal__control modal__control--next" onClick={handleClick(nextTile)} >&#x232a;</div>)}
        </>
    );
}

function CustomModal({ isOpen, onRequestClose, activeTileId, setActiveTileId }) {
    const currentTile = TILES.find(tile => tile.id === activeTileId);
    const nextTile = TILES.find(tile => tile.id === activeTileId + 1);
    const previousTile = TILES.find(tile => tile.id === activeTileId - 1);

    const modalTitle = currentTile ? `${currentTile.acf.title_prefix} ${currentTile.title}${currentTile.acf.title_suffix}` : '';
    const modalText = currentTile ? currentTile.acf.modal_content : '';

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="modal__overlay"
            className="modal__container"
            appElement={document.getElementById('root')}
            contentLabel="Modal"
        >
            <div className="modal__border">
                <ModalControls previousTile={previousTile} nextTile={nextTile} setActiveTileId={setActiveTileId} />
                <main className="modal__content" id="modal-1-content">
                    <h2 className="modal__title" id="modal-1-title">{modalTitle}</h2>
                    <div className="modal__text" id="modal-1-text" dangerouslySetInnerHTML={{ __html: modalText }} />
                </main>
                <footer className="modal__header">
                    <button className="modal__close" aria-label="Close modal" onClick={onRequestClose}>&#x2715;</button>
                </footer>
            </div>
        </Modal>
    );
}

const TILES = [
    {
        "id": 1,
        "title": "Power",
        "acf": {
            "title_prefix": "The",
            "title_suffix": "",
            "button_text": "of the LALA",
            "tile_color": "blue",
            "modal_content": "<p>Some say it's magic, others call it instinct, but I like to think of it as “The LALA”—an invisible force that fuels my creativity. The LALA is my secret weapon, empowering me to transform ideas into visual experiences. It's the reason my designs don't just look good—they feel good. With The LALA, every pixel, every color, and every line has a purpose. When you experience my work, you're not just seeing design; you're feeling the pulse of The LALA.</p>"
        }
    },
    {
        "id": 2,
        "title": "Essence",
        "acf": {
            "title_prefix": "The",
            "title_suffix": "",
            "button_text": "of the LALA",
            "tile_color": "green",
            "modal_content": "<p>At the heart of The LALA is a commitment to bringing ideas to life with purpose and precision. I strive for a balance between creativity and practicality, which I like to call “practical perfectionism.” While I push for excellence, I know when to compromise, ensuring that my work is both polished and functional. With an eye for detail—whether in design elements or clean, readable code—I aim to deliver work that not only meets expectations but leaves a lasting impact.</p>"
        }
    },
    {
        "id": 3,
        "title": "Idea",
        "acf": {
            "title_prefix": "The",
            "title_suffix": "",
            "button_text": "of the LALA",
            "tile_color": "orange",
            "modal_content": "<p>The LALA began as a playful placeholder in my code, but over time it took on new meaning. It represents the flow of inspiration that guides my work—an energy that allows me to bring creativity into both design and development. The LALA became a symbol of how I approach challenges, blending imagination with a structured process to create meaningful results. It's the core idea that drives my personal brand and connects the dots between every project I undertake.</p>"
        }
    },
    {
        "id": 4,
        "title": "Develop",
        "acf": {
            "title_prefix": "",
            "title_suffix": "ing",
            "button_text": "with the LALA",
            "tile_color": "orange",
            "modal_content": "<p>When I code, The LALA helps me approach development from both a creative and technical perspective. I bring an eye for detail into my programming, ensuring that every line of code serves a purpose. This extends to code reviews, where I focus on maintaining clarity and structure. Perfectionism is important, but I've learned to balance it with practicality, delivering robust solutions without getting stuck in endless tweaks. And while I aim high, I'm humble enough to ask for help when needed, always valuing the strength of collaboration.</p>"
        }
    },
    {
        "id": 5,
        "title": "Design",
        "acf": {
            "title_prefix": "",
            "title_suffix": "ing",
            "button_text": "with the LALA",
            "tile_color": "pink",
            "modal_content": "<p>Designing with The LALA means taking a detailed, thoughtful approach to every project. My perfectionism drives me to create designs that are clean and intentional, but I also know when to step back and find a balance between form and function. My process is collaborative—I recognize that great design often comes from diverse input, and I always credit those who contribute. I’m constantly fine-tuning, but never to the point where it stifles creativity. The LALA brings flexibility, allowing me to deliver designs that are visually compelling and grounded in real-world needs.</p>"
        }
    },
    {
        "id": 6,
        "title": "Way",
        "acf": {
            "title_prefix": "The",
            "title_suffix": "",
            "button_text": "of the LALA",
            "tile_color": "pink",
            "modal_content": "<p>The way of The LALA reflects a mindful approach to both creativity and teamwork. It's about knowing when to aim for perfection and when to embrace practical solutions. I approach every challenge with curiosity, but I also recognize the importance of asking for help and crediting those around me. My process is detail-oriented but not rigid, always open to learning from others and adapting to new ideas. With The LALA, I strive to create a balance between solo innovation and team collaboration, ensuring that the best ideas come to life through collective effort.</p>"
        }
    },
    {
        "id": 7,
        "title": "Story",
        "acf": {
            "title_prefix": "The",
            "title_suffix": "",
            "button_text": "of the LALA",
            "tile_color": "green",
            "modal_content": "<p>It all started in the simplest of ways—while working on various programming projects, I found myself using \"LALA\" as a placeholder. Much like \"foobar,\" it was a light-hearted stand-in, something I didn’t give much thought to. But then, my colleagues started noticing it, and what began as a casual habit turned into a talking point. They asked, “What's with the LALA?” and that's when I realized it was more than just filler text—it was a reflection of my process, my creativity.</p><p>As time went on, the LALA grew from an inside joke into something much larger. It became a symbol of the energy and flow I bring to my projects, the creative foundation for my personal brand. What started as a playful placeholder has evolved into the core philosophy behind everything I do, and today, it stands as the signature of my work.</p>"
        }
    },
    {
        "id": 8,
        "title": "Future",
        "acf": {
            "title_prefix": "The",
            "title_suffix": "",
            "button_text": "of the LALA",
            "tile_color": "blue",
            "modal_content": "<p>The future of The LALA is about growth and exploration. As design and technology continue to evolve, The LALA will help me adapt, pushing the boundaries of creativity and innovation. It will remain a constant source of inspiration, guiding new ideas and fresh perspectives. With each project, The LALA will find new ways to transform possibilities into reality, staying true to its core principles while embracing the challenges of the future.</p>"
        }
    }
];

export default function LalaWebsite() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [activeTileId, setActiveTileId] = useState(null);

    const openModal = (activeTile) => {
        setActiveTileId(activeTile);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setActiveTileId(null);
    };

    return (
        <>
        <TileContainer tiles={TILES} openModal={openModal} />
        <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal} activeTileId={activeTileId} setActiveTileId={setActiveTileId} />
        </>
    );
}
