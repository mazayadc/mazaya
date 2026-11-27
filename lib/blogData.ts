export interface LocalBlogPost {
  id: string;
  slug: string;
  category: string;
  categoryAr?: string;
  tags: string[];
  date: string;
  author: string;
  authorAr?: string;
  readTimeEn: string;
  readTimeAr: string;
  title: {
    en: string;
    ar: string;
  };
  excerpt: {
    en: string;
    ar: string;
  };
  content: {
    en: {
      sections: {
        heading?: string;
        paragraphs: string[];
        bulletPoints?: string[];
      }[];
      faqs?: { question: string; answer: string }[];
    };
    ar: {
      sections: {
        heading?: string;
        paragraphs: string[];
        bulletPoints?: string[];
      }[];
      faqs?: { question: string; answer: string }[];
    };
  };
  seo: {
    keywords: string[];
    metaDescriptionEn: string;
    metaDescriptionAr: string;
    seoTitleEn?: string;
    seoTitleAr?: string;
    ogTitleEn?: string;
    ogTitleAr?: string;
    ogDescriptionEn?: string;
    ogDescriptionAr?: string;
  };
  campaignInfo?: {
    offerBadgeEn: string;
    offerBadgeAr: string;
    highlightsEn: string[];
    highlightsAr: string[];
  };
}

export const LOCAL_BLOG_POSTS: LocalBlogPost[] = [
  {
    id: 'post-gums-bleed-when-brushing',
    slug: 'why-gums-bleed-when-brushing-without-pain',
    category: 'Dental Health',
    categoryAr: 'صحة الأسنان',
    tags: ['Bleeding Gums', 'Gingivitis', 'Gum Health', 'Brushing and Flossing'],
    date: '2026-11-27',
    author: 'Mazaya Dental Specialists',
    authorAr: 'أخصائيو مركز مزايا لطب الأسنان',
    readTimeEn: '5 min read',
    readTimeAr: '5 دقائق قراءة',
    title: {
      en: 'Why Do My Gums Bleed When I Brush Even Though They Don’t Hurt?',
      ar: 'لماذا تنزف لثتي عند تنظيف أسناني بالفرشاة رغم أنني لا أشعر بألم؟',
    },
    excerpt: {
      en: 'A little blood on your toothbrush can be the first change you notice in your gums. Learn why painless bleeding happens, how to clean the area gently, and when to see a dentist.',
      ar: 'قد تكون آثار الدم على فرشاة الأسنان أول تغيّر تلاحظه في لثتك. تعرّف على أسباب النزيف من دون ألم، وكيفية تنظيف المنطقة بلطف، ومتى تراجع طبيب الأسنان.',
    },
    seo: {
      keywords: [
        'bleeding gums when brushing',
        'gums bleeding without pain',
        'should I brush bleeding gums',
        'early signs of gingivitis',
        'do bleeding gums need deep cleaning',
        'نزيف اللثة عند تنظيف الأسنان بالفرشاة',
        'نزيف اللثة بدون ألم',
        'هل أستمر في تنظيف اللثة إذا نزفت',
        'علامات التهاب اللثة المبكر',
        'هل نزيف اللثة يحتاج إلى تنظيف عميق',
      ],
      metaDescriptionEn: 'Do your gums bleed when you brush, even without pain? Learn why it happens, how to clean the area gently, and when to book a gum check in Isa Town, Bahrain.',
      metaDescriptionAr: 'هل تنزف لثتك عند تنظيف أسنانك من دون ألم؟ تعرّف على الأسباب، وكيف تنظّف المنطقة بلطف، ومتى تحجز موعدًا لفحص اللثة في مدينة عيسى، البحرين.',
      seoTitleEn: 'Why Gums Bleed When Brushing | Mazaya Dental Center',
      seoTitleAr: 'لماذا تنزف اللثة عند تنظيف الأسنان؟ | مركز مزايا لطب الأسنان',
      ogTitleEn: 'My Gums Bleed When I Brush. Should I Skip That Spot?',
      ogTitleAr: 'لثتي تنزف عند استخدام الفرشاة. هل أتجنّب تنظيف هذا الموضع؟',
      ogDescriptionEn: 'You see pink in the sink, but nothing hurts. Here’s how to clean the area gently and what a dentist can check if the bleeding keeps coming back.',
      ogDescriptionAr: 'تلاحظ أثرًا ورديًا في المغسلة من دون أن تشعر بألم. إليك كيف تنظّف الموضع بلطف وما الذي يفحصه طبيب الأسنان إذا تكرّر النزيف.',
    },
    content: {
      en: {
        sections: [
          {
            paragraphs: [
              'A guide to bleeding gums from Mazaya Dental Center in Isa Town, Bahrain.',
              'You finish brushing and notice a pink streak in the toothpaste. You can eat comfortably, your teeth feel fine, and by the time you look in the mirror, the bleeding has stopped. The next morning, it happens again. Should you brush that spot more carefully, leave it alone, or book a dental appointment?',
              'If your gums keep bleeding when you brush, keep cleaning them gently and arrange a dental check-up. Gums can become inflamed without feeling sore. Bleeding may be the first change you notice.',
            ],
          },
          {
            heading: 'Why can gums bleed without hurting?',
            paragraphs: [
              'Run your tongue along your teeth near the gumline before brushing. The soft film that sometimes collects there is called plaque. It contains bacteria and can build up along the edges of the gums and between teeth. When the gums become inflamed, even gentle contact with a toothbrush or floss can make them bleed. An early form of this inflammation is called gingivitis.',
              'You may wonder whether you simply pressed too hard. Use a soft brush and light pressure, but pay attention if the same area bleeds again. That detail is more useful to tell your dentist than the amount of pink you saw in the sink.',
            ],
          },
          {
            heading: 'Should I keep brushing the spot that bleeds?',
            paragraphs: [
              'Yes. It’s understandable to steer around a spot when you see blood, but plaque can continue to collect there. The aim is to clean the edge where the tooth meets the gum without scrubbing it.',
            ],
            bulletPoints: [
              'Brush twice a day with fluoride toothpaste, using a soft toothbrush and gentle strokes along the gumline.',
              'Clean between your teeth each day. If floss catches or an interdental brush feels too tight, ask your dentist to show you a suitable technique and size.',
              'If there’s one gap you always miss, point it out at your appointment. You can ask, “Could you show me how to clean between these two teeth?”',
            ],
          },
          {
            heading: 'What will a dentist check, and will I need a deep cleaning?',
            paragraphs: [
              'Tell the dentist whether the bleeding comes from one spot or several, when you first noticed it, and whether it also happens when you floss or eat. The dentist can examine the gumline for inflammation and hardened deposits called tartar. They may use a small measuring instrument to check the spaces between the teeth and gums. If needed, an X-ray can help assess the bone supporting the teeth.',
              'Bleeding alone doesn’t tell you whether you need a deep cleaning. If inflammation is limited to the gumline, professional cleaning and changes to your daily routine may be enough. If the examination shows deeper pockets and deposits below the gums, your dentist can explain whether cleaning beneath the gumline would help. A useful question to ask is, “Can you show me which areas need treatment and why?”',
            ],
          },
          {
            heading: 'When should I book an appointment?',
            paragraphs: [
              'Book a dental check-up if bleeding keeps returning, even if it stops quickly. Mention any persistent bad breath, swelling, or change in how your gums look. If your gums become very sore and swollen, or an adult tooth starts to feel loose, ask for an urgent dental appointment.',
              'To arrange a gum assessment at Mazaya Dental Center in Isa Town, Bahrain, call +973 1777 7234. When you call, mention whether the bleeding comes from one area or several and whether you have swelling or a loose tooth.',
            ],
          },
        ],
      },
      ar: {
        sections: [
          {
            paragraphs: [
              'دليل لفهم نزيف اللثة من مركز مزايا لطب الأسنان في مدينة عيسى، البحرين.',
              'تنتهي من تنظيف أسنانك وتلاحظ أثرًا ورديًا في رغوة المعجون. تأكل كالمعتاد ولا تشعر بأي ألم، وحين تنظر في المرآة يكون النزيف قد توقّف. ثم يتكرّر الأمر في صباح اليوم التالي. هل تنظّف هذا الموضع برفق أكثر، أم تتجنّبه، أم تحجز موعدًا عند طبيب الأسنان؟',
              'إذا تكرّر نزيف اللثة عند تنظيف أسنانك، فاستمرّ في تنظيفها بلطف واحجز موعدًا لفحصها. قد تلتهب اللثة من دون أن تؤلمك، وقد يكون النزيف أول تغيّر تلاحظه.',
            ],
          },
          {
            heading: 'كيف تنزف اللثة من دون أن تؤلمني؟',
            paragraphs: [
              'مرّر لسانك على أسنانك قرب حافة اللثة قبل تنظيفها. قد تشعر بطبقة رقيقة ولزجة تُسمّى البلاك. تحتوي هذه الطبقة على بكتيريا ويمكن أن تتراكم عند حافة اللثة وفي الفراغات بين الأسنان. وعندما تلتهب اللثة، قد تنزف بمجرّد ملامسة الفرشاة أو الخيط لها برفق. ويُعرف الالتهاب في مرحلته المبكرة بالتهاب اللثة.',
              'قد تتساءل إن كنت قد ضغطت بقوة على الفرشاة. استخدم فرشاة ناعمة وخفّف الضغط، وانتبه إذا عاد النزيف إلى الموضع نفسه. فعندما تصف ما يحدث لطبيبك، يفيده أن يعرف أين يتكرّر النزيف أكثر من معرفة كمية الدم التي رأيتها في المغسلة.',
            ],
          },
          {
            heading: 'هل أستمرّ في تنظيف الموضع الذي ينزف؟',
            paragraphs: [
              'نعم. من الطبيعي أن تحاول تجنّب الموضع عند رؤية الدم، لكن البلاك قد يستمرّ في التراكم فيه. نظّف الحافة التي تلتقي عندها السن باللثة بحركات لطيفة ومن دون فرك قوي.',
            ],
            bulletPoints: [
              'نظّف أسنانك مرتين يوميًا بمعجون يحتوي على الفلورايد، واستخدم فرشاة ناعمة ومرّرها برفق بمحاذاة اللثة.',
              'نظّف بين أسنانك يوميًا. إذا كان الخيط يعلق أو كان إدخال الفرشاة المخصّصة لما بين الأسنان صعبًا، فاطلب من طبيبك أن يوضّح لك الطريقة المناسبة ويساعدك في اختيار المقاس.',
              'إذا كنت تجد صعوبة في الوصول إلى فراغ معيّن، فأشر إليه أثناء الفحص واسأل: «هل يمكنك أن تريني كيف أنظّف بين هاتين السنّين؟»',
            ],
          },
          {
            heading: 'ماذا يفحص الطبيب؟ وهل أحتاج إلى تنظيف عميق؟',
            paragraphs: [
              'أخبر الطبيب إن كان النزيف يأتي من موضع واحد أو من عدة مواضع، ومتى لاحظته أول مرة، وهل يحدث أيضًا عند استخدام الخيط أو أثناء الأكل. يفحص الطبيب حافة اللثة بحثًا عن علامات الالتهاب وتراكم الجير، وهو ترسّبات صلبة تلتصق بالأسنان. وقد يستخدم أداة قياس صغيرة لقياس عمق الفراغ بين السن واللثة. وعند الحاجة، تساعد صورة الأشعة على تقييم العظم الداعم للأسنان.',
              'لا يكفي النزيف وحده لتحديد حاجتك إلى تنظيف عميق. إذا كان الالتهاب محصورًا عند حافة اللثة، فقد يكفي تنظيف الأسنان في العيادة وتعديل طريقة العناية بها في المنزل. وإذا أظهر الفحص وجود جيوب لثوية أعمق وترسّبات تحت اللثة، يشرح لك الطبيب ما إذا كان تنظيف تلك المواضع مناسبًا لحالتك. ويمكنك أن تسأله: «هل يمكنك أن تريني المواضع التي تحتاج إلى علاج وتشرح لي السبب؟»',
            ],
          },
          {
            heading: 'متى أحجز موعدًا لفحص اللثة؟',
            paragraphs: [
              'احجز موعدًا إذا تكرّر النزيف، حتى لو كان يتوقّف بسرعة. وأخبر الطبيب إذا لاحظت رائحة فم مستمرّة، أو تورّمًا، أو تغيّرًا في شكل اللثة. وإذا أصبحت اللثة شديدة الألم والتورّم، أو شعرت بأن إحدى أسنانك الدائمة بدأت تتحرّك، فاطلب موعدًا عاجلًا لدى طبيب الأسنان.',
              'لحجز موعد لفحص اللثة في مركز مزايا لطب الأسنان في مدينة عيسى، البحرين، اتصل على الرقم ‎+973 1777 7234‎. واذكر عند الاتصال ما إذا كان النزيف يأتي من موضع واحد أو أكثر، وما إذا كنت تعاني من تورّم أو تخلخل في إحدى الأسنان.',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'post-wisdom-tooth-pain-comes-and-goes',
    slug: 'why-wisdom-tooth-pain-comes-and-goes',
    category: 'Dental Health',
    categoryAr: 'صحة الأسنان',
    tags: ['Wisdom Teeth', 'Wisdom Tooth Pain', 'Pericoronitis', 'Gum Health'],
    date: '2026-11-27',
    author: 'Mazaya Dental Specialists',
    authorAr: 'أخصائيو مركز مزايا لطب الأسنان',
    readTimeEn: '4 min read',
    readTimeAr: '4 دقائق قراءة',
    title: {
      en: 'Why Does My Wisdom Tooth Hurt for a Few Days, Then Stop?',
      ar: 'لماذا يؤلمني ضرس العقل لبضعة أيام ثم يزول الألم؟',
    },
    excerpt: {
      en: 'Wisdom tooth pain can ease for days, then return in the same spot. Learn why this happens, what a dentist can check after the pain stops, and when to seek urgent care.',
      ar: 'قد يخفّ ألم ضرس العقل لأيام ثم يعود في المكان نفسه. تعرّف على سبب تكرار الألم، وما الذي يمكن لطبيب الأسنان فحصه بعد زواله، ومتى تحتاج إلى رعاية عاجلة.',
    },
    seo: {
      keywords: [
        'wisdom tooth pain that comes and goes',
        'recurring wisdom tooth pain',
        'swollen gum behind last molar',
        'partially erupted wisdom tooth',
        'should I see a dentist if wisdom tooth pain stops',
        'ألم ضرس العقل الذي يختفي ثم يعود',
        'ألم ضرس العقل المتكرر',
        'تورّم اللثة خلف آخر ضرس',
        'ظهور ضرس العقل جزئيًا',
        'هل أراجع طبيب الأسنان إذا اختفى ألم ضرس العقل',
      ],
      metaDescriptionEn: 'Wisdom tooth pain can disappear and return weeks later. Learn why it happens, when to see a dentist, and when swelling needs urgent care.',
      metaDescriptionAr: 'قد يختفي ألم ضرس العقل ثم يعود بعد أسابيع. تعرّف على أسباب تكراره، ومتى تراجع طبيب الأسنان، وما العلامات التي تستدعي رعاية عاجلة.',
      seoTitleEn: 'Why Wisdom Tooth Pain Comes and Goes | Mazaya Dental Center',
      seoTitleAr: 'لماذا يختفي ألم ضرس العقل ثم يعود؟ | مركز مزايا لطب الأسنان',
      ogTitleEn: 'My Wisdom Tooth Stopped Hurting. Should I Keep My Dental Appointment?',
      ogTitleAr: 'اختفى ألم ضرس العقل. هل أذهب إلى موعد طبيب الأسنان؟',
      ogDescriptionEn: 'The pain has gone, but it’s the third time the same spot has hurt. Here’s what a dentist can check between flare-ups and which symptoms need urgent care.',
      ogDescriptionAr: 'زال الألم، لكنها المرة الثالثة التي يؤلمك فيها الموضع نفسه. تعرّف على ما يفحصه طبيب الأسنان بين نوبات الألم، والأعراض التي تستدعي رعاية عاجلة.',
    },
    content: {
      en: {
        sections: [
          {
            paragraphs: [
              'An oral health guide from Mazaya Dental Center in Isa Town, Bahrain.',
              'The gum behind your last tooth feels sore every time you chew. A few days later, you can eat comfortably again. Then, weeks later, the pain returns in exactly the same spot. Why does this happen, and is it worth seeing a dentist once the pain has gone?',
              'If the pain keeps coming back, book a dental assessment. One possible cause is inflammation around a wisdom tooth that has only partly come through the gum. The tenderness can settle between episodes, even while the area remains difficult to clean.',
            ],
          },
          {
            heading: 'Why does wisdom tooth pain come and go?',
            paragraphs: [
              'Imagine trying to brush a back tooth when a small flap of gum still covers one corner. The bristles reach the exposed part of the tooth, but food and plaque can collect beneath the flap. When the gum around a partly erupted tooth becomes inflamed, dentists call it pericoronitis. You may notice tenderness behind your last molar, swelling, or an unpleasant taste.',
              'As the inflammation settles, chewing can feel comfortable again. If the flap remains, debris can collect in the same place and the soreness can return. There are other possible explanations, too. A cavity in the wisdom tooth or the molar in front of it can cause pain in the same area.',
            ],
          },
          {
            heading: 'Should I keep my appointment if the pain has stopped?',
            paragraphs: [
              'Yes. Even on a pain-free day, a dentist can examine the gum, check how much of the wisdom tooth has come through, and look at the neighbouring molar. If an X-ray would help explain the symptoms, it can show how the wisdom tooth sits beneath the gum.',
              'It helps to describe the episode in your own words. For example, “This is the third time the gum behind my lower left molar has swollen. Last time, it hurt to open my mouth.” Tell the dentist how long each episode lasted and whether you noticed swelling, a bad taste, or difficulty opening your mouth.',
            ],
          },
          {
            heading: 'Will my wisdom tooth need to be removed?',
            paragraphs: [
              'That depends on what the dentist finds. After a first mild episode, cleaning around the tooth and learning how to reach the area at home may be enough. If the same tooth causes repeated flare-ups, or if the neighbouring molar shows signs of damage, your dentist may discuss removal.',
              'A useful question to ask is, “If we monitor this tooth, what changes should bring me back?” That gives you a plan for what to do if the soreness returns.',
            ],
          },
          {
            heading: 'What should I do during a flare-up?',
            paragraphs: [
              'For mild soreness, gently clean around the tooth with a small, soft toothbrush. A warm salt-water rinse may help ease discomfort while you arrange a dental visit.',
              'Seek urgent dental care if the swelling is increasing, you develop a fever, or it becomes difficult to open your mouth. If swelling makes it difficult to breathe or swallow, seek emergency medical care immediately.',
              'If pain keeps returning behind your last molar, you can arrange an assessment at Mazaya Dental Center in Isa Town, Bahrain. Call +973 1777 7234 and tell the team which side hurts and whether you have any swelling today.',
            ],
          },
        ],
      },
      ar: {
        sections: [
          {
            paragraphs: [
              'دليل لصحة الفم من مركز مزايا لطب الأسنان في مدينة عيسى، البحرين.',
              'تؤلمك اللثة خلف آخر ضرس كلما مضغت الطعام. وبعد بضعة أيام، تعود إلى الأكل براحة. ثم تمرّ أسابيع ويعود الألم في الموضع نفسه تمامًا. لماذا يحدث ذلك؟ وهل ما زالت زيارة طبيب الأسنان مفيدة بعد زوال الألم؟',
              'إذا تكرّر الألم، فاحجز موعدًا لفحص المنطقة. أحد الأسباب المحتملة هو التهاب اللثة المحيطة بضرس عقل لم يظهر منه سوى جزء صغير. قد يهدأ الألم بين نوبة وأخرى، حتى لو ظلّ تنظيف المنطقة صعبًا.',
            ],
          },
          {
            heading: 'لماذا يختفي ألم ضرس العقل ثم يعود؟',
            paragraphs: [
              'تخيّل أنك تحاول تنظيف ضرس خلفي بالفرشاة، بينما لا يزال جزء صغير من اللثة يغطّي أحد أطرافه. تصل شعيرات الفرشاة إلى الجزء الظاهر من الضرس، لكن بقايا الطعام وطبقة البلاك قد تتجمّع تحت اللثة التي تغطّيه. وعندما تلتهب اللثة المحيطة بضرس ظهر جزئيًا، يسمّي أطباء الأسنان هذه الحالة «التهاب ما حول تاج الضرس». قد تشعر بألم عند لمس اللثة خلف آخر ضرس، أو تلاحظ تورّمًا أو طعمًا غير مستحب في الفم.',
              'عندما يهدأ الالتهاب، قد تتمكّن من المضغ براحة من جديد. وإذا بقي جزء من اللثة يغطّي الضرس، فقد تتجمّع بقايا الطعام في المكان نفسه ويعود الألم. وهناك أسباب محتملة أخرى، منها وجود تسوّس في ضرس العقل أو في الضرس الذي أمامه مباشرة، إذ قد تشعر بالألم في المنطقة نفسها.',
            ],
          },
          {
            heading: 'هل أذهب إلى موعد طبيب الأسنان حتى لو زال الألم؟',
            paragraphs: [
              'نعم. حتى في يوم لا تشعر فيه بالألم، يستطيع الطبيب فحص اللثة، ومعرفة مقدار ما ظهر من ضرس العقل، وفحص الضرس المجاور. وإذا احتاج إلى صورة أشعة لتفسير الأعراض، فقد تساعده على معرفة وضع ضرس العقل تحت اللثة.',
              'من المفيد أن تصف ما حدث بكلماتك. يمكنك أن تقول مثلًا: «هذه ثالث مرة تتورّم فيها اللثة خلف آخر ضرس في الجهة اليسرى من الفك السفلي. وفي المرة الماضية، كنت أشعر بالألم عندما أفتح فمي». أخبر الطبيب بالمدة التي استمرّت فيها كل نوبة، وما إذا لاحظت تورّمًا أو طعمًا غير مستحب أو صعوبة في فتح الفم.',
            ],
          },
          {
            heading: 'هل سأحتاج إلى خلع ضرس العقل؟',
            paragraphs: [
              'يعتمد ذلك على ما يتبيّن للطبيب أثناء الفحص. إذا كانت هذه أول نوبة وكانت خفيفة، فقد يكفي أن ينظّف الطبيب المنطقة المحيطة بالضرس ويوضّح لك كيف تصل إليها بالفرشاة في المنزل. وإذا تكرّر الالتهاب حول الضرس نفسه، أو ظهرت علامات تضرّر الضرس المجاور، فقد يناقش معك خيار الخلع.',
              'يمكنك أن تسأل طبيبك: «إذا قرّرنا الاكتفاء بمتابعة الضرس، فما التغيّرات التي تستدعي أن أعود للفحص؟» هكذا تعرف كيف تتصرّف إذا عاد الألم.',
            ],
          },
          {
            heading: 'ماذا أفعل عندما يعود الألم؟',
            paragraphs: [
              'إذا كان الألم خفيفًا، فنظّف المنطقة المحيطة بالضرس برفق باستخدام فرشاة أسنان صغيرة وناعمة. وقد تساعد المضمضة بالماء الدافئ والملح على تخفيف الانزعاج إلى حين مراجعة طبيب الأسنان.',
              'اطلب رعاية عاجلة لدى طبيب الأسنان إذا ازداد التورّم، أو ظهرت حمّى، أو أصبح فتح الفم صعبًا. إذا سبّب التورّم صعوبة في التنفّس أو البلع، فتوجّه إلى قسم الطوارئ فورًا.',
              'إذا تكرّر الألم خلف آخر ضرس، يمكنك حجز موعد للفحص في مركز مزايا لطب الأسنان في مدينة عيسى، البحرين. اتصل على الرقم ‎+973 1777 7234‎ وأخبر الفريق بالجهة التي تشعر فيها بالألم، وما إذا كان لديك تورّم اليوم.',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'post-teachers-students-discount',
    slug: 'teachers-university-students-dental-discount-bahrain',
    category: 'Offers & Prevention',
    tags: ['Student Discount', 'Teacher Discount', 'Dental Prevention', 'Isa Town', 'Bahrain Dentistry'],
    date: '2026-07-27',
    author: 'Mazaya Dental Specialists',
    readTimeEn: '5 min read',
    readTimeAr: '5 دقائق قراءة',
    title: {
      en: 'Exclusive 15% Discount on Dental Care for Teachers and University Students in Bahrain',
      ar: 'خصم خاص 15% للمعلمين وطلاب الجامعات في البحرين: العناية بصحة أسنانك بأفضل الأسعار',
    },
    excerpt: {
      en: 'Mazaya Dental Center in Isa Town is offering an exclusive 15% discount for educators and university students across comprehensive oral health and aesthetic dental services.',
      ar: 'يقدم مركز مزايا لطب الأسنان في مدينة عيسى خصماً خاصاً بنسبة 15% للمعلمين وطلاب الجامعات على كافة خدمات العناية بصحة الفم والأسنان.',
    },
    campaignInfo: {
      offerBadgeEn: 'Special Offer: 15% Off for Teachers & University Students',
      offerBadgeAr: 'خصم خاص 15% للمعلمين ولطلاب الجامعات',
      highlightsEn: [
        '15% discount on general, preventive, and cosmetic dental treatments',
        'Tailored appointment scheduling to fit academic timetables',
        'Modern digital dentistry equipment in Isa Town',
        'Experienced multi-specialty dental doctors'
      ],
      highlightsAr: [
        'خصم 15% على علاجات الأسنان العامة والوقائية والتجميلية',
        'مواعيد مريحة تتناسب مع الجداول الأكاديمية والجامعية',
        'أحدث التقنيات والأجهزة الرقمية في مدينة عيسى',
        'كادر طبي متخصص وذو خبرة عالية'
      ]
    },
    seo: {
      keywords: [
        'teacher dental discount Bahrain',
        'university student dental discount',
        'dentist Isa Town discount',
        'teeth cleaning offer Bahrain',
        'Mazaya dental center promotion'
      ],
      metaDescriptionEn: 'Educators and university students in Bahrain can now claim an exclusive 15% discount at Mazaya Dental Center in Isa Town. Book your consultation today!',
      metaDescriptionAr: 'استفد من خصم 15% المخصص للمعلمين وطلاب الجامعات في مركز مزايا لطب الأسنان بمدينة عيسى. احجز موعدك اليوم لرعاية أسنان متكاملة.'
    },
    content: {
      en: {
        sections: [
          {
            heading: 'Supporting Our Educators & Academic Community in Bahrain',
            paragraphs: [
              'Teachers and university students in Bahrain often have demanding schedules that leave little time for personal health and dental maintenance.',
              'To support our academic community, Mazaya Dental Center in Isa Town is offering an ongoing 15% discount on dental procedures for teachers, school educators, and university students across Bahrain.'
            ]
          },
          {
            heading: 'Why Regular Dental Care Matters for Students and Teachers',
            paragraphs: [
              'Academic stress, irregular meal schedules, and late-night study sessions with caffeinated beverages often increase the risk of tooth decay, gum inflammation, and enamel erosion. Routine dental visits prevent minor issues from becoming costly emergencies during exam periods or teaching terms.',
              'Key preventive services available under this campaign include:'
            ],
            bulletPoints: [
              'Comprehensive Dental Examinations & Digital X-rays: Catching cavities and alignment issues early.',
              'Professional Teeth Cleaning & Polishing: Removing stubborn plaque and stain buildup.',
              'Laser Teeth Whitening: Enhancing smile aesthetics for presentations and graduation events.',
              'Preventive Fluoride Treatments: Strengthening enamel against cavity-causing bacteria.'
            ]
          },
          {
            heading: 'How to Claim Your 15% Special Discount',
            paragraphs: [
              'Claiming your 15% discount at Mazaya Dental Center is simple and straightforward. When visiting our clinic located in Isa Town, simply present your valid university student ID card or teacher credential during check-in.',
              'Our medical receptionists will automatically apply the discount to your eligible consultation and treatment plans.'
            ]
          }
        ],
        faqs: [
          {
            question: 'Who qualifies for the 15% discount?',
            answer: 'All active school teachers, academic instructors, school educators, and enrolled university students in Bahrain qualify upon presenting a valid university or school ID.'
          }
        ]
      },
      ar: {
        sections: [
          {
            heading: 'دعم المعلمين والأسرة الأكاديمية في مملكة البحرين',
            paragraphs: [
              'يلعب المعلمون وطلاب الجامعات دوراً محورياً في بناء مستقبل مملكة البحرين. ومع ضغوط التدريس، الامتحانات، والساعات الطويلة في الدراسة، قد يقل الاهتمام بالصحة العامة وصحة الأسنان.',
              'تقديراً لهذه الجهود الأكاديمية، يسر مركز مزايا لطب الأسنان في مدينة عيسى الإعلان عن حملته الخاصة بتقديم خصم حصري بنسبة 15% للمعلمين وطلاب الكليات والجامعات على مختلف خدمات الأسنان.'
            ]
          },
          {
            heading: 'أهمية الرعاية الدورية لأسنان الطلاب والمعلمين',
            paragraphs: [
              'تؤدي فترات الامتحانات والدراسة المتواصلة إلى زيادة استهلاك المشروبات السكرية والمنبهات، مما قد يسبب تسوس الأسنان والتهابات اللثة. تساعد الزيارات الدورية في الوقاية من الآلام المفاجئة وتضمن ابتسامة مشرقة وصحية.'
            ]
          }
        ],
        faqs: [
          {
            question: 'من هم الفئات المستفيدة من خصم 15%؟',
            answer: 'جميع المعلمين، المعلمات، والمدرسين الأكاديميين، إضافة إلى طلاب الجامعات والكليات المقيدين في مملكة البحرين عند إبراز البطاقة التعريفية.'
          }
        ]
      }
    }
  },
  {
    id: 'post-root-canal-offer',
    slug: 'painless-root-canal-treatment-offer-bahrain-42bhd',
    category: 'Endodontics',
    tags: ['Root Canal', 'Endodontics', 'Tooth Pain Relief', 'Dental Offer', 'Isa Town', 'Bahrain'],
    date: '2026-07-27',
    author: 'Dr. Endodontic Specialists',
    readTimeEn: '6 min read',
    readTimeAr: '6 دقائق قراءة',
    title: {
      en: 'Painless Root Canal Treatment in Bahrain for Only 42 BHD: Save Your Natural Teeth',
      ar: 'علاج عصب الأسنان بدون ألم بـ 42 دينار فقط في البحرين: حفظ أسنانك الطبيعية',
    },
    excerpt: {
      en: 'Eliminate tooth pain and preserve your natural tooth with painless root canal therapy at Mazaya Dental Center for a special promotional price of 42 BHD.',
      ar: 'تخلص من ألام الأسنان الشديدة وحافظ على سنك الطبيعي مع علاج العصب بدون ألم في مركز مزايا لطب الأسنان بسعر خاص 42 دينار فقط.',
    },
    campaignInfo: {
      offerBadgeEn: 'Special Offer: Root Canal Treatment for 42 BHD Only',
      offerBadgeAr: 'عرض خاص: علاج عصب الأسنان بـ 42 دينار فقط',
      highlightsEn: [
        'Painless, high-precision endodontic therapy',
        'Preservation of your natural tooth structure',
        'Advanced rotary endodontic tech & digital imaging',
        'Special promotional rate: 42 BHD'
      ],
      highlightsAr: [
        'علاج عصب آمن وبدون ألم باستخدام أحدث التقنيات',
        'حفظ الأسنان الطبيعية وحمايتها من القلع',
        'جلسات مريحة وتقنيات رقمية متطورة',
        'سعر خاص ومناسب: 42 دينار فقط'
      ]
    },
    seo: {
      keywords: [
        'root canal offer Bahrain 42 BHD',
        'painless root canal Isa Town',
        'endodontist Bahrain cost',
        'tooth pain relief Bahrain',
        'Mazaya dental center root canal'
      ],
      metaDescriptionEn: 'Stop persistent tooth pain without tooth extraction. Mazaya Dental Center in Isa Town offers painless root canal treatment at a special rate of 42 BHD. Book now!',
      metaDescriptionAr: 'لا تدع ألم الأسنان يوقف ابتسامتك! احصل على علاج عصب الأسنان بدون ألم بـ 42 دينار فقط في مركز مزايا لطب الأسنان بمدينة عيسى.'
    },
    content: {
      en: {
        sections: [
          {
            heading: 'Don’t Let Severe Tooth Pain Ruin Your Smile',
            paragraphs: [
              'Severe, throbbing tooth pain is often a primary signal that the inner nerve or pulp of your tooth has become infected due to deep decay, cracks, or trauma.',
              'At Mazaya Dental Center in Isa Town, we believe that preserving your natural teeth is always superior to tooth extraction. To make specialized endodontic care accessible to everyone, we have launched a special root canal treatment offer for only 42 BHD.'
            ]
          }
        ],
        faqs: [
          {
            question: 'Is root canal treatment painful?',
            answer: 'No. With modern local anesthesia and digital tools, getting a root canal at Mazaya Dental Center feels very similar to receiving a standard dental filling.'
          }
        ]
      },
      ar: {
        sections: [
          {
            heading: 'لا تدع الألم يوقف ابتسامتك – حلول علاج العصب المتقدمة',
            paragraphs: [
              'يُعد ألم الأسنان الحاد من أشد الآلام التي تؤثر على جودة الحياة اليومية. وغالباً ما يكون هذا الألم ناتجاً عن التهاب أو تلف عصب السن بسبب التسوس العميق.',
              'في مركز مزايا لطب الأسنان بمدينة عيسى، نؤمن بأن الحفاظ على السن الطبيعي هو الخيار الأفضل دائماً.'
            ]
          }
        ],
        faqs: [
          {
            question: 'هل علاج عصب الأسنان مؤلم؟',
            answer: 'لا، بفضل تقنيات التخدير الحديثة والأجهزة المتقدمة، يتم العلاج بشكل مريح وبدون ألم يذكر.'
          }
        ]
      }
    }
  },
  {
    id: 'post-student-ortho-offer',
    slug: 'affordable-braces-students-bahrain-20bhd',
    category: 'Orthodontics',
    tags: ['Student Braces', 'Orthodontics', 'Teeth Alignment', 'Free Consultation', 'Isa Town', 'Bahrain'],
    date: '2026-07-27',
    author: 'Orthodontic Department',
    readTimeEn: '5 min read',
    readTimeAr: '5 دقائق قراءة',
    title: {
      en: 'Affordable Orthodontics for School & University Students in Bahrain Starting at 20 BHD',
      ar: 'تقويم أسنان لطلاب المدارس والجامعات بـ 20 دينار فقط في البحرين: ابتسامة مثالية وثقة تدوم',
    },
    excerpt: {
      en: 'Achieve a straight, healthy smile with student-friendly orthodontic packages starting at just 20 BHD at Mazaya Dental Center in Isa Town, Bahrain.',
      ar: 'احصل على تقويم أسنان لطلاب المدارس والجامعات بـ 20 دينار فقط مع متابعة دورية واستشارة مجانية في مركز مزايا لطب الأسنان بمدينة عيسى.',
    },
    campaignInfo: {
      offerBadgeEn: 'Student Offer: Orthodontics Packages Starting at 20 BHD',
      offerBadgeAr: 'عرض الطلاب: تقويم أسنان ابتداءً من 20 دينار فقط',
      highlightsEn: [
        'Special student rates starting at 20 BHD',
        'Free initial orthodontic consultation & assessment',
        'Guaranteed alignment results with regular checkups',
        'Flexible internal financing & monthly installment plans'
      ],
      highlightsAr: [
        'أسعار خاصة ومناسبة لطلاب المدارس والجامعات بـ 20 دينار فقط',
        'استشارة أولية مجانية وتقييم شامل للابتسامة',
        'نتائج مضمونة ومتابعة دورية مع أخصائيي التقويم',
        'خطط تقسيط ميسرة داخل المركز'
      ]
    },
    seo: {
      keywords: [
        'student braces Bahrain 20 BHD',
        'affordable orthodontics Isa Town',
        'braces offer for university students',
        'free orthodontic consultation Bahrain'
      ],
      metaDescriptionEn: 'Give your child or yourself a confident smile! Mazaya Dental Center offers student braces packages starting at 20 BHD with free consultations. Book now in Isa Town.',
      metaDescriptionAr: 'ابتسامة صحية وثقة تدوم! احصل على تقويم الأسنان لطلاب المدارس والجامعات بـ 20 دينار فقط واستشارة مجانية في مركز مزايا بمدينة عيسى.'
    },
    content: {
      en: {
        sections: [
          {
            heading: 'Invest in a Lifetime of Smile Confidence',
            paragraphs: [
              'A properly aligned smile does far more than improve facial aesthetics—it corrects bite discrepancies, prevents premature tooth wear, reduces speech impediments, and eases oral hygiene maintenance.',
              'Understanding that orthodontic treatment is a significant goal for school students and university youths, Mazaya Dental Center in Isa Town has launched an accessible student package starting at only 20 BHD with a free initial orthodontic consultation.'
            ]
          }
        ],
        faqs: [
          {
            question: 'Who is eligible for the 20 BHD student offer?',
            answer: 'School students, teenagers, and enrolled university students qualify for our dedicated student orthodontic rate.'
          }
        ]
      },
      ar: {
        sections: [
          {
            heading: 'استثمر في ابتسامة صحية وثقة تدوم طوال العمر',
            paragraphs: [
              'لا يقتصر تقويم الأسنان على تحسين المظهر التجميل للوجه فقط، بل يصحح مشاكل الإطباق، يمنع تآكل الأسنان، ويسهل تنظيفها وحمايتها من التسوس.',
              'وحرصاً منا على دعم الطلاب والشباب في مملكة البحرين، يقدم مركز مزايا لطب الأسنان بمدينة عيسى باقة تقويم الأسنان المخصصة لطلاب المدارس والجامعات بـ 20 دينار فقط مع استشارة أولية مجانية.'
            ]
          }
        ],
        faqs: [
          {
            question: 'هل يشمل عرض 20 دينار الاستشارة الأولى؟',
            answer: 'نعم، كشف واستشارة التقويم مجانية بالكامل لجميع الطلاب المتقدمين للعرض.'
          }
        ]
      }
    }
  },
  {
    id: 'post-clear-aligners-offer',
    slug: 'clear-aligners-invisible-braces-bahrain-free-consultation',
    category: 'Cosmetic Dentistry',
    tags: ['Clear Aligners', 'Invisible Braces', 'Invisalign Alternative', 'Free Consultation', 'Isa Town', 'Bahrain'],
    date: '2026-07-27',
    author: 'Cosmetic & Orthodontic Team',
    readTimeEn: '6 min read',
    readTimeAr: '6 دقائق قراءة',
    title: {
      en: 'Straighten Your Teeth Without Metal Braces: Clear Aligners in Bahrain with Free Consultation',
      ar: 'احصل على التقويم الشفاف وابتسامة مثالية بدون أسلاك في البحرين: استشارة مجانية',
    },
    excerpt: {
      en: 'Correct teeth alignment without visible wires using custom clear aligners at Mazaya Dental Center in Isa Town. Book your free consultation today.',
      ar: 'انتقل إلى التقويم الشفاف المريح بدون أسلاك أو معدن مع استشارة مجانية وأحدث التقنيات الرقمية في مركز مزايا لطب الأسنان بمدينة عيسى.',
    },
    campaignInfo: {
      offerBadgeEn: 'Campaign Offer: Free Clear Aligners Consultation',
      offerBadgeAr: 'حملة التقويم الشفاف: استشارة مجانية بالكامل',
      highlightsEn: [
        '100% Nearly invisible, removable aligner trays',
        'No metal wires, brackets, or food restrictions',
        '3D Digital intraoral scanning & smile simulation',
        'Free comprehensive initial consultation in Isa Town'
      ],
      highlightsAr: [
        'تقويم شفاف غير مرئي ومريح وقابل للإزالة',
        'ابتسامة مثالية بدون أسلاك معدنية أو قيود على الأكل',
        'مسح رقمي ثلاثي الأبعاد وتقنيات محاكاة الابتسامة',
        'استشارة أولية مجانية بمركزنا في مدينة عيسى'
      ]
    },
    seo: {
      keywords: [
        'clear aligners Bahrain free consultation',
        'invisible braces Isa Town',
        'Invisalign alternative Bahrain cost',
        'aesthetic smile aligners'
      ],
      metaDescriptionEn: 'Upgrade to nearly invisible clear aligners! Mazaya Dental Center offers discrete teeth straightening with a FREE consultation in Isa Town, Bahrain. Book online today.',
      metaDescriptionAr: 'حان وقت الانتقال للتقويم الشفاف! ابتسامة أجمل بثقة أكبر بدون أسلاك معدنية. احصل على استشارة مجانية في مركز مزايا بمدينة عيسى.'
    },
    content: {
      en: {
        sections: [
          {
            heading: 'It’s Time to Switch to Clear Aligners for a Wire-Free Smile',
            paragraphs: [
              'Want straighter teeth without the look and feel of traditional metal braces? Clear aligners offer a practical, nearly invisible alternative that fits into daily life.',
              'At Mazaya Dental Center in Isa Town, patients can learn about clear aligners through a free initial consultation as part of our current campaign.'
            ]
          }
        ],
        faqs: [
          {
            question: 'How many hours a day should I wear clear aligners?',
            answer: 'For optimal results, clear aligner trays should be worn for 20 to 22 hours per day, removing them only for eating and oral hygiene.'
          }
        ]
      },
      ar: {
        sections: [
          {
            heading: 'حان وقت الانتقال للتقويم الشفاف – ابتسامة أجمل بثقة أكبر',
            paragraphs: [
              'هل تحلم بالحصول على أسنان متناسقة ومستقيمة بدون مظهر الأسلاك المعدنية أو القيود على تناول الأطعمة المفضلة لديك؟ يُعد التقويم الشفاف الخيار العصري الأحدث في عالم تجميل وتقويم الأسنان.',
              'في مركز مزايا لطب الأسنان بمدينة عيسى، ندعوك لاكتشاف مزايا التقويم الشفاف المريح من خلال حملتنا الخاصة بتقديم استشارة مجانية بالكامل.'
            ]
          }
        ],
        faqs: [
          {
            question: 'كم ساعة يجب ارتداء التقويم الشفاف يومياً؟',
            answer: 'يُنصح بارتداء قوالب التقويم الشفاف لمدة 20 إلى 22 ساعة يومياً للحصول على أفضل النتائج، وإزالتها عند الأكل وتنظيف الأسنان فقط.'
          }
        ]
      }
    }
  },
  {
    id: 'post-oneday-dentistry',
    slug: 'one-day-dentistry-same-day-crowns-bahrain',
    category: 'Digital Dentistry',
    tags: ['One Day Dentistry', 'Same Day Crowns', 'CAD CAM Dentistry', 'Isa Town', 'Bahrain'],
    date: '2026-07-25',
    author: 'Prosthodontics Specialist',
    readTimeEn: '5 min read',
    readTimeAr: '5 دقائق قراءة',
    title: {
      en: 'One-Day Dentistry in Bahrain: Get Same-Day Crowns & Restorations in a Single Visit',
      ar: 'طب الأسنان في يوم واحد في البحرين: احصل على التاج والجسور في زيارة واحدة فقط',
    },
    excerpt: {
      en: 'No more temporary crowns or multiple visits. Get permanent, high-precision ceramic crowns and bridges in just one appointment at Mazaya Dental Center.',
      ar: 'اكتشف ثورة طب الأسنان الرقمي في مركز مزايا بمدينة عيسى. احصل على تيجان وجسور أسنان دائمة وعالية الدقة في زيارة واحدة فقط بدون انتظار.',
    },
    seo: {
      keywords: ['one day dentistry Bahrain', 'same day crowns Isa Town', 'CEREC crowns Bahrain', 'digital dentistry Bahrain'],
      metaDescriptionEn: 'No temporary crowns or weeks of waiting! Mazaya Dental Center provides same-day ceramic crowns & restorations in a single visit using CAD/CAM digital technology.',
      metaDescriptionAr: 'بدون مقاسات تقليدية أو انتظار أسابيع! احصل على تركيبات وتيجان الأسنان في زيارة واحدة باستخدام التقنيات الرقمية بمركز مزايا لطب الأسنان.'
    },
    content: {
      en: {
        sections: [
          {
            heading: 'Revolutionary Digital Dentistry in Isa Town, Bahrain',
            paragraphs: [
              'Traditional dental crown procedures often required multiple clinical visits, uncomfortable putty impressions, and wearing fragile temporary crowns for weeks while waiting for an off-site laboratory.',
              'At Mazaya Dental Center in Isa Town, we offer One-Day Dentistry using advanced 3D digital intraoral scanners and CAD/CAM milling units. We design, mill, and place permanent high-strength ceramic crowns in a single visit.'
            ]
          }
        ]
      },
      ar: {
        sections: [
          {
            heading: 'ثورة طب الأسنان الرقمي في مدينة عيسى، البحرين',
            paragraphs: [
              'كانت تركيبات الأسنان التقليدية تتطلب زيارات متعددة وأخذ مقاسات مزعجة وانتظار أسابيع في ظل تركيبات مؤقتة.',
              'أما اليوم في مركز مزايا لطب الأسنان بمدينة عيسى، نقدم خدمة طب الأسنان في يوم واحد، حيث يتم تصنيع وتركيب التيجان والجسور السيراميكية الدائمة بدقة فائقة خلال جلسة واحدة فقط.'
            ]
          }
        ]
      }
    }
  },
  {
    id: 'post-dental-implants',
    slug: 'dental-implants-guide-bahrain',
    category: 'Implantology',
    tags: ['Dental Implants', 'Implantology', 'Tooth Replacement', 'Isa Town', 'Bahrain'],
    date: '2026-07-24',
    author: 'Implantology Specialists',
    readTimeEn: '6 min read',
    readTimeAr: '6 دقائق قراءة',
    title: {
      en: 'Complete Guide to Dental Implants in Bahrain: Permanent Restoration for Missing Teeth',
      ar: 'الدليل الشامل لزراعة الأسنان في البحرين: الحل الدائم والفعال لاستعادة الأسنان المفقودة',
    },
    excerpt: {
      en: 'Restore your natural smile aesthetics and chewing capability with durable, biocompatible dental implants placed by international experts at Mazaya Dental Center.',
      ar: 'استعد قدرتك الطبيعية على الأكل والابتسام مع زراعة الأسنان المتينة والآمنة تحت إشراف أخصائيين دوليين في مركز مزايا لطب الأسنان.',
    },
    seo: {
      keywords: ['dental implants Bahrain', 'implantology Isa Town', 'missing tooth replacement', 'best implant dentist Bahrain'],
      metaDescriptionEn: 'Missing one or more teeth? Discover how modern dental implants at Mazaya Dental Center provide a permanent, natural-looking solution for smile restoration.',
      metaDescriptionAr: 'تعرف على خيارات زراعة الأسنان المتقدمة والحلول المتكاملة لاستبدال الأسنان المفقودة بمركز مزايا لطب الأسنان بمدينة عيسى.'
    },
    content: {
      en: {
        sections: [
          {
            heading: 'Why Dental Implants Are the Preferred Choice for Tooth Replacement',
            paragraphs: [
              'Missing teeth can cause difficulty in chewing, speech slurring, loss of jawbone volume, and facial sagging. Dental implants act as artificial titanium tooth roots that integrate permanently with your jawbone.',
              'Whether you need a single implant or full-mouth reconstruction (All-on-4 / All-on-6), Mazaya Dental Center provides computer-guided implant surgery with maximum precision and comfort.'
            ]
          }
        ]
      },
      ar: {
        sections: [
          {
            heading: 'لماذا تُعد زراعة الأسنان الخيار الأفضل لاستبدال الأسنان المفقودة؟',
            paragraphs: [
              'تؤثر الأسنان المفقودة على المضغ والنطق وتسبب تراجع عظام الفك. تُعد زراعة الأسنان الحل الدائم والأقرب للأسنان الطبيعية من حيث القوة والمظهر.',
              'يقدم مركز مزايا بمدينة عيسى أحدث تقنيات زراعة الأسنان الموجهة بالحاسوب لضمان أعلى نسب النجاح وأسرع فترة تعافي.'
            ]
          }
        ]
      }
    }
  },
  {
    id: 'post-teeth-whitening',
    slug: 'laser-teeth-whitening-hollywood-smile-bahrain',
    category: 'Cosmetic Dentistry',
    tags: ['Teeth Whitening', 'Hollywood Smile', 'Laser Whitening', 'Cosmetic Dentistry', 'Bahrain'],
    date: '2026-07-22',
    author: 'Cosmetic Dental Team',
    readTimeEn: '4 min read',
    readTimeAr: '4 دقائق قراءة',
    title: {
      en: 'Brighten Your Smile Fast: Laser Teeth Whitening & Hollywood Smile Solutions in Bahrain',
      ar: 'احصل على ابتسامة هوليوود وتبييض الأسنان بالليزر في زيارة واحدة بمركز مزايا في البحرين',
    },
    excerpt: {
      en: 'Remove years of coffee, tea, and tobacco stains safely with advanced laser teeth whitening treatments at Mazaya Dental Center in Isa Town.',
      ar: 'تخلص من بقع القهوة والتصبغات بأمان مع جلسات تبييض الأسنان بالليزر وابتسامة هوليوود المتميزة بمركز مزايا لطب الأسنان.',
    },
    seo: {
      keywords: ['teeth whitening Bahrain', 'laser teeth whitening Isa Town', 'Hollywood smile Bahrain', 'cosmetic dentist Bahrain'],
      metaDescriptionEn: 'Achieve a radiant, stain-free white smile safely. Mazaya Dental Center in Isa Town offers fast, effective laser teeth whitening & custom veneers.',
      metaDescriptionAr: 'استعد بياض أسنانك الناصع في جلسة واحدة مع تبييض الأسنان بالليزر وخدمات التجميل المتقدمة في مركز مزايا بمدينة عيسى.'
    },
    content: {
      en: {
        sections: [
          {
            heading: 'Safe & Effective Laser Smile Brightening in Isa Town',
            paragraphs: [
              'Dietary habits, coffee, tea, and natural aging can cause teeth to lose their bright luster. Professional laser teeth whitening safely penetrates enamel to break down stubborn discoloration without causing tooth sensitivity.',
              'Book your teeth whitening appointment today at Mazaya Dental Center in Isa Town to achieve up to 8 shades whiter teeth in under an hour.'
            ]
          }
        ]
      },
      ar: {
        sections: [
          {
            heading: 'تبييض الأسنان الآمن والفعال بالليزر في مدينة عيسى',
            paragraphs: [
              'تسبب المشروبات والتصبغات فقدان الأسنان لبياضها الناصع. يعمل التبييض الطبي بالليزر على إزالة التصبغات بأمان وبدون التسبب في حساسية الأسنان.',
              'احجز موعد تبييض الأسنان اليوم بمركز مزايا بمدينة عيسى للحصول على أسنان أكثر بياضاً بنحو 8 درجات خلال جلسة واحدة.'
            ]
          }
        ]
      }
    }
  },
  {
    id: 'post-pediatric-dentistry',
    slug: 'pediatric-dental-care-children-tips-bahrain',
    category: 'Pediatric Dentistry',
    tags: ['Pediatric Dentist', 'Children Dental Care', 'Fluoride Treatment', 'Isa Town', 'Bahrain'],
    date: '2026-07-20',
    author: 'Pediatric Specialist Team',
    readTimeEn: '5 min read',
    readTimeAr: '5 دقائق قراءة',
    title: {
      en: 'Gentle Pediatric Dentistry in Bahrain: Caring for Your Child’s Smile from an Early Age',
      ar: 'طب أسنان الأطفال بلمسة حانية في البحرين: العناية بابتسامة طفلك منذ الصغر',
    },
    excerpt: {
      en: 'Make dental visits positive for your kids. Mazaya Dental Center in Isa Town provides gentle pediatric oral care and preventive treatments in a child-friendly environment.',
      ar: 'تجربة ممتعة وبدون خوف لأطفالك في عيادة أسنان الأطفال بمركز مزايا بمدينة عيسى. رعاية وقائية وترميمية متخصصة لابتسامة صحية.',
    },
    seo: {
      keywords: ['pediatric dentist Bahrain', 'children dental clinic Isa Town', 'kids teeth cleaning Bahrain', 'fluoride sealants kids'],
      metaDescriptionEn: 'Provide your children with comfortable, relaxed dental visits. Mazaya Dental Center in Isa Town offers pediatric dental checkups, sealants, & cavity care.',
      metaDescriptionAr: 'رعاية أسنان الأطفال الشاملة والمتخصصة في بيئة مريحة وودودة بمركز مزايا لطب الأسنان بمدينة عيسى.'
    },
    content: {
      en: {
        sections: [
          {
            heading: 'Keeping Children\'s Teeth Healthy from an Early Age',
            paragraphs: [
              'Early dental care prevents childhood tooth decay, maintains space for permanent teeth, and helps children grow comfortable with regular dental visits.',
              'Our pediatric dentists create a calm, welcoming environment with preventive treatments such as dental sealants, fluoride varnishes, and gentle tooth restorations.'
            ]
          }
        ]
      },
      ar: {
        sections: [
          {
            heading: 'بناء عادات صحية للفم والأسنان لدى الأطفال منذ الصغر',
            paragraphs: [
              'تساعد الرعاية المبكرة لأسنان الأطفال في الوقاية من التسوس وحفظ المساحات الطبيعية للأسنان الدائمة.',
              'يتميز أطباء أسنان الأطفال بمركز مزايا بتقديم رعاية حانية وتطبيق علاجات وقائية كطلاء الفلورايد وسد الحفر لضمان حماية أسنان طفلك.'
            ]
          }
        ]
      }
    }
  }
];

export function getLocalBlogPostBySlug(slug: string): LocalBlogPost | undefined {
  return LOCAL_BLOG_POSTS.find(post => post.slug === slug);
}
