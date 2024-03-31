var winWidth = $(window).width();
var ratio = winWidth / 1920;
var fontSize = {
  small: 12,
  medium: 14
};
var played = [0, 0, 0];
var vara = [];
var bodyFontSize = Math.max(16 * ratio, 10);
var posX = Math.max(80 * ratio, 30);
$("body").css("font-size", bodyFontSize + "px");
fontSize.small = Math.max(fontSize.small * ratio, 7);
fontSize.medium = Math.max(fontSize.medium * ratio, 10);
vara[0] = new Vara(
  "#vara-container",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Rundown",
      textAlign: "right",
      y: 20,
      x: -40,
      delay: 500,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "01:00 : engel mencoba turu",
      y: 25,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "02:00 : masih mencoba ",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "03:00 : sadar kalau gabisa tidur",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "04:00 : coba main game",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "05:00 : mulai mengantuk",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "06:00 : ketiduran",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "07:00 : kebangun alarm",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "08:00 : lanjut tidur",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: " ",
      id: "end",
      color: "#3f51b5",
      delay: 1000,
      x: posX,
      duration: 4500
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[1] = new Vara(
  "#vara-container2",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Page 2",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -50,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "09:00 : memasuki mimpi",
      y: 25,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "10:00 : sedang bermimpi",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "11:00 : mimpinya enak",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "12:00 : masi tidur",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "13:00 : uda pewe",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "14:00 : tiba' kebelet",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "15:00 : panik uda sore",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "16:00 : siap' untuk jalan",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[2] = new Vara(
  "#vara-container3",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Page 3",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -50,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "17:00 : ngeeengggg",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "18:00 : kejebak macet",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "19:00 : alhamdulillah nyampe",
      y: 10,
      color: "#FF0000",
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "20:00 : uda pasti lagi eat",
      y: 10,
      color: "#FF0000",
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "21:00 : menikmati suasana",
      y: 10,
      color: "#FF0000",
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "22:00 : bingung mau ngapain",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "23:00 : balik rumah",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "00:00 : tidur(opsional)",
      y: 10,
      x: 45,
      duration: 4000,
      fontSize: fontSize.small
    },
    {
      text: "See You at IKM             ~Engel ",
      y: 7,
      color: "#7F00FF",
      x: 130,
      duration: 9000,
      fontSize: fontSize.small
    }
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false
  }
);
vara[2].ready(function() {
  $(".front:not(.last)").click(function() {
    var ix = $(this)
      .parent(".paper")
      .index();
    $(".book").addClass("open");
    $(this)
      .parent(".paper")
      .addClass("open");
    if (!played[ix]) {
      vara[ix].playAll();
      vara[ix].animationEnd(function(i, o) {
        played[ix] = 1;
        if (i == "link") {
          var group = o.container;
          var rect = vara[2].createNode("rect", {
            x: 0,
            y: 0,
            width: o.container.getBoundingClientRect().width,
            height: o.container.getBoundingClientRect().height,
            fill: "transparent"
          });
          group.appendChild(rect);
          $(rect).css("cursor", "pointer");
          $(rect).click(function() {
            console.log(true);
            document.querySelector("#link").click();
          });
        }
      });
    }
  });
  $(".back").click(function() {
    if (
      $(this)
        .parent(".paper")
        .index() == 0
    )
      $(".book").removeClass("open");
    $(this)
      .parent(".paper")
      .removeClass("open");
  });
});