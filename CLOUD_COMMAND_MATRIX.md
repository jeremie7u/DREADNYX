# Matrice de migration Cloud API

Inventaire automatique : **109 commandes** dans `commands/`.

Le portage doit préserver Baileys tant qu’une commande utilise son objet `sock`, ses messages cités, ses événements ou ses opérations de groupe.

## Résumé

- Baileys : 52
- Texte/état : 23
- Baileys, Groupe : 22
- Groupe : 5
- Média : 2
- Baileys, Groupe, Média : 1
- Baileys, Média : 4

## Commandes

- `addsudo` — Baileys
- `admin` — Texte/état
- `admins` — Baileys, Groupe
- `afk` — Baileys
- `antilink` — Baileys, Groupe
- `auditadmins` — Baileys
- `autoschedule` — Baileys
- `broadcast` — Baileys, Groupe
- `calc` — Baileys
- `calculator` — Baileys
- `canceljob` — Baileys
- `cancelreminder` — Texte/état
- `choose` — Baileys
- `clear` — Baileys, Groupe
- `countdown` — Baileys
- `delsudo` — Baileys
- `demote` — Groupe
- `demoteall` — Baileys, Groupe
- `demotehere` — Baileys, Groupe
- `devinette` — Baileys
- `emergencylock` — Baileys
- `emergencyunlock` — Baileys
- `emojimix` — Baileys
- `everyone` — Baileys, Groupe
- `forgetme` — Texte/état
- `getcontact` — Média
- `getid` — Groupe
- `getlink` — Texte/état
- `ghost` — Baileys
- `gimage` — Baileys
- `goodbye` — Baileys
- `groupadmins` — Texte/état
- `groupaudit` — Groupe
- `groupdesc` — Baileys
- `groupe` — Texte/état
- `grouphealth` — Baileys
- `groupid` — Texte/état
- `groupinfo` — Groupe
- `groupmembers` — Texte/état
- `groupmode` — Texte/état
- `groupqr` — Baileys, Groupe, Média
- `groupstats` — Baileys, Groupe
- `grouptitle` — Texte/état
- `hidetag` — Texte/état
- `infobot` — Baileys
- `inspect` — Baileys
- `joinrequests` — Baileys, Groupe
- `joke` — Baileys
- `kick` — Groupe
- `kickall` — Baileys, Groupe
- `leave` — Baileys, Groupe
- `linkgroup` — Baileys, Groupe
- `lockmedia` — Baileys, Média
- `lyrics` — Baileys
- `membercard` — Baileys
- `membercount` — Baileys
- `memberroles` — Texte/état
- `mentionadmins` — Baileys
- `menu` — Baileys, Média
- `mute` — Baileys, Groupe
- `news` — Baileys
- `owner` — Baileys
- `ping` — Baileys
- `play` — Baileys
- `poll` — Baileys
- `privatememory` — Texte/état
- `privatemode` — Baileys
- `promote` — Baileys, Groupe
- `promoteall` — Baileys, Groupe
- `promotehere` — Baileys, Groupe
- `quote` — Baileys
- `randommember` — Baileys
- `reboot` — Texte/état
- `remind` — Texte/état
- `reminders` — Texte/état
- `revoke` — Texte/état
- `rotateadmin` — Baileys
- `rules` — Baileys
- `say` — Baileys
- `scheduleclose` — Texte/état
- `schedulemsg` — Baileys
- `scheduleopen` — Texte/état
- `schedulestatus` — Texte/état
- `setdesc` — Baileys, Groupe
- `setname` — Baileys, Groupe
- `setpp` — Baileys, Média
- `setrules` — Baileys
- `silenttag` — Baileys
- `slowannounce` — Baileys
- `slowmode` — Baileys
- `snapshot` — Baileys, Groupe
- `song` — Média
- `ssweb` — Baileys
- `sticker` — Baileys
- `sudolist` — Texte/état
- `tagadmin` — Baileys, Groupe
- `tagall` — Texte/état
- `tagmembers` — Baileys, Groupe
- `timezone` — Baileys
- `toimg` — Baileys
- `top` — Baileys
- `translate` — Baileys
- `tts` — Baileys
- `unmute` — Baileys, Groupe
- `uptime` — Baileys
- `video` — Baileys, Média
- `warn` — Texte/état
- `weather` — Baileys
- `welcome` — Baileys

## Règle de migration

Une commande est migrable lorsqu’elle peut recevoir un événement webhook normalisé et produire une réponse texte ou média via Graph API. Les commandes de groupe, de présence, d’administration et d’association Baileys nécessitent une réécriture séparée et ne sont pas activées par le dispatcher Cloud actuel.
