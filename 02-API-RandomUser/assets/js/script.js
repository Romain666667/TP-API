// Définir le endpoint
let endpoint = "https://randomuser.me/api/?results=5";

fetch

// 1.Fetch des datas
// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API

fetch(endpoint)
.then(
    // Fonction de callback anonyme
    function (response) {
        console.log(response);

        // Affichage du code
        if (response.status == 200)
        {
            //Le contenu de la réponse est dans body
            response.json()
            .then(
                // Une fois que la transformation JSON est terminé
                function (datas) {
                    console.log(datas.results);

                    let users = datas.results;

                    //Chercher l'élément HTML dont l'id est usersname
                    let usersname = document.getElementById('usersname');

                    users.forEach(function
                        (user) {

                        //1. Le nom
                        console.log("Voici le nom :" + user.name.first)
                        let nom = user.name.first

                        // Ajouter dans le HTML
                        document.getElementById("users").innerHTML += "<p>Nom : " + nom + "</p>";
                        
                        usersname.appendChild(generateUsersname(user));

                        //L.marker([data.geometry.coordinates[1], data.geometry.coordinates[0]]).addTo(map)
                        //.bindPopup(data.fields.adresse + space + data.fields.obs);
                    }
                    )
                }
            )
        } else {
            console.log("Erreur");
        }


    }
    
)

function generateUsersname(dataUser)
{

    //Création éléments HTML DOM
    let GeneratedUsersname = document.createElement("TR");

    let tdID = document.createElement("TD");

    let tdNAME = document.createElement("TD");

    let tdIMG = document.createElement("TD");

    let IMG = document.createElement("IMG");

    let tdVILLE = document.createElement("TD");

    let tdGENDER = document.createElement("TD");
    
    let tdPAYS = document.createElement("TD");


    // Affectation des valeurs
    //Colonne Nom
    tdID.innerHTML = dataUser.login.username;

    tdNAME.innerHTML = dataUser.name.last + " " + dataUser.name.first;

    IMG.src =dataUser.picture.medium;

    tdVILLE.innerHTML=dataUser.location.city;

    // Choix de l'image en fonction du genre
    if (dataUser.gender === "female") {
        tdGENDER.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/6866/6866427.png" width="40" height="40" alt="Femme">`;
    } else {
        tdGENDER.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-2WgyLETSPWJwBaIQGBo3wJZ-kV1C1qRGA&s" width="40" height="40" alt="Homme">`;
    }

    // Pays -> drapeau
    let countryCode = dataUser.nat.toLowerCase(); // "FR", "US", "ES" ...
    tdPAYS.innerHTML = `<img src="https://flagcdn.com/32x24/${countryCode}.png" alt="${dataUser.location.country}">`;


    // Filiation
    GeneratedUsersname.appendChild(tdID);

    GeneratedUsersname.appendChild(tdNAME);

    tdIMG.appendChild(IMG);

    GeneratedUsersname.appendChild(tdIMG);

    GeneratedUsersname.appendChild(tdVILLE);

    GeneratedUsersname.appendChild(tdGENDER);

    GeneratedUsersname.appendChild(tdPAYS);

    return GeneratedUsersname;
}


      