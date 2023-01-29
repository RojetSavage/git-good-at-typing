import { AiOutlineCalendar, AiOutlineShoppingCart } from 'react-icons/ai';
import { FiShoppingBag, FiEdit } from 'react-icons/fi';
import { BsKanban } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';

interface Difficulties {
  [key: string]: Levels
}

interface Levels {
  [key: string]:Level
}

interface Level {
  name: string,
  icon: JSX.Element,
  availableLetters: string,
  text: string,
}

const levelsInformation:Difficulties = {
  Beginner: {
    'Level 1': {
      name: 'Home Row',
      icon: <FiShoppingBag />,
      availableLetters: 'asdfjkl;',
      text: 'as flask sa flaks a as flask flask sa ska flask skald flask flaks skald flaks flask as sa s a skald'
    },
    'Level 2': {
      name: 'I + E',
      icon: <FiShoppingBag />,
      availableLetters: 'asdfjkl;ei',
      text: 'fjelds fjeld jakes fadlike flisked jake jaks faiked fisked flaked flakies jailed jak faikes faked fakies fiked flakes jades jedis kalifs faiks fakes fakie fikes filks flake flaks flask flisk jade jails jedi kaifs kalif kiefs skailed skelf ajis daleks'
    },
    'Level 3': {
      name: 'O + W',
      icon: <FiShoppingBag />,
      availableLetters: 'asdfjkl;ieow',
      text: 'jawlike adjikos adjiko jeofails feijoas fjelds jeofail joked jowled feijoa fjeld jakes jawed jokes jowed kojis sidewalk wiljas fadlike flisked jake jaks joke jowls koji wakfs wilja ejidos faiked fisked flaked'
    },
    'Level 4': {
      name: 'R, T, Y, U',
      icon: <FiShoppingBag />,
      availableLetters: 'asdfjkl;ieowrtyu',
      text: 'forjaskit forjeskit jakfruits jakfruit rejustify skyflower fieldworks folkways jawlike jerkily joukery dayflowers dwarflike fieldwork folkway jakeys jetways jokily justify koradjis twiforked adjikos dayflower dayworks'
    },
    'Level 5': {
      name: 'Q, P',
      icon: <FiShoppingBag />,
      availableLetters: 'asdfjkl;ieowrtyuqp',
      text: "pipsqueak paludose papulose pipefuls pokefuls quailed quoifed qapiks quails quakes quipos quoifs dukeship elasipod palped palpus POWDERFLASK QUADRIPOLES DESPAIRFUL FIELDWORKS QUADRIPOLE ALIFEROUS DEIPAROUS DISPARKLE DROPFLIES DWARFLIKE EPIDURALS FALSEWORK".toLowerCase()
    },
    'Level 6': {
      name: 'M, C',
      icon: <FiShoppingBag />,
      availableLetters: 'asdfjkl;ieowrtyuqpmc',
      text: "CAMELOIDS FOCALISED JOCKEYISM LYCOSIDAE MELODICAS MOSAICKED SAMOYEDIC AMYLOIDS CAMELIDS CAMELOID CAMISOLE COALISED DAMOCLES DAMOISEL DAYFLIES DECIMALS DECLAIMS DEMIWOLF DISCLAME DYSMELIC ECDYSIAL FASCIOLE FLAYSOME FOAMLIKE FOCALISE FOLKWAYS JEOFAILS LADYCOWS LADYFIES LIFEWAYS LOCKJAWS MAYFLIES MEDICALS MELODIAS MELODICA MELODICS MISYOKED".toLowerCase()
    },
    'Level 7': {
      name: 'G, H',
      icon: <FiShoppingBag />,
      availableLetters: 'asdfjkl;ieowrtyuqpmcgh',
      text: "GAWKISHLY GLYCEMIAS HICKYMALS JOCKEYISH JOCKEYISM LECHAYIMS LICHWAKES MAWKISHLY MOYGASHEL WEAKISHLY WEIGHLOCK CALIGOES CAMELISH CAMISOLE CAMOGIES CHIMLEYS CHOLEMIA GALOCHES GLECHOMA GLYCEMIA HECKIMAL HEMIOLAS HEMLOCKS HICKYMAL HOMESICK JACKLEGS JAWHOLES LECHAIMS LECHAYIM".toLowerCase()
    },
    'Level 8': {
      name: 'V, N',
      icon: <FiShoppingBag />,
      availableLetters: 'asdfjkl;ieowrtyuqpmcghvn',
      text: "SHOEMAKING KALSOMINE LEASOWING MILKWAGON SHAVELING SHOVELING SLOVENIJA WEAKLINGS WOMANLIKE GAINSOME GALENISM GASOLINE HALOGENS HALVINGS HAWKINGS HAWKNOSE HEALINGS HEAVINGS HEMIOLAS HOGMANES HOMELING HOVELING HOWLINGS JAVELINS JAWHOLES JAWLINES JINGKOES KAOLINES LAMINOSE LEASHING LEAVINGS LEMONISH LIGNOSAE LIMEWASH LINKAGES LONGWISE MAHJONGS MANHOLES".toLowerCase()
    },
    'Level 9': {
      name: 'B, X, Z',
      icon: <FiShoppingBag />,
      availableLetters: 'asdfjkl;ieowrtyuqpmcghvnbxz',
      text: "BLEAKISH BLOKEISH JAWBOXES JAWHOLES KILOBASE SHOWABLE WHAIZLES WISHABLE ABOLISH BAGLIKE BALKISH BASHLIK BEHOWLS BEWAILS BLOKISH BLOWIES BLOWZES BOLIXES BOLSHIE BOSKAGE BOWLEGS BOWLIKE BOXLIKE GALOSHE GASLIKE GAWKIES GAWKISH GAZEBOS GHAZELS GHAZIES".toLowerCase()
    },
    'Level 10': {
      name: 'Capitals',
      icon: <FiShoppingBag />,
      availableLetters: 'asdfjkl;ieowrtyuqpmcghvnbxzZXCVBNMASDFGHJKLQWERTYUIOP',
      text: ""
    },
    'Level 11': {
      name: 'Numbers',
      icon: <FiShoppingBag />,
      availableLetters: '123456789',
      text: ""
    },
    'Level 12': {
      name: 'Symbols',
      icon: <RiContactsLine />,
      availableLetters: 'asdfjkl;ieowrtyu!@#$%^&*()-={}:<>',
      text: ""
    },
  },
  Intermediate: {
    'Random Words': {
      name: 'Random Words',
      icon: <AiOutlineShoppingCart />,
      availableLetters: '',
      text: "API"
    },
    'Pseudo Words': {
      name: 'Pseudo Words',
      icon: <IoMdContacts />,
      availableLetters: '',
      text: "mistial loustran peloozoid daemanoile faz lacircificane adil opcong duj homeabrang sislaf immpreator babones scractor ept befolking strizzes poemess darripring fex iw diater xe xezzi grynn hygienevangelist aloidia subsetripting govelandsors summerotagity gullents guisities lamestpounded piz whipletener fluffster prograker steedulatic musitionently ulip usho iniquin tageneceler mantous compood cobsteme wefly rousur coatord siopp"
    },
    'Weird Sentences': {
      name: 'Weird Sentences',
      icon: <IoMdContacts />,
      availableLetters: '',
      text: "Eating eggs on Thursday for choir practice was recommended. The blue parrot drove by the hitchhiking mongoose. We should play with legos at camp. Cursive writing is the best way to build a race track. Henry couldn't decide if he was an auto mechanic or a priest. Sarah ran from the serial killer holding a jug of milk. She was only made the society president because she can whistle with her toes. He walked into the basement with the horror movie from the night before playing in his head. The fish listened intently to what the frogs had to say. He wasn't sure whether to be impressed or concerned that he folded underwear in neat little packages."
    },
  },
  Advanced: {
    'Latin': {
      name: 'Latin',
      icon: <AiOutlineCalendar />,
      availableLetters:'',
      text: "API"
    },
    'JavaScript': {
      name: 'JavaScript',
      icon: <BsKanban />,
      availableLetters:'',
      text: "const Navbar = () => { const { darkMode } = useThemeContext(); return ( <nav className='h-20 p-4 flex justify-around items-center border-b-2 dark:border-buttonDark sticky bg-navbarLight dark:bg-navbarDark'> <a href='http://localhost:3000' className='self-center'> <div className='flex items-center justify-left'> <NavLink to='/' end><img className='h-16 mr-3 dark:opacity-90' src={darkMode === true? '/logo-white.png' : '/logo-black.png'}  alt='logo'></img></NavLink> </div> </a> <div className='flex top-1.5 self-end absolute right-9'> <BadgesIcon /> <OptionsIcon /> </div> </nav>)}"
    },
    'Gibberish': {
      name: 'Gibberish',
      icon: <FiEdit />,
      availableLetters: 'asdfjkl;ieowrtyu',
      text: "he dog’s bark ran towards him, stopped, ran back. Dog of my enemy. I just simply stood pale, silent, bayed about. Terribilia meditans. A primrose doublet, fortune’s knave, smiled on my fear. For that are you pining, the bark of their applause? Pretenders: live their lives. The Bruce’s brother, Thomas Fitzgerald, silken knight, Perkin Warbeck, York’s false scion, in breeches of silk of whiterose ivory, wonder of a day, and Lambert Simnel, with a tail of nans and sutlers, a scullion crowned."
    },
    'Math': {
      name: 'Math',
      icon: <IoMdContacts />,
      availableLetters: '',
      text: "436a+329=311633 376(187z+668)=2712088 601y−501=251y+38349 P(Y-X=m | Y > X) &= \sum_{k} P(Y-X=m, X=k | Y > X) \
      &= \sum_{k}  P(Y-X=m | X=k, Y > X) P(X=k | Y > X) a =x0 < t1 < x1 < t2 < x2 < ... <xn-1 <= tn <= xn = b"
    },
  }
}




export default levelsInformation