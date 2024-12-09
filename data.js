let savedName = localStorage.getItem('username');

const peopleData = [
    {
        idName: savedName,
        href: "./images/pics/0060W0Exgy1ghg1boz7fqj30i30i2gnx.jpg",
        level: "iconfont ic_user level_0 icon-ic_userlevel_0",
    },
    {
      idName: savedName,
      href: "./images/pics/0060W0Exgy1ghg1boz8pmj30fp0fpjt3.jpg",
      level: "iconfont ic_user level_1 icon-ic_userlevel_1",
    },
    {
      idName: savedName,
      href: "./images/pics/0060W0Exgy1ghg1boztf6j30gl0glq50.jpg",
      level: "iconfont ic_user level_2 icon-ic_userlevel_2",
    },
    {
      idName: savedName,
      href: "./images/pics/0060W0Exgy1ghg1bp2yn6j30gl0glq51.jpg",
      level: "iconfont ic_user level_3 icon-ic_userlevel_3",
    },
    {
      idName: savedName,
      href: "./images/pics/0060W0Exgy1ghg1bp4cmoj30i90i9tat.jpg",
      level: "iconfont ic_user level_4 icon-ic_userlevel_4",
    },
    {
      idName: savedName,
      href: "./images/pics/0060W0Exgy1ghg1bp5natj30gl0glabw.jpg",
      level: "iconfont ic_user level_5 icon-ic_userlevel_5",
    },
    {
      idName: savedName,
      href: "./images/pics/0060W0Exgy1ghg1bp14w2j30go0gomz6.jpg",
      level: "iconfont ic_user level_6 icon-ic_userlevel_6",
    },
    {
      idName: savedName,
      href: "./images/pics/0060W0Exgy1ghg1bp52cxj30b40b43z4.jpg",
      level: "iconfont ic_user level_5 icon-ic_userlevel_5",
    },
];

function getRandomAvatar() {
  const avatars = [
      "./images/pics/0060W0Exgy1ghg1bp52cxj30b40b43z4.jpg",
  ];
  return avatars[Math.floor(Math.random() * avatars.length)];
}
peopleData.forEach(person => {
    person.href = getRandomAvatar();
});
