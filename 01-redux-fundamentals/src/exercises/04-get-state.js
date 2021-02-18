function setupRender(store) {
  store.subscribe(() => {
    // ✅ Get the current state from the store by calling store.getState()
    const current = store.getState().value
    // ✅ Use the state to update the DOM
    document.querySelector("#count").textContent = `Count: ${current}`;
  });
}

export default setupRender;



