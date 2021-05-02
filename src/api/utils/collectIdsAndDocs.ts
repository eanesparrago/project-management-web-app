const collectIdsAndDocs = (doc: any) => ({ id: doc.id, ...doc.data() })

export default collectIdsAndDocs
