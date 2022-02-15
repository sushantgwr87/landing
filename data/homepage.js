import heroAnimationDesktop from 'lotties/hero-desktop'
import heroAnimationMobile from 'lotties/hero-mobile'
import openSource from 'lotties/opensource'
import {
  Lightning,
  Plug,
  Puzzle,
  Typo,
  Chat,
  Earth,
  Filter,
  Key,
  SortBy,
  Wrench,
  Github,
  Slack,
  Roadmap,
} from 'components/icons'
import get from 'utils/get'

const getHomepageData = (t = () => {}) => ({
  hero: {
    title: t('hero.title'),
    description: t('hero.description'),
    mobileBackground: '/images/hero-mobile.svg',
    desktopBackground: '/images/hero-desktop.svg',
    cta1: {
      title: t('hero.cta1.title'),
      url: t('hero.cta1.url'),
      target: '_blank',
    },
    cta2: {
      title: t('hero.cta2.title'),
      url: t('hero.cta2.url'),
      target: '_blank',
    },
    lottie: {
      desktop: heroAnimationDesktop,
      mobile: heroAnimationMobile,
    },
  },
  demo: {
    demoImage: '/images/demo-search.svg',
    preTitle: t('demo.preTitle'),
    title: t('demo.title'),
    description: t('demo.description'),
    keypoints: [
      {
        icon: Lightning,
        title: t('demo.keypoints.0.title'),
        description: t('demo.keypoints.0.description'),
      },
      {
        icon: Plug,
        title: t('demo.keypoints.1.title'),
        description: t('demo.keypoints.1.description'),
      },
      {
        icon: Puzzle,
        title: t('demo.keypoints.2.title'),
        description: t('demo.keypoints.2.description'),
      },
      {
        icon: Typo,
        title: t('demo.keypoints.3.title'),
        description: t('demo.keypoints.3.description'),
      },
    ],
    cta: {
      title: t('demo.cta.title'),
      url: t('demo.cta.url'),
      target: '',
    },
  },
  openSource: {
    preTitle: t('openSource.preTitle'),
    title: t('openSource.title'),
    description: t('openSource.description'),
    cta: {
      title: t('openSource.cta.title'),
      url: t('openSource.cta.url'),
      target: '_blank',
    },
    lottie: openSource,
    keypoints: [
      {
        number: '10M',
        title: t('openSource.keypoints.0.title'),
      },
      {
        number: '300',
        title: t('openSource.keypoints.1.title'),
      },
      {
        number: '3000',
        title: t('openSource.keypoints.2.title'),
      },
      {
        number: '23K',
        title: t('openSource.keypoints.3.title'),
      },
    ],
  },
  steps: [
    {
      preTitle: t('steps.0.preTitle'),
      title: t('steps.0.title'),
      description: t('steps.0.description'),
      cta: {
        title: t('steps.0.cta.title'),
        url: t('steps.0.cta.url'),
        target: '_blank',
      },
      image: '/images/step1.svg',
      mobileImage: '/images/step1-mobile.svg',
    },
    {
      preTitle: t('steps.1.preTitle'),
      title: t('steps.1.title'),
      description: t('steps.1.description'),
      cards: [
        {
          icon: Filter,
          title: t('steps.1.cards.0.title'),
          description: t('steps.1.cards.0.description'),
        },
        {
          icon: Earth,
          title: t('steps.1.cards.1.title'),
          description: t('steps.1.cards.1.description'),
        },
        {
          icon: Chat,
          title: t('steps.1.cards.2.title'),
          description: t('steps.1.cards.2.description'),
        },
        {
          icon: SortBy,
          title: t('steps.1.cards.3.title'),
          description: t('steps.1.cards.3.description'),
        },
        {
          icon: Wrench,
          title: t('steps.1.cards.4.title'),
          description: t('steps.1.cards.4.description'),
        },
        {
          icon: Key,
          title: t('steps.1.cards.5.title'),
          description: t('steps.1.cards.5.description'),
        },
      ],
      cta: {
        title: t('steps.1.cta.title'),
        url: t('steps.1.cta.url'),
        target: '',
      },
      image: '/images/step2.svg',
    },
    {
      preTitle: t('steps.2.preTitle'),
      title: t('steps.2.title'),
      firstSection: {
        title: t('steps.2.firstSection.title'),
        description: t('steps.2.firstSection.description'),
        image: '/images/step3.svg',
        mobileImage: '/images/step3-mobile.svg',
        cta: {
          title: t('steps.2.firstSection.cta.title'),
          url: t('steps.2.firstSection.cta.url'),
          target: '',
        },
      },
      secondSection: {
        title: t('steps.2.secondSection.title'),
        description: t('steps.2.secondSection.description'),
        image: '/images/step3-2.svg',
        mobileImage: '/images/step3-2-mobile.svg',
        cta: {
          title: t('steps.2.secondSection.cta.title'),
          url: t('steps.2.secondSection.cta.url'),
          target: '',
        },
      },
    },
  ],
  cards: {
    preTitle: t('cards.preTitle'),
    title: t('cards.title'),
    description: t('cards.description'),
    cards: [
      {
        color: get('colors.dodgerBlue'),
        icon: Github,
        title: t('cards.cards.0.title'),
        description: t('cards.cards.0.description'),
        cta: {
          title: t('cards.cards.0.cta.title'),
          href: t('cards.cards.0.cta.url'),
          target: '_blank',
        },
      },
      {
        color: get('colors.lila'),
        icon: Slack,
        title: t('cards.cards.1.title'),
        description: t('cards.cards.1.description'),
        cta: {
          title: t('cards.cards.1.cta.title'),
          href: t('cards.cards.1.cta.url'),
          target: '_blank',
        },
      },
      {
        color: get('colors.hotPink'),
        icon: Roadmap,
        title: t('cards.cards.2.title'),
        description: t('cards.cards.2.description'),
        cta: {
          title: t('cards.cards.2.cta.title'),
          href: t('cards.cards.2.cta.url'),
          target: '_blank',
        },
      },
    ],
  },
  testimonials: {
    list: [
      {
        text: 'Wow <strong>@meilisearch</strong> is an incredible piece of software. Would love to have one of the devs do a talk at <strong>@RustDublin</strong>',
        author: {
          realName: 'Anton Whalley 🦀',
          pseudo: '@dhigit9',
          profilePicture:
            'https://pbs.twimg.com/profile_images/1487580746659373061/WBj_Flm__400x400.jpg',
        },
      },
      {
        text: 'We decided to use it over Elasticsearch for all these reasons, it’s not that easy to find such a great software being easy to use and developer-first. When HA (work in progress) will be released it will be enterprise-ready too ❤️',
        author: {
          realName: 'Danilo Polani',
          pseudo: '@theraloss',
          profilePicture:
            'https://pbs.twimg.com/profile_images/1452988537662496776/m-EJ567Y_400x400.jpg',
        },
      },
      {
        text: '100% agree! It’s mindblowing fast 🔥',
        author: {
          realName: 'Björn Antonissen',
          pseudo: '@Bjornftw',
          profilePicture:
            'https://pbs.twimg.com/profile_images/1447442527305490433/nivzG1I4_400x400.jpg',
        },
      },
      {
        text: 'Meilisearch is such a powerful tool, we use it on our project, and has been such a help!',
        author: {
          realName: 'Sajag Dhungana 👨🏻‍💻',
          pseudo: '@orphikkkk',
          profilePicture:
            'https://pbs.twimg.com/profile_images/1360809851371233283/LnH_1uRA_400x400.jpg',
        },
      },
      {
        text: '👉 66<br/>Trying Implementing full text search and still using regex & find, try <strong>@meilisearch</strong> and if seeking for some realtime search sync replica of db to meiliseach and search using filters It just works Awesome!',
        author: {
          realName: 'Mitesh Metha',
          pseudo: '@miteshmetha',
          profilePicture:
            'https://pbs.twimg.com/profile_images/1466428901283049472/CHiTtFOM_400x400.jpg',
        },
      },
      {
        text: 'Quickly made a full app search for Financial Freedom. <strong>@meilisearch</strong> is beyond powerful... (yes, that’s test data 🤓)',
        author: {
          realName: 'Dan Pastori',
          pseudo: '@danpastori',
          profilePicture:
            'https://pbs.twimg.com/profile_images/940746430464929792/o5MP2lgT_400x400.jpg',
        },
      },
      {
        text: 'Super impressed with <strong>@meilisearch</strong>. Spun up a VPS, installed it, imported a piece of my corpus and my goodness, the search is FAST 🤯',
        author: {
          realName: 'jelle',
          pseudo: '@jellevliet',
          profilePicture:
            'https://pbs.twimg.com/profile_images/1470349013140529152/rgxS7KW-_400x400.jpg',
        },
      },
    ],
    description:
      'Already 23k users have been convinced by MeiliSearch. How about giving it a try?',
    cta: {
      title: '→ Get started',
      href: '',
      target: '',
    },
  },
})

export default getHomepageData
