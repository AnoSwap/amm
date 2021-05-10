import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://anoswap.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://anoswap.finance/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://anoswap.finance/pools'
  },
  {
    label: 'Leveraged farming',
    icon: 'PoolIcon',
    href: 'http://anoswap.finance/comingsoon',
  },
  {
    label: 'Your project',
    icon: 'PoolIcon',
    href: 'http://anoswap.finance/jungles',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'http://anoswap.finance/lottery'
  },
  {
    label: 'Referral',
    icon: 'GroupsIcon',
    href: 'http://anoswap.finance/referral',
  },
  {
    label: 'Price Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'DexGuru',
        href: 'https://dex.guru/',
      },
      {
        label: 'PooCoin',
        href: 'https://poocoin.app/',
      },
      {
        label: 'BoggedFinance',
        href: 'https://charts.bogged.finance/',
      },
      {
        label: 'DexTools',
        href: 'https://www.dextools.io/',
      },
    ],
  },
  {
    label: 'Listings',
    icon: 'NftIcon',
    items: [
      {
        label: 'BscScan',
        href: 'https://bscscan.com/',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/',
      },
      {
        label: 'LiveCoinWatch',
        href: 'https://www.livecoinwatch.com/',
      },
      {
        label: 'Vfat',
        href: 'https://vfat.tools/',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/AnoSwap/',
      },
      {
        label: 'Docs',
        href: 'https://app.gitbook.com/@anoswap/s/anonymousswap-finance/whitepaper/',
      },
      {
        label: 'Blog',
        href: 'https://anoswap.medium.com/',
      },
      {
        label: 'Voting',
        href: 'http://anoswap.finance/comingsoon',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
