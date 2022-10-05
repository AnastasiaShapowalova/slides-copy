const onTokenUpdate = (e, v) => {
  document.querySelector(':root').style.setProperty(v, e.target.value);
}

export default onTokenUpdate