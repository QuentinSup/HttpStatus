/*
 * HttpStatus REST 1.0.0
 * Liste des codes HTTP pour Javascript utilisé fréquemment pour les traitements REST
 * Auteur : Quentin Supernant
 * Source : https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP
 */
var HttpStatus = {
	OK: 200, // Requête traitée avec succès.
	Created: 201, // Requête traitée avec succès et création dun document.
	Accepted: 202, // Requête traitée, mais sans garantie de résultat.
	NoContent: 204,	// Requête traitée avec succès mais pas dinformation à renvoyer.
	Reset: 205, // Content	Requête traitée avec succès, la page courante peut être effacée.
	PartialContent: 206,	// Une partie seulement de la ressource a été transmise.
	MultiStatus: 207,	// WebDAV : Réponse multiple.
	NotModified: 304,	// Document non modifié depuis la dernière requête.
	BadRequest: 400, // La syntaxe de la requête est erronée.
	Unauthorized: 401, //	Une authentification est nécessaire pour accéder à la ressource.
	PaymentRequired: 402,	// Paiement requis pour accéder à la ressource.
	Forbidden: 403,	// Le serveur a compris la requête, mais refuse de lexécuter. Contrairement à lerreur 401, sauthentifier ne fera aucune différence. Sur les serveurs où lauthentification est requise, cela signifie généralement que lauthentification a été acceptée mais que les droits daccès ne permettent pas au client daccéder à la ressource.
	NotFound: 404,	// Ressource non trouvée.
	MethodNotAllowed: 405, //	Méthode de requête non autorisée.
	NotAcceptable: 406,	// La ressource demandée nest pas disponible dans un format qui respecterait les en-têtes "Accept" de la requête.
	RequestTimeOut: 408, // Temps dattente dune requête du client écoulé.
	Conflict: 409,	// La requête ne peut être traitée en létat actuel.
	Gone: 410,	// La ressource nest plus disponible et aucune adresse de redirection nest connue.
  PreconditionFailed: 412,	// Préconditions envoyées par la requête non vérifiées.
	ExpectationFailed: 417,	// Comportement attendu et défini dans len-tête de la requête insatisfaisable.
	Locked: 423, //	WebDAV : Lopération ne peut avoir lieu car la ressource est verrouillée.
	MethodFailure: 424,	// WebDAV : Une méthode de la transaction a échoué.
	UpgradeRequired: 426, //	RFC 28177 Le client devrait changer de protocole, par exemple au profit de TLS/1.0.
	PreconditionRequired: 428, //	RFC 65858 La requête doit être conditionnelle.
	TooManyRequests: 429, //RFC 65859 Le client a émis trop de requêtes dans un délai donné.
	UnavailableForLegalReasons: 451, //	Ce code derreur indique que la ressource demandée est inaccessible pour des raisons dordre légal11,12.
	UnrecoverableError: 456, //	WebDAV : Erreur irrécupérable.
	NoResponse: 444, //	Indique que le serveur na retourné aucune information vers le client et a fermé la connexion.
	InternalServerError: 500, //	Erreur interne du serveur.
	NotImplemented: 501, //	Fonctionnalité réclamée non supportée par le serveur.
	ServiceUnavailable: 503, //	Service temporairement indisponible ou en maintenance.
	UnknownError: 520 //	Lerreur 520 est utilisé en tant que réponse générique lorsque le serveur dorigine retourne un résultat imprévu.
}
