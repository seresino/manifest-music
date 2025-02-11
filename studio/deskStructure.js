export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(S.document().schemaType('settings').documentId('settings')),
      // Filter out settings from other document types
      ...S.documentTypeListItems().filter((listItem) => !['settings'].includes(listItem.getId())),
    ])
