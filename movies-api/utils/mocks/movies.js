const moviesMock = [
  {
    id: "8df20741-8d02-4853-974e-accbb8c4568c",
    title: "Inescapable",
    year: 2001,
    cover: "http://dummyimage.com/189x100.png/dddddd/000000",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    duration: 38,
    contentRating: null,
    source:
      "https://ning.com/quam/pede/lobortis/ligula.aspx?molestie=dolor&lorem=quis&quisque=odio&ut=consequat&erat=varius&curabitur=integer&gravida=ac&nisi=leo&at=pellentesque&nibh=ultrices&in=mattis&hac=odio&habitasse=donec&platea=vitae&dictumst=nisi&aliquam=nam&augue=ultrices&quam=libero&sollicitudin=non",
    tags: ["Horror"],
  },
  {
    id: "705b6d86-1231-4d1a-b8d8-7c1e5e5e1f78",
    title: "Rob the Mob",
    year: 2010,
    cover: "http://dummyimage.com/128x100.png/5fa2dd/ffffff",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    duration: 60,
    contentRating: null,
    source:
      "https://hexun.com/augue/aliquam/erat/volutpat/in/congue/etiam.xml?neque=lectus&duis=aliquam&bibendum=sit&morbi=amet&non=diam&quam=in&nec=magna&dui=bibendum&luctus=imperdiet&rutrum=nullam&nulla=orci&tellus=pede&in=venenatis&sagittis=non&dui=sodales&vel=sed&nisl=tincidunt&duis=eu&ac=felis&nibh=fusce&fusce=posuere&lacus=felis&purus=sed&aliquet=lacus&at=morbi&feugiat=sem&non=mauris&pretium=laoreet&quis=ut&lectus=rhoncus&suspendisse=aliquet&potenti=pulvinar&in=sed&eleifend=nisl&quam=nunc&a=rhoncus&odio=dui&in=vel&hac=sem&habitasse=sed&platea=sagittis",
    tags: [
      "Animation|Children",
      "Crime|Drama|Thriller",
      "Mystery|Thriller",
      "Drama",
    ],
  },
  {
    id: "c2821078-d873-4fd2-9d8b-8d296b12a12f",
    title: "Love of Siam, The (Rak haeng Siam)",
    year: 2002,
    cover: "http://dummyimage.com/183x100.png/dddddd/000000",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    duration: 89,
    contentRating: null,
    source:
      "https://w3.org/amet/diam/in.xml?sapien=integer&cursus=a&vestibulum=nibh&proin=in&eu=quis&mi=justo&nulla=maecenas&ac=rhoncus&enim=aliquam&in=lacus&tempor=morbi&turpis=quis&nec=tortor&euismod=id&scelerisque=nulla&quam=ultrices&turpis=aliquet&adipiscing=maecenas&lorem=leo&vitae=odio&mattis=condimentum&nibh=id&ligula=luctus&nec=nec&sem=molestie&duis=sed&aliquam=justo&convallis=pellentesque&nunc=viverra&proin=pede&at=ac&turpis=diam&a=cras&pede=pellentesque&posuere=volutpat&nonummy=dui&integer=maecenas&non=tristique&velit=est&donec=et&diam=tempus&neque=semper&vestibulum=est&eget=quam&vulputate=pharetra&ut=magna",
    tags: ["Action|Drama|Thriller", "Comedy|Drama|Musical|Mystery"],
  },
  {
    id: "9b149d71-d8ca-467a-8e48-2b5ff9fe76ce",
    title: "While the City Sleeps",
    year: 2007,
    cover: "http://dummyimage.com/110x100.png/ff4444/ffffff",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    duration: 50,
    contentRating: null,
    source:
      "http://marriott.com/aliquet/massa/id/lobortis.jpg?vulputate=dignissim&elementum=vestibulum&nullam=vestibulum&varius=ante&nulla=ipsum&facilisi=primis&cras=in&non=faucibus&velit=orci&nec=luctus&nisi=et&vulputate=ultrices&nonummy=posuere&maecenas=cubilia&tincidunt=curae&lacus=nulla&at=dapibus&velit=dolor&vivamus=vel&vel=est&nulla=donec&eget=odio&eros=justo&elementum=sollicitudin&pellentesque=ut&quisque=suscipit&porta=a&volutpat=feugiat&erat=et&quisque=eros&erat=vestibulum&eros=ac&viverra=est&eget=lacinia&congue=nisi&eget=venenatis",
    tags: ["Comedy", "Romance|War", "Action|Adventure|Drama", "Drama|Thriller"],
  },
  {
    id: "436c3bac-9a4f-4753-bcf9-cd53196f6fb7",
    title: "Ricochet",
    year: 2010,
    cover: "http://dummyimage.com/229x100.png/cc0000/ffffff",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    duration: 2,
    contentRating: null,
    source:
      "https://jiathis.com/nisl/aenean/lectus/pellentesque/eget/nunc.jpg?amet=nisl&consectetuer=nunc&adipiscing=rhoncus&elit=dui&proin=vel&interdum=sem&mauris=sed&non=sagittis&ligula=nam&pellentesque=congue&ultrices=risus&phasellus=semper&id=porta&sapien=volutpat&in=quam&sapien=pede&iaculis=lobortis&congue=ligula&vivamus=sit&metus=amet&arcu=eleifend&adipiscing=pede&molestie=libero&hendrerit=quis&at=orci&vulputate=nullam&vitae=molestie&nisl=nibh&aenean=in&lectus=lectus&pellentesque=pellentesque&eget=at&nunc=nulla&donec=suspendisse&quis=potenti&orci=cras&eget=in&orci=purus&vehicula=eu&condimentum=magna&curabitur=vulputate&in=luctus&libero=cum&ut=sociis&massa=natoque&volutpat=penatibus&convallis=et&morbi=magnis&odio=dis&odio=parturient&elementum=montes&eu=nascetur&interdum=ridiculus&eu=mus&tincidunt=vivamus&in=vestibulum&leo=sagittis&maecenas=sapien&pulvinar=cum&lobortis=sociis&est=natoque&phasellus=penatibus&sit=et&amet=magnis&erat=dis&nulla=parturient&tempus=montes&vivamus=nascetur&in=ridiculus&felis=mus&eu=etiam&sapien=vel&cursus=augue&vestibulum=vestibulum&proin=rutrum&eu=rutrum&mi=neque&nulla=aenean&ac=auctor&enim=gravida&in=sem&tempor=praesent&turpis=id",
    tags: ["Action|Romance|Thriller"],
  },
  {
    id: "66fa2504-ea52-42fe-97bb-e4ab816e9c80",
    title: "Train of Life (Train de vie)",
    year: 2010,
    cover: "http://dummyimage.com/150x100.png/ff4444/ffffff",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    duration: 83,
    contentRating: null,
    source:
      "https://live.com/non/velit/nec.js?posuere=eleifend&felis=pede&sed=libero&lacus=quis&morbi=orci&sem=nullam&mauris=molestie&laoreet=nibh&ut=in&rhoncus=lectus&aliquet=pellentesque&pulvinar=at&sed=nulla&nisl=suspendisse&nunc=potenti&rhoncus=cras&dui=in&vel=purus&sem=eu&sed=magna&sagittis=vulputate&nam=luctus&congue=cum&risus=sociis&semper=natoque&porta=penatibus&volutpat=et&quam=magnis&pede=dis&lobortis=parturient&ligula=montes&sit=nascetur&amet=ridiculus&eleifend=mus&pede=vivamus&libero=vestibulum&quis=sagittis&orci=sapien&nullam=cum&molestie=sociis&nibh=natoque&in=penatibus&lectus=et&pellentesque=magnis&at=dis&nulla=parturient&suspendisse=montes&potenti=nascetur",
    tags: [
      "Drama|Horror|Sci-Fi|Thriller",
      "Comedy|Drama|Fantasy",
      "Comedy|Musical|Romance",
      "Crime|Drama",
      "Documentary",
    ],
  },
  {
    id: "eb72bb09-d53b-4da6-b291-410985cb6a47",
    title: "Child I Never Was, The (Leben lang kurze Hosen Tragen, Ein)",
    year: 2009,
    cover: "http://dummyimage.com/174x100.png/ff4444/ffffff",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    duration: 53,
    contentRating: null,
    source:
      "https://webeden.co.uk/consectetuer/adipiscing.json?consectetuer=mollis&adipiscing=molestie&elit=lorem&proin=quisque&risus=ut&praesent=erat&lectus=curabitur&vestibulum=gravida&quam=nisi&sapien=at&varius=nibh&ut=in&blandit=hac&non=habitasse&interdum=platea&in=dictumst&ante=aliquam&vestibulum=augue&ante=quam&ipsum=sollicitudin&primis=vitae&in=consectetuer&faucibus=eget&orci=rutrum&luctus=at&et=lorem&ultrices=integer",
    tags: ["Children|Drama", "Adventure|Drama"],
  },
  {
    id: "71ab1474-988b-4ff0-8503-7d85440e9589",
    title: "Open Windows",
    year: 1985,
    cover: "http://dummyimage.com/232x100.png/cc0000/ffffff",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    duration: 1,
    contentRating: null,
    source:
      "https://livejournal.com/nec/condimentum/neque/sapien/placerat/ante/nulla.json?blandit=pretium&lacinia=iaculis&erat=diam&vestibulum=erat&sed=fermentum&magna=justo&at=nec&nunc=condimentum",
    tags: [
      "Animation|Documentary",
      "Comedy|Fantasy|Romance",
      "Crime|Drama",
      "Adventure|Comedy|War",
      "Drama|Romance",
    ],
  },
  {
    id: "027ed6e4-3c93-45de-81c9-af4dc3da91af",
    title: "Pink Panther Strikes Again, The",
    year: 2005,
    cover: "http://dummyimage.com/232x100.png/ff4444/ffffff",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    duration: 16,
    contentRating: null,
    source:
      "http://wikia.com/lorem/ipsum.jsp?nisl=nulla&duis=sed&ac=accumsan&nibh=felis&fusce=ut&lacus=at&purus=dolor&aliquet=quis&at=odio&feugiat=consequat&non=varius&pretium=integer&quis=ac&lectus=leo&suspendisse=pellentesque&potenti=ultrices&in=mattis&eleifend=odio&quam=donec&a=vitae&odio=nisi&in=nam&hac=ultrices&habitasse=libero&platea=non&dictumst=mattis&maecenas=pulvinar&ut=nulla&massa=pede&quis=ullamcorper&augue=augue&luctus=a&tincidunt=suscipit&nulla=nulla&mollis=elit&molestie=ac&lorem=nulla&quisque=sed&ut=vel&erat=enim&curabitur=sit&gravida=amet&nisi=nunc&at=viverra&nibh=dapibus&in=nulla&hac=suscipit&habitasse=ligula&platea=in&dictumst=lacus&aliquam=curabitur&augue=at&quam=ipsum&sollicitudin=ac&vitae=tellus&consectetuer=semper&eget=interdum&rutrum=mauris&at=ullamcorper&lorem=purus&integer=sit",
    tags: ["Comedy|Drama", "Comedy|Horror", "Comedy|Drama", "Action"],
  },
  {
    id: "23585a99-44c0-4b05-a821-1b8545a444fe",
    title: "Dakota Skye",
    year: 1993,
    cover: "http://dummyimage.com/180x100.png/cc0000/ffffff",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    duration: 4,
    contentRating: null,
    source:
      "http://mashable.com/dignissim/vestibulum/vestibulum/ante/ipsum/primis.xml?dolor=turpis&sit=donec&amet=posuere&consectetuer=metus&adipiscing=vitae&elit=ipsum&proin=aliquam&risus=non&praesent=mauris&lectus=morbi&vestibulum=non&quam=lectus&sapien=aliquam&varius=sit&ut=amet&blandit=diam&non=in&interdum=magna&in=bibendum&ante=imperdiet&vestibulum=nullam&ante=orci&ipsum=pede&primis=venenatis&in=non&faucibus=sodales&orci=sed&luctus=tincidunt&et=eu&ultrices=felis&posuere=fusce&cubilia=posuere&curae=felis&duis=sed&faucibus=lacus&accumsan=morbi&odio=sem&curabitur=mauris&convallis=laoreet&duis=ut&consequat=rhoncus&dui=aliquet&nec=pulvinar&nisi=sed&volutpat=nisl&eleifend=nunc&donec=rhoncus&ut=dui&dolor=vel&morbi=sem&vel=sed&lectus=sagittis&in=nam&quam=congue&fringilla=risus&rhoncus=semper&mauris=porta&enim=volutpat&leo=quam&rhoncus=pede&sed=lobortis&vestibulum=ligula&sit=sit&amet=amet&cursus=eleifend&id=pede",
    tags: ["Drama|War"],
  },
];

module.exports = {
  moviesMock,
};
