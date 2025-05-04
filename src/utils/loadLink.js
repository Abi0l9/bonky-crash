const loadLink = (link) => {
  if (!link) {
    location.reload();
  } else location.href = link;
};

loadLink.description = "Redirects to the given link";

export default loadLink;
