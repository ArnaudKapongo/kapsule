# 🔐 Configuration Sécurisée pour Production

## 1. Configuration Gmail

### Étape 1 : Activer l'authentification à 2 facteurs
1. Aller dans votre compte Google
2. Sécurité > Authentification à 2 facteurs > Activer

### Étape 2 : Créer un mot de passe d'application
1. Sécurité > Authentification à 2 facteurs
2. Mots de passe d'application > Sélectionner app : Mail
3. Copier le mot de passe généré (16 caractères)

### Étape 3 : Configurer les variables d'environnement
```bash
# Dans votre fichier .env
GMAIL_USER=kapsulecompagnie@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop  # Votre mot de passe d'app Gmail
```

## 2. Sécurité en Production

### Variables d'environnement supplémentaires :
```bash
# Rate limiting
MAX_REQUESTS_PER_HOUR=3
MAX_REQUESTS_PER_DAY=10

# Monitoring
NODE_ENV=production
```

### Déploiement sécurisé :
1. **Jamais** commit le fichier `.env`
2. Utiliser les variables d'environnement de votre hébergeur
3. Configurer HTTPS obligatoire
4. Utiliser un reverse proxy (Nginx/Cloudflare)

## 3. Fonctionnalités de Sécurité Implémentées

### ✅ Protection contre les attaques :
- **Rate Limiting** : Max 5 requêtes/heure, 20/jour par IP
- **Validation des données** : Tous les champs obligatoires vérifiés
- **Sanitization** : Suppression des caractères dangereux
- **Protection XSS** : Nettoyage des entrées utilisateur
- **Timeouts** : Connexions email avec timeout sécurisé

### ✅ Logs et monitoring :
- Logs sécurisés (pas de données sensibles)
- Horodatage de toutes les requêtes
- Tracking des IPs pour rate limiting
- Gestion d'erreurs détaillée

## 4. Test de Fonctionnement

### Tester en local :
```bash
bun run dev
```

### Tester le formulaire :
1. Remplir le formulaire sur la page d'accueil
2. Vérifier les logs console
3. Vérifier la réception d'email

### Codes d'erreur :
- `400` : Données invalides
- `429` : Trop de requêtes
- `500` : Erreur serveur

## 5. Monitoring en Production

### Métriques à surveiller :
- Nombre de formulaires reçus/jour
- Taux d'erreurs
- Tentatives de spam (rate limiting)
- Performance des envois d'email

### Alertes recommandées :
- Plus de 50 requêtes/heure (possible attaque)
- Taux d'erreur > 5%
- Échec d'envoi d'email

## 6. Optimisations Futures

### Pour une montée en charge :
1. **Redis** pour le rate limiting (au lieu de mémoire)
2. **Queue système** pour les emails (Bull/BullMQ)
3. **Base de données** pour stocker les formulaires
4. **Monitoring** avec Prometheus/Grafana
5. **CDN** pour les assets statiques

### Services email alternatifs :
- **SendGrid** : Plus robuste pour la production
- **Mailgun** : Excellent pour les APIs
- **AWS SES** : Intégré à l'écosystème AWS

## 🚀 Prêt pour la Production !

Votre système est maintenant sécurisé et prêt pour la production avec :
- ✅ Envoi d'email réel vers kapsulecompagnie@gmail.com
- ✅ Protection contre les attaques
- ✅ Rate limiting intelligent
- ✅ Logs et monitoring
- ✅ Validation stricte des données