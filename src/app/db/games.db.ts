import { IGame } from "../interfaces/igame.interface";

export const games: IGame[] = [ 
    {
        title: "Metal Gear Solid 2",
        url: "https://i.ebayimg.com/images/g/inYAAOSw4P5kRzvI/s-l1200.jpg",
        date: new Date(2013, 6, 14),
        review: "Metal Gear Solid 2: Sons of Liberty is an action-adventure stealth game developed and published by Konami for the PlayStation 2 in 2001. It is the fourth Metal Gear game written and directed by Hideo Kojima, the seventh overall game in the series and is a direct sequel to the original Metal Gear Solid.",
        stars: 4.5
    },
    {
        title: "Elden Ring",
        url: "https://m.media-amazon.com/images/I/6110RSDn3PL._AC_UF894,1000_QL80_.jpg",
        date: new Date(2022, 1, 25),
        review: "Elden Ring is an upcoming action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. The game is a collaborative effort between game director Hidetaka Miyazaki and fantasy novelist George R. R. Martin.",
        stars: 5
    }
]