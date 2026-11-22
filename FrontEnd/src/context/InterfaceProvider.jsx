import { InterfaceContext } from "./InterfaceContext";
import { useState } from "react";

// État de l'interface de jeu : menu pause ouvert et mode photo (interface masquée)
export default function InterfaceProvider({ children }) {
    const [menuOuvert, setMenuOuvert] = useState(false);
    const [modePhoto, setModePhoto] = useState(false);

    return (
        <InterfaceContext.Provider value={{ menuOuvert, setMenuOuvert, modePhoto, setModePhoto }}>
            {children}
        </InterfaceContext.Provider>
    )
}
