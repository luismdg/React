import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [symbolEdit, setSymbolEdit] = useState("Edit");
    const [playerName, setPlayerName] = useState(initialName);

    const change = () => {
        setIsEditing((prop) => !prop);
        setSymbolEdit(isEditing ? "Edit" : "Save");

        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }

    const hanndleChange = (e) => {
        setPlayerName(e.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ? (<input type="text" required value={playerName} onChange={hanndleChange} />) : (<span className="player-name">{playerName}</span>)}

                <span className="player-name">{symbol}</span>
            </span>
            <button onClick={change}>{symbolEdit}</button>
        </li>
    )
}