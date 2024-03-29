import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

import './styles.css'

const Editor = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config =
    {
        readonly: false,
        height: 400,
    }

    const handleSave = () => {
        localStorage.setItem("document", content);
    };

    const loadDoc = () => {
        setContent(localStorage.getItem("document"));
    };

    return (
        <>

            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1}
                onBlur={newContent => setContent(newContent)}
                onChange={newContent => { }}
            />
            <div className='btns'>
                <button onClick={handleSave}>Gravar Documento</button>
                <button onClick={loadDoc}>Carregar Ultimo</button>
                <button onClick={() => setContent("")}>Novo</button>
            </div>
        </>
    );
};

export default Editor