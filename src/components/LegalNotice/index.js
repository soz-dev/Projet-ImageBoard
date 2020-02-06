// == Import : npm
import React from 'react';

import { NavLink } from 'react-router-dom';

// == Import : local
import './notice.scss';

// == Composant
const LegalNotice = () => (
  <div id="notice">
    <div className="wrapper">
      <div className="wrapper-notice">
        <NavLink exact to="/">
          <div className="wrapper-developers-iconReturn">Retour Home</div>
        </NavLink>
        <div className="wrapper-notice-main">
          <div className="wrapper-notice-main-content">
            <h1 className="wrapper-notice-main-content-title">Définitions</h1>
            <p className="wrapper-notice-main-content-text">Client : tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.</p>
            <p className="wrapper-notice-main-content-text">Contenu : Ensemble des éléments constituants l’information présente sur le Site, notamment textes – images – vidéos.</p>
            <p className="wrapper-notice-main-content-text">Informations clients : Ci après dénommé « Information (s) » qui correspondent à l’ensemble des données personnelles susceptibles d’être détenues par https://oboard.fr pour la gestion de votre compte, de la gestion de la relation client et à des fins d’analyses et de statistiques.</p>
            <p className="wrapper-notice-main-content-text">Utilisateur : Internaute se connectant, utilisant le site susnommé.</p>
            <p className="wrapper-notice-main-content-text">Informations personnelles : « Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>
            <p className="wrapper-notice-main-content-text">Les termes « données à caractère personnel », « personne concernée », « sous traitant » et « données sensibles » ont le sens défini par le Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>
          </div>
          <div className="wrapper-notice-main-content">
            <h1 className="wrapper-notice-main-content-title">Conditions générales d’utilisation du site et des services proposés</h1>
            <p className="wrapper-notice-main-content-text">Le Site constitue une œuvre de l’esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.</p>
            <p className="wrapper-notice-main-content-text">L’utilisation du site https://oboard.fr implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site https://oboard.fr sont donc invités à les consulter de manière régulière.</p>
            <p className="wrapper-notice-main-content-text">Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par https://oboard.fr, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention. Le site web https://oboard.fr est mis à jour régulièrement par https://oboard.fr responsable. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</p>
          </div>
          <div className="wrapper-notice-main-content">
            <h1 className="wrapper-notice-main-content-title">Description des services fournis</h1>
            <p className="wrapper-notice-main-content-text">Le site internet https://oboard.fr a pour objet de fournir une information concernant l’ensemble des activités de la société. https://oboard.fr s’efforce de fournir sur le site https://oboard.fr des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
            <p className="wrapper-notice-main-content-text">Toutes les informations indiquées sur le site https://oboard.fr sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site https://oboard.fr ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>
          </div>
          <div className="wrapper-notice-main-content">
            <h1 className="wrapper-notice-main-content-title">Limitations contractuelles sur les données techniques</h1>
            <p className="wrapper-notice-main-content-text">Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour Le site https://oboard.fr est hébergé chez un prestataire sur le territoire de l’Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>
            <p className="wrapper-notice-main-content-text">L’objectif est d’apporter une prestation qui assure le meilleur taux d’accessibilité. L’hébergeur assure la continuité de son service 24 Heures sur 24, tous les jours de l’année. Il se réserve néanmoins la possibilité d’interrompre le service d’hébergement pour les durées les plus courtes possibles notamment à des fins de maintenance, d’amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les Prestations et Services génèrent un trafic réputé anormal.</p>
            <p className="wrapper-notice-main-content-text">https://oboard.fr et l’hébergeur ne pourront être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie lié notamment à l’encombrement du réseau empêchant l’accès au serveur.</p>
          </div>
          <div className="wrapper-notice-main-content">
            <h1 className="wrapper-notice-main-content-title">Propriété intellectuelle et contrefaçons</h1>
            <p className="wrapper-notice-main-content-text">https://oboard.fr est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : https://oboard.fr</p>
            <p className="wrapper-notice-main-content-text">Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
          </div>
          <div className="wrapper-notice-main-content">
            <h1 className="wrapper-notice-main-content-title">Limitations de responsabilité</h1>
            <p className="wrapper-notice-main-content-text">https://oboard.fr agit en tant qu’éditeur du site. https://oboard.fr est responsable de la qualité et de la véracité du Contenu qu’il publie.</p>
            <p className="wrapper-notice-main-content-text">https://oboard.fr ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site internet https://oboard.fr, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité..</p>
            <p className="wrapper-notice-main-content-text">
            https://oboard.fr ne pourra également être tenu responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site https://oboard.fr. Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. https://oboard.fr se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, https://oboard.fr se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).
            </p>
          </div>
          <div className="wrapper-notice-main-content">
            <h1 className="wrapper-notice-main-content-title">Notification d’incident</h1>
            <p className="wrapper-notice-main-content-text">Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune méthode de stockage électronique n'est complètement sûre. Nous ne pouvons en conséquence pas garantir une sécurité absolue. Si nous prenions connaissance d'une brèche de la sécurité, nous avertirions les utilisateurs concernés afin qu'ils puissent prendre les mesures appropriées. Nos procédures de notification d’incident tiennent compte de nos obligations légales, qu'elles se situent au niveau national ou européen. Nous nous engageons à informer pleinement nos clients de toutes les questions relevant de la sécurité de leur compte et à leur fournir toutes les informations nécessaires pour les aider à respecter leurs propres obligations réglementaires en matière de reporting.</p>
            <p className="wrapper-notice-main-content-text">Aucune information personnelle de l'utilisateur du site https://oboard.fr n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de https://oboard.fr et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site https://oboard.fr.</p>
            <p className="wrapper-notice-main-content-text">
            Pour assurer la sécurité et la confidentialité des Données Personnelles et des Données Personnelles de Santé, https://oboard.fr utilise des réseaux protégés par des dispositifs standards tels que par pare-feu, la pseudonymisation, l’encryption et mot de passe.
            </p>
            <p className="wrapper-notice-main-content-text">
            Lors du traitement des Données Personnelles, https://oboard.fr prend toutes les mesures raisonnables visant à les protéger contre toute perte, utilisation détournée, accès non autorisé, divulgation, altération ou destruction.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default LegalNotice;
