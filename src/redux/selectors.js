export const selectContacts = (state) => {
    return state.phonebookStore.contacts.items
}

export const selectFilter = (state) => {
    return state.phonebookStore.filter
}
export const selectIsLoading = (state) => {
    return state.phonebookStore.contacts.isLoading
}
export const selectIsError = (state) => {
    return state.phonebookStore.contacts.error
}