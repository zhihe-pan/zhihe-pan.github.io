export const researchData = {
  cn: {
    tag: "学术研究",
    title: "我的探索",
    subtitle: "我研究人们如何通过声音和面孔来表达和感知情绪，以及语言和文化如何塑造这些过程。"
  },
  en: {
    tag: "Academic Rigor",
    title: "My Exploration",
    subtitle: "Specializing in the intersection of vocal emotion, facial expressions, and cross-cultural recognition mechanisms."
  },
  framework: [
    {
      direction: {
        cn: "情绪如何通过面孔和声音传递？",
        en: "How are emotions conveyed through face and voice?",
      },
      items: [
        {
          q: { cn: "面孔可以传递哪些情绪？ 面部特征如何？", en: "What emotions can the face convey?" },
          p: { cn: "项目1：中国动态面孔数据库的建立和验证", en: "Proj 1: Chinese Dynamic Facial Expression Database" },
        },
        {
          q: { cn: "声音可以传递哪些情绪？ 声学特征如何？", en: "What emotions can the voice convey?" },
          p: { cn: "项目2：汉语情绪韵律和发声数据库的建立和验证", en: "Proj 2: Mandarin Emotional Prosody & Vocalization DB" },
        },
        {
          q: { cn: "面孔和声音如何传递不同强度的情绪体验？", en: "How do face and voice convey emotion intensity?" },
          p: { cn: "项目3：比较面孔和发声对情绪强度的区分度", en: "Proj 3: Face vs. Voice Emotion Intensity Discrimination" },
        },
      ],
    },
    {
      direction: {
        cn: "情绪的表达和知觉如何因文化、语言而异？",
        en: "How does emotion expression/perception vary by culture and language?",
      },
      items: [
        {
          q: { cn: "情绪声音的文化差异如何体现？", en: "How do cultural differences in emotional vocalizations manifest?" },
          p: { cn: "项目4：中国-瑞典情绪韵律和发声的跨文化比较", en: "Proj 4: China-Sweden Cross-Cultural Comparison" },
        },
        {
          q: { cn: "导致情绪声音识别出现文化差异的原因是什么？", en: "Why do cultural differences in recognition arise?" },
          p: { cn: "项目5：声调和文化维度对语音情绪识别的作用", en: "Proj 5: Tone & Cultural Dimensions in Emotional Prosody" },
        },
        {
          q: { cn: "不同语言依赖何种声学特征来传递情绪？ 差异如何？", en: "How do languages differ in acoustic cues for emotion?" },
          p: { cn: "项目6：语音合成技术因果揭示情绪声音的语言差异", en: "Proj 6: Speech Synthesis Reveals Language Differences" },
        },
      ],
    },
  ],
  projects: [
    {
      cn: {
        role: "第一作者",
        title: "中国动态面部表情数据库的构建和情绪识别验证",
        points: [
          "我们筛选出 28 类具有高典型性、低相似性的情绪",
          "我们采集动态和静态表情，并进行大规模验证",
          "14 种情绪可由动态表情传递，10 种可由静态表情传递"
        ]
      },
      en: {
        role: "First Author",
        title: "Construction and Validation of the Chinese Dynamic Facial Expression Database",
        points: [
          "We identified 28 highly typical and distinct emotion categories",
          "We collected and validated dynamic and static expressions through large-scale studies",
          "14 emotions can be conveyed via dynamic cues, 10 via static cues"
        ]
      },
      link: "https://doi.org/10.1016/j.jesp.2025.104836"
    }
  ],
  presentWork: [
    {
      cn: {
        title: "听觉训练对声音情绪识别能力的影响",
        desc: "探究听觉训练是否是提高人们声音情绪识别能力的有效途径。\n你可以点击链接体验训练过程。"
      },
      en: {
        title: "Impact of Auditory Training on Vocal Emotion Recognition",
        desc: "Investigating whether auditory training is an effective way to improve vocal emotion recognition. Click the link to experience the training."
      },
      link: "http://47.98.215.3/exp/publix/XUrbwK0JLMj"
    }
  ]
};
