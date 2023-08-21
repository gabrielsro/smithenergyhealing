const testimonialList = [
  {
    author: "Linda Watson",
    message:
      "It's amazing what I've accomplished since I embarked in this wonderful journey of self-discovery",
  },
  {
    author: "Paul Stout",
    message:
      "At times I cannot recognize myself when I suddenly realize it's me who's doing the very things I couldn't not long ago",
  },
  {
    author: "Mariah Wolf",
    message:
      "What an amazing coaching service I've found in Smith Energy Healing. 10/10 would recommend",
  },
];

export default (container) => {
  const testimonialListHtml = testimonialList.map((t) => {
    const message = document.createElement("p");
    const author = document.createElement("p");
    message.innerText = t.message;
    author.innerText = t.author;
    const testimonialContainer = document.createElement("div");
    testimonialContainer.appendChild(message);
    testimonialContainer.appendChild(author);
    testimonialContainer.classList.add("invisible");
    return testimonialContainer;
  });
  testimonialListHtml.forEach((t) => {
    container.appendChild(t);
  });
  changeTestimonials(container, 3000, 0);
};

function changeTestimonials(element, speed, start) {
  const childList = Array.from(element.children);
  let next;
  childList.forEach((c, i) => {
    i == start
      ? childList[i].classList.remove("invisible")
      : childList[i].classList.add("invisible");
  });
  start == childList.length - 1 ? (next = 0) : (next = start += 1);
  setTimeout(() => changeTestimonials(element, speed, next), speed);
}
