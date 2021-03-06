# SPFx Weather App

## Summary

A light-weight local weather web part. Simple, yet eye-catching.

### ☀ Modern styles for all weather patterns

![various styles built in](styles.png)

### 🛠 Resizes to adapt to modern pages

![resized to modern pages](resize.png)

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.11-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

> Node v10 (10.23.0 was used in development)

## Version history

| Version | Date           | Comments                                                    |
| ------- | -------------- | ----------------------------------------------------------- |
| 1.0.0.0 | March 20, 2021 | Deployment test release / no styles / image reference issue |
| 2.0.0.0 | April 2, 2021  | Initial release / no dynamic styles                         |
| 2.0.0.2 | April 11, 2021 | Updated with dynamic styles                                 |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**

## For Production

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
- **npm install**
- **gulp bundle --ship**
- **gulp package-solution --ship**
- Open your SharePoint apps catalog
- Locate the .sppkg file located in your solution folder under "\sharepoint\solution"
- Upload the .sppkg file to your apps catalog
- Deploy the app
- Add the web part to your page!

Note that users must have location services enabled, otherwise the app will update to Sacramento, CA. This will be patched in a later update.

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
