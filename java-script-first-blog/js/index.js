const data = [
  {
    imgUrl: "https://picsum.photos/id/238/300/200",
    imgAlt: "Fotografia tematyczna",
    title: "Tytuł pierwszego wpisu",
    description:
      "Mega długi opis danego wpisu na blogu tak aby uzupełnić miejsce",
  },
  {
    imgUrl: "https://picsum.photos/id/239/300/200",
    imgAlt: "Fotografia tematyczna",
    title: "Tytuł drugiego wpisu",
    description: "Mega długi opis danego wpisu ",
  },
  {
    imgUrl: "https://picsum.photos/id/240/300/200",
    imgAlt: "Fotografia tematyczna",
    title: "Tytuł kolejnego wpisu",
    description: "blogu tak aby uzupełnić miejsce",
  },
];

const renderItem = ({
  imgUrl,
  imgAlt,
  title,
  description,
}) => `<li class="list--item">
		<img
			src="${imgUrl}"
			alt="${imgAlt}"
		/>
		<p class="list--title">${title}</p>
		<p class="list--description">${description}</p>
	</li>`;

const listItems = data.map((blogData) => renderItem(blogData));

const list = document.getElementById("list");

list.innerHTML = listItems.join("");
