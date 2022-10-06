function mostrarPost(){
    var listaPost= [
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
        },
        {
          "ID de usuario": 1,
          "identificación": 9,
          "title": "saepe unde necessitatibus rem"
        },
        {
          "ID de usuario": 1,
          "identificación": 10,
          "título": "distinctio laborum qui"
        },
        {
          "ID de usuario": 2,
          "identificación": 11,
          "título": "quam nostrum impedit mollitia quod et dolor"
        },
        {
          "ID de usuario": 2,
          "identificación": 12,
          "título": "consequatur autem doloribus natus consectetur"
        },
        {
          "ID de usuario": 2,
          "identificación": 13,
          "título": "ab rerum non rerum consequatur ut ea unde"
        },
        {
          "ID de usuario": 2,
          "identificación": 14,
          "title": "ducimus molestias eos animi atque nihil"
        },
        {
          "ID de usuario": 2,
          "identificación": 15,
          "título": "ut pariatur rerum ipsum natus repellendus praesentium"
        },
        {
          "ID de usuario": 2,
          "identificación": 16,
          "título": "voluptatem aut maxime inventore autem magnam atque repellat"
        },
        {
          "ID de usuario": 2,
          "identificación": 17,
          "título": "aut minima voluptatem ut velot"
        },
        {
          "ID de usuario": 2,
          "identificación": 18,
          "título": "nesciunt quia et doloremque"
        },
        {
          "ID de usuario": 2,
          "identificación": 19,
          "título": "velit pariatur quaerat similique libero omnis quia"
        },
        {
          "ID de usuario": 2,
          "identificación": 20,
          "título": "voluptas rerum iure ut enim"
        },
        {
          "ID de usuario": 3,
          "identificación": 21,
          "título": "repudiandae voluptatem optio est consequatur rem in temporibus et"
        },
        {
          "ID de usuario": 3,
          "identificación": 22,
          "title": "et rem non provident vel ut"
        },
        {
          "ID de usuario": 3,
          "identificación": 23,
          "título": "incidente quisquam hic adipisci sequi"
        },
        {
          "ID de usuario": 3,
          "identificación": 24,
          "title": "dolores ut et facere placeat"
        },
        {
          "ID de usuario": 3,
          "identificación": 25,
          "título": "vero maxime id possimus sunt neque et consequatur"
        },
        {
          "ID de usuario": 3,
          "identificación": 26,
          "título": "quibusdam saepe ipsa vel harum"
        },
        {
          "ID de usuario": 3,
          "identificación": 27,
          "título": "id non nostrum expedita"
        },
        {
          "ID de usuario": 3,
          "identificación": 28,
          "title": "omnis neque exercitationem sed dolor atque maxime aut cum"
        },
        {
          "ID de usuario": 3,
          "identificación": 29,
          "título": "inventare ut quasi magnam itaque est fugit"
        },
        {
          "ID de usuario": 3,
          "identificación": 30,
          "title": "tempora asunta et similique odit distintio error"
        },
        {
          "ID de usuario": 4,
          "identificación": 31,
          "título": "adipisci laborum fuga laboriosam"
        },
        {
          "ID de usuario": 4,
          "identificación": 32,
          "title": "reiciendis dolores a ut qui debitis non quo labore"
        },
        {
          "ID de usuario": 4,
          "identificación": 33,
          "título": "iste eos nostrum"
        },
        {
          "ID de usuario": 4,
          "identificación": 34,
          "título": "cumque voluptatibus rerum arquitecto blanditiis"
        },
        {
          "ID de usuario": 4,
          "identificación": 35,
          "título": "et impedit nisi quae magni necessitatibus sed aut pariatur"
        },
        {
          "ID de usuario": 4,
          "identificación": 36,
          "título": "nihil cupiditate voluptate neque"
        },
        {
          "ID de usuario": 4,
          "identificación": 37,
          "título": "est placeat dicta ut nisi rerum iste"
        },
        {
          "ID de usuario": 4,
          "identificación": 38,
          "title": "bajo una identificación secuencial"
        },
        {
          "ID de usuario": 4,
          "identificación": 39,
          "título": "ratione porro illum labore eum aperiam sed"
        },
        {
          "ID de usuario": 4,
          "identificación": 40,
          "título": "voluptas neque et sint aut quo odit"
        },
        {
          "ID de usuario": 5,
          "identificación": 41,
          "título": "ea voluptates maiores eos accusantium officiis tempore mollitia consequatur"
        },
        {
          "ID de usuario": 5,
          "identificación": 42,
          "title": "tenetur explicabo ea"
        },
        {
          "ID de usuario": 5,
          "identificación": 43,
          "título": "aperiam doloremque nihil"
        },
        {
          "ID de usuario": 5,
          "identificación": 44,
          "título": "sapiente cum numquam oficia consequatur vel natus quos suscipit"
        },
        {
          "ID de usuario": 5,
          "identificación": 45,
          "title": "tenetur quos ea unde est enim corrupti qui"
        },
        {
          "ID de usuario": 5,
          "identificación": 46,
          "título": "molestiae voluptate non"
        },
        {
          "ID de usuario": 5,
          "identificación": 47,
          "title": "temporibus molestiae aut"
        },
        {
          "ID de usuario": 5,
          "identificación": 48,
          "título": "modi consequatur culpa aut quam soluta alias perspiciatis laudantium"
        },
        {
          "ID de usuario": 5,
          "identificación": 49,
          "título": "ut aut vero repudiandae voluptas ullam voluptas at consequatur"
        },
        {
          "ID de usuario": 5,
          "identificación": 50,
          "título": "sed qui sed quas sit ducimus dolor"
        },
        {
          "ID de usuario": 6,
          "identificación": 51,
          "título": "odit laboriosam sint quia cupiditate animi quis"
        },
        {
          "ID de usuario": 6,
          "identificación": 52,
          "título": "necesitatibus quas et sunt at voluptatem"
        },
        {
          "ID de usuario": 6,
          "identificación": 53,
          "título": "est vel sequi voluptatem nemo quam molestiae modi enim"
        },
        {
          "ID de usuario": 6,
          "identificación": 54,
          "título": "aut non illo amet perferendis"
        },
        {
          "ID de usuario": 6,
          "identificación": 55,
          "título": "qui culpa itaque omnis in nesciunt arquitecto error"
        },
        {
          "ID de usuario": 6,
          "identificación": 56,
          "título": "omnis qui maiores tempora officiis omnis rerum sed repellat"
        },
        {
          "ID de usuario": 6,
          "identificación": 57,
          "título": "libero excepto voluptatem est arquitecto quae voluptatum oficia tempora"
        },
        {
          "ID de usuario": 6,
          "identificación": 58,
          "título": "nulla illo consequatur aspernatur veritatis aut error delectus et"
        },
        {
          "ID de usuario": 6,
          "identificación": 59,
          "título": "eligendi similique provident nihil"
        },
        {
          "ID de usuario": 6,
          "identificación": 60,
          "título": "omnis mollitia sunt aliquid eum consequatur fugit minus laudantium"
        },
        {
          "ID de usuario": 7,
          "identificación": 61,
          "título": "delectus iusto et"
        },
        {
          "ID de usuario": 7,
          "identificación": 62,
          "título": "eos ea non recusandae iste ut quasi"
        },
        {
          "ID de usuario": 7,
          "identificación": 63,
          "título": "velit est quam"
        },
        {
          "ID de usuario": 7,
          "identificación": 64,
          "título": "autem voluptatem amet iure quae"
        },
        {
          "ID de usuario": 7,
          "identificación": 65,
          "título": "voluptates delectus iure iste qui"
        },
        {
          "ID de usuario": 7,
          "identificación": 66,
          "title": "velit sed quia dolor dolores delectus"
        },
        {
          "ID de usuario": 7,
          "identificación": 67,
          "título": "ad voluptas nostrum et nihil"
        },
        {
          "ID de usuario": 7,
          "identificación": 68,
          "título": "qui quasi nihil aut voluptatum sit dolore minima"
        },
        {
          "ID de usuario": 7,
          "identificación": 69,
          "título": "qui aut est"
        },
        {
          "ID de usuario": 7,
          "identificación": 70,
          "title": "et deleniti unde"
        },
        {
          "ID de usuario": 8,
          "identificación": 71,
          "título": "y todo el mundo"
        },
        {
          "ID de usuario": 8,
          "identificación": 72,
          "title": "unde exercitationem ut"
        },
        {
          "ID de usuario": 8,
          "identificación": 73,
          "título": "quos omnis oficia"
        },
        {
          "ID de usuario": 8,
          "identificación": 74,
          "título": "quia est eius vitae dolor"
        },
        {
          "ID de usuario": 8,
          "identificación": 75,
          "title": "aut quia expedita non"
        },
        {
          "ID de usuario": 8,
          "identificación": 76,
          "título": "dolorem magnam facere itaque ut reprehenderit tenetur corrupti"
        },
        {
          "ID de usuario": 8,
          "identificación": 77,
          "título": "cupiditate sapiente maiores iusto ducimus cum excepturi veritatis quia"
        },
        {
          "ID de usuario": 8,
          "identificación": 78,
          "título": "est minima eius possimus ea ratione velit et"
        },
        {
          "ID de usuario": 8,
          "identificación": 79,
          "título": "ipsa quae voluptas natus ut suscipit soluta quia quidem"
        },
        {
          "ID de usuario": 8,
          "identificación": 80,
          "título": "id nihil reprehenderit"
        },
        {
          "ID de usuario": 9,
          "identificación": 81,
          "título": "quibusdam sapiente et"
        },
        {
          "ID de usuario": 9,
          "identificación": 82,
          "title": "recusandae consequatur vel amet unde"
        },
        {
          "ID de usuario": 9,
          "identificación": 83,
          "título": "aperiam odio fugiat"
        },
        {
          "ID de usuario": 9,
          "identificación": 84,
          "title": "est et at eos expedita"
        },
        {
          "ID de usuario": 9,
          "identificación": 85,
          "título": "qui voluptatem consequatur aut ab quis temporibus praesentium"
        },
        {
          "ID de usuario": 9,
          "identificación": 86,
          "título": "eligendi mollitia alias aspernatur vel ut iusto"
        },
        {
          "ID de usuario": 9,
          "identificación": 87,
          "título": "aut aut arquitecto"
        },
        {
          "ID de usuario": 9,
          "identificación": 88,
          "título": "cuas perspiciatis optio"
        },
        {
          "ID de usuario": 9,
          "identificación": 89,
          "title": "sit optio id voluptatem est eum et"
        },
        {
          "ID de usuario": 9,
          "identificación": 90,
          "título": "es muy digno"
        },
        {
          "ID de usuario": 10,
          "identificación": 91,
          "título": "repellendus praesentium debitis officiis"
        },
        {
          "ID de usuario": 10,
          "identificación": 92,
          "título": "incidunt et et eligendi asumenda soluta quia recusandae"
        },
        {
          "ID de usuario": 10,
          "identificación": 93,
          "título": "nisi qui dolores perspiciatis"
        },
        {
          "ID de usuario": 10,
          "identificación": 94,
          "título": "quisquam a dolores et earum vitae"
        },
        {
          "ID de usuario": 10,
          "identificación": 95,
          "título": "consectetur vel rerum qui aperiam modi eos aspernatur ipsa"
        },
        {
          "ID de usuario": 10,
          "identificación": 96,
          "title": "unde et ut molestiae est molestias voluptatem sint"
        },
        {
          "ID de usuario": 10,
          "identificación": 97,
          "título": "est quod aut"
        },
        {
          "ID de usuario": 10,
          "identificación": 98,
          "título": "omnis quia possimus nesciunt deleniti asunción sed autem"
        },
        {
          "ID de usuario": 10,
          "identificación": 99,
          "title": "consectetur ut id impedit dolores sit ad ex aut"
        },
        {
          "ID de usuario": 10,
          "identificación": 100,
          "title": "enim repellat iste"
        }
      ];
      var info="<table>"
      info=info+"<tr>"
      info=info+"<th>id</th>"
      info=info+"<th>usuario</th>"
      info=info+"<th>titulo</th>"
      info=info+"<th>post</th>"
      info=info+"</tr>"
      info=info+"</table>"

      document.getElementById("informacion").innerHTML=info;
}