const modal = document.querySelector("#myModal");
const btnNav = document.querySelector("#myBtnNav");
const btnHeader = document.querySelector("#myBtnHeader");
const btnForm = document.querySelector("#myBtnform");
const span = document.querySelector("#close");

const showModal = "block";
const hideModal = "none";

const showHideModal = (elem, handler) => {
  if (elem) {
    return (elem.onclick = () => {
      modal.style.display = handler;
    });
  }
};

showHideModal(btnNav, showModal);
showHideModal(btnHeader, showModal);
showHideModal(span, hideModal);
showHideModal(btnForm, showModal);

window.onclick = event => {
	if (event.target == modal) {
		modal.style.display = "none"
	}
}
