var GAME_LEVELS = [
["!!!!!!!!!!!!!!!!!!!xxxxx",
 "!!xxxxxxxxxxxxxx!!!xxxxx",
 "!!x$         xxx!!!xxxxx",
 "!!x          xxx!!!xxxxx",
 "!!x          xxx!!!xxxxx",
 "!!x          xxx!!!xxxxx",
 "!!x          xxx!!!xxxxx",
 "!!x          !!!!!!!!!xx",
 "!!x          x!!!!!!!xxx",
 "!!x          xx!!!!!xxxx",
 "!!x          xxx!!!xxxxx",
 "!!x          xxxx!xxxxxx",
 "!!xxxxxxxxxxxxxxxxxxxxxx",
 "!!xxxxxxxxxxxxxxxxxxxxxx",
 "!!x                    x",
 "!!x@             o    xx",
 "xxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                                                                              x ",
   "                                                                              x ",
   "                                                                              x ",
   "                                                                              x ",
   "                                                                              x ",
   "                                                                   o          x ",
   "                                                    o             xxx         x ",
   "                                             o     xx      xx    xx!xx        x ",
   "                                             xx                  x!!!x    o   x ",
   "                                    oo                           xx!xxxx      x ",
   "                                   xxxxxxxxxxxxxxxxxxxxxxxx       xvxxxxxxxxxxxx",
   "                                                                            xxxx",
   "  xx                                          P       P     oo               xxx",
   "  x                                                        xxxx              xxx",
   "  x           o                                                              xxx",
   "  x          xxxx                         p       p                          xxx",
   "  x  @   o   x  x            o    o       o   o   o   o          xxxxx ooo   xxx",
   "  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   xxxxxxxxxxx",
   "                              x   x                                             ",
   "                              x!!!x                                             ",
   "                              x!!!x                                             ",
   "                              xxxxx                                             ",
   "                                                                                ",
   "                                                                                "],
  ["xxxxxxxxxxxxxxxxxxxxx",
   " xx               xx ",
   " xx               xx ",
   " xx  o            xx ",
   " xxxxxx           xx ",
   " xx         o     xx ",
   "exx        xxx    xxe",
   " xx @o            xx ",
   "Exxxxx        o   xxE",
   "xxx           xxxxxxx",
   " xx     p         xx ",
   " xx               xx ",
   " xxxxxxxxxxx      xx ",
   " xx   w    xx     xx ",
   " xxxxxxxxxxxx   o xx ",
   "Exx             xxxxE",
   " xx               xx ",
   "exx   xx  o     z xxe",
   "xxx   xxxxxxxxxxxxxxx",
   " xx      x!!!!!!xxxx ",
   "exxx     xxvxxvxxxxxe",
   " xx               xx ",
   "Exx               xxE",
   " xx   o           xx ",
   " xxxxxxx          xx ",
   " xx w  x   oo     xx ",
   " xxxxxxxxxxxxxxx  xx ",
   " xx   E   x       xx ",
   " xxE     Ex  o    xx ",
   "xxxxxxxxxxx  xxxxxxxx",
   " xx               xx ",
   " xx      W     o  xx ",
   "Exx    oo     xx  xxE",
   " xxxxxxxxxxxxxxx  xx ",
   "exx  w  x w    x  xxe",
   "xxxxxxxxxxxxxxxx  xxx",
   " xxo              xx ",
   "xxxxxxxxxxxxxxxxxxxxx"],
  ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "x  w    w    w x   w     w      w x   w       wxxx!!!!!!!!!!!!xx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!xx",
   "x                   xEx       P  xxx!!!!!!xxxxxxxx!!!!!!!!!!!!xx",
   "x @o     o        o x x          xxx!v!!v!xxxxxxxxxxxxxxxxxxxxxx",
   "xxxxx  xxxx  xxx  xxxex          xxx        xxxx        o     xx",
   "x   x  x  x  x x    xxx   o                 x           o     xx",
   "x  W            W         xx                x     xxxxxxxxxxxxxx",
   "x    o     o             xxx                  o xxxe   wxw   exx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxx     o            xxxxxw E exe E wxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!xx",
   "x  w    w    w x   w     w      w x   w       wxxx!!!!!!!!!!!!xx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["xxx!!!!!!!!!!!!!!!x  v     v    xxxxxxxx",
   "xxx!!!!!!!!!!!!!!!x             xxxxxxxx",
   "xxx!!!!!!!!!!!!!!!x             x!!!xqxx",
   "xxxxxxxxxxxxxxxxxxx             xxxxxxxx",
   "xex                     o       x!!!xqxx",
   "xex o                  xxxxx    xxxxxxxx",
   "xexxxx            o             x!!!xqxx",
   "xex             xxxxx       o   xxxxxxxx",
   "xex       o     xxxxx       xxxxx!!!xqxx",
   "xex  @   xxx    xxxxx           xxxxxxxx",
   "xexxxxx         xxxxxxx    o    x!!!xqxx",
   "xxxxxxx!!!!!!!!!!!!xx     xxxxxxxxxxxxxx",
   "xxxxxxx!!!!!!!!!!!!xx     xxxxxxxxxxxqxx",
   "xxxxxxx!!!!!!!!!!!!xx             xq xxx",
   "xxxxxxxxxxxxxxxxxxxxx W           x  qxx",
   "xqxq q q q q q q q xx     o   x   xq xxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x  qxx",
   "xq q q q q q q q q x!!!x          xq xxx",
   "xxxxxxxxxxxxxxxxxxxx!!!x       o  x  qxx",
   "xx w  w  w  w  w  wx!!!x       xxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxx       xxxxxxxxx",
   "xxxxxxxxxxx                xxxxxxxxxxxxx",
   "xqx ex        p            xxxxxxxxxxxxx",
   "xxxe x          P          xxxxxxxxxxxxx",
   "xqx ex            p        xxxxxxxxxxxxx",
   "xxxe x              P   xxxxxxxxxxxxxxxx",
   "xqx ex        o o o o   xxxxxxxxxxxxxxxx",
   "xxxe x     xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxx     x!!!!!!!!!!!!!!!!!!!!!!!!!xxx",
   "xxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxx               xxxxxxxxxxxxxxxxxxx",
   "xxxxxx    o      o   xxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!qxx   xqx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!xxx   xxx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!qxx   xqx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!xxx   xxx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!qxx   xqx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!xxx   xxx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!xxx   xxx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!xxx   xxx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!qxx   xqx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxx   xxx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!qxx   xqx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!xxx   xxx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!qxx   xqx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!xxx   xxx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!xxx   xxx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!xxx   xxx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!qxx   xqx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!xxx   xxx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!qxx   xqx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!xxx   xxx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!qxx   xqx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx!!xxx   xxx!!xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx  wxx   xxw  xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx w xx   xx w xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxw  xx   xx  wxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx w xx   xx w xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx  wxx   xxw  xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx w xx   xx w xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxw  xx   xx  wxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx w xx   xx w xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx  wxx   xxw  xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx w xx   xx w xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxw  xx   xx  wxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx w xx   xx w xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx  wxx   xxw  xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxx w xx   xx w xxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxw  xx   xx  wxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxx   o   xxxxxxxxxxxxxxxxx",
   "xxxxxxx!!!xxxxx   xxx   xxxxx!!!xxxxxxxx",
   "xxxxxxx!v!xxxx    x!x    xxxx!v!xxxxxxxx",
   "xxxxxxx   xxx     x!x     xxx   xxxxxxxx",
   "xxxxxxx   xx Q    x!x Q    xx   xxxxxxxx",
   "xxxxxxx   xx      x!x      xx   xxxxxxxx",
   "xxxxxxx   xx      x!x      xx   xxxxxxxx",
   "xxxxxxx   xx      x!x      xx   xxxxxxxx",
   "xxxxxxx   xx      x!x      xx   xxxxxxxx",
   "xxxxxxx   xx      x!x      xx   xxxxxxxx",
   "xxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxx",
   "xxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
["!!!!!!!!!!!!!!!!",
 "!!xxxxxxxxxxxxx!",
 "!!xK         x!!",
 "!!x          x!!",
 "!!x          x!!",
 "!!x          x!!",
 "!!x          x!!",
 "!!x          x!!",
 "!!x          x!!",
 "!!x          x!!",
 "!!x          x!!",
 "!!x          x!!",
 "!!xxxxxxxxxxxx!!",
 "!!xxxxxxxxxxxx!!",
 "!!x       x  x!!",
 "!!x@      x ox!!",
 "xxxxxxxxxxxxxxxx"],
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
