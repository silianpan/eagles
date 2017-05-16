export default {
  artdialog(title, content, width, height, id, isModal=false) {
    const art = dialog({
      content: content,
      title: title,
      quickClose: true,
      width: width,
      height: height,
      id: id
    });
    if (isModal) {
      art.showModal();
    } else {
      art.show();
    }
  }
}
