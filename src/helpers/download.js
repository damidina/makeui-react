const downloadFile = (url, name = 'makeui.sketch') => {
  const $a = document.createElement("a");
  document.body.appendChild($a);

  $a.style = "display: none";
  $a.href = url;
  $a.setAttribute('download', name);
  $a.click();
  document.body.removeChild($a);
}

export {
  downloadFile,
}