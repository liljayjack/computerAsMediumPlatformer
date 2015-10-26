var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                    b                                              o            ",
   "                                                                  xxx           ",
   "                                                   xx      xx    xx!xx          ",
   "                                    o o      xx                  x!!!x          ",
   "                                                                 xx!xx          ",
   "                                   xxxxx                          xvx           ",
   "                                   u   u               xxx                  xx  ",
   "  xx                                      o o          uuu                   x  ",
   "  x                     o                                                    x  ",
   "  x           s                          xxxxx                     o         x  ",
   "  x         xxxxx       o                u   u                             w x  ",
   "  x  @      x   x                                                xxxxx       x  ",
   "  xxxxxxxxxxx   xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
   "                              x   x                  x     x                    ",
   "                              x!!!x                  x!!!!!x                    ",
   "                              x!!!x                  x!!!!!x                    ",
   "                              xxxxx                  xxxxxxx                    ",
   "                                                                                ",
   "                                                                                "],
  ["                                                                                ",
   "  xxxxxxxxxxxxxxxxxxxxxxxx                   xxxxx                              ",
   "  x   x                  x                   x!!!x                xxxxxxxxxxxx  ",
   "  x @ x       oooo       x                   xxvxx                  v        x  ",
   "  x   x               =  x                                                   x  ",
   "  x                      x                                          o     w  x  ",
   "  x      =               x          o                                        x  ",
   "  xxxxxxxxxxxxxxxxxxx    x        xxxxxxxxx                xxx      o  xxxxxxx  ",
   "      x                  xo        x      x                            x        ",
   "      x       ooo        x         x      x         o                  x        ",
   "      x                  xxxx     ox      x       xxxxx          =xxxxxx        ",
   "      x       =          x         x      x           x           x             ",
   "      x     xxxxxxxxxxxxxx       xxx      x           xxxx       ox             ",
   "      x     x                   o  x      x                       x             ",
   "      x  o  x                      x      x                     xxx             ",
   "      x     x =   =   =       xxxxxx      x  oo                   x             ",
   "      x  o                    x           x                       x             ",
   "      x                o      x           xxxxxxxxxx           xxxx             ",
   "      x             xxxxxxxxxxx                    x    =  xxxxx                ",
   "      xxx           x                              x oo xxxx                    ",
   "      x       ss    x                              x oo x                       ",
   "      x!!!!xxxxxxxxxx                              xxxxxx                       ",
   "      x!!!!x                                                                    ",
   "      xxxxxx                                                                    ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                "],
  ["                                                                                         ",
   "      x                                                        s                x        ",
   "      x                                       xxxxxxxxx       xxx               x        ",
   "      x                                       x       x       x                 x        ",
   "  xxxxx                                       x!!!!!!!x       x                 x        ",
   "  x                                           x!!!!!!!x       x                 xxxxx    ",
   "  xo                s                         x!!!!!!!x       x                     x    ",
   "  x               xxxxx                       xxxxxvxxx       x                     x    ",
   "  x                        o   o                      x       x                     x    ",
   "  x                          s                        x       x                     x    ",
   "  xxx                     xxxxxxx                     x!!!!!!!x                     x    ",
   "  x                                  x                x!!!!!!!x w                   x    ",
   "  x             o                                     x!!!!!!!x                     x    ",
   "  x oo                                               xxxxxxvxxxxxx                  x    ",
   "  xxxxxxxx     xxx                                    x                             x    ",
   "         x                                 x          x                             x    ",
   "         x                                            x              x   o   o  o  ox    ",
   "         x                                            x         o        xx!!x!!x!!xx    ",
   "xxxxxxxxxx                                            x                   xxxxxxxxxx     ",
   "x                                            xxxx     x       xxx              x         ",
   "x                                            x  x     x                        x         ",
   "x                           oo          sss  x  x  o  x                o       x         ",
   "x                     oo        xxxxxxxxxxxxxx  x     x               xxx      x         ",
   "x                         xxxxxxx               x     x        o               x         ",
   "x  @            oo  xxxxxxx                     x     x                        x         ",
   "x                   x                           x     x       xxx              x         ",
   "xxxxxx       xxxxxxxx                           x  o  x                        x         ",
   "     x       x                                  x     x oo                     x         ",
   "     x       x                                  x     x                        x         ",
   "     x       x                                  x     xxxxxxxx                 x         ",
   "     x       x                                  x            xxxxx             x         ",
   "     x       x                                  x  o         x                 x         ",
   "     x       x                                  x            x            sss ox         ",
   "     x       x                                  x            x          xxxxxxxx         ",
   "     x       x                                  x            x           x               ",
   "     xsssssssx                                  x           ox           x               ",
   "     xxxxxxxxx                                  x            x=          x               ",
   "                                                x       xxxxxxxxxxx      x               ",
   "                                                xo                       x               ",
   "                                                x                      xxx               ",
   "                                                xxx                      x               ",
   "                                                x                        x               ",
   "                                                x             xxxxxxxxxxxx               ",
   "                                                x!!!!!!!xxxxxxx                          ",
   "                                                x!!!!!!!x                                ",
   "                                                x!!!!!!!x                                ",
   "                                                xxxxxxxxx                                ",
   "                                                                                         "],
  ["                                      x!!x                        xxxxxxx                                    x!x  ",
   "                                      x!!x                     xxxx     xxxx                                 x!x  ",
   "                                      x!!xxxxxxxxxx           xx           xx                                x!x  ",
   "                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ",
   "                                       xxxxxxxxxx!!x         x                                    o   o   w  x!x  ",
   "                                                xx!x         x     o   o                                    xx!x  ",
   "                                                 x!x         x                                xxxxxxxxxxxxxxx!!x  ",
   "                                                 xvx         x     x   x                        !!!!!!!!!!!!!!xx  ",
   "                                                             xx  |   |   |  xx            xxxxxxxxxxxxxxxxxxxxx   ",
   "                                                              xx!!!!!!!!!!!xx            v                        ",
   "                                                               xxxx!!!!!xxxx                                      ",
   "                                               x     x            xxxxxxx        xxx         xxx                  ",
   "                                               x     x                           x x         x x                  ",
   "                                               x     x                             x         x                    ",
   "                                               x     x                             xx        x                    ",
   "                                               xx    x                          o  x         x                    ",
   "                 sss                           xu    x      o  o     x   x     ooo x         x                    ",
   "               xxxxxxx       xxxx   xxxx       x     x               x   x      o  x         x                    ",
   "              xx     xx      u  x   x  u       x     x     xxxxxx    x   x   xxxxxxxxx       x                    ",
   "             xx       xx        x o x          x    xx               x   x   x               x                    ",
   "     @       x         x        x   x          x    ux               x   x   x               x                    ",
   "    xxx      x         x       sx   x          x     x               x   xxxxx   xxxxxx      x                    ",
   "    x x      x         x      sxx o xx         x     x               x     o     x x         x                    ",
   "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =     x x         x                    ",
   "!!!!x x!!!!!!x         x!!!!!xxu      xxxxxxxxxxu    x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ",
   "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx !                    xx     xx                     ",
   "!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        o                                                                     ",
   "                                                                                                              ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                       xxx                                                                    ",
   "                                       x x                 !!!        !!!  xxx                                ",
   "                                       x x                 !x!        !x!                                     ",
   "                                     xxx xxx                x    xx    x        o                             ",
   "                                      x   x                 x   oooo   x       xxx                            ",
   "                                      x   x                 x          x      x!!!x                           ",
   "                                      x   x                 xxxxxxxxxxxx       xxx                            ",
   "                                     xx   xx      x   x      x                                                ",
   "                                      x   xxxxxxxxx   xxxxxxxx              x x                               ",
   "                                      x   x           x                    x!!!x                              ",
   "                                      x   x           x                     xxx                               ",
   "                                     xx   xx          x            ooo                                        ",
   "                                      x   x= = = =    x            xxx                                        ",
   "                                      x   x           x           x!!!x                                       ",
   "                                      x   x    = = = =x     o      xxx       xxx                              ",
   "                                     xx   xx          x     w               x!!!x        o                    ",
   "                              o   o   x   x           x     x                xxv        xxx                   ",
   "                                      x   x           x              x                 x!!!x                  ",
   "                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
   "                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
   "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
   "                             xx           xx                                         xxx                      ",
   "  xxx                         x     x     x                                         x!!!x                xxx  ",
   "  x x                         x    xxx    x                                          xxx                 x x  ",
   "  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
   "  x                           x           x                              x   x                             x  ",
   "  x                           xx          x                              x x x                             x  ",
   "  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ",
   "  x                xxx             o o    x                              x         xxx                     x  ",
   "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
   "  x               oxxxo       x    xxx    x                             x x        xxx          xxx        x  ",
   "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx   ooo  x  ",
   "  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x     o   x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                                                                  xxx x       ",
   "                                                               !!!         !!!         !!!            x       ",
   "                                                               |x|         |x|         |x|        xxxxx       ",
   "                                                                                                  x           ",
   "                                                                                                  x xxx       ",
   "                          o                                                                       x x x       ",
   "                                                                                                  xxx x       ",
   "                   xxx                                          o     o     o     o     o      w      x       ",
   "       s  o  s                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
   "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
   "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
   "       x     x                                                  x x!!!x x!!!x x!!!x x!!!x x!!!x x!!!!!x       ",
   "       u  o  u            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
   "                                                                                                              ",
   "          o              xxx                              xx                                                  ",
   "                          u                                                                                   ",
   "                                                                                                              ",
   "                                                      xx                                                      ",
   "                   xxx         xxx                    uu                                                      ",
   "                    u           u                                                                             ",
   "                          o                                                     x      x                      ",
   "                                                          xx     xx             u      u                      ",
   "             xxx         xxx         xxx                                 x                  x                 ",
   "                          u                                                                                   ",
   "                                                                 ||                                           ",
   "  xxxxxxxxxxx                                                                                                 ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
   "  x         x   xu     ux   xu     ux   x                 ||                  x     x                         ",
   "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x=                  =                =x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
