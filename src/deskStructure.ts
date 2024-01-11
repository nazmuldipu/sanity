import {JsonPreview, portfolioIcon} from '../assets/iconComponents'

// const createPortfolioModuleStructure = (S: any) => {
//   return S.listItem()
//     .title('Portfolio')
//     .icon(portfolioIcon)
//     .child(
//       S.list()
//         .title('Portfolio')
//         .items([
//           S.listItem()
//             .title('Navbar')
//             .icon(navbarIcon)
//             .child(S.document().schemaType('navbar').documentId('navbar')),
//           S.listItem()
//             .title('Author')
//             .child(S.document().schemaType('author').documentId('author')),
//           S.listItem()
//             .title('Portfolio')
//             .child(S.document().schemaType('portfolio').documentId('portfolio')),
//         ])
//     )
// }

export const myStructure = (S: any) =>
  S.list()
    .title('Sites')
    .items([
      S.listItem()
        .title('Portfolio')
        .icon(portfolioIcon)
        .child((name: any) =>
          S.documentList().title('Portfolio List').filter('_type == "portfolio"').params({name})
        ),
      // .child(S.document().schemaType('navbar').documentId('navbar')),
      // S.listItem()
      //   .title('Portfolio')
      //   .icon(portfolioIcon)
      //   .child(S.document().schemaType('portfolio').documentId('portfolio')),
      // createPortfolioModuleStructure(S),
      // S.listItem()
      //   .title('Settings')
      //   .child(
      //     S.list()
      //       .title('Settings')
      //       .items([
      //         S.listItem()
      //           .title('Meta Data')
      //           .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      //         S.listItem()
      //           .title('Site Colors')
      //           .child(S.document().schemaType('colors').documentId('colors')),
      //         S.listItem()
      //           .title('Main Navigation')
      //           .child(S.document().schemaType('mainNavigation').documentId('mainNavigation')),
      //       ])
      //   ),
      // ...S.documentTypeListItems().filter(
      //   (listItem: any) =>
      //     ![
      //       'about',
      //       'portfolio',
      //       'pet',
      //       'siteSettings',
      //       'colors',
      //       'navbar',
      //       'navigation',
      //       'author',
      //     ].includes(listItem.getId())
      // ),
    ])

export const defaultDocumentNodeResolver = (S: any) =>
  S.document().views([S.view.form(), S.view.component(JsonPreview).title('JSON')])
