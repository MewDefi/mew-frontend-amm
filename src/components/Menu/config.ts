import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.mewdefi.com/'
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
    href: 'https://www.mewdefi.com/farms'
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: 'https://www.mewdefi.com/nests'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.mewdefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x9b5716Bc0c5853EA54BbFC9d7e2f6d6Ffc123FCF',
      },
      {
        label: 'BscScan',
        href: 'https://bscscan.com/address/0x9b5716Bc0c5853EA54BbFC9d7e2f6d6Ffc123FCF',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/goose-finance',
      // },
      // // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/goose-finance/',
      // },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/MewDefi/',
      },
      {
        label: 'Wiki',
        href: 'https://github.com/MewDefi/mew-contracts/wiki',
      },
      // {
      //   label: 'Blog',
      //   href: 'https://goosefinance.medium.com/',
      // },
    ],
  },
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
