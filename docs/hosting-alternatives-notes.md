# Alternatives d’hébergement étudiées

Sources officielles consultées le 23 août 2026 :

- https://www.koyeb.com/docs : Koyeb supporte les conteneurs Docker, les déploiements Git et les background workers ; l’instance gratuite indiquée est 512 MB RAM, 0,1 vCPU et 2 GB SSD. Koyeb documente aussi le scale-to-zero, donc il faut vérifier le mode de service choisi et son éligibilité.
- https://render.com/docs/free : Render indique que les Free web services s’arrêtent après 15 minutes sans trafic entrant, que le système de fichiers est éphémère, que les disques persistants ne sont pas disponibles sur l’offre gratuite et que les heures gratuites sont limitées à 750 par mois. Ce n’est pas adapté à une session WhatsApp permanente.
- https://railway.com/pricing : Railway propose un essai de 5 dollars pendant 30 jours sans carte, puis une offre Free à 1 dollar de crédits mensuels, avec 0,5 GB RAM par service. Ce n’est pas une garantie d’hébergement gratuit permanent pour un processus toujours actif.

Conclusion : sans Oracle et sans carte bancaire, le meilleur choix de test cloud est Koyeb si le compte accepte l’instance gratuite et le service worker reste actif. Pour une disponibilité réellement continue sans carte, Termux sur un téléphone ou un ordinateur personnel allumé est plus prévisible qu’une offre cloud gratuite avec veille, quota ou stockage éphémère. Il n’existe pas de solution cloud gratuite garantissant simultanément 24 h/24, stockage persistant et absence totale de vérification de paiement.
