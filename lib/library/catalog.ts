import type { Category, LibraryDomain, Source, Topic } from "./types";

export const domains: LibraryDomain[] = [
  {
    id: "baseball",
    title: "Baseball Library",
    label: "野球技術",
    description:
      "打撃、守備、投球、捕手。技術テーマごとに参考動画を集め、異なる指導者の視点に触れる。"
  },
  {
    id: "english",
    title: "English Library",
    label: "英語学習",
    description:
      "発音、聞く力、話す力、学習方法。自分に必要な学びを見つけるための資料と記録。"
  }
];

export const categories: Category[] = [
  {
    id: "batting",
    domainId: "baseball",
    slug: "batting",
    title: "バッティング",
    description:
      "スイング、構え、身体の使い方をテーマに、打撃の説明を読み比べる。",
    plannedThemes: [
      "構え",
      "体重移動",
      "トップ",
      "下半身",
      "タイミング",
      "練習方法"
    ]
  },
  {
    id: "infield",
    domainId: "baseball",
    slug: "infield",
    title: "内野守備",
    description:
      "捕球から送球までの動きを、場面やポジションと合わせて整理する。",
    plannedThemes: ["捕球姿勢", "ポジショニング"]
  },
  {
    id: "outfield",
    domainId: "baseball",
    slug: "outfield",
    title: "外野守備",
    description: "打球への反応、捕球、返球についての参考資料を集める。",
    plannedThemes: ["落下地点の予測", "捕球", "中継プレー", "送球"]
  },
  {
    id: "pitching",
    domainId: "baseball",
    slug: "pitching",
    title: "ピッチング",
    description: "フォーム、球種、練習の視点から投球に関する資料を整理する。",
    plannedThemes: ["投球フォーム", "制球", "配球"]
  },
  {
    id: "catching",
    domainId: "baseball",
    slug: "catching",
    title: "キャッチャー",
    description: "捕球、送球、配球。捕手の役割をテーマ別にたどる。",
    plannedThemes: ["ブロッキング", "スローイング", "配球・リード"]
  },
  {
    id: "pronunciation",
    domainId: "english",
    slug: "pronunciation",
    title: "発音",
    description:
      "音の特徴を知り、声に出す練習へ。発音記号や学習方法の参考動画を探す。",
    plannedThemes: ["母音・子音", "音のつながり", "リズム・強勢"]
  },
  {
    id: "listening",
    domainId: "english",
    slug: "listening",
    title: "リスニング",
    description:
      "聞き取れない場面を振り返り、自分に合う練習を考えるための参考資料。",
    plannedThemes: ["音の認識", "語彙", "意味の理解"]
  },
  {
    id: "speaking",
    domainId: "english",
    slug: "speaking",
    title: "スピーキング",
    description: "自分の言葉で表現する練習について整理する予定です。",
    plannedThemes: ["パラフレーズ", "会話", "自然な表現"]
  },
  {
    id: "grammar",
    domainId: "english",
    slug: "grammar",
    title: "英文法",
    description: "理解と運用をつなぐ学習記録を整理する予定です。",
    plannedThemes: ["文の構造", "時制", "例文"]
  },
  {
    id: "vocabulary",
    domainId: "english",
    slug: "vocabulary",
    title: "語彙・表現",
    description: "文脈と一緒に言葉を学ぶための資料を整理する予定です。",
    plannedThemes: ["言い換え", "コロケーション", "表現の使い分け"]
  },
  {
    id: "methods",
    domainId: "english",
    slug: "methods",
    title: "学習方法",
    description:
      "目的やレベルに合う練習を探す。公開されている学習方法を参考にする。",
    plannedThemes: [
      "シャドーイング",
      "オーバーラッピング",
      "レベル別学習",
      "IELTS",
      "TOEIC"
    ]
  }
];

export const topics: Topic[] = [
  {
    id: "swing-path",
    categoryId: "batting",
    slug: "swing-path",
    title: "スイングと打球方向",
    introduction:
      "打撃理論に関する動画を集めたテーマです。同じ言葉でも、対象とする選手や場面が異なる可能性があります。まずそれぞれの説明を原動画で確かめます。",
    questions: [
      "どのような選手・場面を想定した説明か？",
      "バットの動きと身体の動きをどう区別して説明しているか？",
      "共通する点と、条件によって異なる点はどこか？"
    ],
    relatedTopicIds: ["ground-balls", "training"],
    published: true
  },
  {
    id: "ground-balls",
    categoryId: "infield",
    slug: "ground-balls",
    title: "ゴロ捕球",
    introduction:
      "ゴロの捕り方をテーマにした参考動画です。捕球前・捕球時・捕球後に分けて、自分が見直したい場面を探します。",
    questions: [
      "どのバウンド・打球速度を想定しているか？",
      "捕球姿勢から次の送球へ、どうつなげているか？"
    ],
    relatedTopicIds: ["footwork", "infield-throwing"],
    published: true
  },
  {
    id: "infield-throwing",
    categoryId: "infield",
    slug: "throwing",
    title: "内野手の送球",
    introduction:
      "内野手のスローイングに関する参考資料を整理します。距離や体勢など、説明の前提を確認しながら読みます。",
    questions: [
      "送球距離や捕球時の体勢はどのような条件か？",
      "動作の説明と、本人が感じている感覚は分けて記録できるか？"
    ],
    relatedTopicIds: ["ground-balls", "footwork"],
    published: true
  },
  {
    id: "footwork",
    categoryId: "infield",
    slug: "footwork",
    title: "フットワーク",
    introduction:
      "内野守備の足の運びに関する動画です。言葉だけで判断せず、実演や前後の場面も確認します。",
    questions: [
      "打球に入るまでと、捕球後の動きをどう分けているか？",
      "実演ではどの場面に注目できるか？"
    ],
    relatedTopicIds: ["ground-balls", "infield-throwing"],
    published: true
  },
  {
    id: "outfield-reading",
    categoryId: "outfield",
    slug: "reading-batted-balls",
    title: "打球判断と最初の一歩",
    introduction:
      "外野守備の打球への反応を扱う動画を集めます。タイトルにある表現は発信者のもので、実践条件は原動画で確認します。",
    questions: [
      "反応・判断・移動をどう区別しているか？",
      "守備位置や打球の条件によって説明が変わるか？"
    ],
    relatedTopicIds: ["footwork", "infield-throwing"],
    published: true
  },
  {
    id: "training",
    categoryId: "pitching",
    slug: "training",
    title: "投球とトレーニング",
    introduction:
      "投球のためのトレーニングに関する参考動画です。練習内容だけでなく、説明されている目的と対象も記録します。",
    questions: [
      "何を目的とした練習なのか？",
      "発信者自身の経験と、別の根拠が示されている部分はどこか？"
    ],
    relatedTopicIds: ["pitch-types", "swing-path"],
    published: true
  },
  {
    id: "pitch-types",
    categoryId: "pitching",
    slug: "pitch-types",
    title: "球種と投げ方",
    introduction:
      "球種に関する動画を集めたテーマです。握り・動作・感覚についての説明を、混同せずに記録します。",
    questions: [
      "説明している球種と、その狙いは何か？",
      "誰の経験として語られているか？"
    ],
    relatedTopicIds: ["training", "receiving"],
    published: true
  },
  {
    id: "receiving",
    categoryId: "catching",
    slug: "receiving",
    title: "キャッチング",
    introduction:
      "捕手のキャッチングを扱う動画です。投球位置や構えなど、動作の前提を確かめながら見ます。",
    questions: [
      "どのような投球・場面を想定しているか？",
      "複数の捕手の実演に違いはあるか？"
    ],
    relatedTopicIds: ["pitch-types", "infield-throwing"],
    published: true
  },
  {
    id: "english-sounds",
    categoryId: "pronunciation",
    slug: "sounds-and-symbols",
    title: "発音記号と音の入口",
    introduction:
      "AtsueigoとMiyuが公開する発音関連の動画を集めました。自分が確かめたい音を選び、実演と説明を原動画で確認するための入口です。",
    questions: [
      "今、自分が確かめたい音はどれか？",
      "説明や実演を聞いて、何を練習記録に残したいか？"
    ],
    relatedTopicIds: [
      "english-pronunciation-practice",
      "english-listening-practice"
    ],
    published: true
  },
  {
    id: "english-pronunciation-practice",
    categoryId: "pronunciation",
    slug: "practice",
    title: "発音学習の進め方",
    introduction:
      "練習の目的を決めてから、参考にする動画を選ぶためのテーマです。最初に短い編集メモを読み、気になる公開動画へ進めます。",
    questions: [
      "今回の練習で、何を確かめたいか？",
      "動画の学習方法は、自分の目的や今のレベルに合っているか？"
    ],
    relatedTopicIds: [
      "english-sounds",
      "english-listening-practice",
      "english-script-practice"
    ],
    published: true
  },
  {
    id: "english-listening-practice",
    categoryId: "listening",
    slug: "practice",
    title: "リスニングの学習方法",
    introduction:
      "タロサックの公開動画を参考先に、聞く練習を考えます。動画のタイトルにある効果は投稿者の表現であり、このライブラリが成果を保証するものではありません。",
    questions: [
      "音が分からないのか、単語や意味が分からないのか？",
      "取り入れたい練習と、その理由を自分の言葉で説明できるか？"
    ],
    relatedTopicIds: ["english-sounds", "english-script-practice"],
    published: true
  },
  {
    id: "english-script-practice",
    categoryId: "methods",
    slug: "scripts",
    title: "スクリプトを使う学習",
    introduction:
      "Miyuの公開動画を入口に、スクリプトを使う学習方法を探します。具体的な手順は原動画で確認してください。",
    questions: [
      "動画では何を目的にスクリプトを使っているか？",
      "自分の練習に取り入れる前に確認したい条件は何か？"
    ],
    relatedTopicIds: [
      "english-listening-practice",
      "english-pronunciation-practice"
    ],
    published: true
  }
];

export const sources: Source[] = [
  {
    id: "furuta",
    domainId: "baseball",
    name: "フルタの方程式【古田敦也 公式チャンネル】",
    url: "https://www.youtube.com/@furuta-houteishiki"
  },
  {
    id: "mizuno",
    domainId: "baseball",
    name: "MIZUNO BASEBALL JP",
    url: "https://www.youtube.com/@MIZUNOBASEBALLJP"
  },
  {
    id: "konchan",
    domainId: "baseball",
    name: "こんちゃんBASE",
    url: "https://www.youtube.com/@konchanbase/videos"
  },
  {
    id: "takuto",
    domainId: "baseball",
    name: "coachtakuto",
    url: "https://www.youtube.com/@coachtakuto"
  },
  {
    id: "miyamoto",
    domainId: "baseball",
    name: "宮本慎也 関連チャンネル",
    url: "https://www.youtube.com/@miyamotoshinya"
  },
  {
    id: "tvar",
    domainId: "baseball",
    name: "TVAR",
    url: "https://www.youtube.com/@tvar3375"
  },
  {
    id: "uehara",
    domainId: "baseball",
    name: "上原浩治の雑談魂",
    url: "https://www.youtube.com/@KojiUehara-Zatsudan"
  },
  {
    id: "atsu",
    domainId: "english",
    name: "Atsueigo",
    url: "https://www.youtube.com/@atsueigo",
    featured: true
  },
  {
    id: "miyu",
    domainId: "english",
    name: "英語オタクMiyu",
    url: "https://www.youtube.com/@eigo_miyu"
  },
  {
    id: "tarosac",
    domainId: "english",
    name: "タロサックの海外生活ダイアリーTAROSAC",
    url: "https://www.youtube.com/@tarosac1990"
  },
  {
    id: "daijiro",
    domainId: "english",
    name: "だいじろー Daijiro",
    url: "https://www.youtube.com/@daijirojp"
  }
];
