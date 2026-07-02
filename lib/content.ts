import {
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Github,
  GraduationCap,
  Handshake,
  Instagram,
  Mic2,
  NotebookPen,
  Twitter,
  Youtube
} from "lucide-react";

export const site = {
  name: "Masashige Yamamoto",
  nickname: "Shige",
  tagline: "一歩踏みだす 小さな勇気",
  roles: ["Educator", "元JICA Volunteer", "Engineer", "Speaker"],
  description:
    "教育、国際協力、テクノロジーを通じて、誰かの一歩を支える活動を続けています。",
  email: "da12ran2berl8.remuni38@gmail.com",
  googleFormEmbedUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSduuW2ZZIxkXMlYZ-YL_xT-Ezdi5dtLySf_8UsZYE7Da4T6Kw/viewform?embedded=true"
};

export type Locale = "ja" | "en";

export const localizedContent = {
  ja: {
    site: {
      name: "Masashige Yamamoto",
      tagline: "一歩踏みだす 小さな勇気",
      roles: ["Educator", "元JICA Volunteer", "Engineer", "Speaker"],
      description:
        "教育、国際協力、テクノロジーを通じて、誰かの一歩を支える活動を続けています。"
    },
    navItems: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Career", href: "#career" },
      { label: "Activities", href: "#activities" },
      { label: "Speaking", href: "#speaking" },
      { label: "Latest", href: "#latest" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" }
    ],
    hero: {
      eyebrow: "Education / Africa / Technology",
      lead:
        "教室からケニアへ。教育とテクノロジーで、挑戦の入口をつくる。",
      badges: ["Former Math Teacher", "JICA Kenya", "Web Engineer"],
      primaryCta: "講演・相談をする",
      secondaryCta: "活動を見る",
      imageAlt: "ケニアの教室で学ぶ生徒たち",
      kipepeoLabel: "Kipepeo",
      kipepeoSubLabel: "Swahili for butterfly",
      kipepeoLocation: "Kenya / Japan",
      kipepeoMessage:
        "小さな羽ばたきが、未来のどこかで誰かを支える。"
    },
    mission: {
      eyebrow: "Mission / Kipepeo",
      title: "小さな一歩が、誰かの未来を変えるかもしれない。",
      description:
        "Kipepeoは、スワヒリ語で「蝶」。一羽の蝶の羽ばたきのように、ひとりの小さな勇気が、まだ見ぬ変化につながると信じています。",
      subtitle: "ブラジルの1匹の蝶の羽ばたきは、テキサスで竜巻を引き起こすか？",
      lines: [
        "世界は、理不尽なことで溢れている。",
        "こんな世界を、たった一人の力で変えることはできない。",
        "でも、「だから無理」なんて言いたくない。",
        "世界は、あなたの小さな勇気を待っています。"
      ]
    },
    about: {
      eyebrow: "About",
      title: "手の届く範囲の人たちに、Well-beingを届ける。",
      location: "福岡県北九州市出身",
      motto:
        "エンターテイナーであり続け、手の届く範囲の人たちにWell-beingを届ける。",
      summary:
        "ニュージーランドでの留学経験、JICA海外協力隊としてケニアで過ごした経験、そして高校教員としてのキャリアを活かし、教育・国際協力・テクノロジーを横断して活動しています。",
      belief:
        "一羽の蝶（Kipepeo）のように、一人の小さな一歩がやがて大きな変化を生むと信じ、その想いを伝え、つなぎ、広げるために日々活動を続けています。",
      highlights: [
        "元高校数学教員",
        "JICA海外協力隊",
        "ケニア2年間",
        "ニュージーランド留学",
        "Webエンジニア",
        "講演活動"
      ],
      imageAlt: "国際協力の現場で人と関わる様子"
    },
    career: {
      eyebrow: "Career",
      title: "教室、海外、そして次の挑戦へ。",
      description:
        "Google SitesのCV情報を、公式サイト向けに読みやすいタイムラインとして整理しています。",
      items: [
        {
          period: "2025年2月〜現在",
          title: "高校教員へ復職 / NPO・英語学習コーチング",
          description:
            "北海道の高等学校に復職。同時にNPO法人にてウガンダ事業に携わり、英語学習コーチングも行う。"
        },
        {
          period: "2023年1月〜2025年1月",
          title: "JICA海外協力隊としてケニアへ",
          description:
            "Nziu Secondary Schoolで数学教員として活動。活動の傍ら、ケニアで野球の普及にも取り組み、KESTESの総務部長兼奨学生担当として活動。"
        },
        {
          period: "2017年4月〜2022年9月",
          title: "福岡と北海道で高校教員として勤務",
          description:
            "高校数学教員として、教室で一人ひとりの可能性と向き合う。"
        },
        {
          period: "2016年4月〜12月",
          title: "ニュージーランドでスポーツコーチングを学ぶ",
          description:
            "カンタベリー大学にてスポーツコーチングを学び、海外で学ぶ経験を積む。"
        }
      ]
    },
    qualifications: {
      eyebrow: "Qualifications",
      title: "信頼を支える、小さな土台。",
      description:
        "語学、海外経験、コーチングの学びを、教育と国際協力の活動につなげています。",
      items: [
        {
          title: "英検準1級",
          description: "英語で学び、伝え、つなぐための基礎力。"
        },
        {
          title: "IELTS OA 7.0",
          description:
            "Listening 8.0 / Reading 7.0 / Writing 6.5 / Speaking 6.5"
        },
        {
          title: "Sports Coaching",
          description: "ニュージーランドで学んだ、学びと成長を支える視点。"
        }
      ]
    },
    activities: {
      eyebrow: "Activities",
      title: "人生の活動を、ひとつの入口へ。",
      description:
        "発信、講演、教育、国際協力、開発。それぞれの活動は、誰かの挑戦を支えるためにつながっています。",
      items: [
        {
          title: "YouTube",
          description:
            "教育、海外協力、エンジニアとしての学びを、次の一歩につながる言葉で発信。"
        },
        {
          title: "note",
          description:
            "現場で見たこと、考えたこと、失敗から得た学びを文章として蓄積。"
        },
        {
          title: "講演活動",
          description:
            "学校、企業、コミュニティに向けて、挑戦と国際協力のリアルを届ける。"
        },
        {
          title: "教育",
          description:
            "数学教員としての経験を軸に、学ぶ人が自分の可能性に気づく場をつくる。"
        },
        {
          title: "国際協力",
          description:
            "ケニアでの2年間を通じて、現地の課題と向き合い、協働の形を探る。"
        },
        {
          title: "エンジニア",
          description:
            "Web技術を使い、思いを形にするプロダクトと体験を設計・実装する。"
        }
      ]
    },
    speaking: {
      eyebrow: "Speaking",
      title: "想いのタスキを、次世代へ。",
      description:
        "学校、JICA関連イベント、親子向け企画、オンライン講演などで、国際協力・教育・キャリア・挑戦をテーマに講演やワークショップを行っています。",
      countLabel: "15回",
      since: "2023年から継続実施",
      designTitle: "対象に合わせて設計",
      fee: "1時間 5,000円〜10,000円（応相談）",
      audiences: ["中学生・高校生", "大学生", "保護者", "教員", "社会人"],
      topics: ["国際協力", "キャリア", "教育", "挑戦", "ケニアでの生活", "ワークショップ"],
      recordsTitle: "講演実績",
      recordsDescription:
        "代表的な実績のみ掲載しています。詳細は必要に応じて追加できます。",
      cta: "申し込みフォームへ",
      records: [
        {
          title: "北海道大学 協力隊セミナー",
          place: "北海道大学",
          date: "2026年5月",
          description:
            "JICA海外協力隊としてケニアで過ごした2年間を、感情の浮き沈みグラフをもとに振り返った講演。気持ちが下がった時期の出来事を中心に、想像することや相手の背景を理解して活動する大切さを伝えた。"
        },
        {
          title: "対面ワークショップ「なりきり協力隊」",
          place: "JICA北海道",
          date: "2025年11月",
          description:
            "高校生に向けて、協力隊になりきるワークショップを実施しながら、JICA海外協力隊とは何かを体感する講演会。"
        },
        {
          title: "対面講演会",
          place: "星槎もみじ中学校/高校",
          date: "2025年11月",
          description:
            "ケニアでの生活に触れながら、幸せのカタチについて考える講演会。"
        },
        {
          title: "対面講演会",
          place: "青森山田高校通信制札幌校",
          date: "2025年5月",
          description:
            "ケニアでの生活に触れながら、幸せのカタチについて考える講演会。"
        }
      ]
    },
    gallery: {
      eyebrow: "Gallery",
      title: "活動の空気が伝わる写真たち。",
      description:
        "現場の空気、人との関わり、挑戦の温度が伝わる写真を掲載しています。",
      items: [
        { title: "Kenya Classroom", caption: "教育現場での対話" },
        { title: "Speaking", caption: "挑戦を伝える講演" },
        { title: "Engineering", caption: "思いを形にする開発" },
        { title: "Community", caption: "人と人がつながる場" }
      ]
    },
    latestNote: {
      eyebrow: "Latest note",
      title: "考えたことを、言葉に残す。",
      description:
        "現場で見たこと、感じた違和感、挑戦の途中で考えたことをnoteに書いています。",
      button: "noteへ",
      readMore: "記事を読む",
      articles: [
        {
          title: "ケニアで見た教育と挑戦のリアル",
          excerpt:
            "現場で見たこと、感じた違和感、そして自分にできる小さな一歩について。",
          date: "Latest"
        },
        {
          title: "一歩踏み出す小さな勇気",
          excerpt:
            "Kipepeoという言葉に込めている想いと、発信を続ける理由。",
          date: "Featured"
        }
      ]
    },
    latestYoutube: {
      eyebrow: "Latest YouTube",
      title: "声と表情で、活動を届ける。",
      description:
        "教育、国際協力、キャリア、ケニアでの経験を動画でも発信しています。",
      button: "YouTubeへ",
      videos: [
        {
          title: "ケニア・教育・国際協力について",
          description:
            "JICA海外協力隊としての経験や、教育現場で感じたことを動画で発信。"
        },
        {
          title: "挑戦する人に届けたい話",
          description:
            "キャリア、海外、学び直しなど、次の一歩を考える人に向けた発信。"
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "講演依頼、相談、コラボレーションはこちらから。",
      description:
        "学校・企業・コミュニティでの講演、Web制作、国際協力に関する相談など、まずは気軽にご連絡ください。",
      intents: [
        {
          title: "講演依頼",
          description: "学校、企業、コミュニティイベントでの講演・登壇相談。"
        },
        {
          title: "教育・国際協力",
          description: "教育現場、海外協力、アフリカでの活動に関する相談。"
        },
        {
          title: "Web制作・開発",
          description: "公式サイト、プロダクト、発信基盤の設計・開発。"
        }
      ],
      noteTitle: "講演内容は対象者に合わせて調整できます。",
      noteDescription:
        "国際協力、キャリア、教育、挑戦などを軸に、ワークショップ形式も可能です。",
      feePrefix: "目安",
      formTitle: "申し込みフォーム",
      formDescription:
        "講演依頼やご相談は、こちらのフォームからお送りください。",
      formIframeTitle: "講演依頼・お問い合わせフォーム"
    }
  },
  en: {
    site: {
      name: "Masashige Yamamoto",
      tagline: "Small Courage, One Step Forward",
      roles: ["Educator", "Former JICA Volunteer", "Engineer", "Speaker"],
      description:
        "I work across education, international cooperation, and technology to support people taking their next step."
    },
    navItems: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Career", href: "#career" },
      { label: "Activities", href: "#activities" },
      { label: "Speaking", href: "#speaking" },
      { label: "Latest", href: "#latest" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" }
    ],
    hero: {
      eyebrow: "Education / Africa / Technology",
      lead:
        "From classrooms to Kenya, I create entry points for people to take on new challenges through education and technology.",
      badges: ["Former Math Teacher", "JICA Kenya", "Web Engineer"],
      primaryCta: "Request a Talk",
      secondaryCta: "Explore Activities",
      imageAlt: "Students learning in a classroom in Kenya",
      kipepeoLabel: "Kipepeo",
      kipepeoSubLabel: "Swahili for butterfly",
      kipepeoLocation: "Kenya / Japan",
      kipepeoMessage:
        "A small flap of courage may support someone, somewhere in the future."
    },
    mission: {
      eyebrow: "Mission / Kipepeo",
      title: "A small step may change someone’s future.",
      description:
        "Kipepeo means butterfly in Swahili. Like the flap of a butterfly’s wings, I believe one person’s small courage can become the beginning of unseen change.",
      subtitle:
        "Can the flap of a butterfly’s wings in Brazil set off a tornado in Texas?",
      lines: [
        "The world is full of unfairness.",
        "No one person can change everything alone.",
        "But I do not want to say, “there is nothing we can do.”",
        "The world is waiting for your small courage."
      ]
    },
    about: {
      eyebrow: "About",
      title: "Bringing well-being to the people within reach.",
      location: "From Kitakyushu, Fukuoka, Japan",
      motto:
        "I aim to keep being an entertainer and deliver well-being to the people within my reach.",
      summary:
        "With experience studying in New Zealand, serving as a JICA volunteer in Kenya, and working as a high school teacher, I now work across education, international cooperation, and technology.",
      belief:
        "Like a butterfly, Kipepeo, I believe one person’s small step can eventually create meaningful change. I continue sharing, connecting, and expanding that belief through my work.",
      highlights: [
        "Former Math Teacher",
        "JICA Volunteer",
        "2 Years in Kenya",
        "Studied in New Zealand",
        "Web Engineer",
        "Speaker"
      ],
      imageAlt: "Community work in the field"
    },
    career: {
      eyebrow: "Career",
      title: "From classrooms to overseas work, and onward.",
      description:
        "A concise timeline of my path across education, international cooperation, coaching, and technology.",
      items: [
        {
          period: "Feb 2025 - Present",
          title: "Returned to high school teaching / NPO work / English coaching",
          description:
            "Returned to a high school in Hokkaido while also supporting an Uganda-related NPO project and providing English learning coaching."
        },
        {
          period: "Jan 2023 - Jan 2025",
          title: "JICA Overseas Cooperation Volunteer in Kenya",
          description:
            "Worked as a mathematics teacher at Nziu Secondary School. Alongside school work, supported baseball activities in Kenya and served with KESTES."
        },
        {
          period: "Apr 2017 - Sep 2022",
          title: "High school teacher in Fukuoka and Hokkaido",
          description:
            "Taught mathematics and worked closely with students as they explored their possibilities."
        },
        {
          period: "Apr 2016 - Dec 2016",
          title: "Studied sports coaching in New Zealand",
          description:
            "Studied sports coaching at the University of Canterbury and gained experience learning overseas."
        }
      ]
    },
    qualifications: {
      eyebrow: "Qualifications",
      title: "Small foundations that support trust.",
      description:
        "Language ability, international experience, and coaching have shaped how I work in education and cooperation.",
      items: [
        {
          title: "EIKEN Grade Pre-1",
          description: "A foundation for learning, communicating, and connecting in English."
        },
        {
          title: "IELTS Overall 7.0",
          description:
            "Listening 8.0 / Reading 7.0 / Writing 6.5 / Speaking 6.5"
        },
        {
          title: "Sports Coaching",
          description:
            "Coaching perspectives developed through study in New Zealand."
        }
      ]
    },
    activities: {
      eyebrow: "Activities",
      title: "One doorway into the work of my life.",
      description:
        "Writing, speaking, education, cooperation, and development are connected by the same wish: to support someone’s next step.",
      items: [
        {
          title: "YouTube",
          description:
            "Sharing lessons from education, cooperation, and engineering in a way that can lead to someone’s next step."
        },
        {
          title: "note",
          description:
            "Writing about what I saw in the field, what I questioned, and what I learned from mistakes."
        },
        {
          title: "Speaking",
          description:
            "Bringing real stories of challenge and international cooperation to schools, organizations, and communities."
        },
        {
          title: "Education",
          description:
            "Creating places where learners can notice their own possibilities, rooted in my experience as a math teacher."
        },
        {
          title: "International Cooperation",
          description:
            "Working with people and communities through lessons learned from two years in Kenya."
        },
        {
          title: "Engineering",
          description:
            "Designing and building web experiences that turn ideas and missions into usable products."
        }
      ]
    },
    speaking: {
      eyebrow: "Speaking",
      title: "Passing the baton of ideas to the next generation.",
      description:
        "I give talks and workshops on international cooperation, education, careers, and challenge for schools, JICA-related events, families, and online communities.",
      countLabel: "15",
      since: "Speaking since 2023",
      designTitle: "Designed for each audience",
      fee: "JPY 5,000-10,000 per hour, negotiable",
      audiences: ["Junior / Senior High", "University", "Parents", "Teachers", "Professionals"],
      topics: ["International Cooperation", "Career", "Education", "Challenge", "Life in Kenya", "Workshops"],
      recordsTitle: "Speaking Highlights",
      recordsDescription:
        "A selected list of representative talks and workshops.",
      cta: "Go to Request Form",
      records: [
        {
          title: "Cooperation Volunteer Seminar",
          place: "Hokkaido University",
          date: "May 2026",
          description:
            "A talk reflecting on two years in Kenya as a JICA volunteer through an emotional ups-and-downs graph, focusing on difficult periods and lessons about imagination, empathy, and understanding people’s backgrounds."
        },
        {
          title: "In-person workshop: Becoming a Cooperation Volunteer",
          place: "JICA Hokkaido",
          date: "Nov 2025",
          description:
            "A workshop for high school students to experience what it means to become a JICA volunteer."
        },
        {
          title: "In-person talk",
          place: "Seisa Momiji Junior / Senior High School",
          date: "Nov 2025",
          description:
            "A talk exploring different forms of happiness through stories from life in Kenya."
        },
        {
          title: "In-person talk",
          place: "Aomori Yamada High School, Sapporo Campus",
          date: "May 2025",
          description:
            "A talk exploring different forms of happiness through stories from life in Kenya."
        }
      ]
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Scenes that carry the atmosphere of the work.",
      description:
        "Photos from classrooms, talks, community work, and the ongoing process of taking on new challenges.",
      items: [
        { title: "Kenya Classroom", caption: "Dialogue in education" },
        { title: "Speaking", caption: "Sharing stories of challenge" },
        { title: "Engineering", caption: "Turning ideas into products" },
        { title: "Community", caption: "Places where people connect" }
      ]
    },
    latestNote: {
      eyebrow: "Latest note",
      title: "Turning thoughts into words.",
      description:
        "I write about what I saw in the field, what I questioned, and what I am learning through each challenge.",
      button: "Open note",
      readMore: "Read article",
      articles: [
        {
          title: "Education and challenge through my time in Kenya",
          excerpt:
            "Reflections on what I saw in the field, what felt wrong, and the small steps I can take.",
          date: "Latest"
        },
        {
          title: "Small courage, one step forward",
          excerpt:
            "The meaning behind Kipepeo and why I continue sharing my story.",
          date: "Featured"
        }
      ]
    },
    latestYoutube: {
      eyebrow: "Latest YouTube",
      title: "Sharing the work through voice and presence.",
      description:
        "I share videos about education, international cooperation, careers, and my experiences in Kenya.",
      button: "Open YouTube",
      videos: [
        {
          title: "Kenya, education, and international cooperation",
          description:
            "Videos about my experience as a JICA volunteer and what I learned in educational settings."
        },
        {
          title: "Stories for people taking on challenges",
          description:
            "Reflections for people thinking about careers, overseas work, learning, and their next step."
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "For speaking requests, collaboration, and consultation.",
      description:
        "Please reach out for talks at schools or organizations, web projects, or conversations related to education and international cooperation.",
      intents: [
        {
          title: "Speaking Requests",
          description: "Talks and workshops for schools, organizations, and community events."
        },
        {
          title: "Education / Cooperation",
          description:
            "Consultation related to education, overseas cooperation, and work connected to Africa."
        },
        {
          title: "Web Design / Development",
          description:
            "Official websites, products, and digital platforms for sharing a mission."
        }
      ],
      noteTitle: "Talks can be customized for each audience.",
      noteDescription:
        "Topics can include international cooperation, careers, education, challenge, and workshop-style sessions.",
      feePrefix: "Guide",
      formTitle: "Request Form",
      formDescription:
        "Please use this form for speaking requests and other inquiries.",
      formIframeTitle: "Speaking request and inquiry form"
    }
  }
} as const satisfies Record<Locale, Record<string, unknown>>;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Career", href: "#career" },
  { label: "Activities", href: "#activities" },
  { label: "Speaking", href: "#speaking" },
  { label: "Latest", href: "#latest" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" }
];

export const hero = {
  eyebrow: "Education / Africa / Technology",
  lead: "教室からケニアへ。教育とテクノロジーで、挑戦の入口をつくる。",
  badges: ["Former Math Teacher", "JICA Kenya", "Web Engineer"],
  image: "/images/hero.JPG"
};

export const manifesto = {
  title:
    "Does the Flap of a Butterfly's Wings in Brazil Set Off a Tornado in Texas?",
  subtitle: "ブラジルの1匹の蝶の羽ばたきは、テキサスで竜巻を引き起こすか？",
  credit: "By Edward Norton Lorenz (Mathematician and Meteorologist)",
  paragraphs: [
    "世界は、理不尽なことで溢れている。",
    "日本でも、海外でも、目を背けたくなるような不条理が存在する。",
    "貧困のせいで学校へ通えない子どもたち。仕事がなく絶望する若者。生きるために盗みを選ばざるを得なかった人。給料が1年近く支払われない日常。",
    "こんな世界を、たった一人の力で変えることはできない。",
    "でも、「だから無理」なんて言いたくない。",
    "もし、あなたの心に少しでも響いたなら、その小さな共鳴が、誰かの行動を変え、やがて大きな変化になるかもしれない。",
    'あなたも "Kipepeo"（スワヒリ語で蝶）になりませんか？',
    "ほんの小さな羽ばたきが、未来のどこかで、まだ見ぬ誰かを救う。",
    "世界は、あなたの小さな勇気を待っています。"
  ]
};

export const profileHighlights = [
  "元高校数学教員",
  "JICA海外協力隊",
  "ケニア2年間",
  "ニュージーランド留学",
  "Webエンジニア",
  "講演活動"
];

export const bio = {
  location: "福岡県北九州市出身",
  motto:
    "エンターテイナーであり続け、手の届く範囲の人たちにWell-beingを届ける。",
  summary:
    "ニュージーランドでの留学経験、JICA海外協力隊としてケニアで過ごした経験、そして高校教員としてのキャリアを活かし、教育・国際協力・テクノロジーを横断して活動しています。",
  belief:
    "一羽の蝶（Kipepeo）のように、一人の小さな一歩がやがて大きな変化を生むと信じ、その想いを伝え、つなぎ、広げるために日々活動を続けています。"
};

export const activities = [
  {
    title: "YouTube",
    description:
      "教育、海外協力、エンジニアとしての学びを、次の一歩につながる言葉で発信。",
    href: "https://www.youtube.com/@shigekyalonziu",
    icon: Youtube
  },
  {
    title: "note",
    description:
      "現場で見たこと、考えたこと、失敗から得た学びを文章として蓄積。",
    href: "https://note.com/shige_raha0209",
    icon: NotebookPen
  },
  {
    title: "講演活動",
    description:
      "学校、企業、コミュニティに向けて、挑戦と国際協力のリアルを届ける。",
    icon: Mic2
  },
  {
    title: "教育",
    description:
      "数学教員としての経験を軸に、学ぶ人が自分の可能性に気づく場をつくる。",
    icon: GraduationCap
  },
  {
    title: "国際協力",
    description:
      "ケニアでの2年間を通じて、現地の課題と向き合い、協働の形を探る。",
    icon: Handshake
  },
  {
    title: "エンジニア",
    description:
      "Web技術を使い、思いを形にするプロダクトと体験を設計・実装する。",
    icon: Code2
  }
];

export const speakingTopics = [
  "国際協力",
  "キャリア",
  "教育",
  "挑戦",
  "ケニアでの生活",
  "ワークショップ"
];

export const speakingSummary = {
  countLabel: "14回以上",
  since: "2023年から継続実施",
  description:
    "学校、JICA関連イベント、親子向け企画、オンライン講演などで、国際協力・教育・キャリア・挑戦をテーマに講演やワークショップを行っています。",
  fee: "1時間 5,000円〜10,000円（応相談）",
  audiences: ["中学生・高校生", "大学生", "保護者", "教員", "社会人"]
};

export const speakingRecords = [
  {
    title: "北海道大学 協力隊セミナー",
    place: "北海道大学",
    date: "2026年5月",
    description:
      "JICA海外協力隊としてケニアで過ごした2年間を、感情の浮き沈みグラフをもとに振り返った講演。気持ちが下がった時期の出来事を中心に、想像することや相手の背景を理解して活動する大切さを伝えた。"
  },
  {
    title: "対面ワークショップ「なりきり協力隊」",
    place: "JICA北海道",
    date: "2025年11月",
    description:
      "高校生に向けて、協力隊になりきるワークショップを実施しながら、JICA海外協力隊とは何かを体感する講演会。"
  },
  {
    title: "対面講演会",
    place: "星槎もみじ中学校/高校",
    date: "2025年11月",
    description:
      "ケニアでの生活に触れながら、幸せのカタチについて考える講演会。"
  },
  {
    title: "対面講演会",
    place: "青森山田高校通信制札幌校",
    date: "2025年5月",
    description:
      "ケニアでの生活に触れながら、幸せのカタチについて考える講演会。"
  }
];

export const careerItems = [
  {
    period: "2025年2月〜現在",
    title: "高校教員へ復職 / NPO・英語学習コーチング",
    description:
      "北海道の高等学校に復職。同時にNPO法人にてウガンダ事業に携わり、英語学習コーチングも行う。"
  },
  {
    period: "2023年1月〜2025年1月",
    title: "JICA海外協力隊としてケニアへ",
    description:
      "Nziu Secondary Schoolで数学教員として活動。活動の傍ら、ケニアで野球の普及にも取り組み、KESTESの総務部長兼奨学生担当として活動。"
  },
  {
    period: "2017年4月〜2022年9月",
    title: "福岡と北海道で高校教員として勤務",
    description: "高校数学教員として、教室で一人ひとりの可能性と向き合う。"
  },
  {
    period: "2016年4月〜12月",
    title: "ニュージーランドでスポーツコーチングを学ぶ",
    description:
      "カンタベリー大学にてスポーツコーチングを学び、海外で学ぶ経験を積む。"
  }
];

export const timeline = careerItems.map((item) => ({
  year: item.period,
  title: item.title,
  description: item.description
}));

export const qualifications = [
  {
    title: "英検準1級",
    description: "英語で学び、伝え、つなぐための基礎力。"
  },
  {
    title: "IELTS OA 7.0",
    description: "Listening 8.0 / Reading 7.0 / Writing 6.5 / Speaking 6.5"
  },
  {
    title: "Sports Coaching",
    description: "ニュージーランドで学んだ、学びと成長を支える視点。"
  }
];

export const gallery = [
  {
    title: "Kenya Classroom",
    caption: "教育現場での対話",
    image: "/images/gallery1.JPG"
  },
  {
    title: "Speaking",
    caption: "挑戦を伝える講演",
    image: "/images/gallery-speaking.JPG"
  },
  {
    title: "Engineering",
    caption: "思いを形にする開発",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Community",
    caption: "人と人がつながる場",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
  }
];

export const noteArticles = [
  {
    title: "ケニアで見た教育と挑戦のリアル",
    excerpt:
      "現場で見たこと、感じた違和感、そして自分にできる小さな一歩について。",
    date: "Latest",
    href: "https://note.com/shige_raha0209"
  },
  {
    title: "一歩踏み出す小さな勇気",
    excerpt: "Kipepeoという言葉に込めている想いと、発信を続ける理由。",
    date: "Featured",
    href: "https://note.com/shige_raha0209"
  }
];

export const youtubeVideos = [
  {
    title: "ケニア・教育・国際協力について",
    description:
      "JICA海外協力隊としての経験や、教育現場で感じたことを動画で発信。",
    href: "https://www.youtube.com/@shigekyalonziu",
    thumbnail:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "挑戦する人に届けたい話",
    description:
      "キャリア、海外、学び直しなど、次の一歩を考える人に向けた発信。",
    href: "https://www.youtube.com/@shigekyalonziu",
    thumbnail:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
  }
];

export const socials = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@shigekyalonziu",
    icon: Youtube
  },
  { label: "note", href: "https://note.com/shige_raha0209", icon: BookOpen },
  { label: "X", href: "https://x.com/home", icon: Twitter },
  {
    label: "Instagram",
    href: "https://www.instagram.com/shigekyalonziu/?hl=ja",
    icon: Instagram
  },
  { label: "GitHub", href: "https://github.com/MASASHIGE-Y", icon: Github }
];

export const contactIntents = [
  {
    title: "講演依頼",
    description: "学校、企業、コミュニティイベントでの講演・登壇相談。",
    icon: Mic2
  },
  {
    title: "教育・国際協力",
    description: "教育現場、海外協力、アフリカでの活動に関する相談。",
    icon: Handshake
  },
  {
    title: "Web制作・開発",
    description: "公式サイト、プロダクト、発信基盤の設計・開発。",
    icon: BriefcaseBusiness
  }
];
