const downloadFile = (url, name = 'makeui.sketch') => {
  const $a = document.createElement("a");
  document.body.appendChild($a);

  console.log('URL: ', url);

  $a.style = "display: none";
  $a.href = url;
  $a.setAttribute('download', name);
  $a.click();
  document.body.removeChild($a);
}

export {
  downloadFile,
}