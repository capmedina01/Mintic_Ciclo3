function mostrarPost() {
  var listaPost = [
    {
      "ID de usuario": 1,
      "identificación": 1,
      "title": "quidem molestiae enim"
    },
    {
      "ID de usuario": 1,
      "identificación": 2,
      "title": "sunt qui excepturi placeat culpa"
    },
    {
      "ID de usuario": 1,
      "identificación": 3,
      "título": "omnis laborum odio"
    },
    {
      "ID de usuario": 1,
      "identificación": 4,
      "título": "non esse culpa molestiae omnis sed optio"
    },
    {
      "ID de usuario": 1,
      "identificación": 5,
      "título": "eaque aut omnis a"
    },
    {
      "ID de usuario": 1,
      "identificación": 6,
      "título": "natus impedit quibusdam illo est"
    },
    {
      "ID de usuario": 1,
      "identificación": 7,
      "título": "quibusdam autem aliquid et et quia"
    },
    {
      "ID de usuario": 1,
      "identificación": 8,
      "title": "qui fuga est a eum"
    }

  ];
  var info = "<table>"
  info = info + "<tr>"
  info = info + "<th>id</th>"
  info = info + "<th>usuario</th>"
  info = info + "<th>titulo</th>"
  info = info + "<th>post</th>"
  info = info + "</tr>"
  info = info + "</table>"

  for (var i = 0; i < listaPost.length; i++) {
    info = info + "<tr>"
    info = info + "<td>id</td>"
    info = info + "<td>usuario</td>"
    info = info + "<td>titulo</td>"
    info = info + "<td>post</td>"
    info = info + "</tr>"
  }

  document.getElementById("informacion").innerHTML = info;
}