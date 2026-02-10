-- On supprime la table si elle existe pour éviter les erreurs au lancement
DROP TABLE IF EXISTS avis;

CREATE TABLE avis (
    id_avis INT PRIMARY KEY AUTO_INCREMENT, -- Un ID unique automatique
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,            -- Augmenté à 100 pour les emails longs
    commentaire TEXT,                       -- "avis" est un mot réservé parfois, "commentaire" est plus sûr
    date_soumission TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Se remplit tout seul !
);