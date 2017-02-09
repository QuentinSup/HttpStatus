/*
 * HttpStatus 1.0.0
 * Liste des codes HTTP pour Javascript
 * Auteur : Quentin Supernant
 * Source : https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP
 */
var HttpStatus = {
	Continue: 100,	// Attente de la suite de la requête.
	Switching: 101, // Protocols	Acceptation du changement de protocole.
	Processing: 102,	// WebDAV : Traitement en cours (évite que le client dépasse le temps dattente limite).
	OK: 200, // Requête traitée avec succès.
	Created: 201, // Requête traitée avec succès et création dun document.
	Accepted: 202, // Requête traitée, mais sans garantie de résultat.
	NonAuthoritative: 203, // Information	Information retournée, mais générée par une source non certifiée.
	NoContent: 204,	// Requête traitée avec succès mais pas dinformation à renvoyer.
	Reset: 205, // Content	Requête traitée avec succès, la page courante peut être effacée.
	PartialContent: 206,	// Une partie seulement de la ressource a été transmise.
	MultiStatus: 207,	// WebDAV : Réponse multiple.
	ContentDifferent: 210, // WebDAV : La copie de la ressource côté client diffère de celle du serveur (contenu ou propriétés).
	ImUsed: 226, // RFC 32293 Le serveur a accompli la requête pour la ressource, et la réponse est une représentation du résultat dune ou plusieurs manipulations dinstances appliquées à linstance actuelle.
	MultipleChoices: 300,	// LURI demandée se rapporte à plusieurs ressources.
	MovedPermanently: 301, //	Document déplacé de façon permanente.
	MovedTemporarily: 302, // Document déplacé de façon temporaire.
	SeeOther: 303, //	La réponse à cette requête est ailleurs.
	NotModified: 304,	// Document non modifié depuis la dernière requête.
	UseProxy: 305,	// La requête doit être ré-adressée au proxy.
	TemporaryRedirect: 307, 	// La requête doit être redirigée temporairement vers lURI spécifiée.
	PermanentRedirect: 308,	// La requête doit être redirigée définitivement vers lURI spécifiée.
	TooManyRedirects: 310,	// La requête doit être redirigée de trop nombreuses fois, ou est victime dune boucle de redirection.
	BadRequest: 400, // La syntaxe de la requête est erronée.
	Unauthorized: 401, //	Une authentification est nécessaire pour accéder à la ressource.
	PaymentRequired: 402,	// Paiement requis pour accéder à la ressource.
	Forbidden: 403,	// Le serveur a compris la requête, mais refuse de lexécuter. Contrairement à lerreur 401, sauthentifier ne fera aucune différence. Sur les serveurs où lauthentification est requise, cela signifie généralement que lauthentification a été acceptée mais que les droits daccès ne permettent pas au client daccéder à la ressource.
	NotFound: 404,	// Ressource non trouvée.
	MethodNotAllowed: 405, //	Méthode de requête non autorisée.
	NotAcceptable: 406,	// La ressource demandée nest pas disponible dans un format qui respecterait les en-têtes "Accept" de la requête.
	ProxyAuthenticationRequired: 407,	// Accès à la ressource autorisé par identification avec le proxy.
	RequestTimeOut: 408, // Temps dattente dune requête du client écoulé.
	Conflict: 409,	// La requête ne peut être traitée en létat actuel.
	Gone: 410,	// La ressource nest plus disponible et aucune adresse de redirection nest connue.
	LengthRequired: 411,	// La longueur de la requête na pas été précisée.
  	PreconditionFailed: 412,	// Préconditions envoyées par la requête non vérifiées.
	RequestEntityTooLarge: 413,	// Traitement abandonné dû à une requête trop importante.
	RequestURITooLong: 414, //	URI trop longue.
	UnsupportedMediaType: 415, //	Format de requête non supporté pour une méthode et une ressource données.
	RequestedRangeUnsatisfiable: 416, //	Champs den-tête de requête « range » incorrect.
	ExpectationFailed: 417,	// Comportement attendu et défini dans len-tête de la requête insatisfaisable.
	ImATeapot: 418, // Je suis une théière. Ce code est défini dans la RFC 23245 datée du premier avril 1998, Hyper Text Coffee Pot Control Protocol.
	BadMapping: 421, // Misdirected Request	La requête a été envoyée à un serveur qui nest pas capable de produire une réponse (par exemple, car une connexion a été réutilisée).
	UnprocessableEntity: 422,	// WebDAV : Lentité fournie avec la requête est incompréhensible ou incomplète.
	Locked: 423, //	WebDAV : Lopération ne peut avoir lieu car la ressource est verrouillée.
	MethodFailure: 424,	// WebDAV : Une méthode de la transaction a échoué.
	UnorderedCollection: 425, //	WebDAV RFC 36486. Ce code est défini dans le brouillon WebDAV Advanced Collections Protocol, mais est absent de Web Distributed Authoring and Versioning (WebDAV) Ordered Collections Protocol.
	UpgradeRequired: 426, //	RFC 28177 Le client devrait changer de protocole, par exemple au profit de TLS/1.0.
	PreconditionRequired: 428, //	RFC 65858 La requête doit être conditionnelle.
	TooManyRequests: 429, //RFC 65859 Le client a émis trop de requêtes dans un délai donné.
	RequestHeaderFieldsTooLarge: 431, // RFC 658510 Les entêtes HTTP émises dépassent la taille maximale admise par le serveur.
	RetryWith: 449, //	Code défini par Microsoft. La requête devrait être renvoyée après avoir effectué une action.
	BlockedbyWindowsParentalControls: 450, //	Code défini par Microsoft. Cette erreur est produite lorsque les outils de contrôle parental de Windows sont activés et bloquent laccès à la page.
	UnavailableForLegalReasons: 451, //	Ce code derreur indique que la ressource demandée est inaccessible pour des raisons dordre légal11,12.
	UnrecoverableError: 456, //	WebDAV : Erreur irrécupérable.
	NoResponse: 444, //	Indique que le serveur na retourné aucune information vers le client et a fermé la connexion.
	SSLCertificateError: 495, //Une extension de lerreur 400 Bad Request, utilisée lorsque le client a fourni un certificat invalide.
	SSLCertificateRequired: 496, //	Une extension de lerreur 400 Bad Request, utilisée lorsquun certificat client requis nest pas fourni.
	HTTPRequestSenttoHTTPSPort: 497, //	Une extension de lerreur 400 Bad Request, utilisée lorsque le client envoie une requête HTTP vers le port 443 normalement destiné aux requêtes HTTPS.
	ClientClosedRequest: 499, //	Le client a fermé la connexion avant de recevoir la réponse. Cette erreur se produit quand le traitement est trop long côté serveur13.
	InternalServerError: 500, //	Erreur interne du serveur.
	NotImplemented: 501, //	Fonctionnalité réclamée non supportée par le serveur.
	BadGateway: 502,
	ProxyError: 502, // Mauvaise réponse envoyée à un serveur intermédiaire par un autre serveur.
	ServiceUnavailable: 503, //	Service temporairement indisponible ou en maintenance.
	GatewayTimeOut: 504, //	Temps dattente dune réponse dun serveur à un serveur intermédiaire écoulé.
	HTTPVersionNotSupported: 505, //Version HTTP non gérée par le serveur.
	VariantAlsoNegotiates: 506, //	RFC 229514 : Erreur de négociation. Transparent content negociation.
	InsufficientStorage: 507, //	WebDAV : Espace insuffisant pour modifier les propriétés ou construire la collection.
	LoopDetected: 508, //	WebDAV : Boucle dans une mise en relation de ressources (RFC 584215).
	BandwidthLimitExceeded: 509, //	Utilisé par de nombreux serveurs pour indiquer un dépassement de quota.
	NotExtended: 510, // RFC 277416 : la requête ne respecte pas la politique daccès aux ressources HTTP étendues.
	NetworkAuthenticationRequired: 511, //	RFC 658517 : Le client doit sauthentifier pour accéder au réseau. Utilisé par les portails captifs pour rediriger les clients vers la page dauthentification.
	UnknownError: 520, //	Lerreur 520 est utilisé en tant que réponse générique lorsque le serveur dorigine retourne un résultat imprévu.
	WebServerIsDown: 521, //	Le serveur a refusé la connexion depuis Cloudflare.
	ConnectionTimedOut: 522, //	Cloudflare na pas pu négocier un TCP handshake avec le serveur dorigine.
	OriginIsUnreachable: 523, //	Cloudflare na pas réussi à joindre le serveur dorigine. Cela peut se produire en cas déchec de résolution de nom de serveur DNS.
	ATimeoutOccurred: 524, //	Cloudflare a établi une connection TCP avec le serveur dorigine mais na pas reçu de réponse HTTP avant lexpiration du délai de connexion.
	SSL: 525, // Handshake Failed	Cloudflare na pas pu négocier un SSL/TLS handshake avec le serveur dorigine.
	InvalidSSLCertificate: 526, //Cloudflare na pas pu valider le certificat SSL présenté par le serveur dorigine.
	RailgunError: 527 //	Lerreur 527 indique que la requête a dépassé le délai de connexion ou a échoué après que la connexion WAN ait été établie.
}
