const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal__is-open");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal__is-open");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal__is-open");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal__is-open");
});
