export type ServiceCopy = {
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  heroSupport: string;
  heroImageAlt: string;
  whatTitle: string;
  whatBody: string;
  whatPoints: string[];
  diagramLabel: string;
  whyTitle: string;
  whyPoints: string[];
  benefitsTitle: string;
  benefits: { title: string; text: string }[];
  suitableTitle: string;
  suitableBody: string;
  suitableClose: string;
  suitableImageAlt: string;
  approachTitle: string;
  approachIntro: string;
  approachPoints: string[];
  safetyTitle: string;
  safetyText: string;
  philosophyTitle: string;
  philosophyText: string;
  ctaTitle: string;
  ctaText: string;
  faqs: { question: string; answer: string }[];
};

export type ServicePageContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  detailImage: string;
  en: ServiceCopy;
  ar: ServiceCopy;
};

export const serviceChrome = {
  en: {
    consultCta: "Book a consultation",
    bookCta: "Book an appointment",
    callWord: "Call",
    phoneDisplay: "+973 1777 7234",
    faqTitle: "Frequently Asked Questions",
    locationTitle: "Our Location and Parking",
    locationAddress: "Building 515, Road 1332, Block 813, Isa Town, Bahrain.",
    locationNote:
      "The clinic entrance is on Road 1332. When you book, the team will confirm how to find the building.",
    formTitle: "Book an Appointment",
    formIntroBefore: "Call us on",
    formIntroAfter: "or send a message and we will get back to you.",
    name: "Name",
    email: "Email",
    phone: "Phone number",
    message: "Message",
    send: "Send",
    sent: "Thank you. We will contact you shortly.",
    disclaimer:
      "The content on this page is general in nature and is not medical advice. Results, risks and recovery vary for each patient. Seek advice from a qualified dental practitioner.",
  },
  ar: {
    consultCta: "احجز استشارة",
    bookCta: "احجز موعداً",
    callWord: "اتصل",
    phoneDisplay: "+973 1777 7234",
    faqTitle: "الأسئلة الشائعة",
    locationTitle: "موقعنا والوصول",
    locationAddress: "مبنى 515، طريق 1332، مجمع 813، مدينة عيسى، البحرين.",
    locationNote: "مدخل المركز على طريق 1332. عند الحجز يؤكد الفريق طريقة الوصول إلى المبنى.",
    formTitle: "احجز موعداً",
    formIntroBefore: "اتصل بنا على",
    formIntroAfter: "أو أرسل رسالة وسنعود إليك.",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    message: "الرسالة",
    send: "إرسال",
    sent: "شكراً لك. سنتواصل معك قريباً.",
    disclaimer:
      "محتوى هذه الصفحة عام وليس استشارة طبية. تختلف النتائج والمخاطر وفترة التعافي من مريض لآخر. استشر طبيب أسنان مؤهلاً.",
  },
};

export const servicePages: ServicePageContent[] = [
  {
    slug: "orthodontics",
    metaTitle: "Orthodontics in Isa Town",
    metaDescription:
      "Braces and clear aligners at Mazaya Dental Center in Isa Town, Bahrain. A planned approach to straighter teeth and a more comfortable bite.",
    heroImage: "/DSC02180.webp",
    detailImage: "/DSC02182.webp",
    en: {
      eyebrow: "Orthodontics",
      heroTitle: "A Clearer Path to a Straighter Smile",
      heroLead:
        "At Mazaya Dental Center, orthodontic care is planned around how your teeth meet, not only how they look. In Isa Town we assess crowding, spacing and bite before recommending braces or clear aligners.",
      heroSupport:
        "Treatment is paced so you know what each visit is for, and what to expect between appointments.",
      heroImageAlt: "Treatment room at Mazaya Dental Center with a digital X-ray display",
      whatTitle: "What Is Orthodontic Treatment?",
      whatBody:
        "Orthodontics moves teeth gradually into a healthier position using braces or a series of clear aligners. The aim is a bite that is easier to clean and more comfortable to use, with a smile that looks natural.",
      whatPoints: [
        "Addresses crowding, spacing and bite",
        "Options include metal braces, ceramic braces and clear aligners",
        "Retainers help hold the result afterwards",
        "Suitable for teens and adults after assessment",
      ],
      diagramLabel: "Alignment: teeth, wire and retainer",
      whyTitle: "Why Patients Choose Orthodontics",
      whyPoints: [
        "Your teeth are crowded, spaced or overlapping",
        "Your bite feels uneven when you chew",
        "You want a discreet option such as clear aligners",
        "A previous treatment has started to relapse",
      ],
      benefitsTitle: "Benefits of Orthodontic Care",
      benefits: [
        { title: "Alignment", text: "Guides teeth into a more even position." },
        { title: "Bite", text: "Can make chewing feel more balanced." },
        { title: "Cleaning", text: "Straighter teeth are often easier to brush and floss." },
        { title: "Appearance", text: "Planned to look natural with your own smile." },
      ],
      suitableTitle: "Is Orthodontic Treatment Suitable for Everyone?",
      suitableBody:
        "Many teens and adults can be treated, but the right option depends on the bite, gum health and how much movement is needed. Active gum disease is usually managed before teeth are moved.",
      suitableClose: "We assess your records first and explain which option fits, including if treatment should wait.",
      suitableImageAlt: "Dental surgery at Mazaya Dental Center",
      approachTitle: "Our Approach to Orthodontics",
      approachIntro: "Movement is planned, not guessed. Every patient receives:",
      approachPoints: [
        "Photos, scans or X-rays so the bite is clear before treatment",
        "A comparison of braces and aligners, with costs explained",
        "A visit plan you can follow around school or work",
        "Retainers and reviews after the active phase",
      ],
      safetyTitle: "Safety and Care",
      safetyText:
        "Teeth are only moved when the gums and supporting bone are healthy enough. You will be told how to clean around braces or aligners, and what mild discomfort after adjustments usually feels like.",
      philosophyTitle: "Our Philosophy",
      philosophyText:
        "A straighter smile should still feel like yours. We explain each step in plain language so you can choose braces or aligners with a clear picture of time, visits and care at home.",
      ctaTitle: "Book an Orthodontic Consultation",
      ctaText: "Find out whether braces or clear aligners are the right next step.",
      faqs: [
        {
          question: "How long does orthodontic treatment take?",
          answer:
            "Many cases take around 12 to 24 months. Crowding, bite and how consistently aligners are worn all change the timeline. You will be given an estimate after assessment.",
        },
        {
          question: "Do braces or aligners hurt?",
          answer:
            "Teeth often feel tender for a few days after fitting or an adjustment. It usually settles. Tell us if pain is sharp or if a bracket or aligner is rubbing.",
        },
        {
          question: "Can adults have braces?",
          answer:
            "Yes. Adult treatment is common, as long as the gums and bone are healthy. Clear aligners and ceramic braces are frequent choices when a lower-profile option is preferred.",
        },
        {
          question: "Will I need a retainer?",
          answer:
            "Yes. Teeth can drift after treatment. A retainer, worn as advised, is what helps the result stay in place.",
        },
        {
          question: "Can treatment fit around travel?",
          answer:
            "Often, yes. Aligners in particular can be planned around a stay in Bahrain. Contact us before you travel so records and visits can be arranged.",
        },
      ],
    },
    ar: {
      eyebrow: "تقويم الأسنان",
      heroTitle: "طريق أوضح نحو ابتسامة أكثر استقامة",
      heroLead:
        "في مركز مزايا لطب الأسنان نخطط لعلاج التقويم حسب طريقة التقاء الأسنان، وليس المظهر فقط. في مدينة عيسى نقيّم التزاحم والفراغات والإطباق قبل اقتراح التقويم أو المقومات الشفافة.",
      heroSupport: "يسير العلاج بخطوات واضحة، حتى تعرف هدف كل زيارة وما يمكن توقعه بينها.",
      heroImageAlt: "غرفة علاج في مركز مزايا مع شاشة أشعة رقمية",
      whatTitle: "ما هو علاج تقويم الأسنان؟",
      whatBody:
        "يحرّك التقويم الأسنان تدريجياً إلى موضع أصح باستخدام التقويم الثابت أو سلسلة من المقومات الشفافة. الهدف عضة أسهل في التنظيف وأكثر راحة، مع ابتسامة تبدو طبيعية.",
      whatPoints: [
        "يعالج التزاحم والفراغات ومشكلات الإطباق",
        "الخيارات تشمل التقويم المعدني والتجميلي والمقومات الشفافة",
        "المثبتات تساعد على الحفاظ على النتيجة بعد العلاج",
        "يناسب المراهقين والبالغين بعد التقييم",
      ],
      diagramLabel: "الاستقامة: الأسنان والسلك والمثبت",
      whyTitle: "لماذا يختار المرضى تقويم الأسنان",
      whyPoints: [
        "أسنانك متزاحمة أو متباعدة أو متراكبة",
        "العضة غير متوازنة أثناء المضغ",
        "تفضل خياراً أقل ظهوراً مثل المقومات الشفافة",
        "بدأت نتيجة علاج سابق في التراجع",
      ],
      benefitsTitle: "فوائد العناية التقويمية",
      benefits: [
        { title: "الاصطفاف", text: "يوجّه الأسنان إلى موضع أكثر انتظاماً." },
        { title: "الإطباق", text: "قد يجعل المضغ أكثر توازناً." },
        { title: "التنظيف", text: "غالباً ما يسهل تنظيف الأسنان بعد استقامتها." },
        { title: "المظهر", text: "يُخطط ليبدو طبيعياً مع ابتسامتك." },
      ],
      suitableTitle: "هل يناسب التقويم الجميع؟",
      suitableBody:
        "يمكن علاج كثير من المراهقين والبالغين، لكن الخيار المناسب يعتمد على الإطباق وصحة اللثة ومقدار الحركة المطلوبة. تُعالج أمراض اللثة النشطة عادة قبل تحريك الأسنان.",
      suitableClose: "نراجع الصور والفحوصات أولاً ونوضح الخيار الأنسب، بما في ذلك إذا كان من الأفضل الانتظار.",
      suitableImageAlt: "عيادة علاج في مركز مزايا",
      approachTitle: "طريقتنا في تقويم الأسنان",
      approachIntro: "الحركة تُخطط ولا تُخمَّن. يحصل كل مريض على:",
      approachPoints: [
        "صور أو مسح أو أشعة حتى تتضح العضة قبل العلاج",
        "مقارنة بين التقويم والمقومات الشفافة مع شرح التكلفة",
        "جدول زيارات يناسب الدراسة أو العمل",
        "مثبتات ومراجعات بعد المرحلة النشطة",
      ],
      safetyTitle: "السلامة والعناية",
      safetyText:
        "لا تُحرَّك الأسنان إلا عندما تكون اللثة والعظم الداعم بصحة كافية. نشرح طريقة التنظيف حول التقويم أو المقومات، وماهية الانزعاج الخفيف المعتاد بعد التعديل.",
      philosophyTitle: "فلسفتنا",
      philosophyText:
        "ينبغي أن تبقى الابتسامة المستقيمة تشبهك. نشرح كل خطوة بلغة واضحة حتى تختار التقويم أو المقومات وأنت تعرف المدة والزيارات والعناية في المنزل.",
      ctaTitle: "احجز استشارة تقويم",
      ctaText: "اعرف ما إذا كان التقويم أو المقومات الشفافة هي الخطوة المناسبة.",
      faqs: [
        {
          question: "كم يستغرق علاج التقويم؟",
          answer:
            "كثير من الحالات تستغرق نحو 12 إلى 24 شهراً. يغيّر التزاحم والإطباق والالتزام بلبس المقومات المدة. تُعطى تقديرات بعد التقييم.",
        },
        {
          question: "هل التقويم مؤلم؟",
          answer:
            "غالباً تشعر الأسنان بإيلام لعدة أيام بعد التركيب أو التعديل، ثم يهدأ. أخبرنا إذا كان الألم حاداً أو إذا كان هناك احتكاك.",
        },
        {
          question: "هل يمكن للبالغين تركيب التقويم؟",
          answer:
            "نعم. علاج البالغين شائع إذا كانت اللثة والعظم سليمين. المقومات الشفافة والتقويم التجميلي خياران أقل ظهوراً.",
        },
        {
          question: "هل أحتاج إلى مثبت؟",
          answer: "نعم. قد تتحرك الأسنان بعد العلاج. المثبت، عند استخدامه حسب التعليمات، يساعد على بقاء النتيجة.",
        },
        {
          question: "هل يمكن ترتيب العلاج مع السفر؟",
          answer: "غالباً نعم، خصوصاً مع المقومات الشفافة. تواصل معنا قبل السفر لترتيب الصور والزيارات.",
        },
      ],
    },
  },
  {
    slug: "pedodontics",
    metaTitle: "Children's Dentistry in Isa Town",
    metaDescription:
      "Gentle dental care for children at Mazaya Dental Center in Isa Town, Bahrain. Check-ups, prevention and treatment explained for parents.",
    heroImage: "/DSC02187.webp",
    detailImage: "/DSC02149.webp",
    en: {
      eyebrow: "Children's dentistry",
      heroTitle: "Calm Dental Visits for Growing Smiles",
      heroLead:
        "Mazaya Dental Center cares for children in a way that keeps the visit understandable. In Isa Town, check-ups focus on prevention first, with treatment only when a tooth actually needs it.",
      heroSupport:
        "Parents stay part of the conversation, so you know what we saw and what to do at home.",
      heroImageAlt: "Children's treatment room at Mazaya Dental Center",
      whatTitle: "What Is Children's Dentistry?",
      whatBody:
        "Pedodontics is dental care planned for infants, children and teenagers. It covers check-ups, fluoride, sealants, fillings and advice on habits such as thumb sucking, while baby teeth are still guiding the adult ones.",
      whatPoints: [
        "Check-ups timed to a child's age",
        "Fluoride and sealants to lower cavity risk",
        "Gentle care if a baby tooth is decayed or injured",
        "Space care if a baby tooth is lost early",
      ],
      diagramLabel: "A baby tooth protecting the adult tooth beneath",
      whyTitle: "Why Parents Bring Their Children",
      whyPoints: [
        "It is time for a first dental visit",
        "A tooth is sensitive, dark or broken",
        "You want help with brushing and diet",
        "A habit such as thumb sucking is affecting the teeth",
      ],
      benefitsTitle: "Benefits of Early Dental Care",
      benefits: [
        { title: "Prevention", text: "Finds early changes before they become painful." },
        { title: "Comfort", text: "Short, explained visits help children feel safe." },
        { title: "Growth", text: "Watches how baby teeth guide adult teeth." },
        { title: "Habits", text: "Practical advice for home brushing and snacks." },
      ],
      suitableTitle: "When Should a Child Be Seen?",
      suitableBody:
        "A first visit is useful once teeth appear, and regular reviews help after that. The gap between visits depends on cavity risk, not a single rule for every child.",
      suitableClose: "If your child is anxious, tell us before the appointment so we can keep the first visit simple.",
      suitableImageAlt: "Reception at Mazaya Dental Center",
      approachTitle: "Our Approach to Children's Visits",
      approachIntro: "We keep the room calm and the explanation short. Every family receives:",
      approachPoints: [
        "A look at the teeth and gums in language a child can follow",
        "A clear note of what is healthy and what needs care",
        "Prevention first, with treatment options explained to parents",
        "Home advice on brushing, fluoride and snacks",
      ],
      safetyTitle: "Safety and Care",
      safetyText:
        "Treatment is matched to the tooth and the child's age. If a procedure needs local anaesthetic, we explain it before we begin. Baby teeth are kept whenever they can still do their job.",
      philosophyTitle: "Our Philosophy",
      philosophyText:
        "A child who understands the visit is more likely to come back willingly. We would rather do a little well than rush through a long list on a first appointment.",
      ctaTitle: "Book a Children's Check-up",
      ctaText: "A calm first visit is the easiest place to start.",
      faqs: [
        {
          question: "When should my child first see a dentist?",
          answer:
            "Once the first teeth are through is a sensible time, or earlier if you are worried. Regular reviews follow from there.",
        },
        {
          question: "Are baby teeth worth treating?",
          answer:
            "Yes. They hold space for adult teeth and matter for eating and speech. A decayed baby tooth can still cause pain and infection.",
        },
        {
          question: "What if my child is nervous?",
          answer:
            "Tell us when you book. We can start with a look around the room and a short check, and leave treatment for a visit when your child is ready.",
        },
        {
          question: "Do sealants replace brushing?",
          answer:
            "No. Sealants cover the grooves of some back teeth. Brushing, fluoride and a sensible diet still do most of the work.",
        },
        {
          question: "What should I do after a knock to a tooth?",
          answer:
            "Call us the same day. Keep any fully knocked-out adult tooth moist, and bring your child in so we can see the tooth and the lip or gum.",
        },
      ],
    },
    ar: {
      eyebrow: "طب أسنان الأطفال",
      heroTitle: "زيارات هادئة لابتسامة تنمو",
      heroLead:
        "يرعى مركز مزايا الأطفال بطريقة تجعل الزيارة مفهومة. في مدينة عيسى نبدأ بالوقاية، ولا نلجأ للعلاج إلا عندما يحتاج السن إليه فعلاً.",
      heroSupport: "يبقى الأهل جزءاً من الحديث، حتى تعرف ما رأيناه وما يمكن فعله في المنزل.",
      heroImageAlt: "غرفة علاج الأطفال في مركز مزايا",
      whatTitle: "ما هو طب أسنان الأطفال؟",
      whatBody:
        "هو رعاية مخططة للرضع والأطفال والمراهقين. يشمل الفحص والفلورايد والحشوات الوقائية والحشوات والنصيحة حول عادات مثل مص الإصبع، بينما توجه الأسنان اللبنية الأسنان الدائمة.",
      whatPoints: [
        "فحوصات تناسب عمر الطفل",
        "الفلورايد والحشوات الوقائية لتقليل التسوس",
        "عناية لطيفة إذا تسوس سن لبني أو تعرّض لإصابة",
        "الحفاظ على المسافة إذا فُقد سن لبني مبكراً",
      ],
      diagramLabel: "سن لبني يحمي السن الدائم تحته",
      whyTitle: "لماذا يحضر الأهل أطفالهم",
      whyPoints: [
        "حان موعد أول زيارة لطبيب الأسنان",
        "سن حسّاس أو داكن أو مكسور",
        "تحتاج إلى مساعدة في التفريش والغذاء",
        "عادة مثل مص الإصبع تؤثر على الأسنان",
      ],
      benefitsTitle: "فوائد العناية المبكرة",
      benefits: [
        { title: "الوقاية", text: "تكتشف التغيرات مبكراً قبل أن تصبح مؤلمة." },
        { title: "الراحة", text: "الزيارات القصيرة المفسَّرة تساعد الطفل على الشعور بالأمان." },
        { title: "النمو", text: "تتابع كيف توجه الأسنان اللبنية الأسنان الدائمة." },
        { title: "العادات", text: "نصيحة عملية للتفريش والوجبات في المنزل." },
      ],
      suitableTitle: "متى ينبغي فحص الطفل؟",
      suitableBody:
        "تكون الزيارة الأولى مفيدة بعد ظهور الأسنان، ثم تساعد المراجعات المنتظمة. الفترة بين الزيارات تعتمد على خطر التسوس، وليس قاعدة واحدة لكل طفل.",
      suitableClose: "إذا كان طفلك قلقاً، أخبرنا قبل الموعد حتى نبقي الزيارة الأولى بسيطة.",
      suitableImageAlt: "الاستقبال في مركز مزايا",
      approachTitle: "طريقتنا في زيارات الأطفال",
      approachIntro: "نبقي الغرفة هادئة والشرح قصيراً. تحصل كل أسرة على:",
      approachPoints: [
        "فحص للأسنان واللثة بلغة يستطيع الطفل متابعتها",
        "إيضاح ما هو سليم وما يحتاج إلى عناية",
        "الوقاية أولاً، مع شرح خيارات العلاج للأهل",
        "نصيحة منزلية عن التفريش والفلورايد والوجبات",
      ],
      safetyTitle: "السلامة والعناية",
      safetyText:
        "يُناسب العلاج السن وعمر الطفل. إذا احتاج الإجراء إلى تخدير موضعي نشرحه قبل البدء. نحافظ على الأسنان اللبنية كلما كانت لا تزال تؤدي وظيفتها.",
      philosophyTitle: "فلسفتنا",
      philosophyText:
        "الطفل الذي يفهم الزيارة يعود إليها بطيب خاطر. نفضّل أن ننجز القليل بإتقان على أن نسرع في قائمة طويلة في أول موعد.",
      ctaTitle: "احجز فحصاً للطفل",
      ctaText: "الزيارة الأولى الهادئة هي أسهل مكان للبداية.",
      faqs: [
        {
          question: "متى أول زيارة لطفل لطبيب الأسنان؟",
          answer: "بعد ظهور الأسنان الأولى وقت مناسب، أو قبل ذلك إذا كان هناك قلق. ثم تتوالى المراجعات.",
        },
        {
          question: "هل تستحق الأسنان اللبنية العلاج؟",
          answer: "نعم. تحفظ المسافة للأسنان الدائمة وتهم في الأكل والكلام. والسن اللبني المتسوس قد يسبب ألماً والتهاباً.",
        },
        {
          question: "ماذا لو كان طفلي خائفاً؟",
          answer: "أخبرنا عند الحجز. يمكن أن نبدأ بجولة قصيرة وفحص بسيط، ونؤجل العلاج إلى زيارة يكون فيها الطفل مستعداً.",
        },
        {
          question: "هل تغني الحشوات الوقائية عن التفريش؟",
          answer: "لا. تغطي أخاديد بعض الأسنان الخلفية. يبقى التفريش والفلورايد والغذاء هما الأساس.",
        },
        {
          question: "ماذا أفعل بعد ضربة على السن؟",
          answer: "اتصل بنا في اليوم نفسه. أحضر الطفل حتى نرى السن واللثة، وأبقِ السن الدائم الساقط رطباً إن أمكن.",
        },
      ],
    },
  },
  {
    slug: "implantology",
    metaTitle: "Dental Implants in Isa Town",
    metaDescription:
      "Dental implants at Mazaya Dental Center in Isa Town, Bahrain. A planned way to replace missing teeth with a consultation before treatment.",
    heroImage: "/DSC02182.webp",
    detailImage: "/DSC02163.webp",
    en: {
      eyebrow: "Implants",
      heroTitle: "A Reliable Option for Tooth Replacement",
      heroLead:
        "At Mazaya Dental Center, we replace missing teeth with dental implants designed to look and feel like your own. Our implant team in Isa Town plans each case digitally, so you know what to expect before treatment begins.",
      heroSupport:
        "Implants restore both function and appearance, and are designed to blend naturally with your smile.",
      heroImageAlt: "Consultation space at Mazaya Dental Center",
      whatTitle: "What Are Dental Implants?",
      whatBody:
        "Dental implants act as artificial tooth roots placed into the jawbone to support crowns, bridges or dentures. They are usually made from titanium, which is widely used in dentistry and medicine.",
      whatPoints: [
        "Strong and stable once healed",
        "Natural in appearance",
        "Do not rely on neighbouring teeth",
        "Help support the jawbone",
      ],
      diagramLabel: "Implant post, abutment and crown",
      whyTitle: "Why Patients Choose Implants",
      whyPoints: [
        "You are missing one or more teeth",
        "Your dentures feel loose or uncomfortable",
        "You want a long-term replacement option",
        "You prefer not to alter healthy neighbouring teeth",
      ],
      benefitsTitle: "Benefits of Dental Implants",
      benefits: [
        { title: "Function", text: "Helps restore chewing and speaking." },
        { title: "Appearance", text: "Designed to blend with your own teeth." },
        { title: "Stability", text: "Fixed in place, unlike some dentures." },
        { title: "Bone support", text: "Helps maintain bone where a tooth is missing." },
      ],
      suitableTitle: "Are Implants Suitable for Everyone?",
      suitableBody:
        "Implants are durable and suit many situations, but each case must be assessed. Factors such as bone density, gum health, bite force and implant position all affect the outcome. Conditions like uncontrolled diabetes, active gum disease and heavy smoking can also affect healing.",
      suitableClose: "We evaluate your case individually to recommend the most appropriate option.",
      suitableImageAlt: "Mazaya Dental Center clinical team",
      approachTitle: "Our Approach to Implant Dentistry",
      approachIntro:
        "We provide implant care that is evidence-based, minimally invasive and patient-focused. Every patient receives:",
      approachPoints: [
        "A thorough jawbone and oral health assessment",
        "A clear discussion of your options",
        "A personalised treatment plan with costs explained",
        "Collaboration with other specialists when needed",
      ],
      safetyTitle: "Safety and Regulation",
      safetyText:
        "Implant treatment is planned after a clinical examination. The dentist explains the materials proposed for your case, the number of visits and what healing usually involves before you decide.",
      philosophyTitle: "Our Philosophy",
      philosophyText:
        "Replacing a tooth is about more than restoring your bite. We take the time to explain each step, so you can make decisions with clear, honest information.",
      ctaTitle: "Book an Implant Consultation",
      ctaText: "Explore your options and find out whether implants are right for you.",
      faqs: [
        {
          question: "How long do dental implants last?",
          answer:
            "With good oral hygiene and regular check-ups, implants can last many years. It depends on your health, habits and care.",
        },
        {
          question: "Is the implant procedure painful?",
          answer: "The implant is placed under local anaesthesia. Some swelling afterwards is normal.",
        },
        {
          question: "How many visits will I need?",
          answer: "Usually an assessment, a placement visit and one or more visits for the final restoration.",
        },
        {
          question: "What if I don't have enough bone?",
          answer: "A bone graft can sometimes rebuild the area first. Your dentist will advise.",
        },
        {
          question: "Can overseas patients be treated?",
          answer: "Yes, treatment can often be planned around your stay. Contact us before you travel.",
        },
      ],
    },
    ar: {
      eyebrow: "زراعة الأسنان",
      heroTitle: "خيار موثوق لاستبدال الأسنان",
      heroLead:
        "في مركز مزايا لطب الأسنان نستبدل الأسنان المفقودة بزرعات مصممة لتشبه أسنانك في الشكل والإحساس. يخطط فريق الزراعة في مدينة عيسى كل حالة رقمياً، حتى تعرف ما تتوقعه قبل بدء العلاج.",
      heroSupport: "تعيد الزراعة الوظيفة والمظهر، وتُصمم لتنسجم طبيعياً مع ابتسامتك.",
      heroImageAlt: "مساحة الاستشارة في مركز مزايا",
      whatTitle: "ما هي زراعة الأسنان؟",
      whatBody:
        "تعمل الزرعة كجذر صناعي يوضع في عظم الفك ليحمل تاجاً أو جسراً أو طقماً. تُصنع عادة من التيتانيوم، وهو معدن واسع الاستخدام في طب الأسنان والطب.",
      whatPoints: [
        "قوية وثابتة بعد الالتئام",
        "طبيعية في المظهر",
        "لا تعتمد على الأسنان المجاورة",
        "تساعد على دعم عظم الفك",
      ],
      diagramLabel: "جسم الزرعة والدعامة والتاج",
      whyTitle: "لماذا يختار المرضى الزراعة",
      whyPoints: [
        "لديك سن مفقود أو أكثر",
        "طقم الأسنان مرتخٍ أو غير مريح",
        "تريد خيار استبدال طويل الأمد",
        "تفضل عدم برد الأسنان المجاورة السليمة",
      ],
      benefitsTitle: "فوائد زراعة الأسنان",
      benefits: [
        { title: "الوظيفة", text: "تساعد على استعادة المضغ والكلام." },
        { title: "المظهر", text: "تُصمم لتنسجم مع أسنانك." },
        { title: "الثبات", text: "ثابتة في مكانها بخلاف بعض الأطقم." },
        { title: "دعم العظم", text: "تساعد على الحفاظ على العظم في موضع السن المفقود." },
      ],
      suitableTitle: "هل تناسب الزراعة الجميع؟",
      suitableBody:
        "الزراعات متينة وتناسب حالات كثيرة، لكن كل حالة تحتاج إلى تقييم. تؤثر كثافة العظم وصحة اللثة وقوة العضة وموضع الزرعة على النتيجة. كما قد يؤثر السكري غير المضبوط وأمراض اللثة النشطة والتدخين الكثير على الالتئام.",
      suitableClose: "نقيّم حالتك بشكل فردي لنقترح الخيار الأنسب.",
      suitableImageAlt: "الفريق السريري في مركز مزايا",
      approachTitle: "طريقتنا في زراعة الأسنان",
      approachIntro: "نقدم رعاية مبنية على التقييم، بأقل تدخل ممكن، وتركز على المريض. يحصل كل مريض على:",
      approachPoints: [
        "تقييم دقيق لعظم الفك وصحة الفم",
        "شرح واضح للخيارات",
        "خطة علاج خاصة مع توضيح التكلفة",
        "التعاون مع تخصصات أخرى عند الحاجة",
      ],
      safetyTitle: "السلامة",
      safetyText:
        "تُخطط الزراعة بعد الفحص السريري. يشرح الطبيب المواد المقترحة لحالتك وعدد الزيارات وما يشمله الالتئام عادة قبل أن تقرر.",
      philosophyTitle: "فلسفتنا",
      philosophyText:
        "استبدال السن أكثر من استعادة العضة. نأخذ الوقت لشرح كل خطوة حتى تقرر بمعلومات واضحة وصادقة.",
      ctaTitle: "احجز استشارة زراعة",
      ctaText: "تعرّف على الخيارات واعرف ما إذا كانت الزراعة مناسبة لك.",
      faqs: [
        {
          question: "كم تدوم زراعة الأسنان؟",
          answer: "مع نظافة جيدة ومراجعات منتظمة يمكن أن تدوم الزراعة سنوات كثيرة. يعتمد ذلك على صحتك وعاداتك والعناية.",
        },
        {
          question: "هل إجراء الزراعة مؤلم؟",
          answer: "توضع الزرعة تحت التخدير الموضعي. بعض التورم بعد الإجراء أمر معتاد.",
        },
        {
          question: "كم زيارة أحتاج؟",
          answer: "عادة تقييم، ثم زيارة للزراعة، ثم زيارة أو أكثر للتركيبة النهائية.",
        },
        {
          question: "ماذا لو لم يكن العظم كافياً؟",
          answer: "يمكن أحياناً بناء المنطقة أولاً بطعم عظمي. يوجهك الطبيب حسب حالتك.",
        },
        {
          question: "هل يمكن علاج المرضى القادمين من الخارج؟",
          answer: "نعم، غالباً يمكن ترتيب العلاج حول مدة إقامتك. تواصل معنا قبل السفر.",
        },
      ],
    },
  },
  {
    slug: "prosthodontics",
    metaTitle: "Crowns, Bridges and Dentures in Isa Town",
    metaDescription:
      "Crowns, bridges, dentures and same-day restorations at Mazaya Dental Center in Isa Town, Bahrain.",
    heroImage: "/DSC02150.webp",
    detailImage: "/DSC02182.webp",
    en: {
      eyebrow: "Prosthodontics",
      heroTitle: "Restorations That Fit the Way You Bite",
      heroLead:
        "Mazaya Dental Center replaces worn, broken or missing teeth with crowns, bridges and dentures shaped to your bite. In Isa Town, digital planning supports our One-Day Dentistry service when a same-day restoration is suitable.",
      heroSupport:
        "The goal is a tooth that looks quiet in the smile and feels stable when you eat.",
      heroImageAlt: "Reception of Mazaya Dental Center in Isa Town",
      whatTitle: "What Is Prosthodontic Treatment?",
      whatBody:
        "Prosthodontics restores teeth that are damaged or missing. A crown covers a weakened tooth, a bridge replaces one or more teeth using neighbours for support, and a denture replaces several teeth. Veneers change the visible face of a tooth when the case suits them.",
      whatPoints: [
        "Crowns and bridges for damaged or missing teeth",
        "Partial and complete dentures",
        "Same-day crowns when the case allows",
        "Bite and appearance planned together",
      ],
      diagramLabel: "A crown seated over a prepared tooth",
      whyTitle: "Why Patients Choose Restorative Care",
      whyPoints: [
        "A tooth is cracked, heavily filled or worn down",
        "You are missing a tooth and want a fixed bridge",
        "A denture no longer fits comfortably",
        "You want a restoration finished with fewer visits",
      ],
      benefitsTitle: "Benefits of Restorative Treatment",
      benefits: [
        { title: "Strength", text: "A crown can protect a weakened tooth." },
        { title: "Replacement", text: "Bridges and dentures fill gaps in the smile." },
        { title: "Comfort", text: "Shape and bite are checked before you leave." },
        { title: "Time", text: "Some crowns can be made in a single visit." },
      ],
      suitableTitle: "Is a Crown, Bridge or Denture Right?",
      suitableBody:
        "The choice depends on how many teeth are missing, the health of the neighbouring teeth and the bite. A bridge needs suitable teeth beside the gap. A denture may be kinder if many teeth are missing. An implant is another option when a fixed tooth is preferred without using neighbours.",
      suitableClose: "We show you the realistic options, including when a same-day crown is not the right choice.",
      suitableImageAlt: "Treatment room prepared for restorative dentistry",
      approachTitle: "Our Approach to Restorations",
      approachIntro: "Fit and bite come before polish. Every patient receives:",
      approachPoints: [
        "An assessment of the tooth, the gum and the bite",
        "A clear choice between crown, bridge, denture or implant",
        "Costs and the number of visits explained first",
        "A check of comfort before the restoration is finished",
      ],
      safetyTitle: "Safety and Care",
      safetyText:
        "Teeth are prepared only as much as the restoration needs. You will know whether a tooth needs root treatment first, and how to look after a new crown, bridge or denture.",
      philosophyTitle: "Our Philosophy",
      philosophyText:
        "A restoration should disappear into everyday life. We would rather adjust the bite carefully than send you home hoping it will settle on its own.",
      ctaTitle: "Book a Restorative Consultation",
      ctaText: "Talk through crowns, bridges, dentures and whether a same-day visit is possible.",
      faqs: [
        {
          question: "What is One-Day Dentistry?",
          answer:
            "For suitable cases, a crown or similar restoration can be designed and fitted in one visit using digital scanning. Not every tooth qualifies. We will say so before treatment starts.",
        },
        {
          question: "How long does a crown last?",
          answer:
            "Many crowns last for years with good cleaning and reviews. Grinding, decay at the edge and gum problems can shorten that. We check the fit at review visits.",
        },
        {
          question: "Will a bridge damage the teeth beside the gap?",
          answer:
            "A bridge uses those teeth for support, so they are prepared. If they are healthy and you would rather not alter them, an implant may be discussed instead.",
        },
        {
          question: "Are dentures still an option?",
          answer:
            "Yes. Modern dentures remain a practical choice when several teeth are missing, and they can often be made more stable with a careful bite record.",
        },
        {
          question: "Can the shade match my other teeth?",
          answer:
            "We match shade and shape to the neighbouring teeth. Very white shades are only used if they suit the rest of the smile.",
        },
      ],
    },
    ar: {
      eyebrow: "تركيبات الأسنان",
      heroTitle: "ترميمات تناسب طريقة عضتك",
      heroLead:
        "يستبدل مركز مزايا الأسنان المتآكلة أو المكسورة أو المفقودة بتيجان وجسور وأطقم تُشكَّل حسب العضة. في مدينة عيسى يدعم التخطيط الرقمي خدمة طب الأسنان في يوم واحد عندما تكون التركيبة في الزيارة نفسها مناسبة.",
      heroSupport: "الهدف سن يبدو هادئاً في الابتسامة وثابتاً عند الأكل.",
      heroImageAlt: "استقبال مركز مزايا في مدينة عيسى",
      whatTitle: "ما هو علاج التركيبات؟",
      whatBody:
        "يعيد هذا التخصص بناء الأسنان المتضررة أو المفقودة. يغطي التاج سناً ضعيفاً، ويعوّض الجسر سناً أو أكثر بالاعتماد على الأسنان المجاورة، ويعوّض الطقم عدة أسنان. وتغيّر القشور الوجه الظاهر للسن عندما تناسب الحالة.",
      whatPoints: [
        "تيجان وجسور للأسنان المتضررة أو المفقودة",
        "أطقم جزئية وكاملة",
        "تيجان في اليوم نفسه عندما تسمح الحالة",
        "تخطيط العضة والمظهر معاً",
      ],
      diagramLabel: "تاج يثبت فوق سن محضّر",
      whyTitle: "لماذا يختار المرضى الترميم",
      whyPoints: [
        "سن متشقق أو محشو بكثرة أو متآكل",
        "سن مفقود وتريد جسراً ثابتاً",
        "طقم لم يعد مريحاً",
        "تريد تركيبة بعدد زيارات أقل",
      ],
      benefitsTitle: "فوائد العلاج الترميمي",
      benefits: [
        { title: "القوة", text: "يمكن للتاج أن يحمي سناً ضعيفاً." },
        { title: "التعويض", text: "تملأ الجسور والأطقم فراغات الابتسامة." },
        { title: "الراحة", text: "تُفحص الشكل والعضة قبل المغادرة." },
        { title: "الوقت", text: "يمكن صنع بعض التيجان في زيارة واحدة." },
      ],
      suitableTitle: "هل التاج أو الجسر أو الطقم هو المناسب؟",
      suitableBody:
        "يعتمد الاختيار على عدد الأسنان المفقودة وصحة الأسنان المجاورة والعضة. يحتاج الجسر إلى أسنان مناسبة بجانب الفراغ. وقد يكون الطقم ألطف إذا فُقدت أسنان كثيرة. والزراعة خيار آخر عندما يُفضَّل سن ثابت دون استخدام الأسنان المجاورة.",
      suitableClose: "نعرض الخيارات الواقعية، بما في ذلك متى لا يكون تاج اليوم الواحد هو الاختيار الصحيح.",
      suitableImageAlt: "غرفة علاج مجهزة لترميم الأسنان",
      approachTitle: "طريقتنا في الترميم",
      approachIntro: "الانطباق والعضة قبل اللمعان. يحصل كل مريض على:",
      approachPoints: [
        "تقييم للسن واللثة والعضة",
        "اختيار واضح بين التاج والجسر والطقم والزراعة",
        "شرح التكلفة وعدد الزيارات أولاً",
        "فحص الراحة قبل إنهاء التركيبة",
      ],
      safetyTitle: "السلامة والعناية",
      safetyText:
        "يُحضَّر السن بالمقدار الذي تحتاجه التركيبة فقط. ستعرف ما إذا كان السن يحتاج علاج عصب أولاً، وكيف تعتني بالتاج أو الجسر أو الطقم الجديد.",
      philosophyTitle: "فلسفتنا",
      philosophyText:
        "ينبغي أن تختفي التركيبة في الحياة اليومية. نفضّل ضبط العضة بعناية على أن نرسلك إلى المنزل على أمل أن تتحسن وحدها.",
      ctaTitle: "احجز استشارة ترميم",
      ctaText: "نتحدث عن التيجان والجسور والأطقم وإمكانية زيارة في اليوم نفسه.",
      faqs: [
        {
          question: "ما هو طب الأسنان في يوم واحد؟",
          answer:
            "في الحالات المناسبة يمكن تصميم تاج أو تركيبة مشابهة وتركيبها في زيارة واحدة بالمسح الرقمي. ليست كل الأسنان مؤهلة، ونقول ذلك قبل بدء العلاج.",
        },
        {
          question: "كم يدوم التاج؟",
          answer: "تدوم تيجان كثيرة لسنوات مع التنظيف والمراجعة. قد يقصّر الصرير أو التسوس عند الحافة أو مشكلات اللثة هذه المدة.",
        },
        {
          question: "هل يضر الجسر الأسنان المجاورة؟",
          answer: "يعتمد الجسر عليها فتُحضَّر. إذا كانت سليمة وتفضل عدم المساس بها، يمكن مناقشة الزراعة.",
        },
        {
          question: "هل ما زال الطقم خياراً؟",
          answer: "نعم. يبقى الطقم خياراً عملياً عند فقدان عدة أسنان، ويمكن تحسين ثباته بتسجيل عضة دقيق.",
        },
        {
          question: "هل يمكن مطابقة اللون؟",
          answer: "نطابق الدرجة والشكل مع الأسنان المجاورة. لا نستخدم درجات شديدة البياض إلا إذا ناسبت بقية الابتسامة.",
        },
      ],
    },
  },
  {
    slug: "periodontics",
    metaTitle: "Gum Treatment in Isa Town",
    metaDescription:
      "Gum assessment and periodontal treatment at Mazaya Dental Center in Isa Town, Bahrain. Care for bleeding gums, recession and bone support.",
    heroImage: "/DSC02187.webp",
    detailImage: "/DSC02180.webp",
    en: {
      eyebrow: "Gum care",
      heroTitle: "Healthy Gums Under Every Restoration",
      heroLead:
        "Mazaya Dental Center treats gum disease before it quietly loosens teeth. In Isa Town we measure the gums, explain what the numbers mean, and start with cleaning that reaches below the gum line when that is what the case needs.",
      heroSupport: "Stable gums are also the foundation for crowns, orthodontics and implants.",
      heroImageAlt: "Treatment room at Mazaya Dental Center",
      whatTitle: "What Is Periodontal Treatment?",
      whatBody:
        "Periodontics cares for the gums and the bone that hold teeth in place. Early gum inflammation can often be reversed. More established disease needs deeper cleaning, and sometimes surgical care, to reduce pockets and protect the remaining support.",
      whatPoints: [
        "Assessment of bleeding, pockets and bone levels",
        "Deep cleaning where plaque sits below the gum",
        "Advice that makes daily cleaning realistic",
        "Review so we can see if the gums have settled",
      ],
      diagramLabel: "Gum line, tooth and supporting bone",
      whyTitle: "Why Patients Come for Gum Care",
      whyPoints: [
        "Gums bleed when you brush or floss",
        "Teeth feel loose or look longer than before",
        "You have been told you need implants or braces",
        "Bad breath persists after normal brushing",
      ],
      benefitsTitle: "Benefits of Gum Treatment",
      benefits: [
        { title: "Comfort", text: "Bleeding and tenderness often improve after cleaning." },
        { title: "Support", text: "Aims to protect the bone that holds the teeth." },
        { title: "Planning", text: "Gums are stabilised before other treatment." },
        { title: "Maintenance", text: "Reviews catch changes early." },
      ],
      suitableTitle: "Does Every Bleeding Gum Need Surgery?",
      suitableBody:
        "No. Many cases respond to thorough cleaning and better home care. Surgery is considered when pockets stay deep after that, or when gum recession needs coverage. Smoking and unstable diabetes make healing harder, so we talk about those openly.",
      suitableClose: "We tell you which stage you are at, and what can realistically improve.",
      suitableImageAlt: "Digital X-ray display in a Mazaya treatment room",
      approachTitle: "Our Approach to Gum Health",
      approachIntro: "We measure first, then treat what the measurements show. Every patient receives:",
      approachPoints: [
        "A gum chart and any X-rays needed to see bone levels",
        "A plain explanation of early inflammation versus established disease",
        "Cleaning matched to the depth of the problem",
        "A review visit to check healing, not a single appointment and goodbye",
      ],
      safetyTitle: "Safety and Care",
      safetyText:
        "Deep cleaning is done with local anaesthetic when the gums are sensitive. You may have tenderness for a few days. We explain how to keep the area clean without irritating it.",
      philosophyTitle: "Our Philosophy",
      philosophyText:
        "Gum care is quiet work, but it decides how long teeth stay comfortable. We would rather show you the chart than use vague words like 'a bit of gum trouble'.",
      ctaTitle: "Book a Gum Assessment",
      ctaText: "Find out whether cleaning, a review or further treatment is the right start.",
      faqs: [
        {
          question: "Why do my gums bleed?",
          answer:
            "Bleeding is often a sign of inflammation from plaque left at the gum line. It can also relate to brushing that is too hard, or to deeper disease. An assessment tells those apart.",
        },
        {
          question: "Will deep cleaning hurt?",
          answer:
            "The area is numbed when needed. Afterwards the gums can feel tender and the teeth briefly more sensitive. That usually eases as the gums settle.",
        },
        {
          question: "Can lost bone grow back?",
          answer:
            "Treatment aims to stop further loss and let the gums heal. Significant bone does not reliably return on its own. Your dentist will say if any regenerative option is realistic.",
        },
        {
          question: "Do I need gum treatment before implants or braces?",
          answer:
            "Active gum disease is usually brought under control first. Moving teeth or placing implants on inflamed gums makes the result less predictable.",
        },
        {
          question: "How often should gums be reviewed?",
          answer:
            "After active treatment, reviews are often every three to six months. The interval depends on how stable the pockets are and how easy the teeth are to keep clean.",
        },
      ],
    },
    ar: {
      eyebrow: "صحة اللثة",
      heroTitle: "لثة سليمة تحت كل تركيبة",
      heroLead:
        "يعالج مركز مزايا أمراض اللثة قبل أن تخلخل الأسنان بهدوء. في مدينة عيسى نقيس اللثة ونشرح معنى الأرقام، ونبدأ بتنظيف يصل تحت حافة اللثة عندما تحتاج الحالة إلى ذلك.",
      heroSupport: "اللثة المستقرة هي أيضاً أساس التيجان والتقويم والزراعة.",
      heroImageAlt: "غرفة علاج في مركز مزايا",
      whatTitle: "ما هو علاج اللثة؟",
      whatBody:
        "يهتم هذا التخصص باللثة والعظم الذي يثبت الأسنان. يمكن غالباً عكس التهاب اللثة المبكر. أما المرض الأعمق فيحتاج تنظيفاً عميقاً، وأحياناً تدخلاً جراحياً، لتقليل الجيوب وحماية الدعم المتبقي.",
      whatPoints: [
        "تقييم النزف والجيوب ومستوى العظم",
        "تنظيف عميق حيث تتراكم اللويحة تحت اللثة",
        "نصيحة تجعل التنظيف اليومي واقعياً",
        "مراجعة لمعرفة ما إذا استقرت اللثة",
      ],
      diagramLabel: "حافة اللثة والسن والعظم الداعم",
      whyTitle: "لماذا يأتي المرضى لعلاج اللثة",
      whyPoints: [
        "تنزف اللثة عند التفريش أو الخيط",
        "الأسنان تبدو أطول أو تشعر بارتخاء",
        "قيل لك إنك تحتاج زراعة أو تقويماً",
        "رائحة الفم مستمرة بعد التفريش المعتاد",
      ],
      benefitsTitle: "فوائد علاج اللثة",
      benefits: [
        { title: "الراحة", text: "غالباً يتحسن النزف والإيلام بعد التنظيف." },
        { title: "الدعم", text: "يهدف إلى حماية العظم الذي يحمل الأسنان." },
        { title: "التخطيط", text: "تُستقر اللثة قبل العلاجات الأخرى." },
        { title: "المتابعة", text: "المراجعات تكتشف التغير مبكراً." },
      ],
      suitableTitle: "هل كل نزف لثوي يحتاج جراحة؟",
      suitableBody:
        "لا. تستجيب حالات كثيرة للتنظيف الجيد والعناية المنزلية. تُبحث الجراحة إذا بقيت الجيوب عميقة بعد ذلك، أو إذا احتاج انحسار اللثة إلى تغطية. التدخين والسكري غير المستقر يصعّبان الالتئام، لذلك نتحدث عنهما بصراحة.",
      suitableClose: "نخبرك في أي مرحلة أنت، وما الذي يمكن أن يتحسن فعلاً.",
      suitableImageAlt: "شاشة أشعة رقمية في غرفة علاج بمزايا",
      approachTitle: "طريقتنا في صحة اللثة",
      approachIntro: "نقيس أولاً ثم نعالج ما تظهره القياسات. يحصل كل مريض على:",
      approachPoints: [
        "مخطط للثة وأشعة عند الحاجة لرؤية مستوى العظم",
        "شرح واضح للالتهاب المبكر مقابل المرض المتقدم",
        "تنظيف يناسب عمق المشكلة",
        "زيارة مراجعة للتحقق من الالتئام",
      ],
      safetyTitle: "السلامة والعناية",
      safetyText:
        "يُجرى التنظيف العميق مع تخدير موضعي إذا كانت اللثة حساسة. قد تشعر بإيلام لعدة أيام. نشرح كيف تبقي المنطقة نظيفة دون تخريشها.",
      philosophyTitle: "فلسفتنا",
      philosophyText:
        "عناية اللثة عمل هادئ، لكنه يقرر كم تبقى الأسنان مريحة. نفضّل أن نريك المخطط على استخدام عبارات مبهمة.",
      ctaTitle: "احجز تقييم اللثة",
      ctaText: "اعرف ما إذا كانت البداية تنظيفاً أو مراجعة أو علاجاً إضافياً.",
      faqs: [
        {
          question: "لماذا تنزف لثتي؟",
          answer: "غالباً علامة التهاب بسبب اللويحة عند حافة اللثة. قد يرتبط أيضاً بتفريش قاسٍ أو بمرض أعمق. التقييم يفرّق بينها.",
        },
        {
          question: "هل التنظيف العميق مؤلم؟",
          answer: "تُخدَّر المنطقة عند الحاجة. بعد ذلك قد تشعر اللثة بالإيلام والأسنان بحساسية مؤقتة، وغالباً يهدأ ذلك مع استقرار اللثة.",
        },
        {
          question: "هل يعود العظم المفقود؟",
          answer: "يهدف العلاج إلى إيقاف المزيد من الفقد ومساعدة اللثة على الالتئام. لا يعود العظم المفقود بشكل كبير من تلقاء نفسه دائماً.",
        },
        {
          question: "هل أحتاج علاج اللثة قبل الزراعة أو التقويم؟",
          answer: "عادة نعم إذا كان هناك مرض نشط. تحريك الأسنان أو الزراعة على لثة ملتهبة يجعل النتيجة أقل قابلية للتوقع.",
        },
        {
          question: "كم مرة تُراجع اللثة؟",
          answer: "بعد العلاج النشط غالباً كل ثلاثة إلى ستة أشهر، حسب استقرار الجيوب وسهولة التنظيف.",
        },
      ],
    },
  },
  {
    slug: "endodontics",
    metaTitle: "Root Canal Treatment in Isa Town",
    metaDescription:
      "Root canal treatment at Mazaya Dental Center in Isa Town, Bahrain, to relieve tooth pain and keep a natural tooth when it can be saved.",
    heroImage: "/DSC02180.webp",
    detailImage: "/DSC02182.webp",
    en: {
      eyebrow: "Root canal",
      heroTitle: "Relief for a Tooth Worth Keeping",
      heroLead:
        "Mazaya Dental Center provides root canal treatment for teeth that are inflamed or infected inside. In Isa Town the aim is straightforward: settle the pain and keep your own tooth when it can still be restored.",
      heroSupport:
        "You will know before treatment whether the tooth is a good candidate, or whether removal is the more honest option.",
      heroImageAlt: "Treatment room with a dental X-ray on screen at Mazaya",
      whatTitle: "What Is Root Canal Treatment?",
      whatBody:
        "Inside each tooth is a soft space with nerves and blood vessels. When that tissue is inflamed or infected, root canal treatment removes it, cleans the canals and seals them. A crown is often needed afterwards so the tooth does not fracture.",
      whatPoints: [
        "Treats pain and infection inside the tooth",
        "Keeps the natural root in the jaw",
        "Done under local anaesthetic",
        "Usually finished with a filling or crown",
      ],
      diagramLabel: "A tooth in cross-section, with the canal sealed",
      whyTitle: "Why Patients Need Root Canal Care",
      whyPoints: [
        "A toothache that wakes you or lingers with heat",
        "Swelling or a pimple on the gum beside a tooth",
        "Deep decay or a crack reaching the nerve",
        "A tooth that is very tender to bite on",
      ],
      benefitsTitle: "Benefits of Saving the Tooth",
      benefits: [
        { title: "Relief", text: "Treatment is aimed at the source of the pain." },
        { title: "Preservation", text: "Keeps your own tooth when it can be restored." },
        { title: "Function", text: "A sealed tooth can return to normal chewing." },
        { title: "Clarity", text: "You are told if the tooth cannot be saved." },
      ],
      suitableTitle: "Can Every Painful Tooth Be Saved?",
      suitableBody:
        "No. A root canal is worthwhile when enough tooth remains to hold a filling or crown, and the root can be cleaned. A very deep crack, severe bone loss or a canal that cannot be negotiated may mean extraction is kinder.",
      suitableClose: "We look at the tooth and an X-ray before recommending treatment, retreatment or removal.",
      suitableImageAlt: "Dental surgery at Mazaya Dental Center",
      approachTitle: "Our Approach to Root Canal Treatment",
      approachIntro: "Comfort and a clean canal matter more than speed. Every patient receives:",
      approachPoints: [
        "An examination and X-ray to see the root and surrounding bone",
        "Local anaesthetic, and a pause if you are not fully numb",
        "Cleaning and sealing of the canals, sometimes over more than one visit",
        "A plan for the final filling or crown so the tooth is protected",
      ],
      safetyTitle: "Safety and Care",
      safetyText:
        "The procedure itself should not be painful once the tooth is numb. Mild tenderness on biting for a few days afterwards is common. Call us if swelling increases or pain is not settling.",
      philosophyTitle: "Our Philosophy",
      philosophyText:
        "Keeping a tooth is a good outcome only if that tooth can be made comfortable and strong. We will not talk you into a root canal that the remaining tooth cannot support.",
      ctaTitle: "Book a Tooth Pain Consultation",
      ctaText: "Have a painful tooth assessed and hear whether root canal treatment can save it.",
      faqs: [
        {
          question: "Is root canal treatment painful?",
          answer:
            "The visit is done under local anaesthetic so the tooth should feel numb. The treatment is meant to relieve an already painful tooth. Some tenderness afterwards is normal.",
        },
        {
          question: "How many visits will I need?",
          answer:
            "Some teeth are cleaned and sealed in one visit. Infected or complicated teeth may need two. A crown, if required, is a further visit.",
        },
        {
          question: "Why would I need a crown afterwards?",
          answer:
            "A root-treated tooth is more brittle, especially a back tooth. A crown helps protect it from cracking when you chew.",
        },
        {
          question: "What if I had a root canal that still hurts?",
          answer:
            "Retreatment is sometimes possible if a canal was missed or the seal has failed. We assess the tooth before promising that it can be redone.",
        },
        {
          question: "Is extraction simpler?",
          answer:
            "Removal is sometimes the better choice. If the tooth can be saved predictably, keeping it avoids a gap and the need for a bridge, denture or implant.",
        },
      ],
    },
    ar: {
      eyebrow: "علاج العصب",
      heroTitle: "راحة لسن يستحق البقاء",
      heroLead:
        "يقدم مركز مزايا علاج العصب للأسنان الملتهبة أو المصابة من الداخل. في مدينة عيسى الهدف واضح: تسكين الألم والحفاظ على سنك عندما يمكن ترميمه.",
      heroSupport: "ستعرف قبل العلاج ما إذا كان السن مرشحاً جيداً، أو إذا كان الخلع هو الخيار الأصدق.",
      heroImageAlt: "غرفة علاج مع أشعة سنية على الشاشة في مزايا",
      whatTitle: "ما هو علاج العصب؟",
      whatBody:
        "داخل كل سن فراغ طري فيه أعصاب وأوعية. عندما يلتهب هذا النسيج أو يصاب بالعدوى، يزيله علاج العصب وينظف القنوات ويغلقها. غالباً يلزم تاج بعد ذلك حتى لا ينكسر السن.",
      whatPoints: [
        "يعالج الألم والالتهاب داخل السن",
        "يبقي الجذر الطبيعي في الفك",
        "يُجرى تحت التخدير الموضعي",
        "يُنهى عادة بحشوة أو تاج",
      ],
      diagramLabel: "مقطع لسن مع قناة مغلقة",
      whyTitle: "لماذا يحتاج المرضى علاج العصب",
      whyPoints: [
        "ألم سن يوقظك أو يستمر مع الحرارة",
        "تورم أو بثرة على اللثة بجانب سن",
        "تسوس عميق أو شق وصل إلى العصب",
        "سن شديد الحساسية عند العض",
      ],
      benefitsTitle: "فوائد الحفاظ على السن",
      benefits: [
        { title: "الراحة", text: "يستهدف العلاج مصدر الألم." },
        { title: "الحفاظ", text: "يبقي سنك الطبيعي إذا أمكن ترميمه." },
        { title: "الوظيفة", text: "يمكن للسن المغلق أن يعود للمضغ المعتاد." },
        { title: "الوضوح", text: "نخبرك إذا لم يكن بالإمكان إنقاذ السن." },
      ],
      suitableTitle: "هل يمكن إنقاذ كل سن مؤلم؟",
      suitableBody:
        "لا. يكون علاج العصب مجدياً عندما يبقى من السن ما يكفي لحمل حشوة أو تاج، ويمكن تنظيف الجذر. الشق العميق أو فقد العظم الشديد أو قناة لا يمكن الوصول إليها قد يجعل الخلع ألطف.",
      suitableClose: "نفحص السن والأشعة قبل أن نوصي بالعلاج أو إعادته أو الخلع.",
      suitableImageAlt: "عيادة علاج في مركز مزايا",
      approachTitle: "طريقتنا في علاج العصب",
      approachIntro: "الراحة وتنظيف القناة أهم من السرعة. يحصل كل مريض على:",
      approachPoints: [
        "فحص وأشعة لرؤية الجذر والعظم المحيط",
        "تخدير موضعي، وتوقف إذا لم يكتمل الخدر",
        "تنظيف القنوات وإغلاقها، أحياناً على أكثر من زيارة",
        "خطة للحشوة أو التاج النهائي لحماية السن",
      ],
      safetyTitle: "السلامة والعناية",
      safetyText:
        "لا يفترض أن يكون الإجراء مؤلماً بعد تخدير السن. من الشائع شعور بإيلام عند العض لعدة أيام. اتصل بنا إذا زاد التورم أو لم يهدأ الألم.",
      philosophyTitle: "فلسفتنا",
      philosophyText:
        "الحفاظ على السن نتيجة جيدة فقط إذا أصبح مريحاً وقوياً. لن نقنعك بعلاج عصب لا يستطيع ما تبقى من السن تحمّله.",
      ctaTitle: "احجز استشارة لألم الأسنان",
      ctaText: "افحص السن المؤلم واعرف ما إذا كان علاج العصب قادراً على إنقاذه.",
      faqs: [
        {
          question: "هل علاج العصب مؤلم؟",
          answer: "تُجرى الزيارة تحت التخدير الموضعي فيفترض أن يكون السن مخدَّراً. العلاج يهدف إلى تسكين سن مؤلم أصلاً. بعض الإيلام بعده طبيعي.",
        },
        {
          question: "كم زيارة أحتاج؟",
          answer: "بعض الأسنان تُنظف وتُغلق في زيارة واحدة. الأسنان المصابة أو المعقدة قد تحتاج اثنتين. والتاج، إن لزم، زيارة إضافية.",
        },
        {
          question: "لماذا قد أحتاج تاجاً بعد ذلك؟",
          answer: "السن بعد علاج العصب أكثر هشاشة، خصوصاً الأسنان الخلفية. يساعد التاج على حمايته من الكسر أثناء المضغ.",
        },
        {
          question: "ماذا لو استمر الألم بعد علاج سابق؟",
          answer: "قد يمكن إعادة العلاج إذا فُقدت قناة أو فشل الإغلاق. نقيّم السن قبل الوعد بإمكانية الإعادة.",
        },
        {
          question: "هل الخلع أبسط؟",
          answer: "أحياناً يكون الخلع هو الأفضل. إذا أمكن إنقاذ السن بشكل متوقع، فإن بقاءه يجنّبك الفراغ والحاجة إلى جسر أو طقم أو زراعة.",
        },
      ],
    },
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
