# PRONOTE-API
## API non-officiel pour le site Pronote

### Comment utiliser l'API ?

Afin d'utiliser cette API Pronote, faites simplement une 
```GET```
request en incluant dans l'url les paramètres suivant:

```https://pronote-api-server.herokuapp.com/?username=<votre_nom_d_utlisateur_pronote>&password=<votre_mot_de_passe_pronote>&link=<lien_du_formulaire_de_connection_eleve_de_votre_etablissement>```

Si vous rentrez bien les bon paramètres, une réponse contenant un fichier JSON vous sera renvoyé. Ce dernier possèdera un grand nombre de données (notes, moyennes, punitions, devoirs...).

(Le fichier JSON envoyé est pour l'instant assez peu fourni. Toutefois, pas d'inquiétudes il sera bientôt complet)





