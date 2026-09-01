# Notes Oracle Cloud Always Free

Sources officielles consultées le 22 août 2026 :

- https://docs.oracle.com/iaas/Content/FreeTier/freetier.htm
- https://docs.oracle.com/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm

Oracle indique que les ressources Always Free n’expirent pas, qu’elles doivent être provisionnées dans la home region du tenancy et que la création de compte demande généralement un numéro de téléphone et une carte bancaire, sans débit sauf passage à une offre payante.

La documentation du 12 juin 2026 indique notamment : jusqu’à deux VM AMD VM.Standard.E2.1.Micro, ou des instances Ampere A1 Flex dans la limite Always Free équivalente à 2 OCPU et 12 Go de mémoire pour un tenancy Always Free ; 200 Go de stockage Block Volume au total, dont les volumes de démarrage ; 20 Go d’Object Storage. Oracle précise que les ressources Compute Always Free peuvent être récupérées si, sur une période de 7 jours, le 95e percentile de l’utilisation CPU est inférieur à 20 %, l’utilisation réseau inférieure à 20 % et, pour A1, l’utilisation mémoire inférieure à 20 %.

Conséquence pour DREADNYX : une VM Oracle Always Free est adaptée à un processus Docker persistant, mais l’utilisateur doit choisir soigneusement la home region, conserver la session WhatsApp sur un volume persistant et surveiller les limites de capacité et d’inactivité.
