import type { Resource, VideoResource } from "./types";

// Titles and publishers are from YouTube oEmbed. No video has been reviewed.
const video = (
  id: string,
  title: string,
  topicId: string,
  presenters: string[],
  sourceId = "furuta"
): VideoResource => ({
  id,
  kind: "video",
  videoId: id,
  title,
  sourceId,
  presenters,
  topicIds: [topicId],
  tags: [],
  relatedResourceIds:
    topicId === "swing-path"
      ? ["4MAlm786bhc", "9AZRGo3NnHA", "02VjDcRN80E"].filter(
          (relatedId) => relatedId !== id
        )
      : [],
  metadataCheckedAt: "2026-11-08",
  review: { status: "unwatched" },
  timestamps: [],
  published: true
});

export const resources: Resource[] = [
  {
    id: "pronunciation-start-guide",
    kind: "article",
    title: "発音学習を始めるときの3つの視点",
    author: "Library編集メモ",
    updatedAt: "2026-11-08",
    topicIds: ["english-pronunciation-practice"],
    tags: ["発音", "学習記録"],
    relatedResourceIds: ["Qe3EmiFWgGM", "SBysNlzLqno"],
    published: true,
    paragraphs: [
      "① 今回の目的を一つ選ぶ。「この単語の音を確かめたい」「短い一文を声に出したい」など、今日取り組む範囲を小さく決めます。発音記号を調べたいときと、練習方法を探したいときでは、選ぶ資料も変わります。",
      "② 聞いた音と、自分の声を比べる。公開されている音声を聞き、自分でも声に出してみます。録音を使うなら、気になった箇所を一つメモします。自分では判断できない部分は、分からないまま残して構いません。",
      "③ 次に確かめたいことを残す。「どの音か」「どの単語か」「どこが難しかったか」を短く記録し、参考動画の説明と照らし合わせます。発信者の説明と、自分の気づきは分けて書きます。",
      "これは参考資料を選ぶための独自の編集メモです。特定の教材や動画の要約ではなく、有料教材の内容・図版・練習課題は掲載していません。各動画の具体的な指導内容は、投稿者の公式ページで確認してください。"
    ]
  },
  video(
    "Qe3EmiFWgGM",
    "【永久保存版】たった30分で発音記号を完全攻略【速習まとめ】",
    "english-sounds",
    [],
    "atsu"
  ),
  video(
    "tLq9BWAmK38",
    "【大人向け】英語っぽい発音の秘密を暴露します。",
    "english-sounds",
    [],
    "miyu"
  ),
  video(
    "J5RntYNBTp0",
    "【超簡単】一瞬で発音が劇的に向上するコツを伝授します",
    "english-pronunciation-practice",
    [],
    "atsu"
  ),
  video(
    "SBysNlzLqno",
    "【2週間で完結】効果的な発音学習法を詳しく解説します",
    "english-pronunciation-practice",
    [],
    "atsu"
  ),
  video(
    "lgZjaZvwWtk",
    "【魔法】リスニング力爆上がり｜僕はこうして英語が聞き取れるようになった",
    "english-listening-practice",
    [],
    "tarosac"
  ),
  video(
    "rHYRLyn4UGw",
    "【スクリプト法】私の英語力が爆上がりした特訓法を公開します。",
    "english-script-practice",
    [],
    "miyu"
  ),
  video(
    "4MAlm786bhc",
    "常識を覆す至高の技術！前田智徳の究極の打撃論【バッターズバイブル】",
    "swing-path",
    ["前田智徳"]
  ),
  video(
    "9AZRGo3NnHA",
    "強打者たちはバットのウラ面に当てる 宮本慎也が教える最新打撃理論【最新理論バイブル】",
    "swing-path",
    ["宮本慎也"]
  ),
  video(
    "02VjDcRN80E",
    "井口資仁が今だから明かせる『逆方向の打球が伸びる秘密』 【最新理論バイブル】",
    "swing-path",
    ["井口資仁"]
  ),
  video(
    "J_xpwnisB_o",
    "宮本慎也氏【究極の守備講座：ゴロの捕り方編】内野手は今すぐ見たい！今日から上手くなるポイント",
    "ground-balls",
    ["宮本慎也"],
    "mizuno"
  ),
  video(
    "w1y3QLCaylE",
    "宮本・仁志・井口が教えるスローイング上達法 ＆ イップス克服法【最新理論バイブル】",
    "infield-throwing",
    ["宮本慎也", "仁志敏久", "井口資仁"]
  ),
  video(
    "NyR4Mp-V04g",
    "コツは『欽ちゃん走り』最新ベースランニング術＆内野守備 上級編 【最新理論バイブル】",
    "footwork",
    []
  ),
  video(
    "BkiYn4G7FzU",
    "名手たちは「1歩目を遅らせる」糸井＆坂口が教える外野守備のコツ【守備バイブル】",
    "outfield-reading",
    ["糸井嘉男", "坂口智隆"]
  ),
  video(
    "SMM-L6FfpNQ",
    "球速アップのトレーニング術を斉藤和巳＆五十嵐亮太が伝授【ピッチャーズバイブル】",
    "training",
    ["斉藤和巳", "五十嵐亮太"]
  ),
  video(
    "KBmlw8htlh8",
    "山本昌＆攝津が極意を伝授 シンカーの方程式【ピッチャーズバイブル】",
    "pitch-types",
    ["山本昌", "攝津正"]
  ),
  video(
    "ZuyieBn2X5c",
    "永久保存版！古田・谷繁のキャッチングを徹底解剖【キャッチャーズバイブル】",
    "receiving",
    ["古田敦也", "谷繁元信"]
  )
];
