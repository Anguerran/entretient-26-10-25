export enum HttpStatusEnum {
  /**
   * 201 Created (Créé) :
   * Succès. Indique que la requête a réussi et qu'une nouvelle ressource a été créée
   * en conséquence (typiquement après une requête POST ou PUT).
   * La réponse inclut souvent un en-tête 'Location' pointant vers la nouvelle ressource.
   */
  "S201" = 201,

  /**
   * 200 OK (Succès) :
   * Succès standard pour les requêtes réussies. La signification dépend de la méthode HTTP :
   * GET: La ressource a été récupérée et est transmise dans le corps.
   * HEAD: Les en-têtes de la ressource sont dans la réponse sans le corps.
   * PUT/PATCH/DELETE: L'action a été réalisée avec succès.
   * POST: Le résultat du traitement est dans le corps de la réponse.
   */
  "S200" = 200,

  /**
   * 404 Not Found (Non trouvé) :
   * Le serveur n'a pas trouvé la ressource demandée.
   * Signifie généralement que l'URL ou l'identifiant spécifique (ex: /users/123) n'existe pas.
   */
  "S404" = 404,

  /**
   * 400 Bad Request (Mauvaise requête) :
   * Le serveur ne peut pas ou ne veut pas traiter la requête à cause d'une erreur perçue
   * comme étant du côté client (ex: syntaxe malformée, paramètres manquants ou invalides,
   * taille de requête trop grande). La requête ne devrait pas être renvoyée sans modification.
   */
  "S400" = 400,

  /**
   * 401 Unauthorized (Non autorisé - Authentification requise) :
   * L'authentification est nécessaire pour obtenir la réponse demandée.
   * Indique que la requête n'a pas été appliquée car il manque des identifiants
   * d'authentification valides pour la ressource cible. Typiquement retourné lors
   * d'un échec de connexion ou d'un accès à une ressource protégée sans être connecté.
   * Souvent accompagné d'un en-tête `WWW-Authenticate`.
   */
  "S401" = 401,

  /**
   * 403 Forbidden (Interdit - Autorisation refusée) :
   * Le serveur a compris la requête, mais refuse de l'autoriser.
   * Contrairement à 401, l'authentification ne fera aucune différence ici.
   * L'identité du client est connue (il est peut-être authentifié), mais il n'a
   * simplement PAS les droits nécessaires pour accéder à cette ressource spécifique.
   */
  "S403" = 403,

  /**
   * 402 Payment Required (Paiement requis) :
   * Réservé pour un usage futur. Ce code est rarement utilisé dans la pratique générale
   * des API web actuelles. Il était initialement prévu pour des systèmes de paiement.
   */
  "S402" = 402,

  /**
   * 409 Conflict (Conflit) :
   * La requête n'a pas pu être complétée à cause d'un conflit avec l'état actuel
   * de la ressource cible. Typiquement utilisé lors de la création d'une ressource
   * qui existe déjà (ex: email ou nom d'utilisateur unique déjà pris lors de l'inscription)
   * ou lors d'une mise à jour qui violerait une règle d'intégrité.
   */
  "S409" = 409,

  /**
   * 500 Internal Server Error (Erreur interne du serveur) :
   * Le serveur a rencontré une situation qu'il ne sait pas gérer.
   * C'est une erreur générique côté serveur indiquant un problème inattendu
   * (bug dans le code, problème de connexion à la base de données, etc.) qui a
   * empêché le serveur de traiter la requête. Aucun détail n'est révélé au client.
   */
  "S500" = 500,
}