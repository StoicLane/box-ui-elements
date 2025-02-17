import { defineMessages } from 'react-intl';
var messages = defineMessages({
  securityControlsLabel: {
    "id": "boxui.securityControls.securityControlsLabel",
    "defaultMessage": "Restrictions"
  },
  // Short summary messages - 1 restriction
  shortSharing: {
    "id": "boxui.securityControls.shortSharing",
    "defaultMessage": "Sharing restriction applies"
  },
  shortDownload: {
    "id": "boxui.securityControls.shortDownload",
    "defaultMessage": "Download restrictions apply"
  },
  shortApp: {
    "id": "boxui.securityControls.shortApp",
    "defaultMessage": "Application restrictions apply"
  },
  shortWatermarking: {
    "id": "boxui.securityControls.shortWatermarking",
    "defaultMessage": "Watermarking applies"
  },
  shortSign: {
    "id": "boxui.securityControls.shortSign",
    "defaultMessage": "Sign restrictions apply"
  },
  // Short summary messages - 2 restrictions
  shortSharingDownload: {
    "id": "boxui.securityControls.shortSharingDownload",
    "defaultMessage": "Sharing and download restrictions apply"
  },
  shortSharingApp: {
    "id": "boxui.securityControls.shortSharingApp",
    "defaultMessage": "Sharing and app restrictions apply"
  },
  shortDownloadApp: {
    "id": "boxui.securityControls.shortDownloadApp",
    "defaultMessage": "Download and app restrictions apply"
  },
  shortSharingSign: {
    "id": "boxui.securityControls.shortSharingSign",
    "defaultMessage": "Sharing and Sign restrictions apply"
  },
  shortDownloadSign: {
    "id": "boxui.securityControls.shortDownloadSign",
    "defaultMessage": "Download and Sign restrictions apply"
  },
  shortAppSign: {
    "id": "boxui.securityControls.shortAppSign",
    "defaultMessage": "App and Sign restrictions apply"
  },
  // Short summary messages - 3 restrictions
  shortDownloadAppSign: {
    "id": "boxui.securityControls.shortDownloadAppSign",
    "defaultMessage": "Download, app and Sign restrictions apply"
  },
  shortSharingAppSign: {
    "id": "boxui.securityControls.shortSharingAppSign",
    "defaultMessage": "Sharing, app and Sign restrictions apply"
  },
  shortSharingDownloadSign: {
    "id": "boxui.securityControls.shortSharingDownloadSign",
    "defaultMessage": "Sharing, download and Sign restrictions apply"
  },
  shortSharingDownloadApp: {
    "id": "boxui.securityControls.shortSharingDownloadApp",
    "defaultMessage": "Sharing, download and app restrictions apply"
  },
  // Short summary messages - 4 restrictions
  shortSharingDownloadAppSign: {
    "id": "boxui.securityControls.shortSharingDownloadAppSign",
    "defaultMessage": "Sharing, download, app and Sign restrictions apply"
  },
  // Full list individual restriction bullets
  sharingCollabOnly: {
    "id": "boxui.securityControls.sharingCollabOnly",
    "defaultMessage": "Shared links allowed for collaborators only."
  },
  sharingCollabAndCompanyOnly: {
    "id": "boxui.securityControls.sharingCollabAndCompanyOnly",
    "defaultMessage": "Shared links cannot be made publicly accessible."
  },
  watermarkingApplied: {
    "id": "boxui.securityControls.watermarkingApplied",
    "defaultMessage": "Watermarking will be applied."
  },
  externalCollabBlock: {
    "id": "boxui.securityControls.externalCollabBlock",
    "defaultMessage": "External collaboration restricted."
  },
  externalCollabDomainList: {
    "id": "boxui.securityControls.externalCollabDomainList",
    "defaultMessage": "External collaboration limited to approved domains."
  },
  appDownloadRestricted: {
    "id": "boxui.securityControls.appDownloadRestricted",
    "defaultMessage": "Download restricted for some applications."
  },
  appDownloadBlacklist: {
    "id": "boxui.securityControls.appDownloadBlacklist",
    "defaultMessage": "Download restricted for some applications: {appNames}"
  },
  appDownloadBlacklistOverflow: {
    "id": "boxui.securityControls.appDownloadBlacklistOverflow",
    "defaultMessage": "Download restricted for some applications: {appNames} +{remainingAppCount} more"
  },
  appDownloadWhitelist: {
    "id": "boxui.securityControls.appDownloadWhitelist",
    "defaultMessage": "Only select applications are allowed: {appNames}"
  },
  appDownloadWhitelistOverflow: {
    "id": "boxui.securityControls.appDownloadWhitelistOverflow",
    "defaultMessage": "Only select applications are allowed: {appNames} +{remainingAppCount} more"
  },
  allAppNames: {
    "id": "boxui.securityControls.allAppNames",
    "defaultMessage": "All applications: {appsList}"
  },
  // Web Download Restrictions
  webDownloadOwners: {
    "id": "boxui.securityControls.webDownloadOwners",
    "defaultMessage": "Download restricted on web, except Owners/Co-Owners."
  },
  webDownloadOwnersEditors: {
    "id": "boxui.securityControls.webDownloadOwnersEditors",
    "defaultMessage": "Download restricted on web, except Owners/Co-Owners/Editors."
  },
  webDownloadExternalOwners: {
    "id": "boxui.securityControls.webDownloadExternalOwners",
    "defaultMessage": "Download restricted on web, except Owners/Co-Owners. Also restricted for external users."
  },
  webDownloadExternalOwnersEditors: {
    "id": "boxui.securityControls.webDownloadExternalOwnersEditors",
    "defaultMessage": "Download restricted on web, except Owners/Co-Owners/Editors. Also restricted for external users."
  },
  webDownloadExternal: {
    "id": "boxui.securityControls.webDownloadExternal",
    "defaultMessage": "Download restricted on web for external users."
  },
  boxSignRequestRestricted: {
    "id": "boxui.securityControls.boxSignRequestRestricted",
    "defaultMessage": "Sign restrictions apply."
  },
  // Mobile Download Restrictions
  mobileDownloadOwners: {
    "id": "boxui.securityControls.mobileDownloadOwners",
    "defaultMessage": "Download restricted on mobile, except Owners/Co-Owners."
  },
  mobileDownloadOwnersEditors: {
    "id": "boxui.securityControls.mobileDownloadOwnersEditors",
    "defaultMessage": "Download restricted on mobile, except Owners/Co-Owners/Editors."
  },
  mobileDownloadExternalOwners: {
    "id": "boxui.securityControls.mobileDownloadExternalOwners",
    "defaultMessage": "Download restricted on mobile, except Owners/Co-Owners. Also restricted for external users."
  },
  mobileDownloadExternalOwnersEditors: {
    "id": "boxui.securityControls.mobileDownloadExternalOwnersEditors",
    "defaultMessage": "Download restricted on mobile, except Owners/Co-Owners/Editors. Also restricted for external users."
  },
  mobileDownloadExternal: {
    "id": "boxui.securityControls.mobileDownloadExternal",
    "defaultMessage": "Download restricted on mobile for external users."
  },
  // Desktop Download Restrictions
  desktopDownloadOwners: {
    "id": "boxui.securityControls.desktopDownloadOwners",
    "defaultMessage": "Download restricted on Box Drive, except Owners/Co-Owners."
  },
  desktopDownloadOwnersEditors: {
    "id": "boxui.securityControls.desktopDownloadOwnersEditors",
    "defaultMessage": "Download restricted on Box Drive, except Owners/Co-Owners/Editors."
  },
  desktopDownloadExternalOwners: {
    "id": "boxui.securityControls.desktopDownloadExternalOwners",
    "defaultMessage": "Download restricted on Box Drive, except Owners/Co-Owners. Also restricted for external users."
  },
  desktopDownloadExternalOwnersEditors: {
    "id": "boxui.securityControls.desktopDownloadExternalOwnersEditors",
    "defaultMessage": "Download restricted on Box Drive, except Owners/Co-Owners/Editors. Also restricted for external users."
  },
  desktopDownloadExternal: {
    "id": "boxui.securityControls.downloadExternal",
    "defaultMessage": "Download restricted on Box Drive for external users."
  },
  // Security Controls Modal
  viewAll: {
    "id": "boxui.securityControls.viewAll",
    "defaultMessage": "View All"
  },
  modalTitle: {
    "id": "boxui.securityControls.modalTitle",
    "defaultMessage": "View Classification for '{itemName}'"
  },
  modalDescription: {
    "id": "boxui.securityControls.modalDescription",
    "defaultMessage": "Classification labels defined by your administrator can be used to label content and apply security policies."
  }
});
export default messages;
//# sourceMappingURL=messages.js.map