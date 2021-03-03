const express = require("express");
const Ember = require("ember");
const app = express();
const exphbs = require("express-handlebars");
const port = 3000;

app.use(express.static("public"));
app.engine(
  "handlebars",
  exphbs({
    helpers: {
      // Function to do basic mathematical operation in handlebar
      math: function (lvalue, operator, rvalue) {
        lvalue = parseFloat(lvalue);
        rvalue = parseFloat(rvalue);
        return {
          "+": lvalue + rvalue,
          "-": lvalue - rvalue,
          "*": lvalue * rvalue,
          "/": lvalue / rvalue,
          "%": lvalue % rvalue,
        }[operator];
      },
    },
  })
);
app.set("view engine", "handlebars");

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});

app.get("/", (req, res) => {
  res.render("home", {
    // nav: 'nav',
    titre1: "Cui'zine",
    titre2: "Le mag cuisine",
    customCss: "/css/homepage.css",
    isActiveHome: true,
    script: [
        {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
        crossorigin: "anonymous"
        },
        {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js",
        integrity: "sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut",
        crossorigin: "anonymous",
        },
        {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js",
        integrity: "sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k",
        crossorigin: "anonymous",
        },
        {
        src: "./js/menu.js",
        integrity: "",
        crossorigin: "",
        }],
    stylesheet: [
        {
        rel: "stylesheet",
        href: "./css/all.min.css"
        },
        {
        rel: "stylesheet",
        href: "./css/bootstrap.min.css" 
        },
        {
        rel: "stylesheet",
        href: "./css/main.css"
        }]
  });
});

app.get("/team", (req, res) => {
  res.render("team", {
    titre1: "On apprend en enseignant",
    titre2: "Un pour tous et tous pour un",
    customCss: "/css/team.css",
    isActiveTeam: true,
    script: [
        {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
        crossorigin: "anonymous"
        },
        {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js",
        integrity: "sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut",
        crossorigin: "anonymous",
        },
        {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js",
        integrity: "sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k",
        crossorigin: "anonymous",
        },
        {
        src: "./js/menu.js",
        integrity: "",
        crossorigin: "",
        }],
    stylesheet: [
        {
        rel: "stylesheet",
        href: "./css/all.min.css"
        },
        {
        rel: "stylesheet",
        href: "./css/bootstrap.min.css" 
        },
        {
        rel: "stylesheet",
        href: "./css/main.css"
        }]
  });
});

app.get("/team-member", (req, res) => {
  res.render("team-member", {
    titre1: "Antoine",
    titre2: "Gouteur professionnel",
    customCss: "/css/team-member.css",
    isActiveTeamMember: true,
    script: [
        {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
        crossorigin: "anonymous"
        },
        {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js",
        integrity: "sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut",
        crossorigin: "anonymous",
        },
        {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js",
        integrity: "sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k",
        crossorigin: "anonymous",
        },
        {
        src: "./js/menu.js",
        integrity: "",
        crossorigin: "",
        }],
    stylesheet: [
        {
        rel: "stylesheet",
        href: "./css/all.min.css"
        },
        {
        rel: "stylesheet",
        href: "./css/bootstrap.min.css" 
        },
        {
        rel: "stylesheet",
        href: "./css/main.css"
        }]
  });
});

app.get("/recipe", (req, res) => {
  res.render("recipe", {
    titre1: "Paëlla",
    titre2: "Le plat familial de votre été 2019",
    customCss: "/css/recipe.css",
    script: [
        {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
        crossorigin: "anonymous"
        },
        {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js",
        integrity: "sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut",
        crossorigin: "anonymous",
        },
        {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js",
        integrity: "sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k",
        crossorigin: "anonymous",
        },
        {
        src: "./js/menu.js",
        integrity: "",
        crossorigin: "",
        }],
    stylesheet: [
        {
        rel: "stylesheet",
        href: "./css/all.min.css"
        },
        {
        rel: "stylesheet",
        href: "./css/bootstrap.min.css" 
        },
        {
        rel: "stylesheet",
        href: "./css/main.css"
        }],
    ingredients: [
      "6 moules",
      "1/2 poulet",
      "125g de porc maigre",
      "60g de chorizo",
      "Amandes d'Espagne",
      "4 crevettes",
      "1/2 verre d'huile d'olive",
      "3 cuillères de vin",
      "1 oignon",
      "2 gousses d'ails",
      "2 tomates",
      "1 piment doux",
      "250g de riz",
      "Du persil",
      "Poivre de Cayenne",
      "2 verres de bouillon",
      "Poivre noir",
      "Sel",
      "125g de petit pois",
    ],
    content: [
      "Verser la moitié de l'huile dans une très large poêle, y faire dorer le poulet, le porc et la saucisse jusqu'à mi-cuisson, puis les retirer.",
      "Pendant ce temps, faire ouvrir les moules et les coques dans le vin blanc avec 2 cuillères à soupe d'oignons émincés et de persil haché.",
      "Les mettre de côté et réserver le jus filtré.",
      "Rajouter les crevettes ou langoustines dans la poêle avec la viande, les faire sauter puis retirer le tout et réserver.",
      "Remettre un peu d'huile et faire suer l'oignon d'Espagne et 2 gousses d'ail émincées dans la poêle.",
      "Rajouter les tomates pelées et coupées, les piments émincés et laisser cuire doucement pendant 5 min, en remuant constamment.",
      "Retirer tout le mélange de la poêle, et rajouter le reste d'huile.",
      "Faire chauffer l'huile et y verser le riz.",
      "Remuer à la spatule et laisser le riz devenir transparent et crépiter.",
      "A ce moment, verser le bouillon très chaud, l'eau des moules et le safran délayé dans un peu d'eau chaude.",
      "Remettre tous les ingrédients sauf les petits pois.",
      "Porter à ébullition doucement et laisser mijoter 15 min sans remuer.",
      "Rajouter les petits pois et le reste de la langouste, puis placer en surface quelques crevettes, moules, coques et morceaux de poulet.",
      "Couvrir, et prolongez la cuisson de 5 à 10 min, le riz doit avoir absorbé tout le jus tout en gardant une texture ferme",
    ],
    isActiveRecipe: true,
    imgSponsorise: ["img/recipes/sponsored/dessert1.jpg","img/recipes/sponsored/side1.jpg","img/recipes/sponsored/dessert2.jpg"]
  });
});

app.get("/post", (req, res) => {
  res.render("post", {
    titre1: "Chez Suzette, la nouvelle crêperie qui fait parler d'elle",
    titre2: "",
    customCss: "/css/post.css",
    isActivePost: true,
    script: [
        {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
        crossorigin: "anonymous"
        },
        {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js",
        integrity: "sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut",
        crossorigin: "anonymous",
        },
        {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js",
        integrity: "sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k",
        crossorigin: "anonymous",
        },
        {
        src: "./js/menu.js",
        integrity: "",
        crossorigin: "",
        }],
    stylesheet: [
        {
        rel: "stylesheet",
        href: "./css/all.min.css"
        },
        {
        rel: "stylesheet",
        href: "./css/bootstrap.min.css" 
        },
        {
        rel: "stylesheet",
        href: "./css/main.css"
        }]
  });
});

app.get("/page2", (req, res) => {
  res.render("page2", {
    titre1: "Cui'zine",
    titre2: "Le mag cuisine",
    customCss: "/css/post.css",
    isActivePage2: true,
    script: [
        {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
        crossorigin: "anonymous"
        },
        {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js",
        integrity: "sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut",
        crossorigin: "anonymous",
        },
        {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js",
        integrity: "sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k",
        crossorigin: "anonymous",
        },
        {
        src: "./js/menu.js",
        integrity: "",
        crossorigin: "",
        }],
    stylesheet: [
        {
        rel: "stylesheet",
        href: "./css/all.min.css"
        },
        {
        rel: "stylesheet",
        href: "./css/bootstrap.min.css" 
        },
        {
        rel: "stylesheet",
        href: "./css/main.css"
        }]
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    titre1: "Nous contacter",
    titre2: "",
    customCss: "/css/contact.css",
    isActiveContact: true,
    script: [
        {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
        crossorigin: "anonymous"
        },
        {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js",
        integrity: "sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut",
        crossorigin: "anonymous",
        },
        {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js",
        integrity: "sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k",
        crossorigin: "anonymous",
        },
        {
        src: "./js/menu.js",
        integrity: "",
        crossorigin: "",
        }],
    stylesheet: [
        {
        rel: "stylesheet",
        href: "./css/all.min.css"
        },
        {
        rel: "stylesheet",
        href: "./css/bootstrap.min.css" 
        },
        {
        rel: "stylesheet",
        href: "./css/main.css"
        }]
  });
});
